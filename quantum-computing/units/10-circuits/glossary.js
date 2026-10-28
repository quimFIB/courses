// Generated from GLOSSARY.org by `qc glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "quantum circuit",
"html": "A finite list of gates \\(G_1, \\dots, G_m\\), each a unitary on a few named qubits (its wires) and the identity on the rest, acting on \\((\\mathbb C^2)^{\\otimes n}\\). It denotes the product \\(U = G_m\\cdots G_1\\): the diagram is read left to right in time, the formula right to left. Qubit 0 is the top wire and the most significant bit.",
"section": "The circuit model",
"slide": "Wires, gates, and the product they denote",
"keys": [
"quantum circuit"
]
},
{
"term_html": "gate",
"html": "A unitary on one, two or three qubits, placed on chosen wires of a circuit. A gate set is the list of gates allowed: in this unit, all one-qubit gates and CNOT.",
"section": "The circuit model",
"slide": "Wires, gates, and the product they denote",
"keys": [
"gate"
]
},
{
"term_html": "controlled-U",
"html": "For a unitary \\(U\\), the gate \\(C(U) = \\ket0\\!\\bra0\\otimes I + \\ket1\\!\\bra1\\otimes U\\), block diagonal \\(\\mathrm{diag}(I, U)\\), so unitary: it applies \\(U\\) to the target when the control reads 1. With \\(k\\) controls, \\(C^k(U)\\) applies \\(U\\) when all read 1. A controlled global phase \\(C(e^{i\\alpha}I)\\) is a relative phase on the control, not a global one.",
"section": "The circuit model",
"slide": "Controlled gates",
"keys": [
"controlled-u"
]
},
{
"term_html": "CNOT",
"html": "The controlled-\\(X\\) gate, \\(\\ket{c, t}\\mapsto\\ket{c, t\\oplus c}\\); \\(\\mathrm{CNOT}_{01}\\) has control 0 and target 1. A permutation matrix, its own inverse.",
"section": "The circuit model",
"slide": "Controlled gates",
"keys": [
"cnot"
]
},
{
"term_html": "open control",
"html": "A control drawn as an open circle, which fires when its qubit reads 0: an ordinary control conjugated by \\(X\\) on that qubit.",
"section": "The circuit model",
"slide": "Controlled gates",
"keys": [
"open control"
]
},
{
"term_html": "Toffoli gate",
"html": "\\(C^2(X)\\): \\(\\ket{a, b, c}\\mapsto\\ket{a, b, c\\oplus ab}\\). The running example; universal for reversible classical computation.",
"section": "The circuit model",
"slide": "Controlled gates",
"keys": [
"toffoli gate"
]
},
{
"term_html": "permutation matrix",
"html": "A matrix with one entry 1 in each row and column and 0 elsewhere, sending each basis vector to a basis vector. Its columns are orthonormal, so it is unitary.",
"section": "The circuit model",
"slide": "The Toffoli gate, as a matrix",
"keys": [
"permutation matrix"
]
},
{
"term_html": "classically controlled gate",
"html": "A gate applied only if a measured bit, carried by a double line, is 1. Not a single operator but one per measurement branch; deferred measurement replaces it by a controlled gate.",
"section": "The circuit model",
"slide": "Measurement and classical control",
"keys": [
"classically controlled gate"
]
},
{
"term_html": "size",
"html": "The number of gates in a circuit: the total work.",
"section": "The circuit model",
"slide": "Size and depth",
"keys": [
"size"
]
},
{
"term_html": "depth",
"html": "The least number of layers of gates on disjoint wires a circuit can be cut into; equivalently the longest chain of gates each sharing a wire with the next. The textbook Toffoli circuit has size 15 and depth 11.",
"section": "The circuit model",
"slide": "Size and depth",
"keys": [
"depth"
]
},
{
"term_html": "reversible gate",
"html": "A bijection of \\(\\{0, 1\\}^k\\). Its matrix is a permutation matrix, so every reversible gate is a quantum gate. AND is not reversible; \\((x, y)\\mapsto(x, y\\oplus f(x))\\) is, for every \\(f\\).",
"section": "Classical computation, reversibly",
"slide": "Reversible gates are permutations",
"keys": [
"reversible gate"
]
},
{
"term_html": "garbage",
"html": "The intermediate values a gate-by-gate reversible translation leaves on its work bits, \\(\\ket x\\ket0\\mapsto\\ket x\\ket{f(x)}\\ket{g(x)}\\). On a superposition of inputs it is entangled with \\(x\\) and acts as a which-path record: interference between different \\(x\\) is lost.",
"section": "Classical computation, reversibly",
"slide": "Garbage destroys interference",
"keys": [
"garbage"
]
},
{
"term_html": "uncomputation (Bennett's trick)",
"html": "Compute \\(f\\) with garbage by a reversible circuit \\(C\\), copy the output onto a target with CNOTs, then run \\(C^{-1}\\): the result is \\(\\ket x\\ket0\\ket0\\ket y\\mapsto\\ket x\\ket0\\ket0\\ket{y\\oplus f(x)}\\), with the work registers restored and unentangled, at about twice the gates (Bennett 1973).",
"section": "Classical computation, reversibly",
"slide": "Bennett's uncomputation",
"keys": [
"uncomputation (bennett's trick)",
"uncomputation",
"bennett's trick"
]
},
{
"term_html": "work qubit (ancilla)",
"html": "A qubit borrowed in a known state, usually \\(\\ket0\\), and returned in it, so that it ends unentangled with the rest and can be reused.",
"section": "Classical computation, reversibly",
"slide": "Bennett's uncomputation",
"keys": [
"work qubit (ancilla)",
"work qubit",
"ancilla"
]
},
{
"term_html": "oracle",
"html": "For \\(f:\\{0, 1\\}^n\\to\\{0, 1\\}^m\\), the unitary \\(U_f\\ket x\\ket y = \\ket x\\ket{y\\oplus f(x)}\\), work qubits returned to \\(\\ket0\\). If \\(f\\) is polynomial-time, \\(U_f\\) has polynomial-size circuits of Toffoli, CNOT and \\(X\\) gates.",
"section": "Classical computation, reversibly",
"slide": "Every polynomial-time function is a polynomial-size oracle",
"keys": [
"oracle"
]
},
{
"term_html": "deferred measurement",
"html": "A measurement whose outcome is used only to control later gates may be replaced by the corresponding quantum-controlled gate, \\(W = \\ket0\\!\\bra0\\otimes U_0 + \\ket1\\!\\bra1\\otimes U_1\\), with the measurement moved to the end: every joint outcome probability, and every post-measurement state, is unchanged.",
"section": "Deferred measurement",
"slide": "The principle of deferred measurement",
"keys": [
"deferred measurement"
]
},
{
"term_html": "implicit measurement",
"html": "A qubit no longer acted on may be measured or not: the statistics of the other qubits are the same, since \\(\\sum_m\\lVert(P_m\\otimes Q_k)\\phi\\rVert^2 = \\lVert(I\\otimes Q_k)\\phi\\rVert^2\\).",
"section": "Deferred measurement",
"slide": "Measure at the end, or not at all",
"keys": [
"implicit measurement"
]
},
{
"term_html": "exact universality",
"html": "A gate set is exactly universal if every unitary on any number of qubits is exactly a product of its gates. CNOT together with all one-qubit gates is (Barenco et al. 1995).",
"section": "Exact universality",
"slide": "The plan: four reductions",
"keys": [
"exact universality"
]
},
{
"term_html": "two-level unitary",
"html": "A unitary on \\(\\mathbb C^d\\) that fixes all basis vectors but two, \\(\\ket s, \\ket t\\), and acts on their span as a \\(2\\times2\\) unitary. Every \\(d\\times d\\) unitary is a product of at most \\(d(d-1)/2\\) of them.",
"section": "Exact universality",
"slide": "Two-level unitaries, and the step that zeroes an entry",
"keys": [
"two-level unitary"
]
},
{
"term_html": "multiply-controlled gate",
"html": "A one-qubit gate on one wire, controlled by several others (filled or open controls): \\(C^k(\\tilde U)\\) up to \\(X\\) gates. A two-level unitary on two basis states that differ in one bit is exactly such a gate.",
"section": "Exact universality",
"slide": "Two-level on neighbours is a controlled one-qubit gate",
"keys": [
"multiply-controlled gate"
]
},
{
"term_html": "Gray code",
"html": "A sequence of bit strings from \\(s\\) to \\(t\\) in which consecutive strings differ in one bit; flipping the differing bits one at a time gives one with at most \\(n + 1\\) terms. Swapping along it moves a two-level unitary onto neighbouring basis states.",
"section": "Exact universality",
"slide": "Gray codes: walking two states together",
"keys": [
"gray code"
]
},
{
"term_html": "ABC construction",
"html": "For a one-qubit \\(U = e^{i\\alpha}AXBXC\\) with \\(ABC = I\\) (from the Z-Y-Z form: \\(A = R_z(\\beta)R_y(\\gamma/2)\\), \\(B = R_y(-\\gamma/2)R_z(-(\\delta+\\beta)/2)\\), \\(C = R_z((\\delta-\\beta)/2)\\)), the controlled-\\(U\\) is \\(C\\), CNOT, \\(B\\), CNOT, \\(A\\) on the target and the phase gate \\(\\mathrm{diag}(1, e^{i\\alpha})\\) on the control.",
"section": "Exact universality",
"slide": "Controlled-U from two CNOTs: the ABC construction",
"keys": [
"abc construction"
]
},
{
"term_html": "phase polynomial",
"html": "A circuit of CNOTs and \\(T\\), \\(T^\\dagger\\) gates that returns every wire to its input acts diagonally, \\(\\ket v\\mapsto e^{i\\pi f(v)/4}\\ket v\\), where \\(f\\) adds \\(\\pm\\) the XOR of inputs held on the wire at each \\(T\\) (\\(+\\)) or \\(T^\\dagger\\) (\\(-\\)). For the Toffoli's middle, \\(f = 4abx\\).",
"section": "Exact universality",
"slide": "The textbook Toffoli: six CNOTs, seven T gates",
"keys": [
"phase polynomial"
]
},
{
"term_html": "generic unitary",
"html": "A property holds for a generic unitary if the unitaries failing it form a set of measure zero. A generic \\(n\\)-qubit unitary needs at least \\((4^n - 1)/16\\), so at least \\(4^{n-2}\\), gates on at most two qubits, because the circuits with fewer form the smooth image of a space of dimension below \\(\\dim U(2^n) = 4^n\\).",
"section": "Counting",
"slide": "The counting lower bound",
"keys": [
"generic unitary"
]
}
];
