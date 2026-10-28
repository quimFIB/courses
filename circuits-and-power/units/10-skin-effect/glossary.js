// Generated from GLOSSARY.org by `cap glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "skin effect",
"html": "The concentration of an alternating current near the surface of a conductor, because the changing magnetic field inside the conductor induces an electric field that opposes the current in the middle and aids it near the surface. Its length scale is the skin depth.",
"section": "The running example",
"slide": "One copper, three sizes",
"keys": [
"skin effect"
]
},
{
"term_html": "eddy currents",
"html": "Currents driven inside a conductor by Faraday's law, round a changing magnetic flux, and turned into current by Ohm's law. Unit 07 met them in transformer steel; in a wire carrying alternating current the conductor's own field drives them.",
"section": "The field diffuses into the metal",
"slide": "The half unit 00 left out",
"keys": [
"eddy currents"
]
},
{
"term_html": "good conductor",
"html": "A conductor in which, at the frequency of interest, the displacement current is negligible against the conduction current: \\(\\omega\\varepsilon_0/\\sigma \\ll 1\\). Copper: \\(4.7\\times10^{-17}\\) at 50 Hz, \\(2.2\\times10^{-9}\\) at 2.4 GHz.",
"section": "The field diffuses into the metal",
"slide": "Inside a metal, the displacement current is nothing",
"keys": [
"good conductor"
]
},
{
"term_html": "diffusion equation",
"html": "Inside a uniform good conductor, \\(\\partial\\vec B/\\partial t = D\\nabla^2\\vec B\\) with \\(D = 1/\\mu\\sigma\\), and the same for \\(\\vec E\\) and \\(\\vec J\\): the heat equation of MR 18, obtained by curling Ampère's law without displacement current and using Faraday's law and \\(\\nabla\\cdot\\vec B = 0\\).",
"section": "The field diffuses into the metal",
"slide": "The diffusion equation",
"keys": [
"diffusion equation"
]
},
{
"term_html": "magnetic diffusivity",
"html": "The coefficient \\(D = 1/\\mu\\sigma\\) of the diffusion equation, in \\(\\mathrm{m^2/s}\\). Copper: \\(1.34\\times10^{-2}\\ \\mathrm{m^2/s}\\). In a time \\(t\\) a field soaks a distance of order \\(\\sqrt{Dt}\\) into the metal.",
"section": "The field diffuses into the metal",
"slide": "The diffusion equation",
"keys": [
"magnetic diffusivity"
]
},
{
"term_html": "parabolic",
"html": "MR 18's type for a second-order equation whose principal part is degenerate in one direction, as the heat equation's is in time. Parabolic equations spread a disturbance everywhere at once; the diffusion equation is parabolic because dropping the displacement current dropped retardation.",
"section": "The field diffuses into the metal",
"slide": "Parabolic: what the approximation threw away",
"keys": [
"parabolic"
]
},
{
"term_html": "skin depth",
"html": "\\(\\delta = \\sqrt{2/\\omega\\mu\\sigma} = \\sqrt{\\rho/\\pi f\\mu}\\): the depth over which an alternating field and its current fall by a factor \\(e\\) inside a good conductor, while their phase falls behind by one radian. Copper: 9.23 mm at 50 Hz, 0.206 mm at 100 kHz.",
"section": "Into a flat face: the skin depth",
"slide": "A field at a flat face",
"keys": [
"skin depth"
]
},
{
"term_html": "surface resistance",
"html": "\\(R_s = 1/\\sigma\\delta = \\rho/\\delta\\), in ohms per square: the resistance of a conductor many skin depths thick to an alternating current along its face. Exactly that of the same current spread uniformly through a layer \\(\\delta\\) thick (the surface-layer theorem).",
"section": "Into a flat face: the skin depth",
"slide": "The surface-layer theorem",
"keys": [
"surface resistance"
]
},
{
"term_html": "surface impedance",
"html": "\\(Z_s = E_{\\parallel}/H_{\\parallel}\\) at the face of a conductor; for a thick good conductor \\(Z_s = (1+i)R_s\\). Its real part is the power entering per unit area per \\(|H|^2\\); its imaginary part is \\(2\\omega\\) times the mean magnetic energy stored in the skin, per unit area and per \\(|H|^2\\).",
"section": "Into a flat face: the skin depth",
"slide": "Energy check: the Poynting flux into the skin",
"keys": [
"surface impedance"
]
},
{
"term_html": "internal impedance",
"html": "For a long round wire, \\(Z_i = E_z(a)/I\\) per metre: the axial field at the surface over the current. Its product with \\(|I|^2\\) is the complex power entering the wire through its surface. For radius \\(a\\), \\(Z_i = (k\\rho/2\\pi a)\\,J_0(ka)/J_1(ka)\\) with \\(k = (1-i)/\\delta\\).",
"section": "A round wire",
"slide": "Internal impedance: the surface field over the current",
"keys": [
"internal impedance"
]
},
{
"term_html": "AC resistance",
"html": "The real part of the internal impedance, \\(R_{\\mathrm{ac}}\\). For \\(a \\ll \\delta\\), \\(R_{\\mathrm{dc}}\\big(1 + (a/\\delta)^4/48\\big)\\); for \\(a \\gg \\delta\\), \\(R_{\\mathrm{dc}}\\big(a/2\\delta + \\tfrac14\\big)\\), rising as \\(\\sqrt f\\).",
"section": "A round wire",
"slide": "Internal impedance: the surface field over the current",
"keys": [
"ac resistance"
]
},
{
"term_html": "proximity effect",
"html": "The redistribution of current in a conductor by the magnetic field of neighbouring conductors' currents: with opposite currents the current crowds onto the facing sides, with equal currents onto the far sides; either way the AC resistance rises. Cited from the CDA's <em>Copper for Busbars</em> and Sullivan (1999).",
"section": "A round wire",
"slide": "Neighbours: the proximity effect",
"keys": [
"proximity effect"
]
},
{
"term_html": "busbar",
"html": "A rigid conductor — bar, rod, tube or strip — carrying the current of a substation or switchboard between its pieces of equipment. At 50 Hz a copper tube with a wall near \\(\\pi\\delta/2\\) beats a solid bar of the same outside diameter.",
"section": "The two numbers, read as hardware",
"slide": "A 100 mm copper bar at 50 Hz",
"keys": [
"busbar"
]
},
{
"term_html": "aluminium conductor steel reinforced (ACSR)",
"html": "A stranded overhead-line conductor with zinc-coated steel wires at its centre and aluminium wires in concentric layers round them (EN 50182). The aluminium carries the current, the steel the tension.",
"section": "The two numbers, read as hardware",
"slide": "Overhead lines: aluminium round a steel core",
"keys": [
"aluminium conductor steel reinforced (acsr)",
"aluminium conductor steel reinforced",
"acsr"
]
},
{
"term_html": "Litz wire",
"html": "A conductor of many individually insulated strands, each thinner than the skin depth, twisted or woven together (Sullivan 1999). Used for coils at high frequency, such as unit 15's charging coils.",
"section": "The two numbers, read as hardware",
"slide": "Twisted, so every strand takes every place",
"keys": [
"litz wire"
]
},
{
"term_html": "transposition",
"html": "Moving each strand of a bundle through every position along its length, so that every strand links the same flux on average and carries the same share of the current.",
"section": "The two numbers, read as hardware",
"slide": "Twisted, so every strand takes every place",
"keys": [
"transposition"
]
}
];
