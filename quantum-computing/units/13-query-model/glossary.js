// Generated from GLOSSARY.org by `qc glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "dot product mod 2",
"html": "For bit strings \\(x, y\\in\\{0, 1\\}^n\\), \\(x\\cdot y = x_0y_0\\oplus\\cdots\\oplus x_{n-1}y_{n-1}\\): 1 when \\(x\\) and \\(y\\) share an odd number of ones. Bilinear for \\(\\oplus\\): \\((x\\oplus x')\\cdot y = x\\cdot y\\oplus x'\\cdot y\\).",
"section": "The running example",
"slide": "A box that hides one string",
"keys": [
"dot product mod 2"
]
},
{
"term_html": "query model",
"html": "A model of computation in which the input — a function \\(f\\), or equivalently its truth table of \\(N = 2^n\\) bits — is reachable only through an oracle, and an algorithm is charged one unit per call; all other computation is free. Lower bounds can be proved in it, so separations between quantum and classical computation are proved there.",
"section": "The query model",
"slide": "Why count queries",
"keys": [
"query model"
]
},
{
"term_html": "query algorithm",
"html": "A quantum algorithm \\(U_T\\tilde U_f U_{T-1}\\cdots\\tilde U_fU_0\\ket{0\\cdots0}\\), with \\(\\tilde U_f = U_f\\otimes I\\) and fixed unitaries \\(U_j\\) that do not depend on \\(f\\), followed by a measurement. It makes \\(T\\) queries.",
"section": "The query model",
"slide": "Quantum query algorithms",
"keys": [
"query algorithm"
]
},
{
"term_html": "query complexity",
"html": "The least number of queries an algorithm needs to compute \\(F\\): \\(Q_E(F)\\) exactly, \\(Q_\\varepsilon(F)\\) with error at most \\(\\varepsilon\\) on every allowed input. Classical versions: \\(D(F)\\) and \\(R_\\varepsilon(F)\\). Always \\(Q_\\varepsilon\\le R_\\varepsilon\\le D\\) and \\(Q_E\\le D\\).",
"section": "The query model",
"slide": "Quantum query algorithms",
"keys": [
"query complexity"
]
},
{
"term_html": "decision tree",
"html": "A rooted binary tree whose internal nodes name inputs to query, whose edges are the answers 0 and 1, and whose leaves name outputs. Every deterministic query algorithm is one; its cost is its depth.",
"section": "The query model",
"slide": "Classical query algorithms: decision trees",
"keys": [
"decision tree"
]
},
{
"term_html": "deterministic query complexity",
"html": "\\(D(F)\\), the least depth of a decision tree that computes \\(F\\) correctly on every allowed input.",
"section": "The query model",
"slide": "Classical query algorithms: decision trees",
"keys": [
"deterministic query complexity"
]
},
{
"term_html": "randomised decision tree",
"html": "A probability distribution over decision trees: coins are flipped first, then the chosen tree runs. It has error \\(\\varepsilon\\) if on every allowed input it is wrong with probability at most \\(\\varepsilon\\) over the coins.",
"section": "The query model",
"slide": "Randomised query algorithms",
"keys": [
"randomised decision tree"
]
},
{
"term_html": "randomised query complexity",
"html": "\\(R_\\varepsilon(F)\\), the least worst-case depth of a randomised decision tree computing \\(F\\) with error at most \\(\\varepsilon\\).",
"section": "The query model",
"slide": "Randomised query algorithms",
"keys": [
"randomised query complexity"
]
},
{
"term_html": "bounded error",
"html": "Error at most a constant below \\(\\frac12\\), conventionally \\(\\frac13\\). A majority of independent runs drives it down exponentially, so the constant changes query counts only by a constant factor.",
"section": "The query model",
"slide": "Randomised query algorithms",
"keys": [
"bounded error"
]
},
{
"term_html": "separation",
"html": "A family of problems \\(F_n\\) on which one query complexity is far below another: exponentially, polynomially, or by a constant factor. It must name the models compared — exact or bounded error, deterministic or randomised.",
"section": "The query model",
"slide": "Randomised query algorithms",
"keys": [
"separation"
]
},
{
"term_html": "adversary argument",
"html": "A lower-bound proof in which an adversary answers each query so as to keep two inputs with different correct outputs consistent with every answer for as long as possible: a fooling pair reaching the same leaf.",
"section": "The query model",
"slide": "Why lower bounds can be proved here",
"keys": [
"adversary argument"
]
},
{
"term_html": "averaging",
"html": "If every deterministic tree of depth \\(k\\) is right with probability at most \\(p\\) on inputs drawn from some distribution, every randomised tree of depth \\(k\\) is right with probability at most \\(p\\) on some input. The easy half of Yao's minimax principle.",
"section": "The query model",
"slide": "Why lower bounds can be proved here",
"keys": [
"averaging"
]
},
{
"term_html": "phase kickback",
"html": "\\(U_f(\\ket x\\ket-) = (-1)^{f(x)}\\ket x\\ket-\\): with the target in \\(\\ket-\\), an eigenvector of \\(X\\) with eigenvalue \\(-1\\), the oracle leaves the target alone and multiplies the input by a sign. On a superposition of inputs the sign is a relative phase.",
"section": "Phase kickback, and Deutsch",
"slide": "Phase kickback",
"keys": [
"phase kickback"
]
},
{
"term_html": "phase oracle",
"html": "\\(O_f\\ket x = (-1)^{f(x)}\\ket x\\): diagonal with entries \\(\\pm1\\), so Hermitian, unitary and its own inverse. Built from one query to \\(U_f\\) and an ancilla in \\(\\ket-\\). It cannot tell \\(f\\) from \\(1\\oplus f\\); a controlled version can. It needs a clean oracle: garbage destroys the interference.",
"section": "Phase kickback, and Deutsch",
"slide": "The phase oracle",
"keys": [
"phase oracle"
]
},
{
"term_html": "Deutsch's algorithm",
"html": "\\(H\\otimes H\\) on \\(\\ket0\\ket1\\), one query, \\(H\\) on the first qubit, measure: the outcome is \\(f(0)\\oplus f(1)\\) with probability one, for any \\(f:\\{0, 1\\}\\to\\{0, 1\\}\\). Deutsch (1985) had a version that succeeded with probability \\(\\frac12\\); this exact one is from Cleve, Ekert, Macchiavello and Mosca (1998).",
"section": "Phase kickback, and Deutsch",
"slide": "Deutsch's algorithm",
"keys": [
"deutsch's algorithm"
]
},
{
"term_html": "Deutsch problem",
"html": "Decide \\(f(0)\\oplus f(1)\\) — whether a function of one bit is constant. Quantum 1 query; classical 2, deterministic or randomised with error below \\(\\frac12\\).",
"section": "Phase kickback, and Deutsch",
"slide": "Deutsch's algorithm",
"keys": [
"deutsch problem"
]
},
{
"term_html": "Hadamard transform",
"html": "\\(H^{\\otimes n}\\ket x = 2^{-n/2}\\sum_y(-1)^{x\\cdot y}\\ket y\\), proved by induction from \\(H\\ket b = 2^{-1/2}\\sum_c(-1)^{bc}\\ket c\\). Real, symmetric, unitary and its own inverse.",
"section": "The Hadamard transform",
"slide": "Hadamards on n qubits",
"keys": [
"hadamard transform"
]
},
{
"term_html": "character",
"html": "A homomorphism from a group to the nonzero complex numbers under multiplication. The characters of \\(\\mathbb Z_2^n\\) are exactly \\(\\chi_y(x) = (-1)^{x\\cdot y}\\), one for each \\(y\\), and they are orthogonal: \\(\\sum_x\\chi_y(x)\\chi_z(x) = 2^n\\delta_{yz}\\). Unit 15 generalises to every finite abelian group.",
"section": "The Hadamard transform",
"slide": "The characters of ℤ₂ⁿ",
"keys": [
"character"
]
},
{
"term_html": "Fourier transform over ℤ₂ⁿ",
"html": "\\(\\hat F(y) = 2^{-n}\\sum_xF(x)(-1)^{x\\cdot y}\\), with inverse \\(F = \\sum_y\\hat F(y)\\chi_y\\); for \\(F = \\pm1\\), \\(\\sum_y\\hat F(y)^2 = 1\\). As a unitary on amplitudes it is \\(H^{\\otimes n}\\).",
"section": "The Hadamard transform",
"slide": "Fourier sampling",
"keys": [
"fourier transform over ℤ₂ⁿ"
]
},
{
"term_html": "Fourier sampling",
"html": "The circuit \\(H^{\\otimes n}O_fH^{\\otimes n}\\) on \\(\\ket{0^n}\\), one query: it outputs \\(y\\) with probability \\(\\hat F(y)^2\\), where \\(F = (-1)^f\\). Deutsch–Jozsa reads \\(\\hat F(0^n)\\); Bernstein–Vazirani reads off the character \\(F\\) is.",
"section": "The Hadamard transform",
"slide": "Fourier sampling",
"keys": [
"fourier sampling"
]
},
{
"term_html": "Deutsch–Jozsa problem",
"html": "Given \\(f:\\{0, 1\\}^n\\to\\{0, 1\\}\\) promised constant or balanced, decide which.",
"section": "Deutsch–Jozsa",
"slide": "Constant or balanced",
"keys": [
"deutsch–jozsa problem"
]
},
{
"term_html": "constant",
"html": "Taking one value on all \\(2^n\\) inputs.",
"section": "Deutsch–Jozsa",
"slide": "Constant or balanced",
"keys": [
"constant"
]
},
{
"term_html": "balanced",
"html": "Taking the value 1 on exactly half the inputs, \\(2^{n-1}\\) of them.",
"section": "Deutsch–Jozsa",
"slide": "Constant or balanced",
"keys": [
"balanced"
]
},
{
"term_html": "Deutsch–Jozsa algorithm",
"html": "Fourier sampling, answering \"constant\" iff the outcome is \\(0^n\\): the amplitude of \\(0^n\\) is \\(2^{-n}\\sum_x(-1)^{f(x)}\\), which is \\(\\pm1\\) for constant \\(f\\) and \\(0\\) for balanced. Exact, one query, against \\(2^{n-1} + 1\\) deterministic queries — but at most 3 randomised queries at error \\(\\frac13\\). Deutsch and Jozsa (1992) used two queries; the one-query form is from 1998.",
"section": "Deutsch–Jozsa",
"slide": "Constant or balanced",
"keys": [
"deutsch–jozsa algorithm"
]
},
{
"term_html": "one-sided error",
"html": "An algorithm whose errors all go one way. The random test for Deutsch–Jozsa never says \"balanced\" wrongly; it errs only by saying \"constant\" on a balanced \\(f\\), with probability \\(2^{1-k}\\) after \\(k\\) queries.",
"section": "Deutsch–Jozsa",
"slide": "With coins: a constant number",
"keys": [
"one-sided error"
]
},
{
"term_html": "Bernstein–Vazirani problem",
"html": "Given \\(f(x) = s\\cdot x\\) for an unknown \\(s\\in\\{0, 1\\}^n\\), find \\(s\\). Quantum: one query, exactly, since the phase state is \\(H^{\\otimes n}\\ket s\\). Classical: \\(n\\) queries, and no fewer even with coins and any error below \\(\\frac12\\), by counting leaves.",
"section": "Bernstein–Vazirani",
"slide": "Find the hidden string",
"keys": [
"bernstein–vazirani problem"
]
},
{
"term_html": "recursive Fourier sampling",
"html": "Bernstein and Vazirani's nesting of their problem \\(h\\) levels deep, each node's hidden string determined by its children's answers. Quantumly \\(2^{h-1}\\) queries, by exact, garbage-free recursion; classically superpolynomially many at \\(h = \\log_2 n\\) (cited). The first oracle separation of quantum from classical randomised polynomial time.",
"section": "Bernstein–Vazirani",
"slide": "One against n is only polynomial",
"keys": [
"recursive fourier sampling"
]
}
];
