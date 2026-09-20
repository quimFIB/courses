// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "four-force",
"html": "\\(f = \\mathrm{d}p/\\mathrm{d}\\tau\\), the rate of change of four-momentum with proper time. In a frame \\(f^\\mu = \\gamma(\\vec F\\cdot\\vec v/c,\\ \\vec F)\\) with \\(\\vec F = \\mathrm{d}\\vec p/\\mathrm{d}t\\). For a particle of fixed mass it obeys \\(\\eta(f,u) = 0\\), one line from differentiating \\(\\eta(p,p) = -m^2c^2\\).",
"section": "One field, not two",
"slide": "First, what a force is in spacetime",
"keys": [
"four-force"
]
},
{
"term_html": "electromagnetic field tensor",
"html": "An antisymmetric \\((0,2)\\)-tensor field \\(F\\) on Minkowski space: at each event a bilinear map \\(V\\times V\\to\\mathbb R\\) with \\(F(w,z) = -F(z,w)\\). Its six independent components in an inertial basis are \\(F_{0i} = -E_i/c\\) and \\(F_{ij} = \\varepsilon_{ijk}B_k\\). That the components transform by \\(F'^{\\mu\\nu} = \\Lambda^\\mu{}_\\alpha\\Lambda^\\nu{}_\\beta F^{\\alpha\\beta}\\) is a theorem about change of basis, never the definition.",
"section": "One field, not two",
"slide": "The field tensor, defined",
"keys": [
"electromagnetic field tensor"
]
},
{
"term_html": "antisymmetric bilinear form",
"html": "A bilinear map \\(B\\) with \\(B(w,z) = -B(z,w)\\); in \\(n\\) dimensions it has \\(\\binom n2\\) independent components, so six in four dimensions — exactly the count of \\((\\vec E,\\vec B)\\).",
"section": "One field, not two",
"slide": "The field tensor, defined",
"keys": [
"antisymmetric bilinear form"
]
},
{
"term_html": "tensor field on Minkowski space",
"html": "A tensor of fixed type attached to every event, varying smoothly. Unit 22's three-dimensional version, with \\(\\mathbb R^3\\) replaced by \\(V\\) and \\(\\delta\\) by \\(\\eta\\).",
"section": "One field, not two",
"slide": "The field tensor, defined",
"keys": [
"tensor field on minkowski space"
]
},
{
"term_html": "antisymmetry is forced",
"html": "The theorem that if \\(f^\\mu = qF^\\mu{}_\\nu u^\\nu\\) and the mass is constant, then \\(F_{\\mu\\nu}u^\\mu u^\\nu = 0\\) for all unit-timelike \\(u\\), hence \\(F_{(\\mu\\nu)} = 0\\). Proved by noting a quadratic form vanishing on an open set vanishes identically, then polarising.",
"section": "One field, not two",
"slide": "The one guess, and what it forces",
"keys": [
"antisymmetry is forced"
]
},
{
"term_html": "index lowering",
"html": "The isomorphism \\(V\\to V^*\\), \\(w\\mapsto\\eta(w,\\cdot)\\), in components \\(w_\\mu = \\eta_{\\mu\\nu}w^\\nu\\); its inverse is raising. Because \\(\\eta^{00} = -1\\), raising a \\(0\\) index flips the sign: \\(F^{0i} = +E_i/c\\) while \\(F_{0i} = -E_i/c\\), and \\(F^{ij} = F_{ij}\\). The first place in this course where the vector/covector distinction is not optional.",
"section": "One field, not two",
"slide": "Raising and lowering, and why it now matters",
"keys": [
"index lowering"
]
},
{
"term_html": "abstract index notation",
"html": "Reading \\(F^{\\mu\\alpha}F^\\nu{}_\\alpha\\) as a tensor whose slots are named by its free indices, with repeated up–down pairs meaning contraction. Three rules: summed indices appear once up and once down, free indices match across an equation, and any index may be raised or lowered on both sides. Fluency here is the prerequisite for units 32 to 37.",
"section": "One field, not two",
"slide": "Raising and lowering, and why it now matters",
"keys": [
"abstract index notation"
]
},
{
"term_html": "four-potential",
"html": "\\(A^\\mu = (\\phi/c,\\ \\vec A)\\), equivalently \\(A_\\mu = (-\\phi/c,\\ \\vec A)\\), with \\(F_{\\mu\\nu} = \\partial_\\mu A_\\nu - \\partial_\\nu A_\\mu\\). Unit 23's scalar and vector potentials as one vector field.",
"section": "One field, not two",
"slide": "Where F comes from: the four-potential",
"keys": [
"four-potential"
]
},
{
"term_html": "gauge freedom",
"html": "\\(A_\\mu \\to A_\\mu + \\partial_\\mu\\chi\\) leaves \\(F\\) unchanged, by Clairaut. Unit 23's two separate gauge transformations are the time and space parts of this one.",
"section": "One field, not two",
"slide": "Where F comes from: the four-potential",
"keys": [
"gauge freedom"
]
},
{
"term_html": "field transformation rules",
"html": "Under a boost of speed \\(v\\), \\(E'_\\parallel = E_\\parallel\\), \\(B'_\\parallel = B_\\parallel\\), \\(\\vec E{}'_\\perp = \\gamma(\\vec E + \\vec v\\times\\vec B)_\\perp\\), \\(\\vec B{}'_\\perp = \\gamma(\\vec B - \\vec v\\times\\vec E/c^2)_\\perp\\). A corollary of the change-of-basis theorem, not an independent postulate. At first order in \\(v/c\\) they reduce to unit 25's magnetic limit.",
"section": "Boosting a field",
"slide": "The mixing rules",
"keys": [
"field transformation rules"
]
},
{
"term_html": "proper line density",
"html": "The charge per unit length measured in the frame where that charge is at rest. A line moving at speed \\(w\\) has density \\(\\gamma_w\\lambda_0\\) in the observing frame, because charge is invariant and proper length contracts.",
"section": "Boosting a field",
"slide": "Worked example 3 — the same wire, from the charge",
"keys": [
"proper line density"
]
},
{
"term_html": "Purcell's argument",
"html": "That the magnetic force between a current and a moving charge is Coulomb's law plus length contraction: in the charge's frame the positive and negative line densities of a neutral wire contract by different factors, leaving \\(\\lambda' = -\\gamma Iv/c^2\\). The fractional imbalance is \\(uv/c^2 \\approx 2.5\\times10^{-15}\\), amplified by \\(\\lambda = 1.36\\times10^{4}\\ \\mathrm{C\\,m^{-1}}\\) of mobile charge per metre.",
"section": "Boosting a field",
"slide": "Purcell's moral: magnetism is a 10^{-13} effect",
"keys": [
"purcell's argument"
]
},
{
"term_html": "transverse force transformation",
"html": "\\(F_\\perp = F'_\\perp/\\gamma\\) for a particle at rest in the primed frame: \\(\\mathrm{d}p_\\perp\\) is boost-invariant while \\(\\mathrm{d}t = \\gamma\\,\\mathrm{d}t'\\). It is what makes the wire's two answers agree.",
"section": "Boosting a field",
"slide": "The two answers, to the last \\gamma",
"keys": [
"transverse force transformation"
]
},
{
"term_html": "four-current",
"html": "\\(J^\\mu = (c\\rho,\\ \\vec J)\\); for one species, \\(J^\\mu = \\rho_0u^\\mu\\) with \\(\\rho_0\\) the proper charge density. Spacelike \\(J\\) means a frame exists with \\(\\rho = 0\\); timelike \\(J\\) means one exists with \\(\\vec J = 0\\).",
"section": "Maxwell, in two lines",
"slide": "The four-current",
"keys": [
"four-current"
]
},
{
"term_html": "covariant continuity",
"html": "\\(\\partial_\\mu J^\\mu = 0\\), which in components is \\(\\partial_t\\rho + \\nabla\\cdot\\vec J = 0\\). It is a corollary of Maxwell, not an extra law: \\(\\partial_\\nu\\partial_\\mu F^{\\nu\\mu} = 0\\) because a symmetric pair of derivative indices contracts to zero with an antisymmetric tensor.",
"section": "Maxwell, in two lines",
"slide": "The four-current",
"keys": [
"covariant continuity"
]
},
{
"term_html": "inhomogeneous Maxwell equations",
"html": "\\(\\partial_\\mu F^{\\nu\\mu} = \\mu_0J^\\nu\\): Gauss's law at \\(\\nu = 0\\) and Ampère–Maxwell at \\(\\nu = i\\). The index order matters — \\(\\partial_\\mu F^{\\mu\\nu} = -\\mu_0J^\\nu\\).",
"section": "Maxwell, in two lines",
"slide": "The sourced pair, in one equation",
"keys": [
"inhomogeneous maxwell equations"
]
},
{
"term_html": "Levi-Civita symbol",
"html": "\\([\\mu\\nu\\rho\\sigma]\\), equal to the sign of the permutation of \\((0,1,2,3)\\) and \\(0\\) if two indices agree, declared to have the same values in every basis. An array, not a tensor.",
"section": "Maxwell, in two lines",
"slide": "The symbol, and the tensor",
"keys": [
"levi-civita symbol"
]
},
{
"term_html": "Levi-Civita tensor",
"html": "\\(\\epsilon_{\\mu\\nu\\rho\\sigma} = \\sqrt{|\\det\\eta|}\\,[\\mu\\nu\\rho\\sigma]\\), the unique totally antisymmetric \\((0,4)\\)-tensor with \\(\\epsilon_{0123} = 1\\); raised, \\(\\epsilon^{0123} = -1\\). Its components pick up \\(\\det\\Lambda\\) under a change of basis, so they agree with the symbol in every proper Lorentz frame and differ by a sign under a reflection.",
"section": "Maxwell, in two lines",
"slide": "The symbol, and the tensor",
"keys": [
"levi-civita tensor"
]
},
{
"term_html": "pseudotensor",
"html": "An object transforming as a tensor times \\(\\det\\Lambda\\): a tensor for the proper orthochronous group, sign-flipping under reflection. \\(\\epsilon\\) is one, and so is \\(\\vec E\\cdot\\vec B\\).",
"section": "Maxwell, in two lines",
"slide": "The symbol, and the tensor",
"keys": [
"pseudotensor"
]
},
{
"term_html": "dual field tensor",
"html": "\\(\\tilde F^{\\mu\\nu} = \\tfrac12\\epsilon^{\\mu\\nu\\rho\\sigma}F_{\\rho\\sigma}\\), with components \\(\\tilde F^{0i} = -B_i\\), \\(\\tilde F^{ij} = \\varepsilon_{ijk}E_k/c\\).",
"section": "Maxwell, in two lines",
"slide": "The dual, and the other pair",
"keys": [
"dual field tensor"
]
},
{
"term_html": "duality rotation",
"html": "The substitution \\(\\vec E/c\\mapsto-\\vec B\\), \\(\\vec B\\mapsto\\vec E/c\\) that dualising performs; a quarter turn, with \\(\\tilde{\\tilde F} = -F\\). It is a symmetry of the source-free equations only.",
"section": "Maxwell, in two lines",
"slide": "The dual, and the other pair",
"keys": [
"duality rotation"
]
},
{
"term_html": "Bianchi identity",
"html": "\\(\\partial_\\lambda F_{\\mu\\nu} + \\partial_\\mu F_{\\nu\\lambda} + \\partial_\\nu F_{\\lambda\\mu} = 0\\), equivalently \\(\\partial_\\mu\\tilde F^{\\nu\\mu} = 0\\), equivalently \\(\\nabla\\cdot\\vec B = 0\\) and Faraday's law. Automatic once \\(F = \\partial A - \\partial A\\), by Clairaut: half of Maxwell's equations say only that a potential exists.",
"section": "Maxwell, in two lines",
"slide": "The dual, and the other pair",
"keys": [
"bianchi identity"
]
},
{
"term_html": "first invariant",
"html": "\\(\\mathcal I_1 = \\tfrac12F_{\\mu\\nu}F^{\\mu\\nu} = B^2 - E^2/c^2\\). Its sign says whether a frame exists in which the field is purely magnetic (\\(\\mathcal I_1 &gt; 0\\)) or purely electric (\\(\\mathcal I_1 &lt; 0\\)), given \\(\\mathcal I_2 = 0\\).",
"section": "Maxwell, in two lines",
"slide": "The two invariants",
"keys": [
"first invariant"
]
},
{
"term_html": "second invariant",
"html": "\\(\\mathcal I_2 = \\tfrac c4F_{\\mu\\nu}\\tilde F^{\\mu\\nu} = \\vec E\\cdot\\vec B\\), a pseudoscalar. Nonzero means both fields are nonzero in every frame.",
"section": "Maxwell, in two lines",
"slide": "The two invariants",
"keys": [
"second invariant"
]
},
{
"term_html": "null field",
"html": "One with \\(\\mathcal I_1 = \\mathcal I_2 = 0\\) and \\(F\\ne0\\): \\(E = cB\\) with \\(\\vec E\\perp\\vec B\\) in every frame. A plane electromagnetic wave is one, and no boost removes either of its fields.",
"section": "Maxwell, in two lines",
"slide": "Worked example 4 — which field can you transform away?",
"keys": [
"null field"
]
},
{
"term_html": "electromagnetic stress-energy tensor",
"html": "\\(T^{\\mu\\nu} = \\mu_0^{-1}(F^{\\mu\\alpha}F^\\nu{}_\\alpha - \\tfrac14\\eta^{\\mu\\nu}F_{\\alpha\\beta}F^{\\alpha\\beta})\\), symmetric and traceless. Components: \\(T^{00} = u\\), \\(T^{0i} = S_i/c\\), \\(T^{ij} = -\\sigma_{ij}\\) with \\(\\sigma\\) unit 24's Maxwell stress tensor. Its symmetry is why the field momentum density is \\(\\vec S/c^2\\).",
"section": "Where the energy is",
"slide": "The stress-energy tensor of the field",
"keys": [
"electromagnetic stress-energy tensor"
]
},
{
"term_html": "tracelessness",
"html": "\\(T^\\mu{}_\\mu = 0\\), because \\(\\eta^\\mu{}_\\mu = 4\\). Physically: the field has no rest frame, and its equation of state is \\(p = \\rho c^2/3\\) — the radiation equation of state unit 39 needs.",
"section": "Where the energy is",
"slide": "The stress-energy tensor of the field",
"keys": [
"tracelessness"
]
},
{
"term_html": "Lorentz force density",
"html": "\\(F^\\mu{}_\\nu J^\\nu\\), with components \\((\\vec J\\cdot\\vec E/c,\\ \\rho\\vec E + \\vec J\\times\\vec B)\\): the rate at which the field hands energy and momentum to the charges, per unit volume.",
"section": "Where the energy is",
"slide": "One divergence, two conservation laws",
"keys": [
"lorentz force density"
]
},
{
"term_html": "divergence identity",
"html": "\\(\\partial_\\nu T^{\\mu\\nu} = -F^\\mu{}_\\nu J^\\nu\\). Proved by expanding, using Maxwell on one term, and cancelling the remaining two with the Bianchi identity. Its time component is Poynting's theorem and its spatial components are unit 24's momentum balance.",
"section": "Where the energy is",
"slide": "One divergence, two conservation laws",
"keys": [
"divergence identity"
]
},
{
"term_html": "Liénard formula",
"html": "\\(P = \\dfrac{\\mu_0q^2}{6\\pi c}a^\\mu a_\\mu = \\dfrac{\\mu_0q^2}{6\\pi c}\\gamma^6\\big(|\\vec a|^2 - |\\vec v\\times\\vec a|^2/c^2\\big)\\), the relativistic generalisation of Larmor. Radiated power is a Lorentz scalar because the rest-frame pattern is symmetric. Derived in full from the Liénard–Wiechert fields in Jackson §14.2–14.3; <em>cited</em> in that sense.",
"section": "Radiation, honestly",
"slide": "Larmor, made covariant",
"keys": [
"liénard formula"
]
},
{
"term_html": "synchrotron loss",
"html": "For circular motion, \\(a\\cdot a = \\gamma^4|\\vec a|^2\\) and the energy lost per turn is \\(\\Delta E = q^2\\gamma^4/3\\varepsilon_0\\rho\\): 3.41 GeV per turn for LEP electrons at 104.5 GeV, 5.94 keV for LHC protons at 6.8 TeV.",
"section": "Radiation, honestly",
"slide": "Larmor, made covariant",
"keys": [
"synchrotron loss"
]
},
{
"term_html": "Abraham–Lorentz force",
"html": "\\(\\vec F_{\\mathrm{rad}} = \\dfrac{\\mu_0q^2}{6\\pi c}\\dot{\\vec a} = m\\tau_0\\dot{\\vec a}\\), with \\(\\tau_0 = \\mu_0q^2/6\\pi mc = 6.266\\times10^{-24}\\) s for an electron. Obtained by energy bookkeeping over a period and then asserted pointwise, which is why it is a patch rather than a theorem.",
"section": "Radiation, honestly",
"slide": "The recoil, and where classical theory stops",
"keys": [
"abraham–lorentz force"
]
},
{
"term_html": "runaway solution",
"html": "A solution of \\(m\\dot{\\vec v} = m\\tau_0\\ddot{\\vec v} + \\vec F_{\\mathrm{ext}}\\) with \\(\\vec a \\propto e^{t/\\tau_0}\\) and no external force: a free charge accelerating itself forever.",
"section": "Radiation, honestly",
"slide": "The recoil, and where classical theory stops",
"keys": [
"runaway solution"
]
},
{
"term_html": "pre-acceleration",
"html": "What discarding the runaways by a condition at \\(t = +\\infty\\) costs: the charge begins to move a time of order \\(\\tau_0\\) before the force reaches it.",
"section": "Radiation, honestly",
"slide": "The recoil, and where classical theory stops",
"keys": [
"pre-acceleration"
]
},
{
"term_html": "classical electron radius",
"html": "\\(r_e = q^2/4\\pi\\varepsilon_0mc^2 = 2.818\\times10^{-15}\\) m, where the field's own energy reaches \\(mc^2\\); \\(\\tau_0 = 2r_e/3c\\). Every pathology on the radiation-reaction slide traces to the divergence of the self-energy as the charge is shrunk to a point.",
"section": "Radiation, honestly",
"slide": "The recoil, and where classical theory stops",
"keys": [
"classical electron radius"
]
}
];
