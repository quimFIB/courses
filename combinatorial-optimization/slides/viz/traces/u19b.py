"""Unit 19b's reference implementation, and its recorded data for units/19b-backjumping/explore.html.

19b has no lab, so there is no `colib.ref` solution to import: this module *is* the unit's
reference. It holds

  the engine    conflict-directed backjumping (Prosser 1993) with explicit frames, conflict sets
                and the termination measure mu, asserted to drop on every step; the same loop in
                chronological mode; a frame can open on a forward-checked list (the fine print)
  the orders    static input order, max-cardinality (static), dom, dom/deg, dom/wdeg (all three
                on the live domain), and a seeded random dynamic order
  the pitfall   the jump target taken as the largest-index variable of E (right only when the
                search order is the input order), with and without silently dropping discarded
                variables, and the runtime check of the reason invariant
  the instances the running example, the deck's small cases, the Mycielski graph of C5, five
                pigeons in four holes, one seeded random binary CSP, and the random generators of
                the brute-force check and of the pitfall

`python -m slides.viz.traces.u19b` (from the course root, under `uv run`) prints, labelled, every
number the deck quotes. `data()` is what `uv run co viz 19b` writes to
units/19b-backjumping/viz-data.js. Importing the module computes nothing.
"""

from __future__ import annotations

import itertools
import random
from dataclasses import dataclass, field
from fractions import Fraction
from typing import Callable

# --------------------------------------------------------------------------------------------
# Instances
# --------------------------------------------------------------------------------------------

NEQ = lambda p, q: p != q  # noqa: E731


@dataclass
class Instance:
    """A binary CSP. `vars` is the input order (the static order, and every tie-break);
    `cons` holds (x, y, ok, label) with ok(value of x, value of y) -> bool. With `obj`, the
    search minimises obj(full assignment), which reads only the variables in `obj_vars`."""
    name: str
    vars: list[str]
    doms: dict[str, list]
    cons: list[tuple[str, str, Callable, str]]
    obj: Callable | None = None
    obj_vars: list[str] = field(default_factory=list)

    @property
    def n(self) -> int:
        return len(self.vars)

    @property
    def B(self) -> int:
        """The measure's radix, D_max + 2."""
        return max(len(d) for d in self.doms.values()) + 2

    def neighbours(self) -> dict[str, set[str]]:
        nb = {v: set() for v in self.vars}
        for x, y, _, _ in self.cons:
            nb[x].add(y)
            nb[y].add(x)
        return nb

    def satisfied_by(self, sol: dict) -> bool:
        return all(ok(sol[x], sol[y]) for x, y, ok, _ in self.cons)


def neq_instance(name, vars, doms, edges) -> Instance:
    return Instance(name, list(vars), {v: list(doms[v]) for v in vars},
                    [(x, y, NEQ, f"{x}!={y}") for x, y in edges])


def allowed_instance(name, vars, doms, allowed) -> Instance:
    """Constraints given by their allowed pairs, as {(x, y): set of (vx, vy)}."""
    cons = [(x, y, (lambda al: lambda p, q: (p, q) in al)(al), f"{x}-{y}") for (x, y), al in allowed.items()]
    return Instance(name, list(vars), {v: list(doms[v]) for v in vars}, cons)


def running_example() -> Instance:
    """a, b, c, d in {1, 2}; a != c, a != d, c != d; b in no constraint. Unsatisfiable."""
    return neq_instance("running example", "abcd", {v: [1, 2] for v in "abcd"},
                        [("a", "c"), ("a", "d"), ("c", "d")])


def opt_example() -> Instance:
    """a, b, c in {1, 2}; a != c; minimise f = a + 2c; b in nothing. Optimum a = 2, c = 1, cost 4."""
    inst = neq_instance("optimization example", "abc", {v: [1, 2] for v in "abc"}, [("a", "c")])
    inst.obj, inst.obj_vars = (lambda s: s["a"] + 2 * s["c"]), ["a", "c"]
    return inst


def restart_example() -> Instance:
    """a..e in {1, 2}; the triangle a != c, a != d, c != d, and a != b, b != e. Unsatisfiable.
    Under dom/wdeg with Luby restarts (unit 4 steps, weights kept) the first runs open b after a;
    from run 4 the weights put c there instead, and run 7 answers."""
    return neq_instance("restart example", "abcde", {v: [1, 2] for v in "abcde"},
                        [("a", "b"), ("a", "c"), ("a", "d"), ("b", "e"), ("c", "d")])


def restart_runs(inst: Instance, order: Order, unit: int):
    """The runs of `restart_loop`, traced: a list of (cutoff, Run), the last one not cut off."""
    out = []
    for i in itertools.count(1):
        r = solve(inst, order, "cbj", trace=True, max_steps=luby(i) * unit)
        out.append((luby(i) * unit, r))
        if r.answer != "CUTOFF":
            return out


def irrelevant_example(k: int) -> Instance:
    """The running example with k unconstrained two-valued variables b0..b(k-1) between a and c."""
    vs = ["a"] + [f"b{i}" for i in range(k)] + ["c", "d"]
    return neq_instance(f"running example, k = {k}", vs, {v: [1, 2] for v in vs},
                        [("a", "c"), ("a", "d"), ("c", "d")])


def deep_empty_example() -> Instance:
    """p in {1, 2}, x in {1}, y in {1}, x != y: an empty conflict set below the top frame."""
    return neq_instance("p, x, y", "pxy", {"p": [1, 2], "x": [1], "y": [1]}, [("x", "y")])


def fc_example() -> Instance:
    """a in {1, 2}, b in {2}, x in {1, 2}; a != x, b != x. Satisfiable: a = 2, b = 2, x = 1."""
    return neq_instance("a, b, x", "abx", {"a": [1, 2], "b": [2], "x": [1, 2]}, [("a", "x"), ("b", "x")])


def mycielski_c5(colours: int = 3) -> Instance:
    """The Mycielski graph of C5 (the Groetzsch graph): 11 vertices, 20 edges, chromatic number 4.
    u0..u4 the 5-cycle; w_i adjacent to the cycle-neighbours of u_i; z adjacent to every w_i."""
    u = [f"u{i}" for i in range(5)]
    w = [f"w{i}" for i in range(5)]
    edges = [(u[i], u[(i + 1) % 5]) for i in range(5)]
    edges += [(u[j], w[i]) for i in range(5) for j in ((i - 1) % 5, (i + 1) % 5)]
    edges += [(w[i], "z") for i in range(5)]
    vs = u + w + ["z"]
    assert len(vs) == 11 and len(edges) == 20
    return neq_instance(f"Mycielski graph of C5, {colours} colours", vs,
                        {v: list(range(1, colours + 1)) for v in vs}, edges)


def pigeons(p: int = 5, h: int = 4) -> Instance:
    """p pigeons in h holes as a CSP: all-different of p variables over h values (K_p, h colours)."""
    vs = [f"p{i}" for i in range(1, p + 1)]
    return neq_instance(f"{p} pigeons, {h} holes", vs, {v: list(range(1, h + 1)) for v in vs},
                        list(itertools.combinations(vs, 2)))


RANDOM_UNSAT = dict(seed=3, n=10, d=3, density=0.5, tightness=0.35)


def random_csp(seed: int, n: int, d: int, density: float, tightness: float) -> Instance:
    """A random binary CSP x0..x(n-1), domains {0..d-1}: each pair is constrained with
    probability `density`, and each value pair of a constrained pair is FORBIDDEN with
    probability `tightness`."""
    rng = random.Random(seed)
    vs = [f"x{i}" for i in range(n)]
    dm = {v: list(range(d)) for v in vs}
    allowed = {}
    for x, y in itertools.combinations(vs, 2):
        if rng.random() < density:
            allowed[(x, y)] = {(p, q) for p in dm[x] for q in dm[y] if rng.random() >= tightness}
    return allowed_instance(f"random CSP (seed {seed}, n {n}, d {d}, density {density}, tightness {tightness})",
                            vs, dm, allowed)


def check_instances(seed=19, count=4000):
    """The brute-force check's generator, exactly as first run: 2-7 variables, domains of 1-3
    values, each pair constrained with probability 1/2, each value pair allowed with probability
    0.6. It shares its generator with the dynamic order (see `random_check`), so it is not a
    plain iterator: it yields (trial, instance, rng)."""
    rng = random.Random(seed)
    for trial in range(count):
        n = rng.randint(2, 7)
        vs = [f"v{i}" for i in range(n)]
        dm = {v: list(range(rng.randint(1, 3))) for v in vs}
        allowed = {}
        for x, y in itertools.combinations(vs, 2):
            if rng.random() < 0.5:
                allowed[(x, y)] = {(p, q) for p in dm[x] for q in dm[y] if rng.random() < 0.6}
        yield trial, allowed_instance(f"check trial {trial}", vs, dm, allowed), rng


def pitfall_instances(seed=7, count=3000):
    """The pitfall's generator: 3-7 variables, domains of 1-3 values, same draws as the check's."""
    rng = random.Random(seed)
    for trial in range(count):
        n = rng.randint(3, 7)
        vs = [f"v{i}" for i in range(n)]
        dm = {v: list(range(rng.randint(1, 3))) for v in vs}
        allowed = {}
        for x, y in itertools.combinations(vs, 2):
            if rng.random() < 0.5:
                allowed[(x, y)] = {(p, q) for p in dm[x] for q in dm[y] if rng.random() < 0.6}
        yield trial, allowed_instance(f"pitfall trial {trial}", vs, dm, allowed)


def pitfall_instance(trial: int) -> Instance:
    return next(inst for t, inst in pitfall_instances() if t == trial)


def brute(inst: Instance):
    """The first solution in input-order lexicographic order, or None."""
    for vals in itertools.product(*(inst.doms[v] for v in inst.vars)):
        sol = dict(zip(inst.vars, vals))
        if inst.satisfied_by(sol):
            return sol
    return None


# --------------------------------------------------------------------------------------------
# Variable orders. Each is called with the engine's Ctx each time a frame opens, and must return
# an unassigned variable. Ties are always broken by input order.
# --------------------------------------------------------------------------------------------

@dataclass
class Ctx:
    """What a heuristic may read when a frame opens."""
    inst: Instance
    stack: list[str]          # the stack's variables, shallowest first
    assigned: dict            # variable -> current value, for every frame on the stack
    done: set                 # set(stack)


def live_domain(inst: Instance, x: str, assigned: dict) -> list:
    """The values of x consistent with every assignment so far. Used only to CHOOSE a variable:
    the frame still opens on the full domain (plain CBJ, no propagation)."""
    return [v for v in inst.doms[x]
            if all(ok(v, assigned[y]) for cx, y, ok, _ in inst.cons if cx == x and y in assigned)
            and all(ok(assigned[cx], v) for cx, cy, ok, _ in inst.cons if cy == x and cx in assigned)]


class Order:
    name = "?"
    dynamic = False

    def __call__(self, ctx: Ctx) -> str:
        raise NotImplementedError

    def reset(self, inst: Instance):
        """Called once per solve(), before the first frame opens."""

    def on_reject(self, con_index: int):
        """Called when constraint `con_index` rejects a value."""


class StaticOrder(Order):
    name = "static input order"

    def __init__(self, order=None):
        self.order = order

    def __call__(self, ctx):
        return next(v for v in (self.order or ctx.inst.vars) if v not in ctx.done)


def max_cardinality_order(inst: Instance) -> list[str]:
    """Next = the unassigned variable with the most already-ordered neighbours; ties by degree,
    then by input order. Its choice depends only on which variables are already ordered, so it is
    a static order, computed once."""
    nb = inst.neighbours()
    pos = {v: i for i, v in enumerate(inst.vars)}
    order, done = [], set()
    for _ in inst.vars:
        v = min((v for v in inst.vars if v not in done), key=lambda v: (-len(nb[v] & done), -len(nb[v]), pos[v]))
        order.append(v)
        done.add(v)
    return order


class MaxCardinality(StaticOrder):
    name = "max-cardinality (static)"

    def reset(self, inst):
        self.order = max_cardinality_order(inst)


def _ratio(live: int, deg) -> Fraction | float:
    """live / deg, with an empty live domain first whatever its degree, and a live variable of
    degree 0 last."""
    if live == 0:
        return Fraction(0)
    return Fraction(live, 1) / deg if deg else float("inf")


class Dom(Order):
    """First-fail on the live domain."""
    name = "dom"
    dynamic = True

    def __call__(self, ctx):
        pos = {v: i for i, v in enumerate(ctx.inst.vars)}
        return min((v for v in ctx.inst.vars if v not in ctx.done),
                   key=lambda v: (len(live_domain(ctx.inst, v, ctx.assigned)), pos[v]))


class DomDeg(Order):
    """Live domain over the number of constraints to unassigned variables."""
    name = "dom/deg"
    dynamic = True

    def __call__(self, ctx):
        inst, pos = ctx.inst, {v: i for i, v in enumerate(ctx.inst.vars)}

        def key(v):
            deg = sum(1 for x, y, _, _ in inst.cons
                      if (x == v and y not in ctx.done) or (y == v and x not in ctx.done))
            return (_ratio(len(live_domain(inst, v, ctx.assigned)), deg), pos[v])
        return min((v for v in inst.vars if v not in ctx.done), key=key)


class DomWdeg(Order):
    """Live domain over the summed weights of the constraints to unassigned variables. Every
    weight starts at 1; a rejection bumps the rejecting constraint by 1. The choice is therefore
    a function of the run so far, not of the current assignment alone. Within one run no partial
    assignment is visited twice, so the difference shows only across restarts with weights kept."""
    name = "dom/wdeg"
    dynamic = True

    def __init__(self, keep_weights=False):
        self.keep_weights = keep_weights
        self.w = None

    def reset(self, inst):
        if self.w is None or not self.keep_weights:
            self.w = [1] * len(inst.cons)

    def on_reject(self, i):
        self.w[i] += 1

    def __call__(self, ctx):
        inst, pos = ctx.inst, {v: i for i, v in enumerate(ctx.inst.vars)}

        def key(v):
            wdeg = sum(self.w[i] for i, (x, y, _, _) in enumerate(inst.cons)
                       if (x == v and y not in ctx.done) or (y == v and x not in ctx.done))
            return (_ratio(len(live_domain(inst, v, ctx.assigned)), wdeg), pos[v])
        return min((v for v in inst.vars if v not in ctx.done), key=key)


class RandomOrder(Order):
    """A uniformly random unassigned variable at each descend, from random.Random(seed), drawn as
    `rng.choice([v for v in vars if v not in done])`. With `rng` given, draws from that generator
    instead (the brute-force check shares its instance generator's)."""
    name = "random dynamic"
    dynamic = True

    def __init__(self, seed=None, rng=None):
        self.rng = rng if rng is not None else random.Random(seed)

    def __call__(self, ctx):
        return self.rng.choice([v for v in ctx.inst.vars if v not in ctx.done])


def heuristics():
    return [StaticOrder(), MaxCardinality(), Dom(), DomDeg(), DomWdeg()]


# --------------------------------------------------------------------------------------------
# The engine
# --------------------------------------------------------------------------------------------

class ContractBroken(AssertionError):
    """The order returned a variable that is already on the stack."""


class Dangling(LookupError):
    """The index rule looked for a jump target that is no longer on the stack. (A conflict set
    named a discarded variable before that: the invariant check fires in more runs.)"""


class InvariantBroken(AssertionError):
    """A frame's conflict set names a variable that is not on the stack above that frame."""


@dataclass
class Run:
    answer: str                      # 'SAT', 'UNSAT', 'OPTIMAL' or 'CUTOFF'
    steps: int
    solution: dict | None
    rejections: int = 0
    jumps: int = 0
    descends: int = 0
    max_depth: int = 0
    mu0: int = 0
    incumbents: list = field(default_factory=list)   # (solution, cost), in the order found
    trace: list | None = field(default=None, repr=False)


MODES = ("cbj", "chrono", "chrono+empty")


def solve(inst: Instance, pick: Order, mode: str = "cbj", *, trace: bool = False,
          jump_rule: str = "stack", drop: bool = False, check: bool = False,
          fc: bool = False, fc_reasons: bool = False, max_steps: int | None = None) -> Run:
    """Run the search. A frame is [var, values, cursor, conflict set]; values[cursor] is the
    current candidate, the values before the cursor are closed. One step does exactly one of

      reject   the current candidate fails a constraint whose other variable is assigned (the
               first such constraint in input order): close it, add that variable to the set
      descend  it passes: open a frame for the variable `pick` chooses, with an empty set
      jump     the frame is exhausted: jump to the target frame, discard the frames below it,
               merge the set minus the target's variable into the target's set, close its value
      unsat    the frame is exhausted and the stop rule holds
      sat      every variable is assigned

    With an objective (inst.obj), the search is branch and bound on the same loop: the bound
    f < U is one more constraint, checked once every variable of f is assigned, with the other
    variables of f as the reason; U starts at +infinity. "sat" becomes

      solution every variable is assigned: record the incumbent, set U to its cost, and close the
               value (it now breaks f < U) with the other variables of f as its reason

    and the stop answers 'OPTIMAL' if there is an incumbent, 'UNSAT' otherwise.

    mode      'cbj': the target is the deepest frame whose variable is in the set, and the stop
              rule is "the set is empty". 'chrono': the target is the frame just above, and the
              search stops only when the top frame is exhausted (the deck's chronological
              backtracking). 'chrono+empty': chronological backtracking that also stops on an
              empty conflict set; the deck does not use it.
    jump_rule 'stack' as above; 'index': the target is the frame of the set's variable of largest
              input index (right only when the search order is the input order). Raises Dangling
              if that variable is not on the stack.
    drop      before the stop test, silently remove from the exhausted frame's set every variable
              that is not on the stack.
    check     after every step, assert the invariant "every variable of a frame's set is on the
              stack above that frame" (raises InvariantBroken).
    fc        open each frame on its list pruned against the assignments so far; with fc_reasons
              the pruning variables go into the new frame's set.
    max_steps a cutoff: return 'CUTOFF' once that many steps are done (for restarts).

    mu reads, per depth, the values not yet closed (the current one included), or TOP = B - 1
    for a depth with no frame, as one number in radix B = D_max + 2; it is asserted to drop on
    every step but the stop.
    """
    assert mode in MODES and jump_rule in ("stack", "index")
    n, doms, cons = inst.n, inst.doms, inst.cons
    B = inst.B
    TOP = B - 1
    varkey = {v: i for i, v in enumerate(inst.vars)}
    chrono = mode != "cbj"
    stack = []
    run = Run("?", 0, None, trace=[] if trace else None)
    U = None                                                   # the incumbent's cost
    pick.reset(inst)

    def assigned():
        return {f[0]: f[1][f[2]] for f in stack if f[2] < len(f[1])}

    def mu():
        r = [len(f[1]) - f[2] for f in stack] + [TOP] * (n - len(stack))
        return sum(ri * B ** (n - 1 - d) for d, ri in enumerate(r)), r

    def violated(x, v, a):
        """The first constraint (index, other variable) that x = v violates under a, or None."""
        for i, (cx, cy, ok, _) in enumerate(cons):
            if cx == x and cy in a and not ok(v, a[cy]):
                return i, cy
            if cy == x and cx in a and not ok(a[cx], v):
                return i, cx
        return None

    def open_frame():
        a = assigned()
        x = pick(Ctx(inst, [f[0] for f in stack], a, {f[0] for f in stack}))
        if x in a or x not in doms:
            raise ContractBroken(f"the order returned {x!r}, which is not an unassigned variable")
        vals, cs = list(doms[x]), set()
        if fc:
            keep = []
            for v in vals:
                bad = violated(x, v, a)
                if bad is None:
                    keep.append(v)
                elif fc_reasons:
                    cs.add(bad[1])
            vals = keep
        stack.append([x, vals, 0, cs])

    def snapshot():
        return [[f[0], list(f[1]), f[2], sorted(f[3], key=varkey.get)] for f in stack]

    def record(kind, detail, m0, r0, m1, r1):
        if trace:
            run.trace.append({"step": run.steps, "kind": kind, "detail": detail,
                              "mu0": m0, "r0": r0, "mu1": m1, "r1": r1, "stack": snapshot()})

    open_frame()
    run.mu0 = mu()[0]
    run.max_depth = 1
    while True:
        if max_steps is not None and run.steps >= max_steps:
            run.answer = "CUTOFF"
            return run
        m0, r0 = mu()
        f = stack[-1]
        x, vals, cur, cs = f
        out = None
        if cur == len(vals):                                   # exhausted
            if drop:
                cs &= {g[0] for g in stack}
            if (not chrono and not cs) or (mode == "chrono+empty" and not cs) or (chrono and len(stack) == 1):
                kind, out = "unsat", ("OPTIMAL" if run.incumbents else "UNSAT")
                detail = f"{x} exhausted, E={{{','.join(sorted(cs, key=varkey.get))}}}: {out}"
            else:
                if chrono:
                    j = len(stack) - 2
                elif jump_rule == "stack":
                    j = max(i for i, g in enumerate(stack) if g[0] in cs)
                else:
                    top = max(cs, key=varkey.get)
                    j = next((i for i, g in enumerate(stack) if g[0] == top), None)
                    if j is None:
                        raise Dangling(f"step {run.steps + 1}: E of {x} names {top}, which is not on the stack")
                del stack[j + 1:]
                g = stack[j]
                g[3] |= cs - {g[0]}
                g[2] += 1
                kind = "jump"
                run.jumps += 1
                detail = f"{x} exhausted, E={{{','.join(sorted(cs, key=varkey.get))}}} -> jump to {g[0]}"
        else:
            v = vals[cur]
            a = assigned()
            a.pop(x, None)
            bad = violated(x, v, a)
            full = {**a, x: v}
            bound = (inst.obj is not None and U is not None and not bad
                     and all(y in full for y in inst.obj_vars) and inst.obj(full) >= U)
            reason = sorted(set(inst.obj_vars) - {x}, key=varkey.get)
            if bound:
                cs.update(reason)
                f[2] += 1
                kind = "reject"
                run.rejections += 1
                detail = f"{x}={v} rejected by f < {U}, reason {{{','.join(reason)}}}"
            elif bad:
                i, other = bad
                cs.add(other)
                f[2] += 1
                pick.on_reject(i)
                kind = "reject"
                run.rejections += 1
                detail = f"{x}={v} rejected by {cons[i][3]}, reason {{{other}}}"
            elif len(stack) == n and inst.obj is not None:
                U = inst.obj(full)
                run.incumbents.append((full, U))
                cs.update(reason)
                f[2] += 1
                kind = "solution"
                detail = f"{x}={v} ok: solution, cost {U}, U={U}"
            elif len(stack) == n:
                kind, out = "sat", "SAT"
                detail = f"{x}={v} ok: SAT"
            else:
                open_frame()
                kind = "descend"
                run.descends += 1
                run.max_depth = max(run.max_depth, len(stack))
                detail = f"{x}={v} ok, open {stack[-1][0]}"
        if check:
            for k, g in enumerate(stack):
                if not g[3] <= {h[0] for h in stack[:k]}:
                    raise InvariantBroken(f"step {run.steps + 1}: E of {g[0]} at depth {k} is "
                                          f"{sorted(g[3], key=varkey.get)}, above it only "
                                          f"{[h[0] for h in stack[:k]]}")
        run.steps += 1
        if out:
            record(kind, detail, m0, r0, m0, r0)
            run.answer = out
            run.solution = assigned() if out == "SAT" else run.incumbents[-1][0] if out == "OPTIMAL" else None
            return run
        m1, r1 = mu()
        record(kind, detail, m0, r0, m1, r1)
        assert m1 < m0, (kind, r0, r1)


def luby(i: int) -> int:
    """The Luby sequence, 1-based: 1 1 2 1 1 2 4 1 1 2 1 1 2 4 8 ..."""
    k = 1
    while (1 << k) - 1 < i:
        k += 1
    while True:
        if i == (1 << k) - 1:
            return 1 << (k - 1)
        i -= (1 << (k - 1)) - 1
        k = 1
        while (1 << k) - 1 < i:
            k += 1


def first_luby_at_least(c: int) -> int:
    """The first i with luby(i) >= c. With 2^k the least power of two >= c, the values before
    index 2^(k+1) - 1 are at most 2^(k-1), and luby(2^(k+1) - 1) = 2^k."""
    k = max(0, (c - 1).bit_length())
    i = (1 << (k + 1)) - 1
    assert luby(i) == 1 << k >= c and (k == 0 or luby(i - 1) < c)
    return i


def restart_loop(inst: Instance, order: Order, mode="cbj", unit=1):
    """Restarts with Luby cutoffs of luby(i) * unit steps; each run starts from a fresh stack.
    Returns (answer, number of runs, total steps, cutoffs of the runs)."""
    total, cutoffs = 0, []
    for i in itertools.count(1):
        cutoff = luby(i) * unit
        cutoffs.append(cutoff)
        r = solve(inst, order, mode, max_steps=cutoff)
        total += r.steps
        if r.answer != "CUTOFF":
            return r.answer, i, total, cutoffs


# --------------------------------------------------------------------------------------------
# The experiments behind the deck's numbers
# --------------------------------------------------------------------------------------------

def random_check():
    """4 000 random CSPs, each solved by CBJ with the static order, then with a random dynamic
    order drawn from the instance generator's own rng (as first run). Checks answers against brute
    force and solutions against the constraints; mu is asserted inside solve()."""
    runs = unsat = 0
    for trial, inst, rng in check_instances():
        truth = brute(inst) is not None
        for order in (StaticOrder(), RandomOrder(rng=rng)):
            r = solve(inst, order)
            assert (r.answer == "SAT") == truth, (trial, order.name)
            if r.solution:
                assert inst.satisfied_by(r.solution)
            runs += 1
            unsat += r.answer == "UNSAT"
    return runs, unsat


def pitfall_orders(inst, trial):
    return {"static": StaticOrder(), "dynamic": RandomOrder(seed=trial)}


def pitfall_stats():
    """The two index-rule variants, the correction, and the invariant check, on the 3 000
    instances of `pitfall_instances`, each with the static order and RandomOrder(seed=trial)."""
    res = {}
    for name, drop in (("index", False), ("index+drop", True)):
        st = {m: {"runs": 0, "dangling": 0, "wrong": 0, "sat called unsat": 0} for m in ("static", "dynamic")}
        first = None
        for trial, inst in pitfall_instances():
            truth = brute(inst) is not None
            for mode, order in pitfall_orders(inst, trial).items():
                s = st[mode]
                s["runs"] += 1
                try:
                    r = solve(inst, order, jump_rule="index", drop=drop)
                except Dangling:
                    s["dangling"] += 1
                    continue
                if (r.answer == "SAT") != truth:
                    s["wrong"] += 1
                    s["sat called unsat"] += truth
                    if first is None and mode == "dynamic":
                        first = trial
        res[name] = (st, first)

    runs = wrong = 0
    for trial, inst in pitfall_instances():
        truth = brute(inst) is not None
        for mode, order in pitfall_orders(inst, trial).items():
            r = solve(inst, order, check=True)       # the correction, with the check on: never fires
            runs += 1
            wrong += (r.answer == "SAT") != truth
    res["stack"] = (runs, wrong)

    caught = bad = 0
    index_fired = {"static": 0, "dynamic": 0}
    for trial, inst in pitfall_instances():
        truth = brute(inst) is not None
        r = solve(inst, RandomOrder(seed=trial), jump_rule="index", drop=True)
        if (r.answer == "SAT") != truth:
            bad += 1
            try:
                solve(inst, RandomOrder(seed=trial), jump_rule="index", check=True)
            except (InvariantBroken, Dangling):
                caught += 1
        for mode, order in pitfall_orders(inst, trial).items():
            try:
                solve(inst, order, jump_rule="index", check=True)
            except (InvariantBroken, Dangling):
                index_fired[mode] += 1
    res["check"] = (caught, bad, index_fired)

    # the index rule under a static order that is not the input order
    mc = {"dangling": 0, "wrong": 0, "sat called unsat": 0, "check fires": 0, "same as input": 0}
    for trial, inst in pitfall_instances():
        truth = brute(inst) is not None
        mc["same as input"] += max_cardinality_order(inst) == inst.vars
        try:
            solve(inst, MaxCardinality(), jump_rule="index")
        except Dangling:
            mc["dangling"] += 1
        r = solve(inst, MaxCardinality(), jump_rule="index", drop=True)
        if (r.answer == "SAT") != truth:
            mc["wrong"] += 1
            mc["sat called unsat"] += truth
        try:
            solve(inst, MaxCardinality(), jump_rule="index", check=True)
        except (InvariantBroken, Dangling):
            mc["check fires"] += 1
    res["maxcard"] = mc
    return res


def pitfall_replay(trial=291):
    """Trial `trial`: the stack rule and the index+drop rule on the same dynamic seed. Returns
    both traces, the first step where they differ, and the first step where the index rule
    breaks the invariant."""
    inst = pitfall_instance(trial)
    good = solve(inst, RandomOrder(seed=trial), trace=True)
    bad = solve(inst, RandomOrder(seed=trial), jump_rule="index", drop=True, trace=True)
    diverge = next((a["step"] for a, b in zip(good.trace, bad.trace) if a["detail"] != b["detail"]), None)
    try:
        solve(inst, RandomOrder(seed=trial), jump_rule="index", check=True)
        broken = None
    except InvariantBroken as e:
        broken = str(e)
    return inst, good, bad, diverge, broken


# --------------------------------------------------------------------------------------------
# data() for the figures: units/19b-backjumping/explore.html, widgets in slides/viz/widgets/backjump.js
#
#   cbj-replay  the running example, chronological and CBJ: a full stack snapshot per step, the
#               search-tree node each step touches, and the tree chronological search visits
#   ordering    the four instances x five orders x {chronological, CBJ}, each run as a compact
#               event list (one token per step, replayed in the page into the stack), capped at
#               ORDERING_CAP steps; identical runs are stored once
#   pitfall     trial 291 of the pitfall generator, the stack rule and the index+drop rule on
#               RandomOrder(seed=291), a full snapshot per step of each, with the invariant's
#               breaches found in each snapshot
# --------------------------------------------------------------------------------------------

ORDERING_CAP = 120          # recorded steps per run in the "ordering" figure


def _pretty(detail: str) -> str:
    """The engine's detail line, spaced for reading: 'd=2 rejected by c!=d, reason {c}' ->
    'd = 2 rejected by c ≠ d, reason {c}'."""
    import re
    s = re.sub(r"(\w+)=(\w+)", r"\1 = \2", detail)
    s = s.replace("!=", " ≠ ").replace("->", "→").replace("E=", "E = ").replace("{}", "∅")
    return re.sub(r"\{([^}]*)\}", lambda m: "{" + ", ".join(m.group(1).split(",")) + "}", s)


def _start_snapshot(inst: Instance, run: Run) -> list:
    """The stack before step 1: the first frame, nothing closed. Frame 0 is never discarded, so
    its variable and values are those of frame 0 in the first recorded snapshot."""
    v, vals = run.trace[0]["stack"][0][0], run.trace[0]["stack"][0][1]
    return [[v, list(vals), 0, []]]


def _path(frames) -> list:
    """The values under the cursors of these frames: a node of the search tree."""
    return [f[1][f[2]] for f in frames]


def _cbj_replay(ex: Instance | None = None, objective: str | None = None) -> dict:
    """Both runs of `ex` (default: the running example) on the tree chronological search visits.
    With an objective, each state also carries U, the incumbent's cost (None for +infinity)."""
    ex = ex or running_example()
    runs = {m: solve(ex, StaticOrder(), m, trace=True, check=True) for m in ("chrono", "cbj")}
    tree = []                                # every node chronological search touches, first-visit order
    out = {"vars": ex.vars, "doms": [ex.doms[v] for v in ex.vars], "runs": []}
    if objective:
        out["objective"] = objective
    for mode, title in (("chrono", "chronological backtracking"), ("cbj", "conflict-directed backjumping")):
        r = runs[mode]
        prev = _start_snapshot(ex, r)
        states = [{"stack": prev, "kind": "start", "note": f"start: a frame for {prev[0][0]}, nothing closed",
                   "rej": 0, "jumps": 0}]
        rej = jumps = 0
        U, found = None, iter(r.incumbents)
        if objective:
            states[0]["U"] = None
        for t in r.trace:
            st = {"stack": t["stack"], "kind": t["kind"], "note": f"step {t['step']}: {_pretty(t['detail'])}"}
            if t["kind"] in ("descend", "reject", "sat", "solution"):
                st["node"] = _path(prev)
                if mode == "chrono" and st["node"] not in tree:
                    tree.append(st["node"])
            elif t["kind"] == "jump":
                j = len(t["stack"]) - 1
                # from the exhausted frame's last value (every value was touched) to the one it closes
                st["from"], st["to"] = _path(prev[:-1]) + [prev[-1][1][-1]], _path(prev[:j + 1])
                st["E"] = prev[-1][3]
            else:
                st["E"] = prev[-1][3]
            rej += t["kind"] == "reject"
            jumps += t["kind"] == "jump"
            st["rej"], st["jumps"] = rej, jumps
            if t["kind"] == "solution":
                sol, U = next(found)
                assert _path(prev) == [sol[v] for v in ex.vars]
                st["cost"] = U
            if objective:
                st["U"] = U
            states.append(st)
            prev = t["stack"]
        assert (rej, jumps) == (r.rejections, r.jumps)
        answer = f"optimal, cost {r.incumbents[-1][1]}," if r.answer == "OPTIMAL" else r.answer
        out["runs"].append({"title": f"{title}: {answer} in {r.steps} steps", "mode": mode, "states": states,
                            "steps": r.steps, "rejections": r.rejections, "answer": answer})
    # CBJ never touches a node chronological search does not (same static order)
    for st in out["runs"][1]["states"]:
        assert "node" not in st or st["node"] in tree
    out["runs"].reverse()                    # CBJ first; the tree needed the chronological run first
    out["tree"] = tree
    return out


def _labels(frames) -> list:
    """The node of these frames as "var=value" labels: the variable at a depth changes between
    runs under a dynamic order, so the restart tree is keyed by labels, not values."""
    return [f"{f[0]}={f[1][f[2]]}" for f in frames]


def _restart_replay(unit: int = 4) -> dict:
    """The restarts slide's example: every run of the Luby loop with dom/wdeg, weights kept,
    a full stack snapshot per step, the weights each run starts with, and one tree: every node any
    run touches, keyed by labels, in depth-first order (children in the order first touched)."""
    ex, order = restart_example(), DomWdeg(keep_weights=True)
    runs, touched = [], []
    for i in itertools.count(1):
        cutoff = luby(i) * unit
        order.reset(ex)
        weights = list(order.w)
        r = solve(ex, order, "cbj", trace=True, check=True, max_steps=cutoff)
        prev = _start_snapshot(ex, r)
        states = [{"stack": prev, "kind": "start", "note": f"run {i}: a fresh stack, one frame for {prev[0][0]}",
                   "rej": 0, "jumps": 0}]
        rej = jumps = 0
        for t in r.trace:
            st = {"stack": t["stack"], "kind": t["kind"], "note": f"run {i}, step {t['step']}: {_pretty(t['detail'])}"}
            if t["kind"] in ("descend", "reject"):
                st["node"] = _labels(prev)
            elif t["kind"] == "jump":
                j = len(t["stack"]) - 1
                last = prev[-1]
                st["from"] = _labels(prev[:-1]) + [f"{last[0]}={last[1][-1]}"]
                st["to"] = _labels(prev[:j + 1])
                st["E"] = prev[-1][3]
            else:
                st["E"] = prev[-1][3]
            if "node" in st and st["node"] not in touched:
                touched.append(st["node"])
            rej += t["kind"] == "reject"
            jumps += t["kind"] == "jump"
            st["rej"], st["jumps"] = rej, jumps
            states.append(st)
            prev = t["stack"]
        if r.answer == "CUTOFF":
            states.append({"stack": prev, "kind": "cutoff", "rej": rej, "jumps": jumps,
                           "note": f"run {i}: cut off after {cutoff} steps"})
        answer = "unsatisfiable" if r.answer == "UNSAT" else r.answer.lower()
        runs.append({"title": f"run {i}: cutoff {cutoff}, " + ("cut off" if r.answer == "CUTOFF" else f"{answer} after {r.steps} steps"),
                     "mode": "cbj", "states": states, "steps": r.steps, "cutoff": cutoff,
                     "answer": answer, "weights": weights})
        if r.answer != "CUTOFF":
            break
    assert runs[-1]["answer"] == "unsatisfiable" and brute(ex) is None

    def dfs(path):
        kids = [p for p in touched if len(p) == len(path) + 1 and p[:len(path)] == path]
        return [q for k in kids for q in [k] + dfs(k)]
    tree = dfs([])
    assert len(tree) == len(touched)
    return {"vars": ex.vars, "cons": [c[3].replace("!=", " ≠ ") for c in ex.cons], "unit": unit,
            "B": ex.B, "Bn": ex.B ** ex.n, "runs": runs, "tree": tree}


def _events(inst: Instance, r: Run) -> tuple[int, str]:
    """A run as (first variable, one token per step), checked by replaying it:
    'r<i>' reject with reason variable i; 'd<i>' descend, opening variable i; 'j<k>' jump to
    depth k; 'u' unsat; 's' sat. Variables by input index. The replay is the page's too
    (backjump.js, replay()), and must rebuild every recorded snapshot and digit string."""
    import re
    idx = {v: i for i, v in enumerate(inst.vars)}
    first = r.trace[0]["stack"][0][0]
    toks = []
    for t in r.trace:
        k = t["kind"]
        if k == "reject":
            toks.append("r%d" % idx[re.search(r"reason \{(\w+)\}", t["detail"]).group(1)])
        elif k == "descend":
            toks.append("d%d" % idx[t["stack"][-1][0]])
        elif k == "jump":
            toks.append("j%d" % (len(t["stack"]) - 1))
        else:
            toks.append(k[0])
    # the replay, checked against the engine's snapshots and digits
    stack = [[first, inst.doms[first], 0, set()]]
    for tok, t in zip(toks, r.trace):
        if tok[0] == "r":
            stack[-1][2] += 1
            stack[-1][3].add(inst.vars[int(tok[1:])])
        elif tok[0] == "d":
            v = inst.vars[int(tok[1:])]
            stack.append([v, inst.doms[v], 0, set()])
        elif tok[0] == "j":
            E = stack[-1][3]
            del stack[int(tok[1:]) + 1:]
            g = stack[-1]
            g[3] |= E - {g[0]}
            g[2] += 1
        snap = [[f[0], list(f[1]), f[2], sorted(f[3], key=idx.get)] for f in stack]
        assert snap == t["stack"], (inst.name, t["step"])
        digits = [len(f[1]) - f[2] for f in stack] + [inst.B - 1] * (inst.n - len(stack))
        assert digits == t["r1"], (inst.name, t["step"])
    return idx[first], " ".join(toks)


def _ordering() -> dict:
    rnd = random_csp(**RANDOM_UNSAT)
    insts = [("running example", running_example()), ("Mycielski graph, 3 colours", mycielski_c5()),
             ("5 pigeons, 4 holes", pigeons()), ("random CSP (seed 3)", rnd)]
    hs = [h.name for h in heuristics()]
    out = {"cap": ORDERING_CAP, "heuristics": hs, "algos": ["chronological", "CBJ"], "instances": [], "runs": []}
    seen = {}
    for label, inst in insts:
        info = {"label": label, "vars": inst.vars, "doms": [inst.doms[v] for v in inst.vars], "B": inst.B,
                "cons": len(inst.cons), "runs": []}
        for h in heuristics():
            row = []
            for mode in ("chrono", "cbj"):
                r = solve(inst, h, mode, trace=True)
                first, toks = _events(inst, r)
                key = (label, first, toks)
                if key not in seen:
                    capped = r.trace[:ORDERING_CAP]
                    seen[key] = len(out["runs"])
                    out["runs"].append({
                        "first": first, "events": " ".join(toks.split(" ")[:ORDERING_CAP]),
                        "steps": r.steps, "rejections": r.rejections, "jumps": r.jumps, "answer": r.answer,
                        "mu0": r.mu0, "muEnd": capped[-1]["mu1"], "stackEnd": " ".join(f[0] for f in capped[-1]["stack"]),
                        "capped": r.steps > ORDERING_CAP})
                row.append(seen[key])
            info["runs"].append(row)
        out["instances"].append(info)
    return out


def _breaches(stack) -> list:
    """[depth, variable] for every variable of a frame's conflict set that is not on the stack
    above that frame: the reason invariant, broken."""
    return [[k, v] for k, f in enumerate(stack) for v in f[3] if v not in [g[0] for g in stack[:k]]]


def _pitfall(trial: int = 291) -> dict:
    inst, good, bad, diverge, broken = pitfall_replay(trial)
    truth = brute(inst)
    assert truth is not None and bad.answer == "UNSAT" and good.answer == "SAT"
    assert inst.satisfied_by(good.solution)
    sides = []
    for r in (good, bad):
        prev = _start_snapshot(inst, r)
        snaps = [{"stack": prev, "kind": "start", "note": f"start: a frame for {prev[0][0]}", "bad": []}]
        for t in r.trace:
            st = {"stack": t["stack"], "kind": t["kind"], "note": f"step {t['step']}: {_pretty(t['detail'])}",
                  "bad": _breaches(t["stack"])}
            if t["kind"] in ("jump", "unsat"):
                st["E"] = prev[-1][3]
                if t["kind"] == "unsat":
                    st["dropped"] = [v for v in prev[-1][3] if v not in [g[0] for g in prev]]
            snaps.append(st)
            prev = t["stack"]
        sides.append(snaps)
    assert all(not s["bad"] for s in sides[0])
    first_breach = next(i for i, s in enumerate(sides[1]) if s["bad"])
    assert first_breach == diverge
    return {"trial": trial, "vars": inst.vars, "doms": [inst.doms[v] for v in inst.vars],
            "cons": [c[3] for c in inst.cons], "diverge": diverge, "breach": first_breach,
            "good": sides[0], "bad": sides[1], "solution": good.solution, "truth": truth,
            "goodSteps": good.steps, "badSteps": bad.steps}


def data():
    return {"cbj-replay": _cbj_replay(), "ordering": _ordering(), "pitfall": _pitfall(),
            "opt-replay": _cbj_replay(opt_example(), "minimise f = a + 2c"),
            "restart-replay": _restart_replay()}


# --------------------------------------------------------------------------------------------
# Every number the deck quotes
# --------------------------------------------------------------------------------------------

def _fmt_r(r):
    return " ".join(str(x) for x in r)


def _main():
    ex = running_example()
    print("== 19b reference numbers   (python -m slides.viz.traces.u19b)")

    print("\n-- the running example: a, b, c, d in {1, 2}; a!=c, a!=d, c!=d; static order a, b, c, d")
    print(f"n = {ex.n}, D_max = 2, B = {ex.B}, B^n = {ex.B ** ex.n}")
    runs = {}
    for mode in ("chrono", "cbj"):
        r = solve(ex, StaticOrder(), mode, trace=True)
        runs[mode] = r
        print(f"\n{mode}: {r.answer} in {r.steps} steps, {r.rejections} rejections, {r.jumps} jumps; "
              f"mu0 = {r.mu0}, mu0 + 1 = {r.mu0 + 1}")
        for t in r.trace:
            print(f"  {t['step']:3} {t['kind']:8} {t['detail']:44} r={_fmt_r(t['r0'])} -> {_fmt_r(t['r1'])}"
                  f"   mu {t['mu0']} -> {t['mu1']}")
    cbj = runs["cbj"].trace
    drops = sum(1 for t in cbj if t["mu1"] < t["mu0"])
    print(f"CBJ: mu drops on {drops} of the {len(cbj) - 1} steps before the stop; the stop leaves it at {cbj[-1]['mu1']}")
    print("CBJ measure table (after step: digits, mu):")
    print(f"  start: {_fmt_r(cbj[0]['r0'])}  {cbj[0]['mu0']}")
    for s in (6, 7, 8, 9, 16):
        t = cbj[s - 1]
        print(f"  {s:>5}: {_fmt_r(t['r1'])}  {t['mu1']}   ({t['detail']})")

    print("\n-- optimization (the two slides after 'Where the argument stops'): a, b, c in {1, 2}; a!=c;")
    print("   minimise f = a + 2c; static order a, b, c; branch and bound with f < U as a constraint")
    oe = opt_example()
    best = min(oe.obj(s) for s in (dict(zip(oe.vars, t)) for t in itertools.product(*(oe.doms[v] for v in oe.vars)))
               if oe.satisfied_by(s))
    for mode in ("cbj", "chrono"):
        r = solve(oe, StaticOrder(), mode, trace=True, check=True)
        assert r.answer == "OPTIMAL" and r.incumbents[-1][1] == best
        print(f"  {mode}: {r.answer} in {r.steps} steps, {r.rejections} rejections, {r.jumps} jumps; "
              f"incumbents {[c for _, c in r.incumbents]}; brute-force optimum {best}")
        for t in r.trace:
            print(f"     {t['step']:3} {t['kind']:8} {t['detail']}")

    print("\n-- max-cardinality order on the running example")
    order = max_cardinality_order(ex)
    print("order:", ", ".join(order))
    for mode in ("chrono", "cbj"):
        r = solve(ex, MaxCardinality(), mode)
        opened = {t["stack"][-1][0] for t in solve(ex, MaxCardinality(), mode, trace=True).trace}
        print(f"  {mode}: {r.answer} in {r.steps} steps, {r.rejections} rejections; b opened: {'b' in opened}")

    print("\n-- k irrelevant two-valued variables between a and c (the notes' factor 2^k)")
    for k in range(5):
        inst = irrelevant_example(k)
        c, j = solve(inst, StaticOrder(), "chrono"), solve(inst, StaticOrder(), "cbj")
        print(f"  k={k}: chrono {c.steps} steps, {c.rejections} rejections; CBJ {j.steps} steps, {j.rejections} rejections")

    print("\n-- an empty conflict set below the top: p in {1,2}, x in {1}, y in {1}, x != y, order p, x, y")
    pxy = deep_empty_example()
    for mode in ("cbj", "chrono"):
        r = solve(pxy, StaticOrder(), mode, trace=True)
        print(f"  {mode}: {r.answer} in {r.steps} steps; p = 2 tried: "
              f"{any(t['kind'] == 'descend' and t['detail'].startswith('p=2') for t in r.trace)}")
    for t in solve(pxy, StaticOrder(), "cbj", trace=True).trace:
        print(f"     {t['step']} {t['kind']:8} {t['detail']}")

    print("\n-- the fine print: frames opened on forward-checked lists; a in {1,2}, b in {2}, x in {1,2}; a!=x, b!=x")
    fce = fc_example()
    print(f"  truth (brute force): {brute(fce)}")
    for label, kw in (("plain CBJ", {}), ("FC lists, pruning variables NOT in the set", {"fc": True}),
                      ("FC lists, pruning variables in the set", {"fc": True, "fc_reasons": True})):
        r = solve(fce, StaticOrder(), trace=True, **kw)
        print(f"  {label}: {r.answer} in {r.steps} steps, solution {r.solution}")
        for t in r.trace:
            print(f"     {t['step']} {t['kind']:8} {t['detail']}")

    print("\n-- the brute-force check (seed 19): 4 000 random CSPs, 2-7 variables, domains of 1-3 values,")
    print("   CBJ with the static order and with a random dynamic order")
    runs_, unsat = random_check()
    print(f"  {runs_} runs, {unsat} UNSAT; every answer equals brute force, every solution checked, mu dropped on every step")

    print("\n-- heuristics x {chronological, CBJ}: steps / rejections (every run asserts mu drops at every step)")
    rnd = random_csp(**RANDOM_UNSAT)
    insts = [ex, mycielski_c5(), pigeons(), rnd]
    print(f"   random CSP: {rnd.name}")
    for inst in insts:
        truth = brute(inst)
        nb = inst.neighbours()
        print(f"\n   {inst.name}: n = {inst.n}, {len(inst.cons)} constraints, D_max = {inst.B - 2}, B = {inst.B}, "
              f"B^n = {inst.B ** inst.n}; brute force: {'SAT' if truth else 'UNSAT'}")
        if inst.name.startswith("Mycielski"):
            four = mycielski_c5(4)
            r4 = solve(four, StaticOrder())
            assert r4.answer == "SAT" and four.satisfied_by(r4.solution)
            print(f"   degrees: {', '.join(f'{v} {len(nb[v])}' for v in inst.vars)}")
            print(f"   with 4 colours: SAT (CBJ, solution checked): {r4.solution}")
        print(f"   max-cardinality order: {', '.join(max_cardinality_order(inst))}")
        print(f"   {'heuristic':26} {'chrono steps':>12} {'rej':>6} {'CBJ steps':>10} {'rej':>6} {'jumps':>6}  "
              f"{'CBJ saves':>9}")
        for h in heuristics():
            c = solve(inst, h, "chrono")
            j = solve(inst, h, "cbj")
            assert (c.answer == "SAT") == (truth is not None) == (j.answer == "SAT")
            print(f"   {h.name:26} {c.steps:12} {c.rejections:6} {j.steps:10} {j.rejections:6} {j.jumps:6}  "
                  f"{c.steps - j.steps:9}")

    print("\n-- the variable at each depth changes between branches under a dynamic order (CBJ)")
    for inst in insts[1:]:
        for h in (Dom(), DomWdeg()):
            r = solve(inst, h, "cbj", trace=True)
            seen = {}
            for t in r.trace:
                for d, fr in enumerate(t["stack"]):
                    seen.setdefault(d, set()).add(fr[0])
            print(f"   {inst.name} / {h.name}: distinct variables per depth "
                  f"{[len(seen[d]) for d in sorted(seen)]}")

    print("\n-- the pitfall: 3 000 random CSPs (seed 7, 3-7 variables, domains of 1-3 values),")
    print("   the static input order, and a random dynamic order (seed = trial)")
    ps = pitfall_stats()
    for name in ("index", "index+drop"):
        st, first = ps[name]
        for mode in ("static", "dynamic"):
            s = st[mode]
            print(f"  {name:11} {mode:8}: {s['runs']} runs, {s['dangling']} jump to a variable no longer on the stack (crash), "
                  f"{s['wrong']} wrong answers ({s['sat called unsat']} SAT called UNSAT)")
        if name == "index+drop":
            print(f"  first dynamic wrong answer: trial {first}")
    runs2, wrong2 = ps["stack"]
    print(f"  correction (deepest frame on the stack): {runs2} runs, {wrong2} wrong; the invariant check never fired")
    caught, bad, fired = ps["check"]
    print(f"  invariant check in the index rule: stops {caught} of {bad} wrong-answer runs before an answer")
    print(f"  invariant check in the index rule fires on {fired['static']} static and {fired['dynamic']} dynamic runs"
          f" (a conflict set names a discarded variable)")
    mc = ps["maxcard"]
    print(f"  index rule under max-cardinality (static, not the input order; the same as the input order on "
          f"{mc['same as input']} of 3000): {mc['dangling']} crash, {mc['wrong']} wrong answers when dropping "
          f"({mc['sat called unsat']} SAT called UNSAT), the check fires on {mc['check fires']}")

    print("\n-- trial 291, replayed with both rules on RandomOrder(seed=291)")
    inst, good, bad_, diverge, broken = pitfall_replay(291)
    print(f"  variables {inst.vars}, domains {[len(inst.doms[v]) for v in inst.vars]}, "
          f"{len(inst.cons)} constraints: {', '.join(c[3] for c in inst.cons)}")
    print(f"  stack rule: {good.answer} in {good.steps} steps, solution {good.solution}")
    print(f"  index+drop: {bad_.answer} in {bad_.steps} steps")
    print(f"  the traces first differ at step {diverge}")
    print(f"  index rule with the check: {broken}")
    for label, r in (("stack rule", good), ("index+drop", bad_)):
        print(f"  {label}:")
        for t in r.trace:
            print(f"     {t['step']:3} {t['kind']:8} {t['detail']}")

    print("\n-- restarts: a run that is not cut off ends within B^n steps; the first Luby cutoff >= B^n")
    for inst in insts:
        bn = inst.B ** inst.n
        i = first_luby_at_least(bn)
        print(f"   {inst.name}: B^n = {bn}; luby(i) >= B^n first at i = {i} (luby = {luby(i)})")
    print("\n-- the restarts slide's example: triangle a, c, d plus a!=b, b!=e; dom/wdeg, weights kept,")
    print("   Luby cutoffs of 4 steps per unit, a fresh stack per run")
    rx = restart_example()
    print(f"   B = {rx.B}, B^n = {rx.B ** rx.n}; first Luby index with 4 * luby(i) >= B^n: "
          f"{first_luby_at_least(-(-rx.B ** rx.n // 4))}")
    for i, (cut, r) in enumerate(restart_runs(rx, DomWdeg(keep_weights=True), 4), 1):
        opened = []
        for t in r.trace:
            for fr in t["stack"]:
                if fr[0] not in opened:
                    opened.append(fr[0])
        print(f"   run {i}: cutoff {cut}, {r.answer} after {r.steps} steps; mu starts at {r.mu0}; "
              f"variables opened, in order: {', '.join(opened)}")
        for t in r.trace:
            print(f"        {t['step']:3} {t['kind']:8} {t['detail']}")
    print("   Luby, unit 1 step, dom/wdeg with weights kept across runs, fresh stack per run:")
    for inst in insts:
        ans, nruns, total, cut = restart_loop(inst, DomWdeg(keep_weights=True))
        print(f"   {inst.name}: {ans} on run {nruns} (cutoff {cut[-1]}), {total} steps in all")


if __name__ == "__main__":
    _main()
