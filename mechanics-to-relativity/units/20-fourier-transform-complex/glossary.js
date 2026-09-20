// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "Fourier transform",
"html": "For absolutely integrable \\(f\\), \\(\\hat f(\\omega) = \\int f(t)e^{i\\omega t}\\,\\mathrm dt\\). This course's sign: a single frequency is \\(e^{-i\\omega t}\\), and its spectrum sits at \\(+\\omega\\). Unit 06 used the opposite sign; \\(\\chi_{20}(\\omega) = \\chi_{06}(-\\omega)\\).",
"section": "The Fourier transform",
"slide": "From one frequency to all of them",
"keys": [
"fourier transform"
]
},
{
"term_html": "Riemann–Lebesgue lemma",
"html": "The transform of an absolutely integrable function is continuous and tends to zero at infinity. Proved by approximating with step functions.",
"section": "The Fourier transform",
"slide": "From one frequency to all of them",
"keys": [
"riemann–lebesgue lemma"
]
},
{
"term_html": "Fourier inversion theorem",
"html": "If \\(f\\) is continuous and \\(f, \\hat f\\) are absolutely integrable, \\(f(t) = \\frac1{2\\pi}\\int\\hat f(\\omega)e^{-i\\omega t}\\,\\mathrm d\\omega\\). So the transform is injective.",
"section": "The Fourier transform",
"slide": "Inversion",
"keys": [
"fourier inversion theorem"
]
},
{
"term_html": "Plancherel's theorem",
"html": "\\(\\int|f|^2\\,\\mathrm dt = \\frac1{2\\pi}\\int|\\hat f|^2\\,\\mathrm d\\omega\\), and the polarised form \\(\\int f\\bar g = \\frac1{2\\pi}\\int\\hat f\\bar{\\hat g}\\): energy in time equals energy in frequency.",
"section": "The Fourier transform",
"slide": "Plancherel and convolution",
"keys": [
"plancherel's theorem"
]
},
{
"term_html": "convolution theorem",
"html": "\\(\\widehat{f*g} = \\hat f\\hat g\\). Applied to \\(x = G * f\\), it identifies \\(\\hat G = \\chi\\).",
"section": "The Fourier transform",
"slide": "Plancherel and convolution",
"keys": [
"convolution theorem"
]
},
{
"term_html": "uncertainty relation",
"html": "\\(\\Delta t\\,\\Delta\\omega\\ge\\frac12\\) for normalised \\(f\\), with spreads measured in \\(|f|^2\\) and \\(|\\hat f|^2/2\\pi\\); equality exactly for Gaussians. Proved by one integration by parts and Cauchy–Schwarz.",
"section": "The Fourier transform",
"slide": "The uncertainty relation",
"keys": [
"uncertainty relation"
]
},
{
"term_html": "test functions",
"html": "\\(\\mathcal D = C_c^\\infty(\\mathbb R)\\), smooth functions of bounded support, with convergence meaning common bounded support and uniform convergence of every derivative. The bump \\(e^{-1/(1-t^2)}\\) shows they exist.",
"section": "Distributions",
"slide": "Test functions and distributions",
"keys": [
"test functions"
]
},
{
"term_html": "distribution",
"html": "A continuous linear functional on test functions, \\(\\varphi \\mapsto \\langle T,\\varphi\\rangle\\). Every locally integrable function is one, by \\(\\varphi\\mapsto\\int f\\varphi\\).",
"section": "Distributions",
"slide": "Test functions and distributions",
"keys": [
"distribution"
]
},
{
"term_html": "Dirac delta",
"html": "The distribution \\(\\langle\\delta,\\varphi\\rangle = \\varphi(0)\\). Not a function; the limit, in distributions, of pulses of unit area.",
"section": "Distributions",
"slide": "Test functions and distributions",
"keys": [
"dirac delta"
]
},
{
"term_html": "principal value",
"html": "\\(\\langle\\mathrm{PV}\\frac1t,\\varphi\\rangle = \\lim_{\\varepsilon \\to 0}\\int_{|t|&gt;\\varepsilon}\\varphi/t\\), the symmetric excision that makes \\(1/t\\) a distribution.",
"section": "Distributions",
"slide": "Test functions and distributions",
"keys": [
"principal value"
]
},
{
"term_html": "distributional derivative",
"html": "\\(\\langle T',\\varphi\\rangle = -\\langle T,\\varphi'\\rangle\\). Integration by parts made a definition; every distribution has derivatives of all orders, and \\(H' = \\delta\\).",
"section": "Distributions",
"slide": "Derivatives by duality, and $LG = \\delta$",
"keys": [
"distributional derivative"
]
},
{
"term_html": "jump formula",
"html": "For a piecewise \\(C^1\\) function, \\(f' = \\{f'\\} + [f]\\,\\delta\\): classical derivative plus the jump times a delta. Applied twice, it turns unit 06's jump condition into the theorem \\(LG = \\delta\\).",
"section": "Distributions",
"slide": "Derivatives by duality, and $LG = \\delta$",
"keys": [
"jump formula"
]
},
{
"term_html": "tempered distribution",
"html": "A continuous linear functional on the Schwartz class \\(\\mathcal S\\) of rapidly decreasing smooth functions. Its transform is defined by duality, \\(\\langle\\hat T,\\varphi\\rangle = \\langle T,\\hat\\varphi\\rangle\\): \\(\\hat\\delta = 1\\), \\(\\hat 1 = 2\\pi\\delta\\), \\(\\widehat{\\operatorname{sgn}} = 2i\\,\\mathrm{PV}\\frac1\\omega\\).",
"section": "Distributions",
"slide": "Tempered distributions and their transforms",
"keys": [
"tempered distribution"
]
},
{
"term_html": "Sokhotski–Plemelj",
"html": "\\(\\lim_{\\varepsilon\\to0^+}1/(x\\mp i\\varepsilon) = \\mathrm{PV}\\frac1x \\pm i\\pi\\delta\\) as distributions. It is why an undamped oscillator absorbs only at resonance, as a spike.",
"section": "Distributions",
"slide": "Tempered distributions and their transforms",
"keys": [
"sokhotski–plemelj"
]
},
{
"term_html": "holomorphic",
"html": "Complex-differentiable at every point of an open set: the difference quotient has a limit as \\(h\\to0\\) through complex values. Entire: holomorphic on all of \\(\\mathbb C\\).",
"section": "Holomorphic functions",
"slide": "Complex differentiability, and Cauchy–Riemann",
"keys": [
"holomorphic"
]
},
{
"term_html": "Cauchy–Riemann equations",
"html": "\\(u_x = v_y\\), \\(u_y = -v_x\\) for \\(f = u + iv\\) complex-differentiable; conversely, with continuous partials they imply holomorphy.",
"section": "Holomorphic functions",
"slide": "Complex differentiability, and Cauchy–Riemann",
"keys": [
"cauchy–riemann equations"
]
},
{
"term_html": "contour integral",
"html": "\\(\\int_\\gamma f\\,\\mathrm dz = \\int_a^b f(\\gamma(s))\\gamma'(s)\\,\\mathrm ds\\) for a piecewise \\(C^1\\) curve — an ordinary one-variable integral.",
"section": "Holomorphic functions",
"slide": "Integrals along curves",
"keys": [
"contour integral"
]
},
{
"term_html": "ML inequality",
"html": "\\(|\\int_\\gamma f\\,\\mathrm dz| \\le \\max_\\gamma|f|\\cdot L(\\gamma)\\). Every arc estimate is this, used carefully.",
"section": "Holomorphic functions",
"slide": "Integrals along curves",
"keys": [
"ml inequality"
]
},
{
"term_html": "Goursat's theorem",
"html": "The integral of a holomorphic function round the boundary of a triangle in its domain is zero. Proved by subdivision, using only the existence of \\(f'\\).",
"section": "Holomorphic functions",
"slide": "Goursat's theorem",
"keys": [
"goursat's theorem"
]
},
{
"term_html": "Cauchy's theorem",
"html": "On a convex open set a holomorphic function has a primitive, so its integral round every closed curve is zero. Extended to keyholes and indented contours by cutting; the general homology form is cited from Ahlfors.",
"section": "Holomorphic functions",
"slide": "Cauchy's theorem and the integral formula",
"keys": [
"cauchy's theorem"
]
},
{
"term_html": "Cauchy's integral formula",
"html": "\\(f(z) = \\frac1{2\\pi i}\\oint \\frac{f(\\zeta)}{\\zeta - z}\\mathrm d\\zeta\\) round a circle enclosing \\(z\\): interior values are fixed by boundary values.",
"section": "Holomorphic functions",
"slide": "Cauchy's theorem and the integral formula",
"keys": [
"cauchy's integral formula"
]
},
{
"term_html": "analytic",
"html": "Equal to its Taylor series near each point. Every holomorphic function is analytic, with radius at least the distance to the nearest singularity.",
"section": "Holomorphic functions",
"slide": "What the integral formula buys",
"keys": [
"analytic"
]
},
{
"term_html": "Liouville's theorem",
"html": "A bounded entire function is constant. One line from the Cauchy estimates.",
"section": "Holomorphic functions",
"slide": "What the integral formula buys",
"keys": [
"liouville's theorem"
]
},
{
"term_html": "fundamental theorem of algebra",
"html": "Every nonconstant polynomial has a complex root — otherwise its reciprocal would be bounded and entire. Unit 06 and unit 07 cited it; this is its proof.",
"section": "Holomorphic functions",
"slide": "What the integral formula buys",
"keys": [
"fundamental theorem of algebra"
]
},
{
"term_html": "maximum modulus",
"html": "A holomorphic function on a connected open set whose modulus has a local maximum is constant.",
"section": "Holomorphic functions",
"slide": "What the integral formula buys",
"keys": [
"maximum modulus"
]
},
{
"term_html": "Morera",
"html": "A continuous function whose integral round every triangle vanishes is holomorphic. The standard way to show a function defined by an integral is holomorphic.",
"section": "Holomorphic functions",
"slide": "What the integral formula buys",
"keys": [
"morera"
]
},
{
"term_html": "identity theorem",
"html": "Two holomorphic functions on a connected open set that agree on a set with a limit point agree everywhere.",
"section": "Holomorphic functions",
"slide": "Analytic continuation",
"keys": [
"identity theorem"
]
},
{
"term_html": "analytic continuation",
"html": "A holomorphic extension of a function to a larger domain; unique when it exists, by the identity theorem. It gives the Gaussian integral with complex width.",
"section": "Holomorphic functions",
"slide": "Analytic continuation",
"keys": [
"analytic continuation"
]
},
{
"term_html": "Laurent series",
"html": "\\(f = \\sum_{n\\in\\mathbb Z}a_n(z - z_0)^n\\) on an annulus; the negative powers are the principal part. Isolated singularities are removable, poles or essential according to the principal part.",
"section": "Singularities and residues",
"slide": "Laurent series and isolated singularities",
"keys": [
"laurent series"
]
},
{
"term_html": "residue",
"html": "The coefficient \\(a_{-1}\\) of the Laurent series, equal to \\(\\frac1{2\\pi i}\\) times the integral round a small circle. For a simple pole of \\(g/h\\), \\(g(z_0)/h'(z_0)\\).",
"section": "Singularities and residues",
"slide": "Laurent series and isolated singularities",
"keys": [
"residue"
]
},
{
"term_html": "residue theorem",
"html": "\\(\\oint_\\gamma f = 2\\pi i\\sum\\mathrm{Res}\\) over the singularities inside an anticlockwise contour; \\(-2\\pi i\\) clockwise.",
"section": "Singularities and residues",
"slide": "The residue theorem",
"keys": [
"residue theorem"
]
},
{
"term_html": "Jordan's lemma",
"html": "On the upper semicircle of radius \\(R\\), \\(|\\int g(z)e^{iaz}\\mathrm dz|\\le\\pi\\max|g|/a\\) for \\(a &gt; 0\\): enough to kill the arc when \\(g\\) only tends to zero, as \\(1/R\\).",
"section": "Singularities and residues",
"slide": "Closing the contour: Jordan's lemma",
"keys": [
"jordan's lemma"
]
},
{
"term_html": "Jordan's inequality",
"html": "\\(\\sin\\theta\\ge2\\theta/\\pi\\) on \\([0,\\pi/2]\\), from concavity; the engine of Jordan's lemma and of the Fresnel octant estimate.",
"section": "Singularities and residues",
"slide": "Closing the contour: Jordan's lemma",
"keys": [
"jordan's inequality"
]
},
{
"term_html": "indentation lemma",
"html": "A small arc of angle \\(\\alpha\\) round a simple pole on the contour contributes \\(i\\alpha\\) times the residue in the limit — half a residue for a semicircle.",
"section": "Singularities and residues",
"slide": "Worked: the Dirichlet integral, with an indentation",
"keys": [
"indentation lemma"
]
},
{
"term_html": "branch cut",
"html": "A curve removed from the plane so that a multivalued function such as \\(\\log z\\) or \\(z^a\\) has a single-valued holomorphic branch on what remains. The cut is a choice.",
"section": "Singularities and residues",
"slide": "Branch points and cuts",
"keys": [
"branch cut"
]
},
{
"term_html": "branch point",
"html": "A point round which continuing a function does not return it to its starting value: \\(z^a\\) is multiplied by \\(e^{2\\pi ia}\\) per turn round \\(0\\). Not a choice.",
"section": "Singularities and residues",
"slide": "Branch points and cuts",
"keys": [
"branch point"
]
},
{
"term_html": "argument principle",
"html": "\\(\\frac1{2\\pi i}\\oint f'/f = Z - P\\): zeros minus poles inside, the winding number of \\(f(\\gamma)\\) round \\(0\\).",
"section": "Singularities and residues",
"slide": "Counting zeros: the argument principle and Rouché",
"keys": [
"argument principle"
]
},
{
"term_html": "Rouché's theorem",
"html": "If \\(|g| &lt; |f|\\) on \\(\\gamma\\), then \\(f\\) and \\(f + g\\) have the same number of zeros inside. It proves the Laplace limit.",
"section": "Singularities and residues",
"slide": "Counting zeros: the argument principle and Rouché",
"keys": [
"rouché's theorem"
]
},
{
"term_html": "\\(i0\\) prescription",
"html": "Replacing \\(\\omega\\) by \\(\\omega + i0\\) in a response with poles on the real axis: the contour passes above them, and the inverse transform is the retarded, causal one.",
"section": "Causality",
"slide": "The step function, explained",
"keys": [
"i0 prescription"
]
},
{
"term_html": "causality theorem",
"html": "For \\(G\\), \\(tG\\), \\(\\chi\\) integrable: \\(G = 0\\) for \\(t &lt; 0\\) iff \\(\\chi\\) is holomorphic in the upper half-plane and decays there iff \\(\\chi\\) satisfies the dispersion relations. The sharp square-integrable form is Titchmarsh's theorem.",
"section": "Causality",
"slide": "Causality, analyticity, Kramers–Kronig: one theorem",
"keys": [
"causality theorem"
]
},
{
"term_html": "Kramers–Kronig relations",
"html": "\\(\\chi' = \\frac1\\pi\\mathrm{PV}\\int\\frac{\\chi''(\\omega')}{\\omega' - \\omega}\\mathrm d\\omega'\\) and \\(\\chi'' = -\\frac1\\pi\\mathrm{PV}\\int\\frac{\\chi'(\\omega')}{\\omega' - \\omega}\\mathrm d\\omega'\\): the dispersive and absorptive parts of a causal response are Hilbert transforms of each other.",
"section": "Causality",
"slide": "The dispersion relations, proved",
"keys": [
"kramers–kronig relations"
]
},
{
"term_html": "sum rule",
"html": "An integral identity over the whole absorption spectrum forced by the dispersion relations and a known limit; here \\(\\int_0^\\infty\\omega \\chi''\\,\\mathrm d\\omega = \\pi/2\\), from the free-mass behaviour at high frequency.",
"section": "Causality",
"slide": "Worked: Kramers–Kronig on the galvanometer",
"keys": [
"sum rule"
]
},
{
"term_html": "Sellmeier formula",
"html": "\\(n^2 = 1 + \\sum B_i\\lambda^2/(\\lambda^2 - C_i)\\), a sum of undamped oscillators fitted to a glass. For BK7, resonances at 77.5 nm, 141.5 nm and 10.18 µm.",
"section": "Causality",
"slide": "Why glass separates colours",
"keys": [
"sellmeier formula"
]
},
{
"term_html": "Laplace transform",
"html": "\\(\\mathcal L[f](s) = \\int_0^\\infty f(t)e^{-st}\\mathrm dt\\), holomorphic in a right half-plane; the Fourier transform turned a quarter-turn, with \\(\\chi(\\omega) = \\mathcal L[G](-i\\omega)\\).",
"section": "Causality",
"slide": "The Laplace transform and the Bromwich contour",
"keys": [
"laplace transform"
]
},
{
"term_html": "Bromwich integral",
"html": "\\(f(t) = \\frac1{2\\pi i}\\int_{c-i\\infty}^{c+i\\infty} F(s)e^{st}\\mathrm ds\\), along a vertical line to the right of every singularity. Closing left collects the poles for \\(t &gt; 0\\).",
"section": "Causality",
"slide": "The Laplace transform and the Bromwich contour",
"keys": [
"bromwich integral"
]
},
{
"term_html": "asymptotic expansion",
"html": "\\(f\\sim\\sum a_n\\varphi_n\\) if the error after \\(N\\) terms is \\(O(\\varphi_N)\\) for every \\(N\\) — convergent or not. Unit 21 develops the idea.",
"section": "Asymptotics of integrals",
"slide": "Watson's lemma",
"keys": [
"asymptotic expansion"
]
},
{
"term_html": "Watson's lemma",
"html": "If \\(g(t)\\sim\\sum a_nt^{\\alpha_n}\\) as \\(t\\to0^+\\), then \\(\\int_0^\\infty g e^{-\\lambda t}\\sim\\sum a_n\\Gamma(\\alpha_n+1)\\lambda^{-\\alpha_n-1}\\). Only \\(t\\lesssim1/\\lambda\\) matters.",
"section": "Asymptotics of integrals",
"slide": "Watson's lemma",
"keys": [
"watson's lemma"
]
},
{
"term_html": "Laplace's method",
"html": "\\(\\int g e^{\\lambda h}\\sim g(t_0)e^{\\lambda h(t_0)} \\sqrt{2\\pi/\\lambda|h''(t_0)|}\\) at an interior nondegenerate maximum.",
"section": "Asymptotics of integrals",
"slide": "Laplace's method",
"keys": [
"laplace's method"
]
},
{
"term_html": "Stirling's formula",
"html": "\\(n!\\sim\\sqrt{2\\pi n}(n/e)^n\\), Laplace's method on \\(\\int t^ne^{-t}\\mathrm dt\\); low by \\(0.83\\%\\) at \\(n = 10\\).",
"section": "Asymptotics of integrals",
"slide": "Laplace's method",
"keys": [
"stirling's formula"
]
},
{
"term_html": "stationary phase",
"html": "\\(\\int g e^{i\\lambda\\psi}\\) is dominated by points where \\(\\psi' = 0\\), each contributing \\(g\\sqrt{2\\pi/\\lambda|\\psi''|}\\,e^{i\\lambda \\psi\\pm i\\pi/4}\\), with error \\(O(1/\\lambda)\\). Gives the constants in \\(J_n\\)'s large-\\(x\\) form.",
"section": "Asymptotics of integrals",
"slide": "Stationary phase",
"keys": [
"stationary phase"
]
},
{
"term_html": "saddle point",
"html": "A zero of \\(\\varphi'\\) for holomorphic \\(\\varphi\\); since \\(\\mathrm{Re}\\,\\varphi\\) has no local maximum, the best a contour can do is cross a saddle.",
"section": "Asymptotics of integrals",
"slide": "Steepest descent",
"keys": [
"saddle point"
]
},
{
"term_html": "path of steepest descent",
"html": "The curve through a saddle on which \\(\\mathrm{Im}\\,\\varphi\\) is constant: no oscillation, and \\(\\mathrm{Re}\\,\\varphi\\) falling fastest.",
"section": "Asymptotics of integrals",
"slide": "Steepest descent",
"keys": [
"path of steepest descent"
]
},
{
"term_html": "method of steepest descent",
"html": "Deform the contour through a saddle along the steepest path, justify every arc, and apply Laplace's method there. Finds exponentially small answers that real methods cannot see.",
"section": "Asymptotics of integrals",
"slide": "Steepest descent",
"keys": [
"method of steepest descent"
]
},
{
"term_html": "dispersion relation",
"html": "\\(\\omega = \\omega(k)\\), the frequency of a plane wave of wavenumber \\(k\\) in a medium. (Distinct from the Kramers–Kronig dispersion relations, which share the name.)",
"section": "Asymptotics of integrals",
"slide": "Wave packets: phase and group velocity",
"keys": [
"dispersion relation"
]
},
{
"term_html": "phase velocity",
"html": "\\(v_\\mathrm p = \\omega/k\\), the speed of the crests; \\(c/n\\) for light in glass.",
"section": "Asymptotics of integrals",
"slide": "Wave packets: phase and group velocity",
"keys": [
"phase velocity"
]
},
{
"term_html": "group velocity",
"html": "\\(v_\\mathrm g = \\mathrm d\\omega/\\mathrm dk\\), the speed of a packet, found by stationary phase; \\(c/n_\\mathrm g\\) with \\(n_\\mathrm g = n - \\lambda\\,\\mathrm dn/\\mathrm d\\lambda\\). In BK7 at 587.6 nm, \\(0.64878c\\) against a phase velocity of \\(0.65928c\\).",
"section": "Asymptotics of integrals",
"slide": "Wave packets: phase and group velocity",
"keys": [
"group velocity"
]
}
];
