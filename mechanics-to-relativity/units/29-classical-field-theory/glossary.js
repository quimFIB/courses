// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "classical field",
"html": "A mechanical system whose coordinates are labelled by the points of space rather than by an index: \\(n\\) functions \\(\\varphi_a(x)\\) on spacetime. The index \\(i\\) of \\(q_i(t)\\) has become the event \\(x\\), and the sum over \\(i\\) has become an integral.",
"section": "Fields: mechanics with a continuous index",
"slide": "A field is a mechanical system whose index is a point",
"keys": [
"classical field"
]
},
{
"term_html": "Lagrangian density",
"html": "\\(\\mathcal L(\\varphi_a, \\partial_\\mu\\varphi_a, x)\\), a number attached to each event, built from the fields and their <em>first</em> derivatives there and nothing else. Locality is its whole content. In SI units an energy density, \\(\\mathrm{J\\,m^{-3}}\\). Unit 18 met it in one space dimension.",
"section": "Fields: mechanics with a continuous index",
"slide": "A field is a mechanical system whose index is a point",
"keys": [
"lagrangian density"
]
},
{
"term_html": "action over a spacetime region",
"html": "\\(S[\\varphi] = \\frac1c\\int_\\Omega\\mathcal L\\,\\mathrm d^4x\\) with \\(\\mathrm d^4x = c\\,\\mathrm dt\\,\\mathrm d^3x\\) and \\(\\Omega\\) a bounded region with piecewise smooth boundary. The factor \\(1/c\\) makes it \\(\\mathrm{J\\,s}\\) and changes no field equation.",
"section": "Fields: mechanics with a continuous index",
"slide": "A field is a mechanical system whose index is a point",
"keys": [
"action over a spacetime region"
]
},
{
"term_html": "first variation",
"html": "\\(\\delta S = \\frac{\\mathrm d}{\\mathrm d\\varepsilon} S[\\varphi + \\varepsilon\\eta]\\big|_{\\varepsilon = 0}\\), unit 11's Gateaux derivative with a four-dimensional integral. It splits into a bulk term and a boundary term.",
"section": "Fields: mechanics with a continuous index",
"slide": "The first variation, and where the boundary term goes",
"keys": [
"first variation"
]
},
{
"term_html": "field Euler–Lagrange equations",
"html": "\\(\\partial_\\mu\\big(\\partial\\mathcal L/\\partial(\\partial_\\mu\\varphi_a)\\big) = \\partial\\mathcal L/\\partial\\varphi_a\\), one second-order PDE per field component. Obtained from stationarity against every variation of compact support.",
"section": "Fields: mechanics with a continuous index",
"slide": "The field Euler–Lagrange equations",
"keys": [
"field euler–lagrange equations"
]
},
{
"term_html": "fundamental lemma in four dimensions",
"html": "If \\(f\\) is continuous and \\(\\int f\\eta\\,\\mathrm d^4x = 0\\) for every \\(\\eta \\in C_c^\\infty\\), then \\(f \\equiv 0\\). Unit 11's proof with a four-dimensional bump function; it uses the Euclidean geometry of \\(\\mathbb R^4\\), not \\(\\eta_{\\mu\\nu}\\).",
"section": "Fields: mechanics with a continuous index",
"slide": "The field Euler–Lagrange equations",
"keys": [
"fundamental lemma in four dimensions"
]
},
{
"term_html": "functional derivative",
"html": "\\(\\delta S/\\delta\\varphi_a(x)\\), the unique continuous density with \\(\\delta S = \\int (\\delta S/\\delta\\varphi_a)\\,\\eta_a\\, \\mathrm d^4x\\). The analogue of \\(\\partial S/\\partial q_i\\) with the index replaced by an event. The field equations are \\(\\delta S/\\delta\\varphi_a = 0\\).",
"section": "Fields: mechanics with a continuous index",
"slide": "The field Euler–Lagrange equations",
"keys": [
"functional derivative"
]
},
{
"term_html": "boundary term",
"html": "\\(\\frac1c\\oint_{\\partial\\Omega}\\pi^\\mu{}_a\\eta_a\\,\\mathrm d\\Sigma_\\mu\\), what is left of the first variation after integrating by parts. Killed by fixing the field on \\(\\partial\\Omega\\), by a natural condition \\(\\pi^\\mu{}_an_\\mu = 0\\), or by decay. For the Einstein–Hilbert action it is killed by none of these, and unit 35 adds the Gibbons–Hawking–York integral to cancel it.",
"section": "Fields: mechanics with a continuous index",
"slide": "What the boundary term is for",
"keys": [
"boundary term"
]
},
{
"term_html": "Klein–Gordon equation",
"html": "\\(\\Box\\varphi + \\kappa^2\\varphi = 0\\) with \\(\\kappa = mc/\\hbar\\), the Euler–Lagrange equation of \\(\\mathcal L = -\\frac12(\\partial_\\mu\\varphi\\partial^\\mu\\varphi + \\kappa^2\\varphi^2)\\). Its dispersion relation \\(\\omega^2 = c^2k^2 + (mc^2/\\hbar)^2\\) is unit 27's mass shell; the mass term is exactly what makes the wave equation dispersive.",
"section": "Fields: mechanics with a continuous index",
"slide": "Worked: the Klein–Gordon field, and what mass does to a wave",
"keys": [
"klein–gordon equation"
]
},
{
"term_html": "reduced Compton wavelength",
"html": "\\(\\kappa^{-1} = \\hbar/mc\\), the length the mass term puts into the field equation, and the range of the static solution \\(e^{-\\kappa r}/r\\). For the charged pion, \\(\\hbar c/mc^2 = 197.327\\ \\mathrm{MeV\\,fm}/139.570\\ \\mathrm{MeV} = 1.4138\\) fm, which is Yukawa's range for the nuclear force. The Compton wavelength proper is \\(h/mc\\), larger by \\(2\\pi\\); it is \\(\\hbar/mc\\) that appears in the field equation, so that is the one named here.",
"section": "Fields: mechanics with a continuous index",
"slide": "Worked: the Klein–Gordon field, and what mass does to a wave",
"keys": [
"reduced compton wavelength"
]
},
{
"term_html": "Maxwell Lagrangian",
"html": "\\(\\mathcal L = -\\frac{1}{4\\mu_0}F_{\\mu\\nu}F^{\\mu\\nu} + A_\\mu J^\\mu = \\frac{\\varepsilon_0}{2}|\\vec E|^2 - \\frac{1}{2\\mu_0}|\\vec B|^2 - \\rho\\varphi + \\vec A\\cdot\\vec J\\). The unique Lorentz-invariant, gauge-invariant, parity-even functional of \\(A\\) quadratic in first derivatives. In \\((+,-,-,-)\\) books the coupling is written \\(-A_\\mu J^\\mu\\).",
"section": "Fields: mechanics with a continuous index",
"slide": "The running example: Maxwell's action",
"keys": [
"maxwell lagrangian"
]
},
{
"term_html": "Bianchi identity",
"html": "\\(\\partial_\\lambda F_{\\mu\\nu} + \\partial_\\mu F_{\\nu\\lambda} + \\partial_\\nu F_{\\lambda\\mu} = 0\\), true for every \\(A\\) whatsoever because \\(F = \\partial A\\) and mixed partials commute. It <em>is</em> \\(\\nabla\\cdot\\vec B = 0\\) and Faraday's law, so those two Maxwell equations are identities and not field equations.",
"section": "Maxwell from an action",
"slide": "Why the potential and not the field",
"keys": [
"bianchi identity"
]
},
{
"term_html": "internal symmetry",
"html": "A symmetry that mixes the field components at a fixed event, \\(\\delta\\varphi_a = \\varepsilon M_{ab}\\varphi_b\\), as against a spacetime symmetry, which moves the event. The phase rotation of a complex field is the example; its charge is electric charge.",
"section": "Noether, for fields",
"slide": "What a symmetry of a field action is",
"keys": [
"internal symmetry"
]
},
{
"term_html": "Noether current",
"html": "\\(j^\\mu = \\frac{\\partial\\mathcal L}{\\partial(\\partial_\\mu \\varphi_a)}X_a - K^\\mu\\), attached to a variation \\(\\delta\\varphi_a = \\varepsilon X_a\\) satisfying \\(\\delta\\mathcal L = \\varepsilon\\partial_\\mu K^\\mu\\) <em>off shell</em>. On shell \\(\\partial_\\mu j^\\mu = 0\\). Unit 13's theorem with a four-divergence in place of a time derivative. Determined only up to \\(\\partial_\\lambda B^{\\lambda\\mu}\\) with \\(B\\) antisymmetric.",
"section": "Noether, for fields",
"slide": "Noether's theorem for fields",
"keys": [
"noether current"
]
},
{
"term_html": "conserved charge",
"html": "\\(Q = \\frac1c\\int j^0\\,\\mathrm d^3x\\) over a constant-time slice, with \\(\\mathrm dQ/\\mathrm dt = -\\oint\\vec\\jmath\\cdot \\mathrm d\\vec A\\). Constant when the flux at infinity vanishes; the local law \\(\\partial_\\mu j^\\mu = 0\\) is strictly stronger than the global one.",
"section": "Noether, for fields",
"slide": "Noether's theorem for fields",
"keys": [
"conserved charge"
]
},
{
"term_html": "canonical energy–momentum tensor",
"html": "\\(T^{\\mu\\nu}_{\\text{can}} = \\eta^{\\mu\\nu}\\mathcal L - \\frac{\\partial\\mathcal L}{\\partial(\\partial_\\mu \\varphi_a)}\\partial^\\nu\\varphi_a\\), the Noether current of spacetime translation: the current of a translation by \\(a\\) is \\(j^\\mu = a_\\nu T^{\\mu\\nu}\\). \\(T^{00}\\) is the energy density, \\(cT^{i0}\\) the energy flux, \\(T^{0j}/c\\) the momentum density, \\(T^{ij}\\) the momentum flux. For a scalar it is symmetric; for Maxwell it is neither symmetric nor gauge invariant.",
"section": "Noether, for fields",
"slide": "Translations, and the canonical energy–momentum tensor",
"keys": [
"canonical energy–momentum tensor"
]
},
{
"term_html": "improvement term",
"html": "\\(\\partial_\\lambda B^{\\lambda\\mu\\nu}\\) with \\(B^{\\lambda\\mu\\nu} = -B^{\\mu\\lambda\\nu}\\). Identically conserved, and it changes no total charge, so conservation alone cannot determine \\(T^{\\mu\\nu}\\). \\(B\\) itself is called a superpotential.",
"section": "Noether, for fields",
"slide": "What you are allowed to add: improvement",
"keys": [
"improvement term"
]
},
{
"term_html": "Belinfante–Rosenfeld tensor",
"html": "The canonical tensor with the improvement term \\(B^{\\lambda\\mu\\nu} = \\mu_0^{-1}F^{\\mu\\lambda}A^\\nu\\) subtracted, which for Maxwell leaves \\(\\mu_0^{-1}(F^{\\mu\\alpha}F^\\nu{}_\\alpha - \\frac14\\eta^{\\mu\\nu} F^2)\\): symmetric, gauge invariant and with the right sign. Belinfante (1939) and Rosenfeld (1940) built \\(B\\) from the spin current, for any Lorentz-invariant theory.",
"section": "Noether, for fields",
"slide": "Belinfante and Rosenfeld: the repair, for Maxwell",
"keys": [
"belinfante–rosenfeld tensor"
]
},
{
"term_html": "spin current",
"html": "\\(S^{\\lambda\\mu\\nu}\\), the part of the Noether current of Lorentz invariance coming from the rotation of the field's own indices rather than from its position. It is why the canonical tensor of a field carrying spacetime indices is asymmetric, and it is measurable: circularly polarised light carries angular momentum with no orbital motion, as Beth measured in 1936.",
"section": "Noether, for fields",
"slide": "Belinfante and Rosenfeld: the repair, for Maxwell",
"keys": [
"spin current"
]
},
{
"term_html": "invariant volume element",
"html": "\\(\\sqrt{-g}\\,\\mathrm d^4x\\), unchanged by any change of coordinates, because \\(\\det g' = (\\det\\Lambda)^2\\det g\\) cancels the Jacobian of unit 05's change-of-variables theorem. In inertial coordinates \\(\\det\\Lambda = \\pm1\\) and the distinction is invisible, which is why it appears only now.",
"section": "The definition general relativity uses",
"slide": "The move: let the metric be general, in flat space",
"keys": [
"invariant volume element"
]
},
{
"term_html": "tensor density",
"html": "A quantity whose components transform as a tensor's do, times \\((\\det\\Lambda)^w\\) for some weight \\(w\\). \\(\\sqrt{-g}\\) has weight 1; the Levi-Civita symbol of unit 28, with entries \\(\\pm1\\) in every coordinate system, has weight \\(-1\\), which is why \\(\\sqrt{-g}\\,\\epsilon^{\\mu\\nu\\rho \\sigma}\\) is the honest tensor.",
"section": "The definition general relativity uses",
"slide": "The move: let the metric be general, in flat space",
"keys": [
"tensor density"
]
},
{
"term_html": "Jacobi's formula",
"html": "\\(\\delta\\det M = \\det M\\operatorname{tr}(M^{-1}\\delta M)\\) for invertible \\(M\\), proved from \\(\\det(I+\\varepsilon A) = 1 + \\varepsilon\\operatorname{tr}A + O(\\varepsilon^2)\\). Applied to the metric it gives \\(\\delta\\sqrt{-g} = \\frac12\\sqrt{-g}\\,g^{\\mu\\nu}\\delta g_{\\mu\\nu} = -\\frac12\\sqrt{-g}\\,g_{\\mu\\nu}\\delta g^{\\mu\\nu}\\), which supplies half of \\(T^{00}\\).",
"section": "The definition general relativity uses",
"slide": "Differentiating a determinant",
"keys": [
"jacobi's formula"
]
},
{
"term_html": "metric stress–energy tensor",
"html": "The unique symmetric tensor with \\(\\delta S_{\\text m} = -\\frac{1}{2c}\\int\\sqrt{-g}\\,T_{\\mu\\nu}\\,\\delta g^{\\mu\\nu}\\, \\mathrm d^4x\\); equivalently \\(T^{\\mu\\nu} = \\frac{2}{\\sqrt{-g}}\\,\\delta(\\sqrt{-g} \\mathcal L_{\\text m})/\\delta g_{\\mu\\nu}\\). Symmetric because \\(g\\) is, gauge invariant because \\(S\\) is, and conserved on shell by coordinate invariance. This is the right-hand side of Einstein's equation. Also called the Hilbert stress–energy tensor.",
"section": "The definition general relativity uses",
"slide": "The definition, and why its two properties are free",
"keys": [
"metric stress–energy tensor"
]
},
{
"term_html": "angular-momentum current",
"html": "\\(M^{\\lambda\\mu\\nu} = x^\\mu T^{\\lambda\\nu} - x^\\nu T^{\\lambda\\mu}\\), with \\(\\partial_\\lambda M^{\\lambda\\mu\\nu} = T^{\\mu\\nu} - T^{\\nu\\mu}\\): conserved if and only if \\(T\\) is symmetric. Its six charges are the three angular momenta and the three boost charges of the Lorentz group.",
"section": "The definition general relativity uses",
"slide": "Why symmetry is angular momentum",
"keys": [
"angular-momentum current"
]
}
];
