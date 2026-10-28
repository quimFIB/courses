// Generated from GLOSSARY.org by `qc glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "cbit",
"html": "One classical bit delivered from one lab to another: a phone call carrying 0 or 1. A unit of the resource bookkeeping.",
"section": "The identity",
"slide": "Three qubits, three resources",
"keys": [
"cbit"
]
},
{
"term_html": "ebit",
"html": "One copy of \\(\\ket{\\Phi^+} = (\\ket{00} + \\ket{11})/\\sqrt2\\) shared in advance, one qubit in each lab: a unit of entanglement. On its own it carries no message (no-signalling); spent with two cbits it moves a qubit, spent with a qubit it moves two cbits.",
"section": "The identity",
"slide": "Three qubits, three resources",
"keys": [
"ebit"
]
},
{
"term_html": "teleportation identity",
"html": "For every \\(\\ket\\psi\\in\\mathbb C^2\\), \\(\\ket\\psi_C\\ket{\\Phi^+}_{AB} = \\frac12\\sum_{j,k}\\ket{\\mathcal B_{jk}}_{CA}\\otimes X^kZ^j\\ket\\psi_B\\), where \\(\\ket{\\mathcal B_{jk}} = (I\\otimes X^kZ^j)\\ket{\\Phi^+}\\) labels the Bell states (\\(\\mathcal B_{00} = \\Phi^+\\), \\(\\mathcal B_{01} = \\Psi^+\\), \\(\\mathcal B_{10} = \\Phi^-\\), \\(\\mathcal B_{11} = \\Psi^-\\)). A rewriting of the starting state, linear in \\(\\psi\\), not an event.",
"section": "The identity",
"slide": "The teleportation identity",
"keys": [
"teleportation identity"
]
},
{
"term_html": "Bell measurement",
"html": "The projective measurement \\(\\{\\ket{\\mathcal B_{jk}}\\!\\bra{\\mathcal B_{jk}}\\}\\) on two qubits, with outcome the two bits \\(jk\\): \\(j\\) the sign, \\(k\\) the parity. Realised by \\(\\mathrm{CNOT}_{01}\\), then \\(H\\) on the first qubit, then a \\(z\\) measurement of each, because \\((H\\otimes I)\\mathrm{CNOT}_{01}\\ket{\\mathcal B_{jk}} = \\ket{jk}\\).",
"section": "The protocol",
"slide": "The Bell measurement, rotated to the computational basis",
"keys": [
"bell measurement"
]
},
{
"term_html": "teleportation",
"html": "The protocol that moves an unknown qubit state using one ebit and two cbits: Alice makes a Bell measurement on her input and her half of the pair and phones the outcome \\(jk\\); Bob applies \\(Z^jX^k\\) to his half, which then holds \\(\\ket\\psi\\) exactly. The original is left in Alice's lab in \\(\\ket{jk}\\), so nothing is cloned. Bennett et al. 1993.",
"section": "The protocol",
"slide": "The teleportation circuit",
"keys": [
"teleportation"
]
},
{
"term_html": "Pauli twirl",
"html": "The map \\(M \\mapsto \\frac14\\sum_{jk}\\sigma_{jk}M\\sigma_{jk}^\\dagger\\) with \\(\\sigma_{jk}\\in\\{I, X, Z, XZ\\}\\). It sends every \\(2\\times2\\) matrix to \\(\\frac12\\operatorname{tr}(M)\\,I\\), so every qubit state to \\(I/2\\): each Pauli flips two Bloch components and each component is flipped by two of the four. It is why Bob's qubit is \\(I/2\\) before the bits arrive.",
"section": "What does not happen",
"slide": "Before the bits arrive, Bob holds I/2",
"keys": [
"pauli twirl"
]
},
{
"term_html": "dense coding",
"html": "Two classical bits sent through one qubit with the help of one ebit: Alice applies \\(Z^jX^k\\) to her half of \\(\\ket{\\Phi^+}\\), giving exactly \\(\\ket{\\mathcal B_{jk}}\\), sends it to Bob, and his Bell measurement reads \\(jk\\). Bennett and Wiesner 1992; also called superdense coding.",
"section": "The reverse trade",
"slide": "Dense coding: two bits in one qubit",
"keys": [
"dense coding"
]
},
{
"term_html": "resource inequality",
"html": "\\(\\mathcal R \\ge \\mathcal S\\): a protocol consuming the resources \\(\\mathcal R\\), with free local operations, delivers \\(\\mathcal S\\) exactly. Teleportation: 1 ebit + 2 cbits \\(\\ge\\) 1 qubit; dense coding: 1 ebit + 1 qubit \\(\\ge\\) 2 cbits; trivially 1 qubit \\(\\ge\\) 1 cbit and 1 qubit \\(\\ge\\) 1 ebit. Both protocols are tight.",
"section": "The reverse trade",
"slide": "Resource inequalities as bookkeeping",
"keys": [
"resource inequality"
]
},
{
"term_html": "Holevo bound",
"html": "A message encoded in \\(n\\) qubits, with no entanglement shared beforehand, gives at most \\(n\\) bits of information about the message, whatever measurement is made (Holevo 1973; cited here, proved in unit 08). Its zero-error case — at most \\(d\\) states on \\(\\mathbb C^d\\) can be told apart with certainty — is proved in the deck.",
"section": "The reverse trade",
"slide": "Dense coding cannot be beaten",
"keys": [
"holevo bound"
]
},
{
"term_html": "fidelity",
"html": "Of an output \\(\\rho\\) with a pure target \\(\\psi\\): \\(F = \\braket{\\psi|\\rho|\\psi}\\), the probability that \\(\\rho\\) passes the test \"is it \\(\\psi\\)?\". In Bloch terms \\(F = \\frac12(1 + \\mathbf r\\cdot\\mathbf s)\\).",
"section": "Benchmarks",
"slide": "Average fidelity: one number for a whole teleporter",
"keys": [
"fidelity"
]
},
{
"term_html": "average fidelity",
"html": "\\(\\bar F = \\int F(\\psi, \\rho_{\\text{out}}(\\psi))\\,\\mathrm d\\mu(\\psi)\\) with \\(\\mu\\) uniform on the Bloch sphere, \\(\\mathrm d\\mu = \\sin\\theta\\,\\mathrm d\\theta\\,\\mathrm d\\varphi/4\\pi\\). The figure of merit of a teleporter: \\(1\\) ideally, \\(\\frac12\\) for doing nothing, at most \\(\\frac23\\) without entanglement.",
"section": "Benchmarks",
"slide": "Average fidelity: one number for a whole teleporter",
"keys": [
"average fidelity"
]
},
{
"term_html": "measure-and-prepare",
"html": "The strategy without entanglement: Alice measures the input and sends the outcome; Bob prepares the corresponding state. In the \\(z\\) basis its fidelity is \\(1 - \\frac12\\sin^2\\theta\\) and its average fidelity \\(\\frac23\\).",
"section": "Benchmarks",
"slide": "Worked: measure and prepare scores two-thirds",
"keys": [
"measure-and-prepare"
]
},
{
"term_html": "classical benchmark",
"html": "\\(\\bar F \\le \\frac23\\) for every strategy with no shared entanglement and one copy of the input (Massar and Popescu 1995, cited), met by measure-and-prepare. A measured average fidelity above \\(\\frac23\\) certifies that entanglement was used.",
"section": "Benchmarks",
"slide": "The classical benchmark: two-thirds",
"keys": [
"classical benchmark"
]
},
{
"term_html": "entanglement swapping",
"html": "Teleporting half of a Bell pair: from \\(\\ket{\\Phi^+}_{12}\\ket{\\Phi^+}_{34}\\), a Bell measurement on 2 and 3 with outcome \\(jk\\) leaves 1 and 4, which never interacted, in \\(\\ket{\\mathcal B_{jk}}_{14}\\). Żukowski et al. 1993; demonstrated by Pan et al. 1998.",
"section": "Benchmarks",
"slide": "Teleporting half a pair: entanglement swapping",
"keys": [
"entanglement swapping"
]
},
{
"term_html": "quantum repeater",
"html": "A chain of short ebits joined by entanglement swapping into one long ebit, to beat the exponential loss of photons over distance without copying them. Briegel, Dür, Cirac and Zoller 1998.",
"section": "Benchmarks",
"slide": "Teleporting half a pair: entanglement swapping",
"keys": [
"quantum repeater"
]
}
];
