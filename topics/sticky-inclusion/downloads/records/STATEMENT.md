# Frozen statement — version 1

Status: candidate. This file specifies the target; it does not assert that the convergence has been proved.

Scope authorization: the user's latest clarification is “for the moment i think finite stack initial conditions are sufficient”. This fixes the finite-stack scope of the preceding Kim–Landim extension. Do not change this statement to fit a result.

## Microscopic system

For every positive integer \(N\), let \(L_N\) be a positive integer and \(d_N>0\). Assume
\[
N/L_N\longrightarrow\rho\in(0,\infty),
\qquad Nd_N\longrightarrow\Theta\in(0,\infty).
\]
Write \(\alpha=\Theta/\rho\), so \(L_Nd_N\to\alpha\), and let \(\mathbb T=\mathbb R/\mathbb Z\) with normalized Haar measure \(\lambda\).

The discrete torus is \(\mathbb T_{L_N}=\mathbb Z/(L_N\mathbb Z)\). The configuration space is
\[
\Omega_N=\{\eta\in\mathbb N_0^{\mathbb T_{L_N}}:\sum_x\eta_x=N\}.
\]
The process in the theorem is already accelerated: its generator is
\[
\mathcal L_N F(\eta)=\frac{N^2}{d_N}
 \sum_{x\in\mathbb T_{L_N}}\sum_{y=x\pm1}
 \eta_x(d_N+\eta_y)\,[F(\eta-\delta_x+\delta_y)-F(\eta)].
\]
Both directed nearest-neighbor jumps occur in this sum. A single particle has limiting generator \(\rho^2\partial_{xx}\). The notation \(d_N\), rather than the manuscript's acceleration \(\theta_N\), denotes the small parameter. Only the eventually nondegenerate tori \(L_N\ge3\) matter.

Define
\[
\Phi_N(\eta)=\frac1N\sum_x\eta_x\delta_{x/L_N},
\qquad \mu_N(t)=\Phi_N(\eta_N(t)).
\]
The target concerns this full probability-measure-valued process, not a trace, ranked masses alone, finitely many physical tags, or a fixed collection of moments.

## Initial conditions and quantifiers

For every fixed integer \(k\ge1\), allow every deterministic sequence \(\eta_N^0\in\Omega_N\) whose occupied sites number at most \(k\) and are isolated as in Kim–Landim: two distinct occupied sites have circular lattice distance at least two. Assume only that
\[
\Phi_N(\eta_N^0)\longrightarrow\mu_0
\]
weakly in \(\mathcal P(\mathbb T)\).

Thus \(\mu_0\) is a probability measure with at most \(k\) atoms. No uniform positive lower bound on the occupied masses divided by \(N\) is imposed; some initial stacks may have vanishing normalized mass. No positive lower bound on macroscopic separations is imposed; initially different sites may converge to the same point. Initial sequences need not be stationary or absolutely continuous relative to any reference measure. The statement quantifies over all fixed \(k\), all parameter sequences above, and all such initial sequences. It does not require initial support sizes growing without bound.

## Exact continuum target

The target is fixed by the Brownian sticky-flow semigroups below, rather than by pairwise stickiness alone.

For \(n\ge1\), let \(\Pi_n\) be all set partitions of \(\{1,\dots,n\}\). For \(\pi\in\Pi_n\), let \(\iota_\pi:\mathbb T^{|\pi|}\to\mathbb T^n\) assign a common coordinate to all indices in each block. The choice of block enumeration has no effect below. Set
\[
p_\alpha(\pi)=
\frac{\alpha^{|\pi|}\Gamma(\alpha)}{\Gamma(\alpha+n)}
\prod_{B\in\pi}(|B|-1)!,
\quad
m_{\alpha,n}=\sum_{\pi\in\Pi_n}p_\alpha(\pi)
(\iota_\pi)_*\lambda^{\otimes|\pi|}.
\]
Let \(P_t^{(n)}\) be the continuous-path Feller semigroup in the Le Jan–Raimond Brownian sticky-flow construction corresponding to the closed form obtained from
\[
\mathcal E_n(f,g)=
\rho^2\sum_{\pi\in\Pi_n}p_\alpha(\pi)
\int_{\mathbb T^{|\pi|}}
\nabla(f\circ\iota_\pi)\cdot\nabla(g\circ\iota_\pi)
\,d\lambda^{\otimes|\pi|}
\]
on smooth periodic functions, closed in its form norm on \(L^2(m_{\alpha,n})\).

This fixes the target identity and time normalization. The reference is Le Jan–Raimond, “Sticky flows on the circle”, arXiv:math/0211387, https://arxiv.org/abs/math/0211387; Le Jan–Lemaire, “Products of Beta matrices and sticky flows”, arXiv:math/0307106, https://arxiv.org/abs/math/0307106, also specifies these semigroups. The cited construction and precise conventions must be checked as mathematical background during the campaign.

The corresponding Feller mass-process semigroup \(\mathsf P_t\) on \(\mathcal P(\mathbb T)\) is characterized on polynomials by
\[
F_f(\mu)=\int f\,d\mu^{\otimes n},
\qquad
\mathsf P_t F_f(\mu)=\int P_t^{(n)}f\,d\mu^{\otimes n}.
\]
Let \(Q_{\mu_0}\) denote its continuous-path law started at \(\mu_0\). Equivalently, this is transport of \(\mu_0\) by the corresponding random transition kernel. All initial atoms use the same flow; evolving them with independent flows would define a different target.

The form above defines the target only. The requested convergence proof must use a path-law argument with appropriate tightness and identification; a Mosco-convergence proof is excluded by the user's earlier instruction. A claimed \(L^2\) or equilibrium semigroup limit is not the requested output.

## Exact claim to prove or refute

For every choice covered above,
\[
\operatorname{Law}_{\eta_N^0}(\mu_N(\cdot))
\Longrightarrow Q_{\mu_0}
\quad\hbox{in }D([0,\infty),\mathcal P(\mathbb T)),
\]
where \(\mathcal P(\mathbb T)\) has its weak topology and the path space has the Skorokhod \(J_1\) topology. The target law is supported on \(C([0,\infty),\mathcal P(\mathbb T))\).

A proof must address prescribed initial configurations, the full mass law, all finite time horizons, tightness, and unique identification. A refutation must give a completely specified sequence satisfying all hypotheses and prove failure of this exact conclusion (including verification of the target used in the comparison).

## Success criteria and excluded substitutes

Completion requires a complete proof or refutation of the exact claim at promoted status after the user's leakage check, hostile audit, proof-blind reconstruction, and comparison cadence, including all required supplemental audits. If an eligible outside-family verifier is available, run that additional audit; otherwise disclose its absence prominently and deliver at promoted status.

Special-case results, reductions to another unproved conjecture, calculations through any fixed size, equilibrium results, and uncertified candidate counterexamples do not complete the campaign. Partial lemmas may be promoted as dependencies but are not the endpoint. Mathematical status may never exceed the weakest premise used.

This version is fixed. Any genuine ambiguity discovered later must be referred to the user; do not silently reinterpret or edit the target.

