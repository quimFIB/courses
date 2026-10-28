// Generated from GLOSSARY.org by `qc glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "transmon",
"html": "A superconducting qubit: two metal pads joined by a Josephson junction, behaving as a weakly nonlinear oscillator whose lowest two levels are the qubit. Koch et al. 2007.",
"section": "A ladder, not a qubit",
"slide": "An oscillator on a chip",
"keys": [
"transmon"
]
},
{
"term_html": "LC oscillator",
"html": "A capacitor and a coil in a loop; charge sloshes between them at \\(\\omega = 1/\\sqrt{LC}\\), exactly as a mass on a spring moves.",
"section": "A ladder, not a qubit",
"slide": "An oscillator on a chip",
"keys": [
"lc oscillator"
]
},
{
"term_html": "Josephson junction",
"html": "Two superconductors separated by an insulating layer a few atoms thick; it acts as a coil whose inductance depends on the current, which makes the oscillator nonlinear.",
"section": "A ladder, not a qubit",
"slide": "An oscillator on a chip",
"keys": [
"josephson junction"
]
},
{
"term_html": "anharmonicity",
"html": "\\(\\alpha\\) in \\(H_0 = \\hbar\\omega n + \\tfrac{\\hbar\\alpha}{2}n(n - 1)\\): how much the second gap falls short of the first. About \\(-2\\pi\\times250\\) MHz for a transmon, against \\(\\omega \\approx 2\\pi\\times5\\) GHz.",
"section": "A ladder, not a qubit",
"slide": "The transmon's ladder",
"keys": [
"anharmonicity"
]
},
{
"term_html": "truncated lowering operator",
"html": "\\(b\\) on \\(\\mathrm{span}\\{\\ket0, \\ket1, \\ket2\\}\\) with \\(b\\ket1 = \\ket0\\), \\(b\\ket2 = \\sqrt2\\ket1\\), \\(b\\ket0 = 0\\); \\(b^\\dagger b = n = \\mathrm{diag}(0, 1, 2)\\). The \\(\\sqrt2\\) makes the drive couple \\(\\ket1 \\leftrightarrow \\ket2\\) more strongly than \\(\\ket0 \\leftrightarrow \\ket1\\).",
"section": "A ladder, not a qubit",
"slide": "The drive, and the √2",
"keys": [
"truncated lowering operator"
]
},
{
"term_html": "quadrature (in-phase and quadrature envelopes)",
"html": "The two slowly varying amplitudes \\(\\Omega_x\\), \\(\\Omega_y\\) of a drive \\(\\Omega_x\\cos\\omega t + \\Omega_y\\sin\\omega t = \\Omega\\cos(\\omega t - \\varphi)\\). On the qubit they become rotations about \\(x\\) and \\(y\\).",
"section": "A ladder, not a qubit",
"slide": "The drive, and the √2",
"keys": [
"quadrature (in-phase and quadrature envelopes)",
"quadrature",
"in-phase and quadrature envelopes"
]
},
{
"term_html": "time-dependent Hamiltonian",
"html": "A Hermitian \\(H(t)\\) that changes with time, as under a pulse. Evolution is defined by \\(i\\partial_tU(t, s) = H(t)U(t, s)\\), \\(U(s, s) = I\\), with \\(\\hbar = 1\\).",
"section": "The rotating frame",
"slide": "A Hamiltonian that changes in time",
"keys": [
"time-dependent hamiltonian"
]
},
{
"term_html": "propagator",
"html": "\\(U(t, s)\\), the unitary taking the state at time \\(s\\) to the state at time \\(t\\). Unitary because \\(\\partial_t(U^\\dagger U) = 0\\); it composes, \\(U(t, r)U(r, s) = U(t, s)\\).",
"section": "The rotating frame",
"slide": "A Hamiltonian that changes in time",
"keys": [
"propagator"
]
},
{
"term_html": "piecewise-constant evolution",
"html": "Approximating \\(U(T, 0)\\) by \\(\\prod_{k=N}^{1}e^{-iH(t_k)\\Delta t}\\) with midpoints \\(t_k\\). The error is at most \\(MT\\Delta t/4\\), \\(M = \\max\\lVert H'\\rVert\\), proved from \\(\\lVert U - W\\rVert \\le \\int\\lVert H - K\\rVert\\) and a telescoping sum.",
"section": "The rotating frame",
"slide": "Short constant steps converge",
"keys": [
"piecewise-constant evolution"
]
},
{
"term_html": "time-ordered product",
"html": "The limit of the piecewise-constant products as \\(\\Delta t \\to 0\\), with later times on the left; it equals \\(U(T, 0)\\). When all \\(H(t)\\) commute it is \\(e^{-i\\int H}\\).",
"section": "The rotating frame",
"slide": "Short constant steps converge",
"keys": [
"time-ordered product"
]
},
{
"term_html": "rotating frame",
"html": "The change of basis \\(\\ket{\\tilde\\psi} = e^{iGt}\\ket\\psi\\), under which \\(\\tilde H = e^{iGt}He^{-iGt} - G\\). With \\(G = \\omega n\\) the drive is on resonance with \\(\\ket0 \\leftrightarrow \\ket1\\), and populations are unchanged.",
"section": "The rotating frame",
"slide": "Turning with the drive",
"keys": [
"rotating frame"
]
},
{
"term_html": "rotating-wave approximation",
"html": "Dropping the terms in \\(e^{\\pm2i\\omega t}\\) from the rotating-frame Hamiltonian, justified when \\(|\\Omega_x|, |\\Omega_y|, |\\alpha| \\ll \\omega\\). It leaves \\(\\tilde H = \\alpha\\ket2\\!\\bra2 + \\tfrac{\\Omega_x}{2}(b + b^\\dagger) + \\tfrac{\\Omega_y}{2}(ib^\\dagger - ib)\\).",
"section": "The rotating frame",
"slide": "The rotating-wave approximation, with three levels",
"keys": [
"rotating-wave approximation"
]
},
{
"term_html": "Bloch–Siegert shift",
"html": "The first correction from the dropped terms, a shift of resonance by about \\(\\Omega^2/4\\omega\\) (unit 02, cited there): \\(2\\pi\\times0.44\\) MHz at the running pulse's peak.",
"section": "The rotating frame",
"slide": "The rotating-wave approximation, with three levels",
"keys": [
"bloch–siegert shift"
]
},
{
"term_html": "pulse area",
"html": "\\(\\theta = \\int_0^T\\Omega_x\\,dt\\). On two levels with \\(\\Omega_y = 0\\) the pulse is exactly \\(R_x(\\theta)\\) whatever its shape; a \\(\\pi\\)-pulse has area \\(\\pi\\).",
"section": "The rotating frame",
"slide": "On two levels: unit 02's drive",
"keys": [
"pulse area"
]
},
{
"term_html": "Gaussian pulse",
"html": "The envelope \\(\\Omega_x(t) = A[e^{-(t - T/2)^2/2\\sigma^2} - e^{-2}]\\) on \\([0, T]\\), \\(\\sigma = T/4\\), offset to vanish at both ends and scaled to area \\(\\pi\\). Its slope jumps at the ends: the kink that sets the leakage.",
"section": "Leakage",
"slide": "The Gaussian π-pulse",
"keys": [
"gaussian pulse"
]
},
{
"term_html": "leakage",
"html": "Population outside the qubit subspace at the end of a gate, here \\(P_2\\). Worse than a qubit error of the same size, because codes measure Paulis on the qubit subspace and cannot see it. To leading order in \\(1/\\alpha\\), \\(P_2 \\approx \\Omega_x'(T)^2/2\\alpha^4\\).",
"section": "Leakage",
"slide": "The Gaussian π-pulse",
"keys": [
"leakage"
]
},
{
"term_html": "DRAG",
"html": "Derivative Removal by Adiabatic Gate: a quadrature \\(\\Omega_y = -\\lambda\\Omega_x'/\\alpha\\), with \\(\\lambda = 1\\) cancelling the leading leakage amplitude. For \\(\\alpha \\lt 0\\), \\(\\Omega_y = +\\Omega_x'/|\\alpha|\\). Motzoi, Gambetta, Rebentrost and Wilhelm 2009.",
"section": "DRAG, and the Stark shift",
"slide": "DRAG, derived",
"keys": [
"drag"
]
},
{
"term_html": "AC Stark shift",
"html": "The drive's coupling to \\(\\ket2\\) pushes \\(\\ket1\\) up by \\(\\Omega_x^2/2|\\alpha|\\) while \\(\\ket0\\) stays, so the qubit's frequency rises during the pulse and a drive at \\(\\omega\\) is left detuned. It is what makes a Gaussian \\(\\pi\\)-pulse miss \\(\\ket1\\) by \\(2.6\\%\\).",
"section": "DRAG, and the Stark shift",
"slide": "The drive moves the qubit",
"keys": [
"ac stark shift"
]
},
{
"term_html": "effective Hamiltonian",
"html": "The qubit block, to order \\(1/\\alpha\\), after a small change of basis that decouples \\(\\ket2\\): \\(\\tfrac12\\Omega_xX + \\tfrac12\\Omega_yY - \\tfrac{\\Omega_x^2}{2\\alpha}\\ket1\\!\\bra1\\). With a detuning \\(c\\,\\Omega_x^2n/\\alpha\\) added, the first-order miss is proportional to \\((\\lambda + c - \\tfrac12)^2\\).",
"section": "DRAG, and the Stark shift",
"slide": "The drive moves the qubit",
"keys": [
"effective hamiltonian"
]
},
{
"term_html": "average gate fidelity",
"html": "\\(F_{\\rm avg} = \\int\\braket{\\psi|U^\\dagger \\Phi(\\ket\\psi\\!\\bra\\psi)U|\\psi}\\,d\\psi\\) over the uniform measure on the Bloch sphere; \\(1 - F_{\\rm avg}\\) is the average infidelity. The integrand is unit 21's \\(F^2\\), not \\(F\\). For amplitude damping over a short time \\(t\\), \\(1 - F_{\\rm avg} = t/3T_1\\) to first order.",
"section": "T₁ as a gate error",
"slide": "One number for a gate",
"keys": [
"average gate fidelity"
]
},
{
"term_html": "six-state average",
"html": "The average over the six axis states \\(\\pm\\hat x, \\pm\\hat y, \\pm\\hat z\\). It equals the sphere average for any polynomial of degree at most 2 in the Bloch vector, so it computes \\(F_{\\rm avg}\\) exactly.",
"section": "T₁ as a gate error",
"slide": "One number for a gate",
"keys": [
"six-state average"
]
}
];
