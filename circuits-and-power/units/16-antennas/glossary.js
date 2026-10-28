// Generated from GLOSSARY.org by `cap glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "antenna",
"html": "A conductor shaped so that a current driven into it at a pair of terminals radiates, or so that a passing wave drives a current at its terminals.",
"section": "Radiation from a current: the radiation resistance",
"slide": "A current element",
"keys": [
"antenna"
]
},
{
"term_html": "current element",
"html": "A model: a straight segment of length \\(l\\ll\\lambda\\) carrying the same current \\(i(t)\\) along its whole length, with charges \\(\\pm q\\), \\(\\mathrm dq/\\mathrm dt = i\\), at its ends. Its dipole moment changes as \\(\\dot{\\vec p} = l\\,i\\,\\hat z\\).",
"section": "Radiation from a current: the radiation resistance",
"slide": "A current element",
"keys": [
"current element"
]
},
{
"term_html": "coherent sum (coherently)",
"html": "Adding the contributions \\(q_j\\vec a_j\\) of many charges to \\(\\ddot{\\vec p}\\) before squaring: \\(P = \\mu_0|\\sum_jq_j\\vec a_j|^2/6\\pi c\\). For \\(N\\) charges in step it is \\(N^2\\) times one charge's power, not \\(N\\) times.",
"section": "Radiation from a current: the radiation resistance",
"slide": "Add the fields, then square",
"keys": [
"coherent sum (coherently)",
"coherent sum",
"coherently"
]
},
{
"term_html": "radiation resistance",
"html": "The resistance \\(R_{\\mathrm{rad}}\\) defined by \\(\\bar P = \\tfrac12R_{\\mathrm{rad}}\\hat I^2\\) for the mean radiated power, with \\(\\hat I\\) the peak current at the feed (\\(= R_{\\mathrm{rad}}|I|^2\\) with RMS phasors). For a current element, \\(\\tfrac{2\\pi}3\\eta_0(l/\\lambda)^2 = 789.0(l/\\lambda)^2\\ \\Omega\\); a quarter of that for the bare wire's triangular current.",
"section": "Radiation from a current: the radiation resistance",
"slide": "Worked: the radiation resistance from Larmor",
"keys": [
"radiation resistance"
]
},
{
"term_html": "near field",
"html": "The region \\(kr\\ll1\\), i.e. \\(r\\ll\\lambda/2\\pi\\), where a small source's fields are close to their quasi-static forms and fall as \\(1/r^3\\) (electric) and \\(1/r^2\\) (magnetic, for a current element). Unit 15's pad works here.",
"section": "The fields of a current element: near and far",
"slide": "Where near becomes far: r = λ/2π",
"keys": [
"near field"
]
},
{
"term_html": "far field",
"html": "The region \\(kr\\gg1\\), where the fields are transverse, fall as \\(1/r\\), satisfy \\(E = \\eta_0H\\), and carry energy to infinity.",
"section": "The fields of a current element: near and far",
"slide": "Where near becomes far: r = λ/2π",
"keys": [
"far field"
]
},
{
"term_html": "directivity",
"html": "\\(D(\\theta,\\varphi) = 4\\pi\\mathcal U/P_{\\mathrm{rad}}\\), with \\(\\mathcal U\\) the far-field power per unit solid angle; \"the directivity\" is its maximum. \\(\\oint D\\,\\mathrm d\\Omega = 4\\pi\\). A current element has \\(D = 1.5\\).",
"section": "The fields of a current element: near and far",
"slide": "Directivity: where the power goes",
"keys": [
"directivity"
]
},
{
"term_html": "isotropic radiator",
"html": "A reference that radiates equally in every direction, \\(D = 1\\); not a device.",
"section": "The fields of a current element: near and far",
"slide": "Directivity: where the power goes",
"keys": [
"isotropic radiator"
]
},
{
"term_html": "radiation efficiency",
"html": "\\(e_{\\mathrm{rad}} = P_{\\mathrm{rad}}/P_{\\mathrm{in}} = R_{\\mathrm{rad}}/(R_{\\mathrm{rad}} + R_{\\mathrm{loss}})\\): the fraction of the power accepted at the terminals that is radiated.",
"section": "The fields of a current element: near and far",
"slide": "Gain, efficiency, and decibels",
"keys": [
"radiation efficiency"
]
},
{
"term_html": "gain",
"html": "\\(G = e_{\\mathrm{rad}}D = 4\\pi\\mathcal U/P_{\\mathrm{in}}\\). For a lossless antenna \\(\\oint G\\,\\mathrm d\\Omega = 4\\pi\\).",
"section": "The fields of a current element: near and far",
"slide": "Gain, efficiency, and decibels",
"keys": [
"gain"
]
},
{
"term_html": "decibel",
"html": "A power ratio \\(x\\) expressed as \\(10\\log_{10}x\\) dB, so that products of ratios become sums.",
"section": "The fields of a current element: near and far",
"slide": "Gain, efficiency, and decibels",
"keys": [
"decibel"
]
},
{
"term_html": "dBi",
"html": "A gain in decibels relative to an isotropic radiator: \\(D = 1.5\\) is 1.76 dBi, 1.64 is 2.15 dBi.",
"section": "The fields of a current element: near and far",
"slide": "Gain, efficiency, and decibels",
"keys": [
"dbi"
]
},
{
"term_html": "dBm",
"html": "A power in decibels relative to 1 mW: 1 W is 30 dBm, 20 W is 43.0 dBm, \\(9.88\\times10^{-11}\\) W is \\(-70.1\\) dBm.",
"section": "The fields of a current element: near and far",
"slide": "Gain, efficiency, and decibels",
"keys": [
"dbm"
]
},
{
"term_html": "loss resistance",
"html": "The part \\(R_{\\mathrm{loss}}\\) of an antenna's input resistance that heats its conductors. For a wire of radius \\(a\\gg\\delta\\) with a uniform current, \\(\\rho l/2\\pi a\\delta\\); a third of that for a triangular current.",
"section": "A short antenna: mostly reactive, and when it is mostly lossy",
"slide": "The antenna at its terminals",
"keys": [
"loss resistance"
]
},
{
"term_html": "half-wave dipole",
"html": "A centre-fed wire half a wavelength long. With the standard assumed sinusoidal current, \\(R_{\\mathrm{in}}\\approx73\\ \\Omega\\) and \\(D = 1.64\\) (Balanis §4.6, cited; 73.08 Ω and 1.641 by numerical integration). 6.25 cm at 2.4 GHz.",
"section": "A short antenna: mostly reactive, and when it is mostly lossy",
"slide": "The half-wave dipole",
"keys": [
"half-wave dipole"
]
},
{
"term_html": "Lorentz reciprocity theorem",
"html": "In linear media with symmetric \\(\\varepsilon\\) and \\(\\mu\\), \\(\\int\\vec E_a\\cdot\\vec J_b\\,\\mathrm dV = \\int\\vec E_b\\cdot\\vec J_a\\,\\mathrm dV\\) for any two source distributions at one frequency; for two antennas, \\(z_{12} = z_{21}\\). Cited (Balanis §3.8; Pozar §1.9), proved here for two current elements.",
"section": "Reciprocity",
"slide": "The Lorentz reciprocity theorem, cited",
"keys": [
"lorentz reciprocity theorem"
]
},
{
"term_html": "effective length",
"html": "The length \\(l_e\\) with \\(|V_{\\mathrm{oc}}| = |\\vec E\\cdot\\hat l|\\,l_e\\) for an incident field \\(\\vec E\\): \\(l\\) for a current element, \\(l/2\\) for a short bare wire. Equal to \\(\\dot p/\\hat I\\).",
"section": "The receiving antenna: a Thévenin source, its aperture, and the lost half",
"slide": "The open-circuit voltage: effective length",
"keys": [
"effective length"
]
},
{
"term_html": "effective aperture",
"html": "\\(A_e = P_L/S\\): the power delivered to a matched load divided by the incident intensity, for matched polarisation. \\(3\\lambda^2/8\\pi\\) for any short dipole (18.6 cm² at 2.4 GHz); in general \\(G\\lambda^2/4\\pi\\).",
"section": "The receiving antenna: a Thévenin source, its aperture, and the lost half",
"slide": "Worked: the collecting area of a short dipole",
"keys": [
"effective aperture"
]
},
{
"term_html": "brightness",
"html": "Power per unit area, solid angle and bandwidth. Black-body radiation at temperature \\(T\\) has \\(2k_BT/\\lambda^2\\) in the Rayleigh–Jeans regime, half of it in each polarisation.",
"section": "The receiving antenna: a Thévenin source, its aperture, and the lost half",
"slide": "The same constant from thermodynamics: a sketch",
"keys": [
"brightness"
]
},
{
"term_html": "re-radiated power",
"html": "The power a receiving antenna's own current radiates back out. For a matched lossless current element it equals the power delivered to the load: the \"lost half\" in its Thévenin resistance.",
"section": "The receiving antenna: a Thévenin source, its aperture, and the lost half",
"slide": "Where the lost half goes",
"keys": [
"re-radiated power"
]
},
{
"term_html": "scattering cross-section",
"html": "The re-radiated power divided by the incident intensity. For a tuned, shorted, lossless current element, \\(4A_e = 3\\lambda^2/2\\pi = 0.477\\lambda^2\\).",
"section": "The receiving antenna: a Thévenin source, its aperture, and the lost half",
"slide": "Open, matched, shorted — and the limits",
"keys": [
"scattering cross-section"
]
},
{
"term_html": "Friis transmission equation",
"html": "\\(P_r/P_t = G_tG_r(\\lambda/4\\pi d)^2 = A_tA_r/(\\lambda d)^2\\), for free space, far field, matched loads and polarisation, gains including efficiency.",
"section": "Friis: how much arrives",
"slide": "The Friis transmission equation",
"keys": [
"friis transmission equation"
]
},
{
"term_html": "path gain",
"html": "\\((\\lambda/4\\pi d)^2\\), the fraction passed between two isotropic antennas: \\(-100.1\\) dB at 2.4 GHz and 1 km. It measures spreading, not absorption.",
"section": "Friis: how much arrives",
"slide": "The Friis transmission equation",
"keys": [
"path gain"
]
},
{
"term_html": "effective isotropic radiated power",
"html": "\\(P_tG_t\\): the power an isotropic antenna would need to give the same intensity in the main direction; 1002 W for the base station.",
"section": "Friis: how much arrives",
"slide": "Worked: 0.1 nW, and the phone's link",
"keys": [
"effective isotropic radiated power"
]
},
{
"term_html": "Fresnel region",
"html": "The region closer to an aperture than its Fraunhofer distance \\(2w^2/\\lambda\\) (but outside its near field), where its field is not yet the far-field pattern. A pair with \\(w_tw_r\\gtrsim\\lambda d\\) — a receiver as large as the beam's spot — lies in the larger aperture's Fresnel region, and Friis does not apply.",
"section": "Why beaming power is hard",
"slide": "When Friis fails",
"keys": [
"fresnel region"
]
},
{
"term_html": "Fraunhofer distance",
"html": "\\(d_F = 2w^2/\\lambda\\) for an aperture of width \\(w\\): beyond it the path difference across the aperture is below \\(\\lambda/16\\) and the receiver is in the far field. At \\(d_F\\), equal circular apertures get at most \\(\\pi^2/64 = 15\\%\\) by Friis.",
"section": "Why beaming power is hard",
"slide": "The far-field distance, and Friis's ceiling",
"keys": [
"fraunhofer distance"
]
},
{
"term_html": "rectenna",
"html": "A rectifying antenna: an array of receiving antennas, each feeding a rectifier, turning microwave power into direct current. The first was conceived at Raytheon in 1963 and built by R. George of Purdue (Brown 1980).",
"section": "Why beaming power is hard",
"slide": "The rectenna",
"keys": [
"rectenna"
]
}
];
