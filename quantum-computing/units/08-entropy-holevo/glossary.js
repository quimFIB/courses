// Generated from GLOSSARY.org by `qc glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "Shannon entropy",
"html": "\\(H(X) = -\\sum_xp(x)\\log p(x)\\) for a random variable on a finite set, with \\(0\\log0 = 0\\): the number of bits per symbol a source needs, by the source coding theorem. \\(0 \\le H \\le \\log d\\).",
"section": "Shannon entropy",
"slide": "How many bits a source holds",
"keys": [
"shannon entropy"
]
},
{
"term_html": "binary entropy",
"html": "\\(h(p) = -p\\log p - (1 - p)\\log(1 - p)\\), the entropy of a coin of bias \\(p\\): \\(h(\\frac12) = 1\\), \\(h(0.1464) = 0.601\\).",
"section": "Shannon entropy",
"slide": "How many bits a source holds",
"keys": [
"binary entropy"
]
},
{
"term_html": "Gibbs' inequality",
"html": "\\(D(p\\Vert q) = \\sum_xp(x)\\log\\frac{p(x)}{q(x)} \\ge 0\\), with equality iff \\(p = q\\); \\(D\\) is the classical relative entropy. Proved from \\(\\ln t \\le t - 1\\). With \\(q\\) uniform it gives \\(H \\le \\log d\\).",
"section": "Shannon entropy",
"slide": "Gibbs' inequality, and the bounds on H",
"keys": [
"gibbs' inequality"
]
},
{
"term_html": "typical set",
"html": "For \\(n\\) independent draws from \\(p\\), the sequences with \\(|-\\frac1n\\log p(x^n) - H| \\le \\delta\\). It has probability \\(\\to 1\\) (by Chebyshev) and between about \\(2^{n(H - \\delta)}\\) and \\(2^{n(H + \\delta)}\\) members, each of probability about \\(2^{-nH}\\).",
"section": "Shannon entropy",
"slide": "Typical sequences",
"keys": [
"typical set"
]
},
{
"term_html": "source coding theorem",
"html": "Shannon 1948: \\(n\\) independent symbols can be encoded in \\(nR\\) bits with vanishing error iff \\(R &gt; H\\); below \\(H\\) every code fails almost surely.",
"section": "Shannon entropy",
"slide": "Compression: H bits per symbol, and no fewer",
"keys": [
"source coding theorem"
]
},
{
"term_html": "joint entropy",
"html": "\\(H(XY)\\), the Shannon entropy of the joint distribution of \\((X, Y)\\).",
"section": "Shannon entropy",
"slide": "Two variables: joint, conditional, mutual",
"keys": [
"joint entropy"
]
},
{
"term_html": "conditional entropy",
"html": "Classically \\(H(Y|X) = H(XY) - H(X) = \\sum_xp(x)H(Y|X = x) \\ge 0\\). The quantum \\(S(A|B) = S(AB) - S(B)\\) can be negative: \\(-1\\) for \\(\\ket{\\Phi^+}\\).",
"section": "Shannon entropy",
"slide": "Two variables: joint, conditional, mutual",
"keys": [
"conditional entropy"
]
},
{
"term_html": "mutual information",
"html": "\\(I(X:Y) = H(X) + H(Y) - H(XY) = D(p_{XY}\\Vert p_Xp_Y) \\ge 0\\), zero iff independent, at most \\(\\min\\{H(X), H(Y)\\}\\).",
"section": "Shannon entropy",
"slide": "Two variables: joint, conditional, mutual",
"keys": [
"mutual information"
]
},
{
"term_html": "von Neumann entropy",
"html": "\\(S(\\rho) = -\\operatorname{tr}\\rho\\log\\rho\\), by the functional calculus: the Shannon entropy of the spectrum of \\(\\rho\\). Zero iff \\(\\rho\\) is pure, \\(\\log d\\) iff \\(\\rho = I/d\\), unitarily invariant. For a qubit, \\(h(\\frac12(1 + |r|))\\).",
"section": "Von Neumann entropy",
"slide": "The entropy of a density operator",
"keys": [
"von neumann entropy"
]
},
{
"term_html": "concavity (of the entropy)",
"html": "\\(S(\\sum_ip_i\\rho_i) \\ge \\sum_ip_iS(\\rho_i)\\), equality iff the \\(\\rho_i\\) are equal: mixing never lowers entropy. Proved from the concavity of \\(\\eta(t) = -t\\log t\\) and the fact that a state's diagonal in any basis has at least the entropy of its spectrum.",
"section": "Von Neumann entropy",
"slide": "Concavity: mixing never lowers entropy",
"keys": [
"concavity (of the entropy)",
"concavity",
"of the entropy"
]
},
{
"term_html": "relative entropy",
"html": "\\(D(\\rho\\Vert\\sigma) = \\operatorname{tr}\\rho\\log\\rho - \\operatorname{tr}\\rho\\log\\sigma\\), or \\(+\\infty\\) if \\(\\operatorname{supp}\\rho \\not\\subseteq \\operatorname{supp}\\sigma\\). Not symmetric.",
"section": "Relative entropy and the inequalities",
"slide": "Relative entropy, and Klein's inequality",
"keys": [
"relative entropy"
]
},
{
"term_html": "Klein's inequality",
"html": "\\(D(\\rho\\Vert\\sigma) \\ge 0\\), with equality iff \\(\\rho = \\sigma\\); proved by expanding in both eigenbases and applying \\(a\\ln\\frac ab \\ge a - b\\).",
"section": "Relative entropy and the inequalities",
"slide": "Relative entropy, and Klein's inequality",
"keys": [
"klein's inequality"
]
},
{
"term_html": "quantum mutual information",
"html": "\\(I(A:B) = S(A) + S(B) - S(AB) = D(\\rho_{AB}\\Vert\\rho_A\\otimes\\rho_B)\\). Up to \\(2\\) bits for a pair of qubits: \\(\\ket{\\Phi^+}\\) has \\(I = 2\\).",
"section": "Relative entropy and the inequalities",
"slide": "Mutual information is a relative entropy",
"keys": [
"quantum mutual information"
]
},
{
"term_html": "subadditivity",
"html": "\\(S(AB) \\le S(A) + S(B)\\), equality iff \\(\\rho_{AB} = \\rho_A\\otimes\\rho_B\\): Klein's inequality applied to \\(\\rho_{AB}\\) and \\(\\rho_A\\otimes\\rho_B\\).",
"section": "Relative entropy and the inequalities",
"slide": "Mutual information is a relative entropy",
"keys": [
"subadditivity"
]
},
{
"term_html": "classical–quantum state",
"html": "\\(\\sum_xp_x\\ket x\\!\\bra x\\otimes\\rho_x\\), a classical register holding \\(x\\) next to a quantum system in \\(\\rho_x\\). Its entropy is \\(H(p) + \\sum_xp_xS(\\rho_x)\\), and its mutual information is the Holevo quantity.",
"section": "Relative entropy and the inequalities",
"slide": "Register and qubit: the running example as one state",
"keys": [
"classical–quantum state"
]
},
{
"term_html": "entanglement entropy",
"html": "\\(E(\\psi) = S(\\rho_A) = S(\\rho_B)\\) for a pure bipartite \\(\\psi\\): the Shannon entropy of the squared Schmidt coefficients. The unique asymptotic measure of pure-state entanglement under local operations and classical communication (Popescu–Rohrlich 1997, cited).",
"section": "Relative entropy and the inequalities",
"slide": "Pure states: the entanglement entropy",
"keys": [
"entanglement entropy"
]
},
{
"term_html": "Araki–Lieb inequality",
"html": "\\(|S(A) - S(B)| \\le S(AB)\\), from subadditivity applied to a purification. Tight for pure states.",
"section": "Relative entropy and the inequalities",
"slide": "Araki–Lieb: how much less",
"keys": [
"araki–lieb inequality"
]
},
{
"term_html": "strong subadditivity",
"html": "\\(S(ABC) + S(B) \\le S(AB) + S(BC)\\), equivalently \\(I(A:BC) \\ge I(A:B)\\): discarding a subsystem never increases mutual information. Lieb–Ruskai 1973, cited, not proved in this course.",
"section": "Relative entropy and the inequalities",
"slide": "Strong subadditivity",
"keys": [
"strong subadditivity"
]
},
{
"term_html": "monotonicity of relative entropy",
"html": "\\(D(\\rho_{XY}\\Vert\\sigma_{XY}) \\ge D(\\rho_X\\Vert\\sigma_X)\\) (Lindblad 1975, Uhlmann 1977, cited). Strong subadditivity is its case \\(\\sigma = \\rho_A\\otimes\\rho_{BC}\\); the two are equivalent.",
"section": "Relative entropy and the inequalities",
"slide": "Strong subadditivity",
"keys": [
"monotonicity of relative entropy"
]
},
{
"term_html": "accessible information",
"html": "\\(I_{\\mathrm{acc}}\\), the largest \\(I(X:Y)\\) any measurement on one system extracts from an ensemble. \\(0.399\\) bits for the running example.",
"section": "The Holevo bound",
"slide": "Alice's message, Bob's measurement",
"keys": [
"accessible information"
]
},
{
"term_html": "Holevo quantity",
"html": "\\(\\chi = S(\\sum_xp_x\\rho_x) - \\sum_xp_xS(\\rho_x)\\), a property of the ensemble alone; equal to \\(I(P:Q)\\) for the classical–quantum state. \\(0.601\\) for the running example.",
"section": "The Holevo bound",
"slide": "Alice's message, Bob's measurement",
"keys": [
"holevo quantity"
]
},
{
"term_html": "Holevo bound",
"html": "\\(I(X:Y) \\le \\chi \\le \\log d\\) for every measurement (Holevo 1973); proved here from strong subadditivity. So a qubit carries at most one bit.",
"section": "The Holevo bound",
"slide": "The Holevo bound",
"keys": [
"holevo bound"
]
},
{
"term_html": "HSW theorem",
"html": "Holevo 1998, Schumacher–Westmoreland 1997: with long codewords and collective measurements, \\(\\chi\\) bits per system can be sent, and no more. Named, not taught.",
"section": "The Holevo bound",
"slide": "The gap between 0.399 and 0.601",
"keys": [
"hsw theorem"
]
},
{
"term_html": "typical subspace",
"html": "The span of the eigenvectors of \\(\\rho^{\\otimes n}\\) whose index sequences are typical for the spectrum of \\(\\rho\\). It holds weight \\(\\to 1\\) and has dimension about \\(2^{nS(\\rho)}\\).",
"section": "Schumacher compression",
"slide": "Typical subspaces",
"keys": [
"typical subspace"
]
},
{
"term_html": "Schumacher compression",
"html": "Schumacher 1995: a source of pure states with average state \\(\\rho\\) can be compressed to \\(R\\) qubits per symbol with fidelity \\(\\to 1\\) when \\(R &gt; S(\\rho)\\), and not when \\(R &lt; S(\\rho)\\). About \\(601\\) qubits for \\(1000\\) of the running example's photons.",
"section": "Schumacher compression",
"slide": "Schumacher's theorem",
"keys": [
"schumacher compression"
]
}
];
