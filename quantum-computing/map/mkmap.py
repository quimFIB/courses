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
    ("a", "PART A — a finite quantum system, mathematics first"),
    ("b", "PART B — correlations: what entanglement can and cannot do"),
    ("c", "PART C — circuits, and the complexity class they define"),
    ("d", "PART D — algorithms: interference as a resource, and its limits"),
    ("e", "PART E — noise, error correction, and the honest state of the art"),
]

# unit: (part, column, row, label, branch?)
NODES = {
    "00": ("a", 1, 0, "Why ℂ: the spectral theorem", False),
    "01": ("a", 1, 1, "The postulates", False),
    "02": ("a", 0, 2, "One qubit: the Bloch sphere", False),
    "03": ("a", 2, 2, "Tensor products", False),
    "04": ("a", 1, 3, "Density operators", False),
    "05": ("b", 2, 4, "No-cloning", False),
    "06": ("b", 0, 4, "Bell and Tsirelson", False),
    "07": ("b", 1, 5, "Teleportation", False),
    "09": ("b", 0, 5, "Key distribution", True),
    "08": ("b", 1, 6, "Entropy and Holevo", True),
    "10": ("c", 1, 7, "Circuits, exact universality", False),
    "11": ("c", 0, 8, "Gate sets, Solovay–Kitaev", False),
    "12": ("c", 0, 9, "BQP", False),
    "13": ("d", 1, 10, "Queries: Deutsch–Jozsa, BV", False),
    "14": ("d", 0, 11, "Simon", False),
    "17": ("d", 2, 11, "Grover", False),
    "15": ("d", 0, 12, "QFT, phase estimation", False),
    "18": ("d", 2, 12, "Lower bounds", False),
    "16": ("d", 0, 13, "Shor", False),
    "19": ("d", 1, 13, "Hamiltonian simulation", False),
    "20": ("d", 1, 14, "QMA, local Hamiltonians", True),
    "21": ("e", 0, 15, "Channels, open systems", False),
    "22": ("e", 1, 16, "First codes, Knill–Laflamme", False),
    "23": ("e", 1, 17, "Stabilisers and CSS", False),
    "24": ("e", 1, 18, "Fault tolerance, threshold", False),
    "25": ("e", 0, 16, "The physical qubit", True),
    "26": ("e", 2, 19, "Hardware, the near term", True),
}

NEEDS = {
    "00": [], "01": ["00"], "02": ["01"], "03": ["01"], "04": ["03", "02"],
    "05": ["03"], "06": ["04"], "07": ["04", "05"], "08": ["07"], "09": ["06", "05"],
    "10": ["03", "02"], "11": ["10"], "12": ["11"],
    "13": ["10"], "14": ["13"], "15": ["14"], "16": ["15"], "17": ["13"],
    "18": ["17", "12"], "19": ["15", "11"], "20": ["12", "19"],
    "21": ["04"], "22": ["21", "10"], "23": ["22"], "24": ["23", "11"],
    "25": ["21", "02"], "26": ["24", "17", "21"],
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
           f'from the postulates to fault tolerance.">',
           '  <defs>',
           '    <marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6"',
           '            markerHeight="6" orient="auto-start-reverse">',
           '      <path d="M 0 1 L 9 5 L 0 9 z" fill="var(--rule-strong)"/>',
           '    </marker>',
           '  </defs>']
    lanes = {"left": iter([26, 46, 66]), "right": iter([1054, 1034, 1014])}
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
