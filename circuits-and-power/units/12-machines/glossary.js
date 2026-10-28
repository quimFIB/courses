// Generated from GLOSSARY.org by `cap glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "stator",
"html": "The fixed part of an electric machine: a ring of laminated iron with the windings in slots round its inner surface. In the pump motor it carries three windings fed from the three phases.",
"section": "The running example",
"slide": "A pump, and the field that turns it",
"keys": [
"stator"
]
},
{
"term_html": "rotor",
"html": "The turning part of a machine, inside the stator and separated from it by a narrow air gap; it drives the load through a shaft.",
"section": "The running example",
"slide": "A pump, and the field that turns it",
"keys": [
"rotor"
]
},
{
"term_html": "lossless coupling",
"html": "A model of the part of a machine that only stores magnetic energy and passes energy to a moving part: a coil whose flux linkage \\(\\Lambda\\) depends on its current \\(i\\) and on a position \\(\\theta\\). Its energy balance is \\(i\\,\\mathrm d\\Lambda = \\mathrm dW + T\\,\\mathrm d\\theta\\); resistance, iron loss and friction are drawn outside it.",
"section": "Torque from co-energy",
"slide": "A lossless coupling: one electrical port, one shaft",
"keys": [
"lossless coupling"
]
},
{
"term_html": "co-energy",
"html": "\\(W'(i, \\theta) = i\\Lambda - W = \\int_0^i\\Lambda\\,\\mathrm di'\\), the Legendre transform of the stored energy in its first variable. The torque is \\(T = \\partial W'/\\partial\\theta\\) at constant current, equal to \\(-\\partial W/\\partial\\theta\\) at constant flux linkage. For a linear coupling \\(W' = \\tfrac12L(\\theta)i^2\\), so \\(T = \\tfrac12i^2\\,\\mathrm dL/\\mathrm d\\theta\\).",
"section": "Torque from co-energy",
"slide": "Co-energy, and torque at constant current",
"keys": [
"co-energy"
]
},
{
"term_html": "reluctance torque",
"html": "The torque on an unmagnetised iron rotor in a coil, from the dependence of the coil's inductance on the rotor's angle: for \\(L = L_0 + L_2\\cos2\\theta\\), \\(T = -i^2L_2\\sin2\\theta\\), always towards greater inductance.",
"section": "Torque from co-energy",
"slide": "An iron rotor in a coil: reluctance torque",
"keys": [
"reluctance torque"
]
},
{
"term_html": "aligned position",
"html": "The angle at which a reluctance rotor lies along the coil's axis and the inductance is greatest; the stable equilibrium at constant current.",
"section": "Torque from co-energy",
"slide": "An iron rotor in a coil: reluctance torque",
"keys": [
"aligned position"
]
},
{
"term_html": "synchronous speed",
"html": "The one speed at which a machine's rotor turns in step with its supply: \\(n_s = 120f/p\\) rpm for \\(p\\) poles. A reluctance motor has a non-zero mean torque only there, so it cannot start by itself.",
"section": "Torque from co-energy",
"slide": "A reluctance motor runs only at synchronous speed",
"keys": [
"synchronous speed"
]
},
{
"term_html": "DC machine",
"html": "A machine with a fixed field and a turning armature whose connections are switched by a commutator, so that it runs from and makes direct current.",
"section": "Back-EMF, and the one constant",
"slide": "The commutator: a switch that keeps the torque one-signed",
"keys": [
"dc machine"
]
},
{
"term_html": "armature",
"html": "The winding in which a machine's working current flows and its EMF is induced; in a DC machine, the turning coils on the rotor.",
"section": "Back-EMF, and the one constant",
"slide": "The commutator: a switch that keeps the torque one-signed",
"keys": [
"armature"
]
},
{
"term_html": "commutator",
"html": "A ring cut into segments on a DC machine's shaft, each joined to a coil end, that reverses each coil's connection to the terminals every half-turn, so that \\(\\partial\\Lambda/\\partial\\theta\\) keeps one sign.",
"section": "Back-EMF, and the one constant",
"slide": "The commutator: a switch that keeps the torque one-signed",
"keys": [
"commutator"
]
},
{
"term_html": "brushes",
"html": "The fixed sliding contacts that connect the commutator's segments to the terminals.",
"section": "Back-EMF, and the one constant",
"slide": "The commutator: a switch that keeps the torque one-signed",
"keys": [
"brushes"
]
},
{
"term_html": "back-EMF",
"html": "The voltage a turning machine generates, opposing the current that drives it as a motor: \\(e = k\\omega\\) for a DC machine. It is why a motor's current falls as it speeds up.",
"section": "Back-EMF, and the one constant",
"slide": "e = kω and T = ki: one constant",
"keys": [
"back-emf"
]
},
{
"term_html": "machine constant",
"html": "\\(k = \\partial\\Lambda/\\partial\\theta\\) for an ideal DC machine, both the EMF per unit speed and the torque per unit current, in V·s/rad = N·m/A. That the two are one constant is energy conservation.",
"section": "Back-EMF, and the one constant",
"slide": "e = kω and T = ki: one constant",
"keys": [
"machine constant"
]
},
{
"term_html": "poles",
"html": "The north and south regions of a machine's air-gap field; they come in pairs, and a \\(p\\)-pole winding repeats its pattern \\(p/2\\) times round the bore, so its field turns at \\(\\omega/(p/2)\\).",
"section": "The synchronous machine",
"slide": "Unit 11's field, with more poles",
"keys": [
"poles"
]
},
{
"term_html": "synchronous machine",
"html": "A machine whose rotor carries a steady field (a field winding or magnets) and turns at exactly the speed of the stator's rotating field; as a generator, the machine this unit locks to the grid's frequency.",
"section": "The synchronous machine",
"slide": "A rotor that locks to the field",
"keys": [
"synchronous machine"
]
},
{
"term_html": "field winding",
"html": "The rotor winding of a synchronous machine, fed with direct current \\(i_f\\), that makes the rotor's field; its current sets the EMF \\(E\\).",
"section": "The synchronous machine",
"slide": "A rotor that locks to the field",
"keys": [
"field winding"
]
},
{
"term_html": "synchronous reactance",
"html": "\\(X_s = \\omega(L_{aa} - M_{ab})\\): the stator's own rotating field, seen by one phase as a reactance in series with the rotor's EMF.",
"section": "The synchronous machine",
"slide": "An EMF behind a reactance",
"keys": [
"synchronous reactance"
]
},
{
"term_html": "generator convention",
"html": "Marking a port so that its reference current leaves the + terminal, so that \\(\\mathrm{Re}(VI^*) &gt; 0\\) means power delivered. The opposite of the passive convention; used in this unit for the synchronous generator only.",
"section": "The synchronous machine",
"slide": "An EMF behind a reactance",
"keys": [
"generator convention"
]
},
{
"term_html": "load angle",
"html": "\\(\\delta\\), the angle of the EMF \\(E\\) ahead of the terminal voltage \\(V\\); physically, how far the rotor's field is ahead of where it runs at no load. Positive for a generator.",
"section": "The synchronous machine",
"slide": "The phasor diagram, and the angle δ",
"keys": [
"load angle"
]
},
{
"term_html": "power–angle characteristic",
"html": "\\(P = 3EV\\sin\\delta/X_s\\) for a round-rotor synchronous machine, with \\(Q = 3(EV\\cos\\delta - V^2)/X_s\\); greatest at \\(\\delta = 90°\\). Unit 13's \\(P(\\delta)\\).",
"section": "The synchronous machine",
"slide": "The power–angle curve",
"keys": [
"power–angle characteristic"
]
},
{
"term_html": "over-excited",
"html": "A synchronous machine whose field current is high enough that it supplies reactive power (\\(Q &gt; 0\\)), like a capacitor bank.",
"section": "The synchronous machine",
"slide": "The field current sets the reactive power",
"keys": [
"over-excited"
]
},
{
"term_html": "under-excited",
"html": "A synchronous machine whose field current is low enough that it absorbs reactive power (\\(Q &lt; 0\\)).",
"section": "The synchronous machine",
"slide": "The field current sets the reactive power",
"keys": [
"under-excited"
]
},
{
"term_html": "turbo-generator",
"html": "A synchronous generator driven by a steam turbine, a fast machine, so it needs few poles; with two poles on 50 Hz it turns at 3000 rpm.",
"section": "The synchronous machine",
"slide": "A fast generator and a slow one, on one clock",
"keys": [
"turbo-generator"
]
},
{
"term_html": "hydro generator",
"html": "A synchronous generator driven by a water turbine, a slow machine, so it needs many poles to make the same 50 Hz.",
"section": "The synchronous machine",
"slide": "A fast generator and a slow one, on one clock",
"keys": [
"hydro generator"
]
},
{
"term_html": "induction motor",
"html": "A machine whose rotor carries no supplied current: the stator's rotating field induces currents in it, which requires the rotor to turn slower than the field.",
"section": "The induction motor",
"slide": "A cage in the rotating field must slip",
"keys": [
"induction motor"
]
},
{
"term_html": "squirrel cage",
"html": "An induction motor's rotor winding: bars in slots, shorted together by a ring at each end.",
"section": "The induction motor",
"slide": "A cage in the rotating field must slip",
"keys": [
"squirrel cage"
]
},
{
"term_html": "slip",
"html": "\\(s = (n_s - n)/n_s\\), the fraction by which the rotor falls behind the field; the rotor's currents alternate at \\(sf\\). About 3% for the pump motor at full load.",
"section": "The induction motor",
"slide": "A cage in the rotating field must slip",
"keys": [
"slip"
]
},
{
"term_html": "referred",
"html": "Of a rotor quantity: replaced by its equivalent seen from the stator through the turns ratio, as in unit 07 — voltages times \\(n\\), currents over \\(n\\), impedances times \\(n^2\\) — and marked with a prime.",
"section": "The induction motor",
"slide": "The rotor as a transformer secondary at frequency sf",
"keys": [
"referred"
]
},
{
"term_html": "air-gap power",
"html": "\\(P_{\\mathrm{ag}} = 3|I_2'|^2R_2'/s\\), the power crossing from stator to rotor; a fraction \\(s\\) of it heats the rotor and \\(1 - s\\) leaves by the shaft, and the torque is \\(P_{\\mathrm{ag}}/\\omega_s\\).",
"section": "The induction motor",
"slide": "Air-gap power: s to the rotor's copper, 1 − s to the shaft",
"keys": [
"air-gap power"
]
},
{
"term_html": "torque–speed curve",
"html": "An induction motor's torque against its speed (or slip), from the Thévenin form \\(T = 3V_{\\mathrm{th}}^2(R_2'/s)/ (\\omega_s[(R_{\\mathrm{th}} + R_2'/s)^2 + (X_{\\mathrm{th}} + X_2')^2])\\).",
"section": "The induction motor",
"slide": "The torque–slip curve",
"keys": [
"torque–speed curve"
]
},
{
"term_html": "starting torque",
"html": "An induction motor's torque at standstill, \\(s = 1\\): 66.1 N·m for the pump motor, at 91.2 A.",
"section": "The induction motor",
"slide": "The torque–slip curve",
"keys": [
"starting torque"
]
},
{
"term_html": "pull-out torque",
"html": "An induction motor's maximum torque, reached where \\(R_2'/s = |Z_{\\mathrm{th}} + iX_2'|\\); a load above it stalls the motor. It does not depend on \\(R_2'\\). 164.1 N·m at slip 0.187 for the pump motor.",
"section": "The induction motor",
"slide": "The torque–slip curve",
"keys": [
"pull-out torque"
]
},
{
"term_html": "stable operating point",
"html": "A speed at which motor and load torques balance and \\(\\mathrm d(T - T_{\\mathrm{load}})/\\mathrm d\\omega &lt; 0\\), so a small disturbance dies away; for an induction motor, on the low-slip side of the maximum.",
"section": "The induction motor",
"slide": "Which side of the maximum is stable",
"keys": [
"stable operating point"
]
}
];
