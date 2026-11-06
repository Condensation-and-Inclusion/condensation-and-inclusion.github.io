# C0006 uniform positive thin-layer occupation — exact contract v1

Status: candidate. This is a standalone finite-system lemma, not a claim of completion of STATEMENT-v1. No promoted campaign result is a premise.

For every integer \(L\ge3\), let \(\mathbb T_L=\mathbb Z/(L\mathbb Z)\). For \(x,y\in\mathbb T_L\), define
\[
\operatorname{dist}_L(x,y)=\min\{r,L-r\},
\]
where \(r\in\{0,\ldots,L-1\}\) represents \(y-x\) modulo \(L\).

For every integer \(n\ge2\), the labelled state space is \(\mathbb T_L^n\). If \(z=(z_1,\ldots,z_n)\), then \(z+\varepsilon e_i\) means adding \(\varepsilon\in\{-1,1\}\) to coordinate \(i\), modulo \(L\), leaving all other coordinates unchanged. On real functions \(F:\mathbb T_L^n\to\mathbb R\), define
\[
R_nF(z)=\sum_{i=1}^n\sum_{\varepsilon\in\{-1,1\}}
[F(z+\varepsilon e_i)-F(z)]
\]
and
\[
I_nF(z)=\sum_{i=1}^n\sum_{\varepsilon\in\{-1,1\}}
\sum_{\substack{j=1\\j\ne i}}^n
\mathbf 1_{\{z_j=z_i+\varepsilon\}}
[F(z+\varepsilon e_i)-F(z)].
\]
For every \(q>0\) and \(d>0\), let \(Z=(Z_t)_{t\ge0}\) be the continuous-time Markov chain with generator
\[
G_n=q(R_n+d^{-1}I_n).
\]
Thus each label has independent rate \(q\) to each of its two neighboring sites, plus rate \(q/d\) for each other label occupying the destination site. Both directions occur once; for \(L=3\) they are distinct. The parameters \(n\) and \(q\) are independent, with no scaling relation imposed.

For every integer \(k\) with \(1\le k<L/2\), define the positive-layer pair count
\[
B_k(z)=\sum_{1\le i<j\le n}
\mathbf 1_{\{0<\operatorname{dist}_L(z_i,z_j)\le k\}}.
\]
Pairs at equal sites are excluded.

For every deterministic initial state \(z\in\mathbb T_L^n\), and also for every initial distribution on that state space, equip the chain with its completed right-continuous natural filtration \((\mathcal F_t)_{t\ge0}\). For every deterministic real number \(\delta\ge0\) and every pair of bounded nonnegative stopping times \(\tau,\sigma\) satisfying
\[
\tau\le\sigma\le\tau+\delta\quad\hbox{almost surely},
\]
prove the conditional inequality
\[
\mathbb E\left[\int_\tau^\sigma B_k(Z_s)\,ds
\;\middle|\;\mathcal F_\tau\right]
\le
\binom n2\left[
\frac{2k\delta}{L+1/d}+\frac{Lk}{q}
\right]
\quad\hbox{almost surely}.
\]

The bound has exactly the displayed constants and is uniform over all the stated parameters, initial states or distributions, and stopping times. No equilibrium, separated-start, or autonomy assumption for selected physical labels is permitted.

Required proof output: a complete finite pair Poisson-equation argument and an internally proved exact averaged factorial identity transferring its symmetric pair observable to the labelled \(n\)-particle generator, followed by the conditional stopping-time argument. Preserve the common rate parameter \(q\), the \(L=3\) edge multiplicity, and the exclusion of equality. There are no promoted dependencies, and no mathematical assertion from C0004 or the author's earlier R04 work may be used without proof inside this candidate.
