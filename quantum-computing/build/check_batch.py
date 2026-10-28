#!/usr/bin/env python3
"""The checks run after every batch, before the next one is launched.

    python3 build/check_batch.py 17 18 19 20 --run wf_xxxxxxxx-xxx
    python3 build/check_batch.py --referee             # every referee block in the course

Run from the course root. Prints, in order:
  1. each agent's result from the run's journal: units written, defects fixed, anything left unfixed
  2. glossary warnings for the whole course (`./qc glossary`)
  3. sheet-check on each unit's problems.html
  4. deck-overflow on each deck, with its figure and slide counts and any inline style
  5. every "With the referee" block on the units' sheets, run under the course's .venv
  6. cross-unit quotations ("unit 03's '…'") that match nothing in the cited unit
  7. CURRICULUM.html still well-formed (verifiers sometimes edit a card), and `./qc site`

Referee blocks: a problem's blocks run in order in one interpreter, as a learner pasting
them would; a block whose first line says "# with … from P5's block" gets P5's code first.
Needs a quiet machine for step 4 — run it while agents are working and decks time out.
Written on 2026-10-27, from the checks run by hand on the batches 01–16.
"""
from __future__ import annotations

import argparse
import glob
import html
import json
import re
import subprocess
import sys
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PY = ROOT / ".venv" / "bin" / "python"


def unit_dir(no: str) -> Path:
    return next(ROOT.glob(f"units/{no}-*"))


def text(path: Path) -> str:
    return " ".join(html.unescape(re.sub(r"<[^>]+>", "", path.read_text())).split())


def journal(run: str):
    hits = glob.glob(str(Path.home() / f".claude/projects/*/*/subagents/workflows/{run}/journal.jsonl"))
    if not hits:
        print(f"no journal found for {run}")
        return
    for line in open(hits[0]):
        d = json.loads(line)
        if d.get("type") != "result":
            continue
        r = d.get("result") or {}
        if not isinstance(r, dict):
            print("  non-dict result:", str(r)[:200])
        elif "defects_found" in r:
            print(f"  verify {r['unit'][:40]}: {len(r['defects_found'])} defects fixed; unfixed: "
                  + json.dumps(r["unfixed"], ensure_ascii=False)[:600])
        elif "slides" in r:
            print(f"  write  {r['unit'][:40]}: {r['slides']} slides, {r['problems']} problems")


def referee(sheets: list[Path]) -> int:
    errors = total = 0
    for sheet in sheets:
        s = sheet.read_text()
        code = {pid: [html.unescape(c) for c in re.findall(r"<pre><code>(.*?)</code></pre>", body, re.S)]
                for pid, body in re.findall(r'<section class="problem" id="(p\d+)">(.*?)</section>', s, re.S)}

        def full(pid, seen=()):
            out = []
            for block in code.get(pid, []):
                for dep in re.findall(r"from P(\d+)'s block", block.split("\n", 1)[0]):
                    if f"p{dep}" not in seen:
                        out += full(f"p{dep}", seen + (pid,))
                out.append(block)
            return out

        for pid, blocks in code.items():
            if not blocks:
                continue
            total += 1
            r = subprocess.run([str(PY), "-c", "\n\n".join(full(pid))], cwd=ROOT,
                               capture_output=True, text=True, timeout=900)
            if r.returncode:
                errors += 1
                last = (r.stderr.strip().splitlines() or [""])[-1]
                print(f"  ERR {sheet.parent.name} {pid}: {last[:160]}")
    print(f"  {total} problems with referee blocks, {errors} errors")
    return errors


def xref(units: list[str]):
    # a unit still being written mid-batch may lack its files: skip it, don't crash
    dirs = {Path(d).name.split("-")[0]: Path(d) for d in glob.glob(str(ROOT / "units/*"))
            if (Path(d) / "slides.html").exists() and (Path(d) / "problems.html").exists()}
    units = [u for u in units if u in dirs]
    body = {n: (text(d / "slides.html") + " " + text(d / "problems.html")).lower() for n, d in dirs.items()}
    titles = {n: {html.unescape(re.sub("<[^>]+>", "", t)).strip().lower()
                  for t in re.findall(r"<h2>(.*?)</h2>", (d / "slides.html").read_text(), re.S)}
              for n, d in dirs.items()}
    found = 0
    for u in units:
        for f in ("slides.html", "problems.html"):
            s = text(dirs[u] / f)
            for m in re.finditer(r"[Uu]nit (\d\d)(?:'s)?[^.]{0,80}?[‘“\"]([^’”\"]{4,80})[’”\"]", s):
                v, t = m.group(1), m.group(2).strip().lower()
                if v == u or v not in body or t in body[v] or any(t in x or x in t for x in titles[v]):
                    continue
                found += 1
                print(f"  unmatched: {u} {f} -> unit {v}: {t[:80]!r}  (often just emphasis — read it)")
    print(f"  {found} unmatched quotations")


class _Balance(HTMLParser):
    VOID = ("br", "img", "meta", "link", "input", "hr", "path", "circle", "line", "rect",
            "polyline", "polygon", "ellipse", "stop", "use")

    def __init__(self):
        super().__init__()
        self.stack, self.errors = [], []

    def handle_starttag(self, tag, attrs):
        if tag not in self.VOID:
            self.stack.append(tag)

    def handle_endtag(self, tag):
        if tag in self.VOID:
            return
        if self.stack and self.stack[-1] == tag:
            self.stack.pop()
        else:
            self.errors.append((tag, self.getpos()))


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("units", nargs="*")
    ap.add_argument("--run", help="the batch's workflow run id, to summarise its journal")
    ap.add_argument("--referee", action="store_true", help="only run every referee block in the course")
    a = ap.parse_args()
    if a.referee:
        sys.exit(1 if referee(sorted(ROOT.glob("units/*/problems.html"))) else 0)
    if not a.units:
        ap.error("name the units, or pass --referee")
    if a.run:
        print("1. journal"); journal(a.run)
    print("2. glossary")
    g = subprocess.run(["./qc", "glossary"], cwd=ROOT, capture_output=True, text=True)
    print("  " + ("\n  ".join(l for l in (g.stdout + g.stderr).splitlines() if not l.startswith("built")) or "no warnings"))
    print("3. sheets")
    for u in a.units:
        r = subprocess.run(["node", "slides/tools/sheet-check.mjs", str(unit_dir(u) / "problems.html")],
                           cwd=ROOT, capture_output=True, text=True)
        print("  " + (r.stdout + r.stderr).strip())
    print("4. decks")
    for u in a.units:
        deck = unit_dir(u) / "slides.html"
        r = subprocess.run(["timeout", "150", "node", "slides/tools/deck-overflow.mjs", f"file://{deck}",
                            f"/tmp/qc-overflow-{u}", "/usr/bin/brave"], cwd=ROOT, capture_output=True, text=True)
        s = deck.read_text()
        verdict = "no overflow" if r.returncode == 0 else "OVERFLOW OR FAILED: " + (r.stdout + r.stderr).strip()[:200]
        print(f"  {u}: {verdict}; {s.count('<svg')} figures, {s.count('<section')} slides, "
              f"{s.count('style=')} inline styles")
    print("5. referee"); referee([unit_dir(u) / "problems.html" for u in a.units])
    print("6. cross-unit quotations"); xref(a.units)
    print("7. curriculum and site")
    b = _Balance(); b.feed((ROOT / "CURRICULUM.html").read_text())
    print(f"  CURRICULUM.html: {'well-formed' if not b.errors and not b.stack else f'errors {b.errors[:3]}, open {b.stack[-3:]}'}")
    s = subprocess.run(["./qc", "site"], cwd=ROOT, capture_output=True, text=True)
    print("  " + (s.stdout + s.stderr).strip().splitlines()[-1])


if __name__ == "__main__":
    main()
