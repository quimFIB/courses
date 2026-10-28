// Generated from GLOSSARY.org by `cap glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "starter motor",
"html": "The electric motor that turns a car's engine until it fires. At the instant it engages it is not yet turning, and then opposes current only by its windings' resistance, so it is modelled as a resistance; turning, it also develops a back-EMF (unit 12).",
"section": "The running example",
"slide": "Why the headlights dim when the engine cranks",
"keys": [
"starter motor"
]
},
{
"term_html": "conductance",
"html": "The reciprocal of a resistance, \\(G = 1/R\\), in siemens (\\(\\mathrm S = \\Omega^{-1}\\)): the current an element passes per volt. Ohm's law on every edge is \\(i = Gv\\) with \\(G = \\operatorname{diag}(G_e)\\).",
"section": "The Laplacian",
"slide": "Ohm's law on every edge",
"keys": [
"conductance"
]
},
{
"term_html": "weighted graph Laplacian",
"html": "\\(L = AGA^{\\mathsf T}\\) for a graph with incidence matrix \\(A\\) and edge conductances \\(G_e &gt; 0\\). Diagonal entries: the sum of the conductances at a node; off-diagonal: \\(-G_e\\) for each edge joining two nodes; rows sum to zero. Ohm's law and Kirchhoff's laws together are \\(L\\varphi = s\\). It is the matrix of nodal analysis.",
"section": "The Laplacian",
"slide": "The weighted graph Laplacian",
"keys": [
"weighted graph laplacian"
]
},
{
"term_html": "grounding",
"html": "Fixing one node's potential (to zero) in each connected component. \\(L\\varphi = s\\) is solvable iff the injections sum to zero on each component, and its solution is unique up to a constant on each component; grounding removes those constants.",
"section": "The Laplacian",
"slide": "When the potentials exist, and how unique they are",
"keys": [
"grounding"
]
},
{
"term_html": "boundary node",
"html": "A node whose potential is given — a source's terminal, or ground.",
"section": "The Laplacian",
"slide": "The discrete Dirichlet problem",
"keys": [
"boundary node"
]
},
{
"term_html": "interior node",
"html": "A node at which no current is injected, so that Kirchhoff's current law holds there with zero right-hand side.",
"section": "The Laplacian",
"slide": "The discrete Dirichlet problem",
"keys": [
"interior node"
]
},
{
"term_html": "discrete Dirichlet problem",
"html": "Given the potentials at the boundary nodes, find the interior potentials with \\((L\\varphi)_I = 0\\). If every interior component is joined to the boundary, \\(L_{II}\\) is positive definite and the solution exists and is unique — MR 23's uniqueness theorem on a graph.",
"section": "The Laplacian",
"slide": "The discrete Dirichlet problem",
"keys": [
"discrete dirichlet problem"
]
},
{
"term_html": "harmonic",
"html": "Said of node potentials at an interior node: the potential there is the conductance-weighted average of its neighbours'. The graph version of the mean value property.",
"section": "The Laplacian",
"slide": "The maximum principle",
"keys": [
"harmonic"
]
},
{
"term_html": "maximum principle",
"html": "In a discrete Dirichlet problem whose interior components all touch the boundary, every potential lies between the least and greatest boundary potentials; an interior maximum forces its whole interior component to the maximum.",
"section": "The Laplacian",
"slide": "The maximum principle",
"keys": [
"maximum principle"
]
},
{
"term_html": "flow",
"html": "Any edge vector \\(j\\) obeying the current law with given injections, \\(Aj = s\\), whether or not it obeys Ohm's law. A unit flow from \\(a\\) to \\(b\\) has \\(s = e_a - e_b\\).",
"section": "Thomson's principle and effective resistance",
"slide": "Thomson's principle",
"keys": [
"flow"
]
},
{
"term_html": "Thomson's principle",
"html": "Among all flows with the same injections, the dissipated power \\(\\sum_eR_ej_e^2\\) is least for the actual currents, and only for them. Proved from Tellegen's theorem; Doyle and Snell §1.3.5.",
"section": "Thomson's principle and effective resistance",
"slide": "Thomson's principle",
"keys": [
"thomson's principle"
]
},
{
"term_html": "effective resistance",
"html": "For a unit current in at \\(a\\) and out at \\(b\\): \\(R_{\\text{eff}}(a, b) = \\varphi_a - \\varphi_b = s^{\\mathsf T}L^+s\\), which is also the power that current dissipates, and by Thomson the least power of any unit flow from \\(a\\) to \\(b\\).",
"section": "Thomson's principle and effective resistance",
"slide": "Effective resistance",
"keys": [
"effective resistance"
]
},
{
"term_html": "pseudo-inverse",
"html": "For symmetric \\(L = \\sum_k\\lambda_ku_ku_k^{\\mathsf T}\\), \\(L^+ = \\sum_{\\lambda_k &gt; 0}\\lambda_k^{-1}u_ku_k^{\\mathsf T}\\). Then \\(LL^+\\) is the orthogonal projection onto \\(\\operatorname{im}L\\), \\(L^+LL^+ = L^+\\), and \\(L^+s\\) solves \\(L\\varphi = s\\) whenever \\(s\\perp\\ker L\\).",
"section": "Thomson's principle and effective resistance",
"slide": "Effective resistance",
"keys": [
"pseudo-inverse"
]
},
{
"term_html": "Rayleigh's monotonicity law",
"html": "Raising any edge's resistance cannot lower any effective resistance. Proof: the new network's current is an admissible flow in the old one, at no lower power.",
"section": "Thomson's principle and effective resistance",
"slide": "Rayleigh's monotonicity law",
"keys": [
"rayleigh's monotonicity law"
]
},
{
"term_html": "cutting",
"html": "Removing an edge (\\(R_e\\to\\infty\\)); by Rayleigh it can only raise effective resistances.",
"section": "Thomson's principle and effective resistance",
"slide": "Rayleigh's monotonicity law",
"keys": [
"cutting"
]
},
{
"term_html": "shorting",
"html": "Merging two nodes (\\(R_e\\to0\\) on an edge between them); by Rayleigh it can only lower effective resistances, and changes nothing if the two nodes were at the same potential.",
"section": "Thomson's principle and effective resistance",
"slide": "Rayleigh's monotonicity law",
"keys": [
"shorting"
]
},
{
"term_html": "series",
"html": "Two edges meeting at a node of degree two with no injection act as one edge of resistance \\(R_1 + R_2\\).",
"section": "Thomson's principle and effective resistance",
"slide": "Series and parallel, as theorems",
"keys": [
"series"
]
},
{
"term_html": "parallel",
"html": "Two edges joining the same pair of nodes act as one edge of conductance \\(G_1 + G_2\\): \\(R_1\\parallel R_2 = R_1R_2/(R_1 + R_2)\\).",
"section": "Thomson's principle and effective resistance",
"slide": "Series and parallel, as theorems",
"keys": [
"parallel"
]
},
{
"term_html": "one-port",
"html": "A network with two terminals brought out, \\(p\\) and \\(q\\), marked by the passive convention: \\(v = \\varphi_p - \\varphi_q\\), and \\(i\\) enters at \\(p\\).",
"section": "Thévenin and Kron",
"slide": "Thévenin's theorem",
"keys": [
"one-port"
]
},
{
"term_html": "Thévenin's theorem",
"html": "A one-port of linear resistors and ideal sources, uniquely solvable when driven by a current at its port, obeys \\(v = V_{\\text{th}} + R_{\\text{th}}i\\): an EMF in series with a resistance. Helmholtz (1853) and Thévenin (1883), per Johnson, Proc. IEEE 91 (2003).",
"section": "Thévenin and Kron",
"slide": "Thévenin's theorem",
"keys": [
"thévenin's theorem"
]
},
{
"term_html": "open-circuit voltage",
"html": "\\(V_{\\text{th}}\\), the port voltage of a one-port with nothing attached (\\(i = 0\\)).",
"section": "Thévenin and Kron",
"slide": "Thévenin's theorem",
"keys": [
"open-circuit voltage"
]
},
{
"term_html": "superposition",
"html": "The response of a uniquely solvable linear network is a linear function of all its sources jointly.",
"section": "Thévenin and Kron",
"slide": "Proof: an affine map",
"keys": [
"superposition"
]
},
{
"term_html": "Norton's form",
"html": "Thévenin's line solved for the current, \\(i = v/R_{\\text{th}} - I_{\\text{N}}\\): a current source \\(I_{\\text{N}} = V_{\\text{th}}/R_{\\text{th}}\\) in parallel with \\(R_{\\text{th}}\\).",
"section": "Thévenin and Kron",
"slide": "Setting a source to zero, and Norton's form",
"keys": [
"norton's form"
]
},
{
"term_html": "short-circuit current",
"html": "\\(I_{\\text{N}}\\), the current that flows out of terminal \\(p\\) when the port is joined by an ideal wire.",
"section": "Thévenin and Kron",
"slide": "Setting a source to zero, and Norton's form",
"keys": [
"short-circuit current"
]
},
{
"term_html": "Kron reduction",
"html": "Eliminating the interior nodes of a network by block elimination: \\(s_B = L_{\\text{red}}\\varphi_B\\) with \\(L_{\\text{red}} = L_{BB} - L_{BI}L_{II}^{-1}L_{IB}\\). The result is again a Laplacian, of a network on the kept nodes that is indistinguishable from the original there. Named after Kron, Tensor Analysis of Networks (1939).",
"section": "Thévenin and Kron",
"slide": "Kron reduction: eliminating interior nodes",
"keys": [
"kron reduction"
]
},
{
"term_html": "Schur complement",
"html": "For a block matrix with invertible block \\(L_{II}\\), the matrix \\(L_{BB} - L_{BI}L_{II}^{-1}L_{IB}\\) left after eliminating the \\(I\\) unknowns.",
"section": "Thévenin and Kron",
"slide": "Kron reduction: eliminating interior nodes",
"keys": [
"schur complement"
]
},
{
"term_html": "star–delta transformation",
"html": "A node joined only to \\(a\\), \\(b\\), \\(c\\) by conductances \\(G_a, G_b, G_c\\) is equivalent at those three nodes to a triangle with \\(G_{ab} = G_aG_b/(G_a + G_b + G_c)\\) and cyclically: Kron reduction of one node of degree three.",
"section": "Thévenin and Kron",
"slide": "Star–delta: one interior node of degree three",
"keys": [
"star–delta transformation"
]
},
{
"term_html": "resistance distance",
"html": "Effective resistance as a metric on the nodes of a connected network; the triangle inequality follows from the maximum principle. Named by Klein and Randić (1993).",
"section": "A metric, and Foster's theorem",
"slide": "Effective resistance is a metric",
"keys": [
"resistance distance"
]
},
{
"term_html": "Foster's theorem",
"html": "For a connected network with \\(n\\) nodes, \\(\\sum_eR_{\\text{eff}}(e)/R_e = n - 1\\), where \\(R_{\\text{eff}}(e)\\) is the effective resistance between the ends of edge \\(e\\). Each term is the fraction of a unit current injected across \\(e\\) that goes through \\(e\\) itself. Proved as the trace of an orthogonal projection onto the (conductance-scaled) cut space. Foster (1949).",
"section": "A metric, and Foster's theorem",
"slide": "Foster's theorem",
"keys": [
"foster's theorem"
]
},
{
"term_html": "maximum-power theorem",
"html": "A source \\(V_{\\text{th}}\\) behind \\(R_{\\text{th}}\\) delivers the most power to a load \\(R = R_{\\text{th}}\\), namely \\(V_{\\text{th}}^2/4R_{\\text{th}}\\), and at that load the efficiency is exactly 50%.",
"section": "Maximum power, and its price",
"slide": "The maximum-power theorem",
"keys": [
"maximum-power theorem"
]
},
{
"term_html": "matched load",
"html": "The load equal to the source's (Thévenin) resistance, which receives the most power.",
"section": "Maximum power, and its price",
"slide": "The maximum-power theorem",
"keys": [
"matched load"
]
},
{
"term_html": "efficiency",
"html": "The fraction of the source EMF's output that reaches the load, \\(\\eta = R/(R_{\\text{th}} + R)\\); it rises to 1 as the load grows, at falling power.",
"section": "Maximum power, and its price",
"slide": "The maximum-power theorem",
"keys": [
"efficiency"
]
}
];
