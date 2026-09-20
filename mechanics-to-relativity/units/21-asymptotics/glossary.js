// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "small parameter",
"html": "A dimensionless number \\(\\varepsilon\\), built from the problem's parameters, that is small compared with 1 and multiplies the terms you hope to treat as corrections. It is found, not chosen: by nondimensionalising.",
"section": "Small parameters, and where they come from",
"slide": "Nondimensionalise first",
"keys": [
"small parameter"
]
},
{
"term_html": "nondimensionalisation",
"html": "Rewriting an equation in variables scaled by characteristic values built from the parameters, chosen so that the scaled variables and their derivatives are of size one. What remains are the dimensionless groups of the Buckingham theorem (unit 00); for the cubic spring, \\(\\varepsilon = \\beta a^2/k\\).",
"section": "Small parameters, and where they come from",
"slide": "Nondimensionalise first",
"keys": [
"nondimensionalisation"
]
},
{
"term_html": "regular perturbation",
"html": "A problem whose \\(\\varepsilon = 0\\) version is of the same kind — same degree or order, all conditions imposable — and whose solution is the limit of the true one, so that a power series in \\(\\varepsilon\\) works.",
"section": "Small parameters, and where they come from",
"slide": "Regular or singular: the test",
"keys": [
"regular perturbation"
]
},
{
"term_html": "singular perturbation",
"html": "A problem that is not regular: typically \\(\\varepsilon\\) multiplies the highest power or derivative, so setting it to zero loses roots or boundary conditions. Also used for problems regular in the equation but non-uniform on an unbounded domain.",
"section": "Small parameters, and where they come from",
"slide": "Regular or singular: the test",
"keys": [
"singular perturbation"
]
},
{
"term_html": "dominant balance",
"html": "Finding the scaling \\(x = \\varepsilon^{-\\alpha}X\\) under which two terms are of the same size and all others smaller. Each consistent balance gives one family of solutions or one region of a boundary-layer problem.",
"section": "Small parameters, and where they come from",
"slide": "Regular or singular: the test",
"keys": [
"dominant balance"
]
},
{
"term_html": "order notation",
"html": "As \\(x \\to x_0\\): \\(f = O(g)\\) if \\(|f/g|\\) is bounded near \\(x_0\\); \\(f = o(g)\\) if \\(f/g \\to 0\\). Statements about a limit, never about a particular \\(x\\).",
"section": "Asymptotic series",
"slide": "Order notation",
"keys": [
"order notation"
]
},
{
"term_html": "asymptotically equivalent",
"html": "\\(f \\sim g\\) as \\(x \\to x_0\\) if \\(f/g \\to 1\\). Controls the relative error only.",
"section": "Asymptotic series",
"slide": "Order notation",
"keys": [
"asymptotically equivalent"
]
},
{
"term_html": "asymptotic sequence",
"html": "Functions \\(\\phi_n\\) with \\(\\phi_{n+1} = o(\\phi_n)\\) as \\(x \\to x_0\\), for every \\(n\\). The powers \\(x^n\\) as \\(x \\to 0\\) are the standard one.",
"section": "Asymptotic series",
"slide": "Poincaré's definition",
"keys": [
"asymptotic sequence"
]
},
{
"term_html": "asymptotic expansion",
"html": "\\(f \\sim \\sum a_n\\phi_n\\) if \\(f - \\sum_{n \\le N} a_n\\phi_n = o(\\phi_N)\\) for every \\(N\\) (Poincaré, 1886). A statement about fixed \\(N\\) as \\(x \\to x_0\\); the series need not converge. The coefficients are unique; the function is not, since \\(e^{-1/x} \\sim 0\\).",
"section": "Asymptotic series",
"slide": "Poincaré's definition",
"keys": [
"asymptotic expansion"
]
},
{
"term_html": "Stieltjes function",
"html": "\\(S(x) = \\int_0^\\infty e^{-t}/(1 + xt)\\,\\mathrm{d}t\\), whose asymptotic series \\(\\sum(-1)^n n!\\,x^n\\) diverges for every \\(x \\ne 0\\), with remainder smaller than the first omitted term and of its sign.",
"section": "Asymptotic series",
"slide": "The Stieltjes series, and its remainder",
"keys": [
"stieltjes function"
]
},
{
"term_html": "optimal truncation",
"html": "Stopping an asymptotic series at its smallest term, where adding more terms starts to make the answer worse. For the Stieltjes series, at \\(N = \\lfloor 1/x \\rfloor\\), with error at most \\((e^2/x)e^{-1/x}\\).",
"section": "Asymptotic series",
"slide": "Optimal truncation",
"keys": [
"optimal truncation"
]
},
{
"term_html": "exponentially small",
"html": "Smaller than every power of the small parameter, like \\(e^{-1/x}\\) as \\(x \\to 0^+\\). Invisible to any power series; also called beyond all orders.",
"section": "Asymptotic series",
"slide": "Optimal truncation",
"keys": [
"exponentially small"
]
},
{
"term_html": "Borel summation",
"html": "Assigning a value to \\(\\sum a_nx^n\\) as \\(\\int_0^\\infty e^{-t}B(xt)\\,\\mathrm{d}t\\) with \\(B(t) = \\sum a_nt^n/n!\\). Recovers the Stieltjes function exactly from its divergent series. Named, not developed.",
"section": "Asymptotic series",
"slide": "Borel summation, named",
"keys": [
"borel summation"
]
},
{
"term_html": "perturbation hierarchy",
"html": "The sequence of equations obtained by substituting \\(x = x_0 + \\varepsilon x_1 + \\cdots\\) and equating each power of \\(\\varepsilon\\) to zero: the same linear operator at every order, forced by lower orders.",
"section": "Secular terms",
"slide": "Regular perturbation, the naive way",
"keys": [
"perturbation hierarchy"
]
},
{
"term_html": "secular term",
"html": "A term in a perturbation series that grows without bound in the independent variable, like \\(t\\sin t\\), produced by forcing a linear oscillator at its own frequency. Usually a frequency shift, Taylor-expanded. From <em>saeculum</em>, the astronomers' century.",
"section": "Secular terms",
"slide": "Worked: the naive first order",
"keys": [
"secular term"
]
},
{
"term_html": "uniformly valid",
"html": "An approximation whose error is bounded by one function of \\(\\varepsilon\\), tending to zero, for all values of the other variable at once. The naive Duffing expansion is \\(O(\\varepsilon^2)\\) at each fixed \\(t\\) but not uniformly on \\([0, \\infty)\\).",
"section": "Secular terms",
"slide": "Why the naive answer dies at t ~ 1/ε",
"keys": [
"uniformly valid"
]
},
{
"term_html": "solvability condition",
"html": "\\(u'' + u = f\\), \\(f\\) \\(2\\pi\\)-periodic, has a \\(2\\pi\\)-periodic solution iff \\(f\\) is orthogonal to \\(\\cos\\tau\\) and \\(\\sin\\tau\\) over a period. Imposing it at each order is how secular terms are removed.",
"section": "Removing secular terms",
"slide": "The solvability condition",
"keys": [
"solvability condition"
]
},
{
"term_html": "Poincaré–Lindstedt method",
"html": "For a periodic solution of unknown frequency: strain the time, \\(\\tau = \\omega t\\), expand \\(\\omega = 1 + \\varepsilon\\omega_1 + \\cdots\\) along with the solution, and fix each \\(\\omega_n\\) by the solvability condition.",
"section": "Removing secular terms",
"slide": "Worked: Poincaré–Lindstedt for Duffing",
"keys": [
"poincaré–lindstedt method"
]
},
{
"term_html": "method of multiple scales",
"html": "Treating the solution as a function of a fast time \\(t\\) and a slow time \\(T = \\varepsilon t\\) independently, so that \\(\\mathrm{d}/\\mathrm{d}t = \\partial_t + \\varepsilon\\partial_T\\), and using the freedom in the \\(T\\)-dependence to remove secular terms. Works without periodicity.",
"section": "Removing secular terms",
"slide": "Multiple scales",
"keys": [
"method of multiple scales"
]
},
{
"term_html": "amplitude equations",
"html": "The equations for the slowly varying amplitude and phase that the solvability condition imposes in a multiple-scales calculation; for Duffing, \\(a' = 0\\), \\(\\phi' = \\tfrac38a^2\\).",
"section": "Removing secular terms",
"slide": "Multiple scales",
"keys": [
"amplitude equations"
]
},
{
"term_html": "boundary layer",
"html": "A thin region, of width set by dominant balance, in which the solution changes by \\(O(1)\\) and the term multiplied by the small parameter is not small. Prandtl, 1904.",
"section": "Boundary layers",
"slide": "A small parameter on the highest derivative",
"keys": [
"boundary layer"
]
},
{
"term_html": "outer solution",
"html": "The expansion valid away from the layer, solving the reduced equation with the boundary condition it can keep.",
"section": "Boundary layers",
"slide": "Inner and outer solutions",
"keys": [
"outer solution"
]
},
{
"term_html": "inner solution",
"html": "The expansion valid inside the layer, in the stretched variable \\(X = x/\\varepsilon\\).",
"section": "Boundary layers",
"slide": "Inner and outer solutions",
"keys": [
"inner solution"
]
},
{
"term_html": "distinguished limit",
"html": "The stretching exponent at which the highest derivative balances another term, giving the richest inner equation. For \\(\\varepsilon y'' + (1+x)y' + y = 0\\), \\(x = \\varepsilon X\\).",
"section": "Boundary layers",
"slide": "Inner and outer solutions",
"keys": [
"distinguished limit"
]
},
{
"term_html": "matching",
"html": "Fixing the inner solution's free constants by requiring it to agree with the outer solution where both are valid.",
"section": "Boundary layers",
"slide": "Matching: the intermediate variable and Van Dyke's rule",
"keys": [
"matching"
]
},
{
"term_html": "intermediate variable",
"html": "\\(x = \\varepsilon^\\beta\\xi\\) with \\(0 \\lt \\beta \\lt 1\\), lying in the overlap \\(\\varepsilon \\ll x \\ll 1\\) where inner and outer expansions must agree.",
"section": "Boundary layers",
"slide": "Matching: the intermediate variable and Van Dyke's rule",
"keys": [
"intermediate variable"
]
},
{
"term_html": "Van Dyke's matching rule",
"html": "The \\(m\\)-term inner expansion of the \\(n\\)-term outer solution equals the \\(n\\)-term outer expansion of the \\(m\\)-term inner solution. A procedure, reliable for power laws, fallible with logarithms.",
"section": "Boundary layers",
"slide": "Matching: the intermediate variable and Van Dyke's rule",
"keys": [
"van dyke's matching rule"
]
},
{
"term_html": "composite expansion",
"html": "Outer plus inner minus their common part; uniformly valid on the whole interval. For the model problem \\(2/(1+x) - 2e^{-x/\\varepsilon}\\), with error \\(O(\\varepsilon)\\).",
"section": "Boundary layers",
"slide": "Worked: the composite solution, against the exact one",
"keys": [
"composite expansion"
]
},
{
"term_html": "WKB approximation",
"html": "For \\(\\varepsilon^2y'' + q(x)y = 0\\) with \\(q \\gt 0\\): \\(y \\approx q^{-1/4}[C_1\\cos(\\varepsilon^{-1}\\int\\sqrt q) + C_2\\sin(\\varepsilon^{-1}\\int\\sqrt q)]\\). Also called the Liouville–Green approximation.",
"section": "WKB",
"slide": "The WKB approximation",
"keys": [
"wkb approximation"
]
},
{
"term_html": "eikonal equation",
"html": "The leading-order WKB equation \\(S_0'^2 = -q\\), which fixes the phase. For a reader who has done unit 15, it is the one-dimensional Hamilton–Jacobi equation; nothing here depends on that.",
"section": "WKB",
"slide": "The WKB approximation",
"keys": [
"eikonal equation"
]
},
{
"term_html": "transport equation",
"html": "The next-order WKB equation \\(2S_0'S_1' + S_0'' = 0\\), which fixes the amplitude as \\(q^{-1/4}\\).",
"section": "WKB",
"slide": "The WKB approximation",
"keys": [
"transport equation"
]
},
{
"term_html": "adiabatic invariant",
"html": "A quantity conserved to good accuracy when a parameter changes slowly compared with the motion. For \\(\\ddot x + \\omega(\\varepsilon t)^2x = 0\\), \\(E/\\omega\\).",
"section": "WKB",
"slide": "When WKB is valid, and an adiabatic invariant",
"keys": [
"adiabatic invariant"
]
},
{
"term_html": "turning point",
"html": "A zero of \\(q\\), where the WKB solution changes from oscillatory to exponential and the approximation itself fails; locally an Airy equation in a region of width \\(\\varepsilon^{2/3}\\).",
"section": "WKB",
"slide": "Turning points and the connection formulae",
"keys": [
"turning point"
]
},
{
"term_html": "connection formulae",
"html": "The rule, cited from the Airy function's asymptotics, that the WKB solution decaying beyond a simple turning point continues on the oscillatory side as \\(2q^{-1/4}\\cos(\\varepsilon^{-1}\\int_x^a\\sqrt q - \\pi/4)\\).",
"section": "WKB",
"slide": "Turning points and the connection formulae",
"keys": [
"connection formulae"
]
}
];
