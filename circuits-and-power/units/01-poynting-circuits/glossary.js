// Generated from GLOSSARY.org by `cap glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "Poynting flux",
"html": "The flux \\(\\int\\vec S\\cdot\\mathrm d\\vec A\\) of the Poynting vector \\(\\vec S = \\vec E\\times\\vec B/\\mu_0\\) through a surface: the power carried across it by the field, in watts. Through a closed surface it is fixed by Poynting's theorem (MR 24); through an open one it depends on the conventional choice of \\(\\vec S\\).",
"section": "The puzzle and the tool",
"slide": "Poynting's theorem, recalled",
"keys": [
"poynting flux"
]
},
{
"term_html": "electromotive force (EMF)",
"html": "For a loop, \\(\\mathcal E = \\oint\\vec f\\cdot\\mathrm d\\vec l\\), where \\(\\vec f = \\vec f_s + \\vec E\\) is the total force per unit charge and \\(\\vec f_s\\) the non-electrostatic force acting inside a source (chemical in a battery). Since \\(\\oint\\vec E\\cdot\\mathrm d\\vec l = 0\\) for a static field, \\(\\mathcal E = \\int\\vec f_s\\cdot\\mathrm d\\vec l\\) through the source. In volts; despite its name, a work per unit charge (Griffiths §7.1).",
"section": "Sources",
"slide": "What a battery adds: a force that is not electrostatic",
"keys": [
"electromotive force (emf)",
"electromotive force",
"emf"
]
},
{
"term_html": "ideal source",
"html": "A source with no internal resistance (\\(\\sigma\\to\\infty\\) inside), so that \\(\\vec E = -\\vec f_s\\) there and its terminals differ in potential by exactly \\(\\mathcal E\\). Inside it \\(\\vec J\\cdot\\vec E \\lt 0\\): it gives the field energy at the rate \\(\\mathcal EI\\).",
"section": "Sources",
"slide": "An ideal source hands the field energy at the rate ℰI",
"keys": [
"ideal source"
]
},
{
"term_html": "internal resistance",
"html": "The resistance \\(r_i\\) of a real source's interior. The source then emits \\(\\mathcal EI - I^2r_i\\) through its surface, and its terminal potentials differ by \\(\\mathcal E - Ir_i\\).",
"section": "Sources",
"slide": "An ideal source hands the field energy at the rate ℰI",
"keys": [
"internal resistance"
]
},
{
"term_html": "coaxial cable",
"html": "Two conductors sharing an axis: a wire (the inner conductor) inside a metal tube (the outer conductor), insulated from each other; current goes out along one and back along the other. Between them \\(\\vec E = V\\hat r/(r\\ln(b/a))\\) and \\(\\vec B = \\mu_0I\\hat\\theta/2\\pi r\\); outside both vanish.",
"section": "The coaxial cable",
"slide": "The running example, from nothing",
"keys": [
"coaxial cable"
]
},
{
"term_html": "inner conductor",
"html": "The coaxial cable's central wire, radius \\(a\\); in the running example copper, 0.5 mm, carrying charge \\(+\\lambda\\) per metre on its surface and current \\(I\\) out.",
"section": "The coaxial cable",
"slide": "The running example, from nothing",
"keys": [
"inner conductor"
]
},
{
"term_html": "outer conductor",
"html": "The coaxial cable's tube, inner radius \\(b\\), carrying \\(-\\lambda\\) per metre on its inner surface and the return current \\(-I\\).",
"section": "The coaxial cable",
"slide": "The running example, from nothing",
"keys": [
"outer conductor"
]
},
{
"term_html": "two-terminal component",
"html": "A component joined to the rest of a circuit by two leads only. The power flowing into it through any closed surface crossed only by its leads is \\(vi\\), if the fields on that surface are quasi-static and the leads cross it at equipotential cross-sections.",
"section": "p = vi, proved",
"slide": "The statement",
"keys": [
"two-terminal component"
]
},
{
"term_html": "lead",
"html": "A conductor joining a component to the rest of the circuit. In a steady state a cut square to a straight lead is an equipotential.",
"section": "p = vi, proved",
"slide": "The statement",
"keys": [
"lead"
]
},
{
"term_html": "terminal voltage",
"html": "For a two-terminal component, \\(v = \\varphi_A - \\varphi_B\\), the potential difference between its two leads — unit 00's meaning. Unit 02 says when \"voltage\" needs more care.",
"section": "p = vi, proved",
"slide": "The statement",
"keys": [
"terminal voltage"
]
},
{
"term_html": "quasi-static",
"html": "Of the fields on a surface: \\(\\partial_t\\vec B\\) and the displacement current \\(\\varepsilon_0\\partial_t\\vec E\\) are negligible there, so that \\(\\nabla\\times\\vec E = \\vec 0\\) and \\(\\nabla\\times\\vec B = \\mu_0\\vec J\\) hold as in statics. Exact in a steady state; approximate for slowly varying currents, which is unit 02's subject.",
"section": "p = vi, proved",
"slide": "The statement",
"keys": [
"quasi-static"
]
},
{
"term_html": "thin-wire picture",
"html": "The approximation that treats each conductor of a cable as a line at its centre carrying its charge per length and its current. For a pair with \\((\\pm\\lambda, \\pm I)\\) it gives \\(\\vec S = (\\varepsilon_0I/\\lambda)E^2\\hat z\\): along the cable everywhere, falling as \\(1/r^4\\) far away.",
"section": "p = vi, proved",
"slide": "The kettle's two-wire cable, computed",
"keys": [
"thin-wire picture"
]
},
{
"term_html": "conveyor-belt picture",
"html": "The account of a circuit in which each charge carries energy \\(qV\\) from source to load: \\(I\\) coulombs per second times \\(V\\) joules per coulomb. Exact for totals, by the theorem \\(p = vi\\); wrong about where the energy is, since the electrons' own kinetic energy carries about \\(10^{-21}\\) of the power and their \"\\(qV\\)\" is field energy.",
"section": "What the electrons do",
"slide": "The conveyor belt, stated fairly",
"keys": [
"conveyor-belt picture"
]
},
{
"term_html": "interaction energy",
"html": "The part of the field energy of two charge distributions that depends on their relative position, \\(\\varepsilon_0\\int\\vec E_1\\cdot\\vec E_2\\,\\mathrm dV = q\\varphi_2(\\vec x_1) = Q\\varphi_1(\\vec x_2)\\): it belongs to the pair, not to either charge.",
"section": "What the electrons do",
"slide": "Where qV lives",
"keys": [
"interaction energy"
]
},
{
"term_html": "energy-transport speed",
"html": "For a cable, the delivered power over the field energy stored per metre, \\(VI/W'\\). In vacuum \\(|\\vec S| \\le cu\\) bounds it by \\(c\\); for the running example it is \\(4.31\\times10^7\\ \\mathrm{m\\,s^{-1}} = 0.144\\,c\\), and it would equal \\(c\\) for a load of 83 Ω, where the electric and magnetic energies are equal.",
"section": "How fast can energy move?",
"slide": "|S| ≤ cu: energy never outruns light",
"keys": [
"energy-transport speed"
]
}
];
