"""The standard gates as matrices, in the course's conventions.

Rotations are R_P(θ) = exp(−iθP/2), so R_z(θ) and T differ by a global phase:
T = e^{iπ/8} R_z(π/4). Controlled gates put the controls first and are
block-diagonal: identity on every control pattern except all-ones.
"""
from functools import reduce

import numpy as np

I = np.eye(2, dtype=complex)
X = np.array([[0, 1], [1, 0]], dtype=complex)
Y = np.array([[0, -1j], [1j, 0]], dtype=complex)
Z = np.diag([1, -1]).astype(complex)
H = np.array([[1, 1], [1, -1]], dtype=complex) / np.sqrt(2)
S = np.diag([1, 1j])
Sdg = np.diag([1, -1j])
T = np.diag([1, np.exp(1j * np.pi / 4)])
Tdg = np.diag([1, np.exp(-1j * np.pi / 4)])

PAULIS = {"I": I, "X": X, "Y": Y, "Z": Z}


def rx(theta):
    return np.cos(theta / 2) * I - 1j * np.sin(theta / 2) * X


def ry(theta):
    return np.cos(theta / 2) * I - 1j * np.sin(theta / 2) * Y


def rz(theta):
    return np.cos(theta / 2) * I - 1j * np.sin(theta / 2) * Z


def rotation(axis, theta):
    """exp(−iθ n·σ/2) for a unit vector n — rotation by θ about n on the Bloch sphere."""
    n = np.asarray(axis, dtype=float)
    n = n / np.linalg.norm(n)
    return np.cos(theta / 2) * I - 1j * np.sin(theta / 2) * (n[0] * X + n[1] * Y + n[2] * Z)


def phase(phi):
    return np.diag([1, np.exp(1j * phi)])


def pauli(word):
    """The Pauli operator for a word like 'XZIY', leftmost letter on qubit 0."""
    return reduce(np.kron, [PAULIS[c] for c in word])


def controlled(u, n_controls=1):
    """Controlled-u with n_controls controls ahead of u's own qubits."""
    u = np.asarray(u, dtype=complex)
    d = len(u)
    full = np.eye(d * 2**n_controls, dtype=complex)
    full[-d:, -d:] = u
    return full


def permutation_matrix(perm):
    """The unitary sending basis state |y⟩ to |perm[y]⟩."""
    perm = np.asarray(perm)
    p = np.zeros((len(perm), len(perm)), dtype=complex)
    p[perm, np.arange(len(perm))] = 1
    return p


CNOT = CX = controlled(X)
CZ = controlled(Z)
SWAP = permutation_matrix([0, 2, 1, 3])
CCX = TOFFOLI = controlled(X, 2)
