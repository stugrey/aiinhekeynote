#!/usr/bin/env python3
import argparse
import hashlib
import html
import json
import os
import re
import sqlite3
import time
import zipfile
from pathlib import Path


UNIT_SEPARATOR = "\x1f"


def checksum(text):
    return int(hashlib.sha1(text.encode("utf-8")).hexdigest()[:8], 16)


def stable_id(text, digits=13):
    value = int(hashlib.sha1(text.encode("utf-8")).hexdigest()[:digits], 16)
    return value


def guid(text):
    alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-"
    value = int(hashlib.sha1(text.encode("utf-8")).hexdigest(), 16)
    chars = []
    for _ in range(12):
        chars.append(alphabet[value & 0x3F])
        value >>= 6
    return "".join(chars)


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


def create_schema(db):
    db.executescript(
        """
        create table col (
          id              integer primary key,
          crt             integer not null,
          mod             integer not null,
          scm             integer not null,
          ver             integer not null,
          dty             integer not null,
          usn             integer not null,
          ls              integer not null,
          conf            text not null,
          models          text not null,
          decks           text not null,
          dconf           text not null,
          tags            text not null
        );

        create table notes (
          id              integer primary key,
          guid            text not null,
          mid             integer not null,
          mod             integer not null,
          usn             integer not null,
          tags            text not null,
          flds            text not null,
          sfld            text not null,
          csum            integer not null,
          flags           integer not null,
          data            text not null
        );

        create table cards (
          id              integer primary key,
          nid             integer not null,
          did             integer not null,
          ord             integer not null,
          mod             integer not null,
          usn             integer not null,
          type            integer not null,
          queue           integer not null,
          due             integer not null,
          ivl             integer not null,
          factor          integer not null,
          reps            integer not null,
          lapses          integer not null,
          left            integer not null,
          odue            integer not null,
          odid            integer not null,
          flags           integer not null,
          data            text not null
        );

        create table revlog (
          id              integer primary key,
          cid             integer not null,
          usn             integer not null,
          ease            integer not null,
          ivl             integer not null,
          lastIvl         integer not null,
          factor          integer not null,
          time            integer not null,
          type            integer not null
        );

        create table graves (
          usn             integer not null,
          oid             integer not null,
          type            integer not null
        );

        create index ix_notes_usn on notes (usn);
        create index ix_cards_usn on cards (usn);
        create index ix_revlog_usn on revlog (usn);
        create index ix_cards_nid on cards (nid);
        create index ix_cards_sched on cards (did, queue, due);
        create index ix_revlog_cid on revlog (cid);
        create index ix_notes_csum on notes (csum);
        """
    )


def default_deck_config(now):
    return {
        "1": {
            "id": 1,
            "mod": now,
            "name": "Default",
            "usn": 0,
            "maxTaken": 60,
            "autoplay": True,
            "timer": 0,
            "replayq": True,
            "new": {
                "delays": [1, 10],
                "ints": [1, 4, 7],
                "initialFactor": 2500,
                "separate": True,
                "order": 0,
                "perDay": 999,
                "bury": False,
            },
            "rev": {
                "perDay": 999,
                "ease4": 1.3,
                "fuzz": 0.05,
                "minSpace": 1,
                "ivlFct": 1,
                "maxIvl": 36500,
                "bury": False,
            },
            "lapse": {
                "delays": [10],
                "mult": 0,
                "minInt": 1,
                "leechFails": 8,
                "leechAction": 0,
            },
            "dyn": False,
        }
    }


def model(model_id, deck_id, now):
    return {
        str(model_id): {
            "id": model_id,
            "name": "Slide Image to Speaker Notes",
            "type": 0,
            "mod": now,
            "usn": -1,
            "sortf": 0,
            "did": deck_id,
            "tmpls": [
                {
                    "name": "Slide -> Notes",
                    "ord": 0,
                    "qfmt": """
<div class="meta">{{SortKey}}</div>
<div class="slide">{{SlideImage}}</div>
""".strip(),
                    "afmt": """
<div class="meta">{{SortKey}}</div>
<h2>{{SlideTitle}}</h2>
<div class="notes">{{Notes}}</div>
""".strip(),
                    "bqfmt": "",
                    "bafmt": "",
                    "did": None,
                }
            ],
            "flds": [
                {"name": "SortKey", "ord": 0, "sticky": False, "rtl": False, "font": "Arial", "size": 20},
                {"name": "SlideTitle", "ord": 1, "sticky": False, "rtl": False, "font": "Arial", "size": 20},
                {"name": "SlideImage", "ord": 2, "sticky": False, "rtl": False, "font": "Arial", "size": 20},
                {"name": "Notes", "ord": 3, "sticky": False, "rtl": False, "font": "Arial", "size": 20},
            ],
            "css": """
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
""".strip(),
            "latexPre": "\\documentclass[12pt]{article}",
            "latexPost": "\\end{document}",
            "req": [[0, "all", [2]]],
        }
    }


def main():
    parser = argparse.ArgumentParser(description="Create an Anki .apkg from slide images and content.json notes.")
    parser.add_argument("--slides-dir", required=True, help="Directory containing current slide JPG/PNG images.")
    parser.add_argument("--content", default="content.json", help="Path to content.json.")
    parser.add_argument("--out", default="anki_build/teesside_keynote_slide_notes.apkg", help="Output .apkg path.")
    parser.add_argument("--deck-name", default="Teesside Keynote 2026::Slide Notes")
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
    db_path = out_path.with_suffix(".anki2")
    if db_path.exists():
        db_path.unlink()
    if out_path.exists():
        out_path.unlink()

    now = int(time.time())
    base_ms = int(time.time() * 1000)
    deck_id = stable_id(args.deck_name)
    model_id = stable_id("Slide Image to Speaker Notes")

    db = sqlite3.connect(db_path)
    create_schema(db)

    decks = {
        str(deck_id): {
            "id": deck_id,
            "name": args.deck_name,
            "desc": "Slide image on the front, speaker notes on the back.",
            "mid": model_id,
            "mod": now,
            "usn": -1,
            "collapsed": False,
            "conf": 1,
            "dyn": 0,
            "extendNew": 0,
            "extendRev": 0,
        }
    }

    db.execute(
        "insert into col values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        (
            1,
            now // 86400,
            now,
            now,
            11,
            0,
            0,
            0,
            json.dumps({"nextPos": 1}),
            json.dumps(model(model_id, deck_id, now)),
            json.dumps(decks),
            json.dumps(default_deck_config(now)),
            json.dumps({}),
        ),
    )

    media = {}
    for index, (slide, image_path) in enumerate(zip(slides, image_files), start=1):
        title = slide_title(slide)
        sort_key = f"{index:03d} - {title}"
        media_name = f"teesside-keynote-{image_path.name}"
        image_html = f'<img src="{html.escape(media_name)}">'
        note_html = notes_html(slide)
        fields = UNIT_SEPARATOR.join(
            [
                html.escape(sort_key),
                html.escape(title),
                image_html,
                note_html,
            ]
        )

        note_id = base_ms + index
        card_id = base_ms + 100000 + index
        tags = "teesside keynote ai_infrastructure slide_notes "

        db.execute(
            "insert into notes values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            (
                note_id,
                guid(f"{args.deck_name}:{index}:{title}"),
                model_id,
                now,
                -1,
                tags,
                fields,
                sort_key,
                checksum(sort_key),
                0,
                "",
            ),
        )
        db.execute(
            "insert into cards values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            (
                card_id,
                note_id,
                deck_id,
                0,
                now,
                -1,
                0,
                0,
                index,
                0,
                2500,
                0,
                0,
                0,
                0,
                0,
                0,
                "",
            ),
        )
        media[str(index - 1)] = media_name

    db.commit()
    db.close()

    with zipfile.ZipFile(out_path, "w", zipfile.ZIP_DEFLATED) as package:
        package.write(db_path, "collection.anki2")
        package.writestr("media", json.dumps(media))
        for index, image_path in enumerate(image_files):
            package.write(image_path, str(index))

    db_path.unlink()
    print(f"Created {out_path}")
    print(f"Cards: {len(slides)}")


if __name__ == "__main__":
    main()
