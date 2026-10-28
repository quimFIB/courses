// Generated from GLOSSARY.org by `qc glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "transverse-field Ising chain",
"html": "\\(H = -J\\sum_{i=0}^{n-2}Z_iZ_{i+1} - h\\sum_{i=0}^{n-1}X_i\\) with \\(J, h &gt; 0\\): \\(n\\) spins in a row whose neighbours prefer to agree along \\(z\\) (the \\(J\\) term) while a magnetic field along \\(x\\) pulls each towards \\(\\ket{+}\\) (the \\(h\\) term). The two parts do not commute.",
"section": "Feynman's reason",
"slide": "Spins in a row",
"keys": [
"transverse-field ising chain"
]
},
{
"term_html": "quantum phase transition",
"html": "An abrupt change in the character of the lowest state of a family of Hamiltonians as a parameter crosses a critical value, in the limit of infinitely many particles. For the infinite transverse-field Ising chain it happens at \\(J = h\\): ordered for \\(h &lt; J\\), disordered for \\(h &gt; J\\) (Pfeuty 1970, cited).",
"section": "Feynman's reason",
"slide": "What the two terms want",
"keys": [
"quantum phase transition"
]
},
{
"term_html": "Hamiltonian simulation",
"html": "Given \\(H\\) on \\(n\\) qubits, a time \\(t\\) and an accuracy \\(\\varepsilon\\), produce a circuit \\(W\\) with \\(\\lVert W - e^{-iHt}\\rVert \\le \\varepsilon\\). Every outcome probability after \\(W\\) is then within \\(2\\varepsilon\\) of the true one.",
"section": "Feynman's reason",
"slide": "What a simulator must deliver",
"keys": [
"hamiltonian simulation"
]
},
{
"term_html": "magnetisation",
"html": "\\(M = \\frac1n\\sum_i Z_i\\), the average moment along \\(z\\); its expectation is estimated by repeating a simulation and averaging the \\(\\pm1\\) outcomes.",
"section": "Feynman's reason",
"slide": "What a simulator must deliver",
"keys": [
"magnetisation"
]
},
{
"term_html": "k-local Hamiltonian",
"html": "\\(H = \\sum_{j=1}^L H_j\\) with each \\(H_j\\) Hermitian and acting on at most \\(k = O(1)\\) qubits, and \\(L\\) polynomial in \\(n\\). The chain is 2-local with \\(L = 2n - 1\\).",
"section": "Feynman's reason",
"slide": "Local Hamiltonians",
"keys": [
"k-local hamiltonian"
]
},
{
"term_html": "Trotter step",
"html": "The replacement of \\(e^{-i(A+B)\\delta}\\) by \\(e^{-iA\\delta}e^{-iB\\delta}\\). The two agree to first order in \\(\\delta\\) and differ at second by \\(-\\frac12[A, B]\\delta^2\\).",
"section": "Lie–Trotter, proved",
"slide": "The error, to leading order",
"keys": [
"trotter step"
]
},
{
"term_html": "one-step bound",
"html": "For Hermitian \\(A\\), \\(B\\) and \\(\\delta &gt; 0\\), \\(\\lVert e^{-i(A+B)\\delta} - e^{-iA\\delta}e^{-iB\\delta}\\rVert \\le \\frac12\\lVert[A, B]\\rVert\\delta^2\\). Proved by differentiating \\(F = U^\\dagger V\\), bounding \\(\\lVert F'(s)\\rVert \\le s\\lVert[A, B]\\rVert\\), and integrating.",
"section": "Lie–Trotter, proved",
"slide": "One step costs at most half a commutator",
"keys": [
"one-step bound"
]
},
{
"term_html": "first-order Trotter bound",
"html": "\\(\\lVert e^{-i(A+B)t} - (e^{-iAt/r}e^{-iBt/r})^r\\rVert \\le \\lVert[A, B]\\rVert t^2/2r\\): the one-step bound, added over \\(r\\) steps by the hybrid argument. For accuracy \\(\\varepsilon\\), \\(r \\ge \\lVert[A, B]\\rVert t^2/2\\varepsilon\\).",
"section": "Lie–Trotter, proved",
"slide": "r steps: the errors add",
"keys": [
"first-order trotter bound"
]
},
{
"term_html": "Lie product formula",
"html": "\\(\\lim_{r\\to\\infty}(e^{-iAt/r}e^{-iBt/r})^r = e^{-i(A+B)t}\\); Lie for matrices, Trotter (1959) for operators.",
"section": "Lie–Trotter, proved",
"slide": "r steps: the errors add",
"keys": [
"lie product formula"
]
},
{
"term_html": "Strang splitting (second-order product formula)",
"html": "The symmetric step \\(S(\\delta) = e^{-iA\\delta/2}e^{-iB\\delta}e^{-iA\\delta/2}\\). Its error is \\(O(\\delta^3)\\) per step, so \\(O(t^3/r^2)\\) over \\(r\\) steps, with the nested-commutator constant \\(\\frac{\\delta^3}{12}\\lVert[B, [B, A]]\\rVert + \\frac{\\delta^3}{24}\\lVert[A, [A, B]]\\rVert\\) (cited). Adjacent half-steps merge, so it costs almost exactly what first order does.",
"section": "The numbers, and second order",
"slide": "Strang's symmetric splitting",
"keys": [
"strang splitting (second-order product formula)",
"strang splitting",
"second-order product formula"
]
},
{
"term_html": "Suzuki formulas",
"html": "Product formulas of every even order \\(2k\\), built recursively from Strang's, with error \\(O(\\delta^{2k+1})\\) per step (Suzuki 1991, cited).",
"section": "The numbers, and second order",
"slide": "Higher orders, and sharper bounds",
"keys": [
"suzuki formulas"
]
},
{
"term_html": "commutator scaling",
"html": "Bounding a product formula's error by norms of nested commutators of the terms rather than by their norms (Childs, Su, Tran, Wiebe and Zhu 2021, cited). For local Hamiltonians most pairs commute, so the constant grows like \\(n\\), not \\(n^2\\).",
"section": "The numbers, and second order",
"slide": "Higher orders, and sharper bounds",
"keys": [
"commutator scaling"
]
},
{
"term_html": "quantum signal processing",
"html": "A method (Low and Chuang 2017) that transforms the eigenvalues of a unitary encoding \\(H\\) by a polynomial, using a sequence of single-qubit rotations; with qubitisation it simulates \\(e^{-iHt}\\) with optimal cost in \\(t\\) and \\(\\varepsilon\\). Named, not developed.",
"section": "The numbers, and second order",
"slide": "Higher orders, and sharper bounds",
"keys": [
"quantum signal processing"
]
},
{
"term_html": "qubitisation",
"html": "Low and Chuang's (2019) construction of a walk operator from a block encoding of \\(H/\\lambda\\), giving simulation in \\(O(\\lambda t + \\log(1/\\varepsilon))\\) uses, \\(\\lambda\\) the sum of the absolute Pauli coefficients of \\(H\\). Named, not developed.",
"section": "The numbers, and second order",
"slide": "Higher orders, and sharper bounds",
"keys": [
"qubitisation"
]
},
{
"term_html": "Pauli-product rotation",
"html": "\\(e^{-i\\theta P}\\) for a Pauli product \\(P = P_1 \\otimes\\cdots\\otimes P_k\\). Built from one \\(R_z(2\\theta)\\), \\(2(k-1)\\) CNOTs computing and uncomputing a parity, and single-qubit Cliffords changing each factor's basis to \\(Z\\). For \\(k = 2\\): \\(e^{-i\\theta Z\\otimes Z} = \\mathrm{CNOT}\\,(I\\otimes R_z(2\\theta))\\,\\mathrm{CNOT}\\).",
"section": "From steps to gates",
"slide": "Any Pauli product: change basis, compute the parity",
"keys": [
"pauli-product rotation"
]
},
{
"term_html": "ground state",
"html": "An eigenvector of \\(H\\) for its least eigenvalue. Every unit vector has \\(\\braket{\\psi|H|\\psi} \\ge E_0\\) (the variational principle).",
"section": "Energies, by phase estimation",
"slide": "Energies are eigenphases of the evolution",
"keys": [
"ground state"
]
},
{
"term_html": "ground energy",
"html": "The least eigenvalue \\(E_0\\) of \\(H\\). For the chain at \\(n = 8\\), \\(J = h = 1\\): \\(-9.838\\). Read by phase estimation on \\(e^{-iH\\tau}\\), whose eigenphase for energy \\(E\\) is \\(-E\\tau/2\\pi \\bmod 1\\).",
"section": "Energies, by phase estimation",
"slide": "Energies are eigenphases of the evolution",
"keys": [
"ground energy"
]
},
{
"term_html": "ground-state overlap",
"html": "\\(|\\braket{E_0|\\psi}|^2\\) for the input \\(\\psi\\) of phase estimation: the probability that a run samples the ground energy at all. It can be exponentially small in \\(n\\), and preparing a state with large overlap is, in the worst case, the hard part (unit 20).",
"section": "Energies, by phase estimation",
"slide": "The catch: the input must overlap the ground state",
"keys": [
"ground-state overlap"
]
}
];
