// Generated from GLOSSARY.org by `cap glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "RMS value",
"html": "For a sinusoidal current \\(i(t) = \\sqrt2\\,I\\cos\\omega t\\), the number \\(I = \\sqrt{\\overline{i^2}}\\): the steady current that heats a wire at the same mean rate. Mains \"230 V\" and \"10 A\" are RMS values.",
"section": "What moves",
"slide": "The kettle cable, from nothing",
"keys": [
"rms value"
]
},
{
"term_html": "current density",
"html": "The vector field \\(\\vec J\\), in \\(\\mathrm{A\\,m^{-2}}\\), whose flux through a surface is the current through it: \\(I = \\int_S\\vec J\\cdot\\mathrm d\\vec A\\). Met in MR 23.",
"section": "What moves",
"slide": "Current density, from carriers",
"keys": [
"current density"
]
},
{
"term_html": "drift velocity",
"html": "The mean velocity \\(\\vec v_{\\mathrm d}\\) of the mobile charges. Carriers of charge \\(q\\) and number density \\(n\\) give \\(\\vec J = nq\\vec v_{\\mathrm d}\\); the random part of their motion carries no net charge. In a metal \\(q = -e\\), so the electrons drift against \\(\\vec J\\).",
"section": "What moves",
"slide": "Current density, from carriers",
"keys": [
"drift velocity"
]
},
{
"term_html": "conduction electron",
"html": "An electron free to move through a metal; copper has one per atom, \\(n = 8.47\\times10^{28}\\ \\mathrm{m^{-3}}\\) (Ashcroft &amp; Mermin, table 1.1), which the handbook density and molar mass reproduce to 0.24%.",
"section": "What moves",
"slide": "Worked: the drift speed in the kettle cable",
"keys": [
"conduction electron"
]
},
{
"term_html": "Drude model",
"html": "Drude's 1900 model of a metal: classical electrons moving freely between instantaneous collisions, which occur with probability \\(\\mathrm dt/\\tau\\) in each interval \\(\\mathrm dt\\) and leave each electron with a random velocity of mean zero.",
"section": "The Drude model",
"slide": "Drude's hypotheses",
"keys": [
"drude model"
]
},
{
"term_html": "relaxation time",
"html": "The constant \\(\\tau\\) of the Drude model: the mean time between collisions. Not predicted by the model; read off the measured resistivity, \\(\\tau = m/ne^2\\rho = 2.49\\times10^{-14}\\) s for copper at 20 °C.",
"section": "The Drude model",
"slide": "Drude's hypotheses",
"keys": [
"relaxation time"
]
},
{
"term_html": "relaxation-time equation",
"html": "\\(\\mathrm d\\vec p/\\mathrm dt = -\\vec p/\\tau + \\vec f\\) for the mean momentum per electron under a force \\(\\vec f\\): collisions act on the mean motion as a friction of rate \\(1/\\tau\\).",
"section": "The Drude model",
"slide": "The relaxation-time equation",
"keys": [
"relaxation-time equation"
]
},
{
"term_html": "Ohm's law",
"html": "In local form, \\(\\vec J = \\sigma\\vec E\\): the steady state of the relaxation-time equation, with \\(\\sigma = ne^2\\tau/m\\). Its integrated form for a conductor between two electrodes is \\(V = IR\\).",
"section": "The Drude model",
"slide": "Ohm's law, out of the model",
"keys": [
"ohm's law"
]
},
{
"term_html": "conductivity",
"html": "\\(\\sigma\\) in \\(\\vec J = \\sigma\\vec E\\), in siemens per metre (\\(\\mathrm S = \\mathrm{A\\,V^{-1}}\\)). Copper at 20 °C: \\(5.95\\times10^7\\ \\mathrm{S\\,m^{-1}}\\). Not to be confused with MR 23's surface charge density, written \\(\\Sigma\\) in this course.",
"section": "The Drude model",
"slide": "Ohm's law, out of the model",
"keys": [
"conductivity"
]
},
{
"term_html": "resistivity",
"html": "\\(\\rho = 1/\\sigma\\), in \\(\\Omega\\,\\mathrm m\\). Copper at 20 °C: \\(1.68\\times10^{-8}\\ \\Omega\\,\\mathrm m\\) (CRC). In this course volume charge density is written \\(\\varrho\\) to keep the two apart.",
"section": "The Drude model",
"slide": "Ohm's law, out of the model",
"keys": [
"resistivity"
]
},
{
"term_html": "linear response",
"html": "A response proportional to the push that causes it. Ohm's law is one because the drift is a tiny shift of the electrons' velocity distribution: in the kettle cable \\(v_{\\mathrm d}/v_F = 1.9\\times10^{-10}\\).",
"section": "The Drude model",
"slide": "A linear response to a gentle push",
"keys": [
"linear response"
]
},
{
"term_html": "Fermi speed",
"html": "The speed \\(v_F\\) of the fastest conduction electrons, set by the Pauli principle — a quantum result (Sommerfeld, 1928), cited from Ashcroft &amp; Mermin, ch. 2. For copper \\(1.57\\times10^6\\ \\mathrm{m\\,s^{-1}}\\) (their table 2.1).",
"section": "The Drude model",
"slide": "A linear response to a gentle push",
"keys": [
"fermi speed"
]
},
{
"term_html": "Joule heating",
"html": "The work the field does on the carriers, \\(\\vec J\\cdot\\vec E\\) per unit volume. In the steady state all of it passes to the lattice through collisions, as heat.",
"section": "Joule heating",
"slide": "The field's work is J·E",
"keys": [
"joule heating"
]
},
{
"term_html": "resistance",
"html": "\\(R = V/I\\) for a conductor between two electrodes, in ohms (\\(\\Omega = \\mathrm{V\\,A^{-1}}\\)). For a uniform wire \\(R = \\rho L/A\\); the heat in it is \\(VI = I^2R\\).",
"section": "Joule heating",
"slide": "A uniform wire: I²R",
"keys": [
"resistance"
]
},
{
"term_html": "current-carrying capacity",
"html": "The current a cable may carry continuously, tabulated in IEC 60364-5-52 by conductor size and installation method so that the conductor stays below its insulation's limit: 70 °C for PVC, 90 °C for XLPE. A thermal limit, set by \\(I^2R\\).",
"section": "Joule heating",
"slide": "Why cables are rated by temperature",
"keys": [
"current-carrying capacity"
]
},
{
"term_html": "mixed boundary-value problem",
"html": "Steady current in a conductor: \\(\\nabla\\cdot(\\sigma\\nabla\\varphi) = 0\\) inside, with \\(\\varphi\\) given on the electrodes (Dirichlet) and \\(\\partial_n\\varphi = 0\\) on insulated surfaces (Neumann). Its solution is unique, by the energy method, so \\(R\\) depends only on shape and material.",
"section": "Resistance as a boundary-value problem",
"slide": "Steady current is a Laplace problem",
"keys": [
"mixed boundary-value problem"
]
},
{
"term_html": "electrode",
"html": "A patch of a conductor's surface joined to a much better conductor, and so held at a single potential.",
"section": "Resistance as a boundary-value problem",
"slide": "Steady current is a Laplace problem",
"keys": [
"electrode"
]
},
{
"term_html": "surface charge",
"html": "Charge on the surface of a current-carrying wire, graded along it, with extra charge at bends and junctions. Its three roles (Jackson, 1996): it maintains the potential around the circuit, provides the field outside the conductors, and confines the current to the wire.",
"section": "Surface charge",
"slide": "Surface charge steers the field",
"keys": [
"surface charge"
]
},
{
"term_html": "junction charge",
"html": "The sheet of charge \\(\\Sigma = \\varepsilon_0J_n(\\rho_2 - \\rho_1)\\) at an interface where current passes from resistivity \\(\\rho_1\\) into \\(\\rho_2\\): positive where it enters a worse conductor.",
"section": "Surface charge",
"slide": "Charge at a junction",
"keys": [
"junction charge"
]
},
{
"term_html": "charge relaxation time",
"html": "\\(t_c = \\varepsilon_0/\\sigma\\), the decay time of interior charge if \\(\\vec J = \\sigma\\vec E\\) held at every instant. For copper \\(1.5\\times10^{-19}\\) s — far shorter than \\(\\tau\\), so meaningless there; correct only for a poor conductor, as the overdamped limit of the charge oscillator.",
"section": "How fast does interior charge vanish?",
"slide": "The naive answer, and why it is meaningless",
"keys": [
"charge relaxation time"
]
},
{
"term_html": "plasma frequency",
"html": "\\(\\omega_p = \\sqrt{ne^2/\\varepsilon_0m}\\), the natural frequency of the charge oscillator \\(\\ddot\\varrho + \\dot\\varrho/\\tau + \\omega_p^2\\varrho = 0\\). For copper \\(1.64\\times10^{16}\\ \\mathrm{rad\\,s^{-1}}\\), with quality factor \\(\\omega_p\\tau = 410\\).",
"section": "How fast does interior charge vanish?",
"slide": "Done properly: the charge is an oscillator",
"keys": [
"plasma frequency"
]
},
{
"term_html": "mean free path",
"html": "\\(\\ell = v\\tau\\), the distance travelled between collisions. With the classical speed, 2.9 nm in copper; with the Fermi speed, 39 nm, about 150 nearest-neighbour distances.",
"section": "What Drude gets wrong",
"slide": "Two speeds, two mean free paths",
"keys": [
"mean free path"
]
},
{
"term_html": "Hall effect",
"html": "The transverse field \\(E_y\\) that appears across a conductor carrying current \\(J_x\\) in a magnetic field \\(B_z\\), from charge pushed to one edge by the magnetic force.",
"section": "What Drude gets wrong",
"slide": "The Hall effect, and a wrong sign",
"keys": [
"hall effect"
]
},
{
"term_html": "Hall coefficient",
"html": "\\(R_H = E_y/J_xB\\); in the Drude model \\(-1/ne\\), so it measures the carrier density and the carriers' sign. For some metals it is measured positive, which classical electrons cannot explain (Ashcroft &amp; Mermin, ch. 1).",
"section": "What Drude gets wrong",
"slide": "The Hall effect, and a wrong sign",
"keys": [
"hall coefficient"
]
},
{
"term_html": "Wiedemann–Franz law",
"html": "For many metals \\(\\kappa/\\sigma T\\) is nearly the same. Drude's classical value \\(\\tfrac32(k_B/e)^2 = 1.11\\times10^{-8}\\ \\mathrm{W\\,\\Omega\\,K^{-2}}\\) came close only through two compensating errors; Sommerfeld's is \\(\\tfrac{\\pi^2}{3}(k_B/e)^2 = 2.44\\times10^{-8}\\).",
"section": "What Drude gets wrong",
"slide": "Wiedemann–Franz: right for the wrong reasons",
"keys": [
"wiedemann–franz law"
]
}
];
