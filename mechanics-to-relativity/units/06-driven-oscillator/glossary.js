// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "small oscillations",
"html": "The motion near a minimum \\(x_*\\) of a potential, after \\(V\\) is replaced by its second-order Taylor polynomial: \\(m\\ddot\\xi = -V''(x_*)\\xi + O(\\xi^2)\\) with \\(\\xi = x - x_*\\). The approximation is quantitative — the dropped term is bounded by \\(\\tfrac12\\varepsilon^2\\max|V'''|\\) on \\(|\\xi|\\le\\varepsilon\\) — and it is why one equation covers so much physics.",
"section": "Why this equation, and the complex numbers",
"slide": "Every minimum is a spring",
"keys": [
"small oscillations"
]
},
{
"term_html": "harmonic oscillator",
"html": "\\(\\ddot\\xi + \\omega_0^2\\xi = 0\\) with \\(\\omega_0 = \\sqrt{V''(x_*)/m}\\). The universal local model of a stable equilibrium, exact only for a quadratic potential.",
"section": "Why this equation, and the complex numbers",
"slide": "Every minimum is a spring",
"keys": [
"harmonic oscillator"
]
},
{
"term_html": "damping",
"html": "A force \\(-b\\dot x\\), linear in the velocity, added as a phenomenological law exactly as unit 00 admitted force laws as input. In the running example it is derived rather than postulated: a coil moving in a field induces a current \\(-\\alpha\\dot\\theta/(R+r)\\) and so a torque \\(-\\alpha^2\\dot\\theta/(R+r)\\), whence \\(\\gamma = \\alpha^2/(I(R+r))\\).",
"section": "Why this equation, and the complex numbers",
"slide": "The galvanometer, and the knob that is \\(\\gamma\\)",
"keys": [
"damping"
]
},
{
"term_html": "complex numbers",
"html": "\\(\\mathbb{C}\\) is \\(\\mathbb{R}^2\\) with the multiplication \\((a,b)(c,d) = (ac-bd,\\,ad+bc)\\); it is a field, with \\(z^{-1} = \\bar z/|z|^2\\). It is introduced here for one purpose: so that every quadratic factorises, and one calculation covers all three damping regimes instead of three.",
"section": "Why this equation, and the complex numbers",
"slide": "\\(\\mathbb{C}\\), and the one property we want",
"keys": [
"complex numbers"
]
},
{
"term_html": "complex conjugate",
"html": "\\(\\overline{a+bi} = a-bi\\). Conjugation is a field automorphism fixing \\(\\mathbb{R}\\), and \\(z\\bar z = |z|^2\\).",
"section": "Why this equation, and the complex numbers",
"slide": "\\(\\mathbb{C}\\), and the one property we want",
"keys": [
"complex conjugate"
]
},
{
"term_html": "modulus",
"html": "\\(|z| = \\sqrt{z\\bar z} = \\sqrt{a^2+b^2}\\), the Euclidean length of \\(z\\) as a point of the plane. Multiplicative: \\(|zw| = |z||w|\\).",
"section": "Why this equation, and the complex numbers",
"slide": "\\(\\mathbb{C}\\), and the one property we want",
"keys": [
"modulus"
]
},
{
"term_html": "argument",
"html": "For \\(z\\ne0\\), the angle \\(\\varphi\\) with \\(z = |z|(\\cos\\varphi+i\\sin\\varphi)\\), unique modulo \\(2\\pi\\). The unit pins a branch whenever it matters: the phase lag is taken in \\((0,\\pi)\\).",
"section": "Why this equation, and the complex numbers",
"slide": "\\(\\mathbb{C}\\), and the one property we want",
"keys": [
"argument"
]
},
{
"term_html": "complex exponential",
"html": "\\(\\exp z = \\sum_{n\\ge0}z^n/n!\\), absolutely convergent for every \\(z\\). Its two properties: \\(\\exp(z+w) = \\exp z\\exp w\\), by the Cauchy product and the binomial theorem; and \\(\\frac{\\mathrm{d}}{\\mathrm{d}t} e^{\\lambda t} = \\lambda e^{\\lambda t}\\) for real \\(t\\) and complex \\(\\lambda\\), proved by differentiating the real and imaginary parts. Used as algebra: no complex analysis until unit 20.",
"section": "Why this equation, and the complex numbers",
"slide": "The complex exponential",
"keys": [
"complex exponential"
]
},
{
"term_html": "Euler's formula",
"html": "\\(\\exp(i\\vartheta) = \\cos\\vartheta + i\\sin\\vartheta\\), obtained by splitting the absolutely convergent series into even and odd terms. Hence \\(|e^{a+bi}| = e^a\\), and every trigonometric identity in this unit becomes algebra with exponentials.",
"section": "Why this equation, and the complex numbers",
"slide": "The complex exponential",
"keys": [
"euler's formula"
]
},
{
"term_html": "linear differential operator",
"html": "\\(L : C^2(\\mathbb{R},\\mathbb{R}) \\to C^0(\\mathbb{R},\\mathbb{R})\\), \\(Lx = \\ddot x + \\gamma\\dot x + \\omega_0^2x\\). Linear because differentiation is, so every theorem of linear algebra applies verbatim in an infinite-dimensional space.",
"section": "The free equation, and its two-dimensional solution space",
"slide": "\\(L\\) is a linear map between function spaces",
"keys": [
"linear differential operator"
]
},
{
"term_html": "homogeneous",
"html": "The equation \\(Lx = 0\\); its solution set is the subspace \\(\\ker L\\).",
"section": "The free equation, and its two-dimensional solution space",
"slide": "\\(L\\) is a linear map between function spaces",
"keys": [
"homogeneous"
]
},
{
"term_html": "inhomogeneous",
"html": "The equation \\(Lx = f\\) with \\(f \\ne 0\\); its solution set is the coset \\(x_p + \\ker L\\) for any one particular solution \\(x_p\\).",
"section": "The free equation, and its two-dimensional solution space",
"slide": "\\(L\\) is a linear map between function spaces",
"keys": [
"inhomogeneous"
]
},
{
"term_html": "superposition principle",
"html": "The structure theorem \\(\\{x : Lx = f\\} = x_p + \\ker L\\), and its corollary that responses to separate drives add. A physical claim as well as an algebraic one: nature obeys it only so far as the equation is linear.",
"section": "The free equation, and its two-dimensional solution space",
"slide": "\\(L\\) is a linear map between function spaces",
"keys": [
"superposition principle"
]
},
{
"term_html": "evaluation map",
"html": "\\(\\mathrm{ev} : \\ker L \\to \\mathbb{R}^2\\), \\(x \\mapsto (x(t_0),\\dot x(t_0))\\). It is injective by unit 01's uniqueness theorem and surjective by unit 01's global existence theorem for a field of linear growth, hence an isomorphism — which is why \\(\\dim\\ker L = 2\\). \"Second order, so two constants\" is folklore and is false without linearity: unit 01's dome is the counterexample.",
"section": "The free equation, and its two-dimensional solution space",
"slide": "\\(\\dim \\ker L = 2\\), and unit 01 is the reason",
"keys": [
"evaluation map"
]
},
{
"term_html": "characteristic polynomial",
"html": "\\(p(\\lambda) = \\lambda^2 + \\gamma\\lambda + \\omega_0^2\\), defined by \\(Le^{\\lambda t} = p(\\lambda)e^{\\lambda t}\\). Its roots \\(\\lambda_\\pm = -\\gamma/2 \\pm \\sqrt{\\gamma^2/4-\\omega_0^2}\\) decide everything, and both have \\(\\operatorname{Re}\\lambda \\le 0\\).",
"section": "The free equation, and its two-dimensional solution space",
"slide": "The characteristic polynomial",
"keys": [
"characteristic polynomial"
]
},
{
"term_html": "repeated root",
"html": "The case \\(p(\\lambda) = p'(\\lambda) = 0\\), i.e. \\(\\gamma = 2\\omega_0\\). Then \\(L(te^{\\lambda t}) = p(\\lambda)te^{\\lambda t} + p'(\\lambda)e^{\\lambda t} = 0\\), so \\(te^{\\lambda t}\\) is a second solution. The same identity, used where \\(p \\ne 0\\), produces the secular term at undamped resonance.",
"section": "The free equation, and its two-dimensional solution space",
"slide": "The characteristic polynomial",
"keys": [
"repeated root"
]
},
{
"term_html": "Wronskian",
"html": "\\(W = x_1\\dot x_2 - x_2\\dot x_1\\) for two solutions: the determinant of the matrix of their states, hence the signed phase-space area they span.",
"section": "The free equation, and its two-dimensional solution space",
"slide": "The Wronskian, and Abel's identity",
"keys": [
"wronskian"
]
},
{
"term_html": "Abel's identity",
"html": "\\(\\dot W = -\\gamma W\\), so \\(W(t) = W(t_0)e^{-\\gamma(t-t_0)}\\): the Wronskian is never zero or identically zero. Read physically, the flow contracts phase-space area at the rate \\(\\gamma = -\\operatorname{tr}A\\), which is unit 14's Liouville theorem in miniature.",
"section": "The free equation, and its two-dimensional solution space",
"slide": "The Wronskian, and Abel's identity",
"keys": [
"abel's identity"
]
},
{
"term_html": "fundamental system",
"html": "A basis \\(\\{x_1,x_2\\}\\) of \\(\\ker L\\). Equivalent to \\(W \\ne 0\\) at one instant, and to \\(W \\ne 0\\) at every instant — so independence may be checked at whichever \\(t\\) is convenient.",
"section": "The free equation, and its two-dimensional solution space",
"slide": "The Wronskian, and Abel's identity",
"keys": [
"fundamental system"
]
},
{
"term_html": "variation of parameters",
"html": "The construction of a particular solution as \\(u_1x_1+u_2x_2\\) with the imposed constraint \\(\\dot u_1x_1+\\dot u_2x_2 = 0\\), giving \\(x_p(t) = \\int_{t_0}^{t}K(t,s)f(s)\\,\\mathrm{d}s\\) with \\(K(t,s) = (x_1(s)x_2(t)-x_2(s)x_1(t))/W(s)\\). A closed form for every continuous drive, with no ansatz. Lagrange, 1808, for planetary perturbations.",
"section": "The free equation, and its two-dimensional solution space",
"slide": "Variation of parameters: any drive at all",
"keys": [
"variation of parameters"
]
},
{
"term_html": "underdamped",
"html": "\\(\\gamma &lt; 2\\omega_0\\), complex roots, ringing decay.",
"section": "Damping regimes",
"slide": "Worked: the galvanometer's three regimes",
"keys": [
"underdamped"
]
},
{
"term_html": "critically damped",
"html": "\\(\\gamma = 2\\omega_0\\), a repeated root, basis \\(\\{e^{-\\omega_0t}, te^{-\\omega_0t}\\}\\). The unique damping that returns fastest without overshoot, which is why pointer instruments are built at it; in unit 02's language, a \\(2\\times2\\) Jordan block.",
"section": "Damping regimes",
"slide": "Worked: the galvanometer's three regimes",
"keys": [
"critically damped"
]
},
{
"term_html": "overdamped",
"html": "\\(\\gamma &gt; 2\\omega_0\\), two real negative roots. The slow root \\(\\lambda_+ \\to -\\omega_0^2/\\gamma \\to 0\\), so more damping means a <em>slower</em> return: the galvanometer takes \\(5.7\\) s shorted against \\(0.83\\) s at critical.",
"section": "Damping regimes",
"slide": "Worked: the galvanometer's three regimes",
"keys": [
"overdamped"
]
},
{
"term_html": "damped natural frequency",
"html": "\\(\\omega_\\mathrm{d} = \\sqrt{\\omega_0^2-\\gamma^2/4} &lt; \\omega_0\\), the frequency of the free ringing. Damping shifts the frequency only at second order in \\(1/Q\\) — \\(0.031\\%\\) at \\(Q = 20\\) — which is why a lossy oscillator can still be a clock.",
"section": "Damping regimes",
"slide": "Underdamped: ringing, and how fast it dies",
"keys": [
"damped natural frequency"
]
},
{
"term_html": "logarithmic decrement",
"html": "\\(\\delta = \\ln(\\theta_n/\\theta_{n+1}) = \\gamma T_\\mathrm{d}/2 = \\pi\\gamma/\\omega_\\mathrm{d}\\), the log of the ratio of successive maxima, constant from swing to swing. Measuring it is how \\(\\gamma\\) is measured; that the <em>ratio</em> rather than the difference is constant is the test that the damping really is linear in the velocity.",
"section": "Damping regimes",
"slide": "Underdamped: ringing, and how fast it dies",
"keys": [
"logarithmic decrement"
]
},
{
"term_html": "quality factor",
"html": "\\(Q = \\omega_0/\\gamma\\). Two exact readings — the resonant gain over the static deflection, and \\(\\omega_0\\) divided by the half-power width — and two approximate ones, good to \\(O(1/Q)\\): radians of oscillation per \\(e\\)-fold of energy, and \\(2\\pi\\) times stored energy over energy lost per cycle. At \\(Q = 20\\) the last is \\(16.5\\%\\) out.",
"section": "Damping regimes",
"slide": "\\(Q\\): one number for how good the oscillator is",
"keys": [
"quality factor"
]
},
{
"term_html": "transient",
"html": "The \\(\\ker L\\) part of a driven solution. It carries the initial conditions and decays like \\(e^{-\\gamma t/2}\\), so after a few decay times the oscillator has forgotten how it started.",
"section": "Driving, and resonance",
"slide": "Transient plus steady state",
"keys": [
"transient"
]
},
{
"term_html": "steady state",
"html": "The surviving particular solution, the same for every initial condition: the unique solution bounded on all of \\(\\mathbb{R}\\) when \\(\\gamma &gt; 0\\). It is what makes a resonance curve a property of the system rather than of the experiment.",
"section": "Driving, and resonance",
"slide": "Transient plus steady state",
"keys": [
"steady state"
]
},
{
"term_html": "frequency response",
"html": "\\(\\chi(\\omega) = 1/p(i\\omega) = 1/(\\omega_0^2-\\omega^2+i\\gamma\\omega)\\), so that the steady state of \\(Lx = F_0\\cos\\omega t\\) is \\(F_0\\operatorname{Re}[\\chi e^{i\\omega t}] = F_0|\\chi|\\cos(\\omega t - \\varphi)\\). Dimensions \\(\\mathrm{T^2}\\); it tends to \\(1/\\omega_0^2\\) as \\(\\omega\\to0\\) and to \\(-1/\\omega^2\\) as \\(\\omega\\to\\infty\\).",
"section": "Driving, and resonance",
"slide": "The steady state, in one line",
"keys": [
"frequency response"
]
},
{
"term_html": "resonance",
"html": "The peak of a response curve. \\(|\\chi|\\) peaks at \\(\\omega_{\\text{peak}} = \\sqrt{\\omega_0^2-\\gamma^2/2}\\), and only if \\(Q &gt; 1/\\sqrt2\\); the velocity amplitude and the absorbed power peak exactly at \\(\\omega_0\\), for every \\(\\gamma\\). Three distinct frequencies — \\(\\omega_0\\), \\(\\omega_\\mathrm{d}\\), \\(\\omega_{\\text{peak}}\\) — and naming which one is meant is compulsory.",
"section": "Driving, and resonance",
"slide": "The response curve, and where the peak really is",
"keys": [
"resonance"
]
},
{
"term_html": "phase lag",
"html": "\\(\\varphi = \\arg(\\omega_0^2-\\omega^2+i\\gamma\\omega) \\in (0,\\pi)\\), by which the response follows the drive. It is exactly \\(\\pi/2\\) at \\(\\omega_0\\) whatever the damping, and sweeps from \\(0\\) (the drive fights the spring) to \\(\\pi\\) (it fights the inertia). Its slope there is \\(2Q/\\omega_0\\), which is why phase detection locates a resonance better than amplitude does.",
"section": "Driving, and resonance",
"slide": "The phase lag, and what it is good for",
"keys": [
"phase lag"
]
},
{
"term_html": "half-power width",
"html": "The width of the absorbed-power curve at half its maximum: \\(\\Delta\\omega = \\gamma\\) exactly, the half-power points being \\(\\mp\\gamma/2 + \\sqrt{\\omega_0^2+\\gamma^2/4}\\), and \\(\\omega_0/\\Delta\\omega = Q\\). They are also the points where the phase lag is \\(\\pi/4\\) and \\(3\\pi/4\\).",
"section": "Driving, and resonance",
"slide": "Velocity, power, and a width that is exactly \\(\\gamma\\)",
"keys": [
"half-power width"
]
},
{
"term_html": "secular term",
"html": "A solution growing like \\(t\\) times an oscillation, appearing when the drive lies in \\(\\ker L\\) so that the exponential ansatz has nothing to hit: for \\(\\gamma = 0\\) and \\(\\omega = \\omega_0\\), \\(x_p = F_0t\\sin(\\omega_0 t)/2\\omega_0\\). Growth is linear, not instant, and the oscillator leaves the harmonic regime long before it becomes infinite. Unit 21 meets these again as a defect to be cured.",
"section": "Driving, and resonance",
"slide": "No damping, driven at \\(\\omega_0\\): the ansatz fails",
"keys": [
"secular term"
]
},
{
"term_html": "impulse",
"html": "\\(\\int f\\,\\mathrm{d}t\\) over a short interval. Delivered from rest it leaves the position unchanged and raises the velocity by its value, whatever the pulse's shape — which is why a ballistic galvanometer measures charge and nothing else about the current.",
"section": "The impulse response",
"slide": "An impulse is a jump in the velocity",
"keys": [
"impulse"
]
},
{
"term_html": "impulse response",
"html": "The function \\(G\\) with \\(G(t) = 0\\) for \\(t \\le 0\\), continuous, solving \\(LG = 0\\) on \\((0,\\infty)\\) with \\(G(0^+) = 0\\) and \\(\\dot G(0^+) = 1\\). Unique, because \\(\\mathrm{ev}\\) is a bijection, and equal to \\((e^{\\lambda_+t}-e^{\\lambda_-t})/(\\lambda_+-\\lambda_-)\\); underdamped this is \\(e^{-\\gamma t/2}\\sin(\\omega_\\mathrm{d}t)/\\omega_\\mathrm{d}\\), critically damped \\(te^{-\\omega_0t}\\). Also called the Green's function of \\(L\\); the defining jump is in the <em>derivative</em> because \\(L\\) is second order.",
"section": "The impulse response",
"slide": "The Green's function, defined and computed",
"keys": [
"impulse response"
]
},
{
"term_html": "convolution",
"html": "\\((G*f)(t) = \\int_{-\\infty}^{\\infty}G(t-s)f(s)\\,\\mathrm{d}s\\), commutative by the substitution \\(s \\mapsto t-s\\). For a causal \\(G\\) the upper limit collapses to \\(t\\).",
"section": "The impulse response",
"slide": "Duhamel: convolution solves everything",
"keys": [
"convolution"
]
},
{
"term_html": "Duhamel's principle",
"html": "\\(x = G*f\\) is the solution of \\(Lx = f\\) from rest: chop the drive into slivers, treat each as an impulse, and superpose. Proved here by showing that variation of parameters' kernel \\(K(t,s)\\) equals \\(G(t-s)\\) when the coefficients are constant.",
"section": "The impulse response",
"slide": "Duhamel: convolution solves everything",
"keys": [
"duhamel's principle"
]
},
{
"term_html": "linear time-invariant",
"html": "A linear operator commuting with time translation, which a constant-coefficient \\(L\\) is. Such an operator acts by convolution with a single function, so measuring one ring-down characterises the system completely.",
"section": "The impulse response",
"slide": "Duhamel: convolution solves everything",
"keys": [
"linear time-invariant"
]
},
{
"term_html": "causality",
"html": "\\(G(t) = 0\\) for \\(t &lt; 0\\) — no response before the kick. Its consequence for the frequency response: the transform \\(\\hat G(\\omega) = \\int_0^\\infty G(\\tau)e^{-i\\omega\\tau}\\,\\mathrm{d}\\tau\\) converges, underdamped, for every complex \\(\\omega\\) with \\(\\operatorname{Im}\\omega &lt; \\gamma/2\\) (in every regime, on the closed lower half-plane), so \\(\\chi\\) has no singularity in the closed lower half-plane and its poles \\(\\pm\\omega_\\mathrm{d} + i\\gamma/2\\) sit above the real axis. That analyticity forces a relation between \\(\\operatorname{Re}\\chi\\) and \\(\\operatorname{Im}\\chi\\) — the Kramers–Kronig relations — is <em>stated and not proved here</em>; it needs unit 20.",
"section": "The impulse response",
"slide": "Causality, and the promissory note to unit 20",
"keys": [
"causality"
]
}
];
