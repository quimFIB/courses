#!/usr/bin/env python3
"""One-off migration: a unit's three Org problem files -> one problems.html.

Units 00-07 were first written with their practice in Org (PROBLEMS.org,
SOLUTIONS.org, HINTS.org), copied from the sister course, whose learner writes code
in Emacs anyway. This course is solved on paper, so the sheet became a page:
each problem's statement, then its hint ladder (rungs nested, so rung n+1 is not
even visible until rung n is open), then its worked solution, folded. Units from
08 on are written straight into problems.html; this script exists so the first
eight did not have to be rewritten by hand.

    python3 build/org2sheet.py 04            # one unit
    python3 build/org2sheet.py all           # every unit that still has problems/*.org
    python3 build/org2sheet.py 04 --remove   # ... and delete the Org files afterwards

Only the Org subset those files use is understood: headings with :tags: and a
PROPERTIES drawer (:EXERCISES:), paragraphs, plain lists ("- ", "1. ", "1) ")
nested by indentation, pipe tables, *bold* /italic/ ~code~ =verbatim=, and
\\( \\) / \\[ \\] maths, which is passed through for KaTeX untouched.
"""

from __future__ import annotations

import html
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
HEAD = re.compile(r"^(\*+) (.*?)\s*$")
TAGS = re.compile(r"\s+(:[\w:]+:)\s*$")
PNUM = re.compile(r"^P(\d+)\s*[·—:.-]?\s*(.*)$")
ITEM = re.compile(r"^(\s*)([-+]|\d+[.)])\s+(.*)$")
DIFFICULTY = ("routine", "medium", "hard")


# ------------------------------------------------------------------ org tree --

def parse(text: str) -> tuple[list[str], list[dict]]:
    """Preamble lines, then a flat list of headings with their body lines."""
    pre, nodes, cur = [], [], None
    for line in text.splitlines():
        if line.startswith("#+"):
            continue
        m = HEAD.match(line)
        if m:
            title, tags = m.group(2), []
            t = TAGS.search(title)
            if t:
                tags = [x for x in t.group(1).split(":") if x]
                title = title[: t.start()]
            cur = {"level": len(m.group(1)), "title": title.strip(), "tags": tags,
                   "props": {}, "body": []}
            nodes.append(cur)
            continue
        (cur["body"] if cur else pre).append(line)
    for n in nodes:                                  # lift the PROPERTIES drawer out of the body
        body, out, inside = n["body"], [], False
        for line in body:
            s = line.strip()
            if s == ":PROPERTIES:":
                inside = True
            elif s == ":END:" and inside:
                inside = False
            elif inside:
                m = re.match(r":([A-Z_]+):\s*(.*)", s)
                if m:
                    n["props"][m.group(1)] = m.group(2)
            else:
                out.append(line)
        n["body"] = out
    return pre, nodes


def pnum(title: str) -> tuple[int, str] | None:
    m = PNUM.match(title)
    return (int(m.group(1)), m.group(2).strip()) if m else None


# ------------------------------------------------------------------ inline --

MATH = re.compile(r"\\\((.+?)\\\)|\\\[(.+?)\\\]|\$\$(.+?)\$\$", re.S)


def inline(text: str) -> str:
    """Org emphasis to HTML, with maths stashed first so that nothing inside it is touched."""
    stash: list[str] = []

    def keep(m):
        stash.append(m.group(0))
        return f"\x00{len(stash) - 1}\x00"

    text = MATH.sub(keep, text)
    text = html.escape(text, quote=False)
    text = re.sub(r"(?<![\w~])~([^~\n]+?)~(?![\w~])", r"<code>\1</code>", text)
    text = re.sub(r"(?<![\w=])=([^=\n]+?)=(?![\w=])", r"<code>\1</code>", text)
    text = re.sub(r"(?<![\w/:])/([^/\s][^/\n]*?)/(?![\w/])", r"<em>\1</em>", text)
    text = re.sub(r"(?<![\w*])\*([^*\s][^*\n]*?)\*(?![\w*])", r"<strong>\1</strong>", text)
    return re.sub(r"\x00(\d+)\x00", lambda m: html.escape(stash[int(m.group(1))], quote=False), text)


# ------------------------------------------------------------------ blocks --

def dedent(lines: list[str]) -> list[str]:
    ind = [len(l) - len(l.lstrip()) for l in lines if l.strip()]
    cut = min(ind) if ind else 0
    return [l[cut:] if l.strip() else "" for l in lines]


def is_row(line: str) -> bool:
    """An Org table row starts and ends with a bar; a line merely starting with |x| is maths."""
    s = line.strip()
    return len(s) > 1 and s.startswith("|") and s.endswith("|")


def math_depth(line: str) -> int:
    """Net \\[ minus \\] on a line: >0 means a display is still open after it."""
    return (line.count("\\[") - line.count("\\]")) + (line.count("\\(") - line.count("\\)"))


def blocks(lines: list[str]) -> str:
    """Paragraphs, lists and tables. A display \\[ … \\] is never split, whatever its lines look like."""
    lines = dedent(lines)
    out, i, n = [], 0, len(lines)
    while i < n:
        line = lines[i]
        if not line.strip():
            i += 1
            continue
        if is_row(line):
            rows = []
            while i < n and is_row(lines[i]):
                rows.append(lines[i].strip())
                i += 1
            out.append(table(rows))
            continue
        if ITEM.match(line):
            i, html_list = lst(lines, i)
            out.append(html_list)
            continue
        para, depth = [], 0
        while i < n:
            l = lines[i]
            if depth <= 0 and para and (not l.strip() or ITEM.match(l) or is_row(l)):
                break
            if depth <= 0 and not para and not l.strip():
                break
            para.append(l)
            depth += math_depth(l)
            i += 1
        text = "\n".join(para).strip()
        if text:
            out.append(f"<p>{inline(text)}</p>")
    return "\n".join(out)


def lst(lines: list[str], i: int) -> tuple[int, str]:
    """A plain list starting at lines[i]; items end where a line is less indented than
    their text, a blank line is followed by something that is not part of the list,
    or a new item at the same indentation begins."""
    first = ITEM.match(lines[i])
    base = len(first.group(1))
    ordered = first.group(2)[0].isdigit()
    items, n = [], len(lines)
    while i < n:
        m = ITEM.match(lines[i])
        if not m or len(m.group(1)) != base:
            break
        text_col = len(m.group(1)) + len(m.group(2)) + 1
        body, depth = [" " * text_col + m.group(3)], math_depth(m.group(3))
        i += 1
        while i < n:
            l = lines[i]
            if depth > 0:                                  # inside a display: take it whole
                body.append(l)
                depth += math_depth(l)
                i += 1
                continue
            if not l.strip():
                j = i
                while j < n and not lines[j].strip():
                    j += 1
                if j < n and (len(lines[j]) - len(lines[j].lstrip())) >= text_col:
                    body.append("")
                    i = j
                    continue
                break
            if (len(l) - len(l.lstrip())) < text_col:
                break
            body.append(l)
            depth += math_depth(l)
            i += 1
        inner = blocks(body)
        if inner.count("<p>") == 1 and inner.startswith("<p>") and inner.endswith("</p>"):
            inner = inner[3:-4]                            # a one-paragraph item needs no <p>
        items.append(f"<li>{inner}</li>")
        while i < n and not lines[i].strip():
            j = i
            while j < n and not lines[j].strip():
                j += 1
            m2 = ITEM.match(lines[j]) if j < n else None
            if m2 and len(m2.group(1)) == base:
                i = j
            else:
                break
    tag = "ol" if ordered else "ul"
    return i, f"<{tag}>\n" + "\n".join(items) + f"\n</{tag}>"


def table(rows: list[str]) -> str:
    cells = lambda r: [c.strip() for c in r.strip("|").split("|")]
    body = [r for r in rows if not re.match(r"^\|[-+|: ]+\|?$", r)]
    has_rule = len(body) != len(rows)
    out = ["<table>"]
    for k, r in enumerate(body):
        tag = "th" if (has_rule and k == 0) else "td"
        out.append("<tr>" + "".join(f"<{tag}>{inline(c)}</{tag}>" for c in cells(r)) + "</tr>")
    out.append("</table>")
    return "\n".join(out)


# ------------------------------------------------------------------ assembly --

CHECKPOINT = re.compile(r"^\*(?:The checkpoint(?: this sheet tests)?|Checkpoint)\.\*\s*", re.I)
POINTER = re.compile(r"(Statements only[:;]|Do them on paper before opening anything\s+else:)"
                     r"[\s\S]*?\./mr solutions \d\d~\)?[^.]*\.")


def paragraphs(lines: list[str]) -> list[str]:
    text = "\n".join(dedent(lines)).strip()
    return [p.strip() for p in re.split(r"\n\s*\n", text) if p.strip()]


def unit_meta(unit: Path) -> dict:
    deck = (unit / "slides.html").read_text()
    grab = lambda pat: (m.group(1).strip() if (m := re.search(pat, deck, re.S)) else "")
    title = re.sub(r"<[^>]+>", "", grab(r'<section class="title-slide">.*?<h1>(.*?)</h1>'))
    eyebrow = re.sub(r"<[^>]+>", "", grab(r'<section class="title-slide">.*?<p class="eyebrow">(.*?)</p>'))
    return {"no": unit.name[:2], "title": html.unescape(title), "eyebrow": html.unescape(eyebrow),
            "trunk": grab(r'<body data-trunk="([^"]*)"') or "root"}


def convert(unit: Path) -> Path:
    src = unit / "problems"
    p_pre, p_nodes = parse((src / "PROBLEMS.org").read_text())
    s_pre, s_nodes = parse((src / "SOLUTIONS.org").read_text())
    h_pre, h_nodes = parse((src / "HINTS.org").read_text())
    meta = unit_meta(unit)

    # the preamble: checkpoint out, pointers to the old commands out, the rest kept
    checkpoint, preamble = "", []
    for p in paragraphs(p_pre):
        if CHECKPOINT.match(p):
            checkpoint = CHECKPOINT.sub("", p)
            continue
        p = POINTER.sub("Work them on paper first.", p)
        preamble.append(p)
    for p in paragraphs(s_pre):                      # keep what is not boilerplate
        if re.search(r"after (an|your) attempt|One heading per problem|Read after", p):
            continue
        preamble.append(p)
    for p in paragraphs(h_pre):
        if re.search(r"\./mr solutions|^One rung at a time", p):
            continue
        preamble.append(p)

    # solutions and hints, keyed by problem number
    sols: dict[int, list[dict]] = {}
    cur = None
    for n in s_nodes:
        k = pnum(n["title"])
        if k and n["level"] == 1:
            cur = k[0]
            sols[cur] = [n]
        elif cur is not None:
            sols[cur].append(n)
    hints: dict[int, list[dict]] = {}
    cur = None
    for n in h_nodes:
        k = pnum(n["title"])
        if k and n["level"] == 1:
            cur = k[0]
            hints[cur] = [n]
        elif cur is not None:
            hints[cur].append(n)

    parts, toc, seen = [], [], []
    for n in p_nodes:
        k = pnum(n["title"])
        if not k:
            parts.append(f'<h2 class="group">{inline(n["title"])}</h2>')
            continue
        num, title = k
        seen.append(num)
        diff = next((t for t in n["tags"] if t in DIFFICULTY), "")
        toc.append(f'<li><a class="{diff}" href="#p{num}" title="{html.escape(title)}">P{num}</a></li>')
        sec = [f'<section class="problem" id="p{num}">',
               f'<h3><span class="pno">P{num}</span> {inline(title)}'
               + (f' <span class="tag {diff}">{diff}</span>' if diff else "") + "</h3>"]
        if n["props"].get("EXERCISES"):
            sec.append(f'<p class="exercises">exercises: {inline(n["props"]["EXERCISES"])}</p>')
        sec.append(f'<div class="statement">\n{blocks(n["body"])}\n</div>')

        ladder = [h for h in hints.get(num, [])[1:]]
        lead = blocks(hints[num][0]["body"]) if num in hints else ""
        if ladder:
            nest = ""
            for h in reversed(ladder):
                label = inline(h["title"])
                nest = (f'<details class="rung"><summary>{label}</summary><div>\n'
                        f'{blocks(h["body"])}\n{nest}</div></details>')
            sec.append(f'<details class="hints"><summary>Hints · {len(ladder)} rung'
                       f'{"s" if len(ladder) != 1 else ""}</summary><div>\n{lead}\n{nest}\n</div></details>')

        if num in sols:
            first, rest = sols[num][0], sols[num][1:]
            body = [blocks(first["body"])]
            for sub in rest:
                body.append(f'<h4>{inline(sub["title"])}</h4>\n{blocks(sub["body"])}')
            sec.append('<details class="solution"><summary>Worked solution</summary><div>\n'
                       + "\n".join(body) + "\n</div></details>")
        sec.append("</section>")
        parts.append("\n".join(sec))

    missing_s = sorted(set(seen) - set(sols))
    missing_h = sorted(set(seen) - set(hints))
    if missing_s or missing_h:
        print(f"{unit.name}: no solution for {missing_s}, no hints for {missing_h}", file=sys.stderr)

    no, t = meta["no"], meta["title"]
    part = meta["eyebrow"].split("·")[0].strip() or "Problems"
    page = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{no} · Problems — {html.escape(t)}</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;700&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css">
<link rel="stylesheet" href="../../slides/sheet.css">
</head>
<body data-trunk="{meta['trunk']}">
<main class="sheet">

<header class="sheet-head">
<p class="eyebrow">{html.escape(part)} · unit {no} · problems</p>
<h1>{html.escape(t)}</h1>
<p class="sheet-links"><a href="slides.html">the slides</a> · <a href="../../CURRICULUM.html#u{no}">the curriculum</a></p>
<div class="checkpoint"><b>Checkpoint.</b> {inline(checkpoint)}</div>
<p class="howto">Work each problem on paper first. Under it, <b>Hints</b> opens a ladder one rung at a
time — each rung appears only once the one before it is open, and the last gives the first line of the
working — and <b>Worked solution</b> has the whole thing: the idea, the working, then a check. Read the
solution after your attempt, including when you got it right. <kbd>F</kbd> folds everything back;
<kbd>D</kbd> switches dark and light.</p>
<div class="preamble">
{chr(10).join(f"<p>{inline(p)}</p>" for p in preamble)}
</div>
<ul class="toc">
{chr(10).join(toc)}
</ul>
</header>

{chr(10).join(parts)}

<footer class="sheet-foot">When the checkpoint above is true: <code>./mr done {no}</code>.</footer>
</main>
<script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/contrib/auto-render.min.js"></script>
<script src="../../slides/sheet.js"></script>
</body>
</html>
"""
    out = unit / "problems.html"
    out.write_text(page)
    return out


def main(argv: list[str]):
    remove = "--remove" in argv
    keys = [a for a in argv if not a.startswith("--")]
    units = sorted(p for p in (ROOT / "units").iterdir() if (p / "problems" / "PROBLEMS.org").exists())
    if keys and keys != ["all"]:
        units = [u for u in units if u.name[:2] in {k.zfill(2) for k in keys}]
    for u in units:
        out = convert(u)
        print(f"wrote {out.relative_to(ROOT)}")
        if remove:
            for f in ("PROBLEMS.org", "SOLUTIONS.org", "HINTS.org"):
                (u / "problems" / f).unlink()
            (u / "problems").rmdir()


if __name__ == "__main__":
    main(sys.argv[1:])
