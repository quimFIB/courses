#!/usr/bin/env python3
"""Regenerate build/index.md and build/syllabus.json from CURRICULUM.html's unit cards.

The page is the agreed syllabus; these two files are derived from it. Run after any
change to a card: python3 build/mkindex.py
"""
import html
import json
import re
from pathlib import Path

HERE = Path(__file__).resolve().parent
PAGE = HERE.parent / "CURRICULUM.html"


def clean(s):
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", "", s))).strip()


def main():
    page = PAGE.read_text()
    parts = []
    for m in re.finditer(r'<div class="part p-(\w)">\s*<p class="part-no">(.*?)</p>\s*<h2>(.*?)</h2>\s*'
                         r'<p class="subhead">(.*?)</p>', page, re.S):
        parts.append({"letter": m.group(1).upper(), "name": clean(m.group(2)),
                      "headline": clean(m.group(3)), "thesis": clean(m.group(4)), "units": []})
    units = []
    lines = ["# Every unit, in order: what it teaches. Nothing may be used before the unit that introduces it.",
             "",
             "Assumed throughout: everything in Mechanics to Relativity units 00–24 (cited as MR nn; the decks are "
             "at ../mechanics-to-relativity/units/), plus the mathematical background AUTHORING.md "
             "lists. Generated from CURRICULUM.html's cards by build/mkindex.py; the page wins if they differ.",
             ""]
    for m in re.finditer(r'<article class="unit t-(\w)" id="u(\d\d)">(.*?)</article>', page, re.S):
        trunk, no, body = m.groups()
        title = clean(re.search(r"<h3>(.*?)</h3>", body, re.S).group(1))
        tag = "branch" if 'class="tag">branch' in body else "spine"
        needs = re.search(r'<p class="needs">(.*?)<span class="hrs">(.*?)</span>', body, re.S)
        internal = re.findall(r'href="#u(\d\d)"', needs.group(1))
        mr = re.findall(r'class="mr"[^>]*>(MR \d\d)', needs.group(1))
        secs = {clean(a): clean(b) for a, b in re.findall(r"<dt>(.*?)</dt>\s*<dd>(.*?)</dd>", body, re.S)}
        check = clean(re.search(r'<dd class="check">(.*?)</dd>', body, re.S).group(1))
        units.append({"no": no, "part": trunk.upper(), "title": title, "tag": tag, "needs": internal, "mr": mr,
                      "hours": clean(needs.group(2)),
                      **{k.lower().replace(" ", "_"): v for k, v in secs.items()}, "checkpoint": check})
        for p in parts:
            if p["letter"] == trunk.upper():
                p["units"].append(no)
        mr_s = "; " + ", ".join(mr) if mr else ""
        tools = " Tools: " + secs["Tools"] if "Tools" in secs else ""
        lines.append(f"- **{no} {title}** (needs {', '.join(internal) or '—'}{mr_s}; {tag}) — "
                     f"{secs.get('Theory', '')}{tools}")
    (HERE / "index.md").write_text("\n".join(lines) + "\n")
    (HERE / "syllabus.json").write_text(json.dumps(
        {"source": "Extracted from CURRICULUM.html's unit cards by build/mkindex.py. The page is the agreed "
                   "syllabus; if the two disagree, the page wins and this file is regenerated.",
         "parts": parts, "units": units}, indent=1, ensure_ascii=False) + "\n")
    print(f"{len(units)} units, {len(parts)} parts")


if __name__ == "__main__":
    main()
