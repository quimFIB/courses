// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "linearisation",
"html": "The derivative at \\(\\varepsilon = 0\\) of a quantity \\(F[g(\\varepsilon)]\\) along a smooth family of metrics with \\(g(0) = \\eta\\). \"First order in \\(h\\)\" means exactly this derivative.",
"section": "Linearised gravity",
"slide": "A metric near Minkowski's",
"keys": [
"linearisation"
]
},
{
"term_html": "metric perturbation",
"html": "\\(h = \\mathrm dg/\\mathrm d\\varepsilon\\) at \\(\\varepsilon = 0\\), a symmetric \\((0,2)\\)-tensor field on \\(\\mathbb R^4\\); informally \\(g = \\eta + h\\) with \\(|h_{\\mu\\nu}|\\ll1\\). Indices on it are moved with \\(\\eta\\).",
"section": "Linearised gravity",
"slide": "A metric near Minkowski's",
"keys": [
"metric perturbation"
]
},
{
"term_html": "trace-reversed perturbation",
"html": "\\(\\bar h_{\\mu\\nu} = h_{\\mu\\nu} - \\tfrac12\\eta_{\\mu\\nu}h\\), with trace \\(\\bar h = -h\\). In four dimensions trace reversal is an involution. In terms of \\(\\bar h\\) the linearised Einstein tensor has four terms, three of them divergences.",
"section": "Linearised gravity",
"slide": "The linearised field equations",
"keys": [
"trace-reversed perturbation"
]
},
{
"term_html": "linearised gauge transformation",
"html": "\\(h_{\\mu\\nu}\\to h_{\\mu\\nu} + \\partial_\\mu\\xi_\\nu + \\partial_\\nu\\xi_\\mu = h_{\\mu\\nu} + (\\mathcal L_\\xi\\eta)_{\\mu\\nu}\\): the first-order effect of pulling the metric back along the flow of a vector field \\(\\xi\\). Two perturbations related by it describe one spacetime. The analogue of unit 24's \\(\\vec A\\to\\vec A + \\nabla\\chi\\).",
"section": "Linearised gravity",
"slide": "Gauge: a diffeomorphism, infinitesimally",
"keys": [
"linearised gauge transformation"
]
},
{
"term_html": "Lorenz gauge",
"html": "\\(\\partial^\\mu\\bar h_{\\mu\\nu} = 0\\), reached by solving \\(\\Box\\xi_\\nu = -\\partial^\\mu\\bar h_{\\mu\\nu}\\) with unit 24's retarded solution. Named for Ludvig Lorenz, not Hendrik Lorentz.",
"section": "Linearised gravity",
"slide": "Lorenz gauge, and the wave equation",
"keys": [
"lorenz gauge"
]
},
{
"term_html": "linearised field equation",
"html": "In Lorenz gauge, \\(\\Box\\bar h_{\\mu\\nu} = -16\\pi GT_{\\mu\\nu}/c^4\\) with \\(\\Box = \\eta^{\\mu\\nu}\\partial_\\mu\\partial_\\nu\\); in unit 24's sign convention \\(\\Box_{24}\\bar h_{\\mu\\nu} = +16\\pi GT_{\\mu\\nu}/c^4\\). Consistent only if \\(\\partial^\\mu T_{\\mu\\nu} = 0\\) in flat space.",
"section": "Linearised gravity",
"slide": "Lorenz gauge, and the wave equation",
"keys": [
"linearised field equation"
]
},
{
"term_html": "degree-of-freedom count",
"html": "For a plane wave with null \\(k\\ne0\\): Lorenz-gauge amplitudes form a 6-dimensional space \\(L\\), pure-gauge ones a 4-dimensional subspace \\(P\\), and the physical amplitudes \\(L/P\\) a 2-dimensional space. \\(10 - 4 - 4 = 2\\).",
"section": "Two polarisations",
"slide": "Counting to two, honestly",
"keys": [
"degree-of-freedom count"
]
},
{
"term_html": "residual gauge",
"html": "The gauge transformations that preserve Lorenz gauge: those with \\(\\Box\\xi_\\nu = 0\\). Four more functions, spent in reaching TT gauge.",
"section": "Two polarisations",
"slide": "Counting to two, honestly",
"keys": [
"residual gauge"
]
},
{
"term_html": "transverse-traceless gauge (TT gauge)",
"html": "The representative of a Lorenz-gauge wave with \\(h_{0\\mu} = 0\\) and zero trace; for a wave along \\(n\\) it also has \\(h_{ij}n^j = 0\\). Unique in each gauge class. In it \\(\\bar h = h\\).",
"section": "Two polarisations",
"slide": "One representative per class: TT gauge",
"keys": [
"transverse-traceless gauge (tt gauge)",
"transverse-traceless gauge",
"tt gauge"
]
},
{
"term_html": "plus and cross polarisations",
"html": "The two gauge-invariant amplitudes of a wave along \\(z\\): \\(h_+ = \\tfrac12(h_{11} - h_{22})\\) and \\(h_\\times = h_{12}\\). One pattern, turned by \\(45^\\circ\\).",
"section": "Two polarisations",
"slide": "One representative per class: TT gauge",
"keys": [
"plus and cross polarisations"
]
},
{
"term_html": "TT projector",
"html": "\\(\\Lambda(S) = PSP - \\tfrac12P\\,\\mathrm{tr}(PS)\\) with \\(P = 1 - nn^{\\mathsf T}\\), a self-adjoint projector on symmetric \\(3\\times3\\) matrices whose image, of dimension 2, is the transverse traceless ones. Extracts \\(h^{\\rm TT}\\) from any Lorenz-gauge \\(\\bar h_{ij}\\).",
"section": "Two polarisations",
"slide": "The transverse-traceless projector",
"keys": [
"tt projector"
]
},
{
"term_html": "strain",
"html": "The fractional change of proper separation between free masses, \\(\\Delta L/L_0 = \\tfrac12h_{ij}n^in^j\\); \\(\\tfrac12h_+\\) along \\(x\\), \\(-\\tfrac12h_+\\) along \\(y\\). Dimensionless; about \\(10^{-21}\\) for the strongest waves seen.",
"section": "Two polarisations",
"slide": "Free masses sit still, and distances change",
"keys": [
"strain"
]
},
{
"term_html": "helicity",
"html": "The integer \\(s\\) for which a rotation by \\(\\psi\\) about the direction of travel rotates the polarisation amplitudes by \\(s\\psi\\). Light has 1; gravitational waves have 2, so the pattern repeats after a half turn.",
"section": "Two polarisations",
"slide": "Spin two",
"keys": [
"helicity"
]
},
{
"term_html": "retarded Green's function",
"html": "\\(G_{\\rm ret} = \\delta(t - r/c)/4\\pi r\\), the fundamental solution of unit 24's wave operator that vanishes before the source acts; found there by unit 20's contour integration with the poles below the axis.",
"section": "The quadrupole formula",
"slide": "The retarded solution",
"keys": [
"retarded green's function"
]
},
{
"term_html": "retarded time",
"html": "\\(t - |\\vec x - \\vec y|/c\\): the field at \\(\\vec x\\) now reports the source at \\(\\vec y\\) as it was when a signal at speed \\(c\\) left it.",
"section": "The quadrupole formula",
"slide": "The retarded solution",
"keys": [
"retarded time"
]
},
{
"term_html": "wave zone",
"html": "Distances large compared with both the source's size and the reduced wavelength \\(c/\\omega\\), where only the \\(1/r\\) part of the field survives and carries energy.",
"section": "The quadrupole formula",
"slide": "Far away and slow",
"keys": [
"wave zone"
]
},
{
"term_html": "slow-motion approximation",
"html": "Source size small compared with \\(c/\\omega\\), equivalently speeds small compared with \\(c\\); each term of the multipole series is then \\(O(v/c)\\) smaller than the one before.",
"section": "The quadrupole formula",
"slide": "Far away and slow",
"keys": [
"slow-motion approximation"
]
},
{
"term_html": "tensor virial theorem",
"html": "For a conserved \\(T^{\\mu\\nu}\\) of bounded support, \\(\\int T^{ij} = \\tfrac12\\,\\mathrm d^2/\\mathrm dt^2\\int\\rho\\,y^iy^j\\). Trades a source's stresses for its mass distribution.",
"section": "The quadrupole formula",
"slide": "Lemma: the stresses are the second moment",
"keys": [
"tensor virial theorem"
]
},
{
"term_html": "quadrupole formula",
"html": "\\(h^{\\rm TT}_{ij} = (2G/c^4r)\\,\\Lambda_{ij,kl}(n)\\,\\ddot Q_{kl}(t - r/c)\\), with \\(Q_{ij} = \\int\\rho(y^iy^j - \\tfrac13\\delta_{ij}|y|^2)\\), one third of unit 10's quadrupole moment. Einstein 1918.",
"section": "The quadrupole formula",
"slide": "The quadrupole formula",
"keys": [
"quadrupole formula"
]
},
{
"term_html": "gravitational stress",
"html": "\\(t^{ij} = (4\\pi G)^{-1}(\\partial_i\\Phi\\,\\partial_j\\Phi - \\tfrac12\\delta_{ij}|\\nabla\\Phi|^2)\\), whose divergence is \\(\\rho\\,\\partial_i\\Phi\\); with it a self-gravitating Newtonian source has a conserved total stress, and the virial lemma applies.",
"section": "The quadrupole formula",
"slide": "The binary breaks the hypothesis",
"keys": [
"gravitational stress"
]
},
{
"term_html": "normal coordinates",
"html": "Unit 32's chart at a point \\(p\\) in which \\(g_{\\mu\\nu}(p) = \\eta_{\\mu\\nu}\\) and \\(\\partial_\\lambda g_{\\mu\\nu}(p) = 0\\). The reason no tensor built from first derivatives of the metric can be a gravitational energy density.",
"section": "Energy",
"slide": "No energy density at a point",
"keys": [
"normal coordinates"
]
},
{
"term_html": "Isaacson stress-energy tensor",
"html": "\\(t_{\\mu\\nu} = (c^4/32\\pi G)\\langle\\partial_\\mu h^{\\rm TT}_{ij}\\, \\partial_\\nu h^{\\rm TT}_{ij}\\rangle\\), averaged over several wavelengths; gauge invariant, and a source of background curvature. Energy flux \\((c^3/16\\pi G)\\langle\\dot h_+^2 + \\dot h_\\times^2\\rangle\\). Cited: Isaacson 1968.",
"section": "Energy",
"slide": "The Isaacson average",
"keys": [
"isaacson stress-energy tensor"
]
},
{
"term_html": "quadrupole luminosity",
"html": "\\(P = (G/5c^5)\\langle\\overset{...}{Q}_{ij}\\overset{...}{Q}_{ij}\\rangle\\), the power radiated by a slow source. The gravitational Larmor formula.",
"section": "Energy",
"slide": "The quadrupole luminosity",
"keys": [
"quadrupole luminosity"
]
},
{
"term_html": "adiabatic inspiral",
"html": "The orbit treated as a Kepler circle whose radius drifts on a slow time; valid while the fraction of energy lost per cycle is small. Unit 21's multiple scales with radiation reaction as the perturbation.",
"section": "The chirp",
"slide": "A slow drift on a fast orbit: two times",
"keys": [
"adiabatic inspiral"
]
},
{
"term_html": "solvability condition",
"html": "Unit 21's requirement that the next-order equation have no secular term. Here it is the energy balance \\(\\mathrm dE/\\mathrm dt = -\\langle P\\rangle\\).",
"section": "The chirp",
"slide": "A slow drift on a fast orbit: two times",
"keys": [
"solvability condition"
]
},
{
"term_html": "chirp mass",
"html": "\\(\\mathcal M = \\mu^{3/5}M^{2/5} = (m_1m_2)^{3/5}/(m_1 + m_2)^{1/5}\\), the only combination of the masses in \\(\\dot f\\), in the time to coalescence and in the amplitude. \\(1.2307\\,M_\\odot\\) for PSR B1913+16, about \\(30\\,M_\\odot\\) for GW150914 as the detector sees it.",
"section": "The chirp",
"slide": "The chirp, and the one mass that shows",
"keys": [
"chirp mass"
]
},
{
"term_html": "chirp",
"html": "The rising frequency and amplitude of an inspiral, \\(f\\propto(t_c - t)^{-3/8}\\), \\(h\\propto(t_c - t)^{-1/4}\\).",
"section": "The chirp",
"slide": "What the chirp looks like",
"keys": [
"chirp"
]
},
{
"term_html": "ringdown",
"html": "The damped oscillation of the black hole formed at merger, the last part of a signal like GW150914's. Outside the methods of this unit.",
"section": "Two binaries, measured",
"slide": "GW150914",
"keys": [
"ringdown"
]
}
];
