#!/usr/bin/env python3
import argparse
import json
import math
import re
from datetime import datetime
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


PROFILES = {
    "paper-pro-move": {
        "size": (1696, 954),
        "dpi": 264,
        "suffix": "remarkable_paper_pro_move",
        "label": "reMarkable Paper Pro Move",
    },
    "remarkable-2-landscape": {
        "size": (1872, 1404),
        "dpi": 226,
        "suffix": "remarkable_2_landscape",
        "label": "reMarkable 2 landscape",
    },
}

FONT_REGULAR = "/System/Library/Fonts/Supplemental/Arial.ttf"
FONT_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"


def font(size, bold=False):
    path = FONT_BOLD if bold else FONT_REGULAR
    return ImageFont.truetype(path, size)


def timestamp():
    return datetime.now().strftime("%Y-%m-%dT%H-%M-%S")


def timestamped_pdf_path(path):
    if path.suffix:
        return path.with_name(f"{path.stem}_{timestamp()}{path.suffix}")
    return path.with_name(f"{path.name}_{timestamp()}.pdf")


def slide_title(slide):
    return (
        slide.get("title")
        or slide.get("heading")
        or slide.get("text")
        or slide.get("section")
        or "Untitled slide"
    )


def notes_for(slide):
    notes = slide.get("notes") or {}
    points = []
    transition = notes.get("transition")
    if transition:
        points.append(("Transition", [str(transition)]))

    note_points = [str(point) for point in notes.get("points") or []]
    if note_points:
        points.append(("Speaker notes", note_points))

    if not points:
        points.append(("Speaker notes", ["No speaker notes for this slide."]))

    return points


def wrap_text(draw, text, text_font, max_width):
    words = text.split()
    lines = []
    line = ""

    for word in words:
        candidate = word if not line else f"{line} {word}"
        if draw.textlength(candidate, font=text_font) <= max_width:
            line = candidate
            continue
        if line:
            lines.append(line)
        line = word

    if line:
        lines.append(line)
    return lines


def text_height(draw, sections, width, body_font, heading_font, gap, line_gap):
    total = 0
    for heading, points in sections:
        total += heading_font.size + gap
        for point in points:
            lines = wrap_text(draw, point, body_font, width)
            total += max(1, len(lines)) * (body_font.size + line_gap)
            total += gap
        total += gap
    return total


def draw_wrapped(draw, xy, text, text_font, fill, width, line_gap, bullet=None):
    x, y = xy
    bullet_width = 0
    if bullet:
        bullet_width = int(text_font.size * 1.1)
        draw.text((x, y), bullet, font=text_font, fill=fill)

    for line in wrap_text(draw, text, text_font, width - bullet_width):
        draw.text((x + bullet_width, y), line, font=text_font, fill=fill)
        y += text_font.size + line_gap
    return y


def make_slide_page(image_path, page_size):
    page_w, page_h = page_size
    page = Image.new("RGB", page_size, "white")
    slide = Image.open(image_path).convert("RGB")
    slide = slide.resize(page_size, Image.Resampling.LANCZOS)
    page.paste(slide, (0, 0))
    return page


def make_notes_page(slide, index, total, page_size, profile_label):
    page_w, page_h = page_size
    margin = int(page_w * 0.055)
    page = Image.new("RGB", page_size, "#fbfbf8")
    draw = ImageDraw.Draw(page)

    title = slide_title(slide)
    header_font = font(max(28, int(page_h * 0.043)), bold=True)
    small_font = font(max(18, int(page_h * 0.022)))
    heading_size = max(24, int(page_h * 0.034))
    body_size = max(22, int(page_h * 0.031))

    top = margin
    draw.text((margin, top), f"Slide {index:02d} of {total}", font=small_font, fill="#666666")
    draw.text(
        (page_w - margin - int(page_w * 0.22), top),
        profile_label,
        font=small_font,
        fill="#777777",
    )

    title_top = top + small_font.size + 22
    title_lines = wrap_text(draw, title, header_font, page_w - (2 * margin))
    for line in title_lines[:3]:
        draw.text((margin, title_top), line, font=header_font, fill="#111111")
        title_top += header_font.size + 8

    rule_y = title_top + 18
    draw.line((margin, rule_y, page_w - margin, rule_y), fill="#111111", width=3)

    sections = notes_for(slide)
    content_top = rule_y + 32
    content_height = page_h - content_top - margin
    content_width = page_w - (2 * margin)

    for candidate_body_size in range(body_size, 17, -1):
        body_font = font(candidate_body_size)
        heading_font = font(max(20, int(candidate_body_size * 1.08)), bold=True)
        line_gap = max(7, int(candidate_body_size * 0.32))
        gap = max(10, int(candidate_body_size * 0.45))
        if text_height(draw, sections, content_width, body_font, heading_font, gap, line_gap) <= content_height:
            columns = 1
            break
    else:
        columns = 2
        body_font = font(max(17, int(body_size * 0.78)))
        heading_font = font(max(19, int(body_size * 0.84)), bold=True)
        line_gap = max(5, int(body_font.size * 0.26))
        gap = max(8, int(body_font.size * 0.36))

    if columns == 1:
        y = content_top
        for heading, points in sections:
            draw.text((margin, y), heading.upper(), font=heading_font, fill="#111111")
            y += heading_font.size + gap
            for point in points:
                y = draw_wrapped(
                    draw,
                    (margin, y),
                    point,
                    body_font,
                    "#111111",
                    content_width,
                    line_gap,
                    bullet="-",
                )
                y += gap
            y += gap
    else:
        column_gap = int(page_w * 0.04)
        column_width = (content_width - column_gap) // 2
        items = []
        for heading, points in sections:
            items.append(("heading", heading))
            for point in points:
                items.append(("point", point))

        column_targets = [[], []]
        heights = [0, 0]
        for kind, value in items:
            estimated = heading_font.size + gap if kind == "heading" else (
                len(wrap_text(draw, value, body_font, column_width - int(body_font.size * 1.1)))
                * (body_font.size + line_gap)
                + gap
            )
            target = 0 if heights[0] <= heights[1] else 1
            column_targets[target].append((kind, value))
            heights[target] += estimated

        for col, entries in enumerate(column_targets):
            x = margin + col * (column_width + column_gap)
            y = content_top
            for kind, value in entries:
                if kind == "heading":
                    draw.text((x, y), value.upper(), font=heading_font, fill="#111111")
                    y += heading_font.size + gap
                else:
                    y = draw_wrapped(
                        draw,
                        (x, y),
                        value,
                        body_font,
                        "#111111",
                        column_width,
                        line_gap,
                        bullet="-",
                    )
                    y += gap

    return page


def build_pdf(content_path, slides_dir, out_path, profile):
    profile_spec = PROFILES[profile]
    page_size = profile_spec["size"]
    content = json.loads(content_path.read_text(encoding="utf-8"))
    slides = content["slides"]
    image_files = sorted(
        p for p in slides_dir.iterdir()
        if re.match(r"slide-\d\d-.*\.(jpe?g|png)$", p.name, re.IGNORECASE)
    )

    if len(image_files) != len(slides):
        raise SystemExit(f"Expected {len(slides)} slide images, found {len(image_files)} in {slides_dir}")

    pages = []
    for index, (slide, image_path) in enumerate(zip(slides, image_files), start=1):
        pages.append(make_slide_page(image_path, page_size))
        pages.append(make_notes_page(slide, index, len(slides), page_size, profile_spec["label"]))

    out_path.parent.mkdir(parents=True, exist_ok=True)
    pages[0].save(
        out_path,
        "PDF",
        save_all=True,
        append_images=pages[1:],
        resolution=profile_spec["dpi"],
    )
    return len(pages)


def main():
    parser = argparse.ArgumentParser(description="Create slide/notes practice PDFs for reMarkable devices.")
    parser.add_argument("--content", default="content.json")
    parser.add_argument("--slides-dir", required=True)
    parser.add_argument("--profile", choices=sorted(PROFILES), required=True)
    parser.add_argument("--out", help="Output PDF path.")
    args = parser.parse_args()

    root = Path(__file__).resolve().parents[1]
    content_path = Path(args.content)
    if not content_path.is_absolute():
        content_path = root / content_path
    slides_dir = Path(args.slides_dir)
    if not slides_dir.is_absolute():
        slides_dir = root / slides_dir

    profile = PROFILES[args.profile]
    out_path = Path(args.out) if args.out else root / "output/pdf" / f"teesside_keynote_practice_{profile['suffix']}.pdf"
    if not out_path.is_absolute():
        out_path = root / out_path
    out_path = timestamped_pdf_path(out_path)

    page_count = build_pdf(content_path, slides_dir, out_path, args.profile)
    print(f"Created {out_path}")
    print(f"Pages: {page_count}")


if __name__ == "__main__":
    main()
