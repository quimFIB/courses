// Generated from GLOSSARY.org by `co glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "chronological backtracking",
"html": "When a frame runs out of values, go back to the frame just above and undo the most recent choice first; stop only when the top frame runs out.",
"section": "Conflict sets and backjumping",
"slide": "Thrashing, on four variables",
"keys": [
"chronological backtracking"
]
},
{
"term_html": "thrashing",
"html": "Rediscovering the same failure under choices that played no part in it. On the running example, chronological search repeats the \\(c, d\\) failure for \\(b = 2\\) although \\(b\\) is in no constraint: 33 steps and 12 rejections where 17 and 6 suffice.",
"section": "Conflict sets and backjumping",
"slide": "Thrashing, on four variables",
"keys": [
"thrashing"
]
},
{
"term_html": "conflict-directed backjumping (CBJ)",
"html": "Backtracking that, when a frame runs out of values, jumps straight back to the deepest choice its conflict set blames, skipping the frames in between (Prosser 1993). Refutes the running example in 17 steps and 6 rejections.",
"section": "Conflict sets and backjumping",
"slide": "Thrashing, on four variables",
"keys": [
"conflict-directed backjumping (cbj)",
"conflict-directed backjumping",
"cbj"
]
},
{
"term_html": "frame",
"html": "One level of the search stack: the variable chosen for that depth, its candidate values in order with a cursor at the current one, and a conflict set.",
"section": "Conflict sets and backjumping",
"slide": "Frames, closed values, reasons, conflict sets",
"keys": [
"frame"
]
},
{
"term_html": "closed value",
"html": "A value search is finished with while the assignments above its frame stay put: a constraint rejected it, a learned nogood matched it, or everything below it failed and a backjump landed here.",
"section": "Conflict sets and backjumping",
"slide": "Frames, closed values, reasons, conflict sets",
"keys": [
"closed value"
]
},
{
"term_html": "reason",
"html": "The earlier variables that caused a value to be closed: a rejecting constraint's other variables; a deeper exhausted frame's conflict set minus this frame's variable; or a matching nogood's other variables.",
"section": "Conflict sets and backjumping",
"slide": "Frames, closed values, reasons, conflict sets",
"keys": [
"reason"
]
},
{
"term_html": "conflict set",
"html": "The union of the reasons of a frame's closed values. It starts empty when the frame is opened, and then claims nothing.",
"section": "Conflict sets and backjumping",
"slide": "Frames, closed values, reasons, conflict sets",
"keys": [
"conflict set"
]
},
{
"term_html": "backjump",
"html": "Prosser's rule for a frame whose every value is closed, with conflict set \\(E\\): if \\(E\\) is empty, stop, unsatisfiable; otherwise jump to the deepest frame whose variable is in \\(E\\), discard the frames below it, merge \\(E\\) minus that variable into its conflict set, and close its current value.",
"section": "Conflict sets and backjumping",
"slide": "The backjump rule, and the example step by step",
"keys": [
"backjump"
]
},
{
"term_html": "exhausted frame",
"html": "A frame whose every value is closed; the only place the backjump rule acts.",
"section": "Conflict sets and backjumping",
"slide": "The backjump rule, and the example step by step",
"keys": [
"exhausted frame"
]
},
{
"term_html": "nogood",
"html": "A set of assignments that no solution contains (unit 19). A reason \\(R\\) for closing \\(x = v\\) under assignment \\(A\\) is one: no solution agrees with \\(A\\) on \\(R\\) and has \\(x = v\\), that is, \\(\\{y = A(y) : y \\in R\\} \\cup \\{x = v\\}\\) is a nogood.",
"section": "Completeness",
"slide": "Reasons are nogoods, and one invariant",
"keys": [
"nogood"
]
},
{
"term_html": "reason invariant",
"html": "Every closed value of every frame has a valid reason that names only variables of frames above it. It holds after every step, which is what makes both answers of the search correct.",
"section": "Completeness",
"slide": "Reasons are nogoods, and one invariant",
"keys": [
"reason invariant"
]
},
{
"term_html": "combining lemma",
"html": "If every value of \\(x\\) is closed, with reasons \\(R_v\\), then no solution agrees with the current assignment on \\(E = \\bigcup_v R_v\\): a solution gives \\(x\\) some value \\(v\\), and agrees on \\(R_v \\subseteq E\\). So \\(E\\) minus the jump target's variable is a valid reason for closing the jump target's current value, and \\(E = \\emptyset\\) means there is no solution at all.",
"section": "Completeness",
"slide": "Reasons are nogoods, and one invariant",
"keys": [
"combining lemma"
]
},
{
"term_html": "learned clause",
"html": "In CDCL (unit 20), a nogood over earlier assignments written as a clause: the same kind of object as a conflict set written out as values. Both searches go back past the decisions the nogood does not mention: CBJ stops at the deepest variable of \\(E\\) and closes its value there, CDCL goes further up, to the second-highest level, and asserts the flipped UIP there. Deriving the empty clause is \\(E = \\emptyset\\).",
"section": "Completeness",
"slide": "Why an empty conflict set means \"no solution\"",
"keys": [
"learned clause"
]
},
{
"term_html": "nogood store",
"html": "The learned nogoods kept during search. It starts empty; a reason written out as values is an absolute nogood, so recording it is sound; a store hit is one more way to close a value; forgetting is safe for soundness and for termination of a single run (with restarts, see <em>Restarts with a dynamic order</em>), and only adding needs a proof.",
"section": "Completeness",
"slide": "Learned nogoods",
"keys": [
"nogood store"
]
},
{
"term_html": "decision nogood",
"html": "A nogood naming every choice above the failure, such as \\(\\{a = 1, b = 1, c = 2\\}\\) at step 7 of the example. It does not fire under \\(b = 2\\); the reason form \\(\\{a = 1, c = 2\\}\\) leaves \\(b\\) out and does. The difference between the two is exactly the thrashing.",
"section": "Completeness",
"slide": "Learned nogoods",
"keys": [
"decision nogood"
]
},
{
"term_html": "termination measure",
"html": "\\(\\mu = \\sum_{d&lt;n} r_d \\, B^{n-1-d}\\) with radix \\(B = D_{\\max} + 2\\), where \\(r_d\\) counts the values of the frame at depth \\(d\\) not yet closed, the current one included, or is \\(\\top = B - 1\\) when depth \\(d\\) has no frame: the per-depth counts read as one number in base \\(B\\), shallowest digit first. Every step lowers the shallowest digit it changes, so \\(\\mu\\) drops on every step; on the example it goes from 191 to 63.",
"section": "Termination",
"slide": "The measure",
"keys": [
"termination measure"
]
},
{
"term_html": "dynamic variable ordering",
"html": "Choosing the next variable each time a frame is opened, as first-fail or dom/wdeg do (unit 19), so that the variable at a given depth can differ from branch to branch. It never reorders the variables already on the stack.",
"section": "Choosing the variable at each level",
"slide": "The heuristic's contract",
"keys": [
"dynamic variable ordering"
]
},
{
"term_html": "ordering contract",
"html": "The one obligation of a variable-ordering heuristic: return an unassigned variable whenever one exists. It may read anything to choose (the assignments, the conflict history, weights, randomness). Neither the termination measure, which counts values per depth, nor the reason invariant, which names variables, looks at which variable was chosen, so both proofs hold for any heuristic that keeps the contract. Returning an assigned variable breaks both.",
"section": "Choosing the variable at each level",
"slide": "The heuristic's contract",
"keys": [
"ordering contract"
]
},
{
"term_html": "live domain",
"html": "The values of an unassigned variable still consistent with the assignments so far. With no propagation the domains never shrink, so a dynamic first-fail must count the live domain; it is computed only for choosing, and the frame still opens on the full domain.",
"section": "Choosing the variable at each level",
"slide": "The heuristic's contract",
"keys": [
"live domain"
]
},
{
"term_html": "dom/wdeg",
"html": "Live domain size over the summed weights of the variable's constraints to unassigned variables. Every weight starts at 1, and a rejection bumps the rejecting constraint, so the choice is a function of the run so far, not of the current assignment alone: after a restart with the weights kept, the same partial assignment can get a different next variable. It is still inside the contract. A variable with no constraints to unassigned variables comes last.",
"section": "Choosing the variable at each level",
"slide": "The heuristic's contract",
"keys": [
"dom/wdeg"
]
},
{
"term_html": "max-cardinality ordering",
"html": "A static order: next is the unassigned variable with the most already-ordered neighbours, ties by degree, then by input order. On the example it gives \\(a, c, d, b\\), and both chronological search and CBJ refute it in 15 steps, 6 rejections: \\(b\\) is never opened.",
"section": "Choosing the variable at each level",
"slide": "Ordering against backjumping, measured",
"keys": [
"max-cardinality ordering"
]
},
{
"term_html": "dom",
"html": "Dynamic first-fail: the unassigned variable with the smallest live domain, ties by input order.",
"section": "Choosing the variable at each level",
"slide": "Ordering against backjumping, measured",
"keys": [
"dom"
]
},
{
"term_html": "dom/deg",
"html": "Live domain size over the number of the variable's constraints to unassigned variables; a variable with none comes last.",
"section": "Choosing the variable at each level",
"slide": "Ordering against backjumping, measured",
"keys": [
"dom/deg"
]
},
{
"term_html": "index rule",
"html": "Taking as jump target the variable of the conflict set that comes last in the input order. Right only when the search follows the input order, where index order is depth order; under any other order, dynamic or static (such as max-cardinality), it can jump above the deepest culprit and leave a conflict set naming a discarded variable.",
"section": "Choosing the variable at each level",
"slide": "The jump-target pitfall",
"keys": [
"index rule"
]
},
{
"term_html": "stack-position rule",
"html": "Taking as jump target the deepest frame on the stack whose variable is in the conflict set, for instance with a depth array kept on assign and unassign. It is the rule the proofs use, under any order.",
"section": "Choosing the variable at each level",
"slide": "The correction: jump by stack position",
"keys": [
"stack-position rule"
]
},
{
"term_html": "invariant check",
"html": "A runtime assertion, after each step, that every variable in a frame's conflict set is on the stack above that frame: the checkable half of the reason invariant. It catches the index rule, under orders other than the input order, before it answers.",
"section": "Choosing the variable at each level",
"slide": "The correction: jump by stack position",
"keys": [
"invariant check"
]
},
{
"term_html": "restart",
"html": "Abandoning the current search stack and starting again from a fresh one, keeping any learned nogoods and heuristic state (unit 19). It sends \\(\\mu\\) back up, so termination needs an argument across runs.",
"section": "Choosing the variable at each level",
"slide": "Restarts with a dynamic order",
"keys": [
"restart"
]
},
{
"term_html": "cutoff",
"html": "The budget of one run before a restart, here counted in steps. A run that is not cut off stops within \\(B^n\\) steps, so a run whose cutoff is at least \\(B^n\\) always finishes.",
"section": "Choosing the variable at each level",
"slide": "Restarts with a dynamic order",
"keys": [
"cutoff"
]
},
{
"term_html": "Luby sequence",
"html": "\\(1, 1, 2, 1, 1, 2, 4, 1, 1, 2, \\dots\\), unit 19's restart schedule. It is unbounded, so some run gets a cutoff of at least \\(B^n\\) and finishes: restarts with Luby cutoffs keep the search terminating and complete.",
"section": "Choosing the variable at each level",
"slide": "Restarts with a dynamic order",
"keys": [
"luby sequence"
]
},
{
"term_html": "dynamic backtracking",
"html": "Ginsberg's algorithm (1993), which unassigns only the culprit variable and keeps the assignments made after it, reordering the assigned variables. The per-depth counters no longer decrease, and its termination argument rests on the recorded nogoods instead.",
"section": "Where the argument stops",
"slide": "Where the argument stops",
"keys": [
"dynamic backtracking"
]
},
{
"term_html": "soundness",
"html": "Every answer the search gives is correct: a reported solution satisfies every constraint, and \"unsatisfiable\" is reported only when there is no solution.",
"section": "Where the argument stops",
"slide": "Where the argument stops",
"keys": [
"soundness"
]
},
{
"term_html": "completeness",
"html": "The search finds a solution if and only if there is one: soundness together with termination. It holds for any search that closes values only with valid, upward-pointing reasons, jumps by Prosser's rule, opens frames on unassigned variables in any order, and restarts, if at all, with unbounded cutoffs.",
"section": "Where the argument stops",
"slide": "Where the argument stops",
"keys": [
"completeness"
]
}
];
