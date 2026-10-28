// Generated from GLOSSARY.org by `cap glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "ignition coil",
"html": "Two windings on a common iron core: a primary of few turns fed from the battery and a secondary of many turns connected to the spark plug. Current built up in the primary is interrupted, and the collapse of the flux induces a high voltage in the secondary, which fires the plug (unit 07 finds how high it can rise; the spark itself is not modelled). This unit models the primary alone, as an inductance in series with a resistance.",
"section": "The running example",
"slide": "How twelve volts makes a spark",
"keys": [
"ignition coil"
]
},
{
"term_html": "contact",
"html": "The switch that interrupts the coil's primary current once per spark: a pair of points opened by a cam in older systems, a transistor in later ones. A capacitor (the condenser) is connected across it.",
"section": "The running example",
"slide": "How twelve volts makes a spark",
"keys": [
"contact"
]
},
{
"term_html": "state",
"html": "The capacitor voltages and inductor currents of a network. They are continuous whenever the other variable is finite, the stored energy is a function of them alone, and with the sources from \\(t_0\\) on their values at \\(t_0\\) fix everything after.",
"section": "Memory, and the first-order circuit",
"slide": "Kirchhoff's laws with derivatives",
"keys": [
"state"
]
},
{
"term_html": "order",
"html": "The number of independent state variables: the number of capacitors and inductors, less one for each independent capacitor loop and each independent inductor cut. Proved here as an upper bound; that it is attained is stated, not proved (Desoer and Kuh, ch. 12, give the general construction of state equations).",
"section": "Memory, and the first-order circuit",
"slide": "The order: counting energy stores",
"keys": [
"order"
]
},
{
"term_html": "capacitor loop",
"html": "A cycle of the graph made only of capacitors and voltage sources. KVL round it fixes one capacitor voltage in terms of the others, so it lowers the order by one.",
"section": "Memory, and the first-order circuit",
"slide": "The order: counting energy stores",
"keys": [
"capacitor loop"
]
},
{
"term_html": "inductor cut",
"html": "A cut made only of inductors and current sources. KCL across it fixes one inductor current in terms of the others, lowering the order by one.",
"section": "Memory, and the first-order circuit",
"slide": "The order: counting energy stores",
"keys": [
"inductor cut"
]
},
{
"term_html": "time constant",
"html": "In a circuit with a single energy store and constant sources, the \\(\\tau\\) in \\(x(t) = x(\\infty) + (x(0^+) - x(\\infty))e^{-t/\\tau}\\): \\(\\tau = RC\\) or \\(L/R\\), with \\(R\\) the Thévenin resistance the store sees. After \\(\\tau\\) a quantity has covered 63.2% of its change, after \\(5\\tau\\) 99.3%.",
"section": "Memory, and the first-order circuit",
"slide": "One store, one time constant",
"keys": [
"time constant"
]
},
{
"term_html": "dwell",
"html": "The time the ignition contact stays closed in each cycle, during which the coil's current builds up. Taken as 60% of the interval between sparks, an assumption.",
"section": "Memory, and the first-order circuit",
"slide": "High revs: the coil does not fill",
"keys": [
"dwell"
]
},
{
"term_html": "characteristic resistance",
"html": "\\(\\sqrt{L/C}\\), the ratio of peak voltage to peak current in the lossless free oscillation of an inductor and a capacitor, from \\(\\tfrac12L\\hat\\imath^2 = \\tfrac12C\\hat v^2\\). The quality factor of a series RLC is \\(Q = \\sqrt{L/C}/R\\).",
"section": "The series RLC",
"slide": "Free ringing, and the characteristic resistance",
"keys": [
"characteristic resistance"
]
},
{
"term_html": "snubber",
"html": "An element placed across a switch to give an inductive current a path while the switch opens, so that the voltage across the opening switch rises slowly instead of all at once. The ignition condenser is one.",
"section": "The series RLC",
"slide": "Worked: the switch-off, in time",
"keys": [
"snubber"
]
},
{
"term_html": "s-domain",
"html": "The circuit redrawn for Laplace transforms: the same graph with \\(V_e(s)\\) and \\(I_e(s)\\) on the edges, impedances \\(R\\), \\(sL\\), \\(1/(sC)\\) in place of the elements, and each nonempty energy store replaced by an empty one plus a source, \\(Li(0)\\) or \\(v(0)/s\\).",
"section": "The Laplace transform",
"slide": "Initial conditions become sources",
"keys": [
"s-domain"
]
},
{
"term_html": "network function",
"html": "The ratio \\(H(s)\\) of the transform of a response to the transform of the input, with every store empty at \\(t = 0\\). It is a rational function of \\(s\\) with real coefficients, by Cramer's rule on the nodal equations.",
"section": "The Laplace transform",
"slide": "Network functions, and what stable means",
"keys": [
"network function"
]
},
{
"term_html": "impulse response",
"html": "The inverse Laplace transform \\(h\\) of a network function: the response to a unit impulse input. Every response from rest is \\(h\\) convolved with the input.",
"section": "The Laplace transform",
"slide": "Network functions, and what stable means",
"keys": [
"impulse response"
]
},
{
"term_html": "stable",
"html": "Of a linear circuit: every bounded input gives a bounded output. For a proper rational network function this holds exactly when every pole has \\(\\operatorname{Re}s &lt; 0\\).",
"section": "The Laplace transform",
"slide": "Network functions, and what stable means",
"keys": [
"stable"
]
},
{
"term_html": "natural frequencies",
"html": "The exponents \\(p\\) of a network's free motions \\(e^{pt}\\): the zeros of the determinant of its s-domain equations. Every pole of every network function is one.",
"section": "The Laplace transform",
"slide": "Network functions, and what stable means",
"keys": [
"natural frequencies"
]
},
{
"term_html": "sinusoidal steady state",
"html": "The state a stable linear circuit settles into under a sinusoidal input at \\(\\omega\\): every quantity is a sinusoid at \\(\\omega\\), with complex amplitude \\(H(i\\omega)\\) times the input's.",
"section": "Phasors and impedance",
"slide": "The sinusoidal steady state",
"keys": [
"sinusoidal steady state"
]
},
{
"term_html": "RMS value",
"html": "The root of the mean square of a periodic signal, \\(\\sqrt{\\tfrac1T\\int_0^Tv^2\\,\\mathrm dt}\\); for a sinusoid of peak \\(\\hat V\\), \\(\\hat V/\\sqrt2\\). Mains 230 V is RMS, 325.3 V peak.",
"section": "Phasors and impedance",
"slide": "RMS, and the phasor",
"keys": [
"rms value"
]
},
{
"term_html": "phasor",
"html": "The complex number \\(V\\) with \\(v(t) = \\operatorname{Re}(\\sqrt2Ve^{i\\omega t})\\): its modulus is the RMS value, its argument the phase. Phasors obey Kirchhoff's laws, and \\(\\mathrm d/\\mathrm dt\\) acts on them as multiplication by \\(i\\omega\\).",
"section": "Phasors and impedance",
"slide": "RMS, and the phasor",
"keys": [
"phasor"
]
},
{
"term_html": "impedance",
"html": "\\(Z = V/I\\) for an element or two-terminal network in the sinusoidal steady state, \\(Z = R + iX\\); for a resistor \\(R\\), an inductor \\(i\\omega L\\), a capacitor \\(1/(i\\omega C)\\). It is the network function from current to voltage at \\(s = i\\omega\\).",
"section": "Phasors and impedance",
"slide": "Impedance and admittance",
"keys": [
"impedance"
]
},
{
"term_html": "admittance",
"html": "\\(Y = 1/Z = G + iB\\): conductance plus \\(i\\) times susceptance. Admittances in parallel add.",
"section": "Phasors and impedance",
"slide": "Impedance and admittance",
"keys": [
"admittance"
]
},
{
"term_html": "reactance",
"html": "The imaginary part \\(X\\) of an impedance: \\(\\omega L\\) for an inductor, \\(-1/(\\omega C)\\) for a capacitor.",
"section": "Phasors and impedance",
"slide": "Impedance and admittance",
"keys": [
"reactance"
]
},
{
"term_html": "susceptance",
"html": "The imaginary part \\(B\\) of an admittance: \\(\\omega C\\) for a capacitor, \\(-1/(\\omega L)\\) for an inductor.",
"section": "Phasors and impedance",
"slide": "Impedance and admittance",
"keys": [
"susceptance"
]
},
{
"term_html": "resonance",
"html": "For a series RLC, the frequency \\(\\omega_0 = 1/\\sqrt{LC}\\) at which the reactance vanishes: the impedance is \\(R\\), real and least, and the inductor's and capacitor's voltages, each \\(Q\\) times the drive, cancel.",
"section": "Phasors and impedance",
"slide": "The series RLC as arrows",
"keys": [
"resonance"
]
},
{
"term_html": "phasor diagram",
"html": "The phasors of a circuit drawn as arrows in the complex plane, so that Kirchhoff's laws become closed polygons of arrows.",
"section": "Phasors and impedance",
"slide": "The series RLC as arrows",
"keys": [
"phasor diagram"
]
},
{
"term_html": "half-power bandwidth",
"html": "The distance between the two frequencies at which the power in a resonant circuit falls to half its peak. For a series RLC it is exactly \\(R/L = \\omega_0/Q\\), MR 06's \\(\\gamma\\).",
"section": "Phasors and impedance",
"slide": "Resonance, Q and bandwidth",
"keys": [
"half-power bandwidth"
]
},
{
"term_html": "positive-real function",
"html": "A rational function \\(Z(s)\\) with real coefficients and \\(\\operatorname{Re}Z(s) \\ge 0\\) whenever \\(\\operatorname{Re}s &gt; 0\\). Every RLC impedance is one (proved from Tellegen's theorem), and every one is the impedance of some passive network (Brune, 1931, cited; his networks may include ideal transformers). The term is Brune's.",
"section": "Positive-real",
"slide": "Positive-real: the definition",
"keys": [
"positive-real function"
]
},
{
"term_html": "driving-point impedance",
"html": "The impedance seen at one pair of terminals of a network, as a function of \\(s\\).",
"section": "Positive-real",
"slide": "Positive-real: the definition",
"keys": [
"driving-point impedance"
]
},
{
"term_html": "tank",
"html": "An inductor and a capacitor in parallel. Its impedance \\(\\frac{s/C}{s^2 + 1/(LC)}\\) is infinite at its resonance: a parallel resonance blocks current.",
"section": "Positive-real",
"slide": "The converse, and three tests",
"keys": [
"tank"
]
},
{
"term_html": "Foster's reactance theorem",
"html": "For a network of inductors and capacitors only, \\(Z(i\\omega) = iX(\\omega)\\) with \\(X\\) odd and \\(\\mathrm dX/\\mathrm d\\omega = (\\sum L I_e^2 + \\sum I_e^2/(\\omega^2C))/I^2 &gt; 0\\) wherever finite: twice the mean stored energy per squared ampere. Poles and zeros of \\(X\\) alternate. R. M. Foster (1924).",
"section": "Lossless networks",
"slide": "Foster's reactance theorem",
"keys": [
"foster's reactance theorem"
]
},
{
"term_html": "lossless network",
"html": "A network of inductors and capacitors with no resistors; it stores energy and dissipates none.",
"section": "Lossless networks",
"slide": "Foster's reactance theorem",
"keys": [
"lossless network"
]
},
{
"term_html": "Foster form",
"html": "The partial-fraction form of a lossless impedance, \\(Z = k_\\infty s + k_0/s + \\sum 2k_is/(s^2 + \\omega_i^2)\\) with every \\(k \\ge 0\\), read as an inductor, a capacitor and a chain of parallel tanks in series.",
"section": "Lossless networks",
"slide": "The Foster form, as a chain of tanks",
"keys": [
"foster form"
]
}
];
