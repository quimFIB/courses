// Generated from GLOSSARY.org by `cap glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "inductive power transfer",
"html": "Power passed from one coil to another through their mutual inductance alone, with no conductor between them: a source on one port of unit 07's coupled pair, a load on the other.",
"section": "A loosely coupled two-port",
"slide": "A charging pad, from nothing",
"keys": [
"inductive power transfer"
]
},
{
"term_html": "Qi",
"html": "The Wireless Power Consortium's standard for charging phones by inductive power transfer. Its <em>Introduction</em> (v1.3, 2021) gives an operating frequency typically 87–205 kHz, power profiles up to 5 W and up to 15 W, a 50 mm transmitter coil and a 40 mm receiver coil, and a coupling coefficient typically 0.5 or below.",
"section": "A loosely coupled two-port",
"slide": "A charging pad, from nothing",
"keys": [
"qi"
]
},
{
"term_html": "ferrite",
"html": "A magnetic material that the WPC names as the external shield of Qi coils, with which coupling is highest. Named in this unit, not modelled: the model coils sit in air.",
"section": "A loosely coupled two-port",
"slide": "A charging pad, from nothing",
"keys": [
"ferrite"
]
},
{
"term_html": "tuned",
"html": "A coil with a capacitor in series, \\(C = 1/\\omega^2L\\), so that the loop's reactance is zero at the drive frequency. Tuning the secondary raises the efficiency (it removes \\(Q_2^2\\) from the untuned formula); tuning the primary removes the reactive power the driver carries and leaves the efficiency unchanged.",
"section": "Untuned: a coil that mostly sloshes",
"slide": "What tuning buys",
"keys": [
"tuned"
]
},
{
"term_html": "normal mode, mode",
"html": "A motion of the two tuned loops, lossless and free, in which both charges oscillate at one frequency with a fixed ratio: MR 07's generalised eigenvalue problem \\(Kv = \\omega^2\\mathcal Lv\\) with the inductance matrix as mass matrix. For identical coils, currents together at \\(\\omega_0/\\sqrt{1 + k}\\) and opposed at \\(\\omega_0/\\sqrt{1 - k}\\).",
"section": "Tuned: MR 07's two coupled oscillators",
"slide": "The inductance matrix is the mass matrix",
"keys": [
"normal mode, mode",
"normal mode",
"mode"
]
},
{
"term_html": "figure of merit",
"html": "\\(U = k\\sqrt{Q_1Q_2} = \\omega M/\\sqrt{R_1R_2}\\), dimensionless: the rate at which energy crosses between the coils against the rate at which each loses it. The tuned pair's best efficiency depends on it alone.",
"section": "Tuned: MR 07's two coupled oscillators",
"slide": "The figure of merit U",
"keys": [
"figure of merit"
]
},
{
"term_html": "reflected resistance",
"html": "At resonance, the resistance the driver sees added to coil 1's own: \\(\\omega^2M^2/(R_2 + R_L) = U^2R_1R_2/(R_2 + R_L)\\). Unit 07's reflected impedance, made real by tuning.",
"section": "Tuned: MR 07's two coupled oscillators",
"slide": "At resonance: a real input, currents in quadrature",
"keys": [
"reflected resistance"
]
},
{
"term_html": "quadrature",
"html": "Two sinusoids a quarter-cycle (90°) apart. At resonance the secondary current lags the primary by exactly 90°, the phase at which the power across, \\(\\omega M|I_1||I_2|\\sin\\theta\\), is largest for given current magnitudes.",
"section": "Tuned: MR 07's two coupled oscillators",
"slide": "At resonance: a real input, currents in quadrature",
"keys": [
"quadrature"
]
},
{
"term_html": "mid-plane",
"html": "The plane halfway between the two coils. Closed by a hemisphere at infinity on the phone's side, it encloses all of circuit 2, so everything the phone absorbs must cross it as a Poynting flux.",
"section": "Where the energy crosses",
"slide": "A closed surface between the coils",
"keys": [
"mid-plane"
]
},
{
"term_html": "self term",
"html": "In the mean Poynting vector of the two coils' superposed fields, a product of one coil's \\(\\vec E\\) with its own \\(\\vec H^*\\). On the mid-plane each vanishes point by point: one coil's own field only stores energy and returns it.",
"section": "Where the energy crosses",
"slide": "A closed surface between the coils",
"keys": [
"self term"
]
},
{
"term_html": "cross term",
"html": "The products \\(\\vec E_1\\times\\vec H_2^* + \\vec E_2\\times\\vec H_1^*\\) of one coil's field with the other's. Integrated over the mid-plane its real part is \\(\\omega M\\operatorname{Im}(I_1I_2^*)\\): it carries all the energy that crosses.",
"section": "Where the energy crosses",
"slide": "A closed surface between the coils",
"keys": [
"cross term"
]
},
{
"term_html": "maximum-efficiency load",
"html": "For the tuned pair, \\(R_L = R_2\\sqrt{1 + U^2}\\), where \\(\\eta_{\\max} = U^2/(1 + \\sqrt{1 + U^2})^2\\). Not the conjugate match, \\(R_2(1 + U^2)\\), which gives the most power from a given drive at \\(\\eta = U^2/2(2 + U^2) &lt; \\tfrac12\\).",
"section": "The efficiency, and the one number",
"slide": "The maximum-efficiency theorem",
"keys": [
"maximum-efficiency load"
]
},
{
"term_html": "coupled-mode theory",
"html": "A description of coupled resonators by their amplitudes, a coupling rate \\(\\kappa\\) and decay rates \\(\\Gamma\\), used by Kurs et al. (2007). Its dictionary to this unit: \\(\\kappa = \\omega k/2\\), \\(\\Gamma = \\omega/2Q\\), and \\(\\kappa/\\sqrt{\\Gamma_S\\Gamma_D} = U\\).",
"section": "The efficiency, and the one number",
"slide": "Kurs's optimum is the same statement",
"keys": [
"coupled-mode theory"
]
},
{
"term_html": "strong coupling",
"html": "Kurs et al.'s name for \\(\\kappa^2/(\\Gamma_S\\Gamma_D) &gt; 1\\), that is \\(U &gt; 1\\), where \\(\\eta_{\\max}\\) exceeds 17%.",
"section": "The efficiency, and the one number",
"slide": "Kurs's optimum is the same statement",
"keys": [
"strong coupling"
]
},
{
"term_html": "dipole–dipole coupling",
"html": "The coupling of two loops far apart compared with their size, each seen by the other as a magnetic dipole: \\(M \\approx \\mu_0\\pi N^2a^4/2d^3\\), so \\(k \\propto d^{-3}\\).",
"section": "How k falls with distance",
"slide": "Far apart: the leading term vanishes, and M falls as 1/d³",
"keys": [
"dipole–dipole coupling"
]
},
{
"term_html": "scale invariance",
"html": "Scaling every length of the coils and the gap by the same factor scales \\(M\\) and \\(L\\) alike and leaves \\(k\\) unchanged: \\(k\\) depends only on shape. \\(Q\\) does not scale this way.",
"section": "How k falls with distance",
"slide": "Scale, and why metres need very high Q",
"keys": [
"scale invariance"
]
},
{
"term_html": "Z-class, Z-classes",
"html": "SAE J2954's grouping of electric-vehicle wireless charging by the gap between the ground assembly and the vehicle assembly, which is set by the car's ground clearance. No gap values are quoted in this unit.",
"section": "How k falls with distance",
"slide": "Scale, and why metres need very high Q",
"keys": [
"z-class, z-classes",
"z-class",
"z-classes"
]
},
{
"term_html": "self-resonant coil",
"html": "A coil that resonates with its own distributed capacitance, with no separate capacitor, as Kurs et al.'s copper helices did at 9.90 MHz.",
"section": "How k falls with distance",
"slide": "Kurs's coils by U, and the near field",
"keys": [
"self-resonant coil"
]
},
{
"term_html": "near field",
"html": "The region \\(d \\ll \\lambda/2\\pi\\) round a source, where the quasi-static field dominates and coupling falls as \\(d^{-3}\\): 341 m at 140 kHz, 4.82 m at 9.9 MHz. Beyond it the field radiates (branch 16).",
"section": "How k falls with distance",
"slide": "Kurs's coils by U, and the near field",
"keys": [
"near field"
]
},
{
"term_html": "skin depth",
"html": "\\(\\delta = \\sqrt{2/\\omega\\mu\\sigma}\\), the depth to which alternating current penetrates a good conductor: 0.174 mm in copper and 0.219 mm in aluminium at 140 kHz. Stated in unit 07, proved in branch 10.",
"section": "Hardware: Litz wire, and a scrap of foil",
"slide": "Litz wire: keeping R, and so U",
"keys": [
"skin depth"
]
},
{
"term_html": "Litz wire",
"html": "Wire made of many thin insulated strands, each thinner than the skin depth, twisted so that each takes every position in the bundle and the strands share the current equally. Keeps a coil's AC resistance near its DC value, and so keeps \\(Q\\) and \\(U\\).",
"section": "Hardware: Litz wire, and a scrap of foil",
"slide": "Litz wire: keeping R, and so U",
"keys": [
"litz wire"
]
},
{
"term_html": "proximity effect",
"html": "Extra AC loss in a conductor caused by the fields of neighbouring conductors — other strands, other turns. Named in this unit, not computed.",
"section": "Hardware: Litz wire, and a scrap of foil",
"slide": "Litz wire: keeping R, and so U",
"keys": [
"proximity effect"
]
},
{
"term_html": "foreign object",
"html": "A piece of metal on a charging pad that is not part of the receiver — a coin, a key, a scrap of foil — in which the pad's field drives eddy currents. A thin disc loses \\(\\sigma\\omega^2\\hat B^2\\pi tR^4/16\\) while that formula holds.",
"section": "Hardware: Litz wire, and a scrap of foil",
"slide": "A scrap of foil: eddy currents in circles",
"keys": [
"foreign object"
]
},
{
"term_html": "reaction field",
"html": "The field the eddy currents in a conductor make, opposing the applied one. At a thin disc's centre it is \\(\\hat B\\,tR/2\\delta^2\\), so the thin-disc loss formula needs \\(tR \\ll 2\\delta^2\\).",
"section": "Hardware: Litz wire, and a scrap of foil",
"slide": "When the formula holds: tR ≪ 2δ²",
"keys": [
"reaction field"
]
},
{
"term_html": "foreign object detection, FOD",
"html": "A transmitter's means of noticing a foreign object before it heats. The WPC requires that foreign objects be detected, notes that a transmitter cannot by itself tell foreign objects from friendly metals, and does not define a single method. A scrap changes the pad coil's \\(Q\\), its resonance, and the power unaccounted for.",
"section": "Hardware: Litz wire, and a scrap of foil",
"slide": "How the pad can notice",
"keys": [
"foreign object detection, fod",
"foreign object detection",
"fod"
]
},
{
"term_html": "friendly metal",
"html": "The WPC's term, set against foreign objects: \"metallic parts that are used in the construction of Power Transmitter and Power Receiver Products\", usually shielded from the field. A transmitter cannot by itself tell a foreign object from a friendly metal that is insufficiently shielded.",
"section": "Hardware: Litz wire, and a scrap of foil",
"slide": "How the pad can notice",
"keys": [
"friendly metal"
]
}
];
