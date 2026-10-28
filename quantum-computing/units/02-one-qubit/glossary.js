// Generated from GLOSSARY.org by `qc glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "magnetic moment",
"html": "The vector \\(\\boldsymbol\\mu\\) giving a small magnet's strength and direction; in a field \\(\\mathbf B\\) its energy is \\(E = -\\boldsymbol\\mu\\cdot\\mathbf B\\), least when aligned. For a proton the moment along any axis takes two values, \\(\\pm\\gamma\\hbar/2\\).",
"section": "The Pauli matrices, named",
"slide": "A proton is a small magnet",
"keys": [
"magnetic moment"
]
},
{
"term_html": "gyromagnetic ratio",
"html": "The constant \\(\\gamma\\) relating a particle's magnetic moment to its spin: the moment along \\(\\mathbf n\\) is the observable \\(\\frac{\\gamma\\hbar}{2}\\mathbf n\\cdot\\boldsymbol\\sigma\\). For the proton \\(\\gamma/2\\pi = 42.577\\,478\\,518\\) MHz/T (CODATA 2018), and \\(\\gamma \\gt 0\\).",
"section": "The Pauli matrices, named",
"slide": "A proton is a small magnet",
"keys": [
"gyromagnetic ratio"
]
},
{
"term_html": "Pauli matrices",
"html": "\\(X = \\begin{pmatrix}0&amp;1\\\\1&amp;0\\end{pmatrix}\\), \\(Y = \\begin{pmatrix}0&amp;-i\\\\i&amp;0\\end{pmatrix}\\), \\(Z = \\begin{pmatrix}1&amp;0\\\\0&amp;-1\\end{pmatrix}\\), also \\(\\sigma_1, \\sigma_2, \\sigma_3\\): Hermitian, unitary, traceless, with \\(\\sigma_j\\sigma_k = \\delta_{jk}I + i\\sum_l\\varepsilon_{jkl}\\sigma_l\\) — so \\(XY = iZ\\) and cyclically, distinct ones anticommute, and \\(\\operatorname{tr}(\\sigma_j\\sigma_k) = 2\\delta_{jk}\\).",
"section": "The Pauli matrices, named",
"slide": "The Pauli algebra",
"keys": [
"pauli matrices"
]
},
{
"term_html": "Levi-Civita symbol",
"html": "\\(\\varepsilon_{jkl}\\) is \\(+1\\) if \\((j, k, l)\\) is a cyclic shift of \\((1, 2, 3)\\), \\(-1\\) if it is a shift of \\((2, 1, 3)\\), and \\(0\\) if an index repeats. The structure constants of the cross product: \\(\\mathbf e_j\\times\\mathbf e_k = \\sum_l\\varepsilon_{jkl}\\mathbf e_l\\).",
"section": "The Pauli matrices, named",
"slide": "The Pauli algebra",
"keys": [
"levi-civita symbol"
]
},
{
"term_html": "Hilbert–Schmidt inner product",
"html": "\\(\\braket{A, B} = \\operatorname{tr}(A^\\dagger B) = \\sum\\overline{A_{ij}}B_{ij}\\) on matrices. \\(\\{I, X, Y, Z\\}\\) is an orthogonal basis of \\(M_2(\\mathbb C)\\) for it, so \\(A = \\frac12\\sum_\\mu\\operatorname{tr}(\\sigma_\\mu A)\\sigma_\\mu\\), and \\(A\\) is Hermitian iff the four coefficients are real.",
"section": "The Pauli matrices, named",
"slide": "A basis of all 2×2 matrices",
"keys": [
"hilbert–schmidt inner product"
]
},
{
"term_html": "Pauli vector",
"html": "The triple \\(\\boldsymbol\\sigma = (X, Y, Z)\\), with \\(\\mathbf a\\cdot\\boldsymbol\\sigma = a_1X + a_2Y + a_3Z\\). Product rule: \\((\\mathbf a\\cdot\\boldsymbol\\sigma)(\\mathbf b\\cdot\\boldsymbol\\sigma) = (\\mathbf a\\cdot\\mathbf b)I + i(\\mathbf a\\times\\mathbf b)\\cdot\\boldsymbol\\sigma\\). For a unit \\(\\mathbf n\\), \\(\\mathbf n\\cdot\\boldsymbol\\sigma\\) has eigenvalues \\(\\pm1\\) with projectors \\(\\frac12(I \\pm \\mathbf n\\cdot\\boldsymbol\\sigma)\\), and is the Stern–Gerlach measurement along \\(\\mathbf n\\).",
"section": "The Pauli matrices, named",
"slide": "The Pauli vector, and measuring along any axis",
"keys": [
"pauli vector"
]
},
{
"term_html": "projective line",
"html": "\\(\\mathbb{CP}^1\\): unit vectors of \\(\\mathbb C^2\\) modulo a global phase, equivalently the lines through the origin — the pure states of a qubit. Every class has a representative \\(\\cos\\frac\\theta2\\ket0 + e^{i\\varphi}\\sin\\frac\\theta2\\ket1\\), \\(0 \\le \\theta \\le \\pi\\), with \\(\\varphi\\) undefined at \\(\\theta = 0, \\pi\\).",
"section": "States are points of a sphere",
"slide": "Every state, in two angles",
"keys": [
"projective line"
]
},
{
"term_html": "Bloch sphere",
"html": "The unit sphere \\(S^2\\subset\\mathbb R^3\\) as the space of pure qubit states: \\(\\ket0, \\ket1\\) at the poles, unit 00's \\(x\\) and \\(y\\) bases on the equator, the real states on the great circle of the \\(xz\\)-plane.",
"section": "States are points of a sphere",
"slide": "The Bloch map",
"keys": [
"bloch sphere"
]
},
{
"term_html": "Bloch vector",
"html": "\\(\\mathbf r(\\psi) = \\braket{\\psi|\\boldsymbol\\sigma|\\psi} = (\\braket X, \\braket Y, \\braket Z) = (\\sin\\theta\\cos\\varphi, \\sin\\theta\\sin\\varphi, \\cos\\theta)\\); its components are the Stern–Gerlach differences \\(p_+ - p_-\\) along \\(x, y, z\\). It depends only on the ray, and \\(\\ket\\psi\\!\\bra\\psi = \\frac12(I + \\mathbf r\\cdot\\boldsymbol\\sigma)\\).",
"section": "States are points of a sphere",
"slide": "The Bloch map",
"keys": [
"bloch vector"
]
},
{
"term_html": "Bloch map",
"html": "\\([\\psi]\\mapsto\\mathbf r(\\psi)\\), proved a bijection from \\(\\mathbb{CP}^1\\) onto \\(S^2\\): injective because \\(\\mathbf r\\) fixes the projector \\(\\frac12(I + \\mathbf r\\cdot\\boldsymbol\\sigma)\\), surjective because that projector has rank one for every unit \\(\\mathbf r\\). No special case at the poles.",
"section": "States are points of a sphere",
"slide": "The Bloch map is a bijection onto the sphere",
"keys": [
"bloch map"
]
},
{
"term_html": "transition probability",
"html": "\\(|\\braket{\\chi|\\psi}|^2 = \\frac12(1 + \\mathbf r\\cdot\\mathbf s) = \\cos^2\\frac\\alpha2\\) for Bloch vectors at angle \\(\\alpha\\). Orthogonal states are antipodes; unbiased states are at right angles; so two bases are mutually unbiased iff their axes are perpendicular, and \\(\\mathbb C^2\\) holds exactly three.",
"section": "States are points of a sphere",
"slide": "Overlaps are angles",
"keys": [
"transition probability"
]
},
{
"term_html": "rotation operator",
"html": "\\(R_{\\mathbf n}(\\theta) = e^{-i\\theta\\,\\mathbf n\\cdot\\boldsymbol\\sigma/2} = \\cos\\frac\\theta2 I - i\\sin\\frac\\theta2\\,\\mathbf n\\cdot\\boldsymbol\\sigma\\), unitary with determinant one. It turns the Bloch sphere by \\(\\theta\\) about \\(\\mathbf n\\): \\(R_{\\mathbf n}(\\theta)(\\mathbf r\\cdot\\boldsymbol\\sigma)R_{\\mathbf n}(\\theta)^\\dagger = (R\\mathbf r)\\cdot\\boldsymbol\\sigma\\). \\(S = e^{i\\pi/4}R_z(\\frac\\pi2)\\), \\(T = e^{i\\pi/8}R_z(\\frac\\pi4)\\).",
"section": "Unitaries are rotations",
"slide": "The rotation operators",
"keys": [
"rotation operator"
]
},
{
"term_html": "Hadamard gate",
"html": "\\(H = \\frac1{\\sqrt2}(X + Z) = \\frac1{\\sqrt2}\\begin{pmatrix}1&amp;1\\\\1&amp;-1\\end{pmatrix}\\), the half-turn about \\(\\frac1{\\sqrt2}(1, 0, 1)\\) up to global phase: \\(H = iR_{\\mathbf n}(\\pi)\\). It swaps the \\(z\\) and \\(x\\) axes and reverses \\(y\\).",
"section": "Unitaries are rotations",
"slide": "Worked: the Hadamard gate is a half-turn",
"keys": [
"hadamard gate"
]
},
{
"term_html": "Larmor precession",
"html": "The free motion of a spin in a static field: \\(H = -\\frac{\\hbar\\omega_0}{2}Z\\) gives \\(e^{-iHt/\\hbar} = R_z(-\\omega_0t)\\), the Bloch vector turning about the field, clockwise from \\(+z\\) for \\(\\gamma \\gt 0\\). An instance of: every \\(aI + \\mathbf b\\cdot\\boldsymbol\\sigma\\) precesses about \\(\\hat{\\mathbf b}\\) at angular frequency \\(2|\\mathbf b|\\).",
"section": "Unitaries are rotations",
"slide": "Larmor precession: the proton in its field",
"keys": [
"larmor precession"
]
},
{
"term_html": "Larmor frequency",
"html": "\\(\\omega_0 = \\gamma B_0\\), the angular frequency of Larmor precession and the energy gap over \\(\\hbar\\). For the proton, \\(\\omega_0/2\\pi = 63.87\\) MHz at 1.5 T and 127.73 MHz at 3 T.",
"section": "Unitaries are rotations",
"slide": "Larmor precession: the proton in its field",
"keys": [
"larmor frequency"
]
},
{
"term_html": "special unitary group",
"html": "\\(SU(2) = \\{V\\in U(2) : \\det V = 1\\}\\). Every element is a rotation operator \\(R_{\\mathbf n}(\\theta)\\), and every \\(U\\in U(2)\\) is \\(e^{i\\alpha}V\\) with \\(V\\in SU(2)\\), unique up to a sign.",
"section": "SU(2) covers the rotations twice",
"slide": "SU(2), and why every element is a rotation operator",
"keys": [
"special unitary group"
]
},
{
"term_html": "rotation group",
"html": "\\(SO(3)\\), the real \\(3\\times3\\) matrices with \\(R^{\\mathsf T}R = I\\) and \\(\\det R = 1\\). The homomorphism \\(\\Phi: SU(2)\\to SO(3)\\), \\(U(\\mathbf r\\cdot\\boldsymbol\\sigma)U^\\dagger = (\\Phi(U)\\mathbf r)\\cdot\\boldsymbol\\sigma\\), sends \\(R_{\\mathbf n}(\\theta)\\) to the rotation by \\(\\theta\\) about \\(\\mathbf n\\).",
"section": "SU(2) covers the rotations twice",
"slide": "The homomorphism from SU(2) to rotations",
"keys": [
"rotation group"
]
},
{
"term_html": "Euler's rotation theorem",
"html": "Every \\(R\\in SO(3)\\) is a rotation by some angle about some axis (Euler, 1775). Proof: \\(\\det(R - I) = -\\det(R - I)\\) in dimension three, so \\(1\\) is an eigenvalue; \\(R\\) then turns the perpendicular plane.",
"section": "SU(2) covers the rotations twice",
"slide": "Euler's rotation theorem",
"keys": [
"euler's rotation theorem"
]
},
{
"term_html": "double cover",
"html": "\\(\\Phi: SU(2)\\to SO(3)\\) is onto with kernel \\(\\{\\pm I\\}\\), so \\(SO(3)\\cong SU(2)/\\{\\pm I\\}\\) and every rotation has exactly two lifts, \\(\\pm U\\). Up to phase, qubit gates and rotations of the sphere are the same thing.",
"section": "SU(2) covers the rotations twice",
"slide": "Φ is onto, and its kernel is ±I",
"keys": [
"double cover"
]
},
{
"term_html": "spinor",
"html": "A vector of \\(\\mathbb C^2\\) acted on by \\(SU(2)\\): a full turn \\(R_{\\mathbf n}(2\\pi) = -I\\) multiplies it by \\(-1\\), and it takes \\(4\\pi\\) to return. The sign is a global phase, invisible on its own, and was seen relative to an unrotated reference by neutron interferometry (Rauch et al.; Werner et al.; 1975).",
"section": "SU(2) covers the rotations twice",
"slide": "A turn by 2π is −I",
"keys": [
"spinor"
]
},
{
"term_html": "Rabi frequency",
"html": "\\(\\Omega = \\gamma B_1\\) for a drive field of strength \\(B_1\\) turning in the plane perpendicular to the static field: the angular speed of the driven rotation on resonance. For the proton at \\(B_1 = 11.74\\ \\mu\\)T, \\(\\Omega/2\\pi = 499.9\\) Hz.",
"section": "Driving: resonance and the rotating frame",
"slide": "Driving the proton",
"keys": [
"rabi frequency"
]
},
{
"term_html": "rotating frame",
"html": "The state \\(\\tilde\\psi = V(t)^\\dagger\\psi\\) with \\(V(t) = R_z(-\\omega t)\\), turning with the drive. In it the Hamiltonian is constant: \\(\\tilde H = -\\frac\\hbar2(\\Delta Z + \\Omega X)\\). Level populations are the same in both frames.",
"section": "Driving: resonance and the rotating frame",
"slide": "The rotating frame, derived",
"keys": [
"rotating frame"
]
},
{
"term_html": "detuning",
"html": "\\(\\Delta = \\omega_0 - \\omega\\), the drive's distance from resonance, with this course's proton signs. Probabilities depend only on \\(\\Delta^2\\).",
"section": "Driving: resonance and the rotating frame",
"slide": "The rotating frame, derived",
"keys": [
"detuning"
]
},
{
"term_html": "effective field",
"html": "\\(\\mathbf B_{\\text{eff}} = (B_1, 0, B_0 - \\omega/\\gamma)\\): the fixed field the spin sees in the rotating frame, \\(\\tilde H = -\\frac{\\gamma\\hbar}{2}\\mathbf B_{\\text{eff}}\\cdot\\boldsymbol\\sigma\\). On resonance only \\(B_1\\) is left.",
"section": "Driving: resonance and the rotating frame",
"slide": "The rotating frame, derived",
"keys": [
"effective field"
]
},
{
"term_html": "Rabi oscillation",
"html": "From \\(\\ket0\\), \\(P_1(t) = \\frac{\\Omega^2}{\\Omega'^2}\\sin^2\\frac{\\Omega't}{2}\\) with \\(\\Omega' = \\sqrt{\\Omega^2 + \\Delta^2}\\) (Rabi, 1937): a full swing on resonance, a partial and faster one off it.",
"section": "Driving: resonance and the rotating frame",
"slide": "Rabi oscillation",
"keys": [
"rabi oscillation"
]
},
{
"term_html": "π/2-pulse",
"html": "A resonant drive for time \\(\\pi/2\\Omega\\): \\(R_x(-\\frac\\pi2)\\), taking \\(\\ket0\\) to \\(\\frac1{\\sqrt2}(\\ket0 + i\\ket1) = \\ket{+i}\\), an equal superposition.",
"section": "Driving: resonance and the rotating frame",
"slide": "On resonance: the π/2-pulse and the π-pulse",
"keys": [
"π/2-pulse"
]
},
{
"term_html": "π-pulse",
"html": "A resonant drive for time \\(\\pi/\\Omega\\): \\(R_x(-\\pi) = iX\\), a flip \\(\\ket0\\mapsto i\\ket1\\). For the proton above, 1.000 ms.",
"section": "Driving: resonance and the rotating frame",
"slide": "On resonance: the π/2-pulse and the π-pulse",
"keys": [
"π-pulse"
]
},
{
"term_html": "counter-rotating term",
"html": "The half of a linearly oscillating drive that turns against the precession; in the rotating frame it turns at \\(2\\omega\\): \\(-\\frac{\\hbar\\Omega}{2}(\\cos2\\omega t\\,X + \\sin2\\omega t\\,Y)\\).",
"section": "Driving: resonance and the rotating frame",
"slide": "A linear drive is two rotating ones",
"keys": [
"counter-rotating term"
]
},
{
"term_html": "rotating-wave approximation",
"html": "Dropping the counter-rotating term, justified when \\(\\Omega, |\\Delta| \\ll \\omega_0\\). For the proton \\(\\Omega/\\omega_0 = 7.8\\times10^{-6}\\) and the error is of order \\(10^{-11}\\); for a superconducting qubit it is five hundred times larger.",
"section": "Driving: resonance and the rotating frame",
"slide": "The rotating-wave approximation, and its price",
"keys": [
"rotating-wave approximation"
]
},
{
"term_html": "Bloch–Siegert shift",
"html": "The first correction to the rotating-wave approximation: the resonance moves up by about \\(\\Omega^2/4\\omega_0\\) (Bloch and Siegert, 1940; cited). For the proton, 0.98 mHz.",
"section": "Driving: resonance and the rotating frame",
"slide": "The rotating-wave approximation, and its price",
"keys": [
"bloch–siegert shift"
]
},
{
"term_html": "ZYZ decomposition",
"html": "Every \\(U\\in U(2)\\) is \\(e^{i\\alpha}R_z(\\beta)R_y(\\gamma) R_z(\\delta)\\), proved from the matrix entries. The Hadamard gate is \\(iR_y(\\frac\\pi2)R_z(\\pi)\\).",
"section": "Every unitary in three turns",
"slide": "The Z-Y-Z decomposition",
"keys": [
"zyz decomposition"
]
},
{
"term_html": "Euler angles",
"html": "The \\(\\beta, \\gamma, \\delta\\) of the ZYZ form. \\(\\gamma\\) and \\(\\beta\\) are the polar angle and longitude of the image of the north pole; at \\(\\gamma = 0\\) only \\(\\beta + \\delta\\) is determined, at \\(\\gamma = \\pi\\) only \\(\\beta - \\delta\\) — gimbal lock.",
"section": "Every unitary in three turns",
"slide": "The Z-Y-Z decomposition",
"keys": [
"euler angles"
]
},
{
"term_html": "spin echo",
"html": "\\(\\pi/2\\)-pulse, wait \\(\\tau\\), \\(\\pi\\)-pulse, wait \\(\\tau\\) (Hahn, 1950): the \\(\\pi\\)-pulse reverses the fan of spins with different detunings \\(\\delta\\), and the product is \\(R_x(-\\frac{3\\pi}2)\\) for every \\(\\delta\\).",
"section": "Every unitary in three turns",
"slide": "The close: a spin echo",
"keys": [
"spin echo"
]
}
];
