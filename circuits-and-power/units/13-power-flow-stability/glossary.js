// Generated from GLOSSARY.org by `cap glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "infinite bus",
"html": "A bus whose voltage and frequency nothing connected to it can change: the model of a system so much larger than what it is joined to that its own response can be neglected. Here, Continental Europe as seen from Iberia.",
"section": "The running example",
"slide": "Two areas, one tie, and three questions",
"keys": [
"infinite bus"
]
},
{
"term_html": "per-unit system, per unit, pu",
"html": "Every quantity divided by a base of the same kind: one base power \\(S_b\\) for the whole system and a base voltage \\(V_b\\) per voltage level, with \\(I_b = S_b/\\sqrt3V_b\\) and \\(Z_b = V_b^2/S_b\\). With bases in an ideal transformer's ratio, the transformer is a plain wire in per unit.",
"section": "Two buses and a reactance",
"slide": "Per unit, and a transformer that disappears",
"keys": [
"per-unit system, per unit, pu",
"per-unit system",
"per unit",
"pu"
]
},
{
"term_html": "base impedance",
"html": "\\(Z_b = V_b^2/S_b\\), the impedance against which a per-unit impedance is measured. A nameplate's percentage impedance, such as the street transformer's 4%, is a per-unit impedance on the device's own rating.",
"section": "Two buses and a reactance",
"slide": "Per unit, and a transformer that disappears",
"keys": [
"base impedance"
]
},
{
"term_html": "decoupling",
"html": "To first order about the unloaded state, real power depends only on the phase difference between buses, \\(P \\approx V_1V_2\\delta/X\\), and reactive power only on the magnitude difference, \\(Q_1 \\approx V_1(V_1 - V_2)/X\\).",
"section": "Two buses and a reactance",
"slide": "Real power follows angle; reactive power follows voltage",
"keys": [
"decoupling"
]
},
{
"term_html": "power-angle curve",
"html": "\\(P(\\delta) = P_{\\max}\\sin\\delta\\), the real power two buses exchange through a lossless reactance as a function of the angle between them.",
"section": "Two buses and a reactance",
"slide": "The static limit, and the two crossings",
"keys": [
"power-angle curve"
]
},
{
"term_html": "static stability limit",
"html": "The top of the power-angle curve, \\(P_{\\max} = V_1V_2/X\\) at \\(\\delta = 90°\\): no operating point exists for a larger transfer.",
"section": "Two buses and a reactance",
"slide": "The static limit, and the two crossings",
"keys": [
"static stability limit"
]
},
{
"term_html": "nose curve",
"html": "The receiving voltage against delivered power for a load fed through a reactance from a stiff source. It has two branches meeting at a maximum power, \\(\\mathcal E^2/2X\\) for a unity power factor load; the upper branch is the operating one.",
"section": "Two buses and a reactance",
"slide": "The nose: where voltage collapses",
"keys": [
"nose curve"
]
},
{
"term_html": "voltage stability",
"html": "The study of whether loads' voltages can be held as demand rises, whose limiting case is the nose of the nose curve (voltage collapse). Named only; Kundur's chapter \"Voltage Stability\".",
"section": "Two buses and a reactance",
"slide": "The nose: where voltage collapses",
"keys": [
"voltage stability"
]
},
{
"term_html": "bus",
"html": "A node of a power network at which generators, loads and branches connect; its voltage is measured to the neutral, in the per-phase equivalent.",
"section": "Many buses",
"slide": "The bus admittance matrix is unit 04's Laplacian",
"keys": [
"bus"
]
},
{
"term_html": "bus admittance matrix",
"html": "\\(Y_{\\text{bus}} = A\\operatorname{diag}(y_e)A^{\\mathsf T}\\), with \\(I = Y_{\\text{bus}}\\bar V\\) for injected currents and bus voltages: unit 04's weighted Laplacian with complex weights. For lossless branches without shunts \\(Y_{\\text{bus}} = -iB\\), \\(B\\) a real Laplacian with weights \\(1/X_e\\).",
"section": "Many buses",
"slide": "The bus admittance matrix is unit 04's Laplacian",
"keys": [
"bus admittance matrix"
]
},
{
"term_html": "Kron reduction",
"html": "Unit 04's elimination of nodes with no injection by a Schur complement, applied to a grid's buses: the result is an equivalent network on the kept buses.",
"section": "Many buses",
"slide": "Kron reduction: a grid seen from a few buses",
"keys": [
"kron reduction"
]
},
{
"term_html": "power-flow equations",
"html": "\\(S_k = \\bar V_k\\sum_jY_{kj}^*\\bar V_j^*\\) at every bus \\(k\\): the conservation of complex power, bus by bus. For lossless lines each bus's \\(P_k\\) and \\(Q_k\\) is a sum of two-bus transfers, one per line.",
"section": "Many buses",
"slide": "The power-flow equations: complex power, bus by bus",
"keys": [
"power-flow equations"
]
},
{
"term_html": "slack bus",
"html": "The one bus whose voltage magnitude and angle are given (\\(\\delta = 0\\), the reference) and whose \\(P\\) and \\(Q\\) are found: it takes up the balance.",
"section": "Many buses",
"slide": "Slack, PV and PQ: counting knowns against unknowns",
"keys": [
"slack bus"
]
},
{
"term_html": "PV bus",
"html": "A generator bus, at which real power \\(P\\) and voltage magnitude \\(V\\) are given; its angle and reactive power are found.",
"section": "Many buses",
"slide": "Slack, PV and PQ: counting knowns against unknowns",
"keys": [
"pv bus"
]
},
{
"term_html": "PQ bus",
"html": "A load bus, at which \\(P\\) and \\(Q\\) are given; its voltage magnitude and angle are found.",
"section": "Many buses",
"slide": "Slack, PV and PQ: counting knowns against unknowns",
"keys": [
"pq bus"
]
},
{
"term_html": "DC power flow",
"html": "The linearisation \\(P = B\\delta\\) of the power-flow equations for flat voltages, small angles and lossless lines: unit 04's Kirchhoff problem with angles for potentials. Nothing to do with direct current.",
"section": "Many buses",
"slide": "The DC power flow is unit 04's Kirchhoff problem",
"keys": [
"dc power flow"
]
},
{
"term_html": "mismatch",
"html": "The computed minus the specified bus powers, \\(F(x)\\), as a function of the unknown angles and voltage magnitudes; the power flow is solved when it is zero.",
"section": "Newton–Raphson",
"slide": "At a flat start, the Jacobian is $B$",
"keys": [
"mismatch"
]
},
{
"term_html": "flat start",
"html": "The initial guess every \\(V = 1\\) pu and every \\(\\delta = 0\\). For lossless lines, the first Newton step from it gives the DC power flow's angles.",
"section": "Newton–Raphson",
"slide": "At a flat start, the Jacobian is $B$",
"keys": [
"flat start"
]
},
{
"term_html": "Jacobian",
"html": "The matrix of partial derivatives of the mismatch with respect to the unknowns, which Newton's method inverts at each step. At a flat start it is block-diagonal, with blocks taken from \\(B\\).",
"section": "Newton–Raphson",
"slide": "At a flat start, the Jacobian is $B$",
"keys": [
"jacobian"
]
},
{
"term_html": "synchronous machine",
"html": "A machine whose rotor carries a steady field and turns locked to the grid's frequency, inducing an EMF \\(\\mathcal E\\) in the stator; modelled as \\(\\mathcal E\\) behind a reactance \\(X\\), delivering \\(\\mathcal EV\\sin\\delta/X\\) to a bus of voltage \\(V\\) (stated, cited from Fitzgerald, Kingsley and Umans, §5.4; derived in branch 12).",
"section": "The swing equation",
"slide": "The synchronous machine, stated",
"keys": [
"synchronous machine"
]
},
{
"term_html": "rotor angle",
"html": "\\(\\delta\\), the electrical angle by which a machine's EMF, and so its rotor, leads a reference turning at synchronous speed.",
"section": "The swing equation",
"slide": "The synchronous machine, stated",
"keys": [
"rotor angle"
]
},
{
"term_html": "inertia constant",
"html": "\\(H = \\tfrac12J\\omega_{sm}^2/S\\), the rotor's kinetic energy at synchronous speed divided by the machine's rating, in seconds.",
"section": "The swing equation",
"slide": "Newton for the rotor: the swing equation",
"keys": [
"inertia constant"
]
},
{
"term_html": "swing equation",
"html": "\\((2H/\\omega_s)\\ddot\\delta = P_m - P_e\\) in per unit: Newton's law for the rotor, written in power and measured against the synchronously rotating reference. With \\(P_e = P_{\\max}\\sin\\delta\\) it is MR 02's pendulum with a constant torque.",
"section": "The swing equation",
"slide": "Newton for the rotor: the swing equation",
"keys": [
"swing equation"
]
},
{
"term_html": "synchronism",
"html": "Running locked to the grid's frequency, the rotor angle staying bounded. A machine that loses it slips poles: its angle grows by \\(2\\pi\\) again and again.",
"section": "The swing equation",
"slide": "The tilted washboard, and the first integral",
"keys": [
"synchronism"
]
},
{
"term_html": "separatrix",
"html": "The orbit through the saddle of the swing equation's phase portrait, bounding the closed orbits round the stable equilibrium; a state inside it returns, a state outside slips poles.",
"section": "The swing equation",
"slide": "The phase portrait: closed swings, and the separatrix",
"keys": [
"separatrix"
]
},
{
"term_html": "inter-area mode",
"html": "An oscillation of one group of machines against another across the network between them. In the two-area model its frequency is \\(\\sqrt{\\omega_sP_{\\max}\\cos\\delta_0/2H}/2\\pi = 0.263\\) Hz.",
"section": "The swing equation",
"slide": "Small swings: Iberia against Europe, every 3.8 s",
"keys": [
"inter-area mode"
]
},
{
"term_html": "equal-area criterion",
"html": "A machine faulted at \\(\\delta_0\\) and cleared at \\(\\delta_c\\) stays in step iff the accelerating area \\(\\int_{\\delta_0}^{\\delta_c}P_m\\,\\mathrm d\\delta\\) does not exceed the decelerating area \\(\\int_{\\delta_c}^{\\pi-\\delta_0}(P_{\\max}\\sin\\delta - P_m)\\,\\mathrm d\\delta\\): the swing equation's first integral, read off the power-angle curve.",
"section": "Equal areas",
"slide": "A fault, and the equal-area criterion",
"keys": [
"equal-area criterion"
]
},
{
"term_html": "critical clearing angle",
"html": "The clearing angle at which the two areas are equal: \\(\\cos\\delta_c = (P_m/P_{\\max})(\\pi - 2\\delta_0) + \\cos(\\pi - \\delta_0)\\), 79.56° for \\(\\delta_0 = 30°\\) and a fault that cuts the transfer to zero.",
"section": "Equal areas",
"slide": "A fault, and the equal-area criterion",
"keys": [
"critical clearing angle"
]
},
{
"term_html": "critical clearing time",
"html": "The time the faulted rotor takes to reach the critical clearing angle; with zero transfer during the fault, \\(t_c = \\sqrt{4H(\\delta_c - \\delta_0)/\\omega_sP_m}\\).",
"section": "Equal areas",
"slide": "Worked: 79.56°, and how long a fault may last",
"keys": [
"critical clearing time"
]
},
{
"term_html": "load damping",
"html": "The fall of load with frequency, \\(D\\,\\Delta f\\), mostly from motors, which helps to stop a frequency dip.",
"section": "Frequency",
"slide": "Every machine in step: one swing equation for a grid",
"keys": [
"load damping"
]
},
{
"term_html": "reference incident",
"html": "The largest sudden power imbalance a synchronous area must be able to contain: 3000 MW in either direction for Continental Europe (Regulation (EU) 2017/1485, Art. 153).",
"section": "Frequency",
"slide": "The rule Europe is run to: the reference incident",
"keys": [
"reference incident"
]
},
{
"term_html": "frequency containment reserve, FCR",
"html": "Power held back and released automatically as frequency deviates; for Continental Europe fully activated within 30 s and at ±200 mHz (Regulation (EU) 2017/1485, Annex V).",
"section": "Frequency",
"slide": "The rule Europe is run to: the reference incident",
"keys": [
"frequency containment reserve, fcr",
"frequency containment reserve",
"fcr"
]
},
{
"term_html": "rate of change of frequency",
"html": "\\(\\mathrm d\\Delta f/\\mathrm dt\\); just after losing \\(\\Delta P\\) it is \\(-f_0\\Delta P/2HS\\), 0.050 Hz/s for 3000 MW in 300 GW with \\(H = 5\\) s.",
"section": "Frequency",
"slide": "Worked: losing 3000 MW in 300 GW",
"keys": [
"rate of change of frequency"
]
},
{
"term_html": "droop",
"html": "A reserve's response proportional to the frequency deficit, up to its full amount. Sized for 3000 MW at 200 mHz, it settles the frequency 0.2 Hz low.",
"section": "Frequency",
"slide": "Where it settles: droop, and the 200 mHz",
"keys": [
"droop"
]
},
{
"term_html": "frequency restoration reserve",
"html": "The slower reserve that brings the frequency back to nominal after droop has stopped its fall, within 15 minutes for Continental Europe (Regulation (EU) 2017/1485, Annex III).",
"section": "Frequency",
"slide": "Where it settles: droop, and the 200 mHz",
"keys": [
"frequency restoration reserve"
]
}
];
