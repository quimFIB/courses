// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "Hamilton's principal function",
"html": "The action \\(S(q,t) = \\int_{t_0}^{t} L\\,\\mathrm ds\\) along the true path from a fixed \\((q_0, t_0)\\) to \\((q, t)\\), defined where that path is unique and depends smoothly on the endpoint (before any conjugate point). Its derivatives are \\(\\partial_q S = p\\) and \\(\\partial_t S = -H\\): \\(\\mathrm dS = p\\cdot\\mathrm dq - H\\,\\mathrm dt\\).",
"section": "The action as a function of where you end",
"slide": "The action, as a function of its endpoint",
"keys": [
"hamilton's principal function"
]
},
{
"term_html": "Hamilton–Jacobi equation",
"html": "The first-order, nonlinear PDE \\(\\partial_t S + H(q, \\partial_q S, t) = 0\\) for an unknown function \\(S(q,t)\\). Hamilton's principal function solves it; so does every member of a complete integral.",
"section": "The action as a function of where you end",
"slide": "The Hamilton–Jacobi equation",
"keys": [
"hamilton–jacobi equation"
]
},
{
"term_html": "spherical coordinates",
"html": "\\((r,\\theta,\\phi)\\mapsto(r\\sin\\theta\\cos\\phi,\\ r\\sin\\theta\\sin\\phi,\\ r\\cos\\theta)\\), a chart on \\(\\mathbb R^3\\) minus the \\(z\\)-axis, in which \\(\\lVert\\dot{\\vec x}\\rVert^2 = \\dot r^2 + r^2\\dot\\theta^2 + r^2\\sin^2\\theta\\,\\dot\\phi^2\\). Used here only as generalised coordinates.",
"section": "The action as a function of where you end",
"slide": "Kepler's Hamiltonian in spherical coordinates",
"keys": [
"spherical coordinates"
]
},
{
"term_html": "complete integral",
"html": "A family \\(S(q,\\alpha,t)\\), \\(\\alpha\\in\\mathbb R^n\\), of solutions of the Hamilton–Jacobi equation with \\(\\det(\\partial^2S/\\partial q_i\\partial\\alpha_j)\\ne0\\); an additive constant is not counted.",
"section": "The action as a function of where you end",
"slide": "Complete integrals, and the solutions they generate",
"keys": [
"complete integral"
]
},
{
"term_html": "general solution",
"html": "A solution depending on an arbitrary function, produced from a complete integral by taking envelopes over sub-families of the parameters. That every non-singular solution arises so is cited (Courant and Hilbert, vol. II, ch. II).",
"section": "The action as a function of where you end",
"slide": "Complete integrals, and the solutions they generate",
"keys": [
"general solution"
]
},
{
"term_html": "Jacobi's theorem",
"html": "Given a complete integral, the equations \\(\\partial S/\\partial\\alpha = \\beta\\) (constant) define \\(q(t)\\), and with \\(p = \\partial S/\\partial q\\) this solves Hamilton's equations. Proved with the chain rule, Clairaut and the implicit function theorem. Equivalently, \\(S\\) is a type-2 generating function to variables in which the Hamiltonian is zero.",
"section": "The action as a function of where you end",
"slide": "Jacobi's theorem",
"keys": [
"jacobi's theorem"
]
},
{
"term_html": "Hamilton's characteristic function",
"html": "\\(W(q)\\) in \\(S = -Et + W(q)\\), for a time-independent \\(H\\); it solves \\(H(q, \\partial_q W) = E\\), and \\(\\partial_E W = t - t_0\\).",
"section": "The action as a function of where you end",
"slide": "When H does not depend on time",
"keys": [
"hamilton's characteristic function"
]
},
{
"term_html": "abbreviated action",
"html": "\\(W = \\int p\\cdot\\mathrm dq\\) along a trajectory: the action with the energy term removed, which sees only the path and not the timing. Maupertuis' \"action\".",
"section": "The action as a function of where you end",
"slide": "When H does not depend on time",
"keys": [
"abbreviated action"
]
},
{
"term_html": "separable",
"html": "The time-independent Hamilton–Jacobi equation is separable in coordinates \\(q\\) if it has a complete integral \\(W = \\sum_i W_i(q_i, \\alpha)\\); each \\(W_i\\) then solves an ODE in one variable.",
"section": "Separation of variables",
"slide": "Separation: one equation becomes n",
"keys": [
"separable"
]
},
{
"term_html": "Stäckel conditions",
"html": "\\(H = \\sum_i\\psi_i(q)[\\tfrac12p_i^2 + w_i(q_i)]\\) with \\(\\psi\\) the first row of \\(\\Phi^{-1}\\), where row \\(i\\) of the nonsingular matrix \\(\\Phi\\) depends on \\(q_i\\) only. Sufficient for separability (proved); necessary in orthogonal coordinates (cited: Goldstein, 2nd ed., appendix D).",
"section": "Separation of variables",
"slide": "Stäckel's conditions",
"keys": [
"stäckel conditions"
]
},
{
"term_html": "action variable",
"html": "\\(I = \\frac{1}{2\\pi}\\oint p\\,\\mathrm dq\\) round a closed orbit, in the direction of motion: the enclosed phase-space area over \\(2\\pi\\). Dimension of action, \\(\\mathrm{J\\,s}\\).",
"section": "Action–angle variables: frequencies without motion",
"slide": "The action variable",
"keys": [
"action variable"
]
},
{
"term_html": "libration",
"html": "A periodic motion whose phase curve bounds a region of the \\((q,p)\\) plane: an oscillation back and forth between turning points.",
"section": "Action–angle variables: frequencies without motion",
"slide": "The action variable",
"keys": [
"libration"
]
},
{
"term_html": "rotation",
"html": "A periodic motion in which an angle coordinate \\(q\\) increases without bound and the phase curve goes once round the cylinder, like a pendulum going over the top.",
"section": "Action–angle variables: frequencies without motion",
"slide": "The action variable",
"keys": [
"rotation"
]
},
{
"term_html": "frequency theorem",
"html": "\\(\\frac{\\mathrm d}{\\mathrm dE}\\oint p\\,\\mathrm dq = T\\), so \\(\\omega = \\mathrm dE/\\mathrm dI\\): the frequency of a bounded motion is the derivative of the energy with respect to the action.",
"section": "Action–angle variables: frequencies without motion",
"slide": "The frequency is a derivative",
"keys": [
"frequency theorem"
]
},
{
"term_html": "angle variable",
"html": "\\(w = \\partial W(q,I)/\\partial I\\), the coordinate conjugate to \\(I\\). It increases uniformly, \\(\\dot w = \\omega\\), and by \\(2\\pi\\) per cycle.",
"section": "Action–angle variables: frequencies without motion",
"slide": "The angle conjugate to it",
"keys": [
"angle variable"
]
},
{
"term_html": "action–angle variables",
"html": "The canonical pair \\((w, I)\\), generated by \\(W(q, I)\\), in which the Hamiltonian depends on \\(I\\) alone: \\(\\dot I = 0\\), \\(\\dot w = \\omega(I)\\).",
"section": "Action–angle variables: frequencies without motion",
"slide": "The angle conjugate to it",
"keys": [
"action–angle variables"
]
},
{
"term_html": "invariant torus",
"html": "The set in phase space swept by a separable (or integrable) motion with fixed actions: a product of \\(n\\) loops, one per coordinate, which the motion never leaves. In general its existence is the Liouville–Arnold theorem, unit 17.",
"section": "Action–angle variables: frequencies without motion",
"slide": "Many degrees of freedom: one loop per coordinate",
"keys": [
"invariant torus"
]
},
{
"term_html": "degenerate frequencies",
"html": "Frequencies \\(\\omega_i = \\partial H/\\partial I_i\\) that coincide identically, as for Kepler, where \\(H\\) depends on \\(I_r + I_\\theta + |I_\\phi|\\) only. The reason Kepler orbits close.",
"section": "Action–angle variables: frequencies without motion",
"slide": "Three equal frequencies: why Kepler orbits close",
"keys": [
"degenerate frequencies"
]
},
{
"term_html": "frequency without motion",
"html": "For \\(V = \\tfrac12m\\omega_0^2q^2 + \\lambda U\\), \\(E(I) = \\omega_0I + \\lambda\\langle U\\rangle_I + O(\\lambda^2)\\), so \\(\\omega = \\omega_0 + \\lambda\\,\\mathrm d\\langle U\\rangle_I/\\mathrm dI\\): the frequency from an average over the unperturbed motion, with no equation of motion solved.",
"section": "Action–angle variables: frequencies without motion",
"slide": "How the action responds to a parameter",
"keys": [
"frequency without motion"
]
},
{
"term_html": "adiabatic invariant",
"html": "For \\(H(q,p,\\lambda(\\varepsilon t))\\), a quantity that changes by at most \\(C\\varepsilon\\) over times up to \\(1/\\varepsilon\\). In one degree of freedom, with \\(\\omega\\) bounded away from zero, the action is one.",
"section": "Adiabatic invariants",
"slide": "Slow change, and what survives it",
"keys": [
"adiabatic invariant"
]
},
{
"term_html": "ray equation",
"html": "\\(\\frac{\\mathrm d}{\\mathrm ds}(n\\,\\mathrm d\\vec x/\\mathrm ds) = \\nabla n\\), the Euler–Lagrange equation of Fermat's optical length \\(\\int n\\,\\mathrm ds\\), parametrised by arc length.",
"section": "Mechanics was optics all along",
"slide": "Fermat and Maupertuis",
"keys": [
"ray equation"
]
},
{
"term_html": "Maupertuis' principle",
"html": "Trajectories of energy \\(E\\) are the extremals of the abbreviated action \\(\\int\\sqrt{2m(E - V)}\\,\\mathrm ds\\) among paths between the same points: Fermat's principle with index \\(n = \\lVert\\vec p\\rVert\\).",
"section": "Mechanics was optics all along",
"slide": "Fermat and Maupertuis",
"keys": [
"maupertuis' principle"
]
},
{
"term_html": "eikonal equation",
"html": "\\(\\lVert\\nabla W\\rVert^2 = n^2\\): geometrical optics' equation for the phase, and the time-independent Hamilton–Jacobi equation with \\(n^2 = 2m(E - V)\\).",
"section": "Mechanics was optics all along",
"slide": "Wavefronts are surfaces of constant W",
"keys": [
"eikonal equation"
]
},
{
"term_html": "wavefront",
"html": "A level set of \\(W\\). Trajectories with \\(\\vec p = \\nabla W\\) cross wavefronts at right angles.",
"section": "Mechanics was optics all along",
"slide": "Wavefronts are surfaces of constant W",
"keys": [
"wavefront"
]
},
{
"term_html": "caustic",
"html": "The envelope of a family of rays, where neighbouring rays cross and \\(W\\) stops being single-valued; the conjugate points of unit 11 lie on it.",
"section": "Mechanics was optics all along",
"slide": "Wavefronts are surfaces of constant W",
"keys": [
"caustic"
]
},
{
"term_html": "eikonal limit",
"html": "Substituting \\(\\psi = Ae^{ik_0S}\\) into Helmholtz's equation, the \\(O(k_0^2)\\) term vanishes iff \\(\\lVert\\nabla S\\rVert^2 = n^2\\): short waves obey the eikonal equation and travel along rays.",
"section": "Mechanics was optics all along",
"slide": "The eikonal limit",
"keys": [
"eikonal limit"
]
},
{
"term_html": "Riemannian metric",
"html": "On an open \\(U\\subset\\mathbb R^n\\), a symmetric positive-definite bilinear form \\(g_x\\) at each point, smooth in \\(x\\). Its components change by \\(G\\mapsto A^{\\mathsf T}GA\\) under a change of basis — a theorem, not the definition.",
"section": "Mechanics was optics all along",
"slide": "A metric, defined properly",
"keys": [
"riemannian metric"
]
},
{
"term_html": "geodesic",
"html": "Here: a critical point of the length functional \\(\\int\\sqrt{g(\\gamma',\\gamma')}\\,\\mathrm d\\sigma\\) among curves with the same ends. Unit 32 defines it through a connection and proves the two agree.",
"section": "Mechanics was optics all along",
"slide": "A metric, defined properly",
"keys": [
"geodesic"
]
},
{
"term_html": "conformal rescaling",
"html": "Replacing \\(g\\) by \\(\\Omega^2g\\) with \\(\\Omega \\gt 0\\): lengths change, angles do not.",
"section": "Mechanics was optics all along",
"slide": "A metric, defined properly",
"keys": [
"conformal rescaling"
]
},
{
"term_html": "Jacobi metric",
"html": "\\(g_J = 2(E - V)\\,g_{\\mathrm{kin}}\\) on the region \\(V \\lt E\\). Its geodesics are the trajectories of energy \\(E\\); its length is the abbreviated action.",
"section": "Mechanics was optics all along",
"slide": "The Jacobi metric",
"keys": [
"jacobi metric"
]
},
{
"term_html": "Bouguer's formula",
"html": "\\(n\\,r\\sin\\alpha = \\text{const}\\) along a ray in a spherically symmetric medium, \\(\\alpha\\) the angle to the radius. For a particle it is conservation of angular momentum.",
"section": "Mechanics was optics all along",
"slide": "Worked: Kepler orbits are geodesics",
"keys": [
"bouguer's formula"
]
}
];
