// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "homogeneity of time (time-translation invariance)",
"html": "The laws do not single out an origin of time: the Lagrangian of an isolated system has no explicit \\(t\\). Its Noether charge is the energy function \\(h\\).",
"section": "Symmetry, made precise",
"slide": "Three laws, three unrelated proofs",
"keys": [
"homogeneity of time (time-translation invariance)",
"homogeneity of time",
"time-translation invariance"
]
},
{
"term_html": "homogeneity of space",
"html": "No point of space is special: the Lagrangian of an isolated system is unchanged when every body is shifted by the same vector. Its charge is the total momentum.",
"section": "Symmetry, made precise",
"slide": "Three laws, three unrelated proofs",
"keys": [
"homogeneity of space"
]
},
{
"term_html": "isotropy",
"html": "No direction of space is special: the Lagrangian is unchanged when every body is rotated about the same axis. Its charge is the total angular momentum.",
"section": "Symmetry, made precise",
"slide": "Three laws, three unrelated proofs",
"keys": [
"isotropy"
]
},
{
"term_html": "one-parameter group",
"html": "A family of maps \\(\\Phi_s\\) of configuration space, \\(C^2\\) in \\((s,q,t)\\), with \\(\\Phi_0 = \\mathrm{id}\\) and \\(\\Phi_s\\circ\\Phi_{s'} = \\Phi_{s+s'}\\). Unit 02's flow of a vector field, seen from the family's side.",
"section": "Symmetry, made precise",
"slide": "One-parameter groups of transformations",
"keys": [
"one-parameter group"
]
},
{
"term_html": "infinitesimal generator",
"html": "\\(\\xi = \\partial_s\\Phi_s|_{s=0}\\), the velocity with which the family starts to move a point. It determines the group, which is the flow of \\(\\xi\\).",
"section": "Symmetry, made precise",
"slide": "One-parameter groups of transformations",
"keys": [
"infinitesimal generator"
]
},
{
"term_html": "lift to velocities",
"html": "The map a transformation of positions induces on velocities, by the chain rule: \\(\\dot q\\mapsto D_q\\Phi_s\\,\\dot q + \\partial_t\\Phi_s\\).",
"section": "Symmetry, made precise",
"slide": "Moving curves, and what the Lagrangian does",
"keys": [
"lift to velocities"
]
},
{
"term_html": "variation",
"html": "\\(\\delta q = \\partial_s q_s|_{s=0} = \\xi\\), the first-order change of a curve under the family. Commutes with \\(\\mathrm d/\\mathrm dt\\).",
"section": "Symmetry, made precise",
"slide": "Moving curves, and what the Lagrangian does",
"keys": [
"variation"
]
},
{
"term_html": "induced variation of \\(L\\)",
"html": "\\(\\delta L = \\frac{\\partial L}{\\partial q}\\cdot\\xi + \\frac{\\partial L}{\\partial\\dot q}\\cdot\\dot\\xi\\), the first-order change of the Lagrangian along a moved curve. Its integral is the variation of the action.",
"section": "Symmetry, made precise",
"slide": "Moving curves, and what the Lagrangian does",
"keys": [
"induced variation of l"
]
},
{
"term_html": "symmetry",
"html": "A family with \\(L(q_s,\\dot q_s,t) = L(q,\\dot q,t)\\) for every curve and every \\(s\\); infinitesimally, \\(\\delta L = 0\\) for every curve.",
"section": "Symmetry, made precise",
"slide": "Symmetry, and symmetry up to a total derivative",
"keys": [
"symmetry"
]
},
{
"term_html": "quasi-symmetry",
"html": "A family that changes \\(L\\) only by a total time derivative, \\(L(q_s,\\dot q_s,t) = L + \\frac{\\mathrm d}{\\mathrm dt}\\Lambda_s(q,t)\\); infinitesimally \\(\\delta L = \\dot F\\). It still maps solutions to solutions. The Galilean boost is one. Also called a divergence symmetry.",
"section": "Symmetry, made precise",
"slide": "Symmetry, and symmetry up to a total derivative",
"keys": [
"quasi-symmetry"
]
},
{
"term_html": "off-shell",
"html": "Holding for every curve, not only for solutions of the equations of motion (on-shell). A symmetry must hold off-shell: on-shell every \\(\\xi\\) satisfies \\(\\delta L = \\frac{\\mathrm d}{\\mathrm dt}(p\\cdot\\xi)\\) and the charge would be zero.",
"section": "Symmetry, made precise",
"slide": "Symmetry, and symmetry up to a total derivative",
"keys": [
"off-shell"
]
},
{
"term_html": "Noether's theorem",
"html": "If \\(\\delta L = \\dot F\\) for every curve, with \\(\\xi\\) and \\(F\\) functions of \\((q,\\dot q,t)\\), then \\(Q = p\\cdot\\xi - F\\) is constant on every solution. Proof: \\(\\dot Q = \\dot p\\cdot\\xi + p\\cdot\\dot\\xi - \\dot F = \\delta L - \\dot F = 0\\).",
"section": "The theorem",
"slide": "Noether's theorem",
"keys": [
"noether's theorem"
]
},
{
"term_html": "Noether charge",
"html": "The conserved quantity \\(Q = \\sum_i\\frac{\\partial L}{\\partial\\dot q_i}\\xi_i - F\\) attached to a symmetry. Defined up to an additive constant, and unchanged by adding a total derivative to \\(L\\).",
"section": "The theorem",
"slide": "Noether's theorem",
"keys": [
"noether charge"
]
},
{
"term_html": "conjugate variables",
"html": "A symmetry parameter and the charge it produces: time and energy, position and momentum, angle and angular momentum. Their product has the dimensions of action.",
"section": "The theorem",
"slide": "Checking a charge: dimensions",
"keys": [
"conjugate variables"
]
},
{
"term_html": "energy function",
"html": "\\(h = \\sum_i\\dot q_i\\,\\partial L/\\partial\\dot q_i - L\\), the Noether charge of time translation, with \\(\\dot h = -\\partial L/\\partial t\\) on-shell. Unit 11's Beltrami quantity, with the sign reversed.",
"section": "Energy is time translation",
"slide": "Time translation as a variation",
"keys": [
"energy function"
]
},
{
"term_html": "Euler's theorem on homogeneous functions",
"html": "If \\(f(\\lambda v) = \\lambda^kf(v)\\) for \\(\\lambda &gt; 0\\), then \\(v\\cdot\\nabla f = kf\\). It gives \\(h = L_2 - L_0\\), hence \\(h = T_2 - T_0 + V\\), which equals \\(T + V\\) only when the coordinates do not move.",
"section": "Energy is time translation",
"slide": "When is h the energy?",
"keys": [
"euler's theorem on homogeneous functions"
]
},
{
"term_html": "Jacobi's integral",
"html": "\\(h = E - \\Omega L_z\\), the energy function in coordinates rotating uniformly at \\(\\Omega\\); conserved when the rotating-frame Lagrangian has no explicit time. The bead on the rotating hoop has it, and so does the restricted three-body problem.",
"section": "Energy is time translation",
"slide": "Where the motor's work goes",
"keys": [
"jacobi's integral"
]
},
{
"term_html": "boost charge",
"html": "\\(\\vec G = \\vec P t - M\\vec R\\), the charge of the Galilean boost \\(\\vec r_a\\mapsto\\vec r_a + st\\hat n\\), which changes \\(L\\) by \\(\\frac{\\mathrm d}{\\mathrm dt}(sM\\hat n\\cdot\\vec R + \\frac12Ms^2t)\\). Its conservation says the centre of mass moves uniformly.",
"section": "Space: momentum, angular momentum, and the boost",
"slide": "The boost, where L is not invariant",
"keys": [
"boost charge"
]
},
{
"term_html": "radial-velocity method",
"html": "Detecting a planet by the periodic Doppler shift of its star as the star circles the common centre of mass. Jupiter moves the Sun at \\(12.46\\ \\mathrm{m\\,s^{-1}}\\), the Earth at \\(0.089\\ \\mathrm{m\\,s^{-1}}\\).",
"section": "Space: momentum, angular momentum, and the boost",
"slide": "What the boost charge says about the Sun",
"keys": [
"radial-velocity method"
]
},
{
"term_html": "Galilean group",
"html": "The ten-parameter group of maps \\((t,\\vec r)\\mapsto(t + t_0,\\ R\\vec r + \\vec vt + \\vec d)\\): time shift, space shifts, rotations, boosts. Its ten charges are \\(E\\), \\(\\vec P\\), \\(\\vec L\\), \\(\\vec G\\).",
"section": "Space: momentum, angular momentum, and the boost",
"slide": "Ten symmetries, ten charges",
"keys": [
"galilean group"
]
},
{
"term_html": "Runge–Lenz vector",
"html": "\\(\\vec A = \\vec p\\times\\vec L - \\mu k\\hat r\\) for the inverse-square law, pointing at perihelion with \\(|\\vec A| = \\mu ke\\). Unit 08 proved it conserved; it is the charge of no transformation of configuration space, but of a velocity-dependent symmetry.",
"section": "The hidden symmetry",
"slide": "A conserved vector with no symmetry of space behind it",
"keys": [
"runge–lenz vector"
]
},
{
"term_html": "generalised symmetry",
"html": "A variation \\(\\delta q = \\xi(q,\\dot q,t)\\) depending on the velocities, with \\(\\delta L = \\dot F\\) off-shell. Noether's proof applies unchanged. Time translation (\\(\\xi = \\dot q\\)) and the Runge–Lenz generator are examples.",
"section": "The hidden symmetry",
"slide": "Letting the transformation see the velocity",
"keys": [
"generalised symmetry"
]
},
{
"term_html": "converse of Noether's theorem",
"html": "The claim that every conserved quantity is the charge of a symmetry. False for transformations of configuration space — the Runge–Lenz vector is a counterexample — and true for flows on phase space, unit 14.",
"section": "The hidden symmetry",
"slide": "The converse is false, and what rescues it",
"keys": [
"converse of noether's theorem"
]
}
];
