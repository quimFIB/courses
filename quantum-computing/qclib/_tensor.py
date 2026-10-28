"""Applying small operators to a few axes of a big tensor — the simulator's one trick.

An n-qubit state is stored as a tensor of shape (2,)*n, axis q being qubit q,
so a k-qubit gate costs a tensordot over k axes instead of a 2^n × 2^n matrix.
"""
import numpy as np


def apply_matrix(tensor, u, axes):
    """Contract the 2^k × 2^k matrix u into the k given axes of tensor."""
    k = len(axes)
    if len(set(axes)) != k:
        raise ValueError(f"repeated qubit in {list(axes)}")
    ur = np.asarray(u, dtype=complex).reshape((2,) * (2 * k))
    out = np.tensordot(ur, tensor, axes=(list(range(k, 2 * k)), list(axes)))
    return np.moveaxis(out, list(range(k)), list(axes))


def apply_permutation(tensor, perm, axes, controls=()):
    """Send |y⟩ on `axes` to |perm[y]⟩, only where every control axis is 1."""
    perm = np.asarray(perm)
    k, c = len(axes), len(controls)
    if sorted(perm.tolist()) != list(range(2**k)):
        raise ValueError("not a permutation of the register's basis states")
    front = list(controls) + list(axes)
    moved = np.moveaxis(tensor, front, list(range(len(front))))
    shape = moved.shape
    m = moved.reshape(2**c, 2**k, -1)
    out = m.copy()
    out[-1, perm, :] = m[-1, :, :]
    return np.moveaxis(out.reshape(shape), list(range(len(front))), front)


def register_probabilities(probs_tensor, qubits):
    """Marginal distribution of the listed qubits, outcome index big-endian in their order."""
    n = probs_tensor.ndim
    rest = tuple(q for q in range(n) if q not in qubits)
    marginal = probs_tensor.sum(axis=rest) if rest else probs_tensor
    order = sorted(qubits)
    marginal = np.transpose(marginal, [order.index(q) for q in qubits])
    return marginal.reshape(-1)
