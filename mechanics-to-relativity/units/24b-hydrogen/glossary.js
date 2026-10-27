// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "Bohr radius",
"html": "\\(a_0 = \\hbar^2/m_ek = \\hbar/m_ec\\alpha = 5.2918\\times10^{-11}\\) m, with \\(k = e^2/4\\pi\\varepsilon_0\\): the only length that can be built from \\(m_e\\), \\(k\\) and \\(\\hbar\\). Without \\(\\hbar\\) there is none, which is why a classical atom has no size. With the reduced mass it becomes \\(a = \\hbar^2/\\mu k = 1.000545\\,a_0\\).",
"section": "The collapse, and why ħ stops it",
"slide": "No length without ħ",
"keys": [
"bohr radius"
]
},
{
"term_html": "Rydberg energy",
"html": "\\(\\mathrm{Ry} = m_ek^2/2\\hbar^2 = \\tfrac12\\alpha^2m_ec^2 = 13.6057\\) eV, hydrogen's binding energy for an infinitely heavy nucleus; \\(13.5983\\) eV with the reduced mass.",
"section": "The collapse, and why ħ stops it",
"slide": "No length without ħ",
"keys": [
"rydberg energy"
]
},
{
"term_html": "fine-structure constant",
"html": "\\(\\alpha = k/\\hbar c = 1/137.036\\), a pure number: the electron's speed on the first orbit in units of \\(c\\), so \\(\\alpha^2\\) measures how relativistic hydrogen is.",
"section": "The collapse, and why ħ stops it",
"slide": "No length without ħ",
"keys": [
"fine-structure constant"
]
},
{
"term_html": "Hardy's inequality",
"html": "\\(\\int\\lvert\\nabla\\psi\\rvert^2 \\ge \\tfrac14\\int\\lvert\\psi\\rvert^2/r^2\\) for smooth compactly supported \\(\\psi\\) on \\(\\mathbb R^3\\), proved by expanding \\(\\int\\lvert\\nabla\\psi + \\tfrac12(\\vec x/r^2)\\psi\\rvert^2 \\ge 0\\) and the divergence theorem. With Cauchy–Schwarz it bounds hydrogen's energy below by \\(-4\\,\\mathrm{Ry} = -54.4\\) eV: the uncertainty principle's stabilisation of the atom, as a theorem.",
"section": "The collapse, and why ħ stops it",
"slide": "Exact by luck in the constant, not in the scaling",
"keys": [
"hardy's inequality"
]
},
{
"term_html": "orbital angular momentum",
"html": "The operators \\(L_i = \\varepsilon_{ijk}x_jp_k\\) on \\(L^2(\\mathbb R^3)\\), with \\(p_k = -i\\hbar\\partial_k\\). They satisfy \\([L_i, L_j] = i\\hbar\\varepsilon_{ijk}L_k\\), which follows from \\([x_j,p_k] = i\\hbar\\delta_{jk}\\) alone and is unit 14's Poisson bracket under Dirac's rule.",
"section": "Angular momentum, from its commutators alone",
"slide": "Angular momentum as an operator",
"keys": [
"orbital angular momentum"
]
},
{
"term_html": "rotation operator",
"html": "\\((U(R)\\psi)(\\vec x) = \\psi(R^{-1}\\vec x)\\) for \\(R\\in SO(3)\\): unitary, a representation of the rotation group, and equal to \\(\\exp(-i\\theta\\,\\hat n\\cdot\\vec L/\\hbar)\\) for rotation by \\(\\theta\\) about \\(\\hat n\\). The \\(-iL_k/\\hbar\\) represent \\(\\mathfrak{so}(3)\\).",
"section": "Angular momentum, from its commutators alone",
"slide": "\\(\\vec L\\) generates rotations",
"keys": [
"rotation operator"
]
},
{
"term_html": "ladder operators",
"html": "\\(L_\\pm = L_x\\pm iL_y\\), with \\([L_z, L_\\pm] = \\pm\\hbar L_\\pm\\): they raise or lower the eigenvalue of \\(L_z\\) by \\(\\hbar\\) and leave that of \\(L^2\\) alone. \\(L_\\mp L_\\pm = L^2 - L_z^2\\mp\\hbar L_z\\).",
"section": "Angular momentum, from its commutators alone",
"slide": "Ladder operators",
"keys": [
"ladder operators"
]
},
{
"term_html": "Casimir operator",
"html": "An operator built from the generators of a Lie algebra that commutes with all of them; for \\(\\mathfrak{so}(3)\\), \\(L^2\\). Its eigenvalue labels a whole multiplet.",
"section": "Angular momentum, from its commutators alone",
"slide": "Ladder operators",
"keys": [
"casimir operator"
]
},
{
"term_html": "multiplet",
"html": "The \\(2l+1\\) joint eigenvectors of \\(L^2\\) and \\(L_z\\) with eigenvalues \\(\\hbar^2l(l+1)\\) and \\(\\hbar m\\), \\(m = -l,\\dots,l\\), joined by \\(L_\\pm\\). That \\(l\\in\\{0,\\tfrac12,1,\\dots\\}\\) and \\(\\lvert m\\rvert\\le l\\) follows from \\(\\lVert L_\\pm\\psi\\rVert^2 = \\hbar^2(l(l+1) - m(m\\pm1))\\lVert\\psi\\rVert^2\\ge0\\).",
"section": "Angular momentum, from its commutators alone",
"slide": "The spectrum of \\(L^2\\) and \\(L_z\\), from the algebra alone",
"keys": [
"multiplet"
]
},
{
"term_html": "spin",
"html": "An internal angular momentum of the electron with quantum number \\(\\tfrac12\\): allowed by the commutation relations, excluded for functions on space by single-valuedness (\\(L_z = -i\\hbar\\partial_\\phi\\) forces \\(m\\in\\mathbb Z\\)). Named, not developed: the course excludes spinors.",
"section": "Angular momentum, from its commutators alone",
"slide": "Integers only: single-valuedness, and the half-integers that are spin",
"keys": [
"spin"
]
},
{
"term_html": "Stern–Gerlach experiment",
"html": "Stern and Gerlach, 1922: a beam of silver atoms in a non-uniform magnetic field splits into two, an even number \\(2l+1\\) that no integer \\(l\\) gives. The first sight of spin.",
"section": "Angular momentum, from its commutators alone",
"slide": "Integers only: single-valuedness, and the half-integers that are spin",
"keys": [
"stern–gerlach experiment"
]
},
{
"term_html": "spherical harmonics",
"html": "\\(Y_l^m(\\theta,\\phi) = N_{lm}P_l^m(\\cos\\theta)e^{im\\phi}\\), unit 19's eigenfunctions of the angular Laplacian, here the joint eigenfunctions of \\(L^2 = -\\hbar^2\\Delta_{S^2}\\) and \\(L_z = -i\\hbar\\partial_\\phi\\), built from unit 10's Legendre polynomials.",
"section": "Angular momentum, from its commutators alone",
"slide": "Spherical harmonics are the joint eigenfunctions",
"keys": [
"spherical harmonics"
]
},
{
"term_html": "reduced mass",
"html": "\\(\\mu = m_em_p/(m_e + m_p)\\). Unit 08's change of variables, applied to operators, separates the two-body Hamiltonian into a free centre of mass and a one-body problem of mass \\(\\mu\\). For hydrogen \\(\\mu = m_e/1.000544617\\).",
"section": "The radial equation, and where quantisation comes from",
"slide": "Two bodies become one: the reduced mass",
"keys": [
"reduced mass"
]
},
{
"term_html": "radial equation",
"html": "\\(-\\frac{\\hbar^2}{2\\mu}u'' + \\big[\\frac{\\hbar^2l(l+1)}{2\\mu r^2} - \\frac kr\\big]u = Eu\\) for \\(\\psi = (u/r)Y_l^m\\), with \\(\\int_0^\\infty\\lvert u\\rvert^2 &lt; \\infty\\): a one-dimensional Schrödinger equation on the half-line.",
"section": "The radial equation, and where quantisation comes from",
"slide": "Separating hydrogen: the radial equation",
"keys": [
"radial equation"
]
},
{
"term_html": "effective potential",
"html": "\\(V(r) + \\hbar^2l(l+1)/2\\mu r^2\\): unit 08's \\(V + L^2/2\\mu r^2\\) with the classical \\(L^2\\) replaced by its eigenvalue.",
"section": "The radial equation, and where quantisation comes from",
"slide": "Separating hydrogen: the radial equation",
"keys": [
"effective potential"
]
},
{
"term_html": "centrifugal barrier",
"html": "The repulsive term \\(\\hbar^2l(l+1)/2\\mu r^2\\) of the effective potential, which keeps states with \\(l &gt; 0\\) away from the nucleus.",
"section": "The radial equation, and where quantisation comes from",
"slide": "Separating hydrogen: the radial equation",
"keys": [
"centrifugal barrier"
]
},
{
"term_html": "Laguerre polynomials",
"html": "The polynomial factors \\(f\\) of the bound radial functions, \\(u = \\rho^{l+1}e^{-\\rho/n}f(\\rho)\\); up to normalisation \\(f = L^{(2l+1)}_{n-l-1}(2\\rho/n)\\), the associated Laguerre polynomials. Named, not needed.",
"section": "The radial equation, and where quantisation comes from",
"slide": "The series, and why it must stop",
"keys": [
"laguerre polynomials"
]
},
{
"term_html": "principal quantum number",
"html": "\\(n = N + l + 1\\), where \\(N\\) is the degree at which the radial series stops. The bound energies are \\(E_n = -\\mu k^2/2\\hbar^2n^2 = -13.6\\ \\mathrm{eV}/n^2\\), and depend on \\(n\\) alone.",
"section": "The radial equation, and where quantisation comes from",
"slide": "The bound spectrum",
"keys": [
"principal quantum number"
]
},
{
"term_html": "radial nodes",
"html": "The \\(N = n - l - 1\\) zeros of the radial function in \\(0 &lt; r &lt; \\infty\\): two for \\(3s\\), one for \\(3p\\), none for \\(3d\\).",
"section": "The radial equation, and where quantisation comes from",
"slide": "The bound spectrum",
"keys": [
"radial nodes"
]
},
{
"term_html": "spectroscopic notation",
"html": "The letters \\(s, p, d, f\\) for \\(l = 0, 1, 2, 3\\), from the old names sharp, principal, diffuse, fundamental; a state is written \\(n\\) then the letter, as in \\(1s\\), \\(2p\\).",
"section": "The radial equation, and where quantisation comes from",
"slide": "The bound spectrum",
"keys": [
"spectroscopic notation"
]
},
{
"term_html": "virial theorem",
"html": "For a bound eigenstate of a \\(1/r\\) potential, \\(2\\langle T\\rangle = -\\langle V\\rangle\\), so \\(E = -\\langle T\\rangle = \\tfrac12\\langle V\\rangle\\). For the \\(1s\\) state: \\(\\langle T\\rangle = 13.6\\) eV, \\(\\langle V\\rangle = -27.2\\) eV. Proved by scaling the wavefunction in the variational principle (problem P8).",
"section": "The radial equation, and where quantisation comes from",
"slide": "Worked: the \\(1s\\) state exactly",
"keys": [
"virial theorem"
]
},
{
"term_html": "variational principle (Rayleigh–Ritz)",
"html": "For self-adjoint \\(H\\) with lowest eigenvalue \\(E_0\\) and a complete eigenbasis, \\(\\langle\\psi,H\\psi\\rangle/\\langle\\psi,\\psi\\rangle\\ge E_0\\) for every nonzero \\(\\psi\\) in the domain, with equality only for ground states; an error of order \\(\\varepsilon\\) in \\(\\psi\\) gives one of order \\(\\varepsilon^2\\) in the energy. For \\(H\\) merely bounded below, the infimum is the bottom of the spectrum (cited, the min–max principle). Unit 19's Rayleigh quotient, promoted.",
"section": "The variational principle",
"slide": "Every trial function is an upper bound",
"keys": [
"variational principle (rayleigh–ritz)",
"variational principle",
"rayleigh–ritz"
]
},
{
"term_html": "trial function",
"html": "A \\(\\psi\\), usually from a family with a few parameters, whose quotient \\(\\langle\\psi,H\\psi\\rangle/\\lVert\\psi\\rVert^2\\) is minimised over the family. For hydrogen a Gaussian \\(e^{-\\beta r^2}\\) gives at best \\(-\\tfrac8{3\\pi}\\) Ry \\(= -11.55\\) eV.",
"section": "The variational principle",
"slide": "Every trial function is an upper bound",
"keys": [
"trial function"
]
},
{
"term_html": "accidental degeneracy",
"html": "Equality of energies not explained by the obvious symmetry. In hydrogen, states of the same \\(n\\) and different \\(l\\) share an energy, which rotations do not explain; the level holds \\(\\sum_{l&lt;n}(2l+1) = n^2\\) states.",
"section": "The degeneracy rotation cannot explain",
"slide": "\\(n^2\\) states on every level",
"keys": [
"accidental degeneracy"
]
},
{
"term_html": "quantum Runge–Lenz vector",
"html": "\\(\\vec A = \\tfrac12(\\vec p\\times\\vec L - \\vec L\\times\\vec p) - \\mu k\\,\\vec x/r\\), unit 08's conserved vector symmetrised so that it is a symmetric operator. It commutes with \\(H\\), transforms as a vector under \\(\\vec L\\), and satisfies \\([A_i,A_j] = -2i\\hbar\\mu H\\varepsilon_{ijk}L_k\\) and \\(A^2 = \\mu^2k^2 + 2\\mu H(L^2 + \\hbar^2)\\) (Pauli, 1926).",
"section": "The degeneracy rotation cannot explain",
"slide": "The quantum Runge–Lenz vector",
"keys": [
"quantum runge–lenz vector"
]
},
{
"term_html": "\\(\\mathfrak{so}(4)\\)",
"html": "The Lie algebra of rotations of \\(\\mathbb R^4\\), from unit 14. On a bound level of energy \\(E\\), \\(\\vec L\\) and \\(\\vec M = \\vec A/\\sqrt{-2\\mu E}\\) satisfy its relations; \\(\\vec J^\\pm = \\tfrac12(\\vec L\\pm\\vec M)\\) split it into two commuting angular-momentum algebras with equal Casimirs \\(\\hbar^2j(j+1)\\), which forces \\(E = -\\mu k^2/2\\hbar^2(2j+1)^2\\) and \\(n^2 = (2j+1)^2\\) states.",
"section": "The degeneracy rotation cannot explain",
"slide": "\\(\\mathfrak{so}(4)\\) on each level, and \\(n^2\\) out of it",
"keys": [
"\\mathfrak{so}(4)"
]
},
{
"term_html": "Bohr frequency condition",
"html": "A transition between levels emits a single photon carrying the energy difference, \\(\\hbar\\omega = E_{n_2} - E_{n_1}\\).",
"section": "The light it emits",
"slide": "The Rydberg formula, and three series",
"keys": [
"bohr frequency condition"
]
},
{
"term_html": "Rydberg formula",
"html": "\\(1/\\lambda = R_\\mu(1/n_1^2 - 1/n_2^2)\\) for the line \\(n_2\\to n_1\\), with \\(R_\\mu = (\\mu/m_e)R_\\infty\\).",
"section": "The light it emits",
"slide": "The Rydberg formula, and three series",
"keys": [
"rydberg formula"
]
},
{
"term_html": "Rydberg constant",
"html": "\\(R_\\infty = \\mathrm{Ry}/hc = 1.0973731568\\times10^7\\ \\mathrm m^{-1}\\); for hydrogen \\(R_\\mathrm H = R_\\infty/(1 + m_e/m_p) = 1.0967758\\times10^7\\ \\mathrm m^{-1}\\).",
"section": "The light it emits",
"slide": "The Rydberg formula, and three series",
"keys": [
"rydberg constant"
]
},
{
"term_html": "Lyman series",
"html": "The lines ending on \\(n_1 = 1\\): ultraviolet, from \\(121.57\\) nm to the limit \\(91.18\\) nm.",
"section": "The light it emits",
"slide": "The Rydberg formula, and three series",
"keys": [
"lyman series"
]
},
{
"term_html": "Balmer series",
"html": "The lines ending on \\(n_1 = 2\\): from H-alpha at \\(656.47\\) nm (vacuum) to the limit \\(364.71\\) nm; the four that Balmer fitted in 1885 are visible.",
"section": "The light it emits",
"slide": "The Rydberg formula, and three series",
"keys": [
"balmer series"
]
},
{
"term_html": "Paschen series",
"html": "The lines ending on \\(n_1 = 3\\): infrared, from \\(1875.6\\) nm to the limit \\(820.59\\) nm.",
"section": "The light it emits",
"slide": "The Rydberg formula, and three series",
"keys": [
"paschen series"
]
},
{
"term_html": "isotope shift",
"html": "The change of a line's wavelength with the nuclear mass, through \\(\\mu\\) alone: relative size \\(m_e/m_p - m_e/m_d\\approx2.72\\times10^{-4}\\) between hydrogen and deuterium, \\(0.1786\\) nm for H-alpha. Urey, Brickwedde and Murphy found deuterium by it in 1932.",
"section": "The light it emits",
"slide": "How deuterium was found",
"keys": [
"isotope shift"
]
},
{
"term_html": "fine structure",
"html": "The splitting and shift of hydrogen's levels at relative order \\(\\alpha^2 = 5.3\\times10^{-5}\\), from relativistic kinematics and spin–orbit coupling; \\(0.365\\ \\mathrm{cm^{-1}}\\) for \\(n = 2\\). Where unit 27's relativity returns; cited, not derived.",
"section": "The light it emits",
"slide": "Where this stops",
"keys": [
"fine structure"
]
},
{
"term_html": "stability of matter",
"html": "That the ground-state energy of \\(N\\) electrons and nuclei is bounded below by \\(-CN\\), so that bulk matter does not collapse or release energy when lumps are combined. Needs the exclusion principle (Dyson and Lenard 1967; Lieb and Thirring 1975, cited).",
"section": "The light it emits",
"slide": "Where this stops",
"keys": [
"stability of matter"
]
},
{
"term_html": "exclusion principle",
"html": "No two electrons occupy the same state. Not used in this course; named as what turns the stability of one atom into the stability of bulk matter.",
"section": "The light it emits",
"slide": "Where this stops",
"keys": [
"exclusion principle"
]
}
];
