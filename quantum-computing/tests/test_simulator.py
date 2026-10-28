"""The referee checked against independent constructions: every fast path in
qclib is compared with the slow, obviously-correct Kronecker-product version."""
import numpy as np
import pytest

from qclib import Circuit, DensityMatrix, Statevector, channels, gates, linalg

RNG = np.random.default_rng(20261027)


def random_unitary(d):
    q, r = np.linalg.qr(RNG.normal(size=(d, d)) + 1j * RNG.normal(size=(d, d)))
    return q * (np.diag(r) / np.abs(np.diag(r)))


def random_state(n):
    v = RNG.normal(size=2**n) + 1j * RNG.normal(size=2**n)
    return v / np.linalg.norm(v)


def embed(u, qubits, n):
    """u on `qubits` of n, built the slow way: permute qubits to the front, kron, permute back."""
    k = len(qubits)
    rest = [q for q in range(n) if q not in qubits]
    order = list(qubits) + rest
    full = np.kron(u, np.eye(2 ** (n - k))).reshape((2,) * (2 * n))
    inv = np.argsort(order)
    full = np.transpose(full, list(inv) + [i + n for i in inv])
    return full.reshape(2**n, 2**n)


@pytest.mark.parametrize("qubits", [(0,), (3,), (1, 2), (2, 0), (3, 1, 0)])
def test_apply_matches_kron(qubits):
    n = 4
    u = random_unitary(2 ** len(qubits))
    psi = random_state(n)
    fast = Statevector(psi).apply(u, *qubits).vector
    assert np.allclose(fast, embed(u, qubits, n) @ psi)


def test_permutation_with_controls_matches_matrix():
    n = 5
    perm = RNG.permutation(4)
    psi = random_state(n)
    fast = Statevector(psi).apply_permutation(perm, qubits=(4, 1), controls=(0, 3)).vector
    slow = embed(gates.controlled(gates.permutation_matrix(perm), 2), (0, 3, 4, 1), n) @ psi
    assert np.allclose(fast, slow)


def test_oracle_xors_into_output():
    f = lambda x: (3 * x + 1) % 4
    for x in range(8):
        for y in range(4):
            s = Statevector.basis(x * 4 + y, 5).apply_oracle(f, inputs=(0, 1, 2), outputs=(3, 4))
            assert s.probabilities()[x * 4 + (y ^ f(x))] == pytest.approx(1)


def test_marginals_follow_the_listed_order():
    s = Statevector.from_label("01+")
    assert np.allclose(s.probabilities([1, 0]), [0, 0, 1, 0])     # |10⟩ when read as (q1, q0)
    assert np.allclose(s.probabilities([2]), [0.5, 0.5])


def test_measurement_collapses_consistently():
    s = Circuit(3).h(0).cx(0, 1).cx(0, 2).run()
    first = s.measure([0], rng=RNG)
    assert s.measure([2], rng=RNG) == first


def test_density_matrix_agrees_with_statevector():
    c = Circuit(3).h(0).cx(0, 1).t(1).ry(0.3, 2).ccx(0, 1, 2).permutation([1, 2, 3, 0], (2, 0))
    psi = c.run()
    rho = c.run(DensityMatrix.zeros(3))
    assert np.allclose(rho.matrix, psi.density_matrix())


def test_partial_trace_of_a_product_and_its_order():
    a, b, c = (Statevector.from_label(x).density_matrix() for x in ("0", "+", "r"))
    rho = DensityMatrix(linalg.kron(a, b, c))
    assert np.allclose(rho.partial_trace([1]).matrix, b)
    assert np.allclose(rho.partial_trace([2, 0]).matrix, np.kron(c, a))


def test_inverse_circuit_undoes_it():
    c = Circuit(3).h(0).t(1).cx(1, 2).rz(0.7, 0).permutation([2, 0, 3, 1], (0, 2), controls=(1,))
    assert np.allclose(c.extend(c.inverse()).unitary(), np.eye(8))


def test_seven_t_toffoli():
    """The standard decomposition: 6 CNOTs, 2 Hadamards, 7 T or T† (unit 10)."""
    a, b, t = 0, 1, 2
    c = (Circuit(3).h(t).cx(b, t).tdg(t).cx(a, t).t(t).cx(b, t).tdg(t).cx(a, t)
         .t(b).t(t).h(t).cx(a, b).t(a).tdg(b).cx(a, b))
    assert np.allclose(c.unitary(), gates.CCX)
    assert c.counts()["t"] + c.counts()["tdg"] == 7 and c.counts()["cx"] == 6


@pytest.mark.parametrize("kraus", [channels.bit_flip(0.1), channels.depolarizing(0.2),
                                   channels.amplitude_damping(0.3), channels.phase_damping(0.4)])
def test_channels_are_cptp(kraus):
    assert channels.is_trace_preserving(kraus)
    assert np.linalg.eigvalsh(channels.choi(kraus)).min() > -1e-12


def test_sampled_noise_averages_to_the_exact_channel():
    c = Circuit(2).h(0).cx(0, 1).rx(0.4, 1)
    p = 0.05
    exact = c.run(DensityMatrix.zeros(2), noise=p).matrix
    runs = 4000
    rng = np.random.default_rng(7)
    mean = sum(c.run(noise=p, rng=rng).density_matrix() for _ in range(runs)) / runs
    assert np.abs(mean - exact).max() < 0.02
