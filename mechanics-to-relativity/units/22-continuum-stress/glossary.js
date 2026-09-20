// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "continuum",
"html": "A body described by fields — density, velocity, stress — defined at every point, with the molecules forgotten. Legitimate when the scales of interest are far larger than the mean free path (about \\(0.07\\ \\mu\\mathrm m\\) in air).",
"section": "Stress: the force on a surface",
"slide": "One gas, one number, two closures",
"keys": [
"continuum"
]
},
{
"term_html": "body force",
"html": "A force acting on the bulk of a region, \\(\\int_P \\rho\\,\\vec b\\,\\mathrm dV\\), with \\(\\vec b\\) per unit mass; gravity is the example, \\(\\vec b = \\vec g\\).",
"section": "Stress: the force on a surface",
"slide": "The force on a piece of a body is not a vector",
"keys": [
"body force"
]
},
{
"term_html": "surface force",
"html": "The force exerted across the boundary of a region by the material outside it, \\(\\oint_{\\partial P}\\vec t\\,\\mathrm dA\\). The continuum idealisation of short-range molecular forces.",
"section": "Stress: the force on a surface",
"slide": "The force on a piece of a body is not a vector",
"keys": [
"surface force"
]
},
{
"term_html": "traction",
"html": "\\(\\vec t\\), the surface force per unit area across a surface at a point, in pascals. A priori a function of the surface's orientation, not a single vector.",
"section": "Stress: the force on a surface",
"slide": "The force on a piece of a body is not a vector",
"keys": [
"traction"
]
},
{
"term_html": "Cauchy's postulate",
"html": "The hypothesis that the traction depends on a surface only through its outward unit normal: \\(\\vec t = \\vec t(\\vec x, t, \\vec n)\\), continuous in \\((\\vec x, \\vec n)\\) jointly. Noll (1959) derived it from the balance law.",
"section": "Stress: the force on a surface",
"slide": "The force on a piece of a body is not a vector",
"keys": [
"cauchy's postulate"
]
},
{
"term_html": "Cauchy's stress theorem",
"html": "Under the postulate and momentum balance, the traction is linear in the normal: \\(\\vec t(\\vec n) = \\sigma\\vec n\\), \\(t_i = \\sigma_{ij}n_j\\), with \\(\\sigma_{ij} = \\vec e_i\\cdot\\vec t(\\vec e_j)\\). Proved by the tetrahedron argument: surface forces scale as area, volume forces as length cubed, so on a shrinking tetrahedron the surface forces must balance, and balance on a tetrahedron is linearity.",
"section": "Stress: the force on a surface",
"slide": "Cauchy's theorem",
"keys": [
"cauchy's stress theorem"
]
},
{
"term_html": "stress tensor",
"html": "The bilinear form \\(\\sigma(\\vec m, \\vec n) = \\vec m\\cdot\\vec t(\\vec n) = m_i\\sigma_{ij}n_j\\): a (0,2)-tensor at each point, and a tensor field as the point varies. Its components transform as \\(\\sigma' = R^{\\top}\\sigma R\\) under a rotation of basis — a theorem, from bilinearity. Physically, the flux of momentum.",
"section": "Stress: the force on a surface",
"slide": "Stress is a bilinear form",
"keys": [
"stress tensor"
]
},
{
"term_html": "normal stress",
"html": "\\(\\sigma(\\vec n, \\vec n)\\), the component of the traction along the normal: positive for a pull (tension), negative for a push (compression).",
"section": "Stress: the force on a surface",
"slide": "Stress is a bilinear form",
"keys": [
"normal stress"
]
},
{
"term_html": "shear stress",
"html": "The part of the traction tangent to the surface, \\(\\vec t - \\sigma(\\vec n,\\vec n)\\,\\vec n\\).",
"section": "Stress: the force on a surface",
"slide": "Stress is a bilinear form",
"keys": [
"shear stress"
]
},
{
"term_html": "principal stresses",
"html": "The eigenvalues of the symmetric stress tensor. On the planes normal to its eigenvectors the traction is purely normal.",
"section": "Stress: the force on a surface",
"slide": "Stress is a bilinear form",
"keys": [
"principal stresses"
]
},
{
"term_html": "fluid",
"html": "A material that at rest sustains no shear stress on any plane; for small motions, an elastic material with shear modulus \\(\\mu = 0\\).",
"section": "Stress: the force on a surface",
"slide": "Pressure is the isotropic part",
"keys": [
"fluid"
]
},
{
"term_html": "pressure",
"html": "\\(p = -\\tfrac13\\operatorname{tr}\\sigma\\), minus the mean normal stress. Basis-independent because the trace is.",
"section": "Stress: the force on a surface",
"slide": "Pressure is the isotropic part",
"keys": [
"pressure"
]
},
{
"term_html": "isotropic part",
"html": "\\(-pI\\), the part of the stress that looks the same in every rotated basis.",
"section": "Stress: the force on a surface",
"slide": "Pressure is the isotropic part",
"keys": [
"isotropic part"
]
},
{
"term_html": "deviatoric stress",
"html": "\\(\\tau = \\sigma + pI\\), the trace-free remainder of the stress.",
"section": "Stress: the force on a surface",
"slide": "Pressure is the isotropic part",
"keys": [
"deviatoric stress"
]
},
{
"term_html": "Pascal's law",
"html": "In a fluid at rest \\(\\sigma = -pI\\): the traction on every plane is \\(-p\\vec n\\). Proof: every vector is an eigenvector of \\(\\sigma\\), so \\(\\sigma\\) is scalar.",
"section": "Stress: the force on a surface",
"slide": "Pressure is the isotropic part",
"keys": [
"pascal's law"
]
},
{
"term_html": "divergence of a tensor field",
"html": "\\((\\operatorname{div}T)_i = \\partial_jT_{ij}\\), taken on the second slot; basis-free, \\(\\vec a\\cdot\\operatorname{div}T = \\nabla\\cdot(T^{\\top}\\vec a)\\) for constant \\(\\vec a\\). It satisfies \\(\\oint_{\\partial\\Omega}T\\vec n\\,\\mathrm dA = \\int_\\Omega\\operatorname{div}T\\,\\mathrm dV\\).",
"section": "Conservation laws in local form",
"slide": "The divergence theorem for a tensor field",
"keys": [
"divergence of a tensor field"
]
},
{
"term_html": "mass flux",
"html": "\\(\\rho\\vec v\\), the mass crossing unit area per unit time.",
"section": "Conservation laws in local form",
"slide": "Mass: from a budget to a field equation",
"keys": [
"mass flux"
]
},
{
"term_html": "localisation lemma",
"html": "If \\(f\\) is continuous and its integral over every ball is zero, then \\(f \\equiv 0\\). The step that turns an integral budget into a PDE.",
"section": "Conservation laws in local form",
"slide": "Mass: from a budget to a field equation",
"keys": [
"localisation lemma"
]
},
{
"term_html": "continuity equation",
"html": "\\(\\partial_t\\rho + \\nabla\\cdot(\\rho\\vec v) = 0\\): local conservation of mass.",
"section": "Conservation laws in local form",
"slide": "Mass: from a budget to a field equation",
"keys": [
"continuity equation"
]
},
{
"term_html": "Eulerian description",
"html": "Fluid fields as functions of fixed points of space and time.",
"section": "Conservation laws in local form",
"slide": "The material derivative",
"keys": [
"eulerian description"
]
},
{
"term_html": "Lagrangian description",
"html": "Following each particle along its path \\(\\dot{\\vec x} = \\vec v(\\vec x, t)\\).",
"section": "Conservation laws in local form",
"slide": "The material derivative",
"keys": [
"lagrangian description"
]
},
{
"term_html": "material derivative",
"html": "\\(\\mathrm Df/\\mathrm Dt = \\partial_tf + \\vec v\\cdot\\nabla f\\), the rate of change of \\(f\\) seen by a moving particle; the fluid acceleration is \\(\\partial_t\\vec v + (\\vec v\\cdot\\nabla)\\vec v\\).",
"section": "Conservation laws in local form",
"slide": "The material derivative",
"keys": [
"material derivative"
]
},
{
"term_html": "incompressible",
"html": "Each particle keeps its density, \\(\\mathrm D\\rho/\\mathrm Dt = 0\\); by continuity, equivalent to \\(\\nabla\\cdot\\vec v = 0\\). Not the same as uniform density.",
"section": "Conservation laws in local form",
"slide": "The material derivative",
"keys": [
"incompressible"
]
},
{
"term_html": "flow map",
"html": "\\(\\varphi_t\\), sending each particle's initial position to its position at time \\(t\\): \\(\\partial_t\\varphi_t = \\vec v(\\varphi_t, t)\\), \\(\\varphi_0 = \\mathrm{id}\\).",
"section": "Conservation laws in local form",
"slide": "The Reynolds transport theorem",
"keys": [
"flow map"
]
},
{
"term_html": "material region",
"html": "\\(\\Omega_t = \\varphi_t(\\Omega_0)\\), a region made of the same particles at every time.",
"section": "Conservation laws in local form",
"slide": "The Reynolds transport theorem",
"keys": [
"material region"
]
},
{
"term_html": "Reynolds transport theorem",
"html": "\\(\\frac{\\mathrm d}{\\mathrm dt}\\int_{\\Omega_t}f = \\int_{\\Omega_t}(\\mathrm Df/\\mathrm Dt + f\\nabla\\cdot\\vec v) = \\int_{\\Omega_t}\\partial_tf + \\oint_{\\partial\\Omega_t}f\\vec v\\cdot\\vec n\\). With continuity, \\(\\frac{\\mathrm d}{\\mathrm dt}\\int\\rho g = \\int\\rho\\,\\mathrm Dg/\\mathrm Dt\\). Not unit 03's transport theorem for rotating frames.",
"section": "Conservation laws in local form",
"slide": "The Reynolds transport theorem",
"keys": [
"reynolds transport theorem"
]
},
{
"term_html": "Euler's expansion formula",
"html": "\\(\\partial_tJ = (\\nabla\\cdot\\vec v)J\\) for the Jacobian determinant \\(J = \\det D\\varphi_t\\) of the flow map: divergence is the rate of volume growth.",
"section": "Conservation laws in local form",
"slide": "The Reynolds transport theorem",
"keys": [
"euler's expansion formula"
]
},
{
"term_html": "Jacobi's formula",
"html": "\\(\\frac{\\mathrm d}{\\mathrm dt}\\det F = \\det F\\, \\operatorname{tr}(F^{-1}\\dot F)\\), from \\(\\det(I + hB) = 1 + h\\operatorname{tr}B + O(h^2)\\).",
"section": "Conservation laws in local form",
"slide": "The Reynolds transport theorem",
"keys": [
"jacobi's formula"
]
},
{
"term_html": "Cauchy's equation of motion",
"html": "\\(\\rho\\,\\mathrm D\\vec v/\\mathrm Dt = \\operatorname{div}\\sigma + \\rho\\vec b\\): local momentum balance, from the integral balance by the transport theorem, the tensor divergence theorem and localisation.",
"section": "Conservation laws in local form",
"slide": "Momentum: Cauchy's equation of motion",
"keys": [
"cauchy's equation of motion"
]
},
{
"term_html": "momentum flux tensor",
"html": "\\(\\Pi_{ij} = \\rho v_iv_j - \\sigma_{ij}\\), in the conservation form \\(\\partial_t(\\rho v_i) + \\partial_j\\Pi_{ij} = \\rho b_i\\): momentum carried by moving matter plus momentum transmitted by stress.",
"section": "Conservation laws in local form",
"slide": "Momentum: Cauchy's equation of motion",
"keys": [
"momentum flux tensor"
]
},
{
"term_html": "hydrostatic equilibrium",
"html": "\\(\\nabla p = \\rho\\vec g\\) in a fluid at rest; in water, \\(p = p_{\\text{atm}} + \\rho_wgd\\), one atmosphere more every \\(10.35\\) m.",
"section": "Conservation laws in local form",
"slide": "Archimedes, from the divergence theorem",
"keys": [
"hydrostatic equilibrium"
]
},
{
"term_html": "Archimedes' principle",
"html": "A fluid at rest pushes on an immersed body with an upward force equal to the weight of the displaced fluid, whatever the body's shape — the tensor divergence theorem applied to \\(-pI\\).",
"section": "Conservation laws in local form",
"slide": "Archimedes, from the divergence theorem",
"keys": [
"archimedes' principle"
]
},
{
"term_html": "angular momentum balance",
"html": "The torque on every material region equals the rate of change of its angular momentum, written with the antisymmetric pairs \\(x_ip_j - x_jp_i\\) in place of cross products.",
"section": "Conservation laws in local form",
"slide": "Angular momentum makes stress symmetric",
"keys": [
"angular momentum balance"
]
},
{
"term_html": "symmetry of stress",
"html": "\\(\\sigma_{ij} = \\sigma_{ji}\\), proved from angular momentum balance when every torque is a moment of forces.",
"section": "Conservation laws in local form",
"slide": "Angular momentum makes stress symmetric",
"keys": [
"symmetry of stress"
]
},
{
"term_html": "body couple",
"html": "A torque per unit volume acting on the material directly, not as a moment of forces — as on a ferrofluid in a magnetic field. Its presence makes the antisymmetric part of the stress nonzero: \\(\\sigma_{ij} - \\sigma_{ji} = m_{ij}\\).",
"section": "Conservation laws in local form",
"slide": "Angular momentum makes stress symmetric",
"keys": [
"body couple"
]
},
{
"term_html": "constitutive law",
"html": "The material-specific relation giving the stress in terms of the motion; it supplies the six equations the conservation laws lack.",
"section": "Closing the equations",
"slide": "Ten unknowns, four equations",
"keys": [
"constitutive law"
]
},
{
"term_html": "ideal fluid",
"html": "A fluid with \\(\\sigma = -pI\\) even in motion: no viscosity.",
"section": "Closing the equations",
"slide": "Ten unknowns, four equations",
"keys": [
"ideal fluid"
]
},
{
"term_html": "Euler's equations",
"html": "\\(\\partial_t\\rho + \\nabla\\cdot(\\rho\\vec v) = 0\\), \\(\\rho\\,\\mathrm D\\vec v/\\mathrm Dt = -\\nabla p + \\rho\\vec b\\): the ideal fluid (Euler, 1757).",
"section": "Closing the equations",
"slide": "Ten unknowns, four equations",
"keys": [
"euler's equations"
]
},
{
"term_html": "equation of state",
"html": "The material relation among pressure, density and temperature that closes Euler's equations.",
"section": "Closing the equations",
"slide": "Ten unknowns, four equations",
"keys": [
"equation of state"
]
},
{
"term_html": "barotropic",
"html": "Of a fluid or a motion: the pressure is a function of the density alone, \\(p = P(\\rho)\\).",
"section": "Closing the equations",
"slide": "Ten unknowns, four equations",
"keys": [
"barotropic"
]
},
{
"term_html": "displacement field",
"html": "\\(\\vec u(\\vec X) = \\vec x - \\vec X\\), how far the particle from reference position \\(\\vec X\\) has moved.",
"section": "Closing the equations",
"slide": "Strain",
"keys": [
"displacement field"
]
},
{
"term_html": "infinitesimal rotation",
"html": "The antisymmetric part \\(\\omega\\) of \\(D\\vec u\\); to first order it changes no lengths.",
"section": "Closing the equations",
"slide": "Strain",
"keys": [
"infinitesimal rotation"
]
},
{
"term_html": "strain tensor",
"html": "\\(\\varepsilon = \\tfrac12(D\\vec u + D\\vec u^{\\top})\\), a symmetric bilinear form; \\(\\varepsilon(\\vec a,\\vec a)\\) is the fractional stretch of a fibre along the unit vector \\(\\vec a\\).",
"section": "Closing the equations",
"slide": "Strain",
"keys": [
"strain tensor"
]
},
{
"term_html": "dilatation",
"html": "\\(\\operatorname{tr}\\varepsilon = \\nabla\\cdot\\vec u\\), the fractional change of volume.",
"section": "Closing the equations",
"slide": "Strain",
"keys": [
"dilatation"
]
},
{
"term_html": "elasticity tensor",
"html": "The linear map \\(C\\) with \\(\\sigma = C(\\varepsilon)\\): a (0,4)-tensor, 36 constants in general, 21 if an elastic energy exists.",
"section": "Closing the equations",
"slide": "Isotropy leaves two constants",
"keys": [
"elasticity tensor"
]
},
{
"term_html": "isotropic material",
"html": "One with \\(C(Q\\varepsilon Q^{\\top}) = Q\\,C(\\varepsilon)\\,Q^{\\top}\\) for every rotation \\(Q\\): its response does not depend on orientation.",
"section": "Closing the equations",
"slide": "Isotropy leaves two constants",
"keys": [
"isotropic material"
]
},
{
"term_html": "Lamé parameters",
"html": "The two constants \\(\\lambda, \\mu\\) to which isotropy reduces a linear elastic material: \\(C(\\varepsilon) = \\lambda(\\operatorname{tr}\\varepsilon)I + 2\\mu\\varepsilon\\). A theorem, proved with half-turns and quarter-turns.",
"section": "Closing the equations",
"slide": "Isotropy leaves two constants",
"keys": [
"lamé parameters"
]
},
{
"term_html": "Hooke's law",
"html": "\\(\\sigma = \\lambda(\\operatorname{tr}\\varepsilon)I + 2\\mu\\varepsilon = K(\\operatorname{tr}\\varepsilon)I + 2\\mu\\varepsilon_{\\text{dev}}\\) for an isotropic linear elastic solid.",
"section": "Closing the equations",
"slide": "Hooke's law and its two moduli",
"keys": [
"hooke's law"
]
},
{
"term_html": "bulk modulus",
"html": "\\(K = \\lambda + \\tfrac23\\mu\\): pressure per fractional decrease in volume, \\(p = -K\\,\\Delta V/V\\). For a gas, \\(K = \\rho\\,\\mathrm dp/\\mathrm d\\rho\\); adiabatically \\(\\gamma p\\).",
"section": "Closing the equations",
"slide": "Hooke's law and its two moduli",
"keys": [
"bulk modulus"
]
},
{
"term_html": "shear modulus",
"html": "\\(\\mu\\): shear stress per radian of shear. Zero for a fluid.",
"section": "Closing the equations",
"slide": "Hooke's law and its two moduli",
"keys": [
"shear modulus"
]
},
{
"term_html": "strain energy density",
"html": "\\(W = \\tfrac12K(\\operatorname{tr}\\varepsilon)^2 + \\mu|\\varepsilon_{\\text{dev}}|^2\\), with \\(\\sigma = \\partial W/\\partial\\varepsilon\\). Positive definite iff \\(K &gt; 0\\) and \\(\\mu &gt; 0\\), which forces \\(\\lambda + \\mu &gt; 0\\).",
"section": "Closing the equations",
"slide": "Hooke's law and its two moduli",
"keys": [
"strain energy density"
]
},
{
"term_html": "rate-of-strain tensor",
"html": "\\(e = \\tfrac12(D\\vec v + D\\vec v^{\\top})\\), the symmetric part of the velocity gradient.",
"section": "Closing the equations",
"slide": "Viscosity: the Navier–Stokes equations",
"keys": [
"rate-of-strain tensor"
]
},
{
"term_html": "Newtonian fluid",
"html": "One whose viscous stress is linear and isotropic in the rate of strain: \\(\\tau = 2\\eta(e - \\tfrac13(\\operatorname{tr}e)I) + \\zeta(\\operatorname{tr}e)I\\).",
"section": "Closing the equations",
"slide": "Viscosity: the Navier–Stokes equations",
"keys": [
"newtonian fluid"
]
},
{
"term_html": "viscosity",
"html": "\\(\\eta\\), in Pa s: \\(1.002\\times10^{-3}\\) for water and \\(1.81\\times10^{-5}\\) for air at \\(20\\,{}^\\circ\\mathrm C\\).",
"section": "Closing the equations",
"slide": "Viscosity: the Navier–Stokes equations",
"keys": [
"viscosity"
]
},
{
"term_html": "bulk viscosity",
"html": "\\(\\zeta\\), the resistance to the rate of volume change. Zero for a monatomic gas (Stokes' hypothesis).",
"section": "Closing the equations",
"slide": "Viscosity: the Navier–Stokes equations",
"keys": [
"bulk viscosity"
]
},
{
"term_html": "Navier–Stokes equations",
"html": "\\(\\rho\\,\\mathrm D\\vec v/\\mathrm Dt = -\\nabla p + \\eta\\nabla^2\\vec v + (\\zeta + \\tfrac13\\eta)\\nabla(\\nabla\\cdot\\vec v) + \\rho\\vec b\\); the viscous term \\(\\eta\\nabla^2\\vec v\\) is momentum diffusing with diffusivity \\(\\nu = \\eta/\\rho\\).",
"section": "Closing the equations",
"slide": "Viscosity: the Navier–Stokes equations",
"keys": [
"navier–stokes equations"
]
},
{
"term_html": "linearisation",
"html": "Writing each field as a rest value plus a small perturbation and dropping every product of perturbations.",
"section": "Sound",
"slide": "Linearising about rest",
"keys": [
"linearisation"
]
},
{
"term_html": "wave equation",
"html": "Here \\(\\partial_t^2\\rho' = c^2\\nabla^2\\rho'\\) with \\(c^2 = \\mathrm dp/\\mathrm d\\rho\\) at the rest density: unit 18's equation in three dimensions.",
"section": "Sound",
"slide": "Linearising about rest",
"keys": [
"wave equation"
]
},
{
"term_html": "longitudinal wave",
"html": "A wave whose displacement or velocity points along its direction of travel. Sound in a fluid is one: \\(\\vec v = (p'/\\rho_0c)\\,\\vec n\\).",
"section": "Sound",
"slide": "Linearising about rest",
"keys": [
"longitudinal wave"
]
},
{
"term_html": "ideal gas law",
"html": "\\(p = \\rho RT/M\\), with \\(R = 8.314\\ \\mathrm{J\\,mol^{-1}K^{-1}}\\) and \\(M\\) the molar mass. Empirical; cited.",
"section": "Sound",
"slide": "The closure: how does pressure follow density?",
"keys": [
"ideal gas law"
]
},
{
"term_html": "isothermal",
"html": "At constant temperature. Newton's hypothesis for sound.",
"section": "Sound",
"slide": "The closure: how does pressure follow density?",
"keys": [
"isothermal"
]
},
{
"term_html": "Boyle's law",
"html": "\\(p \\propto \\rho\\) at fixed temperature (1662).",
"section": "Sound",
"slide": "The closure: how does pressure follow density?",
"keys": [
"boyle's law"
]
},
{
"term_html": "adiabatic",
"html": "With no heat exchanged. For an ideal gas it gives \\(p \\propto \\rho^\\gamma\\), and it is Laplace's (correct) hypothesis for sound.",
"section": "Sound",
"slide": "The closure: how does pressure follow density?",
"keys": [
"adiabatic"
]
},
{
"term_html": "adiabatic index",
"html": "\\(\\gamma = c_p/c_V = 1 + R/c_V\\); \\(\\tfrac75\\) for a diatomic gas such as air, \\(\\tfrac53\\) for a monatomic one.",
"section": "Sound",
"slide": "The closure: how does pressure follow density?",
"keys": [
"adiabatic index"
]
},
{
"term_html": "thermal diffusivity",
"html": "\\(\\kappa = k/\\rho c_p\\), in \\(\\mathrm{m^2s^{-1}}\\): heat spreads a distance \\(L\\) in a time of order \\(L^2/\\kappa\\). \\(2.14\\times10^{-5}\\ \\mathrm{m^2s^{-1}}\\) for air at \\(20\\,{}^\\circ\\mathrm C\\).",
"section": "Sound",
"slide": "Newton's error, and Laplace's repair",
"keys": [
"thermal diffusivity"
]
},
{
"term_html": "acoustic energy density",
"html": "\\(e = \\tfrac12\\rho_0|\\vec v|^2 + p'^2/2\\rho_0c^2\\), kinetic plus compressional energy per unit volume in linear acoustics.",
"section": "Sound",
"slide": "Energy in a sound wave, and a preview of the stress–energy tensor",
"keys": [
"acoustic energy density"
]
},
{
"term_html": "acoustic intensity",
"html": "\\(\\vec S = p'\\vec v\\), the energy flux of a sound wave, with \\(\\partial_te + \\nabla\\cdot\\vec S = 0\\).",
"section": "Sound",
"slide": "Energy in a sound wave, and a preview of the stress–energy tensor",
"keys": [
"acoustic intensity"
]
},
{
"term_html": "stress–energy tensor",
"html": "\\(T^{\\mu\\nu}\\), the symmetric \\(4\\times4\\) object of units 29 and 35 assembling energy density, energy flux and momentum flux; \\(\\partial_\\mu T^{\\mu\\nu} = 0\\) is local conservation of energy and momentum. Flagged here, not used.",
"section": "Sound",
"slide": "Energy in a sound wave, and a preview of the stress–energy tensor",
"keys": [
"stress–energy tensor"
]
},
{
"term_html": "perfect fluid",
"html": "The relativistic name for the ideal fluid; at rest its stress–energy tensor is \\(\\operatorname{diag}(\\rho c^2, p, p, p)\\), \\(c\\) the speed of light.",
"section": "Sound",
"slide": "Energy in a sound wave, and a preview of the stress–energy tensor",
"keys": [
"perfect fluid"
]
},
{
"term_html": "acoustic impedance",
"html": "\\(\\rho_0c\\), the ratio \\(p'/|\\vec v|\\) in a plane sound wave: \\(413.3\\ \\mathrm{Pa\\,s\\,m^{-1}}\\) for air at \\(20\\,{}^\\circ\\mathrm C\\).",
"section": "Sound",
"slide": "Energy in a sound wave, and a preview of the stress–energy tensor",
"keys": [
"acoustic impedance"
]
},
{
"term_html": "Navier's equation",
"html": "\\(\\rho\\,\\partial_t^2\\vec u = (\\lambda + \\mu)\\nabla(\\nabla\\cdot\\vec u) + \\mu\\nabla^2\\vec u\\), small motions of an isotropic elastic solid.",
"section": "Waves in solids, and the Earth's liquid core",
"slide": "Navier's equation for an elastic solid",
"keys": [
"navier's equation"
]
},
{
"term_html": "plane wave",
"html": "A solution \\(\\vec u = \\vec a\\,f(\\vec n\\cdot\\vec x - ct)\\): a fixed profile travelling along \\(\\vec n\\) at speed \\(c\\) with polarisation \\(\\vec a\\).",
"section": "Waves in solids, and the Earth's liquid core",
"slide": "Plane waves: two speeds and no third",
"keys": [
"plane wave"
]
},
{
"term_html": "acoustic tensor",
"html": "\\(A(\\vec n) = (\\lambda + \\mu)\\,\\vec n\\otimes\\vec n + \\mu I\\), whose eigenvalues are \\(\\rho c^2\\) for the plane waves travelling along \\(\\vec n\\).",
"section": "Waves in solids, and the Earth's liquid core",
"slide": "Plane waves: two speeds and no third",
"keys": [
"acoustic tensor"
]
},
{
"term_html": "P-wave",
"html": "The longitudinal (primary) elastic wave, \\(c_L = \\sqrt{(\\lambda + 2\\mu)/\\rho}\\). The first to arrive.",
"section": "Waves in solids, and the Earth's liquid core",
"slide": "Plane waves: two speeds and no third",
"keys": [
"p-wave"
]
},
{
"term_html": "S-wave",
"html": "The transverse (secondary) elastic wave, \\(c_T = \\sqrt{\\mu/\\rho}\\), with two polarisations. Always slower: \\(c_L/c_T &gt; \\sqrt{4/3}\\).",
"section": "Waves in solids, and the Earth's liquid core",
"slide": "Plane waves: two speeds and no third",
"keys": [
"s-wave"
]
},
{
"term_html": "transverse wave",
"html": "A wave whose displacement is perpendicular to its direction of travel. Needs a shear modulus, so no fluid carries one.",
"section": "Waves in solids, and the Earth's liquid core",
"slide": "Plane waves: two speeds and no third",
"keys": [
"transverse wave"
]
},
{
"term_html": "S-wave shadow zone",
"html": "The region beyond about \\(103^\\circ\\) of arc from an earthquake where no direct S-waves arrive, because they cannot cross the liquid outer core.",
"section": "Waves in solids, and the Earth's liquid core",
"slide": "Why only solids carry shear waves",
"keys": [
"s-wave shadow zone"
]
},
{
"term_html": "outer core",
"html": "The Earth's liquid iron layer, from \\(2891\\) km to \\(5150\\) km depth: \\(c_T = 0\\).",
"section": "Waves in solids, and the Earth's liquid core",
"slide": "Why only solids carry shear waves",
"keys": [
"outer core"
]
},
{
"term_html": "core–mantle boundary",
"html": "The surface at \\(2891\\) km depth (radius \\(3480\\) km) where the solid mantle meets the liquid core.",
"section": "Waves in solids, and the Earth's liquid core",
"slide": "Why only solids carry shear waves",
"keys": [
"core–mantle boundary"
]
}
];
