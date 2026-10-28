#!/usr/bin/env python3
"""Generate the dependency map inside CURRICULUM.html, between its MAP markers.

Edit the layout here, not in the HTML: NODES places each unit on a three-column
grid, NEEDS lists its prerequisites with the primary one first. Primary edges are
always drawn — through a side gutter when they span three rows or more — and
secondary ones only when the two units are within two rows of each other.
"""
from pathlib import Path

HERE = Path(__file__).resolve().parent
PAGE = HERE.parent / "CURRICULUM.html"

COLS = {0: 200, 1: 540, 2: 880}
W, H, HB = 250, 40, 36          # node width, spine height, branch height
ROW, TOP, BAND = 64, 40, 50     # row pitch, top margin, extra space per part band
SHORT = 2                       # secondary edges drawn only up to this many rows

PARTS = [
    ("a", "PART A — from fields to circuits"),
    ("b", "PART B — networks, as linear algebra on a graph"),
    ("c", "PART C — alternating current"),
    ("d", "PART D — power along lines"),
    ("e", "PART E — the grid"),
    ("f", "PART F — power without wires"),
]

# unit: (part, column, row, label, branch?)
NODES = {
    "00": ("a", 1, 0, "Conduction: Ohm from Drude", False),
    "01": ("a", 1, 1, "Poynting: where energy flows", False),
    "02": ("a", 1, 2, "The lumped approximation", False),
    "03": ("b", 1, 3, "Kirchhoff, Tellegen", False),
    "04": ("b", 1, 4, "Laplacian, Thévenin, max power", False),
    "05": ("c", 1, 5, "Transients, phasors, impedance", False),
    "06": ("c", 1, 6, "AC power: P, Q, S", False),
    "07": ("c", 1, 7, "Transformers, high voltage", False),
    "08": ("d", 0, 8, "Transmission lines", False),
    "09": ("d", 2, 9, "Matching, the Smith chart", True),
    "10": ("d", 0, 9, "The skin effect", True),
    "11": ("e", 1, 10, "Three-phase, rotating field", False),
    "12": ("e", 2, 11, "Machines and co-energy", True),
    "13": ("e", 1, 11, "Power flow and stability", False),
    "14": ("e", 0, 12, "Converters and HVDC", False),
    "15": ("f", 1, 13, "Coupled resonators", False),
    "16": ("f", 2, 14, "Antennas, the far field", True),
}

NEEDS = {
    "00": [], "01": ["00"], "02": ["01"], "03": ["02"], "04": ["03"],
    "05": ["04", "02"], "06": ["05"], "07": ["06", "02"],
    "08": ["05", "01"], "09": ["08", "06"], "10": ["05", "00"],
    "11": ["06", "07"], "12": ["11"], "13": ["11", "07"], "14": ["13", "05", "08"],
    "15": ["07", "06"], "16": ["15", "08"],
}

PART_INDEX = {k: i for i, (k, _) in enumerate(PARTS)}


def y_of(row, part):
    return TOP + row * ROW + (PART_INDEX[part] + 1) * BAND


def box(u):
    part, col, row, _, branch = NODES[u]
    h = HB if branch else H
    cx, y = COLS[col], y_of(row, part)
    return cx, y, h


def svg():
    rows = max(r for _, _, r, _, _ in NODES.values())
    height = y_of(rows, PARTS[-1][0]) + H + 30
    out = [f'<svg class="map" viewBox="0 0 1080 {height}" role="img" '
           f'aria-label="Dependency map of the {len(NODES)} units, in {len(PARTS)} parts, '
           f'from conduction in a wire to the grid and wireless power.">',
           '  <defs>',
           '    <marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6"',
           '            markerHeight="6" orient="auto-start-reverse">',
           '      <path d="M 0 1 L 9 5 L 0 9 z" fill="var(--rule-strong)"/>',
           '    </marker>',
           '  </defs>']
    lanes = {"left": iter([20, 34, 48, 62]), "right": iter([1060, 1046, 1032, 1018])}
    for u, needs in NEEDS.items():
        for i, v in enumerate(needs):
            sx, sy, sh = box(v)
            tx, ty, th = box(u)
            span = NODES[u][2] - NODES[v][2]
            if i > 0 and span > SHORT:
                continue        # long secondary needs are left to the unit's card
            cls = "edge" if i == 0 else "edge dashed"
            if span > SHORT:
                side = "right" if NODES[v][1] == 2 else "left"
                lane = next(lanes[side])
                d = -1 if side == "left" else 1
                x1, x2 = sx + d * W / 2, tx + d * W / 2
                out.append(f'  <path class="{cls}" d="M {x1} {sy + sh / 2} H {lane} '
                           f'V {ty + th / 2} H {x2 + d * 2}" marker-end="url(#ar)"/>')
            else:
                y1, y2 = sy + sh, ty - 2
                ym = (y1 + y2) / 2
                out.append(f'  <path class="{cls}" d="M {sx} {y1} C {sx} {ym} {tx} {ym} '
                           f'{tx} {y2}" marker-end="url(#ar)"/>')

    # bands after edges, so their labels' halo sits over any edge crossing them
    for key, label in PARTS:
        first = min(r for p, _, r, _, _ in NODES.values() if p == key)
        y = y_of(first, key) - 22
        out.append(f'  <line class="band" x1="8" y1="{y}" x2="1072" y2="{y}"/>')
        out.append(f'  <text class="bandlabel" x="1072" y="{y - 8}" text-anchor="end">{label}</text>')

    for u, (part, col, row, label, branch) in NODES.items():
        cx, y, h = box(u)
        x = cx - W / 2
        cls = f"n n-{part}" + (" n-branch" if branch else "")
        out += [f'  <g class="{cls}">',
                f'    <rect x="{x}" y="{y}" width="{W}" height="{h}" rx="4"/>',
                f'    <rect class="bar" x="{x}" y="{y}" width="4" height="{h}"/>',
                f'    <text x="{x + 13}" y="{y + h / 2 + 4}" font-size="11.5">{u}  {label}</text>',
                '  </g>']
    out.append('</svg>')
    return "\n".join(out)


def main():
    text = PAGE.read_text()
    head, rest = text.split("<!--MAP:BEGIN-->", 1)
    _, tail = rest.split("<!--MAP:END-->", 1)
    PAGE.write_text(f"{head}<!--MAP:BEGIN-->\n{svg()}\n<!--MAP:END-->{tail}")


if __name__ == "__main__":
    main()
