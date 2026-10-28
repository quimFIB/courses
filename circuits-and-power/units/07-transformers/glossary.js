// Generated from GLOSSARY.org by `cap glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "distribution transformer",
"html": "The transformer that takes a distribution network's medium voltage (here 20 kV) down to the low voltage houses use (here 400 V between lines). In this unit it is modelled as one single-phase transformer of the same rating and ratio; unit 11 gives it its three phases.",
"section": "The running example",
"slide": "A grey box at the end of the street",
"keys": [
"distribution transformer"
]
},
{
"term_html": "winding, windings",
"html": "A coil of insulated wire wound round a core; a transformer has (at least) two.",
"section": "Two coils on one core",
"slide": "Unit 02's pair, with its dots",
"keys": [
"winding, windings",
"winding",
"windings"
]
},
{
"term_html": "core",
"html": "The closed path of magnetic material (laminated steel) on which the windings sit, and through which their shared flux runs.",
"section": "Two coils on one core",
"slide": "Unit 02's pair, with its dots",
"keys": [
"core"
]
},
{
"term_html": "dot convention",
"html": "A dot on one terminal of each winding, placed so that currents entering both dotted terminals drive flux the same way round the core. With both reference currents into the dots, \\(M &gt; 0\\).",
"section": "Two coils on one core",
"slide": "Unit 02's pair, with its dots",
"keys": [
"dot convention"
]
},
{
"term_html": "primary",
"html": "The winding fed from the source. A role, not a winding: either winding can be the primary.",
"section": "Two coils on one core",
"slide": "Unit 02's pair, with its dots",
"keys": [
"primary"
]
},
{
"term_html": "secondary",
"html": "The winding that feeds the load.",
"section": "Two coils on one core",
"slide": "Unit 02's pair, with its dots",
"keys": [
"secondary"
]
},
{
"term_html": "coupling coefficient",
"html": "\\(k = M/\\sqrt{L_1L_2}\\), dimensionless, with \\(|k| \\le 1\\) by unit 02's bound \\(M^2 \\le L_1L_2\\). \\(k = 1\\) means every line of one winding's flux threads the other.",
"section": "Two coils on one core",
"slide": "The coupling coefficient",
"keys": [
"coupling coefficient"
]
},
{
"term_html": "relative permeability",
"html": "\\(\\mu_r\\): the factor by which a linear magnetic material multiplies the flux density that a given free current makes, \\(B = \\mu_r\\mu_0H\\). For a toroid of \\(N\\) turns, \\(L = \\mu_r\\mu_0N^2A/l\\). Cited from Griffiths ch. 6 and Fitzgerald ch. 1.",
"section": "Two coils on one core",
"slide": "Iron, in one slide",
"keys": [
"relative permeability"
]
},
{
"term_html": "saturation",
"html": "The end of a ferromagnet's linear range: beyond it \\(B\\) rises far more slowly with \\(H\\) than \\(\\mu_r\\mu_0H\\).",
"section": "Two coils on one core",
"slide": "Iron, in one slide",
"keys": [
"saturation"
]
},
{
"term_html": "turns ratio",
"html": "\\(n = N_1/N_2\\). For windings sharing all their flux, \\(L_1 = N_1^2\\mathcal P\\), \\(L_2 = N_2^2\\mathcal P\\), \\(M = N_1N_2\\mathcal P\\), so \\(\\sqrt{L_1/L_2} = n\\) and the voltages are in the ratio \\(n\\).",
"section": "Two coils on one core",
"slide": "Two windings on one core: the turns ratio",
"keys": [
"turns ratio"
]
},
{
"term_html": "magnetising current",
"html": "\\(i_m = i_1 + i_2/n\\): the part of the primary current that makes the flux, fixed by the voltage (\\(L_1\\,\\mathrm di_m/\\mathrm dt = v_1\\) at \\(k = 1\\)) and not by the load. It lags the voltage by a quarter cycle.",
"section": "The ideal transformer, as a limit",
"slide": "At k = 1 the voltage ratio is exact, and the currents are not",
"keys": [
"magnetising current"
]
},
{
"term_html": "ideal transformer",
"html": "The two-port \\(V_1 = nV_2\\), \\(I_1 = -I_2/n\\) (currents into the dots). Proved here as the limit of coupled inductors with \\(k = 1\\) and \\(L_1 \\to \\infty\\) at fixed \\(L_1/L_2 = n^2\\); the leakage must vanish first. It passes complex power unchanged and stores nothing.",
"section": "The ideal transformer, as a limit",
"slide": "The ideal transformer",
"keys": [
"ideal transformer"
]
},
{
"term_html": "reflected impedance",
"html": "An impedance \\(Z_L\\) on the secondary of an ideal transformer is seen at the primary as \\(n^2Z_L\\); its phase, and so the power factor, is unchanged.",
"section": "The ideal transformer, as a limit",
"slide": "Power passes, nothing is stored, and impedance scales by n²",
"keys": [
"reflected impedance"
]
},
{
"term_html": "referring",
"html": "Moving an element across an ideal transformer: multiplying an impedance by \\(n^2\\) to bring it to the primary side, dividing to bring it to the secondary.",
"section": "The ideal transformer, as a limit",
"slide": "Power passes, nothing is stored, and impedance scales by n²",
"keys": [
"referring"
]
},
{
"term_html": "T equivalent circuit",
"html": "An exact equivalent of the coupled pair for any \\(a &gt; 0\\): series \\(L_1 - aM\\), shunt \\(aM\\), series \\(a^2L_2 - aM\\), then an ideal transformer \\(a : 1\\). The natural choice is \\(a = N_1/N_2\\).",
"section": "The real transformer",
"slide": "The T equivalent circuit",
"keys": [
"t equivalent circuit"
]
},
{
"term_html": "leakage inductance, leakage inductances",
"html": "The series elements of the T circuit with \\(a = n\\): \\(L_1 - nM\\) on the primary and \\(n^2L_2 - nM\\) for the secondary referred to the primary, each \\(N_1^2\\) times the permeance of one winding's leakage path.",
"section": "The real transformer",
"slide": "The T equivalent circuit",
"keys": [
"leakage inductance, leakage inductances",
"leakage inductance",
"leakage inductances"
]
},
{
"term_html": "magnetising inductance",
"html": "The shunt element of the T circuit with \\(a = n\\), \\(nM = N_1^2\\mathcal P_m\\): the flux path through the core, threading both windings.",
"section": "The real transformer",
"slide": "The T equivalent circuit",
"keys": [
"magnetising inductance"
]
},
{
"term_html": "leakage flux",
"html": "Flux of one winding that closes through the air round that winding without threading the other. It is why \\(k &lt; 1\\).",
"section": "The real transformer",
"slide": "Leakage flux and magnetising flux",
"keys": [
"leakage flux"
]
},
{
"term_html": "copper loss",
"html": "The loss \\(I^2R\\) in the windings' resistance, growing as the square of the load. Named for the metal whatever the winding is made of.",
"section": "The real transformer",
"slide": "Copper loss and core loss",
"keys": [
"copper loss"
]
},
{
"term_html": "core loss",
"html": "The loss in the iron — hysteresis and eddy currents — modelled as a resistance \\(R_c\\) across the magnetising branch, so \\(\\propto |V|^2\\) and nearly independent of load.",
"section": "The real transformer",
"slide": "Copper loss and core loss",
"keys": [
"core loss"
]
},
{
"term_html": "B–H loop",
"html": "The closed curve a ferromagnet's flux density \\(B\\) traces against \\(H\\) over one cycle; traversed anticlockwise, so its area \\(\\oint H\\,\\mathrm dB\\) is positive.",
"section": "The real transformer",
"slide": "Hysteresis: the loss per cycle is the loop's area",
"keys": [
"b–h loop"
]
},
{
"term_html": "hysteresis",
"html": "The dependence of a ferromagnet's \\(B\\) on the history of \\(H\\), not only its present value. The energy it absorbs per cycle per unit volume is the area of the B–H loop, so the loss is that area times \\(f\\) times the volume.",
"section": "The real transformer",
"slide": "Hysteresis: the loss per cycle is the loop's area",
"keys": [
"hysteresis"
]
},
{
"term_html": "eddy current, eddy currents",
"html": "Current driven round a changing flux inside a conductor by Faraday's law. In a steel sheet of thickness \\(d\\) with uniform \\(B = \\hat B\\cos\\omega t\\), the classical loss is \\(\\sigma\\omega^2\\hat B^2d^2/24\\) per unit volume.",
"section": "The real transformer",
"slide": "Eddy currents, and why the core is laminated",
"keys": [
"eddy current, eddy currents",
"eddy current",
"eddy currents"
]
},
{
"term_html": "lamination, laminations",
"html": "The thin sheets, insulated from each other, of which a transformer core is built, so that eddy-current loss, \\(\\propto d^2\\), stays small.",
"section": "The real transformer",
"slide": "Eddy currents, and why the core is laminated",
"keys": [
"lamination, laminations",
"lamination",
"laminations"
]
},
{
"term_html": "open-circuit test",
"html": "Rated voltage on one winding, the other open; the meters read the shunt branch: \\(R_c = |V|^2/P\\), \\(X_m = |V|^2/Q\\).",
"section": "Measuring it",
"slide": "The open-circuit test",
"keys": [
"open-circuit test"
]
},
{
"term_html": "no-load loss",
"html": "\\(P_0\\): the power a transformer draws at rated voltage with no load — its core loss. 387 W for the street transformer.",
"section": "Measuring it",
"slide": "The open-circuit test",
"keys": [
"no-load loss"
]
},
{
"term_html": "short-circuit test",
"html": "One winding shorted, the other raised to rated current at reduced voltage; the meters read the series branch: \\(R = P/|I|^2\\), \\(|Z| = |V|/|I|\\).",
"section": "Measuring it",
"slide": "The short-circuit test",
"keys": [
"short-circuit test"
]
},
{
"term_html": "short-circuit impedance",
"html": "The voltage needed to drive rated current with the other winding shorted, as a fraction of rated voltage; equally, the drop across the series impedance at rated current. 4% for the street transformer, which then delivers \\(1/0.04 = 25\\) times rated current into a short.",
"section": "Measuring it",
"slide": "The short-circuit test",
"keys": [
"short-circuit impedance"
]
},
{
"term_html": "load loss",
"html": "\\(P_k\\): the loss at rated current, measured by the short-circuit test — the copper loss at full load. 3250 W for the street transformer.",
"section": "Measuring it",
"slide": "The short-circuit test",
"keys": [
"load loss"
]
},
{
"term_html": "load fraction",
"html": "\\(x\\): the load as a fraction of the rated apparent power. The copper loss is \\(x^2P_k\\); the efficiency peaks at \\(x^* = \\sqrt{P_0/P_k}\\), where copper loss equals core loss.",
"section": "Efficiency",
"slide": "Efficiency against load",
"keys": [
"load fraction"
]
},
{
"term_html": "surface field",
"html": "The electric field at a line conductor's surface. In the thin-wire picture, \\(E_s = \\hat V/(2r\\ln(D/r))\\) for peak voltage \\(\\hat V\\) between two conductors of radius \\(r\\) at spacing \\(D\\).",
"section": "What stops the voltage rising",
"slide": "The field at a line conductor's surface",
"keys": [
"surface field"
]
},
{
"term_html": "corona",
"html": "Breakdown of the air next to a conductor where the surface field is too high: a glow, and a continuous loss of power into the air. Peek's visual onset for smooth parallel wires, \\(g_v = 29.8(1 + 0.301/\\sqrt r)\\) kV/cm peak (\\(r\\) in cm), tends to about 3 MV/m for large radii; for a stranded cable he multiplies it by 0.72 to 0.82.",
"section": "What stops the voltage rising",
"slide": "Corona: when the surface field ionises the air",
"keys": [
"corona"
]
},
{
"term_html": "bundle",
"html": "Several subconductors held a fixed distance apart and connected together as one phase. Each carries a share of the charge, so each sees a smaller surface field.",
"section": "What stops the voltage rising",
"slide": "Bundles: four thin conductors acting as one thick one",
"keys": [
"bundle"
]
},
{
"term_html": "equivalent radius",
"html": "The radius of the single conductor a bundle acts as, seen from far away: the geometric mean of the distances from one subconductor to all of them, its own radius included; \\((NrR^{N-1})^{1/N}\\) for \\(N\\) subconductors of radius \\(r\\) on a circle of radius \\(R\\).",
"section": "What stops the voltage rising",
"slide": "Bundles: four thin conductors acting as one thick one",
"keys": [
"equivalent radius"
]
},
{
"term_html": "insulator, insulators",
"html": "The non-conducting supports from which a line's conductors hang; they lengthen as the voltage rises.",
"section": "What stops the voltage rising",
"slide": "Insulation, clearance, and what high voltage costs",
"keys": [
"insulator, insulators",
"insulator",
"insulators"
]
},
{
"term_html": "clearance, clearances",
"html": "The air gap a conductor must keep to towers, the ground and other conductors; it widens as the voltage rises. Set by standards for overhead lines; no figure is given in this unit.",
"section": "What stops the voltage rising",
"slide": "Insulation, clearance, and what high voltage costs",
"keys": [
"clearance, clearances",
"clearance",
"clearances"
]
}
];
