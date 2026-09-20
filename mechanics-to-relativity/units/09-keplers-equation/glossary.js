// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "true anomaly",
"html": "The angle \\(\\theta\\) from perihelion to the planet, seen from the Sun: where the planet actually is. Unit 08's \\(\\theta\\) in \\(r = p/(1+e\\cos\\theta)\\); astronomers write \\(\\nu\\) or \\(f\\).",
"section": "The timetable",
"slide": "Where unit 08 left the clock",
"keys": [
"true anomaly"
]
},
{
"term_html": "mean motion",
"html": "\\(n = 2\\pi/T\\), the average angular rate over an orbit. For Mars \\(0.524033^\\circ\\) per day.",
"section": "The timetable",
"slide": "Where unit 08 left the clock",
"keys": [
"mean motion"
]
},
{
"term_html": "mean anomaly",
"html": "\\(M = n(t - \\tau)\\), with \\(\\tau\\) the time of perihelion: a clock reading in radians, the angle a body moving uniformly would have swept. It is what Kepler's equation takes as input.",
"section": "The timetable",
"slide": "Where unit 08 left the clock",
"keys": [
"mean anomaly"
]
},
{
"term_html": "auxiliary circle",
"html": "The circle of radius \\(a\\) about the ellipse's centre. The ellipse is its image under the squash \\(Y \\mapsto (b/a)Y\\), which multiplies every area by \\(b/a\\).",
"section": "The timetable",
"slide": "The eccentric anomaly",
"keys": [
"auxiliary circle"
]
},
{
"term_html": "eccentric anomaly",
"html": "The angle \\(E\\), at the ellipse's centre, of the point on the auxiliary circle directly above the planet. Then \\(r = a(1 - e\\cos E)\\) and \\(\\tan\\frac\\theta2 = \\sqrt{(1+e)/(1-e)}\\,\\tan\\frac E2\\).",
"section": "The timetable",
"slide": "The eccentric anomaly",
"keys": [
"eccentric anomaly"
]
},
{
"term_html": "Kepler's equation",
"html": "\\(E - e\\sin E = M\\): the timetable of the bound Kepler orbit. Kepler's second law applied to the auxiliary circle, or unit 08's quadrature integral evaluated by \\(r = a(1 - e\\cos E)\\). It has exactly one solution for each \\(M\\) when \\(0 \\le e &lt; 1\\), and no closed-form inverse.",
"section": "The timetable",
"slide": "Kepler's equation",
"keys": [
"kepler's equation"
]
},
{
"term_html": "Newton's method",
"html": "\\(E_{k+1} = E_k - f(E_k)/f'(E_k)\\): solve the tangent line instead of the curve. For Kepler \\(f(E) = E - e\\sin E - M\\).",
"section": "The timetable",
"slide": "Newton's method, and why it doubles the digits",
"keys": [
"newton's method"
]
},
{
"term_html": "quadratic convergence",
"html": "\\(|E_{k+1} - E| \\le C|E_k - E|^2\\). Proved from Taylor's theorem with \\(C = \\max|f''|/2\\min|f'|\\), which is \\(e/2(1-e)\\) for Kepler: \\(0.0515\\) for Mars. The number of correct digits roughly doubles each step.",
"section": "The timetable",
"slide": "Newton's method, and why it doubles the digits",
"keys": [
"quadratic convergence"
]
},
{
"term_html": "series in a parameter",
"html": "A solution written as a power series in a small quantity of the problem, here \\(e\\). Each truncation is right to its order; whether the whole series converges is a separate question.",
"section": "A series in the eccentricity",
"slide": "Each iteration is correct to one more order",
"keys": [
"series in a parameter"
]
},
{
"term_html": "Lagrange inversion",
"html": "For \\(E = M + e\\varphi(E)\\), the \\(e^k\\) Taylor coefficient of \\(F(E)\\) is \\(\\frac1{k!}\\frac{\\mathrm d^{k-1}}{\\mathrm dM^{k-1}}[\\varphi(M)^kF'(M)]\\). Proved from \\(\\partial_eE = \\varphi(E)\\,\\partial_ME\\) by induction. It gives the coefficients, not convergence.",
"section": "A series in the eccentricity",
"slide": "Lagrange inversion: every coefficient at once",
"keys": [
"lagrange inversion"
]
},
{
"term_html": "Fourier sine coefficients",
"html": "\\(b_n = \\frac2\\pi\\int_0^\\pi g(M)\\sin nM\\,\\mathrm dM\\) for an odd \\(2\\pi\\)-periodic \\(g\\). That a \\(C^1\\) such \\(g\\) equals \\(\\sum b_n\\sin nM\\) is cited from unit 19.",
"section": "Fourier coefficients and Bessel's integral",
"slide": "Just enough Fourier: sine coefficients",
"keys": [
"fourier sine coefficients"
]
},
{
"term_html": "orthogonality",
"html": "\\(\\int_0^\\pi\\sin mM\\sin nM\\,\\mathrm dM = \\frac\\pi2\\delta_{mn}\\). It is what isolates one coefficient from a series.",
"section": "Fourier coefficients and Bessel's integral",
"slide": "Just enough Fourier: sine coefficients",
"keys": [
"orthogonality"
]
},
{
"term_html": "Fourier–Bessel expansion",
"html": "\\(E = M + \\sum_{n\\ge1}\\frac2nJ_n(ne)\\sin nM\\), the harmonics of Kepler's equation. Obtained by integrating by parts and changing variable from \\(M\\) to \\(E\\). Converges for every \\(e &lt; 1\\).",
"section": "Fourier coefficients and Bessel's integral",
"slide": "Worked: the harmonics of Kepler's equation",
"keys": [
"fourier–bessel expansion"
]
},
{
"term_html": "Bessel's integral",
"html": "\\(J_n(x) = \\frac1\\pi\\int_0^\\pi\\cos(n\\vartheta - x\\sin\\vartheta)\\,\\mathrm d\\vartheta\\), the form in which Bessel met the functions on Kepler's problem. Proved equal to the power-series definition.",
"section": "Fourier coefficients and Bessel's integral",
"slide": "Worked: the harmonics of Kepler's equation",
"keys": [
"bessel's integral"
]
},
{
"term_html": "Bessel function of the first kind",
"html": "For integer \\(n \\ge 0\\), \\(J_n(x) = \\sum_k\\frac{(-1)^k}{k!(n+k)!}(x/2)^{n+2k}\\), converging for every \\(x\\); \\(J_{-n} = (-1)^nJ_n\\). Bounded by \\(\\frac{(|x|/2)^n}{n!}\\exp\\frac{x^2}{4(n+1)}\\).",
"section": "Bessel functions",
"slide": "The definition, and a bound",
"keys": [
"bessel function of the first kind"
]
},
{
"term_html": "generating function",
"html": "\\(\\exp\\big(\\frac x2(t - \\frac1t)\\big) = \\sum_nJ_n(x)t^n\\). One function of two variables encoding the whole family; differentiating it and comparing coefficients proves identities.",
"section": "Bessel functions",
"slide": "The generating function",
"keys": [
"generating function"
]
},
{
"term_html": "Jacobi–Anger expansion",
"html": "\\(\\mathrm e^{ix\\sin\\vartheta} = \\sum_nJ_n(x)\\mathrm e^{in\\vartheta}\\): the generating function at \\(t = \\mathrm e^{i\\vartheta}\\). The spectrum of a phase-modulated wave.",
"section": "Bessel functions",
"slide": "The series and the integral are the same function",
"keys": [
"jacobi–anger expansion"
]
},
{
"term_html": "recurrence relations",
"html": "\\(J_{n-1} + J_{n+1} = \\frac{2n}xJ_n\\) and \\(J_{n-1} - J_{n+1} = 2J_n'\\); equivalently \\((x^nJ_n)' = x^nJ_{n-1}\\) and \\((x^{-n}J_n)' = -x^{-n}J_{n+1}\\).",
"section": "Bessel functions",
"slide": "Recurrences",
"keys": [
"recurrence relations"
]
},
{
"term_html": "Bessel's equation",
"html": "\\(x^2y'' + xy' + (x^2 - n^2)y = 0\\). \\(J_n\\) solves it; on \\((0,\\infty)\\) its solutions form a two-dimensional space, and every solution independent of \\(J_n\\) is unbounded at \\(0\\).",
"section": "Bessel functions",
"slide": "Bessel's differential equation",
"keys": [
"bessel's equation"
]
},
{
"term_html": "regular singular point",
"html": "A point, here \\(x = 0\\), where the equation can be written \\(x^2y'' + xp(x)y' + q(x)y = 0\\) with \\(p, q\\) power series. Solutions behave like powers of \\(x\\), possibly times \\(\\ln x\\).",
"section": "Frobenius",
"slide": "Regular singular points",
"keys": [
"regular singular point"
]
},
{
"term_html": "Frobenius method",
"html": "Try \\(y = x^r\\sum_ka_kx^k\\) with \\(a_0 \\ne 0\\), and solve for \\(r\\) and the \\(a_k\\) by comparing powers of \\(x\\).",
"section": "Frobenius",
"slide": "Regular singular points",
"keys": [
"frobenius method"
]
},
{
"term_html": "indicial equation",
"html": "The lowest-order coefficient condition, \\(r(r-1) + p(0)r + q(0) = 0\\); for Bessel \\(r^2 = n^2\\). When its roots differ by an integer the recursion may hit \\(0\\cdot a_k = \\text{nonzero}\\) at \\(k = r_1 - r_2\\).",
"section": "Frobenius",
"slide": "The indicial equation, and the first solution recovered",
"keys": [
"indicial equation"
]
},
{
"term_html": "logarithmic solution",
"html": "The second solution when Frobenius series run out. For \\(n = 0\\), \\(J_0\\ln x + \\sum_{j\\ge1}\\frac{(-1)^{j+1}H_j}{(j!)^2}(x/2)^{2j}\\), found by differentiating the \\(r\\)-dependent series in \\(r\\).",
"section": "Frobenius",
"slide": "The double root, and where the logarithm comes from",
"keys": [
"logarithmic solution"
]
},
{
"term_html": "harmonic number",
"html": "\\(H_j = 1 + \\frac12 + \\cdots + \\frac1j\\). Appears as \\(-a_{2j}'(0)/a_{2j}(0)\\) in the logarithmic solution.",
"section": "Frobenius",
"slide": "The double root, and where the logarithm comes from",
"keys": [
"harmonic number"
]
},
{
"term_html": "Liouville substitution",
"html": "\\(y = u/\\sqrt x\\), which removes the first-derivative term from Bessel's equation: \\(u'' + (1 - (n^2 - \\frac14)/x^2)u = 0\\).",
"section": "Frobenius",
"slide": "Far from the origin: a decaying cosine",
"keys": [
"liouville substitution"
]
},
{
"term_html": "large-\\(x\\) form",
"html": "\\(J_n(x) = \\sqrt{2/\\pi x}\\cos(x - n\\pi/2 - \\pi/4) + O(x^{-3/2})\\). The form \\(Ax^{-1/2}\\cos(x - \\varphi)\\) is proved here; the constants are cited from unit 20.",
"section": "Frobenius",
"slide": "Far from the origin: a decaying cosine",
"keys": [
"large-x form"
]
},
{
"term_html": "Laplace limit",
"html": "\\(\\lambda = 0.6627434\\ldots\\), with \\(\\lambda = \\sqrt{x^2 - 1}\\) and \\(x = \\coth x\\). Lagrange's power series in \\(e\\) converges for every \\(M\\) when \\(e &lt; \\lambda\\) and diverges at \\(M = \\pi/2\\) when \\(e &gt; \\lambda\\). Proved here for \\(e &lt; 0.6599\\); sharpness and the reason owed to unit 20. The Fourier–Bessel series has no such limit.",
"section": "Mars, and where the series stop",
"slide": "The Laplace limit",
"keys": [
"laplace limit"
]
}
];
