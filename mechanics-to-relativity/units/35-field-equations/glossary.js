// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "tensor equation",
"html": "An equation whose two sides are tensor fields of the same type, so that it holds in every chart or in none. The first requirement on a law of gravity, and by itself a weaker demand than it sounds: unit 31 showed that almost any theory can be written covariantly.",
"section": "What the equation has to be",
"slide": "Five requirements, before any equation",
"keys": [
"tensor equation"
]
},
{
"term_html": "local conservation",
"html": "The condition \\(\\nabla_\\mu T^{\\mu\\nu} = 0\\), which matter obeys in every spacetime. It is the flat-space conservation of energy and momentum (unit 13's Noether theorem for translations) with commas promoted to semicolons, and it is what forces the left-hand side of the field equation to be identically divergence-free.",
"section": "What the equation has to be",
"slide": "Five requirements, before any equation",
"keys": [
"local conservation"
]
},
{
"term_html": "Newtonian limit",
"html": "The regime weak, static and slow, in which a theory of gravity must reduce to \\(\\nabla^2\\Phi = 4\\pi G\\rho\\). The only place in the construction of the field equations where a number rather than a structure is fixed.",
"section": "What the equation has to be",
"slide": "The weak, slow, static setting",
"keys": [
"newtonian limit"
]
},
{
"term_html": "weak-field expansion",
"html": "Writing \\(g_{\\mu\\nu} = \\eta_{\\mu\\nu} + h_{\\mu\\nu}\\) with \\(|h|\\ll1\\) and keeping terms to first order in \\(h\\). Accurate to six figures everywhere in the solar system; the quantity that must be small is \\(\\Phi/c^2\\).",
"section": "What the equation has to be",
"slide": "The weak, slow, static setting",
"keys": [
"weak-field expansion"
]
},
{
"term_html": "stress-energy tensor",
"html": "A symmetric \\((0,2)\\)-tensor field \\(T\\) with \\(\\nabla_\\mu T^{\\mu\\nu} = 0\\). At each point a symmetric bilinear map \\(T_pM\\times T_pM\\to\\mathbb R\\); an observer with four-velocity \\(u\\) reads the energy density as \\(T(u,u)/c^2\\). Its space-space block is the momentum flux, minus the Cauchy stress of continuum mechanics, its \\(00\\) component the energy density, its \\(0i\\) components the momentum density and energy flux.",
"section": "The source",
"slide": "What a stress-energy tensor is",
"keys": [
"stress-energy tensor"
]
},
{
"term_html": "dust",
"html": "Matter with no interactions and hence no pressure: \\(T^{\\mu\\nu} = \\rho\\,u^\\mu u^\\nu\\) with \\(\\rho\\) the rest-frame rest-mass density. Trace \\(T = -\\rho c^2\\).",
"section": "The source",
"slide": "Dust, and a fluid",
"keys": [
"dust"
]
},
{
"term_html": "perfect fluid",
"html": "Matter with isotropic pressure and nothing else: \\(T^{\\mu\\nu} = (\\rho + p/c^2)u^\\mu u^\\nu + p\\,g^{\\mu\\nu}\\). Not a model but the most general isotropic source, since \\(u^\\mu u^\\nu\\) and \\(g^{\\mu\\nu}\\) are the only symmetric structures available. Trace \\(T = -\\rho c^2 + 3p\\).",
"section": "The source",
"slide": "Dust, and a fluid",
"keys": [
"perfect fluid"
]
},
{
"term_html": "contracted Bianchi identity",
"html": "\\(\\nabla^\\mu G_{\\mu\\nu} = 0\\), holding for every metric on every manifold. Proved in unit 33 by contracting the second Bianchi identity twice; an intermediate form, \\(\\nabla^\\mu R_{\\mu\\nu} = \\tfrac12\\nabla_\\nu R\\), is what kills Einstein's first guess.",
"section": "Route two: nothing else was available",
"slide": "One divergence-free tensor, already in hand",
"keys": [
"contracted bianchi identity"
]
},
{
"term_html": "Einstein tensor",
"html": "\\(G_{\\mu\\nu} = R_{\\mu\\nu} - \\tfrac12 R\\,g_{\\mu\\nu}\\). The unique combination of Ricci and the metric whose divergence vanishes identically, which is why it and nothing else can sit opposite \\(T_{\\mu\\nu}\\).",
"section": "Route two: nothing else was available",
"slide": "One divergence-free tensor, already in hand",
"keys": [
"einstein tensor"
]
},
{
"term_html": "trace-reversed field equation",
"html": "\\(R_{\\mu\\nu} = \\kappa(T_{\\mu\\nu} - \\tfrac12 T g_{\\mu\\nu})\\), obtained from \\(G_{\\mu\\nu} = \\kappa T_{\\mu\\nu}\\) by tracing to get \\(R = -\\kappa T\\) and substituting back. Equivalent to the field equations, and the form every weak-field computation uses because its left-hand side is a single Ricci component.",
"section": "Route two: nothing else was available",
"slide": "Einstein's first guess, and how it died",
"keys": [
"trace-reversed field equation"
]
},
{
"term_html": "Lovelock's theorem",
"html": "In four dimensions, a symmetric \\((0,2)\\)-tensor built pointwise from the metric and its first two derivatives and identically divergence-free must be \\(a\\,G_{\\mu\\nu} + b\\,g_{\\mu\\nu}\\). Cited: Lovelock 1971 and 1972; the case linear in second derivatives is problem P2. It is what turns \"here is an equation that works\" into \"there was never another equation\".",
"section": "Route two: nothing else was available",
"slide": "Lovelock: there was never a choice",
"keys": [
"lovelock's theorem"
]
},
{
"term_html": "coupling constant",
"html": "\\(\\kappa = 8\\pi G/c^4 = 2.0766\\times10^{-43}\\,\\mathrm{m^{-1}kg^{-1}s^2}\\), fixed by the Newtonian limit and by nothing else in the theory. Its reciprocal \\(c^4/8\\pi G = 4.815\\times10^{42}\\) N is the stiffness of spacetime.",
"section": "Route two: nothing else was available",
"slide": "Poisson appears, and with it the coupling",
"keys": [
"coupling constant"
]
},
{
"term_html": "Einstein-Hilbert action",
"html": "\\(S = \\frac1c\\int[\\frac{c^4}{16\\pi G}(R - 2\\Lambda) + \\mathcal L_{\\mathrm m}]\\sqrt{-g}\\,\\mathrm d^4x\\). The scalar curvature is the only scalar available with at most two derivatives of the metric, which is why the action is forced for the same reason Lovelock's theorem is.",
"section": "Route one: vary an action",
"slide": "Which scalar? The Einstein-Hilbert action",
"keys": [
"einstein-hilbert action"
]
},
{
"term_html": "Jacobi's formula",
"html": "\\(\\delta\\ln|\\det A| = \\operatorname{tr}(A^{-1}\\delta A)\\). Applied to the metric it gives \\(\\delta\\sqrt{-g} = -\\tfrac12\\sqrt{-g}\\, g_{\\mu\\nu}\\delta g^{\\mu\\nu}\\), the first of the two lemmas the variation needs.",
"section": "Route one: vary an action",
"slide": "Lemma: varying the determinant",
"keys": [
"jacobi's formula"
]
},
{
"term_html": "Palatini identity",
"html": "\\(\\delta R_{\\mu\\nu} = \\nabla_\\lambda\\delta \\Gamma^\\lambda_{\\mu\\nu} - \\nabla_\\nu\\delta\\Gamma^\\lambda_{\\mu\\lambda}\\), true because \\(\\delta\\Gamma\\) is a tensor even though \\(\\Gamma\\) is not. Contracted with \\(g^{\\mu\\nu}\\) it is a total divergence, so it contributes nothing to the field equations and everything to the boundary term.",
"section": "Route one: vary an action",
"slide": "Lemma: the Palatini identity",
"keys": [
"palatini identity"
]
},
{
"term_html": "Gibbons-Hawking-York term",
"html": "The boundary integral \\(\\frac1c\\frac{c^4}{8\\pi G}\\oint_{\\partial\\mathcal M}\\varepsilon K\\sqrt{|h|}\\,\\mathrm d^3x\\) added to the Einstein-Hilbert action so that the variational problem is well posed with only the induced metric fixed on the boundary. Needed because the Palatini divergence contains normal derivatives of \\(\\delta g\\), which fixing \\(g\\) on the boundary does not kill. Cited: York 1972, Gibbons and Hawking 1977.",
"section": "Route one: vary an action",
"slide": "The boundary term nobody can ignore",
"keys": [
"gibbons-hawking-york term"
]
},
{
"term_html": "vacuum field equations",
"html": "\\(R_{\\mu\\nu} = 0\\), equivalent to \\(G_{\\mu\\nu} = 0\\) because tracing the latter gives \\(R = 0\\). Ten equations, not twenty: they leave the ten components of the Weyl tensor free.",
"section": "What the equations say",
"slide": "Vacuum is not empty of geometry",
"keys": [
"vacuum field equations"
]
},
{
"term_html": "Weyl tensor",
"html": "Unit 33's totally trace-free part of the Riemann tensor, with \\(20 - 10 = 10\\) independent components in four dimensions and none at all in three. It is the curvature that survives in vacuum: tidal distortion at constant volume, and hence gravitational waves.",
"section": "What the equations say",
"slide": "Vacuum is not empty of geometry",
"keys": [
"weyl tensor"
]
},
{
"term_html": "gauge freedom",
"html": "The four arbitrary functions of a change of coordinates \\(x\\to\\tilde x(x)\\). Two metrics related by a diffeomorphism are the same solution, so four of the ten components of \\(g_{\\mu\\nu}\\) carry no information.",
"section": "What the equations say",
"slide": "Ten minus four minus four",
"keys": [
"gauge freedom"
]
},
{
"term_html": "constraint equation",
"html": "One of the four field equations \\(G^{0\\mu} = \\kappa T^{0\\mu}\\), which contain at most one time derivative of the metric and are therefore conditions on the initial data rather than evolution equations. That they contain no second time derivative follows from the contracted Bianchi identity.",
"section": "What the equations say",
"slide": "Ten minus four minus four",
"keys": [
"constraint equation"
]
},
{
"term_html": "propagating degrees of freedom",
"html": "What is left after gauge and constraints: \\(10 - 4 - 4 = 2\\) per point for gravity, and \\(4 - 1 - 1 = 2\\) for electromagnetism. The count is confirmed independently by the linearised analysis in transverse-traceless gauge.",
"section": "What the equations say",
"slide": "Ten minus four minus four",
"keys": [
"propagating degrees of freedom"
]
},
{
"term_html": "wave operator",
"html": "\\(\\Box = \\eta^{\\mu\\nu}\\partial_\\mu\\partial_\\nu = -c^{-2}\\partial_t^2 + \\nabla^2\\) on Minkowski space: the inverse metric contracted with two derivatives, hence Lorentz invariant. \\(F(k_\\mu x^\\mu)\\) solves \\(\\Box f = 0\\) for every profile \\(F\\) exactly when \\(k\\) is null, so its solutions travel at \\(c\\).",
"section": "What the equations say",
"slide": "The wave operator, built here",
"keys": [
"wave operator"
]
},
{
"term_html": "trace-reversed perturbation",
"html": "\\(\\bar h_{\\mu\\nu} = h_{\\mu\\nu} - \\tfrac12\\eta_{\\mu\\nu}h\\), the combination in which the linearised field equations become \\(\\Box\\bar h_{\\mu\\nu} = -2\\kappa T_{\\mu\\nu}\\). Reversing twice returns \\(h\\).",
"section": "What the equations say",
"slide": "Linearise: a wave with two polarisations",
"keys": [
"trace-reversed perturbation"
]
},
{
"term_html": "Lorenz gauge",
"html": "The four conditions \\(\\partial^\\mu\\bar h_{\\mu\\nu} = 0\\), imposed by solving \\(\\Box\\xi_\\nu = \\partial^\\mu\\bar h_{\\mu\\nu}\\) for the four gauge functions. The same device, and the same name, as the condition \\(\\partial^\\mu A_\\mu = 0\\) on the electromagnetic potential (unit 24).",
"section": "What the equations say",
"slide": "Linearise: a wave with two polarisations",
"keys": [
"lorenz gauge"
]
},
{
"term_html": "transverse-traceless gauge",
"html": "What is left after using the residual freedom \\(\\Box\\xi^\\mu = 0\\): \\(h_{0\\mu} = 0\\), \\(h^i{}_i = 0\\) and \\(\\partial^ih_{ij} = 0\\). For a wave along \\(z\\) it leaves a \\(2\\times2\\) symmetric traceless block — two functions.",
"section": "What the equations say",
"slide": "Linearise: a wave with two polarisations",
"keys": [
"transverse-traceless gauge"
]
},
{
"term_html": "plus and cross polarisations",
"html": "The two independent components \\(h_+\\) and \\(h_\\times\\) of a plane gravitational wave in transverse-traceless gauge, differing by a rotation of \\(45^\\circ\\) about the propagation direction.",
"section": "What the equations say",
"slide": "Linearise: a wave with two polarisations",
"keys": [
"plus and cross polarisations"
]
},
{
"term_html": "cosmological constant",
"html": "The constant \\(\\Lambda\\) multiplying \\(g_{\\mu\\nu}\\) in the field equations, allowed by Lovelock's theorem and by the action, and fixed by neither. Measured: \\(\\Lambda = 1.09\\times10^{-52}\\ \\mathrm{m^{-2}}\\), equivalently \\(\\rho_\\Lambda = 5.85\\times10^{-27}\\ \\mathrm{kg\\,m^{-3}}\\).",
"section": "What the equations say",
"slide": "The cosmological term",
"keys": [
"cosmological constant"
]
},
{
"term_html": "dark energy",
"html": "The cosmological term read as a source rather than as geometry: a perfect fluid with \\(p = -\\rho c^2\\), hence \\(\\rho + 3p/c^2 = -2\\rho\\), so it pushes. The name is used when the possibility that it varies with time is being kept open.",
"section": "What the equations say",
"slide": "The cosmological term",
"keys": [
"dark energy"
]
},
{
"term_html": "harmonic coordinates",
"html": "Coordinates satisfying \\(\\Box x^\\mu = 0\\), equivalently \\(g^{\\alpha\\beta}\\Gamma^\\mu_{\\alpha\\beta} = 0\\) — four conditions, using up exactly the gauge freedom. In them \\(R_{\\mu\\nu}\\) is a quasilinear wave operator acting on \\(g_{\\mu\\nu}\\), which is what makes the Cauchy problem tractable.",
"section": "What the equations say",
"slide": "Is it even well posed?",
"keys": [
"harmonic coordinates"
]
},
{
"term_html": "initial-value formulation",
"html": "The statement that data on a spacelike slice, satisfying the four constraints, determines the spacetime uniquely up to diffeomorphism. Cited: Choquet-Bruhat 1952 for the local result, Choquet-Bruhat and Geroch 1969 for the maximal globally hyperbolic development.",
"section": "What the equations say",
"slide": "Is it even well posed?",
"keys": [
"initial-value formulation"
]
}
];
