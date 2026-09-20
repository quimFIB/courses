// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "Hénon–Heiles system",
"html": "\\(H = \\tfrac12(p_x^2+p_y^2) + \\tfrac12(x^2+y^2) + x^2y - \\tfrac13y^3\\): two degrees of freedom, written down by Hénon and Heiles in 1964 as the cubic truncation of an axially symmetric galactic potential. Dimensionless; restoring units, energies are measured in \\(m\\omega^2a^2\\) and rates in \\(\\omega\\). The only known integral is \\(H\\).",
"section": "Overview",
"slide": "Determinism was the easy part",
"keys": [
"hénon–heiles system"
]
},
{
"term_html": "in involution",
"html": "Two functions on phase space with \\(\\{F,G\\} = 0\\). For integrals of \\(H\\) this says their flows commute, which is what forces the geometry of the level set.",
"section": "What it means to solve a system",
"slide": "Integrals in involution",
"keys": [
"in involution"
]
},
{
"term_html": "completely integrable",
"html": "A system with \\(n\\) degrees of freedom admitting \\(n\\) functions \\(F_1 = H, \\dots, F_n\\), pairwise in involution, with linearly independent differentials at every point of an open set \\(U\\). A property of a system <em>and a domain</em>: every system is integrable on a small enough flow box.",
"section": "What it means to solve a system",
"slide": "Complete integrability, defined",
"keys": [
"completely integrable"
]
},
{
"term_html": "Liouville–Arnold theorem",
"html": "If \\(F_1 = H,\\dots,F_n\\) are in involution with independent differentials, each compact connected common level set is diffeomorphic to \\(\\mathbb T^n\\), the flow on it is linear in suitable angles, and nearby there are canonical coordinates \\((\\vec I,\\vec\\theta)\\) with \\(H = H(\\vec I)\\). Liouville 1855 (the quadratures), Arnold 1963 (the topology).",
"section": "What it means to solve a system",
"slide": "Liouville and Arnold: the level set is a torus",
"keys": [
"liouville–arnold theorem"
]
},
{
"term_html": "invariant torus",
"html": "A compact connected common level set of \\(n\\) integrals in involution, carrying the straight-line flow \\(\\dot{\\vec\\theta} = \\vec\\omega\\). Called <em>resonant</em> when \\(\\vec k\\cdot\\vec\\omega = 0\\) for some nonzero integer vector \\(\\vec k\\), and <em>non-resonant</em> otherwise, in which case every orbit on it is dense.",
"section": "What it means to solve a system",
"slide": "Liouville and Arnold: the level set is a torus",
"keys": [
"invariant torus"
]
},
{
"term_html": "action–angle variables",
"html": "The canonical coordinates \\((\\vec I,\\vec\\theta)\\) of the Liouville–Arnold theorem, with \\(I_i = \\frac1{2\\pi}\\oint_{\\gamma_i} \\vec p\\cdot\\mathrm d\\vec q\\) over a generating loop and \\(\\omega_i = \\partial H/\\partial I_i\\). \\(I\\) has the dimensions of an action, \\(\\theta\\) is an angle, so \\(\\omega\\) is a frequency.",
"section": "What it means to solve a system",
"slide": "Liouville and Arnold: the level set is a torus",
"keys": [
"action–angle variables"
]
},
{
"term_html": "Poincaré section",
"html": "A hypersurface \\(\\Sigma\\) transverse to a flow, used to replace the flow by the map that sends each point of \\(\\Sigma\\) to its next crossing. For a two-degree-of-freedom system, \\(\\Sigma\\) inside a fixed energy surface is two-dimensional and can be drawn.",
"section": "Looking at a flow through a plane",
"slide": "The section and its return map",
"keys": [
"poincaré section"
]
},
{
"term_html": "transverse (transversality)",
"html": "The condition that the vector field is nowhere tangent to \\(\\Sigma\\). It makes the return time smooth, by the implicit function theorem, and it is what the sign condition \\(\\dot x &gt; 0\\) enforces for the running example.",
"section": "Looking at a flow through a plane",
"slide": "The section and its return map",
"keys": [
"transverse (transversality)",
"transverse",
"transversality"
]
},
{
"term_html": "return map",
"html": "\\(P(z) = \\varphi_{\\tau(z)}(z)\\), where \\(\\tau(z)\\) is the first positive time at which the orbit through \\(z\\in\\Sigma\\) meets \\(\\Sigma\\) again. Also called the first-return or Poincaré map.",
"section": "Looking at a flow through a plane",
"slide": "The section and its return map",
"keys": [
"return map"
]
},
{
"term_html": "area-preserving map",
"html": "A map of a plane region with \\(\\det DP \\equiv 1\\). The return map of a two-degree-of-freedom Hamiltonian flow on an energy surface is one; the proof uses only Liouville's theorem and the chain rule. Consequences: no attractors, recurrence, and fixed points that are elliptic or hyperbolic and never spiral.",
"section": "Looking at a flow through a plane",
"slide": "The return map preserves area",
"keys": [
"area-preserving map"
]
},
{
"term_html": "island chain",
"html": "\\(q\\) closed curves visited in turn by the return map, surrounding \\(q\\) elliptic fixed points of \\(P^q\\). The remnant of a resonant torus, with \\(q\\) hyperbolic points between the islands.",
"section": "Looking at a flow through a plane",
"slide": "What integrability looks like on a section",
"keys": [
"island chain"
]
},
{
"term_html": "chaotic sea",
"html": "A region of the section in which the crossings of a <em>single</em> orbit spread over an area rather than lying on a curve. Its presence on an open set refutes the existence of a second smooth integral there; the absence of one proves nothing.",
"section": "Looking at a flow through a plane",
"slide": "What integrability looks like on a section",
"keys": [
"chaotic sea"
]
},
{
"term_html": "variational equation",
"html": "\\(\\dot M = DX(\\varphi_t(z_0))\\,M\\), \\(M(0) = I\\), satisfied by \\(M(t) = D\\varphi_t(z_0)\\). Unlike unit 02's linearisation about an equilibrium, the coefficient matrix depends on \\(t\\), so there is no eigenvalue to read off.",
"section": "Measuring sensitivity",
"slide": "The linearised flow",
"keys": [
"variational equation"
]
},
{
"term_html": "Lyapunov exponent",
"html": "\\(\\lambda(z_0,\\delta_0) = \\limsup_{t\\to\\infty}\\frac1t \\ln\\lVert D\\varphi_t(z_0)\\delta_0\\rVert\\). Independent of the norm, constant along an orbit, and taking at most \\(2n\\) values. For a Hamiltonian system the spectrum is symmetric about zero and sums to zero, so a two-degree-of-freedom system has the single spectrum \\(\\{\\lambda_1, 0, 0, -\\lambda_1\\}\\).",
"section": "Measuring sensitivity",
"slide": "The Lyapunov exponent",
"keys": [
"lyapunov exponent"
]
},
{
"term_html": "chaotic",
"html": "Said of an orbit with \\(\\lambda_1 &gt; 0\\). Neither randomness nor non-uniqueness nor unboundedness: the solution is unique, deterministic and confined, and what grows exponentially is the uncertainty in which orbit it is.",
"section": "Measuring sensitivity",
"slide": "The Lyapunov exponent",
"keys": [
"chaotic"
]
},
{
"term_html": "Benettin's algorithm",
"html": "Integrate the variational equation for a fixed interval \\(\\Delta\\), record the growth factor \\(a_k\\), renormalise the vector to unit length, repeat; then \\(\\lambda_1 \\approx \\frac1{N\\Delta}\\sum_k \\ln a_k\\). Exactly equal to the definition by linearity, and necessary in practice because \\(\\lVert\\delta\\rVert\\) would otherwise overflow.",
"section": "Measuring sensitivity",
"slide": "Computing it without overflowing",
"keys": [
"benettin's algorithm"
]
},
{
"term_html": "Lyapunov time",
"html": "\\(t_\\lambda = 1/\\lambda_1\\), the time in which an error grows by a factor \\(e\\). Twenty-three time units for the running example at \\(E = 1/8\\); about five million years for the inner solar system.",
"section": "Measuring sensitivity",
"slide": "What a positive exponent does not say",
"keys": [
"lyapunov time"
]
},
{
"term_html": "small denominators",
"html": "The factors \\(\\vec k\\cdot\\vec\\omega\\) appearing in the denominator of the first-order generating function that would remove the angle dependence of a perturbation. Zero on a resonant torus and arbitrarily small near one, which is why the classical perturbation series diverges.",
"section": "Perturbing an integrable system",
"slide": "The small denominators",
"keys": [
"small denominators"
]
},
{
"term_html": "Diophantine condition",
"html": "\\(|\\vec k\\cdot\\vec\\omega| \\ge \\gamma\\lVert\\vec k\\rVert^{-\\tau}\\) for every nonzero integer vector \\(\\vec k\\): a quantitative statement that \\(\\vec\\omega\\) stays away from every resonance. For \\(\\tau &gt; 1\\) the frequencies failing it can be covered by intervals of total length \\(O(\\gamma)\\), so almost all frequencies satisfy it. The golden ratio satisfies it best, by Hurwitz's theorem.",
"section": "Perturbing an integrable system",
"slide": "Rational frequencies are the enemy, and there are few of them",
"keys": [
"diophantine condition"
]
},
{
"term_html": "KAM theorem",
"html": "For an analytic \\(H_0(\\vec I) + \\varepsilon H_1(\\vec I,\\vec\\theta)\\) with \\(H_0\\) non-degenerate and \\(\\varepsilon\\) small, every torus whose frequencies are \\((\\gamma,\\tau)\\)-Diophantine with \\(\\gamma \\gtrsim \\sqrt\\varepsilon\\) survives as a slightly deformed invariant torus, and the survivors fill all but a set of measure \\(O(\\sqrt\\varepsilon)\\). Kolmogorov 1954, Arnold 1963, Moser 1962; <em>cited</em>, not proved here.",
"section": "Perturbing an integrable system",
"slide": "KAM, stated honestly",
"keys": [
"kam theorem"
]
},
{
"term_html": "non-degenerate",
"html": "Of \\(H_0\\): \\(\\det(\\partial^2 H_0/\\partial I_i\\partial I_j)\\ne 0\\), so that the frequencies genuinely vary from torus to torus. The isotropic oscillator fails it, which is why the standard KAM statement does not apply to the low-energy limit of the running example as it stands.",
"section": "Perturbing an integrable system",
"slide": "KAM, stated honestly",
"keys": [
"non-degenerate"
]
},
{
"term_html": "Poincaré–Birkhoff theorem",
"html": "An area-preserving twist map of an annulus that rotates the two boundary circles in opposite senses has at least two fixed points. Applied to \\(P^q\\), it says a resonant invariant circle is replaced by an even number of periodic points, alternately elliptic and hyperbolic — an island chain. Poincaré 1912, Birkhoff 1913; <em>cited</em>.",
"section": "Perturbing an integrable system",
"slide": "What becomes of the resonant tori",
"keys": [
"poincaré–birkhoff theorem"
]
},
{
"term_html": "homoclinic point",
"html": "A point other than \\(z^*\\) lying in both the stable and the unstable set of a hyperbolic fixed point \\(z^*\\). Its whole orbit is homoclinic too, so one such point forces infinitely many.",
"section": "Perturbing an integrable system",
"slide": "The tangle Poincaré found",
"keys": [
"homoclinic point"
]
},
{
"term_html": "transversal homoclinic point",
"html": "A homoclinic point at which the stable and unstable sets cross transversally. By Smale's theorem it forces a horseshoe: an invariant Cantor set carrying the shift on two symbols, with infinitely many periodic orbits and a positive Lyapunov exponent. This is the configuration Poincaré had wrongly excluded in the prize memoir.",
"section": "Perturbing an integrable system",
"slide": "The tangle Poincaré found",
"keys": [
"transversal homoclinic point"
]
},
{
"term_html": "Melnikov function",
"html": "\\(M(t_0) = \\int_{-\\infty}^{\\infty}\\{H_0,H_1\\}(z_0(t), t+t_0)\\,\\mathrm dt\\), the first-order gap between the stable and unstable sets along an unperturbed homoclinic loop. A simple zero implies a transversal homoclinic point for small \\(\\varepsilon\\). Melnikov 1963; <em>cited</em>.",
"section": "Perturbing an integrable system",
"slide": "The tangle Poincaré found",
"keys": [
"melnikov function"
]
},
{
"term_html": "standard map",
"html": "\\(p_{n+1} = p_n + K\\sin\\theta_n\\), \\(\\theta_{n+1} = \\theta_n + p_{n+1}\\bmod 2\\pi\\): the kicked rotor, the simplest area-preserving twist map with one parameter. Its last invariant circle, the one with golden rotation number, breaks at \\(K_c = 0.971635406\\) (Greene).",
"section": "Perturbing an integrable system",
"slide": "The kicked rotor and the standard map",
"keys": [
"standard map"
]
},
{
"term_html": "Chirikov's overlap criterion",
"html": "Chaos becomes global when neighbouring resonance bands touch: \\(2\\Delta p \\ge \\delta p\\). For the standard map the primary half-width is \\(2\\sqrt K\\) and the spacing \\(2\\pi\\), giving \\(K \\ge \\pi^2/4 = 2.4674\\) — high by a factor \\(2.54\\) against Greene's \\(0.9716\\), because higher-order resonances and separatrix layers help bridge the gap.",
"section": "Perturbing an integrable system",
"slide": "Chirikov: when do resonances overlap?",
"keys": [
"chirikov's overlap criterion"
]
},
{
"term_html": "cantorus",
"html": "What an invariant circle becomes just past its critical parameter: an invariant Cantor set with the same rotation number, through whose gaps orbits leak at a rate vanishing like \\((K - K_c)^{3.01}\\). It is why a finite transport experiment always reports a threshold that is too high. Aubry and Mather, 1982; <em>cited</em>.",
"section": "Perturbing an integrable system",
"slide": "The last torus, numerically",
"keys": [
"cantorus"
]
},
{
"term_html": "mean-motion resonance",
"html": "A commensurability \\(p\\,T_a = q\\,T_{\\mathrm J}\\) between two orbital periods. By Kepler's third law it sits at \\(a = a_{\\mathrm J}(q/p)^{2/3}\\).",
"section": "Out in the solar system",
"slide": "The Kirkwood gaps",
"keys": [
"mean-motion resonance"
]
},
{
"term_html": "Kirkwood gaps",
"html": "The depleted bands in the asteroid belt at the strong mean-motion resonances with Jupiter — \\(2.065\\), \\(2.502\\), \\(2.825\\), \\(2.958\\) and \\(3.279\\) AU for \\(4\\!:\\!1\\), \\(3\\!:\\!1\\), \\(5\\!:\\!2\\), \\(7\\!:\\!3\\) and \\(2\\!:\\!1\\). Found by Kirkwood in 1866; explained by the chaotic growth of eccentricity at the resonance, computed by Wisdom in 1983. A resonance need not clear an orbit: the \\(3\\!:\\!2\\) and \\(1\\!:\\!1\\) resonances hold the Hilda family and the Trojans instead.",
"section": "Out in the solar system",
"slide": "The Kirkwood gaps",
"keys": [
"kirkwood gaps"
]
}
];
