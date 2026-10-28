// Generated from GLOSSARY.org by `qc glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "Mach–Zehnder interferometer",
"html": "A light source, a beam splitter dividing the light into two arms, two mirrors bringing the arms together at a second beam splitter, and two detectors on its outputs (Zehnder 1891, Mach 1892). With arms balanced, one output is dark. The unit's running example.",
"section": "Two paths, and what a state is",
"slide": "The Mach–Zehnder interferometer, from nothing",
"keys": [
"mach–zehnder interferometer"
]
},
{
"term_html": "beam splitter",
"html": "A half-silvered mirror: transmits half the light and reflects half. On the photon's path qubit it acts as the unitary \\(B = \\frac1{\\sqrt2}\\begin{pmatrix}1 &amp; i\\\\ i &amp; 1\\end{pmatrix}\\); the reflected amplitude's phase of \\(\\pm\\pi/2\\) relative to the transmitted one is forced by unitarity for a splitter that treats both inputs alike; the sign is a convention.",
"section": "Two paths, and what a state is",
"slide": "The Mach–Zehnder interferometer, from nothing",
"keys": [
"beam splitter"
]
},
{
"term_html": "phase shifter",
"html": "A thin slab of glass in one arm, delaying the light there by \\(\\varphi = 2\\pi(n - 1)d/\\lambda\\); on the path qubit, \\(\\mathrm{diag}(1, e^{i\\varphi})\\).",
"section": "Two paths, and what a state is",
"slide": "The Mach–Zehnder interferometer, from nothing",
"keys": [
"phase shifter"
]
},
{
"term_html": "photon",
"html": "In this course, the thing that makes one click at one detector. Grangier, Roger and Aspect (1986) showed with a heralded single-photon source that one photon is not split between a splitter's outputs, yet still interferes. Faint light (Taylor 1909) did not establish this.",
"section": "Two paths, and what a state is",
"slide": "One photon at a time",
"keys": [
"photon"
]
},
{
"term_html": "state",
"html": "Postulate 1: a closed system has a finite-dimensional complex inner-product space \\(V\\), and its state is a unit vector of \\(V\\) up to a global phase — a ray.",
"section": "Two paths, and what a state is",
"slide": "Postulate 1: a state is a ray",
"keys": [
"state"
]
},
{
"term_html": "closed system",
"html": "A system interacting with nothing left out of its description. Postulates 1 and 3 are about closed systems; a system meeting a detector is handled by postulate 2.",
"section": "Two paths, and what a state is",
"slide": "Postulate 1: a state is a ray",
"keys": [
"closed system"
]
},
{
"term_html": "ray",
"html": "The set \\([\\psi] = \\{e^{i\\alpha}\\psi : \\alpha\\in\\mathbb R\\}\\) of unit vectors differing from \\(\\psi\\) by a phase. The statistics of every observable determine the ray and nothing finer.",
"section": "Two paths, and what a state is",
"slide": "Postulate 1: a state is a ray",
"keys": [
"ray"
]
},
{
"term_html": "qubit",
"html": "A system with state space \\(\\mathbb C^2\\) and a named orthonormal basis \\(\\ket0, \\ket1\\). The photon's path in the interferometer is one.",
"section": "Two paths, and what a state is",
"slide": "Postulate 1: a state is a ray",
"keys": [
"qubit"
]
},
{
"term_html": "observable",
"html": "A Hermitian operator \\(A = \\sum_\\lambda\\lambda P_\\lambda\\) on \\(V\\). Its eigenvalues are the possible results and its spectral projectors the outcomes.",
"section": "Measurement: the Born rule as a probability measure",
"slide": "Postulate 2, part one: observables",
"keys": [
"observable"
]
},
{
"term_html": "projection-valued measure",
"html": "On a finite set \\(\\Lambda\\subset\\mathbb R\\): orthogonal projectors \\(P_\\lambda\\) with \\(P_\\lambda P_\\mu = \\delta_{\\lambda\\mu}P_\\lambda\\) and \\(\\sum P_\\lambda = I\\); \\(P_S = \\sum_{\\lambda\\in S}P_\\lambda\\). The same data as an observable.",
"section": "Measurement: the Born rule as a probability measure",
"slide": "Postulate 2, part one: observables",
"keys": [
"projection-valued measure"
]
},
{
"term_html": "Born rule",
"html": "Measuring \\(A\\) on \\(\\psi\\) gives \\(\\lambda\\) with probability \\(\\braket{\\psi|P_\\lambda|\\psi} = \\lVert P_\\lambda\\psi\\rVert^2\\): a probability measure on \\(\\sigma(A)\\), summing to one because \\(\\sum P_\\lambda = I\\) (Born 1926).",
"section": "Measurement: the Born rule as a probability measure",
"slide": "Postulate 2, part two: the Born rule, and the state afterwards",
"keys": [
"born rule"
]
},
{
"term_html": "Lüders rule",
"html": "After the result \\(\\lambda\\) the state is \\(P_\\lambda\\psi/\\lVert P_\\lambda\\psi\\rVert\\), which keeps any superposition inside a degenerate eigenspace (Lüders 1951; von Neumann 1932 for non-degenerate results).",
"section": "Measurement: the Born rule as a probability measure",
"slide": "Postulate 2, part two: the Born rule, and the state afterwards",
"keys": [
"lüders rule"
]
},
{
"term_html": "repeatability",
"html": "Measuring the same observable twice in succession gives the same result with probability one; a consequence of Lüders' rule and \\(P_\\lambda^2 = P_\\lambda\\).",
"section": "Measurement: the Born rule as a probability measure",
"slide": "Repeatability, and the least model recovered",
"keys": [
"repeatability"
]
},
{
"term_html": "minimal model",
"html": "Unit 00's hypotheses: a measurement is an orthonormal basis, probabilities are squared overlaps, the state afterwards is the basis vector found. It is postulate 2 for a non-degenerate observable, the post-measurement state being correct up to global phase.",
"section": "Measurement: the Born rule as a probability measure",
"slide": "Repeatability, and the least model recovered",
"keys": [
"minimal model"
]
},
{
"term_html": "expectation",
"html": "The mean of the Born measure, \\(\\langle A\\rangle = \\sum\\lambda\\,p_\\psi(\\lambda)\\), which equals \\(\\braket{\\psi|A|\\psi}\\). For a projector it is a probability.",
"section": "Measurement: the Born rule as a probability measure",
"slide": "Expectation and variance, from the measure",
"keys": [
"expectation"
]
},
{
"term_html": "variance",
"html": "\\((\\Delta A)^2 = \\sum(\\lambda - \\langle A\\rangle)^2p_\\psi(\\lambda) = \\langle A^2\\rangle - \\langle A\\rangle^2 = \\lVert(A - \\langle A\\rangle)\\psi\\rVert^2\\); zero exactly when \\(\\psi\\) is an eigenvector of \\(A\\).",
"section": "Measurement: the Born rule as a probability measure",
"slide": "Expectation and variance, from the measure",
"keys": [
"variance"
]
},
{
"term_html": "compatible observables",
"html": "Commuting observables \\(A, B\\). Their spectral projectors' products \\(P_aQ_b\\) form a projection-valued measure on \\(\\sigma(A)\\times\\sigma(B)\\), a joint measurement with the right marginals. Non-commuting ones have no such thing: for \\(X\\) and \\(Z\\) the candidate \\(\\braket{\\psi|P_+Q_0|\\psi}\\) can be negative.",
"section": "Measurement: the Born rule as a probability measure",
"slide": "Compatible observables",
"keys": [
"compatible observables"
]
},
{
"term_html": "which-path detector",
"html": "An idealised detector in one arm that records whether the photon passed and lets it continue: a measurement of \\(Z\\) between the splitters. It makes \\(P(D_0) = P(D_1) = \\frac12\\) for every \\(\\varphi\\): the fringes vanish.",
"section": "Looking at the path",
"slide": "A which-path detector",
"keys": [
"which-path detector"
]
},
{
"term_html": "evolution",
"html": "Postulate 3: between measurements a closed system evolves as \\(\\psi(t) = U(t)\\psi(0)\\) with \\(t\\mapsto U(t)\\) a continuous one-parameter unitary group.",
"section": "Evolution: a unitary group, and its generator",
"slide": "Postulate 3: evolution is a unitary group",
"keys": [
"evolution"
]
},
{
"term_html": "one-parameter unitary group",
"html": "A map \\(t\\mapsto U(t)\\) from \\(\\mathbb R\\) to the unitaries with \\(U(t + s) = U(t)U(s)\\) and \\(U(0) = I\\). A glass slab of thickness \\(\\ell\\), \\(\\mathrm{diag}(1, e^{i\\kappa\\ell})\\), is one in \\(\\ell\\).",
"section": "Evolution: a unitary group, and its generator",
"slide": "Postulate 3: evolution is a unitary group",
"keys": [
"one-parameter unitary group"
]
},
{
"term_html": "Wigner's theorem",
"html": "A bijection of rays preserving every transition probability \\(|\\braket{\\chi|\\psi}|^2\\) comes from a unitary or an antiunitary operator (Wigner 1931; proof by Bargmann 1964). Cited, as the motivation for unitary evolution.",
"section": "Evolution: a unitary group, and its generator",
"slide": "Why unitary, and not antiunitary",
"keys": [
"wigner's theorem"
]
},
{
"term_html": "antiunitary",
"html": "A conjugate-linear \\(K\\) with \\(\\braket{K\\chi|K\\psi} = \\overline{\\braket{\\chi|\\psi}}\\), such as complex conjugation of coordinates. Its square is unitary, so a one-parameter group contains none.",
"section": "Evolution: a unitary group, and its generator",
"slide": "Why unitary, and not antiunitary",
"keys": [
"antiunitary"
]
},
{
"term_html": "Stone's theorem",
"html": "In finite dimension: every continuous one-parameter unitary group is \\(e^{-iHt}\\) for exactly one Hermitian \\(H\\), namely \\(H = iU'(0)\\). Proved by averaging, differentiating the group law, and showing \\(e^{iHt}U(t)\\) constant (Stone 1932).",
"section": "Evolution: a unitary group, and its generator",
"slide": "Stone's theorem",
"keys": [
"stone's theorem"
]
},
{
"term_html": "generator",
"html": "The Hermitian \\(H = iU'(0)\\) of a one-parameter unitary group \\(U(t) = e^{-iHt}\\).",
"section": "Evolution: a unitary group, and its generator",
"slide": "Stone's theorem",
"keys": [
"generator"
]
},
{
"term_html": "Hamiltonian",
"html": "The generator of a system's time evolution. Its eigenvalues are energies (divided by \\(\\hbar\\)).",
"section": "Evolution: a unitary group, and its generator",
"slide": "Stone's theorem",
"keys": [
"hamiltonian"
]
},
{
"term_html": "Schrödinger equation",
"html": "\\(i\\,d\\psi/dt = H\\psi\\), satisfied by \\(\\psi(t) = e^{-iHt}\\psi(0)\\), with that the only solution. A consequence of postulate 3 through Stone's theorem, not a separate postulate.",
"section": "Evolution: a unitary group, and its generator",
"slide": "The Schrödinger equation is a consequence",
"keys": [
"schrödinger equation"
]
},
{
"term_html": "stationary state",
"html": "An eigenvector of \\(H\\), \\(H\\psi = E\\psi\\), which evolves only by the global phase \\(e^{-iEt}\\). Only energy differences are observable.",
"section": "Evolution: a unitary group, and its generator",
"slide": "The Schrödinger equation is a consequence",
"keys": [
"stationary state"
]
},
{
"term_html": "ħ (reduced Planck constant)",
"html": "\\(\\hbar = h/2\\pi = 1.054571817\\times10^{-34}\\) J s, converting an energy into an angular frequency. The course sets \\(\\hbar = 1\\) and writes \\(e^{-iHt}\\) with \\(H\\) in \\(\\mathrm{s}^{-1}\\); units 02, 25 and 26 restore it.",
"section": "Evolution: a unitary group, and its generator",
"slide": "The Schrödinger equation is a consequence",
"keys": [
"ħ (reduced planck constant)",
"ħ",
"reduced planck constant"
]
},
{
"term_html": "directional coupler",
"html": "Two waveguides run side by side for a length \\(L\\); light crosses the gap, and the pair applies \\(e^{igLX}\\), a one-parameter unitary group in \\(L\\). At \\(gL = \\pi/4\\) it is the beam splitter \\(B\\).",
"section": "Evolution: a unitary group, and its generator",
"slide": "A beam splitter grown continuously",
"keys": [
"directional coupler"
]
},
{
"term_html": "Robertson uncertainty relation",
"html": "For Hermitian \\(A, B\\): \\(\\Delta A\\,\\Delta B \\ge \\frac12|\\langle[A, B]\\rangle|\\), from Cauchy–Schwarz (Robertson 1929); equality iff \\((B - \\langle B\\rangle)\\psi\\) is an imaginary multiple of \\((A - \\langle A\\rangle)\\psi\\), or the latter is zero. A limit on preparations, not on disturbance.",
"section": "Uncertainty: a statement about preparations",
"slide": "The Robertson uncertainty relation",
"keys": [
"robertson uncertainty relation"
]
}
];
