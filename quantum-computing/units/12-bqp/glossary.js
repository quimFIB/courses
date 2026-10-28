// Generated from GLOSSARY.org by `qc glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "BQP",
"html": "Bounded-error quantum polynomial time: the languages \\(L\\) decided by a uniform family of quantum circuits over a fixed finite universal gate set (here \\(\\{H, T, \\mathrm{CNOT}\\}\\)), run on \\(\\ket{x, 0\\cdots0}\\) with qubit 0 measured, accepting with probability \\(\\ge\\frac23\\) when \\(x\\in L\\) and \\(\\le\\frac13\\) when \\(x\\notin L\\), on every input. Independent of the gate set and of the constant \\(\\frac13\\). Contains BPP, contained in PP and in PSPACE.",
"section": "The class",
"slide": "BQP",
"keys": [
"bqp"
]
},
{
"term_html": "uniform circuit family",
"html": "A sequence \\((C_n)\\) of circuits, \\(C_n\\) acting on \\(n + a(n)\\) qubits with gates from a fixed finite set, such that a deterministic Turing machine prints a description of \\(C_n\\) from \\(1^n\\) in time polynomial in \\(n\\). Uniformity forces polynomial size, and rules out families that decide undecidable languages by encoding one uncomputable bit per length.",
"section": "The class",
"slide": "A circuit family, and who builds it",
"keys": [
"uniform circuit family"
]
},
{
"term_html": "amplification",
"html": "Running a bounded-error circuit \\(k\\) times on independent registers and taking the majority, computed reversibly into one output qubit. With error \\(\\le\\frac13\\) per run, Hoeffding's inequality bounds the majority's error by \\(e^{-k/18}\\); error \\(2^{-100}\\) needs \\(k = 1248\\).",
"section": "The class",
"slide": "The constant does not matter: majority of k runs",
"keys": [
"amplification"
]
},
{
"term_html": "low for itself",
"html": "A class \\(\\mathsf C\\) is low for itself when \\(\\mathsf C^{\\mathsf C} = \\mathsf C\\): machines in \\(\\mathsf C\\) gain nothing from an oracle for any language in \\(\\mathsf C\\). BQP is (Bennett, Bernstein, Brassard and Vazirani 1997, cited); the key step is compute, copy, uncompute, which leaves a subroutine within \\(\\sqrt{2\\varepsilon}\\) of a clean oracle when its error is \\(\\varepsilon\\).",
"section": "The class",
"slide": "Using an answer without measuring it",
"keys": [
"low for itself"
]
},
{
"term_html": "state-vector simulation",
"html": "Classical simulation of a circuit on \\(m\\) qubits by storing all \\(2^m\\) amplitudes and updating them gate by gate; a gate on qubit \\(q\\) mixes the pairs of amplitudes whose indices differ in bit \\(q\\). Time \\(O(T\\,2^m)\\), memory \\(2^m\\) numbers (18.0 PB at \\(m = 50\\) in double precision). Proves BQP \\(\\subseteq\\) EXP.",
"section": "Simulation by keeping every amplitude",
"slide": "Pushing a vector through the gates",
"keys": [
"state-vector simulation"
]
},
{
"term_html": "EXP",
"html": "The languages decided by a deterministic Turing machine in time \\(2^{q(n)}\\) for some polynomial \\(q\\). Contains PSPACE; strictly contains P by the time hierarchy theorem (cited).",
"section": "Simulation by keeping every amplitude",
"slide": "Pushing a vector through the gates",
"keys": [
"exp"
]
},
{
"term_html": "PSPACE",
"html": "The languages decided by a deterministic Turing machine using at most \\(q(n)\\) tape cells, \\(q\\) a polynomial, with no bound on time. Contains NP and PP (enumerate certificates, reusing space) and BQP (sum over paths depth-first); contained in EXP. Whether P = PSPACE is open.",
"section": "Paths, and polynomial space",
"slide": "PSPACE: polynomial memory, any amount of time",
"keys": [
"pspace"
]
},
{
"term_html": "real-amplitude encoding",
"html": "The map \\(a + ib \\mapsto a\\otimes\\ket0 + b\\otimes\\ket1\\) onto one extra qubit, under which a gate \\(U = A + iB\\) (\\(A, B\\) real) acts as the real orthogonal \\(\\tilde U = A\\otimes I + B\\otimes J\\), \\(J = \\begin{pmatrix}0&amp;-1\\\\1&amp;0\\end{pmatrix}\\). Outcome probabilities are unchanged, so complex amplitudes cost one qubit.",
"section": "Paths, and polynomial space",
"slide": "First, make every gate a coin or a permutation",
"keys": [
"real-amplitude encoding"
]
},
{
"term_html": "path",
"html": "For a circuit \\(G_T\\cdots G_1\\) started at \\(\\ket s\\), a sequence of basis strings \\(s = z_0, z_1, \\dots, z_T\\), with amplitude \\(\\prod_t\\bra{z_t}G_t\\ket{z_{t-1}}\\). With only \\(H\\) and permutation gates, the non-zero paths are labelled by the \\(h\\) bits chosen at the Hadamards, and each has amplitude \\(\\pm2^{-h/2}\\), its sign and endpoint computable in polynomial time.",
"section": "Paths, and polynomial space",
"slide": "A path through a circuit",
"keys": [
"path"
]
},
{
"term_html": "path sum",
"html": "\\(\\bra zC\\ket s = \\sum_{\\text{paths ending at }z}\\prod_t \\bra{z_t}G_t\\ket{z_{t-1}}\\), from inserting the resolution of the identity between the gates: Feynman's sum over histories for a circuit. Evaluated depth-first it needs only polynomial memory.",
"section": "Paths, and polynomial space",
"slide": "A path through a circuit",
"keys": [
"path sum"
]
},
{
"term_html": "#P",
"html": "The functions \\(f(x) = \\#\\{y\\in\\{0,1\\}^{p(|x|)} : R(x, y)\\}\\) for a polynomial-time predicate \\(R\\): counting certificates, for example the satisfying assignments of a formula (Valiant 1979).",
"section": "Counting, with signs",
"slide": "#P and GapP",
"keys": [
"#p"
]
},
{
"term_html": "GapP",
"html": "Differences of two #P functions; equivalently, signed sums \\(\\sum_y s(x, y)\\) with \\(s\\) polynomial-time and valued in \\(\\{-1, 0, 1\\}\\). Closed under negation, sums, products, sums over exponentially many arguments, and contains \\(2^{q(|x|)}\\). The acceptance probability of a Hadamard-and-Toffoli circuit is \\(g(x)/2^h\\) with \\(g\\in\\) GapP.",
"section": "Counting, with signs",
"slide": "#P and GapP",
"keys": [
"gapp"
]
},
{
"term_html": "PP",
"html": "Probabilistic polynomial time: \\(x\\in L\\) iff more than half of the certificates \\(y\\in\\{0,1\\}^{p(|x|)}\\) satisfy \\(R(x, y)\\), with no gap required; equivalently, iff \\(F(x) \\gt 0\\) for some \\(F\\in\\) GapP. Contains NP and BQP, contained in PSPACE, closed under complement.",
"section": "Counting, with signs",
"slide": "PP: more than half, with no gap required",
"keys": [
"pp"
]
},
{
"term_html": "PostBQP",
"html": "BQP with postselection: a circuit with an extra qubit that must read 1 with non-zero probability, correct with probability \\(\\ge\\frac23\\) conditioned on that event. Aaronson (2005, cited) proved PostBQP = PP; NP \\(\\subseteq\\) PostBQP is the first step.",
"section": "Counting, with signs",
"slide": "Why PP is probably far larger than BQP",
"keys": [
"postbqp"
]
},
{
"term_html": "polynomial hierarchy",
"html": "\\(\\mathsf{PH} = \\bigcup_k\\Sigma_k^{\\mathsf p}\\), where \\(L\\in\\Sigma_k^{\\mathsf p}\\) iff \\(x\\in L \\iff \\exists y_1\\forall y_2\\cdots Q_ky_k\\,R(x, y_1, \\dots, y_k)\\) with polynomial-length \\(y_i\\) and polynomial-time \\(R\\). \\(\\Sigma_1^{\\mathsf p} = \\) NP. Contained in PSPACE; relative to some oracle, BQP is not contained in it (Raz and Tal 2019, cited).",
"section": "The placement",
"slide": "The polynomial hierarchy, and what an oracle is",
"keys": [
"polynomial hierarchy"
]
},
{
"term_html": "oracle",
"html": "A fixed language \\(A\\) that a machine may query at unit cost; a quantum circuit queries it with the gate \\(U_A\\ket{y, b} = \\ket{y, b\\oplus A(y)}\\), possibly on a superposition of \\(y\\)'s. A proof that works relative to every oracle relativises, and cannot prove a statement that fails relative to some oracle.",
"section": "The placement",
"slide": "The polynomial hierarchy, and what an oracle is",
"keys": [
"oracle"
]
}
];
