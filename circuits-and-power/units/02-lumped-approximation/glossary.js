// Generated from GLOSSARY.org by `cap glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "lumped element",
"html": "A region of space with a boundary drawn round it, crossed by exactly two wires, whose behaviour is summarised by one voltage across it and one current through it, related by its element law. Agarwal &amp; Lang's term (§1.2–1.3).",
"section": "What a circuit is",
"slide": "From fields to a list of numbers",
"keys": [
"lumped element"
]
},
{
"term_html": "lumped circuit",
"html": "A set of lumped elements joined by ideal wires. Its state at each instant is a finite list of numbers, one \\(v\\) and one \\(i\\) per element.",
"section": "What a circuit is",
"slide": "From fields to a list of numbers",
"keys": [
"lumped circuit"
]
},
{
"term_html": "terminal",
"html": "One of the two places where a wire crosses an element's boundary.",
"section": "What a circuit is",
"slide": "From fields to a list of numbers",
"keys": [
"terminal"
]
},
{
"term_html": "ideal wire",
"html": "A conductor with \\(\\sigma\\to\\infty\\): the field along it vanishes, so it is at one potential throughout. A real wire whose resistance matters is drawn as a resistor.",
"section": "What a circuit is",
"slide": "From fields to a list of numbers",
"keys": [
"ideal wire"
]
},
{
"term_html": "node",
"html": "A set of terminals joined by ideal wires; one point of the circuit, at one potential, whatever its physical shape.",
"section": "What a circuit is",
"slide": "From fields to a list of numbers",
"keys": [
"node"
]
},
{
"term_html": "circuit diagram",
"html": "A drawing of a lumped circuit: each element as a symbol, each wire as a line. Only what is joined to what is meaningful; lengths, positions and areas are not. This course draws a resistor as a rectangle (IEC 60617); American texts use a zigzag (IEEE Std 315-1975 gives the two as equal alternatives).",
"section": "What a circuit is",
"slide": "The symbols",
"keys": [
"circuit diagram"
]
},
{
"term_html": "passive sign convention",
"html": "Mark one terminal of each element +, and draw its current arrow into the + terminal. Then \\(p = vi\\) is the power the element absorbs: positive absorbing, negative delivering — so a source delivering power shows \\(p \\lt 0\\). Unit 01's theorem is what makes \\(vi\\) the power.",
"section": "What a circuit is",
"slide": "The passive sign convention",
"keys": [
"passive sign convention"
]
},
{
"term_html": "lumped matter discipline",
"html": "The three hypotheses under which a field problem becomes a circuit (Agarwal &amp; Lang, §1.3): (H1) no changing magnetic flux through any closed curve outside the elements; (H2) no changing net charge on any element, wire or node; (H3) the circuit is small against the wavelength \\(c/f\\), so retardation is negligible.",
"section": "Three hypotheses, and Kirchhoff's laws",
"slide": "Three hypotheses",
"keys": [
"lumped matter discipline"
]
},
{
"term_html": "Kirchhoff's current law",
"html": "At every node the currents leaving through the wires sum to zero. Proved from the continuity equation and (H2), with a closed surface round the node cutting only wires.",
"section": "Three hypotheses, and Kirchhoff's laws",
"slide": "The current law",
"keys": [
"kirchhoff's current law"
]
},
{
"term_html": "Kirchhoff's voltage law",
"html": "Round every closed loop of elements the signed sum of the element voltages is zero. Proved from Faraday's law and (H1): \\(\\vec E\\) has a potential outside the elements, and the sum telescopes.",
"section": "Three hypotheses, and Kirchhoff's laws",
"slide": "The voltage law",
"keys": [
"kirchhoff's voltage law"
]
},
{
"term_html": "stray inductance",
"html": "The flux linked by a circuit's own loops outside its inductors — what (H1) neglects. For a circuit of size \\(\\ell\\) with resistances \\(R\\) its relative effect is of order \\(2\\pi(\\ell/\\lambda)(\\mu_0c/R)\\), with \\(\\mu_0c = 376.7\\ \\Omega\\).",
"section": "Three hypotheses, and Kirchhoff's laws",
"slide": "What each hypothesis neglects",
"keys": [
"stray inductance"
]
},
{
"term_html": "stray capacitance",
"html": "The changing charge on a circuit's wires and nodes — what (H2) neglects. Its relative effect is of order \\(2\\pi(\\ell/\\lambda)(R/\\mu_0c)\\).",
"section": "Three hypotheses, and Kirchhoff's laws",
"slide": "What each hypothesis neglects",
"keys": [
"stray capacitance"
]
},
{
"term_html": "element law",
"html": "The relation between an element's own voltage and current, which is all the circuit needs to know about what is inside its boundary. The resistor's is \\(v = Ri\\).",
"section": "The element laws, from fields",
"slide": "The resistor",
"keys": [
"element law"
]
},
{
"term_html": "capacitance",
"html": "For two conductors with charges \\(\\pm q\\), the constant \\(C = q/v\\); it exists because Laplace's equation is linear and its solution unique for given charges, and it is positive because the field energy \\(\\tfrac12Cv^2 = \\int\\tfrac{\\varepsilon_0}2E^2\\) is. In farads. Parallel plates: \\(\\varepsilon_0A/d\\), fringing neglected; coaxial: \\(2\\pi\\varepsilon_0/\\ln(b/a)\\) per metre.",
"section": "The element laws, from fields",
"slide": "Capacitance from linearity and uniqueness",
"keys": [
"capacitance"
]
},
{
"term_html": "capacitor",
"html": "An element with law \\(q = Cv\\), hence \\(i = C\\,\\mathrm dv/\\mathrm dt\\) under the passive convention. It stores \\(\\tfrac12Cv^2\\) and dissipates nothing.",
"section": "The element laws, from fields",
"slide": "The capacitor's energy, and i = C dv/dt",
"keys": [
"capacitor"
]
},
{
"term_html": "linear dielectric",
"html": "An insulator whose molecules polarise in proportion to the field. Filling the space between two conductors with one multiplies their capacitance by its relative permittivity (cited, Griffiths, ch. 4).",
"section": "The element laws, from fields",
"slide": "A dielectric multiplies C by \\(\\varepsilon_r\\)",
"keys": [
"linear dielectric"
]
},
{
"term_html": "relative permittivity",
"html": "\\(\\varepsilon_r\\), the factor by which a linear dielectric multiplies a capacitance. Polyethylene is taken as \\(2.25\\) in the unit's example, an assumption to be checked against Pozar's tables.",
"section": "The element laws, from fields",
"slide": "A dielectric multiplies C by \\(\\varepsilon_r\\)",
"keys": [
"relative permittivity"
]
},
{
"term_html": "inductance",
"html": "For a closed loop carrying \\(i\\), the constant \\(L = \\Lambda/i\\), where \\(\\Lambda\\) is the flux of the loop's own field through it; it exists because Biot–Savart is linear, and it is positive because the field energy \\(\\tfrac12Li^2 = \\int B^2/2\\mu_0\\) is. In henries. For a thick conductor \\(L\\) is defined by the energy.",
"section": "The element laws, from fields",
"slide": "Inductance from linearity",
"keys": [
"inductance"
]
},
{
"term_html": "flux linkage",
"html": "\\(\\Lambda\\), the flux through the surface bounded by a circuit; for a coil of \\(N\\) turns each turn's flux counts once, so \\(\\Lambda \\approx N\\Phi_{\\text{turn}}\\). Faraday's law applies to it.",
"section": "The element laws, from fields",
"slide": "Inductance from linearity",
"keys": [
"flux linkage"
]
},
{
"term_html": "inductor",
"html": "An element with law \\(v = L\\,\\mathrm di/\\mathrm dt\\) under the passive convention, derived from Faraday's law round a loop through the coil and back outside it. It stores \\(\\tfrac12Li^2\\) and dissipates nothing.",
"section": "The element laws, from fields",
"slide": "Worked: v = L di/dt, sign and energy",
"keys": [
"inductor"
]
},
{
"term_html": "internal inductance",
"html": "The part of a conductor's inductance from the field inside the conductor itself: \\(\\mu_0/8\\pi = 50\\ \\mathrm{nH/m}\\) for a round wire with uniform current, whatever its radius. It shrinks at high frequency, where the current is not uniform.",
"section": "The element laws, from fields",
"slide": "Inside the wire, and a divergence",
"keys": [
"internal inductance"
]
},
{
"term_html": "mutual inductance",
"html": "For two loops, the constant \\(M\\) with \\(\\Lambda_{12} = Mi_2\\): the flux of loop 2's field through loop 1 per unit current in loop 2. The same in both directions.",
"section": "The element laws, from fields",
"slide": "Mutual inductance: Neumann's formula",
"keys": [
"mutual inductance"
]
},
{
"term_html": "Neumann's formula",
"html": "\\(M = \\frac{\\mu_0}{4\\pi}\\oint\\oint\\frac{\\mathrm d\\vec l_1\\cdot\\mathrm d\\vec l_2}{|\\vec r_1 - \\vec r_2|}\\), from Stokes and the Coulomb-gauge vector potential; symmetric in the two loops.",
"section": "The element laws, from fields",
"slide": "Mutual inductance: Neumann's formula",
"keys": [
"neumann's formula"
]
},
{
"term_html": "inductance matrix",
"html": "\\(\\begin{pmatrix}L_1 &amp; M\\\\ M &amp; L_2\\end{pmatrix}\\), whose quadratic form is the magnetic field energy. Positive semi-definite because that energy cannot be negative, so \\(M^2 \\le L_1L_2\\).",
"section": "The element laws, from fields",
"slide": "The inductance matrix is positive semi-definite",
"keys": [
"inductance matrix"
]
},
{
"term_html": "ideal voltage source",
"html": "An element that fixes \\(v\\) whatever \\(i\\): unit 01's EMF with no internal resistance.",
"section": "The element laws, from fields",
"slide": "Ideal sources",
"keys": [
"ideal voltage source"
]
},
{
"term_html": "ideal current source",
"html": "An element that fixes \\(i\\) whatever \\(v\\); a modelling idealisation, the dual of the voltage source.",
"section": "The element laws, from fields",
"slide": "Ideal sources",
"keys": [
"ideal current source"
]
},
{
"term_html": "internal resistance",
"html": "The resistance \\(r_i\\) in series with an ideal source in a model of a real battery (unit 01's notation); with the passive marking \\(v = \\mathcal E + r_ii\\), so a delivering battery shows less than its EMF.",
"section": "The element laws, from fields",
"slide": "Ideal sources",
"keys": [
"internal resistance"
]
},
{
"term_html": "voltmeter",
"html": "A large resistance with ideal leads that displays \\(R_m\\) times its own current. It reads \\(\\int\\vec E\\cdot\\mathrm d\\vec l\\) along its own leads and body, from the + lead to the − lead; under (H1) that is the potential difference, and without it two meters on the same points differ by the EMF round the loop their paths make.",
"section": "The ring, modelled properly",
"slide": "A voltmeter reads \\(\\int\\vec E\\cdot\\mathrm d\\vec l\\) along its own leads",
"keys": [
"voltmeter"
]
}
];
