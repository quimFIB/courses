"""Assemble every course in this repository into one site, under one landing page.

    python site/build_all.py [OUT]           # default OUT: _site/   (standard library only)

Courses are discovered, never named: every immediate subdirectory of ROOT holding a
course.json is one, and that file says what the course is called, what to say about it
and which script builds it. Publishing a course is therefore a mv into this repository
and nothing else; this file does not change.

Each course builder owns one subdirectory of OUT, clears it, and gates its own build on
its own check_links(). What is left over, and what this script does: clear OUT, write the
landing page the courses link back to, run the builders, and check the landing page's own
links, which nothing else looks at.
"""

from __future__ import annotations

import html
import json
import os
import re
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
FIELDS = ("title", "build", "blurb", "needs", "site_is")
HUB_REL = "../index.html"                       # how a course page, one level down, reaches the hub
REPO_URL = "https://github.com/quimFIB/courses"


def read_courses() -> list[tuple[Path, dict]]:
    """Every immediate subdirectory holding a course.json, in directory-name order.

    Read in full before anything is built, because the caller deletes OUT next: a course
    whose course.json has a typo in it must fail while the previous build is still there.
    """
    dirs = sorted(p for p in ROOT.iterdir() if (p / "course.json").is_file())
    courses: list[tuple[Path, dict]] = []
    for d in dirs:
        spec_file = d / "course.json"
        try:
            spec = json.loads(spec_file.read_text())
        except json.JSONDecodeError as e:
            sys.exit(f"{spec_file}: not valid JSON ({e})")
        if not isinstance(spec, dict):
            sys.exit(f"{spec_file}: expected a JSON object with the fields {', '.join(FIELDS)}")
        for field in FIELDS:
            value = spec.get(field)
            if not isinstance(value, str) or not value.strip():
                sys.exit(f"{spec_file}: field {field!r} is missing, empty, or not a string")
        if not (d / spec["build"]).is_file():
            sys.exit(f"{spec_file}: build is {spec['build']!r}, which is not a file under {d.name}/")
        courses.append((d, spec))
    if not courses:
        sys.exit(f"no courses found: no immediate subdirectory of {ROOT} holds a course.json")
    return courses


def index_html(courses: list[tuple[Path, dict]]) -> str:
    cards = []
    for d, spec in courses:
        cards.append(f'''  <section class="course">
    <h2><a href="{html.escape(d.name, quote=True)}/index.html">{html.escape(spec["title"])}</a></h2>
    <p class="blurb">{html.escape(spec["blurb"])}</p>
    <dl class="facts">
      <dt>On this site</dt><dd>{html.escape(spec["site_is"])}</dd>
      <dt>To work along</dt><dd>{html.escape(spec["needs"])}</dd>
    </dl>
  </section>''')
    return f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Courses</title>
<style>
  :root {{
    --ground: #f3f5f6; --surface: #fff; --ink: #151a1d; --ink-soft: #59646a; --ink-faint: #8a949a;
    --rule: #d9dfe1; --accent: #1f4a54;
    --f-display: "Zilla Slab", Georgia, serif; --f-body: "IBM Plex Sans", system-ui, sans-serif;
    --f-mono: "IBM Plex Mono", Consolas, monospace;
  }}
  @media (prefers-color-scheme: dark) {{
    :root {{ --ground: #111517; --surface: #1a2023; --ink: #e6eaec; --ink-soft: #a3adb2;
      --ink-faint: #75808a; --rule: #2d3538; --accent: #8cc2cc; }}
  }}
  * {{ box-sizing: border-box; }}
  body {{ margin: 0; background: var(--ground); color: var(--ink); font: 17px/1.5 var(--f-body); }}
  main {{ max-width: 760px; margin: 0 auto; padding: 48px 20px 80px; }}
  h1 {{ font: 700 2.4rem/1.1 var(--f-display); margin: 0 0 .3em; }}
  .intro {{ color: var(--ink-soft); max-width: 44em; }}
  .intro code {{ font: .9em var(--f-mono); }}
  .course {{ background: var(--surface); border: 1px solid var(--rule); margin-top: 30px; padding: 20px 24px 22px; }}
  .course h2 {{ font: 600 1.45rem var(--f-display); border-bottom: 2px solid var(--ink);
    padding-bottom: 8px; margin: 0 0 12px; }}
  .course h2 a {{ color: var(--ink); text-decoration: none; }}
  .course h2 a:hover {{ color: var(--accent); }}
  .blurb {{ margin: 0; color: var(--ink-soft); }}
  .facts {{ display: grid; grid-template-columns: max-content 1fr; gap: 8px 18px;
    margin: 16px 0 0; padding-top: 14px; border-top: 1px solid var(--rule); }}
  .facts dt {{ font: 13px var(--f-mono); color: var(--ink-faint); letter-spacing: .06em; padding-top: 2px; }}
  .facts dd {{ margin: 0; }}
  footer {{ margin-top: 42px; font-size: 14px; color: var(--ink-faint); }}
  footer a {{ color: var(--accent); }}
  footer code {{ font: .92em var(--f-mono); }}
  @media (max-width: 600px) {{
    main {{ padding: 32px 16px 56px; }}
    .course {{ padding: 16px 16px 18px; }}
    .facts {{ grid-template-columns: 1fr; gap: 2px; }}
    .facts dt {{ margin-top: 10px; }}
  }}
</style>
</head>
<body>
<main>
  <h1>Courses</h1>
  <p class="intro">Self-study courses, each published as a static site: slide decks with speaker
  notes, a reading mode and a clickable glossary, all of it readable in a browser with nothing
  installed. How much of each course is here differs, so every entry below says what this site
  holds for it, and what working through the rest of it needs on your own machine.</p>
{chr(10).join(cards)}
  <footer>Sources for every course here: <a href="{REPO_URL}">{html.escape(REPO_URL.split("//")[-1])}</a>.
  Assembled from the courses' own builders by <code>site/build_all.py</code>.</footer>
</main>
</body>
</html>
'''


def check_links(out: Path) -> list[str]:
    """Every local src/href in the landing page must resolve inside the build.

    Each course builder checks the pages it writes, and nothing until now has checked the
    links between hub and courses — the one place a renamed or unbuilt course shows up.
    """
    page = out / "index.html"
    missing = []
    for ref in re.findall(r'(?:src|href)="([^"#?]+)', page.read_text()):
        if re.match(r"^[a-z]+:|^//", ref):
            continue
        target = (page.parent / ref).resolve()
        if not target.exists() or not target.is_relative_to(out.resolve()):
            missing.append(f"index.html -> {ref}")
    return missing


if __name__ == "__main__":
    out = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "_site"
    courses = read_courses()

    # OUT is cleared exactly here, once, before any course is built: the course builds go
    # inside it. The same rmtree placed after the loop would delete every course just
    # built, leave the landing page standing over an empty tree, and still exit 0.
    if out.exists():
        shutil.rmtree(out)
    out.mkdir(parents=True)

    # The landing page is written before the courses, not after. Each builder runs its own
    # check_links() over its build, and the hub up-link resolves there as ../index.html —
    # so a course built first fails its own gate with "missing: index.html -> ../index.html".
    (out / "index.html").write_text(index_html(courses))
    (out / ".nojekyll").write_text("")          # serve files as they are; no Jekyll processing

    env = {**os.environ, "COURSES_HUB": HUB_REL}
    for d, spec in courses:
        cmd = [sys.executable, str(ROOT / d.name / spec["build"]), str(out / d.name)]
        done = subprocess.run(cmd, env=env, capture_output=True, text=True)
        if done.returncode != 0:
            sys.stdout.write(done.stdout)
            sys.stderr.write(done.stderr)
            sys.exit(f"{d.name}: {spec['build']} failed (exit {done.returncode})")
        print(f"{d.name}: {done.stdout.strip()}")

    missing = check_links(out)
    print(f"built {out} with {len(courses)} course{'s' if len(courses) != 1 else ''} and a landing page")
    for m in missing:
        print(f"missing: {m}", file=sys.stderr)
    sys.exit(1 if missing else 0)
