// Generated from GLOSSARY.org by `qc glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "no-signalling",
"html": "For any projective measurement on Alice's side and any on Bob's, Bob's outcome probabilities are the same whatever Alice measures, or whether she measures or applies a unitary at all: \\(\\sum_\\lambda\\braket{\\psi|(P_\\lambda\\otimes Q_\\mu)|\\psi} = \\braket{\\psi|(I\\otimes Q_\\mu)|\\psi}\\). Unit 03's problem P10; unit 04 extends it to every local operation.",
"section": "Herbert's telegraph",
"slide": "Bob alone sees a fair coin",
"keys": [
"no-signalling"
]
},
{
"term_html": "stimulated emission",
"html": "A photon passing an atom that holds a releasable amount of energy triggers it to emit a second photon identical to the first: same direction, frequency and polarisation (Einstein 1917, cited). The mechanism of the laser.",
"section": "Herbert's telegraph",
"slide": "The copier Herbert had in mind: a laser amplifier",
"keys": [
"stimulated emission"
]
},
{
"term_html": "laser amplifier",
"html": "A medium of energy-loaded (\"pumped\") atoms in which stimulated emission multiplies an incoming photon into many. Herbert's proposed copier for FLASH.",
"section": "Herbert's telegraph",
"slide": "The copier Herbert had in mind: a laser amplifier",
"keys": [
"laser amplifier"
]
},
{
"term_html": "spontaneous emission",
"html": "Emission by a loaded atom with no photon to trigger it, at a random time and with random polarisation. It adds noise to every laser amplifier's copies — exactly enough, Milonni–Hardies and Mandel showed (cited), to hide Alice's choice in FLASH.",
"section": "Herbert's telegraph",
"slide": "The copier Herbert had in mind: a laser amplifier",
"keys": [
"spontaneous emission"
]
},
{
"term_html": "cloner",
"html": "For a set \\(S\\) of states of \\(H\\): a unitary \\(U\\) on \\(H\\otimes H\\) and a fixed blank \\(s\\) with \\(U(\\psi\\otimes s) = e^{i\\gamma_\\psi}\\psi\\otimes\\psi\\) for every \\(\\psi\\in S\\); the phase may depend on \\(\\psi\\).",
"section": "No-cloning, proved twice",
"slide": "What a copier would have to be",
"keys": [
"cloner"
]
},
{
"term_html": "blank state",
"html": "The fixed state \\(s\\) of the second system that a cloner overwrites with the copy. Fixed because the machine is not told \\(\\psi\\).",
"section": "No-cloning, proved twice",
"slide": "What a copier would have to be",
"keys": [
"blank state"
]
},
{
"term_html": "universal cloner",
"html": "A cloner for every state of \\(H\\). None exists.",
"section": "No-cloning, proved twice",
"slide": "What a copier would have to be",
"keys": [
"universal cloner"
]
},
{
"term_html": "no-cloning theorem",
"html": "No universal cloner exists (Wootters–Zurek; Dieks; 1982), by linearity: copying \\(\\ket0, \\ket1\\) forces the entangled \\(\\frac1{\\sqrt2}(\\ket{00} + \\ket{11})\\) on \\(\\ket+\\). Sharper, by inner products: a cloner for \\(\\psi, \\varphi\\) needs \\(|\\braket{\\psi|\\varphi}| = |\\braket{\\psi|\\varphi}|^2\\), so the two are orthogonal or the same state.",
"section": "No-cloning, proved twice",
"slide": "Proof one: linearity",
"keys": [
"no-cloning theorem"
]
},
{
"term_html": "ancilla",
"html": "An extra system in a fixed state, added to the one being worked on — a machine's own parts, or a measuring apparatus. It helps neither a cloner (\\(c = c^2\\braket{e_\\psi|e_\\varphi}\\) still forces \\(|c|\\in\\{0, 1\\}\\)) nor a discriminator (the overlap is unchanged).",
"section": "No-cloning, proved twice",
"slide": "A machine with parts of its own",
"keys": [
"ancilla"
]
},
{
"term_html": "probabilistic cloning",
"html": "Copying that sometimes fails and reports the failure; possible for any two distinct states, indeed any linearly independent set, with probability below one (Duan–Guo 1998, cited). Not a cloner in this unit's sense.",
"section": "No-cloning, proved twice",
"slide": "A machine with parts of its own",
"keys": [
"probabilistic cloning"
]
},
{
"term_html": "fan-out",
"html": "Splitting a classical wire in two, copying a bit. In quantum terms, \\(\\mathrm{CNOT}_{01}\\) with target \\(\\ket0\\): \\(\\ket x\\ket0 \\mapsto \\ket x\\ket x\\). Possible because classical bits are orthogonal states.",
"section": "What does copy",
"slide": "CNOT copies the z basis",
"keys": [
"fan-out"
]
},
{
"term_html": "state discrimination",
"html": "Minimum-error version: a fair coin prepares \\(\\psi\\) or \\(\\varphi\\); a projective measurement and a guessing rule name it. Only the projector \\(P\\) onto the outcomes read as \"\\(\\psi\\)\" matters.",
"section": "Telling two states apart",
"slide": "The task: one copy, one guess",
"keys": [
"state discrimination"
]
},
{
"term_html": "success probability",
"html": "\\(p_{\\rm succ} = \\frac12\\braket{\\psi|P|\\psi} + \\frac12\\braket{\\varphi|(I - P)|\\varphi} = \\frac12 + \\frac12\\operatorname{tr}(P\\Delta)\\), with \\(\\Delta = \\ket\\psi\\!\\bra\\psi - \\ket\\varphi\\!\\bra\\varphi\\). It equals \\(1\\) for some measurement iff \\(\\psi\\perp\\varphi\\).",
"section": "Telling two states apart",
"slide": "The task: one copy, one guess",
"keys": [
"success probability"
]
},
{
"term_html": "Helstrom bound",
"html": "For two equiprobable pure states, the best success probability over all projective measurements, with or without an ancilla, is \\(\\frac12(1 + \\sqrt{1 - |\\braket{\\psi|\\varphi}|^2})\\) (over all measurements once unit 21's Naimark theorem is in hand): \\(0.8536\\) for \\(\\ket0\\) against \\(\\ket+\\). Proved from the eigenvalues \\(\\pm\\sqrt{1 - |c|^2}\\) of \\(\\Delta\\) on the plane of the two states (Helstrom 1976, cited, for the general theory).",
"section": "Telling two states apart",
"slide": "The Helstrom bound",
"keys": [
"helstrom bound"
]
},
{
"term_html": "Helstrom measurement",
"html": "The measurement that attains the bound: the eigenbasis \\(e_\\pm\\) of \\(\\Delta\\), lying \\(45^\\circ\\) on either side of the bisector of \\(\\psi\\) and \\(\\varphi\\), guessing \\(\\psi\\) on \\(e_+\\). For \\(\\ket0, \\ket+\\): the basis at \\(-\\pi/8\\) and \\(3\\pi/8\\), an analyser at \\(-22.5^\\circ\\).",
"section": "Telling two states apart",
"slide": "Proof, step three: no projector beats s",
"keys": [
"helstrom measurement"
]
},
{
"term_html": "unambiguous discrimination",
"html": "Never wrong, sometimes \"don't know\". For two equiprobable pure states the best conclusive probability is \\(1 - |\\braket{\\psi|\\varphi}|\\) (Ivanovic, Dieks, Peres, 1987–88), \\(0.2929\\) for \\(\\ket0, \\ket+\\); stated here, proved in unit 21. Projectively on a qubit, only \\(\\frac14\\).",
"section": "Telling two states apart",
"slide": "Never wrong, sometimes silent",
"keys": [
"unambiguous discrimination"
]
},
{
"term_html": "fidelity of a copy",
"html": "The probability that the copy passes the test \"is it \\(\\psi\\)?\", a measurement in \\(\\{\\psi, \\psi^\\perp\\}\\): \\(\\braket{\\Omega|(\\ket\\psi\\!\\bra\\psi\\otimes I)|\\Omega}\\) for copy 1 of the output \\(\\Omega\\). \\(1\\) for a perfect copy.",
"section": "Telling two states apart",
"slide": "Approximate copies, stated",
"keys": [
"fidelity of a copy"
]
},
{
"term_html": "Bužek–Hillery cloner",
"html": "A universal \\(1\\to2\\) cloner whose copies each have fidelity \\(\\frac56\\) for every input (1996, cited); optimal among symmetric universal cloners (Gisin–Massar 1997, cited). Measure-and-prepare reaches only \\(\\frac23\\) on average.",
"section": "Telling two states apart",
"slide": "Approximate copies, stated",
"keys": [
"bužek–hillery cloner"
]
}
];
