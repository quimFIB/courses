// Generated from GLOSSARY.org by `cap glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "graph, directed graph",
"html": "A finite set of \\(n\\) nodes and \\(m\\) edges, each edge joining two distinct nodes and carrying an orientation, from a tail to a head. Several edges may join the same two nodes.",
"section": "A diagram becomes a graph",
"slide": "Graphs: the words",
"keys": [
"graph, directed graph",
"graph",
"directed graph"
]
},
{
"term_html": "edge",
"html": "One element of a circuit, seen as a connection between the two nodes its terminals sit on. Ideal wires are not edges; they are what a node is.",
"section": "A diagram becomes a graph",
"slide": "Graphs: the words",
"keys": [
"edge"
]
},
{
"term_html": "orientation",
"html": "The choice of which end of an edge is its tail and which its head: the direction of its current arrow, with the + of the passive convention at the tail. A reference, not a claim about where charge flows; reversing it flips the signs of both \\(v_e\\) and \\(i_e\\) and leaves \\(v_ei_e\\) alone.",
"section": "A diagram becomes a graph",
"slide": "Graphs: the words",
"keys": [
"orientation"
]
},
{
"term_html": "path",
"html": "A sequence of distinct nodes, each joined to the next by an edge, traversed with or against the edges' arrows.",
"section": "A diagram becomes a graph",
"slide": "Graphs: the words",
"keys": [
"path"
]
},
{
"term_html": "cycle",
"html": "A path that returns to its first node, using at least one edge and no edge twice.",
"section": "A diagram becomes a graph",
"slide": "Graphs: the words",
"keys": [
"cycle"
]
},
{
"term_html": "connected component",
"html": "A largest set of nodes any two of which are joined by a path. The graph has \\(c\\) of them.",
"section": "A diagram becomes a graph",
"slide": "Graphs: the words",
"keys": [
"connected component"
]
},
{
"term_html": "complete graph",
"html": "The graph \\(K_n\\) on \\(n\\) nodes with one edge between every pair, \\(n(n-1)/2\\) edges in all. The bridge's graph is \\(K_4\\).",
"section": "A diagram becomes a graph",
"slide": "The bridge, drawn and as a graph",
"keys": [
"complete graph"
]
},
{
"term_html": "incidence matrix",
"html": "The \\(n\\times m\\) matrix \\(A\\) with \\(A_{ke} = +1\\) if edge \\(e\\) leaves node \\(k\\), \\(-1\\) if it enters, \\(0\\) otherwise. \\((Ai)_k\\) is the net current leaving node \\(k\\); \\((A^{\\mathsf T}\\varphi)_e = \\varphi_{t(e)} - \\varphi_{h(e)}\\). Strang writes the transpose with the opposite sign.",
"section": "A diagram becomes a graph",
"slide": "The incidence matrix",
"keys": [
"incidence matrix"
]
},
{
"term_html": "signed indicator",
"html": "For a cycle traversed in a chosen direction, the vector with \\(+1\\) on each edge it runs along, \\(-1\\) on each it runs against, \\(0\\) elsewhere. For a cut, \\(A^{\\mathsf T}\\mathbf 1_S\\).",
"section": "The two laws as subspaces",
"slide": "The cycle space",
"keys": [
"signed indicator"
]
},
{
"term_html": "cycle space",
"html": "\\(\\ker A\\), the currents obeying Kirchhoff's current law in an isolated network; spanned by the signed indicators of cycles. Dimension \\(m - n + c\\).",
"section": "The two laws as subspaces",
"slide": "The cycle space",
"keys": [
"cycle space"
]
},
{
"term_html": "circulation",
"html": "A vector of edge currents in \\(\\ker A\\): flow that balances at every node. Every circulation is a sum of multiples of cycle indicators.",
"section": "The two laws as subspaces",
"slide": "The cycle space",
"keys": [
"circulation"
]
},
{
"term_html": "cut",
"html": "For a set of nodes \\(S\\), the edges with one end in \\(S\\) and one outside. Its signed indicator is \\(A^{\\mathsf T}\\mathbf 1_S\\): \\(+1\\) on edges leaving \\(S\\), \\(-1\\) on edges entering.",
"section": "The two laws as subspaces",
"slide": "Cuts, and the cut space",
"keys": [
"cut"
]
},
{
"term_html": "cut space",
"html": "\\(\\operatorname{im}A^{\\mathsf T}\\), the voltages obeying Kirchhoff's voltage law, \\(v = A^{\\mathsf T}\\varphi\\); spanned by the signed indicators of cuts. Dimension \\(n - c\\). The orthogonal complement of the cycle space in \\(\\mathbb R^m\\).",
"section": "The two laws as subspaces",
"slide": "Cuts, and the cut space",
"keys": [
"cut space"
]
},
{
"term_html": "cyclomatic number",
"html": "\\(m - n + c\\), the dimension of the cycle space: the number of independent loops. For a connected graph, the number of edges beyond a spanning tree.",
"section": "The two laws as subspaces",
"slide": "The rank of \\(A\\) is \\(n - c\\)",
"keys": [
"cyclomatic number"
]
},
{
"term_html": "spanning tree",
"html": "A tree containing every node of a connected graph and some of its edges. It exists, and has exactly \\(n - 1\\) edges.",
"section": "Bases from a spanning tree",
"slide": "Trees and spanning trees",
"keys": [
"spanning tree"
]
},
{
"term_html": "tree",
"html": "A connected graph with no cycle.",
"section": "Bases from a spanning tree",
"slide": "Trees and spanning trees",
"keys": [
"tree"
]
},
{
"term_html": "chord",
"html": "An edge not in a chosen spanning tree; there are \\(m - n + 1\\).",
"section": "Bases from a spanning tree",
"slide": "Trees and spanning trees",
"keys": [
"chord"
]
},
{
"term_html": "fundamental cycle",
"html": "The cycle a chord closes with the unique tree path between its ends, oriented along the chord. The fundamental cycles of one tree are a basis of the cycle space.",
"section": "Bases from a spanning tree",
"slide": "Fundamental cycles",
"keys": [
"fundamental cycle"
]
},
{
"term_html": "fundamental cut",
"html": "For a tree edge \\(e\\), the cut between the two pieces the tree falls into when \\(e\\) is deleted, oriented so that \\(e\\) has \\(+1\\). The fundamental cuts of one tree are a basis of the cut space.",
"section": "Bases from a spanning tree",
"slide": "Fundamental cuts",
"keys": [
"fundamental cut"
]
},
{
"term_html": "nodal analysis",
"html": "Solving a circuit by writing every voltage as \\(A^{\\mathsf T}\\varphi\\), grounding one node per component, and imposing the current law at the other nodes: \\(n - c\\) unknowns, fewer where voltage sources fix potentials. A parametrisation of the cut space.",
"section": "Nodal and mesh analysis",
"slide": "Nodal analysis",
"keys": [
"nodal analysis"
]
},
{
"term_html": "ground",
"html": "A node declared to be at potential zero, one per component, removing the constant that only differences leave free. Need not be joined to the earth.",
"section": "Nodal and mesh analysis",
"slide": "Nodal analysis",
"keys": [
"ground"
]
},
{
"term_html": "balance condition",
"html": "A bridge's detector carries no current exactly when \\(R_1R_4 = R_2R_3\\), whatever the detector's resistance and the source.",
"section": "Nodal and mesh analysis",
"slide": "Balance",
"keys": [
"balance condition"
]
},
{
"term_html": "mesh analysis, loop analysis",
"html": "Solving a circuit by writing the currents as a combination of a basis of cycles, with unknown loop currents, and imposing the voltage law round each basis cycle: \\(m - n + c\\) unknowns. A parametrisation of the cycle space.",
"section": "Nodal and mesh analysis",
"slide": "Mesh analysis",
"keys": [
"mesh analysis, loop analysis",
"mesh analysis",
"loop analysis"
]
},
{
"term_html": "loop current",
"html": "A coefficient in mesh analysis: a current imagined to circulate round one basis cycle. An edge's current is the signed sum of the loop currents through it.",
"section": "Nodal and mesh analysis",
"slide": "Mesh analysis",
"keys": [
"loop current"
]
},
{
"term_html": "Euler's formula",
"html": "For a connected graph drawn in the plane without crossings, \\(n - m + f = 2\\), with \\(f\\) counting faces including the outer one.",
"section": "Nodal and mesh analysis",
"slide": "Plane drawings and Euler's formula",
"keys": [
"euler's formula"
]
},
{
"term_html": "plane graph",
"html": "A graph drawn in the plane with no two edges crossing. A graph that can be so drawn is planar; \\(K_5\\) and \\(K_{3,3}\\) cannot.",
"section": "Nodal and mesh analysis",
"slide": "Plane drawings and Euler's formula",
"keys": [
"plane graph"
]
},
{
"term_html": "face",
"html": "One of the connected regions into which a plane graph divides the plane; exactly one, the outer face, is unbounded.",
"section": "Nodal and mesh analysis",
"slide": "Plane drawings and Euler's formula",
"keys": [
"face"
]
},
{
"term_html": "mesh",
"html": "The boundary cycle of a bounded face of a plane graph. The meshes are a basis of the cycle space.",
"section": "Nodal and mesh analysis",
"slide": "Plane drawings and Euler's formula",
"keys": [
"mesh"
]
},
{
"term_html": "Tellegen's theorem",
"html": "On one oriented graph, any voltages obeying the voltage law and any currents obeying the current law satisfy \\(v^{\\mathsf T}i = 0\\). Proof: \\((A^{\\mathsf T}\\varphi)^{\\mathsf T}i = \\varphi^{\\mathsf T}Ai = 0\\). No element law is used; \\(v\\) and \\(i\\) may come from different networks on the graph or from different instants. With both from one network at one instant it is conservation of power. Tellegen, <em>Philips Research Reports</em> 7, 259–269 (1952).",
"section": "Tellegen's theorem",
"slide": "The theorem",
"keys": [
"tellegen's theorem"
]
},
{
"term_html": "port",
"html": "A pair of nodes at which current is fed into a network at one and taken out at the other; its voltage is the difference of their potentials. With injections \\(s\\), Tellegen gives \\(v^{\\mathsf T}i = \\varphi^{\\mathsf T}s\\), the sum of port voltage times port current.",
"section": "Reciprocity, and where linearity stops",
"slide": "Ports, and the power fed in",
"keys": [
"port"
]
},
{
"term_html": "two-port",
"html": "A network with two ports marked.",
"section": "Reciprocity, and where linearity stops",
"slide": "Ports, and the power fed in",
"keys": [
"two-port"
]
},
{
"term_html": "transfer resistance",
"html": "\\(z_{21}\\): the voltage at port 2 per ampere fed into port 1, with port 2 open; \\(z_{12}\\) the reverse. Units: ohms.",
"section": "Reciprocity, and where linearity stops",
"slide": "Ports, and the power fed in",
"keys": [
"transfer resistance"
]
},
{
"term_html": "reciprocity",
"html": "In any network of linear resistors, \\(z_{21} = z_{12}\\). Proved from Tellegen's theorem across two experiments and the symmetry of \\(R_e\\hat\\imath_e\\tilde\\imath_e\\). For the bridge, \\(100/29\\ \\Omega\\) both ways.",
"section": "Reciprocity, and where linearity stops",
"slide": "Reciprocity, from Tellegen",
"keys": [
"reciprocity"
]
},
{
"term_html": "dependent source",
"html": "An element whose voltage or current is set by a current or voltage elsewhere in the network, such as a current-controlled voltage source \\(v_e = r\\,i_f\\). Networks containing one are in general not reciprocal.",
"section": "Reciprocity, and where linearity stops",
"slide": "Where reciprocity fails",
"keys": [
"dependent source"
]
},
{
"term_html": "superposition",
"html": "In a network of linear resistors and ideal sources with a unique solution, the response to several sources is the sum of the responses to each alone. Can fail once the network contains a nonlinear element such as a diode.",
"section": "Reciprocity, and where linearity stops",
"slide": "Superposition, and a diode",
"keys": [
"superposition"
]
},
{
"term_html": "ideal diode",
"html": "An element with \\(v\\le0\\), \\(i\\ge0\\), \\(vi = 0\\) under the passive marking: conducting with no voltage, or blocking with no current. Defined as an element relation; not linear.",
"section": "Reciprocity, and where linearity stops",
"slide": "Superposition, and a diode",
"keys": [
"ideal diode"
]
},
{
"term_html": "strain gauge",
"html": "A foil resistor bonded to a surface, whose resistance changes with the surface's strain: \\(\\Delta R/R = \\mathrm{GF}\\cdot\\varepsilon\\). Typically 120 Ω or 350 Ω (Vishay Micro-Measurements TN-505-6).",
"section": "The kitchen scale",
"slide": "Strain gauges",
"keys": [
"strain gauge"
]
},
{
"term_html": "gauge factor",
"html": "The dimensionless constant GF in \\(\\Delta R/R = \\mathrm{GF}\\cdot\\varepsilon\\). Taken as 2 in this unit, a representative value assumed for the example.",
"section": "The kitchen scale",
"slide": "Strain gauges",
"keys": [
"gauge factor"
]
},
{
"term_html": "quarter bridge",
"html": "A bridge with one strain gauge and three fixed arms. With equal arms and \\(x = \\Delta R/R\\) its output is \\(Vx/(2(2 + x))\\approx Vx/4\\), measured against zero.",
"section": "The kitchen scale",
"slide": "One resistor against a bridge",
"keys": [
"quarter bridge"
]
}
];
