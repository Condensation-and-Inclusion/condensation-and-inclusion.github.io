# C0002 claim contract — v1

Status: candidate. Auxiliary abstract path-transfer lemma, not STATEMENT-v1.
Author/source: root / BASE_TRANSFER. Promoted campaign dependencies: none.

Let E be a compact metric space with metric d. Let P_t be a conservative strongly continuous Feller semigroup on C(E), and assume it has a continuous-path Markov realization with law Q_x for every x in E. Write R_lambda g = integral from zero to infinity of exp(-lambda t) P_t g dt, for lambda > 0.

For each positive integer N, let Z_N be a continuous-time Markov chain on a finite set S_N, with generator A_N, transition semigroup T_N(t), and mapping pi_N:S_N -> E. Define R_lambda^N b = integral from zero to infinity of exp(-lambda t) T_N(t)b dt. Let X_N=pi_N(Z_N). Suppose:

1. For every lambda > 0 and every g in C(E),
   sup over z in S_N of |R_lambda^N(g composed with pi_N)(z) - (R_lambda g)(pi_N(z))| tends to zero.
2. The supremum of d(pi_N(z),pi_N(w)) over pairs with positive transition rate A_N(z,w) tends to zero; take that supremum to be zero if there are no such pairs.

For every deterministic sequence z_N in S_N with pi_N(z_N) -> x in E, prove Law_{z_N}(X_N) -> Q_x in D([0,infinity),E) with Skorokhod J_1 topology. Prove tightness at stopping times and unique identification, not just convergence of one-time marginals. The conclusion must hold without any assertion that X_N is Markov with respect to its projected state.

No convergence hypothesis may be restricted to a subset of microscopic states. No uniform-in-time semigroup convergence is supplied as a hypothesis. The finite-state resolvent hypothesis itself is not established for SIP by this auxiliary lemma.

Permitted ordinary background: finite-state Markov chains and their strong Markov property; bounded Dynkin martingales and optional stopping; basic compactness and Stone–Weierstrass; Prokhorov and Skorokhod representation for Polish spaces; the Aldous tightness criterion in Skorokhod space; elementary properties of J_1 convergence; uniqueness of Laplace transforms, which may also be proved directly. No promoted campaign result is assumed.
