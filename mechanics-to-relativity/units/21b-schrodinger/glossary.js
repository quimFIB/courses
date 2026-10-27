// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "Planck–Einstein relations",
"html": "\\(E = \\hbar\\omega\\) and \\(\\vec p = \\hbar\\vec k\\), with \\(\\hbar = h/2\\pi = 1.0546\\times10^{-34}\\) J s: light is exchanged in lumps of energy \\(\\hbar\\omega\\) and momentum \\(\\hbar k\\). Evidence: the photoelectric effect and Compton scattering.",
"section": "Which wave equation?",
"slide": "Quanta, and de Broglie turning them round",
"keys": [
"planck–einstein relations"
]
},
{
"term_html": "de Broglie relation",
"html": "A particle of momentum \\(p\\) is a wave of wavelength \\(\\lambda = h/p\\) (1924). Confirmed by Davisson and Germer (1927): 54 eV electrons, \\(\\lambda = 0.167\\) nm predicted, \\(0.165\\) nm measured.",
"section": "Which wave equation?",
"slide": "Quanta, and de Broglie turning them round",
"keys": [
"de broglie relation"
]
},
{
"term_html": "Schrödinger equation",
"html": "\\(i\\hbar\\,\\partial_t\\psi = -\\frac{\\hbar^2}{2m}\\nabla^2\\psi + V\\psi\\). The simplest linear equation, first order in time, solved by de Broglie's plane waves with \\(E = p^2/2m\\), whose short-wavelength limit is the Hamilton–Jacobi equation. A hypothesis whose warrant is experiment.",
"section": "Which wave equation?",
"slide": "Choosing the equation",
"keys": [
"schrödinger equation"
]
},
{
"term_html": "wavefunction",
"html": "The complex-valued solution \\(\\psi(\\vec x, t)\\) of the Schrödinger equation. Complex because a first-order-in-time equation with real coefficients would be the heat equation, which decays.",
"section": "Which wave equation?",
"slide": "Choosing the equation",
"keys": [
"wavefunction"
]
},
{
"term_html": "quantum potential",
"html": "\\(Q = -\\frac{\\hbar^2}{2m}\\nabla^2A/A\\) for \\(\\psi = Ae^{iS/\\hbar}\\): the order-\\(\\hbar^2\\) term that the Schrödinger equation adds to \\(V\\) in the Hamilton–Jacobi equation for \\(S\\). At order \\(\\hbar^0\\) the equation for \\(S\\) is Hamilton–Jacobi exactly; at order \\(\\hbar^1\\) the equation for \\(A^2\\) is a conservation law.",
"section": "Which wave equation?",
"slide": "Hamilton–Jacobi at leading order, a conservation law at the next",
"keys": [
"quantum potential"
]
},
{
"term_html": "Born rule",
"html": "\\(|\\psi|^2\\,\\mathrm d^3x\\) is the probability of finding the particle in \\(\\mathrm d^3x\\), for normalised \\(\\psi\\) (1926). A postulate, shown consistent by the continuity equation.",
"section": "Which wave equation?",
"slide": "Probability, and the current that carries it",
"keys": [
"born rule"
]
},
{
"term_html": "continuity equation",
"html": "\\(\\partial_t\\rho + \\nabla\\cdot\\vec j = 0\\) with \\(\\rho = |\\psi|^2\\): holds for real \\(V\\), and with the divergence theorem conserves \\(\\int|\\psi|^2\\). In polar form it is the order-\\(\\hbar\\) equation, unit 21's transport equation read as a conservation law.",
"section": "Which wave equation?",
"slide": "Probability, and the current that carries it",
"keys": [
"continuity equation"
]
},
{
"term_html": "probability current",
"html": "\\(\\vec j = \\frac\\hbar m\\mathrm{Im}(\\bar\\psi\\nabla\\psi) = A^2\\nabla S/m\\). For a plane wave, \\(\\vec j = \\rho\\vec p/m\\): probability flows at the classical velocity.",
"section": "Which wave equation?",
"slide": "Probability, and the current that carries it",
"keys": [
"probability current"
]
},
{
"term_html": "Hilbert space",
"html": "For one particle, \\(L^2(\\mathbb R^3)\\) with \\(\\langle\\varphi, \\psi\\rangle = \\int\\bar\\varphi\\psi\\): conjugate-linear in the first slot, the opposite convention to units 19 and 20. Metrically complete.",
"section": "What the objects are",
"slide": "States: unit vectors in L^2, up to a phase",
"keys": [
"hilbert space"
]
},
{
"term_html": "state",
"html": "A unit vector of the Hilbert space, with \\(\\psi\\) and \\(e^{i\\alpha}\\psi\\) identified: a ray. Global phases are invisible; relative phases between superposed vectors are not.",
"section": "What the objects are",
"slide": "States: unit vectors in L^2, up to a phase",
"keys": [
"state"
]
},
{
"term_html": "position operator",
"html": "\\((X\\psi)(x) = x\\psi(x)\\). Its expectation value is the mean of the Born density.",
"section": "What the objects are",
"slide": "Observables: position, momentum, and where they come from",
"keys": [
"position operator"
]
},
{
"term_html": "momentum operator",
"html": "\\((P\\psi)(x) = -i\\hbar\\psi'(x)\\). Its expectation value is the mean of the momentum density \\(|\\tilde\\psi(p/\\hbar)|^2/2\\pi\\hbar\\), by Plancherel, where \\(\\tilde\\psi(k) = \\int\\psi e^{-ikx}\\,\\mathrm dx\\).",
"section": "What the objects are",
"slide": "Observables: position, momentum, and where they come from",
"keys": [
"momentum operator"
]
},
{
"term_html": "expectation value",
"html": "\\(\\langle A\\rangle_\\psi = \\langle\\psi, A\\psi\\rangle\\), the mean of the outcomes of measuring \\(A\\) in the state \\(\\psi\\).",
"section": "What the objects are",
"slide": "Observables: position, momentum, and where they come from",
"keys": [
"expectation value"
]
},
{
"term_html": "domain",
"html": "The dense subspace \\(D(A)\\) on which an operator \\(A\\) is defined. Unbounded operators cannot be defined everywhere (Hellinger–Toeplitz), and which domain is chosen is part of the operator.",
"section": "What the objects are",
"slide": "Unbounded operators need domains",
"keys": [
"domain"
]
},
{
"term_html": "symmetric operator",
"html": "\\(\\langle\\varphi, A\\psi\\rangle = \\langle A\\varphi, \\psi\\rangle\\) for all \\(\\varphi, \\psi\\) in \\(D(A)\\). Equivalently \\(A \\subset A^*\\). Not enough for a real spectrum or for a dynamics.",
"section": "What the objects are",
"slide": "Unbounded operators need domains",
"keys": [
"symmetric operator"
]
},
{
"term_html": "adjoint",
"html": "\\(A^*\\): defined on the \\(\\varphi\\) for which \\(\\psi\\mapsto\\langle \\varphi, A\\psi\\rangle\\) is bounded on \\(D(A)\\), by \\(\\langle\\varphi, A\\psi\\rangle = \\langle A^*\\varphi, \\psi\\rangle\\). Well defined because \\(D(A)\\) is dense.",
"section": "What the objects are",
"slide": "Unbounded operators need domains",
"keys": [
"adjoint"
]
},
{
"term_html": "self-adjoint",
"html": "\\(A = A^*\\), domains included. In finite dimensions the same as symmetric; in infinite dimensions strictly stronger, and the condition observables and Hamiltonians must meet.",
"section": "What the objects are",
"slide": "Unbounded operators need domains",
"keys": [
"self-adjoint"
]
},
{
"term_html": "self-adjoint extension",
"html": "A self-adjoint operator extending a symmetric one. For \\(-i\\,\\mathrm d/\\mathrm dx\\) on \\((0, L)\\) they are the conditions \\(\\psi(L) = e^{i\\theta}\\psi(0)\\), with spectra \\(\\hbar(2\\pi n + \\theta)/L\\): different boundary conditions, different physics.",
"section": "What the objects are",
"slide": "Momentum in a box: symmetric is not enough",
"keys": [
"self-adjoint extension"
]
},
{
"term_html": "deficiency indices",
"html": "\\(n_\\pm = \\dim\\ker(A^*\\mp i)\\) for a symmetric \\(A\\). Self-adjoint extensions exist iff \\(n_+ = n_-\\) (von Neumann, cited). For momentum: \\((0,0)\\) on \\(\\mathbb R\\), \\((1,1)\\) on an interval, \\((1,0)\\) on a half-line, where no momentum observable exists.",
"section": "What the objects are",
"slide": "Deficiency indices, named",
"keys": [
"deficiency indices"
]
},
{
"term_html": "unitary group",
"html": "A family \\(U(t)\\) of unitary operators with \\(U(t + s) = U(t)U(s)\\), \\(U(0) = I\\), and \\(t\\mapsto U(t)\\psi\\) continuous: a probability-conserving, deterministic time evolution.",
"section": "What the objects are",
"slide": "Why self-adjoint: Stone's theorem",
"keys": [
"unitary group"
]
},
{
"term_html": "Stone's theorem",
"html": "Unitary groups correspond exactly to self-adjoint operators, \\(U(t) = e^{-iHt/\\hbar}\\). Cited. It is why the Hamiltonian must be self-adjoint and not merely symmetric.",
"section": "What the objects are",
"slide": "Why self-adjoint: Stone's theorem",
"keys": [
"stone's theorem"
]
},
{
"term_html": "spectrum",
"html": "\\(\\sigma(A)\\): the \\(\\lambda\\) for which \\(A - \\lambda\\) has no bounded inverse defined on all of \\(\\mathcal H\\). Real for self-adjoint \\(A\\); the set of possible outcomes of measuring \\(A\\). Position and momentum have spectrum \\(\\mathbb R\\) and no eigenvectors in \\(L^2\\).",
"section": "What the objects are",
"slide": "Spectrum, and what a measurement returns",
"keys": [
"spectrum"
]
},
{
"term_html": "canonical commutation relation",
"html": "\\([X, P] = i\\hbar\\) on the Schwartz class, by one line of the product rule.",
"section": "What the objects are",
"slide": "The commutator replaces the bracket",
"keys": [
"canonical commutation relation"
]
},
{
"term_html": "Dirac's rule",
"html": "Replace the Poisson bracket by a commutator over \\(i\\hbar\\): \\(\\{f, g\\}\\mapsto[\\hat f,\\hat g]/i\\hbar\\) (1925). Exact for polynomials of degree at most two; a heuristic beyond.",
"section": "What the objects are",
"slide": "The commutator replaces the bracket",
"keys": [
"dirac's rule"
]
},
{
"term_html": "commutator",
"html": "\\([A, B] = AB - BA\\), on a common domain that both map into itself. The time derivative of an expectation value is \\(\\frac i\\hbar\\langle[H, A]\\rangle\\).",
"section": "What the objects are",
"slide": "The commutator replaces the bracket",
"keys": [
"commutator"
]
},
{
"term_html": "Groenewold's theorem",
"html": "No linear quantisation map on polynomials in \\((x, p)\\) sends \\(x, p\\) to \\(X, P\\) irreducibly and every Poisson bracket to the commutator over \\(i\\hbar\\) (1946, cited). The obstruction is at degree four, by a term \\(\\frac13\\hbar^2\\).",
"section": "What the objects are",
"slide": "The commutator replaces the bracket",
"keys": [
"groenewold's theorem"
]
},
{
"term_html": "Robertson's inequality",
"html": "\\(\\Delta A\\,\\Delta B\\ge\\frac12|\\langle[A,B]\\rangle|\\) for symmetric \\(A, B\\) (1929), by Cauchy–Schwarz.",
"section": "What the objects are",
"slide": "Robertson's inequality",
"keys": [
"robertson's inequality"
]
},
{
"term_html": "Heisenberg uncertainty relation",
"html": "\\(\\Delta x\\,\\Delta p\\ge\\hbar/2\\), with equality exactly for Gaussians. Unit 20's \\(\\Delta t\\,\\Delta\\omega\\ge\\frac12\\) applied to a wave whose wavenumber is \\(p/\\hbar\\).",
"section": "What the objects are",
"slide": "Robertson's inequality",
"keys": [
"heisenberg uncertainty relation"
]
},
{
"term_html": "zero-point energy",
"html": "The ground-state energy above the potential's minimum, \\(\\frac12\\hbar\\omega\\) for the oscillator. Forced by the uncertainty relation: \\(\\langle H\\rangle\\ge\\omega\\Delta x\\Delta p\\ge\\frac12\\hbar\\omega\\) for every state.",
"section": "What the objects are",
"slide": "The same theorem as unit 20's",
"keys": [
"zero-point energy"
]
},
{
"term_html": "time-independent Schrödinger equation",
"html": "\\(-\\frac{\\hbar^2}{2m}\\varphi'' + V\\varphi = E\\varphi\\): a Sturm–Liouville problem with \\(p = \\hbar^2/2m\\), \\(q = V\\), \\(w = 1\\), eigenvalue \\(E\\).",
"section": "Stationary states: the oscillator as a Sturm–Liouville problem",
"slide": "Separating time",
"keys": [
"time-independent schrödinger equation"
]
},
{
"term_html": "stationary state",
"html": "A solution \\(\\varphi(x)e^{-iEt/\\hbar}\\); its density \\(|\\psi|^2\\) does not change in time.",
"section": "Stationary states: the oscillator as a Sturm–Liouville problem",
"slide": "Separating time",
"keys": [
"stationary state"
]
},
{
"term_html": "energy quantisation",
"html": "The discreteness of the Sturm–Liouville spectrum of a confining potential. Nothing is quantised by hand: square-integrability or the walls act as boundary conditions.",
"section": "Stationary states: the oscillator as a Sturm–Liouville problem",
"slide": "Separating time",
"keys": [
"energy quantisation"
]
},
{
"term_html": "packet spreading",
"html": "A free Gaussian of initial spread \\(\\sigma_0\\) has \\(\\sigma(t) = \\sigma_0\\sqrt{1 + (\\hbar t/2m\\sigma_0^2)^2}\\): unit 20's spreading law with \\(\\omega'' = \\hbar/m\\). A \\(10^{-15}\\) kg grain at \\(1\\ \\mu\\)m doubles in about a year.",
"section": "Stationary states: the oscillator as a Sturm–Liouville problem",
"slide": "Free evolution, solved by Fourier",
"keys": [
"packet spreading"
]
},
{
"term_html": "Hermite's equation",
"html": "\\(h'' - 2\\xi h' + (\\varepsilon - 1)h = 0\\), what \\(h\\) obeys in \\(\\varphi = he^{-\\xi^2/2}\\). Its power series grows like \\(e^{\\xi^2}\\) unless it terminates, which happens iff \\(\\varepsilon = 2n + 1\\).",
"section": "Stationary states: the oscillator as a Sturm–Liouville problem",
"slide": "Worked: the series, and why it must stop",
"keys": [
"hermite's equation"
]
},
{
"term_html": "Hermite functions",
"html": "\\(\\varphi_n = H_n(x/\\ell)e^{-x^2/2\\ell^2}/\\sqrt{2^nn! \\sqrt\\pi\\,\\ell}\\), with \\(H_0 = 1\\), \\(H_1 = 2\\xi\\), \\(H_2 = 4\\xi^2 - 2\\), \\(H_3 = 8\\xi^3 - 12\\xi\\). Orthonormal, \\(n\\) nodes each, complete in \\(L^2(\\mathbb R)\\).",
"section": "Stationary states: the oscillator as a Sturm–Liouville problem",
"slide": "Hermite functions",
"keys": [
"hermite functions"
]
},
{
"term_html": "ladder operators",
"html": "\\(a = (m\\omega X + iP)/\\sqrt{2m\\hbar\\omega}\\) and its adjoint \\(a^\\dagger\\), with \\([a, a^\\dagger] = 1\\) and \\(H = \\hbar\\omega(a^\\dagger a + \\frac12)\\). \\(a\\) lowers an eigenvalue of \\(a^\\dagger a\\) by one, \\(a^\\dagger\\) raises it. The quantised complex amplitude of the classical oscillator.",
"section": "The oscillator by algebra",
"slide": "Ladder operators",
"keys": [
"ladder operators"
]
},
{
"term_html": "number operator",
"html": "\\(N = a^\\dagger a\\ge0\\). Its spectrum is \\(\\{0, 1, 2, \\dots\\}\\), because lowering would otherwise reach a negative eigenvalue; the bottom rung solves \\(a\\varphi_0 = 0\\).",
"section": "The oscillator by algebra",
"slide": "Ladder operators",
"keys": [
"number operator"
]
},
{
"term_html": "Bohr–Sommerfeld rule",
"html": "\\(\\oint p\\,\\mathrm dq = 2\\pi\\hbar(n + \\frac12)\\) for a well with two smooth turning points: the two WKB waves connected from either end agree only then. Exact for the oscillator, asymptotic in \\(n\\) for other wells.",
"section": "WKB revisited: quantisation and tunnelling",
"slide": "Bohr–Sommerfeld, with its ½",
"keys": [
"bohr–sommerfeld rule"
]
},
{
"term_html": "Maslov index",
"html": "\\(\\mu\\) in \\(\\oint p\\,\\mathrm dq = 2\\pi\\hbar(n + \\mu/4)\\): the number of quarter-phases picked up at the turning points. \\(\\mu = 2\\) for two smooth turning points, \\(4\\) for two hard walls, \\(3\\) for one of each.",
"section": "WKB revisited: quantisation and tunnelling",
"slide": "Bohr–Sommerfeld, with its ½",
"keys": [
"maslov index"
]
},
{
"term_html": "tunnelling",
"html": "Transmission through a region where \\(V &gt; E\\). WKB gives \\(T\\approx\\exp(-\\frac2\\hbar\\int\\sqrt{2m(V - E)}\\,\\mathrm dx)\\), valid when the exponent is large and \\(V\\) is smooth near the turning points.",
"section": "WKB revisited: quantisation and tunnelling",
"slide": "Tunnelling",
"keys": [
"tunnelling"
]
},
{
"term_html": "Gamow factor",
"html": "The tunnelling exponent through a nucleus's Coulomb wall, \\(2\\Gamma\\), with \\(\\Gamma\\to\\pi\\eta = 2\\pi Z\\alpha c/v\\) for a point nucleus (Gamow; Gurney and Condon, 1928). It makes \\(^{238}\\)U and \\(^{212}\\)Po, a factor two apart in energy, 24 orders of magnitude apart in half-life.",
"section": "WKB revisited: quantisation and tunnelling",
"slide": "Alpha decay: the Gamow factor",
"keys": [
"gamow factor"
]
},
{
"term_html": "correspondence principle",
"html": "For highly excited states, local averages of \\(|\\varphi_n|^2\\) converge to the classical density \\(2/Tv\\), weakly as \\(n\\to\\infty\\): WKB plus Riemann–Lebesgue. Pointwise the quantum density oscillates between 0 and twice the classical one.",
"section": "Correspondence is asymptotics",
"slide": "n = 20, plotted",
"keys": [
"correspondence principle"
]
}
];
