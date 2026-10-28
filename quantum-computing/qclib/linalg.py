"""Matrix facts the course keeps asking about, each a few lines of NumPy.

Everything here takes and returns plain arrays, so it works on your own hand
calculations as well as on the simulator's states.
"""
from functools import reduce

import numpy as np

ATOL = 1e-9


def dagger(a):
    return np.conj(np.asarray(a)).T


def kron(*ops):
    """Tensor product of operators or vectors, leftmost factor most significant."""
    return reduce(np.kron, [np.asarray(o, dtype=complex) for o in ops])


def is_unitary(u, atol=ATOL):
    u = np.asarray(u)
    return np.allclose(dagger(u) @ u, np.eye(len(u)), atol=atol)


def is_hermitian(a, atol=ATOL):
    return np.allclose(a, dagger(a), atol=atol)


def op_norm(a):
    """Operator norm: the largest singular value."""
    return float(np.linalg.norm(np.asarray(a), 2))


def equal_up_to_phase(a, b, atol=ATOL):
    """Whether a = e^{iα} b for some real α — for vectors or matrices alike."""
    a, b = np.asarray(a, dtype=complex).ravel(), np.asarray(b, dtype=complex).ravel()
    i = np.argmax(np.abs(b))
    if abs(b[i]) < atol:
        return np.allclose(a, 0, atol=atol)
    phase = a[i] / b[i]
    return abs(abs(phase) - 1) < atol and np.allclose(a, phase * b, atol=atol)


def exp_hermitian(h, coeff):
    """exp(coeff · h) for Hermitian h, by the spectral theorem: coeff = -1j*t gives e^{-iht}."""
    w, v = np.linalg.eigh(np.asarray(h, dtype=complex))
    return (v * np.exp(coeff * w)) @ dagger(v)


def sqrt_psd(a):
    w, v = np.linalg.eigh(np.asarray(a, dtype=complex))
    return (v * np.sqrt(np.clip(w, 0, None))) @ dagger(v)


def schmidt_coefficients(psi, dim_a):
    """Schmidt coefficients of a pure bipartite state, largest first (unit 03)."""
    psi = np.asarray(psi, dtype=complex).ravel()
    return np.linalg.svd(psi.reshape(dim_a, -1), compute_uv=False)


def partial_trace(rho, keep, n):
    """Reduced density matrix of an n-qubit ρ on the qubits in `keep`, in their given order."""
    t = np.asarray(rho, dtype=complex).reshape((2,) * (2 * n))
    drop = [q for q in range(n) if q not in keep]
    # trace out from the highest qubit down so the remaining axis numbers stay valid
    for m, q in enumerate(sorted(drop, reverse=True)):
        width = n - m
        t = np.trace(t, axis1=q, axis2=q + width)
    order = sorted(keep)
    k = len(keep)
    t = t.reshape((2,) * (2 * k))
    perm = [order.index(q) for q in keep]
    t = np.transpose(t, perm + [p + k for p in perm])
    return t.reshape(2**k, 2**k)


def von_neumann_entropy(rho, base=2):
    w = np.linalg.eigvalsh(np.asarray(rho, dtype=complex))
    w = w[w > 1e-15]
    return float(-np.sum(w * np.log(w)) / np.log(base))


def shannon_entropy(p, base=2):
    p = np.asarray(p, dtype=float)
    p = p[p > 0]
    return float(-np.sum(p * np.log(p)) / np.log(base))


def trace_distance(rho, sigma):
    return float(0.5 * np.sum(np.abs(np.linalg.eigvalsh(np.asarray(rho) - np.asarray(sigma)))))


def fidelity(rho, sigma):
    """Uhlmann fidelity (tr √(√ρ σ √ρ))², so that pure states give |⟨ψ|φ⟩|²."""
    r = sqrt_psd(rho)
    return float(np.real(np.trace(sqrt_psd(r @ np.asarray(sigma) @ r))) ** 2)


def bloch_vector(state):
    """The Bloch vector of a qubit, from a ket or a 2 × 2 density matrix (unit 02, unit 04)."""
    s = np.asarray(state, dtype=complex)
    rho = np.outer(s, s.conj()) if s.ndim == 1 else s
    paulis = (np.array([[0, 1], [1, 0]]), np.array([[0, -1j], [1j, 0]]), np.diag([1, -1]))
    return np.array([np.real(np.trace(rho @ p)) for p in paulis])
