// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "spherically symmetric",
"html": "A spacetime on which \\(SO(3)\\) acts by isometries with every orbit a round 2-sphere or a point. The geometry outside any non-rotating star.",
"section": "The ansatz",
"slide": "Static and spherically symmetric, defined",
"keys": [
"spherically symmetric"
]
},
{
"term_html": "areal radius",
"html": "The function \\(r = \\sqrt{\\text{Area}/4\\pi}\\) of the orbit sphere through a point. Defined by the geometry, with no choice, which is why it can serve as a coordinate; it is not a distance from any centre.",
"section": "The ansatz",
"slide": "Static and spherically symmetric, defined",
"keys": [
"areal radius"
]
},
{
"term_html": "stationary",
"html": "Having a Killing vector field that is timelike (at least far away). The geometry does not change in time.",
"section": "The ansatz",
"slide": "Static and spherically symmetric, defined",
"keys": [
"stationary"
]
},
{
"term_html": "static",
"html": "Stationary, with the timelike Killing field orthogonal to a family of hypersurfaces. Then \\(g_{ti} = 0\\) in adapted coordinates and time reversal is an isometry. A rotating star is stationary but not static.",
"section": "The ansatz",
"slide": "Static and spherically symmetric, defined",
"keys": [
"static"
]
},
{
"term_html": "asymptotic flatness",
"html": "The requirement that the metric tend to Minkowski's far from the source, here \\(A, B\\to1\\) as \\(r\\to\\infty\\). It fixes the constant in \\(AB = \\text{const}\\) to 1, which is a choice of units for \\(t\\).",
"section": "Solving the vacuum equations",
"slide": "Solving: two lines and one constant",
"keys": [
"asymptotic flatness"
]
},
{
"term_html": "Schwarzschild metric",
"html": "\\(\\mathrm ds^2 = -(1 - r_s/r)c^2\\mathrm dt^2 + (1 - r_s/r)^{-1}\\mathrm dr^2 + r^2\\mathrm d\\Omega^2\\): the unique round vacuum solution of the Einstein equations, derived from the ansatz with \\(R_{\\mu\\nu} = 0\\) and the Newtonian limit.",
"section": "Solving the vacuum equations",
"slide": "The constant, from the Newtonian limit",
"keys": [
"schwarzschild metric"
]
},
{
"term_html": "Schwarzschild radius",
"html": "\\(r_s = 2GM/c^2\\). \\(2.953\\) km for the Sun, \\(8.870\\) mm for the Earth, \\(29.53\\) km for the running example. Meaningful as a horizon only if it lies outside the matter.",
"section": "Solving the vacuum equations",
"slide": "The constant, from the Newtonian limit",
"keys": [
"schwarzschild radius"
]
},
{
"term_html": "Birkhoff's theorem",
"html": "A spherically symmetric vacuum solution, where \\(\\nabla r\\) is spacelike, is part of Schwarzschild: round and empty forces static. The proof is \\(R_{tr} = \\partial_tB/(rB) = 0\\) and a rescaling of \\(t\\).",
"section": "Birkhoff's theorem",
"slide": "Birkhoff's theorem",
"keys": [
"birkhoff's theorem"
]
},
{
"term_html": "monopole radiation",
"html": "A spherically symmetric gravitational wave. It does not exist: by Birkhoff, the exterior of a pulsating round star is unchanged. Gravitational radiation starts at the quadrupole.",
"section": "Birkhoff's theorem",
"slide": "Two consequences: silence, and a flat cavity",
"keys": [
"monopole radiation"
]
},
{
"term_html": "relativistic shell theorem",
"html": "The interior of an empty round cavity is flat spacetime, with clocks slowed relative to infinity by a constant factor. Newton's shell theorem with a redshift added.",
"section": "Birkhoff's theorem",
"slide": "Two consequences: silence, and a flat cavity",
"keys": [
"relativistic shell theorem"
]
},
{
"term_html": "Killing vector field",
"html": "A vector field \\(K\\) with \\(\\mathcal L_Kg = 0\\) (unit 31), equivalently \\(\\nabla_\\mu K_\\nu + \\nabla_\\nu K_\\mu = 0\\). Its flow is by isometries; along any geodesic \\(g(K,\\dot x)\\) is conserved, which is Noether's theorem for the geodesic Lagrangian. Schwarzschild has four.",
"section": "Killing fields and constants of motion",
"slide": "The four Killing fields of Schwarzschild",
"keys": [
"killing vector field"
]
},
{
"term_html": "specific energy",
"html": "\\(E = -g(\\partial_t,\\dot x) = (1 - r_s/r)c^2\\dot t\\), the conserved quantity of the time-translation Killing field, per unit rest mass. Far away \\(E\\approx c^2 + \\tfrac12v^2 - GM/r\\).",
"section": "Killing fields and constants of motion",
"slide": "Worked example 3 — E, L, and the radial equation",
"keys": [
"specific energy"
]
},
{
"term_html": "specific angular momentum",
"html": "\\(L = g(\\partial_\\varphi,\\dot x) = r^2\\sin^2\\theta\\,\\dot\\varphi\\), the conserved quantity of the rotation about the axis, per unit rest mass.",
"section": "Killing fields and constants of motion",
"slide": "Worked example 3 — E, L, and the radial equation",
"keys": [
"specific angular momentum"
]
},
{
"term_html": "coordinate singularity",
"html": "A place where a chart's components misbehave but the geometry extends smoothly; some other chart covers it. Dismissed by exhibiting that chart.",
"section": "Two singularities",
"slide": "Where the components misbehave",
"keys": [
"coordinate singularity"
]
},
{
"term_html": "curvature singularity",
"html": "An end of spacetime, reached by a geodesic in finite affine parameter, along which a curvature scalar is unbounded. Convicted by exhibiting the scalar; no chart can remove it.",
"section": "Two singularities",
"slide": "Where the components misbehave",
"keys": [
"curvature singularity"
]
},
{
"term_html": "Kretschmann scalar",
"html": "\\(K = R_{\\alpha\\beta\\gamma\\delta}R^{\\alpha\\beta\\gamma\\delta}\\). For Schwarzschild \\(12r_s^2/r^6 = 48G^2M^2/(c^4r^6)\\): finite at \\(r_s\\), divergent at \\(r = 0\\).",
"section": "Two singularities",
"slide": "The Kretschmann scalar",
"keys": [
"kretschmann scalar"
]
},
{
"term_html": "tortoise coordinate",
"html": "\\(r_* = r + r_s\\ln|r/r_s - 1|\\), defined by \\(\\mathrm dr_*/\\mathrm dr = (1 - r_s/r)^{-1}\\) so that radial light moves on \\(ct \\pm r_* = \\text{const}\\). The horizon is at \\(r_* = -\\infty\\).",
"section": "Two singularities",
"slide": "Worked example 4 — ingoing Eddington–Finkelstein coordinates",
"keys": [
"tortoise coordinate"
]
},
{
"term_html": "ingoing Eddington–Finkelstein coordinates",
"html": "\\((v, r, \\theta, \\varphi)\\) with \\(v = ct + r_*\\). The metric becomes \\(-(1 - r_s/r)\\mathrm dv^2 + 2\\,\\mathrm dv\\,\\mathrm dr + r^2\\mathrm d\\Omega^2\\), smooth with nonzero determinant at \\(r = r_s\\): the proof that the horizon is a coordinate singularity.",
"section": "Two singularities",
"slide": "Worked example 4 — ingoing Eddington–Finkelstein coordinates",
"keys": [
"ingoing eddington–finkelstein coordinates"
]
},
{
"term_html": "null hypersurface",
"html": "A hypersurface whose normal covector is null; it is generated by light rays and can be crossed in one direction only. The surface \\(r = r_s\\) is one.",
"section": "Two singularities",
"slide": "The horizon is a one-way null surface",
"keys": [
"null hypersurface"
]
},
{
"term_html": "event horizon",
"html": "The boundary of the region from which a future causal curve can escape to infinity — precisely, the boundary of the causal past of \\(\\mathscr I^+\\). For Schwarzschild, \\(r = r_s\\). A global object, invisible to local measurement.",
"section": "Two singularities",
"slide": "Nothing happens at the horizon, locally",
"keys": [
"event horizon"
]
},
{
"term_html": "static observer",
"html": "One at fixed \\(r, \\theta, \\varphi\\), moving along \\(\\partial_t\\). Exists only for \\(r \\gt r_s\\), needs proper acceleration \\(GM/(r^2\\sqrt{1 - r_s/r})\\), and its clock runs at \\(\\sqrt{1 - r_s/r}\\) times the rate at infinity.",
"section": "Two observers",
"slide": "Static observers: their rulers and their clocks",
"keys": [
"static observer"
]
},
{
"term_html": "proper radial distance",
"html": "\\(\\int\\mathrm dr/\\sqrt{1 - r_s/r}\\) at fixed \\(t\\), what a chain of static rulers measures. From \\(r_s\\) to \\(2r_s\\) it is \\(2.296\\,r_s\\), \\(67.79\\) km for the running example.",
"section": "Two observers",
"slide": "Static observers: their rulers and their clocks",
"keys": [
"proper radial distance"
]
},
{
"term_html": "conformal compactification",
"html": "An embedding of \\((M, g)\\) into a manifold with boundary carrying \\(\\omega^2g\\), with the factor \\(\\omega\\) positive inside and vanishing on the boundary. It keeps light cones and brings infinity to finite distance.",
"section": "The whole spacetime",
"slide": "Conformal compactification, on Minkowski first",
"keys": [
"conformal compactification"
]
},
{
"term_html": "Penrose diagram",
"html": "The two-dimensional picture of a conformal compactification of a spherically symmetric spacetime: one point per round sphere, light at \\(45^\\circ\\), infinity drawn as a boundary.",
"section": "The whole spacetime",
"slide": "The Penrose diagram of Minkowski space",
"keys": [
"penrose diagram"
]
},
{
"term_html": "timelike infinity",
"html": "The points \\(i^\\pm\\) of a Penrose diagram where timelike geodesics end and begin.",
"section": "The whole spacetime",
"slide": "The Penrose diagram of Minkowski space",
"keys": [
"timelike infinity"
]
},
{
"term_html": "null infinity",
"html": "The boundary segments \\(\\mathscr I^\\pm\\) (\"scri\") where light rays end and begin; the place where radiation is defined.",
"section": "The whole spacetime",
"slide": "The Penrose diagram of Minkowski space",
"keys": [
"null infinity"
]
},
{
"term_html": "spatial infinity",
"html": "The point \\(i^0\\) where spacelike slices end.",
"section": "The whole spacetime",
"slide": "The Penrose diagram of Minkowski space",
"keys": [
"spatial infinity"
]
},
{
"term_html": "Kruskal–Szekeres coordinates",
"html": "\\(U = -e^{-u/2r_s}\\), \\(V = e^{v/2r_s}\\), with \\(u, v = ct \\mp r_*\\). The metric becomes \\(-(4r_s^3/r)e^{-r/r_s}\\mathrm dU\\,\\mathrm dV + r^2\\mathrm d\\Omega^2\\) with \\(UV = (1 - r/r_s)e^{r/r_s}\\), smooth on all of \\(UV \\lt 1\\).",
"section": "The whole spacetime",
"slide": "Worked example 5 — Kruskal–Szekeres, step by step",
"keys": [
"kruskal–szekeres coordinates"
]
},
{
"term_html": "maximal extension",
"html": "The Kruskal spacetime \\(\\{UV \\lt 1\\}\\): every geodesic either runs for ever or ends at the curvature singularity, so no larger spacetime contains it.",
"section": "The whole spacetime",
"slide": "Worked example 5 — Kruskal–Szekeres, step by step",
"keys": [
"maximal extension"
]
},
{
"term_html": "black hole region",
"html": "Region II, \\(U, V \\gt 0\\): every future causal curve in it reaches \\(r = 0\\) within proper time \\(\\pi r_s/2c\\).",
"section": "The whole spacetime",
"slide": "Four regions, and which of them are real",
"keys": [
"black hole region"
]
},
{
"term_html": "white hole region",
"html": "Region IV, \\(U, V \\lt 0\\): the time reverse of region II, which everything must leave. Absent from any hole formed by collapse.",
"section": "The whole spacetime",
"slide": "Four regions, and which of them are real",
"keys": [
"white hole region"
]
},
{
"term_html": "Einstein–Rosen bridge",
"html": "The throat of radius \\(r_s\\) joining the two exteriors I and III on the slice \\(T = 0\\). It pinches off too fast for any causal curve to cross it.",
"section": "The whole spacetime",
"slide": "Four regions, and which of them are real",
"keys": [
"einstein–rosen bridge"
]
}
];
