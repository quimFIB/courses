// Generated from GLOSSARY.org by `cap glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "ideal switch",
"html": "A two-terminal element with two states chosen from outside: on, \\(v = 0\\) whatever the current; off, \\(i = 0\\) whatever the voltage. Its power \\(vi\\) is zero at every instant, so it converts without loss.",
"section": "The ideal switch",
"slide": "The ideal switch: either v = 0 or i = 0",
"keys": [
"ideal switch"
]
},
{
"term_html": "duty cycle",
"html": "The fraction \\(D\\) of each switching period \\(T\\) for which a switch is on. The switch node's average is then \\(DV_{\\text{in}}\\).",
"section": "The ideal switch",
"slide": "Chop, then filter",
"keys": [
"duty cycle"
]
},
{
"term_html": "switching loss",
"html": "The energy a real switch dissipates while changing state, when its voltage and current are both non-zero: \\(\\tfrac12VIt_c\\) per transition in a linear model with crossover time \\(t_c\\), so \\(VIt_cf\\) at frequency \\(f\\).",
"section": "The ideal switch",
"slide": "Switching loss: \\(\\tfrac12 VIt_c\\) per transition",
"keys": [
"switching loss"
]
},
{
"term_html": "buck converter",
"html": "A switch from \\(V_{\\text{in}}\\) to a node, a diode from ground to that node, and an \\(LC\\) filter to the load. In periodic steady state with continuous conduction its average output is \\(DV_{\\text{in}}\\).",
"section": "The buck converter",
"slide": "A switch, a diode, and unit 05's LC pair",
"keys": [
"buck converter"
]
},
{
"term_html": "freewheeling diode",
"html": "The diode that carries an inductor's current while the switch is off, so that the current is never interrupted; it turns on by itself.",
"section": "The buck converter",
"slide": "A switch, a diode, and unit 05's LC pair",
"keys": [
"freewheeling diode"
]
},
{
"term_html": "periodic steady state",
"html": "The state of a switched circuit in which every state variable — inductor currents, capacitor voltages — returns to its value after each period.",
"section": "The buck converter",
"slide": "Volt-second balance: V_o = DV_in",
"keys": [
"periodic steady state"
]
},
{
"term_html": "volt-second balance",
"html": "In periodic steady state the average voltage across an inductor is zero, since \\(\\int_0^Tv_L\\,\\mathrm dt = L[i_L(T) - i_L(0)] = 0\\). Applied to the buck converter it gives \\(\\langle v_o\\rangle = DV_{\\text{in}}\\).",
"section": "The buck converter",
"slide": "Volt-second balance: V_o = DV_in",
"keys": [
"volt-second balance"
]
},
{
"term_html": "small-ripple approximation",
"html": "Treating a filtered quantity, such as the output voltage, as constant within one switching period; justified when its ripple is a small fraction of its value (0.13% for the charger).",
"section": "The buck converter",
"slide": "Volt-second balance: V_o = DV_in",
"keys": [
"small-ripple approximation"
]
},
{
"term_html": "capacitor charge balance",
"html": "In periodic steady state the average current into a capacitor is zero; for the buck converter it makes the inductor's mean current equal the load current.",
"section": "The buck converter",
"slide": "Volt-second balance: V_o = DV_in",
"keys": [
"capacitor charge balance"
]
},
{
"term_html": "continuous conduction",
"html": "Operation in which the inductor current never reaches zero, so the diode conducts for the whole off-interval. For the buck converter it holds while \\(I_o &gt; \\Delta I/2\\).",
"section": "The buck converter",
"slide": "Continuous conduction, and two relatives",
"keys": [
"continuous conduction"
]
},
{
"term_html": "boost converter",
"html": "A rearrangement of switch, diode and inductor whose averaged output is \\(V_{\\text{in}}/(1 - D)\\), above the input.",
"section": "The buck converter",
"slide": "Continuous conduction, and two relatives",
"keys": [
"boost converter"
]
},
{
"term_html": "buck–boost converter",
"html": "A rearrangement whose averaged output is \\(-DV_{\\text{in}}/(1 - D)\\): either smaller or larger than the input, and reversed in sign.",
"section": "The buck converter",
"slide": "Continuous conduction, and two relatives",
"keys": [
"buck–boost converter"
]
},
{
"term_html": "half-bridge",
"html": "Two switches in series across a DC source, exactly one on at a time, so that their midpoint sits at \\(\\pm V_{\\text{dc}}/2\\) relative to the midpoint of the source. One leg of an inverter.",
"section": "Making AC: PWM and inverters",
"slide": "The half-bridge: a leg that switches between two rails",
"keys": [
"half-bridge"
]
},
{
"term_html": "pulse-width modulation (PWM)",
"html": "Varying a switch's duty cycle slowly so that the local average of the switched waveform follows a chosen signal, such as a sinusoid.",
"section": "Making AC: PWM and inverters",
"slide": "The half-bridge: a leg that switches between two rails",
"keys": [
"pulse-width modulation (pwm)",
"pulse-width modulation",
"pwm"
]
},
{
"term_html": "modulation index",
"html": "The amplitude \\(m\\) of the reference, as a fraction of the carrier's range; the fundamental of the output is \\(m\\,V_{\\text{dc}}/2\\).",
"section": "Making AC: PWM and inverters",
"slide": "The half-bridge: a leg that switches between two rails",
"keys": [
"modulation index"
]
},
{
"term_html": "inverter",
"html": "A circuit that makes AC from DC by switching.",
"section": "Making AC: PWM and inverters",
"slide": "The half-bridge: a leg that switches between two rails",
"keys": [
"inverter"
]
},
{
"term_html": "quasi-square wave",
"html": "A waveform of \\(\\pm V\\) with notches of half-width \\(\\alpha\\) at its zero crossings; its Fourier coefficients are \\(b_n = (4V/n\\pi)\\cos n\\alpha\\) for odd \\(n\\).",
"section": "Making AC: PWM and inverters",
"slide": "One pulse per half-cycle: the quasi-square wave",
"keys": [
"quasi-square wave"
]
},
{
"term_html": "carrier",
"html": "The fast triangular wave against which a PWM reference is compared; the switch changes state where the two cross.",
"section": "Making AC: PWM and inverters",
"slide": "Sine–triangle PWM: switching at the crossings",
"keys": [
"carrier"
]
},
{
"term_html": "triplen harmonics",
"html": "Harmonics of order 3, 6, 9, …; identical in all three legs of an inverter whose legs are delayed copies of one waveform, so they cancel in every line-to-line voltage.",
"section": "Making AC: PWM and inverters",
"slide": "Three legs: the three-phase inverter",
"keys": [
"triplen harmonics"
]
},
{
"term_html": "voltage-source converter",
"html": "A converter that makes, on its AC side, a voltage whose magnitude and phase its controller chooses; behind a reactance it sets real power with the phase and reactive power with the magnitude. INELFE's converters are of this kind (REE).",
"section": "Making AC: PWM and inverters",
"slide": "INELFE's converters: a voltage that chooses its phase",
"keys": [
"voltage-source converter"
]
},
{
"term_html": "distortion factor",
"html": "\\(I_1/I\\), the RMS of a current's fundamental over its total RMS: 0.900 for a square wave.",
"section": "Currents that are not sinusoids",
"slide": "Only the fundamental carries power",
"keys": [
"distortion factor"
]
},
{
"term_html": "displacement factor",
"html": "\\(\\cos\\varphi_1\\), the cosine of the phase between the voltage and the current's fundamental. With a sinusoidal voltage the power factor is the product of the two factors.",
"section": "Currents that are not sinusoids",
"slide": "Only the fundamental carries power",
"keys": [
"displacement factor"
]
},
{
"term_html": "XLPE",
"html": "Cross-linked polyethylene, the insulation of the cables in this unit; its relative permittivity is taken as 2.4.",
"section": "Why the grid goes DC",
"slide": "A cable is a long capacitor",
"keys": [
"xlpe"
]
},
{
"term_html": "charging current",
"html": "The current a line or cable draws on AC to charge its own capacitance each cycle, \\(\\omega C'V\\) per unit length in the lumped estimate, a quarter-cycle ahead of the voltage.",
"section": "Why the grid goes DC",
"slide": "The charging current uses up the rating",
"keys": [
"charging current"
]
},
{
"term_html": "critical length",
"html": "The length at which an AC cable's charging current alone reaches its thermal rating, fed from one end: \\(l_c = I_{\\text{rated}}/\\omega C'V\\), 99.4 km for the assumed 400 kV cable.",
"section": "Why the grid goes DC",
"slide": "Worked: the critical length, and INELFE as an AC cable",
"keys": [
"critical length"
]
},
{
"term_html": "shunt reactor",
"html": "An inductor connected from a line to earth to absorb the reactive current of its capacitance. Equal reactors at both ends of a cable double its critical length.",
"section": "Why the grid goes DC",
"slide": "Is the lumped estimate good here, and what compensation buys",
"keys": [
"shunt reactor"
]
},
{
"term_html": "converter station",
"html": "The installation at each end of a DC link that converts between AC and DC; INELFE's each have more than 5,400 power modules (REE).",
"section": "Why the grid goes DC",
"slide": "What direct current removes, and what it costs",
"keys": [
"converter station"
]
},
{
"term_html": "grid-following",
"html": "Control of an inverter that measures the grid's phase and injects a set current in step with it. It contributes no inertia unless told to.",
"section": "Generators without inertia",
"slide": "Grid-following, and synthetic inertia",
"keys": [
"grid-following"
]
},
{
"term_html": "phase-locked loop",
"html": "A feedback scheme that adjusts an internal oscillator until its phase matches a measured waveform's, reporting that phase and its frequency.",
"section": "Generators without inertia",
"slide": "Grid-following, and synthetic inertia",
"keys": [
"phase-locked loop"
]
},
{
"term_html": "synthetic inertia",
"html": "A term \\(-K\\,\\mathrm df/\\mathrm dt\\) added to an inverter's power; \\(K = 2HS/f_0\\) mimics a machine of inertia \\(H\\) on rating \\(S\\): 200 MW per Hz/s for 5 s on 1 GW.",
"section": "Generators without inertia",
"slide": "Grid-following, and synthetic inertia",
"keys": [
"synthetic inertia"
]
},
{
"term_html": "grid-forming",
"html": "Control of an inverter as a voltage source behind a reactance whose angle obeys a swing equation chosen in software, so that its power responds at once to the grid's angle.",
"section": "Generators without inertia",
"slide": "Grid-forming: a voltage with an angle of its own",
"keys": [
"grid-forming"
]
},
{
"term_html": "virtual synchronous machine",
"html": "A grid-forming controller that integrates unit 13's swing equation with a chosen inertia \\(H_v\\) and damping \\(D_v\\).",
"section": "Generators without inertia",
"slide": "Grid-forming: a voltage with an angle of its own",
"keys": [
"virtual synchronous machine"
]
}
];
