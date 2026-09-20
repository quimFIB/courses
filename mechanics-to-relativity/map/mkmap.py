#!/usr/bin/env python3
"""Emit the dependency map for CURRICULUM.html.

The map is hand-laid-out: the coordinates below are chosen, not computed by a
layout engine, because the *shape* is the argument — a course that is nearly a
chain, with one place where it genuinely forks (the analytic-and-field line and
the geometric line, both descending from unit 12 and rejoining at unit 28) and a
handful of branch units hanging off to one side.

Solid edges are a unit's principal prerequisite: the one it continues from, and
it is always drawn, however far away it sits, so that no unit looks orphaned.
Dashed edges are a unit's other prerequisites, drawn only when they are near
enough that the curve says something — a dashed line crossing half the diagram
only repeats what the unit's card already says in words. The legend says so.

Run:  python3 map/mkmap.py
It rewrites the region between <!--MAP:BEGIN--> and <!--MAP:END--> in
CURRICULUM.html, in place.
"""

import pathlib
import re

W, H = 188, 40          # ordinary node
SW, SH = 176, 36        # branch node (smaller: it is optional)

# --------------------------------------------------------------------------
# nodes: id -> (centre x, top y, label, part, branch?)
# --------------------------------------------------------------------------

NODES = {
    "00": (540, 24, "00  F = ma is an ODE", "root", 0),

    # Part A — the equation of motion
    "01": (250, 112, "01  Determinism", "a", 0),
    "03": (830, 112, "03  Frames that lie", "a", 0),
    "02": (250, 182, "02  Phase portraits", "a", 0),
    "04": (830, 182, "04  Work · vector calculus", "a", 0),
    "06": (250, 252, "06  Driven oscillator", "a", 0),
    "05": (830, 252, "05  Flux · Gauss", "a", 0),
    "07": (170, 330, "07  Normal modes", "a", 0),
    "08": (540, 330, "08  Central forces", "a", 0),
    "10": (910, 330, "10  Multipoles · Legendre", "a", 0),
    "09": (540, 400, "09  Kepler's equation", "a", 0),

    # Part B — the action
    "11": (830, 492, "11  Calculus of variations", "b", 0),
    "12": (540, 562, "12  Lagrangian mechanics", "b", 0),
    "13": (540, 632, "13  Noether", "b", 0),
    "16": (900, 632, "16  Rigid bodies · tensors", "b", 0),
    "14": (430, 702, "14  Hamilton · phase space", "b", 0),
    "15": (150, 702, "15  Hamilton–Jacobi", "b", 1),
    "17": (150, 772, "17  Chaos", "b", 1),

    # Part C — the toolkit, fields, and the crisis
    "18": (300, 864, "18  The wave equation", "c", 0),
    "20": (700, 864, "20  Fourier transform", "c", 0),
    "21": (930, 864, "21  Asymptotics", "c", 0),
    "19": (300, 934, "19  Fourier · Sturm–Liouville", "c", 0),
    "22": (620, 934, "22  Stress tensor", "c", 0),
    "23": (300, 1004, "23  Static fields", "c", 0),
    "24": (300, 1074, "24  Maxwell", "c", 0),
    "25": (300, 1144, "25  The crisis", "c", 0),

    # Part D — Minkowski
    "26": (700, 1236, "26  Minkowski space", "d", 0),
    "27": (700, 1306, "27  Relativistic dynamics", "d", 0),
    "28": (430, 1376, "28  The field tensor", "d", 0),
    "30": (880, 1376, "30  Equivalence principle", "d", 0),
    "29": (430, 1446, "29  Classical field theory", "d", 0),

    # Part E — curved space
    "31": (880, 1538, "31  Manifolds", "e", 0),
    "32": (880, 1608, "32  Metric · geodesics", "e", 0),
    "33": (880, 1678, "33  Curvature", "e", 0),
    "34": (560, 1678, "34  Forms · Cartan", "e", 1),

    # Part F — Einstein
    "35": (700, 1770, "35  The field equations", "f", 0),
    "36": (540, 1840, "36  Schwarzschild", "f", 0),
    "39": (910, 1840, "39  Cosmology", "f", 1),
    "38": (170, 1840, "38  Gravitational waves", "f", 1),
    "37": (540, 1910, "37  The classical tests", "f", 0),
    "40": (880, 1910, "40  Rotating holes", "f", 1),
}

# --------------------------------------------------------------------------
# needs: unit -> its prerequisites, principal one first
# --------------------------------------------------------------------------

NEEDS = {
    "01": ["00"], "02": ["01"], "03": ["00"], "04": ["03"], "05": ["04"],
    "06": ["01", "02"], "07": ["06", "04"], "08": ["04", "06"], "09": ["08"],
    "10": ["05", "08"],
    "11": ["04"], "12": ["11", "08"], "13": ["12"], "14": ["13", "02"],
    "15": ["14", "11"], "16": ["12", "05", "03"], "17": ["14", "02", "01"],
    "18": ["07", "12"], "19": ["18", "09", "10", "11"], "20": ["06"],
    "21": ["06", "02", "08"], "22": ["16", "05", "18"], "23": ["05", "10", "19"],
    "24": ["23", "20", "18"], "25": ["24", "03"],
    "26": ["03", "14"], "27": ["26", "14", "16"], "28": ["27", "25"],
    "29": ["28", "13", "11"], "30": ["27", "05", "16"],
    "31": ["16", "30"], "32": ["31", "11"], "33": ["32", "05"],
    "34": ["31", "24", "33"],
    "35": ["33", "30"], "36": ["35", "13"], "37": ["36", "21", "08", "10"],
    "38": ["35", "21", "24", "20"], "39": ["35", "22"], "40": ["36", "15"],
}

# each part is pushed down by this much, so that the band rule and its label
# always land in clear space between two rows of nodes
OFFSET = {"root": 0, "a": 0, "b": 34, "c": 68, "d": 102, "e": 136, "f": 170}

BAND_LABEL = {
    "a": "PART A — the equation of motion, and the calculus it forces",
    "b": "PART B — the action, and coordinates ceasing to matter",
    "c": "PART C — the toolkit, fields, and the crisis that ends Newtonian physics",
    "d": "PART D — Minkowski: relativity as the geometry of a quadratic form",
    "e": "PART E — curved space, done without coordinates",
    "f": "PART F — Einstein: the field equations and what they predict",
}

NODES = {k: (cx, y + OFFSET[tone], label, tone, branch)
         for k, (cx, y, label, tone, branch) in NODES.items()}


def bands():
    """A rule between consecutive parts, labelled with the part it opens."""
    rows = {}
    for cx, y, label, tone, branch in NODES.values():
        h = SH if branch else H
        lo, hi = rows.get(tone, (y, y + h))
        rows[tone] = (min(lo, y), max(hi, y + h))
    out, order = [], ["a", "b", "c", "d", "e", "f"]
    for i, part in enumerate(order):
        top = rows[part][0]
        prev = rows["root"][1] if i == 0 else rows[order[i - 1]][1]
        out.append(((prev + top) / 2, BAND_LABEL[part]))
    return out

MAX_EDGE = 520.0        # a *secondary* prerequisite further than this is left to the card
VIEW = (1080, 2140)


def box(node):
    cx, y, _, _, branch = NODES[node]
    w, h = (SW, SH) if branch else (W, H)
    return cx, y, w, h


def port(node, side):
    cx, y, w, h = box(node)
    if side == "t":
        return cx, y, 0, -1
    if side == "b":
        return cx, y + h, 0, 1
    if side == "l":
        return cx - w / 2, y + h / 2, -1, 0
    return cx + w / 2, y + h / 2, 1, 0


def sides(src, dst):
    """Leave the source and enter the target on the faces that keep the curve short."""
    sx, sy, sw, sh = box(src)
    dx, dy, dw, dh = box(dst)
    if dy >= sy + sh - 4:                      # target is below: top-to-bottom
        if abs(dx - sx) > max(sw, dw) * 1.15:
            return ("r" if dx > sx else "l"), "t"
        return "b", "t"
    if abs(dy - sy) < 26:                      # same row: side to side
        return ("r", "l") if dx > sx else ("l", "r")
    return "t", "b"


def path(src, dst):
    ss, ds = sides(src, dst)
    x1, y1, dx1, dy1 = port(src, ss)
    x2, y2, dx2, dy2 = port(dst, ds)
    d = min(190.0, max(26.0, ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5 / 2.5))
    return (f"M {x1:.1f} {y1:.1f} C {x1 + dx1 * d:.1f} {y1 + dy1 * d:.1f} "
            f"{x2 + dx2 * d:.1f} {y2 + dy2 * d:.1f} {x2:.1f} {y2:.1f}")


def length(a, b):
    ax, ay, _, _ = box(a)
    bx, by, _, _ = box(b)
    return ((ax - bx) ** 2 + (ay - by) ** 2) ** 0.5


def build():
    out = [f'<svg class="map" viewBox="0 0 {VIEW[0]} {VIEW[1]}" role="img" '
           'aria-label="Dependency map of the 41 units, in six parts, from Newton\'s '
           'second law to the Einstein field equations.">',
           """  <defs>
    <marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6"
            markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="var(--rule-strong)"/>
    </marker>
  </defs>"""]

    for y, label in bands():
        out.append(f'  <line class="band" x1="8" y1="{y}" x2="{VIEW[0] - 8}" y2="{y}"/>')
        out.append(f'  <text class="bandlabel" x="8" y="{y - 8}">{label}</text>')

    dropped = 0
    for unit, needs in NEEDS.items():
        for i, need in enumerate(needs):
            if i and length(need, unit) > MAX_EDGE:
                dropped += 1
                continue
            cls = "edge" if i == 0 else "edge dashed"
            out.append(f'  <path class="{cls}" d="{path(need, unit)}" marker-end="url(#ar)"/>')

    for nid, (cx, y, label, tone, branch) in NODES.items():
        w, h = (SW, SH) if branch else (W, H)
        x = cx - w / 2
        out.append(f'  <g class="n n-{tone}">')
        out.append(f'    <rect x="{x:.1f}" y="{y}" width="{w}" height="{h}" rx="4"/>')
        out.append(f'    <rect class="bar" x="{x:.1f}" y="{y}" width="4" height="{h}"/>')
        out.append(f'    <text x="{x + 13:.1f}" y="{y + h / 2 + 4:.1f}" '
                   f'font-size="{10.5 if branch else 11.5}">{label}</text>')
        out.append("  </g>")

    out.append("</svg>")
    print(f"{len(NODES)} nodes, {sum(len(v) for v in NEEDS.values()) - dropped} edges drawn, "
          f"{dropped} long prerequisites left to the cards")
    return "\n".join(out)


def main():
    target = pathlib.Path(__file__).resolve().parent.parent / "CURRICULUM.html"
    html = target.read_text(encoding="utf-8")
    new, n = re.subn(r"(<!--MAP:BEGIN-->).*?(<!--MAP:END-->)",
                     lambda m: m.group(1) + "\n" + build() + "\n" + m.group(2),
                     html, flags=re.S)
    if not n:
        raise SystemExit("map markers not found in CURRICULUM.html")
    target.write_text(new, encoding="utf-8")
    print(f"rewrote the map in {target.name}")


if __name__ == "__main__":
    main()
