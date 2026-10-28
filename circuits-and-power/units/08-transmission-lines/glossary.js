// Generated from GLOSSARY.org by `cap glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "telegrapher's equations",
"html": "The pair \\(\\partial_zv = -L'\\partial_ti\\), \\(\\partial_zi = -C'\\partial_tv\\) for the voltage and current along a two-conductor line, derived from Faraday's law and charge conservation over a length \\(\\mathrm dz\\). With loss, \\(R'i\\) and \\(G'v\\) are added.",
"section": "From Maxwell to the telegrapher's equations",
"slide": "Faraday over a length dz: the first equation",
"keys": [
"telegrapher's equations"
]
},
{
"term_html": "transmission line",
"html": "Two parallel conductors of uniform cross-section in a uniform insulator, long enough that voltage and current vary along them.",
"section": "From Maxwell to the telegrapher's equations",
"slide": "A long line, and the hypothesis that fails",
"keys": [
"transmission line"
]
},
{
"term_html": "TEM",
"html": "Transverse electromagnetic: fields with \\(E_z = B_z = 0\\), lying in each cross-section. Then each cross-section holds a static field, so a voltage and a current are defined there.",
"section": "From Maxwell to the telegrapher's equations",
"slide": "A long line, and the hypothesis that fails",
"keys": [
"tem"
]
},
{
"term_html": "forward wave",
"html": "A solution \\(v_+(t - z/u)\\), moving towards \\(+z\\) at \\(u = 1/\\sqrt{L'C'}\\), with current \\(v_+/Z_0\\).",
"section": "Waves, speed, and the characteristic impedance",
"slide": "d'Alembert, and the characteristic impedance",
"keys": [
"forward wave"
]
},
{
"term_html": "backward wave",
"html": "A solution \\(v_-(t + z/u)\\), moving towards \\(-z\\), with current \\(-v_-/Z_0\\) counted along \\(+z\\).",
"section": "Waves, speed, and the characteristic impedance",
"slide": "d'Alembert, and the characteristic impedance",
"keys": [
"backward wave"
]
},
{
"term_html": "characteristic impedance",
"html": "\\(Z_0 = \\sqrt{L'/C'}\\): the ratio of voltage to current in a forward wave. A real resistance for a lossless line, though nothing dissipates; \\(\\sqrt{(R' + i\\omega L')/(G' + i\\omega C')}\\) with loss.",
"section": "Waves, speed, and the characteristic impedance",
"slide": "d'Alembert, and the characteristic impedance",
"keys": [
"characteristic impedance"
]
},
{
"term_html": "impedance of free space",
"html": "\\(\\eta_0 = \\sqrt{\\mu_0/\\varepsilon_0} = 376.7\\ \\Omega\\). A coaxial line has \\(Z_0 = (\\eta_0/2\\pi\\sqrt{\\varepsilon_r}) \\ln(b/a)\\).",
"section": "Waves, speed, and the characteristic impedance",
"slide": "Z0 for a coaxial cable and for two wires",
"keys": [
"impedance of free space"
]
},
{
"term_html": "wave front",
"html": "The leading edge of a wave switched on at one instant: behind it voltage, current and field; ahead of it none. It moves at \\(u\\), and the current flows to it, charging the next length of line.",
"section": "Waves, speed, and the characteristic impedance",
"slide": "Switching on: the front",
"keys": [
"wave front"
]
},
{
"term_html": "reflection coefficient",
"html": "\\(\\Gamma = v_-/v_+ = (R_L - Z_0)/(R_L + Z_0)\\) at a resistive load; \\(-1\\) for a short, \\(+1\\) for an open end, \\(0\\) for a matched load.",
"section": "Reflection",
"slide": "A load at the end: the reflection coefficient",
"keys": [
"reflection coefficient"
]
},
{
"term_html": "matched load",
"html": "A load equal to the line's \\(Z_0\\): \\(\\Gamma = 0\\), nothing returns, and the line behaves as if infinitely long.",
"section": "Reflection",
"slide": "A load at the end: the reflection coefficient",
"keys": [
"matched load"
]
},
{
"term_html": "transmission coefficient",
"html": "At a junction of lines \\(Z_1\\) and \\(Z_2\\), the ratio of transmitted to incident voltage, \\(1 + \\Gamma = 2Z_2/(Z_1 + Z_2)\\).",
"section": "Reflection",
"slide": "Open, short, matched: MR 18's ends",
"keys": [
"transmission coefficient"
]
},
{
"term_html": "bounce diagram",
"html": "The \\((z, t)\\) plane with each wave drawn as a diagonal line labelled by its amplitude, and each reflection as a corner. The voltage at a point is the sum of the waves that have passed it.",
"section": "The bounce diagram",
"slide": "Waves as lines in the (z, t) plane",
"keys": [
"bounce diagram"
]
},
{
"term_html": "propagation constant",
"html": "\\(\\gamma = \\sqrt{(R' + i\\omega L')(G' + i\\omega C')} = \\alpha + i\\beta\\); a forward sinusoid varies as \\(e^{-\\gamma z}\\).",
"section": "Long lines, and loss",
"slide": "Loss: the propagation constant",
"keys": [
"propagation constant"
]
},
{
"term_html": "attenuation constant",
"html": "\\(\\alpha = \\operatorname{Re}\\gamma\\), in nepers per metre: the amplitude falls as \\(e^{-\\alpha z}\\).",
"section": "Long lines, and loss",
"slide": "Loss: the propagation constant",
"keys": [
"attenuation constant"
]
},
{
"term_html": "phase constant",
"html": "\\(\\beta = \\operatorname{Im}\\gamma\\), in radians per metre; \\(2\\pi/\\beta\\) is the wavelength and \\(\\omega/\\beta\\) the phase speed.",
"section": "Long lines, and loss",
"slide": "Loss: the propagation constant",
"keys": [
"phase constant"
]
},
{
"term_html": "dispersion",
"html": "Dependence of the phase speed on frequency, so that a pulse's components drift out of step and the pulse spreads (MR 20).",
"section": "Long lines, and loss",
"slide": "Loss: the propagation constant",
"keys": [
"dispersion"
]
},
{
"term_html": "distortionless condition",
"html": "\\(R'/L' = G'/C'\\), Heaviside's condition. Then \\(\\alpha = \\sqrt{R'G'}\\) and \\(\\beta = \\omega\\sqrt{L'C'}\\) at every frequency, and a pulse arrives smaller but the same shape.",
"section": "Long lines, and loss",
"slide": "Heaviside's condition: a lossy line that keeps its shape",
"keys": [
"distortionless condition"
]
},
{
"term_html": "loading coils",
"html": "Inductors inserted at intervals along a telephone line to raise its \\(L'\\) towards the distortionless condition.",
"section": "Long lines, and loss",
"slide": "Heaviside's condition: a lossy line that keeps its shape",
"keys": [
"loading coils"
]
},
{
"term_html": "stepped leader",
"html": "The first leader of a stroke lowering negative charge to ground: it grows down from the cloud in steps, depositing negative charge along its path (Rakov and Uman, ch. 1).",
"section": "Lightning",
"slide": "Before the stroke: a charged channel above the ground",
"keys": [
"stepped leader"
]
},
{
"term_html": "return stroke",
"html": "The discharge that runs up the leader's channel from ground towards the cloud once the leader connects, at typically a third to a half of \\(c\\) (Rakov, 2007), carrying a median peak current of 30 kA in first strokes (Berger et al., 1975).",
"section": "Lightning",
"slide": "Before the stroke: a charged channel above the ground",
"keys": [
"return stroke"
]
}
];
