#!/usr/bin/env python3
import argparse
import html
import json
import os
import re
import sys
import tempfile
from pathlib import Path


def ensure_anki_runtime():
    try:
        import anki  # noqa: F401
        return
    except ImportError:
        anki_python = (
            Path.home()
            / "Library/Application Support/AnkiProgramFiles/.venv/bin/python"
        )
        if anki_python.exists() and Path(sys.executable) != anki_python:
            os.execv(str(anki_python), [str(anki_python), *sys.argv])

        raise SystemExit(
            "Could not import Anki's Python package. Open Anki once so its "
            "runtime is installed, then rerun this script."
        )


def slide_title(slide):
    return (
        slide.get("title")
        or slide.get("heading")
        or slide.get("text")
        or slide.get("section")
        or "Untitled slide"
    )


def notes_html(slide):
    notes = slide.get("notes") or {}
    parts = []

    transition = notes.get("transition")
    if transition:
        parts.append("<h3>Transition</h3>")
        parts.append(f"<p>{html.escape(str(transition))}</p>")

    points = notes.get("points") or []
    if points:
        parts.append("<h3>Speaker Notes</h3>")
        parts.append("<ul>")
        for point in points:
            parts.append(f"<li>{html.escape(str(point))}</li>")
        parts.append("</ul>")

    if not parts:
        parts.append("<p>No speaker notes for this slide.</p>")

    return "\n".join(parts)


def note_css():
    return """
.card {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
  font-size: 20px;
  text-align: left;
  color: #111;
  background: #fff;
}
.meta {
  color: #666;
  font-size: 14px;
  margin: 0 0 12px;
}
.slide {
  text-align: center;
}
.slide img {
  max-width: 100%;
  height: auto;
}
h2 {
  font-size: 24px;
  margin: 0 0 18px;
}
h3 {
  font-size: 18px;
  margin: 20px 0 8px;
}
p {
  line-height: 1.45;
}
li {
  margin: 0 0 10px;
  line-height: 1.35;
}
""".strip()


def create_notetype(col):
    notetype = col.models.new("Slide Image to Speaker Notes")

    for field_name in ["SortKey", "SlideTitle", "SlideImage", "Notes"]:
        col.models.add_field(notetype, col.models.new_field(field_name))

    template = col.models.new_template("Slide -> Notes")
    template["qfmt"] = """
<div class="meta">{{SortKey}}</div>
<div class="slide">{{SlideImage}}</div>
""".strip()
    template["afmt"] = """
<div class="meta">{{SortKey}}</div>
<h2>{{SlideTitle}}</h2>
<div class="notes">{{Notes}}</div>
""".strip()
    col.models.add_template(notetype, template)
    notetype["css"] = note_css()
    col.models.add(notetype)
    return notetype


def validate_package(package_path, expected_cards):
    from anki.collection import Collection
    from anki.import_export_pb2 import (
        IMPORT_ANKI_PACKAGE_UPDATE_CONDITION_ALWAYS,
        ImportAnkiPackageOptions,
        ImportAnkiPackageRequest,
    )

    with tempfile.TemporaryDirectory(prefix="anki-validate-") as tmpdir:
        col = Collection(str(Path(tmpdir) / "validate.anki2"))
        options = ImportAnkiPackageOptions(
            merge_notetypes=True,
            update_notes=IMPORT_ANKI_PACKAGE_UPDATE_CONDITION_ALWAYS,
            update_notetypes=IMPORT_ANKI_PACKAGE_UPDATE_CONDITION_ALWAYS,
            with_scheduling=True,
            with_deck_configs=True,
        )
        col.import_anki_package(
            ImportAnkiPackageRequest(package_path=str(package_path), options=options)
        )
        count = col.card_count()
        dues = [row[0] for row in col.db.all("select due from cards order by due")]
        col.close(downgrade=True)

    if count != expected_cards:
        raise SystemExit(f"Validation failed: expected {expected_cards} cards, got {count}")
    if dues != list(range(1, expected_cards + 1)):
        raise SystemExit("Validation failed: cards are not sequentially due.")


def main():
    ensure_anki_runtime()

    from anki.collection import Collection, DeckIdLimit
    from anki.import_export_pb2 import ExportAnkiPackageOptions

    parser = argparse.ArgumentParser(
        description="Create an Anki .apkg from slide images and content.json notes."
    )
    parser.add_argument("--slides-dir", required=True, help="Directory containing current slide JPG/PNG images.")
    parser.add_argument("--content", default="content.json", help="Path to content.json.")
    parser.add_argument("--out", default="anki_build/teesside_keynote_slide_notes.apkg", help="Output .apkg path.")
    parser.add_argument("--deck-name", default="Teesside Keynote 2026::Slide Notes")
    parser.add_argument("--skip-validation", action="store_true")
    args = parser.parse_args()

    project_root = Path(__file__).resolve().parents[1]
    slides_dir = Path(args.slides_dir)
    if not slides_dir.is_absolute():
        slides_dir = project_root / slides_dir
    content_path = Path(args.content)
    if not content_path.is_absolute():
        content_path = project_root / content_path
    out_path = Path(args.out)
    if not out_path.is_absolute():
        out_path = project_root / out_path

    content = json.loads(content_path.read_text(encoding="utf-8"))
    slides = content["slides"]
    image_files = sorted(
        p for p in slides_dir.iterdir()
        if re.match(r"slide-\d\d-.*\.(jpe?g|png)$", p.name, re.IGNORECASE)
    )

    if len(image_files) != len(slides):
        raise SystemExit(f"Expected {len(slides)} slide images, found {len(image_files)} in {slides_dir}")

    out_path.parent.mkdir(parents=True, exist_ok=True)
    if out_path.exists():
        out_path.unlink()

    with tempfile.TemporaryDirectory(prefix="anki-build-") as tmpdir:
        collection_path = Path(tmpdir) / "source.anki2"
        col = Collection(str(collection_path))

        deck_id = col.decks.add_normal_deck_with_name(args.deck_name).id
        notetype = create_notetype(col)

        for index, (slide, image_path) in enumerate(zip(slides, image_files), start=1):
            title = slide_title(slide)
            sort_key = f"{index:03d} - {title}"
            media_name = col.media.add_file(str(image_path))

            note = col.new_note(notetype)
            note["SortKey"] = html.escape(sort_key)
            note["SlideTitle"] = html.escape(title)
            note["SlideImage"] = f'<img src="{html.escape(media_name)}">'
            note["Notes"] = notes_html(slide)
            note.set_tags_from_str("teesside keynote ai_infrastructure slide_notes")
            col.add_note(note, deck_id)

        export_options = ExportAnkiPackageOptions(
            with_scheduling=True,
            with_deck_configs=True,
            with_media=True,
            legacy=True,
        )
        exported_cards = col.export_anki_package(
            out_path=str(out_path),
            options=export_options,
            limit=DeckIdLimit(deck_id),
        )
        col.close(downgrade=True)

        if exported_cards != len(slides):
            raise SystemExit(f"Expected to export {len(slides)} cards, exported {exported_cards}")

    if not args.skip_validation:
        validate_package(out_path, len(slides))

    print(f"Created {out_path}")
    print(f"Cards: {len(slides)}")


if __name__ == "__main__":
    main()
