// Generated from GLOSSARY.org by `cap glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "antenna",
"html": "The conductor that turns a guided wave into a radiated one (branch 16 says how). In this unit it is only a load impedance of stated value at the operating frequency: here 12.5 Ω, assumed.",
"section": "The running example",
"slide": "Sixty-four per cent",
"keys": [
"antenna"
]
},
{
"term_html": "feed line",
"html": "The line, usually a coaxial cable, that carries a transmitter's power to its antenna as a guided wave.",
"section": "The running example",
"slide": "An antenna at the end of a feed line",
"keys": [
"feed line"
]
},
{
"term_html": "phase constant",
"html": "\\(\\beta = \\omega/u = 2\\pi/\\lambda\\), in rad/m: the rate at which a wave's phase turns with distance along a lossless line. A forward wave is \\(V_+e^{i(\\omega t - \\beta z)}\\).",
"section": "The line in the steady state",
"slide": "Unit 08's line, in phasors",
"keys": [
"phase constant"
]
},
{
"term_html": "reflection coefficient at d",
"html": "\\(\\Gamma(d) = \\Gamma_Le^{-2i\\beta d}\\): the ratio of the reflected to the forward wave at distance \\(d\\) from the load. On a lossless line its size is constant and it turns clockwise, once per half wavelength, as \\(d\\) grows.",
"section": "The line in the steady state",
"slide": "The reflection coefficient turns as you walk",
"keys": [
"reflection coefficient at d"
]
},
{
"term_html": "input impedance",
"html": "\\(Z_{\\mathrm{in}}(d) = V(d)/I(d) = Z_0(Z_L + iZ_0\\tan\\beta d)/(Z_0 + iZ_L\\tan\\beta d)\\): the impedance a terminated length \\(d\\) of line presents at its near end, at one frequency.",
"section": "The line in the steady state",
"slide": "Input impedance",
"keys": [
"input impedance"
]
},
{
"term_html": "normalised impedance",
"html": "\\(z = Z/Z_0\\), dimensionless. In it the reflection coefficient is \\(\\Gamma = (z - 1)/(z + 1)\\).",
"section": "The line in the steady state",
"slide": "Input impedance",
"keys": [
"normalised impedance"
]
},
{
"term_html": "standing wave",
"html": "The pattern \\(|V(d)|\\) made by a forward and a reflected wave together: fixed in space, periodic with period \\(\\lambda/2\\), between \\(|V_+|(1 - |\\Gamma|)\\) and \\(|V_+|(1 + |\\Gamma|)\\).",
"section": "Standing waves",
"slide": "The standing wave, and its ratio",
"keys": [
"standing wave"
]
},
{
"term_html": "standing-wave ratio, VSWR",
"html": "\\(S = |V|_{\\max}/|V|_{\\min}\\) \\(= (1 + |\\Gamma|)/(1 - |\\Gamma|)\\), from 1 (matched) to \\(\\infty\\) (total reflection). The impedance is \\(Z_0S\\) at a voltage maximum and \\(Z_0/S\\) at a minimum.",
"section": "Standing waves",
"slide": "The standing wave, and its ratio",
"keys": [
"standing-wave ratio, vswr",
"standing-wave ratio",
"vswr"
]
},
{
"term_html": "quarter-wave transformer",
"html": "A section of line a quarter wavelength long and of impedance \\(Z_q = \\sqrt{Z_0Z_L}\\), which turns a resistive load \\(Z_L\\) into \\(Z_q^2/Z_L = Z_0\\): a match, at one frequency.",
"section": "The quarter-wave line",
"slide": "A quarter wavelength inverts impedance",
"keys": [
"quarter-wave transformer"
]
},
{
"term_html": "half-wave line",
"html": "A line half a wavelength long: its input impedance equals its load, whatever its own \\(Z_0\\), at one frequency.",
"section": "The quarter-wave line",
"slide": "A quarter wavelength inverts impedance",
"keys": [
"half-wave line"
]
},
{
"term_html": "Möbius transformation, Möbius map",
"html": "\\(T(z) = (az + b)/(cz + d)\\) with \\(ad - bc \\ne 0\\), on the extended plane. A bijection of it, whose inverse is again Möbius. \\(\\Gamma(z) = (z - 1)/(z + 1)\\) is one.",
"section": "Möbius maps",
"slide": "The reflection coefficient is a map",
"keys": [
"möbius transformation, möbius map",
"möbius transformation",
"möbius map"
]
},
{
"term_html": "extended plane",
"html": "\\(\\mathbb C \\cup \\{\\infty\\}\\): the complex plane with one point at infinity added, where an open circuit's impedance lives.",
"section": "Möbius maps",
"slide": "The reflection coefficient is a map",
"keys": [
"extended plane"
]
},
{
"term_html": "translation",
"html": "\\(z \\mapsto z + b\\).",
"section": "Möbius maps",
"slide": "Every Möbius map is built from three moves",
"keys": [
"translation"
]
},
{
"term_html": "dilation-rotation",
"html": "\\(z \\mapsto kz\\), \\(k \\ne 0\\): scales by \\(|k|\\) and turns by \\(\\arg k\\).",
"section": "Möbius maps",
"slide": "Every Möbius map is built from three moves",
"keys": [
"dilation-rotation"
]
},
{
"term_html": "inversion",
"html": "\\(z \\mapsto 1/z\\). Every Möbius map is a composition of translations, dilation-rotations and at most one inversion.",
"section": "Möbius maps",
"slide": "Every Möbius map is built from three moves",
"keys": [
"inversion"
]
},
{
"term_html": "generalised circle",
"html": "A circle or a line: the set \\(A|z|^2 + B\\bar z + \\bar Bz + C = 0\\) with \\(A, C\\) real and \\(|B|^2 &gt; AC\\); a line is the case \\(A = 0\\), a circle through \\(\\infty\\). Möbius maps send generalised circles to generalised circles.",
"section": "Möbius maps",
"slide": "Circles and lines are one family",
"keys": [
"generalised circle"
]
},
{
"term_html": "positive-real",
"html": "Unit 05's term: an impedance with \\(\\operatorname{Re}Z(s) \\ge 0\\) for \\(\\operatorname{Re}s &gt; 0\\), true of every network of positive R, L, C; on the imaginary axis, \\(\\operatorname{Re}Z(i\\omega) \\ge 0\\). Here: such impedances are exactly those with \\(|\\Gamma| \\le 1\\).",
"section": "Möbius maps",
"slide": "The passive half-plane is the disc",
"keys": [
"positive-real"
]
},
{
"term_html": "constant-resistance circle",
"html": "The image in the \\(\\Gamma\\)-plane of the line \\(\\operatorname{Re}z = r\\): the circle of centre \\(r/(1 + r)\\) and radius \\(1/(1 + r)\\), through \\(\\Gamma = 1\\).",
"section": "The Smith chart",
"slide": "Constant resistance: circles through Γ = 1",
"keys": [
"constant-resistance circle"
]
},
{
"term_html": "constant-reactance circle",
"html": "The image of the line \\(\\operatorname{Im}z = x\\): the circle of centre \\(1 + i/x\\) and radius \\(1/|x|\\), of which the arc inside the unit disc is used.",
"section": "The Smith chart",
"slide": "Constant reactance: circles centred at 1 + i/x",
"keys": [
"constant-reactance circle"
]
},
{
"term_html": "Smith chart",
"html": "The unit disc in the \\(\\Gamma\\)-plane ruled with the constant-resistance and constant-reactance circles: a map of every passive impedance, on which a lossless line acts by rotation. Named after P. H. Smith (<em>Electronics</em>, January 1939).",
"section": "The Smith chart",
"slide": "The Smith chart",
"keys": [
"smith chart"
]
},
{
"term_html": "toward the generator",
"html": "The direction away from the load along the line. On the chart, moving that way is a clockwise rotation by \\(4\\pi d/\\lambda\\).",
"section": "The Smith chart",
"slide": "Walking along the line turns the chart",
"keys": [
"toward the generator"
]
},
{
"term_html": "normalised admittance",
"html": "\\(y = 1/z = YZ_0 = g + ib\\).",
"section": "The Smith chart",
"slide": "The admittance chart",
"keys": [
"normalised admittance"
]
},
{
"term_html": "admittance chart",
"html": "The Smith chart's grid turned through 180°, read as \\(g + ib\\): since \\(\\Gamma(1/z) = -\\Gamma(z)\\), the same point \\(\\Gamma\\) carries admittance \\(y\\) on it.",
"section": "The Smith chart",
"slide": "The admittance chart",
"keys": [
"admittance chart"
]
},
{
"term_html": "stub",
"html": "A length of line, short-circuited (or open) at its far end, connected across a line as a pure susceptance: \\(y = -i\\cot\\beta\\ell\\) when shorted.",
"section": "Matching with a stub",
"slide": "A shunt stub",
"keys": [
"stub"
]
},
{
"term_html": "single-stub matching",
"html": "Moving from the load to a point where \\(y = 1 + ib\\), and connecting there a stub of susceptance \\(-ib\\), so that the line sees \\(y = 1\\).",
"section": "Matching with a stub",
"slide": "A shunt stub",
"keys": [
"single-stub matching"
]
},
{
"term_html": "matching network",
"html": "A lossless two-port between a line and its load that makes the line see \\(Z_0\\) at the operating frequency.",
"section": "The antenna, and the band",
"slide": "An antenna at the end of a feed line",
"keys": [
"matching network"
]
},
{
"term_html": "L-network",
"html": "A matching network of one series and one shunt reactance, built from unit 05's inductors and capacitors.",
"section": "The antenna, and the band",
"slide": "An antenna at the end of a feed line",
"keys": [
"l-network"
]
}
];
