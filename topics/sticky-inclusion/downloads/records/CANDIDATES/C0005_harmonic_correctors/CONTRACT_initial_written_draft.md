# C0005 constructive harmonic-corrector contract — v1

Status: **candidate**. This is an R01 auxiliary theorem on the line lattice. It does not assert any convergence in STATEMENT.md, validate another candidate, or use any promoted campaign dependency. All assertions below require internal proofs. The constants in this contract are uniform in lattice positions, separations, partitions, label subsets, and the test function subject to its stated Lipschitz bound.

## Objects and quantifiers

Fix an arbitrary integer \(n\ge2\). Let \(E_n=\mathbb Z^n\), let \(e_i\) be the coordinate unit vectors, and set \(\eta_x(z)=|\{i:z_i=x\}|\). On functions on \(E_n\), define
\[
Rv(z)=\sum_{i=1}^n\sum_{\epsilon\in\{-1,1\}}[v(z+\epsilon e_i)-v(z)],
\]
\[
Iv(z)=\sum_{i=1}^n\sum_{\epsilon\in\{-1,1\}}\sum_{j\ne i}
\mathbf1_{\{z_j=z_i+\epsilon\}}[v(z+\epsilon e_i)-v(z)].
\]
Let \(S_n\) be the tuples with no adjacent distinct occupied sites. For the continuous-time chain with generator \(I\), let \(\tau\) be its first entrance in \(S_n\), including time zero, and define the absorption extension and killed potential by
\[
Pb(z)=\mathbb E_z b(X_\tau),\qquad
Uv(z)=\mathbb E_z\int_0^\tau v(X_s)\,ds.
\]
Here \(b\) is initially a bounded function on \(S_n\), and \(v\) is bounded on \(E_n\setminus S_n\); killed potentials are extended by zero on \(S_n\). Absorption extensions also apply to the functions of at most linear growth occurring below. Put
\[
Qb=(RPb)|_{S_n},\qquad Bb=(RURPb)|_{S_n}.
\]
In the second expression \(U\) uses the restriction of \(RPb\) to \(E_n\setminus S_n\). Let \(Y\) denote the \(Q\)-chain, let \(K(z)\) be the number of occupied sites in \(z\in S_n\), and let \(C_n^{\mathrm{near}}\subset S_n\) consist of tuples with two occupied sites at distance two. Set
\[
c_n=\frac{n(n-1)}4,\qquad a_n=4n^2(n-1),\qquad d_n=\frac1{8nc_n}.
\]

A chamber-affine function means a continuous function \(f:\mathbb R^n\to\mathbb R\) whose restriction to each closed coordinate-order chamber is affine. This includes the chamber-linear functions and their additive constants. Let \(D\ge0\), and require
\[
|f(x)-f(y)|\le D\sum_{i=1}^n|x_i-y_i|\qquad(x,y\in\mathbb R^n).
\]
For its restriction to \(S_n\), define the canonical correction, whenever the integral is absolutely integrable, by
\[
\psi_f(z)=\mathbb E_z\int_0^\infty Qf(Y_s)\,ds,\qquad H_f(z)=f(z)+\psi_f(z).
\]

For every set partition \(\pi\) of \(\{1,\ldots,n\}\), choose distinct integers \(x_B\), \(B\in\pi\), and let \(z_i=x_B\) for \(i\in B\). For \(\varnothing\ne A\subsetneq B\), define \(v_{A,B}\in\mathbb R^n\) to equal minus one on \(A\), plus one on \(B\setminus A\), and zero off \(B\), and put
\[
\kappa_{A,B}=\frac{(|A|-1)!(|B|-|A|-1)!}{(|B|-1)!},\qquad
\partial_v f(z)=\lim_{t\downarrow0}\frac{f(z+tv)-f(z)}t.
\]
These directional derivatives exist for the specified functions. Sums over proper nonempty subsets of singleton blocks are zero. Every oriented subset is counted separately.

For \(0<d\le d_n\), let \(P_d,U_d,\tau_d\) be the analogous absorption extension, killed potential, and first entrance time for \(I+dR\), and define
\[
T_d=(RP_d)|_{S_n}.
\]
Let \(R^0\) denote \(R\) acting on zero extensions of bounded functions on \(E_n\setminus S_n\), then restricted back to this complement. Operator norms below are supremum norms. Write \(T_0=Q\). For \(f_i(x)=x_i\), set \(H_i=H_{f_i}\), and define
\[
\Gamma_d^{ij}(z)=\sum_{y\in S_n,\ y\ne z}T_d(z,y)
[H_i(y)-H_i(z)][H_j(y)-H_j(z)]
\qquad(0\le d\le d_n).
\]

## Required conclusions

There exist finite constants \(C_n\ge1\) and, for every real \(p\ge1\), \(C_{n,p}\ge1\), depending only on the displayed indices, for which all the following assertions hold simultaneously.

1. Absorption is almost sure and \(\sup_{z\in E_n}\mathbb E_z\tau\le c_n\), \(\|U\|\le c_n\), \(\|P\|\le1\). The operator \(Q\) is a conservative jump generator of total rate at most \(2n\), and every nonzero off-diagonal \(Q\)-transition moves each label by at most two sites. Moreover,
   \[
   QK\le-\mathbf1_{C_n^{\mathrm{near}}},\qquad
   \sup_z\mathbb E_z\int_0^\infty\mathbf1_{C_n^{\mathrm{near}}}(Y_s)\,ds\le n-1,
   \]
   \[
   \sup_z\mathbb E_z\left(\int_0^\infty\mathbf1_{C_n^{\mathrm{near}}}(Y_s)\,ds\right)^2\le2(n-1)^2,
   \qquad
   \mathbb E_z\sup_{0\le s\le t}\max_i|Y_i(s)-z_i|^2\le C_n(t+1)
   \]
   for every \(z\in S_n\) and \(t\ge0\).

2. For every \(f,D\) above, the defining potential is absolutely integrable, and
   \[
   \|\psi_f\|_\infty\le a_nD,\qquad QH_f=0,\qquad
   \|RPH_f\|_\infty+\|BH_f\|_\infty\le C_nD.
   \]
   The maps \(f\mapsto\psi_f\) and \(f\mapsto H_f\) are linear. For any coordinate permutation followed by a common integer translation \(g:E_n\to E_n\), \(H_{f\circ g}=H_f\circ g\). The correction vanishes on every full-stack tuple. It vanishes identically for every function \(f(x)=b+a\sum_i x_i\), and \(BH_f=0\) for those functions.

3. For every real \(R_*\ge16\), every partition and tuple defined above with \(|x_B-x_{B'}|\ge16R_*\) for different blocks, and every allowed \(f\),
   \[
   \left|BH_f(z)-\sum_{B\in\pi}\sum_{\varnothing\ne A\subsetneq B}
   \kappa_{A,B}\partial_{v_{A,B}}f(z)\right|\le C_nD R_*^{-1/8}.
   \]
   For a single full block the displayed expression inside absolute values is exactly zero, without a separation parameter. No exact formula at arbitrary finite separations is asserted.

4. The covariance series converge absolutely. They satisfy
   \[
   \sup_{z,i,j}|\Gamma_d^{ij}(z)|\le C_n,\qquad
   \sup_{z,i,j}|\Gamma_d^{ij}(z)-\Gamma_0^{ij}(z)|\le C_nd
   \quad(0<d\le d_n).
   \]
   At every separated-block tuple in conclusion 3,
   \[
   |\Gamma_0^{ij}(z)-2\mathbf1_{\{z_i=z_j\}}|\le C_nR_*^{-1/2},\qquad
   |\Gamma_d^{ij}(z)-2\mathbf1_{\{z_i=z_j\}}|\le C_n(R_*^{-1/2}+d).
   \]

5. For every \(0<d\le d_n\), absorption for \(I+dR\) is almost sure,
   \[
   U_d=(\operatorname{Id}-dUR^0)^{-1}U,\qquad
   \|U_d\|\le2c_n,\qquad \|U_d-U\|\le8nc_n^2d.
   \]
   The inverse is its norm-convergent Neumann series. The chain with generator \(R+d^{-1}I\), observed in its time spent in \(S_n\), has conservative generator \(T_d\) and total rate at most \(2n\). For every bounded \(b:S_n\to\mathbb R\), the following are exact identities with zero boundary values for the differences:
   \[
   P_db-Pb=dU_dRPb,
   \]
   \[
   T_db=Qb+dBb+d^2(RU_dR^0URPb)|_{S_n}.
   \]
   The same identities hold with \(b=H_f\), whose absorption expectations are finite. Consequently
   \[
   \|T_dH_f-dBH_f\|_\infty\le C_nDd^2,\qquad
   \|T_dH_f\|_\infty\le C_nDd.
   \]

6. Fix any \(z\in S_n\) and any initiating independent step \(w=z+\epsilon e_i\). Run \(I+dR\) from \(w\) until its first entrance in \(S_n\), and count by \(J\) the independent \(dR\)-events before that entrance. If \(w\in S_n\), this excursion has duration zero and \(J=0\). Including the initiating step and writing \(X\) for this excursion path,
   \[
   \mathbb P(J\ge j)\le(2nc_nd)^j\quad(j\in\mathbb N_0),\qquad
   \max_i\sup_{0\le s\le\tau_d}|X_i(s)-z_i|\le n+J
   \quad\hbox{almost surely}.
   \]
   Uniformly over these choices and over \(0<d\le d_n\),
   \[
   \mathbb E(1+J)^p\le C_{n,p},\qquad
   \mathbb E[(1+J)^p\mathbf1_{\{J\ge1\}}]\le C_{n,p}d.
   \]
   For every initial tuple \(x\in E_n\), not only initiating-step states,
   \[
   \mathbb E_x\tau_d^p\le C_{n,p}.
   \]
   In particular, for every allowed \(f\), every \(z\in S_n\), and \(0\le d\le d_n\),
   \[
   \sum_{y\in S_n,\ y\ne z}T_d(z,y)|H_f(y)-H_f(z)|^p\le C_{n,p}D^p.
   \]

## One-label convention

For \(n=1\), take \(S_1=\mathbb Z\), \(I=0\), \(P=P_d=\operatorname{Id}\), \(U=U_d=0\), \(Q=T_d=R\), \(B=0\), and \(d_1=1\). A chamber-affine \(f\) is affine on \(\mathbb R\), so \(H_f=f\). The near set is empty, the occupation integrals are zero, the separated split sum is empty, \(\Gamma_d^{11}=2\), and all expansion identities hold exactly. Excursions have \(\tau_d=J=0\); the initiating displacement is one. The displacement and trace jump moment bounds hold with finite constants depending only on their stated indices. This convention is part of the claimed theorem.
