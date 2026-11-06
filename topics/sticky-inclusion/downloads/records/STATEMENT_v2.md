# Statement: arbitrary initial mass profiles


For each positive integer \(N\), let \(L_N\) be a positive integer and let \(d_N>0\).
Assume
\[
\frac{N}{L_N}\longrightarrow\rho\in(0,\infty),
\qquad
Nd_N\longrightarrow\Theta\in(0,\infty).
\]
Set \(\alpha=\Theta/\rho\), so that \(L_Nd_N\to\alpha\).
Let \(\mathbb T=\mathbb R/\mathbb Z\), and let \(\lambda\) be its normalized Haar measure.
Define
\[
\mathbb T_{L_N}=\mathbb Z/(L_N\mathbb Z),
\qquad
\Omega_N=
\left\{\eta\in\mathbb N_0^{\mathbb T_{L_N}}:
\sum_{x\in\mathbb T_{L_N}}\eta_x=N\right\}.
\]
Let \(\eta_N\) be the continuous-time Markov chain on \(\Omega_N\) with generator
\[
\mathcal L_NF(\eta)=\frac{N^2}{d_N}
\sum_{x\in\mathbb T_{L_N}}\sum_{y=x\pm1}
\eta_x(d_N+\eta_y)
\bigl[F(\eta-\delta_x+\delta_y)-F(\eta)\bigr].
\]
The sum includes both directed nearest-neighbor jumps.
The generator includes the acceleration \(N^2/d_N\).
Since \(L_N\to\infty\), only tori with \(L_N\ge3\) affect the limit.
The limiting one-particle generator is \(\rho^2\partial_{xx}\).
Define the empirical mass map and its process by
\[
\Phi_N(\eta)=\frac1N\sum_{x\in\mathbb T_{L_N}}
\eta_x\delta_{x/L_N},
\qquad
\mu_N(t)=\Phi_N(\eta_N(t)).
\]

For \(n\ge1\), let \(\Pi_n\) be the set of partitions of \(\{1,\ldots,n\}\).
For \(\pi\in\Pi_n\), let
\(\iota_\pi:\mathbb T^{|\pi|}\to\mathbb T^n\)
assign one common coordinate to all indices in each block.
The formulas below do not depend on the order of the blocks.
Set
\[
p_\alpha(\pi)=
\frac{\alpha^{|\pi|}\Gamma(\alpha)}{\Gamma(\alpha+n)}
\prod_{B\in\pi}(|B|-1)!,
\qquad
m_{\alpha,n}=
\sum_{\pi\in\Pi_n}p_\alpha(\pi)
(\iota_\pi)_*\lambda^{\otimes|\pi|}.
\]
On smooth periodic functions, define
\[
\mathcal E_n(f,g)=
\rho^2\sum_{\pi\in\Pi_n}p_\alpha(\pi)
\int_{\mathbb T^{|\pi|}}
\nabla(f\circ\iota_\pi)\cdot\nabla(g\circ\iota_\pi)
\,d\lambda^{\otimes|\pi|}.
\]
Close this form in its form norm on \(L^2(m_{\alpha,n})\).
Let \(P_t^{(n)}\) be the associated continuous-path Feller semigroup from the Le Jan–Raimond Brownian sticky-flow construction.
These forms fix the target and its time scale.
See Le Jan and Raimond, [Sticky flows on the circle](https://arxiv.org/abs/math/0211387), and Le Jan and Lemaire, [Products of Beta matrices and sticky flows](https://arxiv.org/abs/math/0307106).

The Feller mass-process semigroup \(\mathsf P_t\) on \(\mathcal P(\mathbb T)\) is specified by
\[
F_f(\mu)=\int_{\mathbb T^n}f\,d\mu^{\otimes n},
\qquad
\mathsf P_tF_f(\mu)=
\int_{\mathbb T^n}P_t^{(n)}f\,d\mu^{\otimes n},
\qquad f\in C(\mathbb T^n),\quad n\ge1.
\]
Let \(Q_{\mu_0}\) be its continuous-path law with initial state \(\mu_0\).
Equivalently, the corresponding random transition kernel \(K_{0,t}\) gives
\[
\mu_t(A)=\int_{\mathbb T}K_{0,t}(x,A)\,\mu_0(dx)
\]
for Borel sets \(A\subseteq\mathbb T\).
The same random kernel flow acts on the entire initial measure.

**Theorem 1 (full mass path convergence).**
For every parameter sequence specified above, take any deterministic sequence \(\eta_N^0\in\Omega_N\).
Assume only that, for some \(\mu_0\in\mathcal P(\mathbb T)\),
\[
\Phi_N(\eta_N^0)\longrightarrow\mu_0
\quad\text{weakly in }\mathcal P(\mathbb T).
\]
Then
\[
\operatorname{Law}_{\eta_N^0}\bigl(\mu_N(\cdot)\bigr)
\Longrightarrow Q_{\mu_0}
\quad\text{in }D([0,\infty),\mathcal P(\mathbb T)).
\]
Here \(\mathcal P(\mathbb T)\) has its weak topology, and the path space has the Skorokhod \(J_1\) topology.
Moreover,
\[
Q_{\mu_0}\bigl(C([0,\infty),\mathcal P(\mathbb T))\bigr)=1.
\]

The limit \(\mu_0\) may be atomic, singular continuous, or absolutely continuous.
There is no restriction on the number of initial occupied sites or their lattice separation.
The conclusion also holds for random initial configurations if \(\mu_N(0)\) converges in law to the deterministic measure \(\mu_0\).
No stationarity or absolute-continuity assumption on the microscopic initial law is required.
