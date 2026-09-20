// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "k-form",
"html": "Short for differential \\(k\\)-form: a field of alternating \\(k\\)-linear maps on tangent vectors, the thing that is integrated over a \\(k\\)-dimensional patch.",
"section": "The exterior algebra",
"slide": "Forms on a manifold",
"keys": [
"k-form"
]
},
{
"term_html": "wedge product",
"html": "The product \\(\\alpha\\wedge\\beta\\) of a \\(k\\)-covector and an \\(l\\)-covector, defined by a signed sum over \\((k,l)\\)-shuffles. Bilinear, associative, graded commutative: \\(\\alpha\\wedge\\beta = (-1)^{kl}\\beta\\wedge\\alpha\\), so one-forms anticommute.",
"section": "The exterior algebra",
"slide": "The wedge product",
"keys": [
"wedge product"
]
},
{
"term_html": "de Rham cohomology",
"html": "\\(H^k_{\\mathrm{dR}}(M)\\), the closed \\(k\\)-forms modulo the exact ones. It depends on the space alone, and measures how far \"closed\" falls short of \"exact\".",
"section": "The exterior algebra",
"slide": "de Rham cohomology",
"keys": [
"de rham cohomology"
]
},
{
"term_html": "Hodge star",
"html": "The linear map \\(\\star:\\Lambda^k\\to\\Lambda^{n-k}\\) fixed by a metric and an orientation through \\(\\alpha\\wedge\\star\\beta = \\langle\\alpha,\\beta\\rangle\\,\\mathrm{vol}_g\\). The only place a metric enters Maxwell's equations.",
"section": "The exterior algebra",
"slide": "The Hodge star",
"keys": [
"hodge star"
]
},
{
"term_html": "structure equations",
"html": "Cartan's two equations: \\(\\mathrm{d}e^a = -\\omega^a{}_b\\wedge e^b\\) fixes the connection one-forms from a coframe, and \\(\\Omega^a{}_b = \\mathrm{d}\\omega^a{}_b + \\omega^a{}_c\\wedge\\omega^c{}_b\\) gives the curvature.",
"section": "The exterior algebra",
"slide": "Coframes and the first structure equation",
"keys": [
"structure equations"
]
},
{
"term_html": "k-covector",
"html": "A map \\(V^k\\to\\mathbb{R}\\), linear in each argument and changing sign under any transposition of two arguments: an antisymmetric \\((0,k)\\)-tensor in unit 16's sense.",
"section": "The exterior algebra",
"slide": "\\(\\Lambda^k V^*\\), defined",
"keys": [
"k-covector"
]
},
{
"term_html": "k-th exterior power",
"html": "\\(\\Lambda^kV^*\\), the vector space of \\(k\\)-covectors on \\(V\\). Dimension \\(\\binom nk\\), zero for \\(k &gt; n\\); on spacetime \\(1,4,6,4,1\\).",
"section": "The exterior algebra",
"slide": "\\(\\Lambda^k V^*\\), defined",
"keys": [
"k-th exterior power"
]
},
{
"term_html": "differential k-form",
"html": "A smooth section of \\(\\Lambda^kT^*M\\); in a chart \\(\\sum_{i_1&lt;\\cdots&lt;i_k}\\omega_{i_1\\cdots i_k}\\,\\mathrm{d}x^{i_1}\\wedge\\cdots\\wedge\\mathrm{d}x^{i_k}\\). The space of them is \\(\\Omega^k(M)\\).",
"section": "The exterior algebra",
"slide": "Forms on a manifold",
"keys": [
"differential k-form"
]
},
{
"term_html": "field two-form",
"html": "\\(F = B_x\\,\\mathrm{d}y\\wedge\\mathrm{d}z + B_y\\,\\mathrm{d}z\\wedge\\mathrm{d}x + B_z\\,\\mathrm{d}x\\wedge\\mathrm{d}y + (E_i\\,\\mathrm{d}x^i)\\wedge\\mathrm{d}t = \\mathrm{d}A\\), with \\(A = A_i\\,\\mathrm{d}x^i - \\varphi\\,\\mathrm{d}t\\). One object for \\(\\vec E\\) and \\(\\vec B\\); both halves are in webers.",
"section": "The exterior algebra",
"slide": "Worked example 1 — the field as a two-form",
"keys": [
"field two-form"
]
},
{
"term_html": "exterior derivative",
"html": "The unique \\(\\mathbb{R}\\)-linear \\(\\mathrm{d}:\\Omega^k\\to\\Omega^{k+1}\\) that is the differential on functions, obeys the graded Leibniz rule and squares to zero. \\(\\mathrm{d}^2 = 0\\) is Clairaut's theorem. Grad, curl and divergence are \\(\\mathrm{d}\\) in degrees 0, 1, 2.",
"section": "One derivative",
"slide": "The exterior derivative, axiomatically",
"keys": [
"exterior derivative"
]
},
{
"term_html": "pullback",
"html": "\\((\\phi^*\\omega)_p(v_1,\\dots) = \\omega_{\\phi(p)}(\\mathrm{d}\\phi_p v_1,\\dots)\\) for a smooth \\(\\phi:N\\to M\\). Defined along every smooth map, not only diffeomorphisms, and it commutes with \\(\\wedge\\) and with \\(\\mathrm{d}\\).",
"section": "One derivative",
"slide": "Pullback, and why forms are worth the trouble",
"keys": [
"pullback"
]
},
{
"term_html": "gauge transformation",
"html": "\\(A\\mapsto A + \\mathrm{d}\\lambda\\): adding an exact one-form to the potential, which leaves \\(F = \\mathrm{d}A\\) unchanged because \\(\\mathrm{d}^2 = 0\\). In components, unit 24's \\(\\vec A\\mapsto\\vec A + \\nabla\\lambda\\), \\(\\varphi\\mapsto\\varphi - \\partial_t\\lambda\\).",
"section": "One derivative",
"slide": "Gauge freedom is the freedom to add an exact form",
"keys": [
"gauge transformation"
]
},
{
"term_html": "closed",
"html": "A form with \\(\\mathrm{d}\\omega = 0\\). Every exact form is closed; the converse can fail.",
"section": "One derivative",
"slide": "Closed does not mean exact",
"keys": [
"closed"
]
},
{
"term_html": "orientation",
"html": "A class of nowhere-vanishing top forms, two being equivalent when they differ by a positive function. A connected orientable manifold has exactly two.",
"section": "One theorem",
"slide": "Orientation and the volume form",
"keys": [
"orientation"
]
},
{
"term_html": "orientable",
"html": "Admitting an orientation. The Möbius band is not.",
"section": "One theorem",
"slide": "Orientation and the volume form",
"keys": [
"orientable"
]
},
{
"term_html": "volume form",
"html": "Given a metric and an orientation, the top form equal to \\(+1\\) on positive orthonormal frames; in a chart \\(\\sqrt{|\\det g|}\\,\\mathrm{d}x^1\\wedge\\cdots\\wedge\\mathrm{d}x^n\\).",
"section": "One theorem",
"slide": "Orientation and the volume form",
"keys": [
"volume form"
]
},
{
"term_html": "induced orientation",
"html": "\"Outward normal first\": a frame of \\(\\partial M\\) is positive when the outward normal followed by it is positive in \\(M\\). The one sign convention behind every classical integral theorem.",
"section": "One theorem",
"slide": "The generalised Stokes theorem",
"keys": [
"induced orientation"
]
},
{
"term_html": "Stokes' theorem",
"html": "\\(\\int_M\\mathrm{d}\\omega = \\int_{\\partial M}\\omega\\) for a compactly supported \\((n-1)\\)-form on an oriented manifold with boundary. Proved on the cube; the gradient, Green, curl and divergence theorems are its low-dimensional cases.",
"section": "One theorem",
"slide": "The generalised Stokes theorem",
"keys": [
"stokes' theorem"
]
},
{
"term_html": "exact",
"html": "A form that is \\(\\mathrm{d}\\) of something: \\(\\omega = \\mathrm{d}\\alpha\\).",
"section": "Closed, exact, and the difference",
"slide": "Closed does not mean exact",
"keys": [
"exact"
]
},
{
"term_html": "Poincaré lemma",
"html": "On a star-shaped open set of \\(\\mathbb{R}^n\\), every closed \\(k\\)-form with \\(k\\ge1\\) is exact. Proved for \\(k = 1\\) by integrating along rays.",
"section": "Closed, exact, and the difference",
"slide": "Closed does not mean exact",
"keys": [
"poincaré lemma"
]
},
{
"term_html": "homotopy",
"html": "Here a smooth map \\(H:[0,1]^2\\to U\\) deforming one loop into another through loops. Integrals of a closed one-form do not change along it; hence closed implies exact on a simply connected set.",
"section": "Closed, exact, and the difference",
"slide": "Homotopy invariance: unit 04's promise kept",
"keys": [
"homotopy"
]
},
{
"term_html": "Betti number",
"html": "\\(b_k = \\dim H^k_{\\mathrm{dR}}(M)\\). \\(b_0\\) counts connected components; \\(b_1 = 1\\) for the punctured plane.",
"section": "Closed, exact, and the difference",
"slide": "de Rham cohomology",
"keys": [
"betti number"
]
},
{
"term_html": "periods",
"html": "The integrals \\(\\int_Z\\omega\\) of a closed form over closed oriented submanifolds \\(Z\\). They depend only on the class \\([\\omega]\\); the vortex's period round the origin is \\(2\\pi\\).",
"section": "Closed, exact, and the difference",
"slide": "The pairing: a class against a cycle",
"keys": [
"periods"
]
},
{
"term_html": "current one-form",
"html": "\\(J = -c^2\\rho\\,\\mathrm{d}t + J_i\\,\\mathrm{d}x^i\\), unit 24's charge and current densities with the index lowered by \\(\\eta\\). Its dual \\(\\star J\\) is closed exactly when charge is conserved.",
"section": "The metric enters, once",
"slide": "\\(\\star F\\), computed",
"keys": [
"current one-form"
]
},
{
"term_html": "coframe",
"html": "An orthonormal coframe: one-forms \\(e^a\\) with \\(g = \\eta_{ab}\\,e^a\\otimes e^b\\). Its dual frame \\(e_a\\) is orthonormal.",
"section": "Cartan's moving frames",
"slide": "Coframes and the first structure equation",
"keys": [
"coframe"
]
},
{
"term_html": "connection one-forms",
"html": "\\(\\omega^a{}_b\\), defined by \\(\\nabla e_b = \\omega^a{}_b\\otimes e_a\\). For the Levi-Civita connection they are the unique solution of \\(\\mathrm{d}e^a = -\\omega^a{}_b\\wedge e^b\\) with \\(\\omega_{ab} = -\\omega_{ba}\\).",
"section": "Cartan's moving frames",
"slide": "Coframes and the first structure equation",
"keys": [
"connection one-forms"
]
},
{
"term_html": "curvature two-forms",
"html": "\\(\\Omega^a{}_b = \\mathrm{d}\\omega^a{}_b + \\omega^a{}_c\\wedge\\omega^c{}_b = \\tfrac12R^a{}_{bcd}\\,e^c\\wedge e^d\\): unit 33's Riemann tensor, packaged as two-forms.",
"section": "Cartan's moving frames",
"slide": "The second structure equation, and Bianchi for free",
"keys": [
"curvature two-forms"
]
},
{
"term_html": "geodesic curvature",
"html": "For a unit-speed curve on a surface, \\(\\kappa_g = \\langle\\nabla_TT, N\\rangle\\): how fast it turns away from being a geodesic, measured inside the surface. In a frame, \\(\\kappa_g = \\psi' - \\omega^1{}_2(T)\\).",
"section": "Cartan's moving frames",
"slide": "Gauss–Bonnet, from Stokes and one connection form",
"keys": [
"geodesic curvature"
]
},
{
"term_html": "interior product",
"html": "\\(i_X\\omega = \\omega(X,\\cdot,\\dots,\\cdot)\\): feed a vector field into the first slot. It lowers degree by one.",
"section": "Cartan's moving frames",
"slide": "Liouville's theorem, in one line",
"keys": [
"interior product"
]
},
{
"term_html": "Cartan's magic formula",
"html": "\\(\\mathcal{L}_X = \\mathrm{d}\\,i_X + i_X\\,\\mathrm{d}\\) on forms. With it, Liouville's theorem is \\(\\mathcal{L}_{X_H}\\omega = -\\mathrm{d}\\mathrm{d}H = 0\\).",
"section": "Cartan's moving frames",
"slide": "Liouville's theorem, in one line",
"keys": [
"cartan's magic formula"
]
}
];
