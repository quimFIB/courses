// Generated from GLOSSARY.org by `qc glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "QMA",
"html": "Quantum Merlin–Arthur: the (promise) problems for which a uniform family of polynomial-size quantum circuits \\(V_x\\), run on \\(a\\) ancillas in \\(\\ket0\\) and a witness register of \\(p\\) qubits and read on qubit 0, accepts some witness with probability \\(\\ge\\frac23\\) on yes-instances and every witness with probability \\(\\le\\frac13\\) on no-instances. Contains NP, MA and BQP; contained in PP (Kitaev and Watrous 2000, cited). Kitaev called it BQNP; the name is Watrous's.",
"section": "Quantum proofs: QMA",
"slide": "QMA",
"keys": [
"qma"
]
},
{
"term_html": "witness",
"html": "The quantum proof Merlin sends: a unit vector on \\(p(|x|)\\) qubits, untrusted, which Arthur's verifier circuit takes as a second input beside its ancillas. Pure states suffice: a random mixture of witnesses is accepted with the average of their probabilities, so some pure one does at least as well.",
"section": "Quantum proofs: QMA",
"slide": "QMA",
"keys": [
"witness"
]
},
{
"term_html": "completeness",
"html": "The yes-side condition of a verifier: on a yes-instance some witness is accepted with probability at least \\(c\\) (\\(\\frac23\\) in the definition). For the running example, \\(\\ket{h_+}\\) is accepted with certainty.",
"section": "Quantum proofs: QMA",
"slide": "QMA",
"keys": [
"completeness"
]
},
{
"term_html": "soundness",
"html": "The no-side condition of a verifier: on a no-instance every witness, including every superposition and every entangled state, is accepted with probability at most \\(s\\) (\\(\\frac13\\) in the definition). Equivalent to \\(\\lambda_{\\max}(Q_x)\\le s\\) for the acceptance operator.",
"section": "Quantum proofs: QMA",
"slide": "QMA",
"keys": [
"soundness"
]
},
{
"term_html": "positive semidefinite",
"html": "A Hermitian \\(A\\) with \\(\\bra vA\\ket v\\ge0\\) for all \\(v\\), equivalently with all eigenvalues \\(\\ge0\\); written \\(A\\ge0\\), and \\(A\\le B\\) means \\(B - A\\ge0\\). Projections and every \\(C^\\dagger C\\) are positive. Every term of a local Hamiltonian here satisfies \\(0\\le H_j\\le I\\).",
"section": "Quantum proofs: QMA",
"slide": "Positive operators, and the best witness",
"keys": [
"positive semidefinite"
]
},
{
"term_html": "variational principle",
"html": "For Hermitian \\(A\\), \\(\\lambda_{\\min}(A) = \\min_{\\lVert v\\rVert=1}\\bra vA\\ket v\\) and \\(\\lambda_{\\max}(A) = \\max_{\\lVert v\\rVert=1}\\bra vA\\ket v\\), because \\(\\bra vA\\ket v\\) is an average of the eigenvalues weighted by \\(|c_i|^2\\). It makes the best witness an eigenvector of the acceptance operator and the ground energy a minimum over states.",
"section": "Quantum proofs: QMA",
"slide": "Positive operators, and the best witness",
"keys": [
"variational principle"
]
},
{
"term_html": "acceptance operator",
"html": "\\(Q_x = J^\\dagger V_x^\\dagger(\\ket1\\!\\bra1_0\\otimes I)V_xJ\\) with \\(J\\ket\\xi = \\ket{0^a}\\ket\\xi\\): the positive operator, between 0 and \\(I\\), whose expectation in \\(\\ket\\xi\\) is the probability that the verifier accepts \\(\\xi\\). For the running example \\(Q = \\frac12(I + \\mathrm{Had})\\), a projection.",
"section": "Quantum proofs: QMA",
"slide": "Positive operators, and the best witness",
"keys": [
"acceptance operator"
]
},
{
"term_html": "no-cloning",
"html": "No unitary maps \\(\\ket\\psi\\ket0\\mapsto\\ket\\psi\\ket\\psi\\) for two states that are neither equal nor orthogonal, since unitaries preserve inner products and \\(z = z^2\\) forces \\(z\\in\\{0, 1\\}\\). The two lines that stop Arthur from copying a witness to rerun his check; unit 05 proves the full theorem.",
"section": "Quantum proofs: QMA",
"slide": "Amplification is not free: the witness cannot be copied",
"keys": [
"no-cloning"
]
},
{
"term_html": "parallel repetition",
"html": "Amplifying a QMA verifier by asking for \\(k\\) witness registers, running \\(V_x\\) on each with fresh ancillas, and taking a majority. Entangled cheating witnesses do not help: in the product eigenbasis of \\(Q_x^{\\otimes k}\\) the outcome distribution is a mixture of independent coins of bias \\(\\le s\\), so Hoeffding bounds the error by \\(e^{-k/18}\\).",
"section": "Quantum proofs: QMA",
"slide": "Parallel repetition, and why entanglement does not help",
"keys": [
"parallel repetition"
]
},
{
"term_html": "Marriott–Watrous amplification",
"html": "In-place amplification of QMA (Marriott and Watrous, <em>Comput. Complexity</em> 14, 122, 2005, cited): alternating \\(V_x\\), a check that the ancillas returned to \\(\\ket{0^a}\\), and \\(V_x^\\dagger\\) on a single copy of the witness reaches error \\(2^{-r}\\) in \\(O(r)\\) runs without lengthening the witness.",
"section": "Quantum proofs: QMA",
"slide": "Any gap will do, and Marriott–Watrous",
"keys": [
"marriott–watrous amplification"
]
},
{
"term_html": "ground energy",
"html": "The least eigenvalue \\(E_0(H)\\) of a Hamiltonian, equal to \\(\\min_{\\lVert v\\rVert=1}\\bra vH\\ket v\\); an eigenvector for it is a ground state. Physically, the state a system settles into when cooled towards zero temperature (Boltzmann's law, cited); chemically, what fixes molecular shapes and reaction energies.",
"section": "The local Hamiltonian problem",
"slide": "Ground states: what matter does when it is cold",
"keys": [
"ground energy"
]
},
{
"term_html": "k-local Hamiltonian problem",
"html": "Given \\(H = \\sum_{j=1}^mH_j\\), each term acting on at most \\(k\\) of \\(n\\) qubits with \\(0\\le H_j\\le I\\), \\(m\\) polynomial, and thresholds \\(a\\lt b\\) with \\(b - a\\ge1/\\mathrm{poly}(n)\\), decide whether \\(E_0(H)\\le a\\) or \\(E_0(H)\\ge b\\), one being promised. In QMA for constant \\(k\\) (the random-term test); QMA-complete for \\(k = 5\\) (Kitaev), and for \\(k = 2\\) (Kempe, Kitaev and Regev 2006, cited).",
"section": "The local Hamiltonian problem",
"slide": "The k-local Hamiltonian problem",
"keys": [
"k-local hamiltonian problem"
]
},
{
"term_html": "promise gap",
"html": "The width \\(b - a\\) of the excluded band between the yes and no thresholds of a local Hamiltonian instance. 1 for the classical 3-SAT shadow; \\(\\Omega(1/T^3)\\) for the Feynman–Kitaev construction from a \\(T\\)-gate verifier. Whether a constant fraction of \\(m\\) is possible is the quantum PCP conjecture.",
"section": "The local Hamiltonian problem",
"slide": "The k-local Hamiltonian problem",
"keys": [
"promise gap"
]
},
{
"term_html": "frustration",
"html": "The impossibility of satisfying every term of a Hamiltonian at once, so that the ground energy is positive: three spins on a triangle, each bond penalised when aligned, have ground energy 1. The physical face of an unsatisfiable formula; finding Ising spin-glass ground energies is NP-hard (Barahona 1982, cited).",
"section": "The local Hamiltonian problem",
"slide": "NP-hard before anything quantum happens",
"keys": [
"frustration"
]
},
{
"term_html": "tableau",
"html": "In Cook–Levin's proof, the array whose row \\(t\\) is a verifier's configuration after step \\(t\\), all rows present at once as bits of one assignment, checked by constant-size window clauses. Any error violates at least one clause, a constant penalty.",
"section": "The history state",
"slide": "Cook–Levin, recalled: a tableau checked by windows",
"keys": [
"tableau"
]
},
{
"term_html": "history state",
"html": "For a circuit \\(U_T\\cdots U_1\\) and input \\(\\ket\\phi\\), \\(\\ket{\\eta_\\phi} = (T + 1)^{-1/2}\\sum_{t=0}^TU_t\\cdots U_1\\ket\\phi\\otimes\\ket t\\): the computation's rows superposed and labelled by a clock, linear in \\(\\phi\\) where a tensor product of rows would be quadratic. Feynman (1985) for the dynamics, Kitaev (1999) as a ground state.",
"section": "The history state",
"slide": "Why a quantum tableau cannot be written down",
"keys": [
"history state"
]
},
{
"term_html": "unary clock",
"html": "\\(T\\) clock qubits with time \\(t\\) encoded as \\(\\ket{1^t0^{T-t}}\\). \"The time is \\(t\\)\" is read from two qubits (\\(c_tc_{t+1} = 10\\)) and the step \\(t - 1\\to t\\) is the 3-qubit operator \\(\\ket{110}\\!\\bra{100}\\) on \\(c_{t-1}c_tc_{t+1}\\); a binary clock would need \\(\\Theta(\\log T)\\)-local terms.",
"section": "The history state",
"slide": "A clock that can be read locally: unary",
"keys": [
"unary clock"
]
},
{
"term_html": "legal subspace",
"html": "The span of the \\(T + 1\\) legal clock strings \\(1^t0^{T-t}\\), tensored with the whole computation register. The Feynman–Kitaev Hamiltonian preserves it and its complement, and costs at least 1 on the complement, where some \"01\" pattern fires the clock term.",
"section": "The history state",
"slide": "A clock that can be read locally: unary",
"keys": [
"legal subspace"
]
},
{
"term_html": "Feynman–Kitaev Hamiltonian",
"html": "\\(H = H_{\\mathrm{in}} + H_{\\mathrm{out}} + H_{\\mathrm{clock}} + H_{\\mathrm{prop}}\\) built from a verifier circuit and a unary clock: 5-local, with one term per ancilla, one for the output, one per adjacent clock pair and one per gate. Ground energy \\(\\le\\varepsilon/(T + 1)\\) if some witness is accepted with probability \\(\\ge1 - \\varepsilon\\), and \\(\\ge(1 - \\sqrt\\varepsilon)/(T + 1)^3\\) if none is accepted above \\(\\varepsilon\\).",
"section": "The history state",
"slide": "Four penalties",
"keys": [
"feynman–kitaev hamiltonian"
]
},
{
"term_html": "input term",
"html": "\\(H_{\\mathrm{in}} = \\sum_{i\\in\\text{anc}}\\ket1\\!\\bra1_i\\otimes \\ket0\\!\\bra0_{c_1}\\): charges each ancilla that is not 0 at time 0. The witness qubits are left free — the existential quantifier.",
"section": "The history state",
"slide": "Four penalties",
"keys": [
"input term"
]
},
{
"term_html": "output term",
"html": "\\(H_{\\mathrm{out}} = \\ket0\\!\\bra0_0\\otimes\\ket1\\!\\bra1_{c_T}\\): charges a rejecting output at time \\(T\\). On a history state it costs \\((1 - \\Pr[\\text{accept}])/(T + 1)\\).",
"section": "The history state",
"slide": "Four penalties",
"keys": [
"output term"
]
},
{
"term_html": "clock term",
"html": "\\(H_{\\mathrm{clock}} = \\sum_{i=1}^{T-1}\\ket{01}\\!\\bra{01}_{c_i c_{i+1}}\\): the 2-SAT formula \\(\\bigwedge_i(c_i\\lor\\lnot c_{i+1})\\) as a diagonal Hamiltonian, zero exactly on the \\(T + 1\\) legal clock strings.",
"section": "The history state",
"slide": "Four penalties",
"keys": [
"clock term"
]
},
{
"term_html": "propagation term",
"html": "\\(H_{\\mathrm{prop}} = \\sum_tH_t\\) with \\(H_t = \\frac12(I\\otimes\\ket t\\!\\bra t + I\\otimes\\ket{t-1}\\!\\bra{t-1} - U_t\\otimes\\ket t\\!\\bra{t-1} - U_t^\\dagger\\otimes\\ket{t-1}\\!\\bra t)\\), each \\(H_t\\) a projection charging a step that is not \\(U_t\\). Its null space on legal clocks is the history states of all inputs.",
"section": "The history state",
"slide": "Four penalties",
"keys": [
"propagation term"
]
},
{
"term_html": "path Laplacian",
"html": "\\(L = \\sum_{t=1}^T(\\ket t - \\ket{t-1})(\\bra t - \\bra{t-1})\\) on the path with vertices \\(0, \\dots, T\\): degrees minus adjacency, quadratic form \\(\\sum_t(v_t - v_{t-1})^2\\). Conjugating by \\(W = \\sum_tU_t\\cdots U_1\\otimes\\ket t\\!\\bra t\\) turns \\(H_{\\mathrm{prop}}\\) into \\(I\\otimes\\frac12L\\), removing every gate.",
"section": "The propagation term is a path",
"slide": "Untwisting the gates: the propagation term is a path",
"keys": [
"path laplacian"
]
},
{
"term_html": "spectral gap",
"html": "The least non-zero eigenvalue of a positive operator, here of \\(H_{\\mathrm{prop}}\\): \\(1 - \\cos\\frac\\pi{T + 1}\\), between \\(2/(T + 1)^2\\) and \\(\\pi^2/2(T + 1)^2\\); \\(0.0489\\) for nine gates, \\(4.8\\times10^{-4}\\) for 100, \\(4.9\\times10^{-6}\\) for 1000. The eigenvectors of \\(\\frac12L\\) are \\(\\cos(\\pi k(t + \\frac12)/(T + 1))\\).",
"section": "The propagation term is a path",
"slide": "The path's spectrum: cosines",
"keys": [
"spectral gap"
]
},
{
"term_html": "angle between subspaces",
"html": "For subspaces meeting only in 0, the \\(\\theta\\) with \\(\\cos\\theta = \\max|\\braket{x|y}|\\) over unit \\(x, y\\), one in each; equal to \\(\\lVert\\Pi_A\\Pi_B\\rVert\\). For the sister circuit's two null spaces, \\(14.4°\\).",
"section": "Soundness, and the price of a superposition",
"slide": "Kitaev's geometric lemma",
"keys": [
"angle between subspaces"
]
},
{
"term_html": "geometric lemma",
"html": "Kitaev: if \\(A, B\\ge0\\) have null spaces at angle \\(\\theta\\) and non-zero eigenvalues at least \\(\\lambda_A\\), \\(\\lambda_B\\), then \\(A + B\\ge\\min(\\lambda_A, \\lambda_B)\\cdot2\\sin^2\\frac\\theta2\\). Proved from the two-line fact that \\(\\ket x\\!\\bra x + \\ket y\\!\\bra y\\) has largest eigenvalue \\(1 + |\\braket{x|y}|\\); an equality for two lines in the plane.",
"section": "Soundness, and the price of a superposition",
"slide": "Kitaev's geometric lemma",
"keys": [
"geometric lemma"
]
},
{
"term_html": "quantum PCP conjecture",
"html": "The open question whether approximating the ground energy of a local Hamiltonian to within a constant fraction of the number of terms is QMA-hard — the analogue of the PCP theorem, which says the same for constraint satisfaction and NP.",
"section": "Soundness, and the price of a superposition",
"slide": "Further: two-local, one dimension, quantum PCP",
"keys": [
"quantum pcp conjecture"
]
},
{
"term_html": "NLTS theorem",
"html": "No low-energy trivial states (Anshu, Breuckmann and Nirkhe, STOC 2023, cited): there are local Hamiltonians all of whose states with energy below a constant fraction of the number of terms require circuits of depth growing with \\(n\\). A consequence of quantum PCP, now proved.",
"section": "Soundness, and the price of a superposition",
"slide": "Further: two-local, one dimension, quantum PCP",
"keys": [
"nlts theorem"
]
}
];
