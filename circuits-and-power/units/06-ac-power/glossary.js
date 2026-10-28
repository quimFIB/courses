// Generated from GLOSSARY.org by `cap glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "instantaneous power",
"html": "\\(p(t) = v(t)\\,i(t)\\), the rate at which energy enters a two-terminal element at each instant, under the passive sign convention; by unit 01's theorem it is the Poynting flux into any surface round the element. For sinusoids with RMS phasors its mean is \\(\\operatorname{Re}(VI^*) = |V||I|\\cos\\varphi\\).",
"section": "Instantaneous power at 50 Hz",
"slide": "The mean of a product of two sinusoids",
"keys": [
"instantaneous power"
]
},
{
"term_html": "real power (active power)",
"html": "\\(P = |V||I|\\cos\\varphi = \\operatorname{Re}S\\), the mean of \\(p(t)\\) over a cycle, in watts: the rate at which a load does work or makes heat. For an impedance it is \\(R|I|^2\\), and for a passive load it is never negative.",
"section": "Instantaneous power at 50 Hz",
"slide": "\\(p(t)\\) splits in two",
"keys": [
"real power (active power)",
"real power",
"active power"
]
},
{
"term_html": "reactive power",
"html": "\\(Q = |V||I|\\sin\\varphi = \\operatorname{Im}S\\), in var: the amplitude of the part of \\(p(t)\\) that averages to zero. Positive for an inductive load, negative for a capacitive one. For a network of R, L and C it equals \\(2\\omega(\\langle W_m\\rangle - \\langle W_e\\rangle)\\). Defined here for sinusoids only.",
"section": "Instantaneous power at 50 Hz",
"slide": "\\(p(t)\\) splits in two",
"keys": [
"reactive power"
]
},
{
"term_html": "complex power",
"html": "\\(S = VI^* = P + iQ\\) for RMS phasors \\(V\\), \\(I\\) under the passive convention; \\(\\arg S = \\varphi = \\arg V - \\arg I\\). For an impedance \\(S = Z|I|^2 = |V|^2/Z^*\\). It does not depend on where \\(t = 0\\) is put.",
"section": "Real, reactive, apparent, complex",
"slide": "Complex power",
"keys": [
"complex power"
]
},
{
"term_html": "apparent power",
"html": "\\(|S| = |V||I|\\), in VA: the product of the RMS voltage and current, whatever their phase. It sets the current a load draws at a given voltage. Not conserved: \\(|\\sum S_e|\\le\\sum|S_e|\\).",
"section": "Real, reactive, apparent, complex",
"slide": "Complex power",
"keys": [
"apparent power"
]
},
{
"term_html": "var",
"html": "The volt-ampere reactive, the name of the unit of reactive power. It is dimensionally \\(\\mathrm{V\\,A} = \\mathrm W\\); W, var and VA name which product of \\(V\\) and \\(I\\) is meant.",
"section": "Real, reactive, apparent, complex",
"slide": "Complex power",
"keys": [
"var"
]
},
{
"term_html": "inductive load",
"html": "A load whose current lags its voltage, \\(\\varphi &gt; 0\\), so that it absorbs positive reactive power: it stores more magnetic energy than electric on average. A capacitive load is the opposite.",
"section": "Real, reactive, apparent, complex",
"slide": "For an impedance: the resistance takes \\(P\\), the reactance \\(Q\\)",
"keys": [
"inductive load"
]
},
{
"term_html": "power triangle",
"html": "\\(S = P + iQ\\) drawn in the plane: legs \\(P\\) and \\(Q\\), hypotenuse \\(|S|\\), angle \\(\\varphi\\) at the origin, so \\(|S|^2 = P^2 + Q^2\\) and \\(Q = P\\tan\\varphi\\).",
"section": "Real, reactive, apparent, complex",
"slide": "The power triangle, and the power factor",
"keys": [
"power triangle"
]
},
{
"term_html": "power factor",
"html": "\\(\\cos\\varphi = P/|S|\\), the share of the apparent power that is real. At fixed \\(P\\) and voltage the current is \\(P/|V|\\cos\\varphi\\). Stated with \"lagging\" or \"leading\", since the cosine does not say the sign of \\(\\varphi\\).",
"section": "Real, reactive, apparent, complex",
"slide": "The power triangle, and the power factor",
"keys": [
"power factor"
]
},
{
"term_html": "lagging",
"html": "Said of a power factor when the current lags the voltage, \\(\\varphi &gt; 0\\), \\(Q &gt; 0\\): an inductive load.",
"section": "Real, reactive, apparent, complex",
"slide": "The power triangle, and the power factor",
"keys": [
"lagging"
]
},
{
"term_html": "leading",
"html": "Said of a power factor when the current leads the voltage, \\(\\varphi &lt; 0\\), \\(Q &lt; 0\\): a capacitive load, or an over-corrected one.",
"section": "Real, reactive, apparent, complex",
"slide": "The power triangle, and the power factor",
"keys": [
"leading"
]
},
{
"term_html": "conservation of complex power",
"html": "In any network at one frequency, \\(\\sum_eV_eI_e^* = 0\\) over every element, sources included: Tellegen's theorem, since the conjugated currents still obey the current law (the incidence matrix is real). Real and reactive power therefore balance separately; apparent power does not.",
"section": "Complex power is conserved",
"slide": "The conjugate currents obey the current law",
"keys": [
"conservation of complex power"
]
},
{
"term_html": "power-factor correction",
"html": "Connecting a capacitor across a load so that it supplies the load's reactive power locally: \\(Q_C = -\\omega C|V|^2\\), and \\(C = Q/\\omega|V|^2\\) for unity. The supply current falls by \\(\\cos\\varphi\\) and the loss in a resistive supply cable by \\(\\cos^2\\varphi\\). To a target \\(\\cos\\varphi_2\\): \\(-Q_C = P(\\tan\\varphi_1 - \\tan\\varphi_2)\\).",
"section": "Correcting the power factor",
"slide": "A capacitor across the load",
"keys": [
"power-factor correction"
]
},
{
"term_html": "reactive-energy charge",
"html": "In Spain's access tariffs (CNMC Circular 3/2020, art. 9.5), a term in €/kvarh billed to all supplies except low-voltage ones of up to 15 kW contracted, in every tariff period but period 6, on the reactive energy in excess of 33% of the active energy over the billing period. For a steady load the threshold is \\(\\tan\\varphi = 0.33\\), \\(\\cos\\varphi = 0.9496\\).",
"section": "Correcting the power factor",
"slide": "How far to correct: 0.95, and a tariff's 33%",
"keys": [
"reactive-energy charge"
]
},
{
"term_html": "over-correction",
"html": "Correcting with more capacitance than the load's \\(Q\\) needs, so that the supply sees a leading power factor. The supply cable's loss depends on \\(Q_s^2\\), so it rises again: twice the right capacitor restores the uncorrected current and loss.",
"section": "Correcting the power factor",
"slide": "Over-correction is also a loss",
"keys": [
"over-correction"
]
},
{
"term_html": "capacitor bank",
"html": "Several capacitors connected across the supply at an installation's intake, switched in and out in steps by a controller that follows the reactive power drawn, so that a varying load is corrected without being over-corrected at light load.",
"section": "Correcting the power factor",
"slide": "Capacitor banks in the switch room",
"keys": [
"capacitor bank"
]
},
{
"term_html": "conjugate match",
"html": "For a source \\(V_{\\mathrm{th}}\\) behind \\(Z_s = R_s + iX_s\\), the load \\(Z_L = Z_s^*\\), which takes the most power of any passive load, \\(|V_{\\mathrm{th}}|^2/4R_s\\), at exactly 50% efficiency: the load's reactance cancels the source's, and its resistance matches. If the load must be a resistance, the best is \\(R_L = |Z_s|\\).",
"section": "Conjugate matching",
"slide": "The conjugate-matching theorem",
"keys": [
"conjugate match"
]
}
];
