// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "electromotive force",
"html": "\\(\\mathcal E = \\oint_{\\partial S}\\vec E\\cdot\\mathrm d\\vec r\\), the work per unit charge done by the electric field once round a closed curve, in volts. Zero for a static field, which is a gradient.",
"section": "Faraday: a changing magnetic field curls the electric one",
"slide": "Faraday's law",
"keys": [
"electromotive force"
]
},
{
"term_html": "Faraday's law",
"html": "The measured statement that for every fixed surface \\(S\\), \\(\\oint_{\\partial S}\\vec E\\cdot\\mathrm d\\vec r = -\\frac{\\mathrm d}{\\mathrm dt}\\int_S\\vec B\\cdot\\mathrm d\\vec A\\); by Stokes' theorem and localisation it is equivalent to \\(\\nabla\\times\\vec E = -\\partial_t\\vec B\\). The minus sign is Lenz's law.",
"section": "Faraday: a changing magnetic field curls the electric one",
"slide": "Faraday's law",
"keys": [
"faraday's law"
]
},
{
"term_html": "continuity equation",
"html": "\\(\\partial_t\\rho + \\nabla\\cdot\\vec J = 0\\), the local form of charge conservation, from unit 23. Ampère's law as unit 23 left it is consistent with it only when \\(\\partial_t\\rho = 0\\).",
"section": "Faraday: a changing magnetic field curls the electric one",
"slide": "Four equations, one of them suspect",
"keys": [
"continuity equation"
]
},
{
"term_html": "displacement current",
"html": "The term \\(\\mu_0\\varepsilon_0\\partial_t\\vec E\\) added to Ampère's law, \\(\\nabla\\times\\vec B = \\mu_0\\vec J + \\mu_0\\varepsilon_0\\partial_t\\vec E\\). Its divergence is \\(\\mu_0\\partial_t\\rho\\), which is exactly what continuity requires; between the plates of a charging capacitor \\(\\varepsilon_0\\partial_t\\vec E\\) carries the current across the gap.",
"section": "Maxwell's repair",
"slide": "Worked: the displacement current, from continuity alone",
"keys": [
"displacement current"
]
},
{
"term_html": "mirror symmetry (parity)",
"html": "Invariance of the laws under \\(\\vec x\\mapsto-\\vec x\\). Under it \\(\\vec E\\mapsto-\\vec E\\) and \\(\\vec B\\mapsto+\\vec B\\), as the Lorentz force requires. Together with linearity, locality and vanishing in statics it makes the displacement current the only possible repair.",
"section": "Maxwell's repair",
"slide": "Exactly one term",
"keys": [
"mirror symmetry (parity)",
"mirror symmetry",
"parity"
]
},
{
"term_html": "Maxwell's equations",
"html": "\\(\\nabla\\cdot\\vec E = \\rho/\\varepsilon_0\\), \\(\\nabla\\cdot\\vec B = 0\\), \\(\\nabla\\times\\vec E = -\\partial_t\\vec B\\), \\(\\nabla\\times\\vec B = \\mu_0\\vec J + \\mu_0\\varepsilon_0\\partial_t\\vec E\\). With the Lorentz force they are all of classical electromagnetism, and they imply charge conservation.",
"section": "The complete system: energy and momentum",
"slide": "Maxwell's equations",
"keys": [
"maxwell's equations"
]
},
{
"term_html": "evolution equations",
"html": "The two curl equations, which contain \\(\\partial_t\\) and step \\((\\vec E,\\vec B)\\) forward in time.",
"section": "The complete system: energy and momentum",
"slide": "Maxwell's equations",
"keys": [
"evolution equations"
]
},
{
"term_html": "constraints",
"html": "The two divergence equations, which contain no time derivative and restrict the data at each instant. If they hold initially the evolution equations preserve them, given charge conservation.",
"section": "The complete system: energy and momentum",
"slide": "Maxwell's equations",
"keys": [
"constraints"
]
},
{
"term_html": "field energy density",
"html": "\\(u = \\frac{\\varepsilon_0}{2}|\\vec E|^2 + \\frac{1}{2\\mu_0}|\\vec B|^2\\), in J m\\(^{-3}\\).",
"section": "The complete system: energy and momentum",
"slide": "Poynting's theorem: energy, locally",
"keys": [
"field energy density"
]
},
{
"term_html": "Poynting vector",
"html": "\\(\\vec S = \\vec E\\times\\vec B/\\mu_0\\), the energy flux density of the field, in W m\\(^{-2}\\).",
"section": "The complete system: energy and momentum",
"slide": "Poynting's theorem: energy, locally",
"keys": [
"poynting vector"
]
},
{
"term_html": "Poynting's theorem",
"html": "\\(\\partial_tu + \\nabla\\cdot\\vec S = -\\vec J\\cdot\\vec E\\): field energy is conserved locally except for the work the field does on charges. Only \\(\\nabla\\cdot\\vec S\\) is fixed by it.",
"section": "The complete system: energy and momentum",
"slide": "Poynting's theorem: energy, locally",
"keys": [
"poynting's theorem"
]
},
{
"term_html": "Maxwell stress tensor",
"html": "At each point the symmetric bilinear form \\(T(\\vec u,\\vec w) = \\varepsilon_0[(\\vec E\\cdot\\vec u)(\\vec E\\cdot\\vec w) - \\frac12|\\vec E|^2\\vec u\\cdot\\vec w] + \\mu_0^{-1}[(\\vec B\\cdot\\vec u)(\\vec B\\cdot\\vec w) - \\frac12|\\vec B|^2\\vec u\\cdot\\vec w]\\). \\(T(\\hat n,\\cdot)\\) is the force per unit area transmitted across a surface with normal \\(\\hat n\\); minus \\(T\\) is the flux of field momentum. Its components change by \\(T' = R^\\top TR\\), a theorem from bilinearity.",
"section": "The complete system: energy and momentum",
"slide": "Momentum, and the Maxwell stress tensor",
"keys": [
"maxwell stress tensor"
]
},
{
"term_html": "tensor field",
"html": "A tensor attached to each point of a region, varying with the point: here a symmetric bilinear form on \\(\\mathbb R^3\\) at every point.",
"section": "The complete system: energy and momentum",
"slide": "Momentum, and the Maxwell stress tensor",
"keys": [
"tensor field"
]
},
{
"term_html": "field momentum density",
"html": "\\(\\vec g = \\varepsilon_0\\vec E\\times\\vec B = \\vec S/c^2\\). With the stress tensor it satisfies \\(\\partial_t\\vec g - \\operatorname{div}T = -(\\rho\\vec E + \\vec J\\times\\vec B)\\).",
"section": "The complete system: energy and momentum",
"slide": "Momentum, and the Maxwell stress tensor",
"keys": [
"field momentum density"
]
},
{
"term_html": "wave operator",
"html": "\\(\\Box = c^{-2}\\partial_t^2 - \\nabla^2\\), with \\(c = 1/\\sqrt{\\mu_0\\varepsilon_0}\\). In vacuum every Cartesian component of \\(\\vec E\\) and \\(\\vec B\\) satisfies \\(\\Box f = 0\\).",
"section": "Light",
"slide": "The vacuum wave equation",
"keys": [
"wave operator"
]
},
{
"term_html": "d'Alembertian",
"html": "Another name for the wave operator \\(\\Box\\). Sign conventions differ between books.",
"section": "Light",
"slide": "The vacuum wave equation",
"keys": [
"d'alembertian"
]
},
{
"term_html": "plane wave",
"html": "A field \\(\\operatorname{Re}(\\vec E_0e^{i(\\vec k\\cdot\\vec x - \\omega t)})\\) with constant complex amplitude. It solves Maxwell's equations in vacuum iff \\(\\omega = c|\\vec k|\\), \\(\\vec k\\cdot\\vec E_0 = 0\\) and \\(\\vec B_0 = \\vec k\\times\\vec E_0/\\omega\\).",
"section": "Light",
"slide": "Plane waves",
"keys": [
"plane wave"
]
},
{
"term_html": "transverse",
"html": "Of a wave: with fields perpendicular to the direction of propagation. Light is transverse, \\(\\vec E\\perp\\vec B\\perp\\vec k\\), and \\(|\\vec B| = |\\vec E|/c\\).",
"section": "Light",
"slide": "Plane waves",
"keys": [
"transverse"
]
},
{
"term_html": "polarisation",
"html": "For a wave along \\(\\hat z\\), the complex line through the amplitude \\(\\vec E_0\\) in the plane perpendicular to \\(\\hat z\\). The tip of \\(\\vec E\\) traces an ellipse; linear and circular are the degenerate and round cases.",
"section": "Light",
"slide": "Polarisation",
"keys": [
"polarisation"
]
},
{
"term_html": "potentials",
"html": "A scalar \\(\\varphi\\) and a vector \\(\\vec A\\) with \\(\\vec B = \\nabla\\times\\vec A\\) and \\(\\vec E = -\\nabla\\varphi - \\partial_t\\vec A\\). On \\(\\mathbb R^3\\) they exist iff the homogeneous pair of Maxwell's equations holds.",
"section": "Potentials and gauge",
"slide": "Potentials, and what they fail to determine",
"keys": [
"potentials"
]
},
{
"term_html": "gauge transformation",
"html": "\\((\\varphi,\\vec A)\\mapsto(\\varphi - \\partial_t\\chi,\\ \\vec A + \\nabla\\chi)\\). Two pairs of potentials give the same fields iff they differ by one: the fields are the potentials modulo gauge.",
"section": "Potentials and gauge",
"slide": "Potentials, and what they fail to determine",
"keys": [
"gauge transformation"
]
},
{
"term_html": "Lorenz gauge",
"html": "The condition \\(\\nabla\\cdot\\vec A + c^{-2}\\partial_t\\varphi = 0\\), under which \\(\\Box\\varphi = \\rho/\\varepsilon_0\\) and \\(\\Box\\vec A = \\mu_0\\vec J\\). Named for Ludvig Lorenz.",
"section": "Potentials and gauge",
"slide": "The Lorenz gauge: two wave equations",
"keys": [
"lorenz gauge"
]
},
{
"term_html": "residual gauge freedom",
"html": "The gauge transformations that preserve a gauge condition. In Lorenz gauge they are those with \\(\\Box\\chi = 0\\).",
"section": "Potentials and gauge",
"slide": "The Lorenz gauge: two wave equations",
"keys": [
"residual gauge freedom"
]
},
{
"term_html": "Coulomb gauge",
"html": "The condition \\(\\nabla\\cdot\\vec A = 0\\). In it \\(\\varphi\\) is the instantaneous Coulomb potential of the charge present at each moment, while \\(\\vec E\\) remains causal.",
"section": "Potentials and gauge",
"slide": "The Coulomb gauge: an instantaneous potential",
"keys": [
"coulomb gauge"
]
},
{
"term_html": "fundamental solution",
"html": "A distribution \\(G\\) with \\(\\Box G = \\delta^{(4)}\\); then \\(G * f\\) solves \\(\\Box u = f\\). Its transform is \\(c^2/(c^2k^2 - \\omega^2)\\), an undamped oscillator of frequency \\(ck\\) for each wave vector.",
"section": "The retarded Green's function",
"slide": "Every mode is an oscillator",
"keys": [
"fundamental solution"
]
},
{
"term_html": "\\(i0\\) prescription",
"html": "The choice \\(\\omega\\mapsto\\omega + i0\\) in inverting a transform with poles on the real axis: poles pushed below, contour passing above. It selects the solution that vanishes before the source acts.",
"section": "The retarded Green's function",
"slide": "Every mode is an oscillator",
"keys": [
"i0 prescription"
]
},
{
"term_html": "retarded Green's function",
"html": "\\(G_\\mathrm{ret}(\\vec x,t) = \\delta(t - r/c)/4\\pi r\\), the unique fundamental solution of \\(\\Box\\) vanishing for \\(t &lt; 0\\), supported on the sphere \\(r = ct\\).",
"section": "The retarded Green's function",
"slide": "Worked: the retarded Green's function by residues",
"keys": [
"retarded green's function"
]
},
{
"term_html": "advanced Green's function",
"html": "\\(G_\\mathrm{adv}(\\vec x,t) = \\delta(t + r/c)/4\\pi r\\), from passing below the poles: a wave converging on the source. It solves the same equation and is excluded by the condition that no radiation comes in from the infinite past.",
"section": "The retarded Green's function",
"slide": "Why this prescription is the causal one",
"keys": [
"advanced green's function"
]
},
{
"term_html": "retarded time",
"html": "\\(t_\\mathrm r = t - |\\vec x - \\vec y|/c\\), the time at which a signal at speed \\(c\\) left \\(\\vec y\\) to reach \\(\\vec x\\) at time \\(t\\).",
"section": "The retarded Green's function",
"slide": "Retarded potentials",
"keys": [
"retarded time"
]
},
{
"term_html": "retarded potentials",
"html": "\\(\\varphi = \\frac{1}{4\\pi\\varepsilon_0}\\int\\rho(\\vec y,t_\\mathrm r)/|\\vec x - \\vec y|\\) and \\(\\vec A = \\frac{\\mu_0}{4\\pi}\\int\\vec J(\\vec y,t_\\mathrm r)/|\\vec x - \\vec y|\\). They satisfy the Lorenz condition because charge is conserved, and so solve Maxwell's equations.",
"section": "The retarded Green's function",
"slide": "Retarded potentials",
"keys": [
"retarded potentials"
]
},
{
"term_html": "spherical mean",
"html": "\\(M_r[h](\\vec x)\\), the average of \\(h\\) over the sphere of radius \\(r\\) about \\(\\vec x\\). Darboux's identity says it satisfies \\(\\partial_r^2M + \\frac2r\\partial_rM = \\nabla_x^2M\\).",
"section": "The retarded Green's function",
"slide": "Kirchhoff's formula, and sharp wavefronts",
"keys": [
"spherical mean"
]
},
{
"term_html": "Kirchhoff's formula",
"html": "The solution of \\(\\Box u = 0\\) with data \\(u = g\\), \\(u_t = h\\) is \\(\\partial_t(t\\,M_{ct}[g]) + t\\,M_{ct}[h]\\).",
"section": "The retarded Green's function",
"slide": "Kirchhoff's formula, and sharp wavefronts",
"keys": [
"kirchhoff's formula"
]
},
{
"term_html": "strong Huygens principle",
"html": "In three dimensions the solution at \\((\\vec x,t)\\) depends on the data only on the sphere \\(|\\vec y - \\vec x| = ct\\), so a localised disturbance passes with a sharp front and a sharp back.",
"section": "The retarded Green's function",
"slide": "Kirchhoff's formula, and sharp wavefronts",
"keys": [
"strong huygens principle"
]
},
{
"term_html": "Hadamard's method of descent",
"html": "Obtaining the solution in fewer dimensions from one in more, by taking data independent of the extra coordinate. It gives \\(G_2 = cH(ct - \\varrho)/2\\pi\\sqrt{c^2t^2 - \\varrho^2}\\), supported inside the cone: in two dimensions a flash has a tail.",
"section": "The retarded Green's function",
"slide": "Descent: in two dimensions a flash has a tail",
"keys": [
"hadamard's method of descent"
]
},
{
"term_html": "dipole approximation",
"html": "For sources of size \\(d\\) small compared with the distance and with \\(c\\) times their time scale, \\(\\vec A\\approx\\mu_0\\dot{\\vec p}(t - r/c)/4\\pi r\\), with \\(\\vec p\\) the electric dipole moment.",
"section": "Radiation",
"slide": "Far from a small source",
"keys": [
"dipole approximation"
]
},
{
"term_html": "radiation field",
"html": "The part of the field falling off as \\(1/r\\): \\(\\vec B = \\mu_0\\ddot{\\vec p}\\times\\hat r/4\\pi cr\\), \\(\\vec E = c\\vec B\\times\\hat r\\). It alone carries energy to infinity.",
"section": "Radiation",
"slide": "Far from a small source",
"keys": [
"radiation field"
]
},
{
"term_html": "Larmor formula",
"html": "\\(P = q^2|\\vec a|^2/6\\pi\\varepsilon_0c^3\\), the power radiated by a slowly moving accelerated charge, distributed as \\(\\sin^2\\theta\\). Applied to a classical atom it predicts collapse in \\(1.56\\times10^{-11}\\) s.",
"section": "Radiation",
"slide": "The Larmor formula",
"keys": [
"larmor formula"
]
}
];
