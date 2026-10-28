"""Every number CURRICULUM.html promises, reproduced by the referee.

Two jobs at once: if the referee is wrong these fail, and if the curriculum
states a number the mathematics does not give, these fail. Each test names the
unit whose checkpoint it backs. They are answers — a learner working a unit
should not read the matching test first.
"""
from fractions import Fraction
from math import gcd

import numpy as np
import pytest

from qclib import Circuit, DensityMatrix, Statevector, channels, gates, library, linalg

S2 = np.sqrt(2)


def test_00_three_mutually_unbiased_bases_in_c2():
    bases = [np.linalg.eigh(p)[1] for p in (gates.Z, gates.X, gates.Y)]
    for i in range(3):
        for j in range(i + 1, 3):
            assert np.allclose(np.abs(bases[i].conj().T @ bases[j]) ** 2, 0.5)


def test_01_elitzur_vaidman():
    bs = np.array([[1, 1j], [1j, 1]]) / S2
    after_first = Statevector.zeros(1).apply(bs, 0).probabilities()
    explode = after_first[1]                                   # the bomb sits in arm 1
    detectors = Statevector.zeros(1).apply(bs, 0).probabilities() * after_first[0]
    assert (explode, *detectors) == pytest.approx((0.5, 0.25, 0.25))
    # with no bomb the interferometer is balanced: detector 0 is dark
    assert Statevector.zeros(1).apply(bs, 0).apply(bs, 0).probabilities()[0] == pytest.approx(0)


def test_05_helstrom_zero_versus_plus():
    rho0, rho1 = (DensityMatrix.from_label(x).matrix for x in ("0", "+"))
    assert 0.5 * (1 + linalg.trace_distance(rho0, rho1)) == pytest.approx(0.8536, abs=5e-5)


def test_06_chsh_and_tsirelson():
    a, a2 = gates.Z, gates.X
    b, b2 = (gates.Z + gates.X) / S2, (gates.Z - gates.X) / S2
    chsh = np.kron(a, b) + np.kron(a, b2) + np.kron(a2, b) - np.kron(a2, b2)
    singlet = library.bell_state("psi-")
    assert abs(np.vdot(singlet, chsh @ singlet)) == pytest.approx(2 * S2)
    assert linalg.op_norm(chsh) == pytest.approx(2 * S2)                  # nothing does better
    comm = lambda p, q: p @ q - q @ p
    assert np.allclose(chsh @ chsh, 4 * np.eye(4) - np.kron(comm(a, a2), comm(b, b2)))
    assert np.cos(np.pi / 8) ** 2 == pytest.approx(0.854, abs=5e-4)       # CHSH game


def test_07_teleportation():
    rng = np.random.default_rng(1)
    v = rng.normal(size=2) + 1j * rng.normal(size=2)
    v /= np.linalg.norm(v)
    start = Statevector(np.kron(v, library.bell_state("phi+")))
    before = Circuit(3).cx(0, 1).h(0).run(start)
    assert np.allclose(DensityMatrix.from_statevector(before).partial_trace([2]).matrix, np.eye(2) / 2)
    after = Circuit(3).cx(0, 1).h(0).cx(1, 2).cz(0, 2).run(start)   # corrections, deferred
    assert np.allclose(DensityMatrix.from_statevector(after).partial_trace([2]).matrix, np.outer(v, v.conj()))
    # measure-and-prepare in Z: average of 1 − ½ sin²θ over the sphere
    theta = np.linspace(0, np.pi, 200001)
    avg = np.trapezoid((1 - 0.5 * np.sin(theta) ** 2) * np.sin(theta), theta) / 2
    assert avg == pytest.approx(2 / 3, abs=1e-8)


def test_08_holevo_zero_plus():
    rho = DensityMatrix.mixture([0.5, 0.5], [Statevector.from_label("0"), Statevector.from_label("+")])
    assert rho.entropy() == pytest.approx(0.601, abs=5e-4)


def test_09_bb84():
    # intercept-resend, averaged over Alice's basis and bit and Eve's basis
    basis = {0: np.eye(2), 1: gates.H}
    errors = []
    for a in (0, 1):
        for bit in (0, 1):
            for e in (0, 1):
                sent = Statevector.basis(bit, 1).apply(basis[a], 0)
                p_eve = sent.copy().apply(basis[e].conj().T, 0).probabilities()
                for outcome, pe in enumerate(p_eve):
                    resent = Statevector.basis(outcome, 1).apply(basis[e], 0)
                    p_bob = resent.apply(basis[a].conj().T, 0).probabilities()
                    errors.append(0.125 * pe * p_bob[1 - bit])
    assert sum(errors) == pytest.approx(0.25)
    h = lambda q: linalg.shannon_entropy([q, 1 - q])
    assert 1 - 2 * h(0.05) == pytest.approx(0.427, abs=5e-4)
    lo, hi = 0.01, 0.2
    for _ in range(60):
        mid = (lo + hi) / 2
        lo, hi = (mid, hi) if 1 - 2 * h(mid) > 0 else (lo, mid)
    assert lo == pytest.approx(0.110, abs=5e-4)


def test_11_density_of_h_and_t():
    u = gates.T @ gates.H @ gates.T @ gates.H
    u = u / np.sqrt(np.linalg.det(u))                        # into SU(2)
    assert abs(np.trace(u)) / 2 == pytest.approx(np.cos(np.pi / 8) ** 2)
    assert 3 * np.log2(1e11) == pytest.approx(110, abs=0.5)  # T-count per rotation at ε = 1e-11


def test_12_amplification_repetitions():
    assert 18 * 100 * np.log(2) == pytest.approx(1250, abs=5)   # exp(−k/18) ≤ 2^−100


def test_13_deutsch_jozsa():
    n = 4
    for f, zero_prob in ((lambda x: 1, 1.0), (lambda x: bin(x).count("1") % 2, 0.0)):
        c = Circuit(n + 1).x(n)
        for q in range(n + 1):
            c.h(q)
        c.oracle(f, range(n), [n])
        for q in range(n):
            c.h(q)
        assert c.run().probabilities(range(n))[0] == pytest.approx(zero_prob)


def test_14_simon():
    n, s = 3, 0b110
    c = Circuit(2 * n)
    for q in range(n):
        c.h(q)
    c.oracle(lambda x: min(x, x ^ s), range(n), range(n, 2 * n))
    for q in range(n):
        c.h(q)
    p = c.run().probabilities(range(n))
    for y, py in enumerate(p):
        assert py == pytest.approx(0.25 if bin(y & s).count("1") % 2 == 0 else 0)
    assert np.prod([1 - 2.0**-k for k in range(1, 80)]) == pytest.approx(0.2888, abs=5e-5)


def phase_estimation(controlled_powers, t, work, work_init):
    """Counting register 0..t−1 (qubit 0 most significant), then QFT† on it."""
    c = Circuit(t + work)
    for q in work_init:
        c.x(t + q)
    for j in range(t):
        c.h(j)
    for j in range(t):
        controlled_powers(c, j, 2 ** (t - 1 - j))
    c.gate(linalg.dagger(library.qft_matrix(t)), *range(t), name="qft†")
    return c.run().probabilities(range(t))


def test_15_phase_estimation_one_third():
    phi = 1 / 3
    p = phase_estimation(lambda c, j, k: c.controlled(gates.phase(2 * np.pi * phi * k), [j], [3]),
                         t=3, work=1, work_init=[0])
    assert p[3] == pytest.approx(0.688, abs=5e-4)
    assert 4 / np.pi**2 == pytest.approx(0.405, abs=5e-4)


def test_16_shor_15_and_21():
    assert pow(7, 2, 15) == 4 and pow(7, 4, 15) == 1
    assert (gcd(3, 15), gcd(5, 15)) == (3, 5)
    N, a, t, w = 21, 2, 9, 5
    assert N**2 <= 2**t < 2 * N**2
    p = phase_estimation(
        lambda c, j, k: c.permutation(library.multiply_mod(pow(a, k, N), N, w), range(t, t + w), [j]),
        t=t, work=w, work_init=[w - 1])
    peaks = set(np.argsort(p)[-6:].tolist())
    assert peaks == {0, 85, 171, 256, 341, 427}
    assert Fraction(427, 512).limit_denominator(N) == Fraction(5, 6)
    success = sum(py for y, py in enumerate(p) if Fraction(y, 2**t).limit_denominator(N).denominator == 6)
    assert success == pytest.approx(0.308, abs=5e-4)
    assert (gcd(2**3 - 1, N), gcd(2**3 + 1, N)) == (7, 3)


def grover(n, marked, iterations):
    oracle = np.ones(2**n)
    oracle[marked] = -1
    reflect0 = -np.ones(2**n)
    reflect0[0] = 1
    c = Circuit(n)
    for q in range(n):
        c.h(q)
    for _ in range(iterations):
        c.gate(np.diag(oracle), *range(n), name="oracle")
        for q in range(n):
            c.h(q)
        c.gate(np.diag(reflect0), *range(n), name="reflect")
        for q in range(n):
            c.h(q)
    return c.run().probabilities()[marked]


def test_17_grover():
    theta = np.arcsin(2.0**-3)
    for k in range(8):                                  # the rotation picture, gate by gate
        assert grover(6, 42, k) == pytest.approx(np.sin((2 * k + 1) * theta) ** 2)
    assert grover(2, 3, 1) == pytest.approx(1)          # N = 4: one iteration, certainty
    theta = np.arcsin(2.0**-10)
    k = int(np.floor(np.pi / (4 * theta)))
    assert k == 804 and np.sin((2 * k + 1) * theta) ** 2 > 0.9999997


def test_19_trotter():
    exact = linalg.exp_hermitian(gates.X + gates.Z, -1j)
    step = linalg.exp_hermitian(gates.X, -0.1j) @ linalg.exp_hermitian(gates.Z, -0.1j)
    err = linalg.op_norm(exact - np.linalg.matrix_power(step, 10))
    assert err == pytest.approx(0.070, abs=5e-4)
    assert err <= linalg.op_norm(gates.X @ gates.Z - gates.Z @ gates.X) / (2 * 10)


def test_20_feynman_kitaev_propagation_gap():
    T = 9
    rng = np.random.default_rng(3)
    clock = lambda i, j: np.outer(np.eye(T + 1)[i], np.eye(T + 1)[j])
    h = np.zeros((2 * (T + 1),) * 2, dtype=complex)
    for t in range(1, T + 1):
        q, _ = np.linalg.qr(rng.normal(size=(2, 2)) + 1j * rng.normal(size=(2, 2)))
        h += 0.5 * (np.kron(np.eye(2), clock(t, t) + clock(t - 1, t - 1))
                    - np.kron(q, clock(t, t - 1)) - np.kron(q.conj().T, clock(t - 1, t)))
    w = np.linalg.eigvalsh(h)
    expected = np.repeat(1 - np.cos(np.pi * np.arange(T + 1) / (T + 1)), 2)
    assert np.allclose(np.sort(w), np.sort(expected))
    assert 1 - np.cos(np.pi / (T + 1)) == pytest.approx(0.04894, abs=5e-6)


def test_21_transpose_is_not_completely_positive():
    assert np.linalg.eigvalsh(channels.choi_of_map(lambda m: m.T, 2)).min() == pytest.approx(-1)


def test_21_unambiguous_discrimination():
    c = S2 / (1 + S2)
    e_plus = c * DensityMatrix.from_label("1").matrix     # fires only on |+⟩
    e_zero = c * DensityMatrix.from_label("-").matrix     # fires only on |0⟩
    e_unsure = np.eye(2) - e_plus - e_zero
    assert np.linalg.eigvalsh(e_unsure).min() > -1e-12
    zero = DensityMatrix.from_label("0").matrix
    assert np.trace(e_plus @ zero) == pytest.approx(0)
    assert np.real(np.trace(e_zero @ zero)) == pytest.approx(1 - 1 / S2)


@pytest.mark.parametrize("p", [1e-3, 0.1, 0.5])
def test_22_bit_flip_code(p):
    rho = Circuit(3).cx(0, 1).cx(0, 2).run(DensityMatrix.zeros(3))
    for q in range(3):
        rho.apply_channel(channels.bit_flip(p), q)
    rho = Circuit(3).cx(0, 1).cx(0, 2).ccx(1, 2, 0).run(rho)
    assert rho.probabilities([0])[1] == pytest.approx(3 * p**2 - 2 * p**3)


def test_23_steane_from_hamming():
    hamming = ["0001111", "0110011", "1010101"]
    gens = [gates.pauli(row.replace("1", k).replace("0", "I")) for k in "XZ" for row in hamming]
    for g in gens:
        for h in gens:
            assert np.allclose(g @ h, h @ g)
    projector = np.eye(2**7)
    for g in gens:
        projector = projector @ (np.eye(2**7) + g) / 2
    assert np.trace(projector).real == pytest.approx(2)        # one logical qubit
    assert 2**5 == (1 + 3 * 5) * 2                              # five-qubit code is perfect


def test_24_surface_code_sizing():
    d = next(d for d in range(3, 41, 2) if 0.1 * 0.1 ** ((d + 1) / 2) <= 1e-12 * (1 + 1e-9))
    assert (d, 2 * d**2 - 1) == (21, 881)


def transmon_pi_pulse(duration, drag=0.0, detuning=0.0, steps=3000):
    """Gaussian π-pulse (σ = duration/4, offset to start at zero) on a three-level transmon,
    in the frame rotating at the qubit frequency, rotating-wave approximation made.
    Times in ns, frequencies in rad/ns; returns (population in |2⟩, 1 − population in |1⟩)."""
    alpha = -2 * np.pi * 0.25
    b = np.diag([1, np.sqrt(2)], k=1).astype(complex)          # truncated lowering operator
    n_op, p2 = np.diag([0, 1, 2]).astype(complex), np.diag([0, 0, 1]).astype(complex)
    s, mid = duration / 4, duration / 2
    env = lambda t: np.exp(-((t - mid) ** 2) / (2 * s * s)) - np.exp(-(mid**2) / (2 * s * s))
    denv = lambda t: -(t - mid) / (s * s) * np.exp(-((t - mid) ** 2) / (2 * s * s))
    grid = np.linspace(0, duration, 100001)
    amp = np.pi / np.trapezoid(env(grid), grid)                   # area π
    dt = duration / steps
    psi = np.array([1, 0, 0], dtype=complex)
    for t in (np.arange(steps) + 0.5) * dt:
        ox, oy = amp * env(t), drag * amp * denv(t) / alpha
        h = (alpha * p2 + detuning * ox**2 / alpha * n_op + ox / 2 * (b + b.conj().T)
             + oy / 2 * (1j * b.conj().T - 1j * b))
        psi = linalg.exp_hermitian(h, -1j * dt) @ psi
    return abs(psi[2]) ** 2, 1 - abs(psi[1]) ** 2


def test_25_transmon_leakage_drag_and_t1():
    leak, miss = transmon_pi_pulse(10)
    assert leak == pytest.approx(3.0e-4, rel=0.02) and miss == pytest.approx(0.026, abs=5e-4)
    assert transmon_pi_pulse(4)[0] == pytest.approx(0.25, abs=0.005)        # a quarter leaks
    leak_drag, miss_drag = transmon_pi_pulse(10, drag=-1)
    assert leak_drag == pytest.approx(4e-6, rel=0.05) and miss_drag > 0.02  # leakage gone, error not
    assert sum(transmon_pi_pulse(10, drag=-0.5, detuning=-0.05)) < 1e-3    # the detuning repairs it
    gamma = 1 - np.exp(-20 / 100_000)                                     # 20 ns gate, T1 = 100 µs
    k0, k1 = channels.amplitude_damping(gamma)
    entanglement_fidelity = (abs(np.trace(k0)) ** 2 + abs(np.trace(k1)) ** 2) / 4
    infidelity = 1 - (2 * entanglement_fidelity + 1) / 3
    assert infidelity == pytest.approx(20 / (3 * 100_000), rel=1e-3)       # t/3T1 = 6.7e-5


def test_26_thermal_population_and_qaoa():
    h, kb = 6.62607015e-34, 1.380649e-23
    x = h * 5e9 / (kb * 0.02)
    assert x == pytest.approx(12.0, abs=0.01) and np.exp(-x) == pytest.approx(6.2e-6, abs=1e-7)
    assert h * 5e9 / (kb * 4) == pytest.approx(0.06, abs=1e-3)
    # depth-one QAOA on the cube graph, which is 3-regular, triangle-free and bipartite
    edges = [(v, v ^ (1 << k)) for v in range(8) for k in range(3) if v < v ^ (1 << k)]
    bits = (np.arange(256)[:, None] >> (7 - np.arange(8))) & 1
    cut = np.array([sum(z[a] != z[b] for a, b in edges) for z in bits])
    gamma, beta = np.arctan(1 / S2), np.pi / 8
    c = Circuit(8)
    for q in range(8):
        c.h(q)
    c.gate(np.diag(np.exp(-1j * gamma * cut)), *range(8), name="cost")
    for q in range(8):
        c.rx(2 * beta, q)
    ratio = c.run().probabilities() @ cut / len(edges)
    assert ratio == pytest.approx(0.5 + 1 / (3 * np.sqrt(3))) and ratio == pytest.approx(0.6925, abs=5e-5)
