# C0005 constructive harmonic correctors — proof v1

Status: **candidate**. This is an author extraction and internal re-check of the construction in Sections 1–6 of C0004 PROOF_v1.md, not an independent verification of C0004. Its exact claim is CONTRACT_v1.md in this directory. No C0004 conclusion is invoked as a theorem. Every assertion used in this proof is proved here; there are no promoted campaign dependencies and no external literature premises. In particular, this document proves no assertion about the mass-process convergence in STATEMENT.md.

All notation has the meaning in the contract. Until the last section, \(n\ge2\). A constant denoted \(C_n\) may be enlarged finitely many times; each enlargement depends only on \(n\). Likewise \(C_{n,p}\) depends only on \(n,p\). These conventions produce simultaneous constants by taking the maximum of the finitely many constants required below. All chains used below have bounded total rates for fixed \(n,d\); they can be constructed with exponential clocks and have no explosion. Compensating their jump counts gives the stopped Dynkin identities and square-martingale identities used below. Whenever stopping is unbounded, integrability or a bounded approximation is supplied.

## 1. Pure interaction and the leading trace

Interaction jumps only into already occupied sites. The set of occupied sites therefore decreases. From any initial tuple, the chain stays on a finite set of at most \(n\) sites, and within each connected component of that initial set. Each component is an interval of length at most \(n\). In particular every label remains within distance \(n-1\) of its starting site. For
\[
V(z)=\sum_x\eta_x(z)^2,
\]
an interaction edge whose endpoint masses are \(a,b>0\) has two directed occupation jumps, each of rate \(ab\). Their changes of \(V\) are \(2(b-a+1)\) and \(2(a-b+1)\), whose sum is four. Consequently
\[
IV(z)=4\sum_{\{x,x+1\}}\eta_x(z)\eta_{x+1}(z)
\ge4\mathbf1_{S_n^c}(z).
\]
Here \(n\le V\le n^2\). Dynkin's identity stopped at \(t\wedge\tau\) yields \(4\mathbb E_z(t\wedge\tau)\le n^2-n\). Monotone convergence proves almost sure absorption and the bound \(\mathbb E_z\tau\le c_n\). It also proves \(\|U\|\le c_n\); the absorption expectation is a contraction on bounded functions. The finite initial-site observation proves finiteness of \(Pb(z)\) whenever \(b\) has at most linear growth.

Starting in \(S_n\), perform an independent jump at total attempt rate \(2n\) and then perform pure interaction until absorption. This defines a probability endpoint kernel for each attempt and the generator \(Q=RP|_{S_n}\). Self-return attempts are ignored in its off-diagonal rates. Thus \(Q\) is conservative and has total rate at most \(2n\). The independent step can create an occupied connected component on at most three consecutive sites: the source, its chosen neighbor, and possibly the site at distance two in that direction. Every other site is unaffected. This remains true if the source site is emptied. Absorption in that component moves every participating label by at most two sites. This proves the claimed jump bound.

A component on three consecutive sites absorbs on either one site or its two endpoints; a component on two sites absorbs on one site. Thus an independent attempt followed by absorption cannot increase the number \(K\) of stacks. Suppose specifically that occupied sites at zero and two have masses \(a,b\). The total rate of attempts into the intervening site is \(a+b\). After each such attempt the intervening population is one. For pure interaction, the population of any specified site is a martingale: across each edge its upward and downward changes both have rate equal to the product of the endpoint masses. At absorption the intervening population is either zero or \(a+b\). Bounded optional stopping therefore gives probability \(1/(a+b)\) of a full stack there. The rate of this particular merger is one. Selecting any distance-two pair proves
\[
QK\le-\mathbf1_{C_n^{\mathrm{near}}}.
\]
Dynkin's identity for the bounded function \(K\), then monotone convergence, gives, for every \(z\in S_n\),
\[
\mathbb E_z A\le n-1,\qquad
A=\int_0^\infty\mathbf1_{C_n^{\mathrm{near}}}(Y_s)\,ds.
\]
Tonelli's theorem and the Markov property give
\[
\mathbb E_z A^2
=2\mathbb E_z\int_0^\infty \mathbf1_{C_n^{\mathrm{near}}}(Y_s)
\mathbb E_{Y_s}A\,ds
\le2(n-1)^2.
\]
The equality follows first on finite integration rectangles, whose time diagonal has Lebesgue measure zero, then by monotone convergence. It does not require integrability before this argument.

Outside \(C_n^{\mathrm{near}}\), each stack moves one site in each direction at rate one. Indeed, a stack of size \(a\) initiates a specified directional attempt at rate \(a\); its two-site interaction chain ends at the new site with probability \(1/a\), by the same population martingale. No other stack can interact with it. Otherwise the endpoint is the original tuple. In particular \(Qz_i=0\) off the near set, \(|Qz_i|\le4n\) everywhere, and its compensated-coordinate martingale \(M_i\) has square bracket density at most \(8n\). Localization, followed by the bounded jump-rate estimates, gives \(\mathbb E M_i(t)^2\le8nt\) and the square maximal inequality gives \(\mathbb E\sup_{s\le t}|M_i(s)|^2\le32nt\). Hence
\[
Y_i(t)-z_i=M_i(t)+\int_0^t Qz_i(Y_s)\,ds,
\]
and the preceding bound on \(A^2\) proves
\[
\mathbb E_z\sup_{s\le t}\max_i|Y_i(s)-z_i|^2\le C_n(t+1).
\tag{1}
\]
This argument does not use consistency under deletion of labels.

## 2. Construction and basic identities

Continuity of a chamber-affine function implies that its chamber formulas have the common intercept \(f(0)\). On any region with a fixed ordering of the stacks, translating a stack by plus or minus one, without passing another stack, stays in one closed coordinate-order chamber. The two centered affine increments cancel. By Section 1 this applies to every \(Q\)-move outside the near set. Also a \(Q\)-move changes the sum distance by at most \(2n\). Thus
\[
|Qf|\le4n^2D\mathbf1_{C_n^{\mathrm{near}}}.
\tag{2}
\]
Section 1 now gives absolute integrability of the defining potential and
\[
\|\psi_f\|_\infty\le4n^2D(n-1)=a_nD.
\tag{3}
\]
The Markov property gives, for every \(t\ge0\),
\[
\psi_f=\int_0^t e^{sQ}Qf\,ds+e^{tQ}\psi_f.
\]
The operator \(Q\) is bounded on bounded functions, with norm at most \(4n\), so its exponential is differentiable in this norm. Differentiating the last identity at zero yields \(Q\psi_f=-Qf\). The formula defining \(Qf\) is a finite sum of finite absorption expectations, even if \(f\) is unbounded. Consequently \(QH_f=0\) pointwise; no unbounded-function semigroup domain is being asserted.

Linearity follows from the absolutely integrable defining integral. The independent and interaction clocks, their absorption kernels, the near set, and \(Q\) commute with coordinate permutations and common integer translations. Applying such a map to the defining integral proves the claimed covariance of \(H\). If the initial tuple is a full stack, the \(Q\)-chain remains a full stack forever; the restriction of \(f\) to the common diagonal is affine, so \(Qf=0\) there and \(\psi_f=0\) there.

For \(g(x)=\sum_i x_i\), one has \(Rg=0\). The two directed interaction occupation jumps on each edge have opposite changes of \(g\) and equal rates, so \(Ig=0\). Its pure-interaction path is bounded relative to its initial value by the finite-site argument; optional stopping gives \(Pg=g\). Hence \(Qg=RPg=0\), \(\psi_g=0\), and \(Bg=RURPg=0\). Linearity includes additive constants and every multiple of \(g\).

For later use, an absorption endpoint from any \(x\in E_n\) has sum distance at most \(n(n-1)\) from \(x\). Therefore, for neighboring tuples \(x,x+\epsilon e_i\),
\[
|PH_f(x+\epsilon e_i)-PH_f(x)|
\le D[2n(n-1)+1]+2a_nD.
\]
Writing
\[
A_n=2n[2n(n-1)+1+2a_n],
\]
we obtain
\[
\|RPH_f\|_\infty\le A_nD,\qquad
\|BH_f\|_\infty\le4nc_nA_nD.
\tag{4}
\]
This proves all the basic corrector assertions and bounds.

## 3. Actual perturbed excursions and the exact expansion

This section is placed before the factorial calculation so that coefficient comparisons below have an already proved expansion. Fix \(0<d\le d_n\) and put \(q=2nc_nd\le1/4\). Realize \(I+dR\) by pure-interaction clocks and an independent rate-\(2nd\) clock with uniformly selected label and direction. From any state, the probability that this independent clock rings before pure-interaction absorption is
\[
\mathbb E(1-e^{-2nd\tau})\le2nd\mathbb E\tau\le q.
\tag{5}
\]
Restart after each such event if the new state has not already entered \(S_n\). The strong Markov property and (5) prove \(\mathbb P(J\ge j)\le q^j\), both for excursions after an initiating step and for the corresponding count from an arbitrary starting state. Each interval between restarts has expected length at most \(c_n\). Summing its expectation on the event that it is reached gives
\[
\sup_x\mathbb E_x\tau_d\le\frac{c_n}{1-q}\le2c_n.
\tag{6}
\]
In particular absorption is almost sure. Applying Markov's inequality conditionally at deterministic times \(4c_n,8c_n,\ldots\) gives
\[
\sup_x\mathbb P_x(\tau_d>4c_n k)\le2^{-k}\qquad(k\in\mathbb N_0).
\]
Integrating this tail against \(pt^{p-1}\) proves \(\sup_x\mathbb E_x\tau_d^p\le C_{n,p}\) for every real \(p\ge1\).

There is a useful pathwise displacement bound. Take all initially occupied sites and all sites newly occupied by independent events, including the initiating event when present. Interaction never adds to this set. With an initiating event and \(J\) further independent events its cardinality is at most \(n+1+J\). A label's nearest-neighbor trajectory stays in the connected component of this set containing its initial site. On the line every such component is an interval of diameter at most \(n+J\). This proves the asserted pathwise excursion bound, even if previously separate occupied components become joined. Without an initiating event the same argument gives diameter at most \(n-1+J\).

For every real \(p\ge1\), the geometric tail gives
\[
\mathbb E[(1+J)^p\mathbf1_{\{J\ge1\}}]
\le\sum_{j=1}^\infty(1+j)^p q^j
\le q\sum_{j=1}^\infty(1+j)^p4^{1-j}\le C_{n,p}d.
\tag{7}
\]
Adding the event \(J=0\) proves the other claimed moment bound.

On bounded functions on the complement of \(S_n\), the potential \(U_d\) in (6) solves the killed Dirichlet equation
\[
-(I^0+dR^0)U_dv=v.
\]
One can obtain this equation directly by conditioning on the first holding time and jump; bounded total rates and (6) justify that conditioning. For any bounded function \(w\) with zero boundary values, stopped Dynkin for pure interaction gives \(U(-I^0w)=w\); the terminal boundary value is zero and bounded convergence applies at absorption. Apply this identity to \(w=U_dv\) to obtain
\[
U_dv=Uv+dUR^0U_dv.
\]
Since \(\|R^0\|\le4n\) and \(4ndc_n\le1/2\), this proves the norm-convergent Neumann identity and bounds
\[
U_d=(\operatorname{Id}-dUR^0)^{-1}U,
\quad \|U_d\|\le2c_n,
\quad \|U_d-U\|\le8nc_n^2d.
\tag{8}
\]
The same series gives the exact resolvent identity
\[
U_d-U=dU_dR^0U.
\tag{9}
\]

For bounded boundary data \(b\), its pure absorption extension satisfies \(IPb=0\) off \(S_n\). Stopped Dynkin for \(Pb\) under \(I+dR\), with (6) and bounded convergence, yields
\[
P_db-Pb=dU_dRPb.
\tag{10}
\]
For \(b=H_f\), (4) bounds its residual, and the neighboring-increment bound preceding (4) bounds all increments of \(PH_f\). To justify exactly the same stopped calculation, note that the maximum displacement of an excursion from a fixed initial tuple is bounded by \(n-1+J\), whose moments are finite by (7). The neighboring-increment bound bounds \(|PH_f(X_s)-PH_f(X_0)|\) by a constant times this sum distance. Thus the stopped terminal values are uniformly integrable. The integral of its bounded residual is dominated in expectation by (6). Applying Dynkin first at bounded times and finite spatial stopping regions, then removing both stops, proves (10) for \(H_f\). In particular its perturbed absorption expectation is finite.

For the chain with generator \(R+d^{-1}I\), the clock in \(S_n\) initiates independent steps at total rate \(2n\); its excursion absorption distribution is \(P_d\), because multiplying its excursion clock by \(d\) gives \(I+dR\). Consequently its trace generator is \(T_d=RP_d|_{S_n}\), with off-diagonal formula
\[
T_d(z,y)=\sum_{i,\epsilon}P_d(z+\epsilon e_i,y)\qquad(y\ne z).
\tag{11}
\]
It is conservative and has total rate at most \(2n\). The time change is defined for all trace times: at repeated visits to \(S_n\), the independent attempt holding times in \(S_n\) are independent exponential variables of rate \(2n\), and their infinite sum is almost surely infinite. Excursions are almost surely finite by (6). Ignoring self-return attempts changes neither the generator nor this conclusion.

Apply \(R\) to (10), restrict to \(S_n\), and use (9). For bounded \(b\), and also for \(H_f\), this gives the exact expansion
\[
T_db=Qb+dBb+d^2(RU_dR^0URPb)|_{S_n}.
\tag{12}
\]
For bounded \(b\) the remainder operator has norm at most \(128n^3c_n^2d^2\). For \(H_f\), use (4) in place of the bound \(\|RPb\|\le4n\|b\|\) to obtain a remainder at most \(32n^2c_n^2A_nDd^2\). Since \(QH_f=0\) and \(BH_f\) is bounded by (4), this proves both corrector estimates for \(T_d\).

Formula (11), the pathwise excursion bound, and (3) also give every trace jump moment in the contract, because an excursion endpoint \(y\) satisfies
\[
|H_f(y)-H_f(z)|\le Dn(n+J)+2a_nD.
\tag{13}
\]
There are \(2n\) initiating choices. For \(d=0\) the identical argument has \(J=0\).

## 4. Isolated full-block action with labelled factorial coefficients

This section applies the preceding construction with any order \(m\ge2\). Let \(f\) have that order. The gradients on two chambers sharing a facet differ by a multiple of \(e_i-e_j\), where the facet has equation \(x_i=x_j\): their affine difference vanishes on that hyperplane. Adjacent exchanges connect all coordinate orders, so the sum of gradient coordinates is a common number \(\ell\). It follows that
\[
f(x+t\mathbf1)=f(x)+\ell t.
\]
Subtract \(f(0)+(\ell/m)\sum_i x_i\). By Section 2 this does not change \(\psi_f\) or \(BH_f\). The reduced function is translation invariant and vanishes on full stacks. The correction and \(H_f\) are translation invariant as well; for the correction this follows directly from the invariance of \(Qf\). All calculations until restoration of the affine term refer to this reduced function.

Index an oriented two-stack tuple by its nonempty proper left subset \(A\subset\{1,\ldots,m\}\), and write \(H(A,r)\) for its corrected value with left site zero and right site \(r\ge2\). Set
\[
c_A=f(0\mathbf1_A+1\mathbf1_{A^c}),\qquad a_A=H(A,2),\qquad
\kappa_A=\frac{(|A|-1)!(m-|A|-1)!}{(m-1)!}.
\]
For \(r\ge3\), the two stack centers move independently at rate one in each direction. Their gap therefore moves in each direction at rate two, without changing the label subset. Translation invariance and \(QH=0\) give zero second difference in \(r\). A sequence with zero second difference for every \(r\ge3\) is affine on \(r\ge2\): subtract its first two values and induct. Since \(|H(A,r)-rc_A|\) is bounded by (3), its slope is \(c_A\). Thus
\[
H(A,r)=(r-2)c_A+a_A\qquad(r\ge2).
\tag{14}
\]

For the state with left subset \(A\) at zero and its complement at two, define \(K(A,A')\) to be the total rate of inward independent attempts followed by pure-interaction absorption at the same two sites with left subset \(A'\). Include self-return outcomes in \(K(A,A)\). The total inward attempt rate is \(m\). The center-full-stack outcome has rate one by Section 1. Every other outcome is either a full stack at an endpoint or a two-stack outcome counted in \(K\). Hence \(K\) is nonnegative and every row sum is at most \(m-1\). Put \(M=m\operatorname{Id}-K\). It is invertible, as is seen from the convergent series for \((\operatorname{Id}-K/m)^{-1}\). The two outward effective translations at gap two contribute \(2c_A\) to \(QH\), and full-stack outcomes have corrected value zero. The remaining inward contribution is \((Ka)_A-ma_A\). Therefore
\[
Ma=2c.
\tag{15}
\]

We now prove the weighted symmetry used to evaluate this expression. This does not follow from label exchangeability alone. On a finite cycle of length \(L>6m+10\), the labelled generator \(I+dR\) has positive weights
\[
\omega_d(z)=\prod_{x:\eta_x(z)>0}\prod_{r=0}^{\eta_x(z)-1}(d+r).
\tag{16}
\]
For a specified label moving from a site of mass \(a\) to a neighboring site of mass \(b\ge0\), the forward rate is \(d+b\), the reverse rate is \(d+a-1\), and the ratio of the destination weight to the source weight is \((d+b)/(d+a-1)\). Thus every off-diagonal detailed-balance identity holds.

Eliminating the complement of \(S_m\) preserves this weighted symmetry. Here is the finite-matrix verification. Write the generator in blocks for \(S_m\) and its complement \(F\), and let \(\Omega_S,\Omega_F\) be the diagonal matrices of its weights. The killed inverse \((-L_{FF})^{-1}\) exists by absorption, and weighted symmetry of \(L\) implies symmetry of \(\Omega_F(-L_{FF})^{-1}\). The trace matrix is
\[
L_{SS}+L_{SF}(-L_{FF})^{-1}L_{FS}.
\]
Using \(\Omega_SL_{SF}=L_{FS}^{\mathsf T}\Omega_F\) shows that its product on the left by \(\Omega_S\) is symmetric. Dividing this trace matrix by \(d\) gives \(T_d\). Therefore \(\omega_d(z)T_d(z,y)=\omega_d(y)T_d(y,z)\).

All facts needed here on the cycle follow from the same elementary arguments already given. Pure interaction cannot add occupied sites; since \(m<L\), its initial occupied components are paths, and the \(V\) calculation is unchanged. The estimates (5)–(12) apply with the same bounds. In particular the expansion is a convergent bounded-operator expansion, not a formal coefficient comparison. For the tuples now under consideration, its coefficients \(Q\) and \(B\) equal the line coefficients: \(P,U\) involve only initially occupied components; a coefficient of \(Q\) uses at most one independent event and a coefficient of \(B\) at most two. The affected sites lie in the fixed interval obtained from the sites zero and two, or the single site zero, by at most two neighboring additions. No wrap around can occur for the chosen \(L\). Thus the following finite-cycle coefficient comparisons establish identities for the line.

Between two-stack tuples at sites zero and two, compare the coefficient of \(d^2\) in detailed balance. The leading weight is \(d^2(|A|-1)!(m-|A|-1)!\), and the leading trace operator is \(Q\). Off-diagonal transitions keeping these sites and changing the left subset are exactly those in \(K\). Thus
\[
\kappa_AK(A,A')=\kappa_{A'}K(A',A).
\tag{17}
\]
The diagonal case is automatic. Consequently \(M\) is symmetric for the weights \(\kappa_A\).

Let \(o\) be the full stack at zero and let \(s\) be any two-stack tuple. Since \(Q\) never increases the stack count, \(Q(o,s)=0\). For the two-stack tuples of interest its weight divided by \(\omega_d(o)\) equals \(d\kappa_A+O(d^2)\). Compare the coefficient of \(d^2\) in \(\omega_d(o)T_d(o,s)=\omega_d(s)T_d(s,o)\), using (12). This proves
\[
B(o,s)=\kappa_AQ(s,o).
\tag{18}
\]
The row of \(B\) at \(o\) can have no split destinations except two-stack tuples at \((-1,1)\), \((0,2)\), or \((-2,0)\). Indeed its first independent event creates two neighboring occupied sites; interaction stays within them; one more independent event can adjoin only one neighboring site. A stable subset of the resulting three consecutive sites is a full stack or the two endpoints. Terms arising from the negative parts of either \(R\) yield destinations with fewer additions and obey the same assertion.

For a fixed oriented subset \(A\), the reverse merger rates from these three placements to the full stack at zero sum to \((M\mathbf1)_A\). To see this, start instead with the tuple \(A\) at zero and its complement at two. The three full-stack inward outcomes are at zero, one, and two; their total rate is \(m-\sum_{A'}K(A,A')\). Common translations identify their individual rates with those from the placements \((0,2)\), \((-1,1)\), and \((-2,0)\), respectively, to zero. Their corrected split values are all \(a_A\) by translation invariance and (14). Every full-stack value is zero. Therefore (18), weighted symmetry (17), and (15) give
\[
BH_f(o)=\sum_A\kappa_A(M\mathbf1)_Aa_A
=\sum_A\kappa_A(Ma)_A
=2\sum_A\kappa_Ac_A.
\tag{19}
\]
For the reduced function the derivative in the vector equal to minus one on \(A\) and plus one on its complement is \(2c_A\): translate that vector by \(\mathbf1\) and use homogeneity on its chamber. On restoring the subtracted affine term, its derivative contributions cancel in complementary pairs, since \(\kappa_A=\kappa_{A^c}\) and the vectors are opposite. Its \(B\)-action is zero by Section 2. This proves the exact full-block formula with every oriented subset counted separately. In particular there is no additional factor of two or combinatorial exchange factor.

## 5. Quantitative localization

Fix a partition \(\pi\), a separated tuple \(z\) as in the contract, and \(R_*\ge16\). Write \(R_*=r_0\) in this section to distinguish it from the independent generator \(R\). Order the blocks by their sites \(x_B\). Consider real tuples in which every coordinate belonging to an earlier block is less than every coordinate belonging to a later block.

On this region there are globally defined chamber-affine functions \(f_B\) on \(\mathbb R^B\), each with sum-norm Lipschitz bound \(D\), such that
\[
f(x)=f(0)+\sum_{B\in\pi}f_B(x_B).
\tag{20}
\]
Here is an explicit construction. For an internal ordering of a block, take the coordinates of a chamber gradient of \(f\) in that block, using the fixed external block order. These coordinates do not depend on the orders inside other blocks: changing an adjacent order inside another block changes the full gradient only by a multiple of the difference of two unit vectors belonging to that other block. Define \(f_B\) on each of its chambers by the corresponding gradient dotted with its coordinates, with zero intercept. Adjacent formulas agree on their common face by the same gradient-difference property. Formulas at any further intersection agree by successively exchanging equal coordinates. Thus they define a continuous global function. All its gradient coordinates have magnitude at most \(D\); integrating along a line segment through its finitely many chambers proves its Lipschitz bound. Finally, summing these chamber formulas gives (20) in each permitted chamber, and continuity gives it on the faces.

Evaluate the separate canonical corrections from Sections 1–2 on the subtuples and define on \(S_n\)
\[
W=f+\sum_{B\in\pi}\psi_{f_B},\qquad \delta=H_f-W.
\]
For singleton blocks use the convention proved in Section 8 below; its correction is zero and its affine generator action is zero. By (3),
\[
\|\delta\|_\infty\le C_nD.
\tag{21}
\]
When all coordinates of block \(B\) stay within \(4r_0\) of \(x_B\), the blocks remain in their prescribed order and have large intervening gaps. For states whose coordinates are within \(2r_0\) of their respective \(x_B\), all \(Q\)-endpoints remain in that larger region, since individual jumps are at most two. The triggered interaction component lies in one block. On such states \(Q\) acts on sums of block functions as the sum of the isolated block \(Q\)-operators. Equation (20) and the harmonicity of each \(H_{f_B}\) therefore imply \(QW=0\), and hence \(Q\delta=0\), throughout the smaller region. This gives bounded stopped harmonicity up to exit from any still smaller region used below.

First consider coarse tuples with one full stack per block. There \(Q\) is the generator of independent walks of the block centers, each jumping left and right at rate one. If \(z'\) is another coarse tuple shifting every center by at most \(a\le r_0/2\), then
\[
|\delta(z')-\delta(z)|
\le C_nD\left(\frac{a+1}{\sqrt{r_0}}+\frac1{r_0}\right).
\tag{22}
\]
To prove this, couple corresponding center walks independently until meeting and synchronously thereafter, independently for different blocks. Before meeting their signed difference is a nearest-neighbor symmetric walk with rate two in each direction. Its probability of not having hit zero by time \(t\), from distance \(a\), is at most \(C(a+1)/\sqrt t\). Indeed, when \(a\le\sqrt t\), stop this difference at zero or the integer \(b=\lceil\sqrt t\rceil+a+1\). Its chance to hit \(b\) before zero is \(a/b\), by the stopped coordinate martingale. Its expected stopped time is at most \(ab/4\), since the generator of \(x(b-x)\) is minus four on the interior. Markov's inequality bounds survival without either exit by \(ab/(4t)\). These two bounds give the assertion; when \(a>\sqrt t\), enlarging the constant makes it at least one. The finite-interval stops have finite expectation, for example by a fixed positive chance to exit within each fixed block of enough jumps, so these optional-stopping computations are justified.

Run the coupling to time \(t=r_0\), stopping each vector of centers on leaving the box with centers within \(r_0\) of their original \(x_B\). Its starting displacement is at most \(r_0/2\). The square maximal inequality for each centered walk, whose variance rate is two, bounds its exit probability by \(C/r_0\). Stopped harmonicity of \(\delta\) applies because exit endpoints still lie within \(2r_0\). On the event that neither vector exits and all corresponding walks meet by time \(r_0\), their terminal tuples are identical. Compare their bounded stopped expectations, use (21), and sum the meeting and exit failure bounds over at most \(n\) blocks. This proves (22).

We also need a quantitative internal merger estimate. For any two-substack isolated block, starting at a gap bounded by two, let \(\sigma\) be its first full-stack time. More generally the following proof gives a bound with a constant depending on any fixed upper bound for the starting gap. At gaps at least three the gap has rates two in each direction. At gap two the total outward rate is two, and the full-merger rate is at least one by Section 1. Other transitions only redistribute the left label subset. One may split off rate-one killing at gap two and ignore all additional merger killing. The remaining gap motion is the walk with these interior rates, outward rate two at its boundary two, and killing rate one there. This construction is valid through changes of label subset because the specified rates are independent of that subset; additional killing can only shorten the lifetime. Let \(\zeta\) be the lifetime of this latter walk.

For \(s>0\), let \(q_s\in(0,1)\) be the smaller root of \(2(q_s+q_s^{-1}-2)=s\). Direct substitution into the first-step equations gives
\[
\mathbb E_r e^{-s\zeta}=\frac{q_s^{r-2}}{s+3-2q_s},\qquad
q_s=1+\frac{s}{4}-\sqrt{\frac{s}{2}+\frac{s^2}{16}}.
\tag{23}
\]
For completeness, the interior equation is \((s+4)u_r=2u_{r-1}+2u_{r+1}\), and the boundary equation is \((s+3)u_2=1+2u_3\). The displayed bounded solution satisfies both. Uniqueness among bounded solutions follows by stopping at time \(t\), a finite spatial boundary, or killing: for a difference of two solutions its stopped discounted value has constant expectation; remove the spatial boundary using bounded rates, then let \(t\to\infty\), and the factor \(e^{-st}\) removes the remaining value. This also identifies the displayed solution with the stated expectation, with \(e^{-s\infty}=0\).

For bounded \(r\) and \(0<s\le1\), (23) gives \(1-\mathbb E_r e^{-s\zeta}\le C_n\sqrt s\): use \(1-q_s\le C\sqrt s\), \(1-q_s^{r-2}\le(r-2)(1-q_s)\), and \(s+3-2q_s=1+s+2(1-q_s)\ge1\). The limit as \(s\downarrow0\) also proves almost sure finite killing. Since
\[
\mathbf1_{\{\zeta>t\}}\le\frac{1-e^{-\zeta/t}}{1-e^{-1}}\qquad(t>0),
\]
we obtain, also for \(0\le t<1\) by enlarging the constant,
\[
\mathbb P(\sigma>t)\le\mathbb P(\zeta>t)\le C_n(1+t)^{-1/2}.
\tag{24}
\]

Let \(s\in S_n\) have every label within two sites of its position in \(z\), with every block a full stack except possibly one block split into two substacks at distance two. Run its \(Q\)-chain until the first of internal merger, time \(t=r_0^{1/2}\), and displacement at least \(r=r_0^{3/8}\) from \(s\). Treat a simultaneous merger and displacement exit as a failure. Before displacement exit the blocks remain separated, so the internal motion agrees with the isolated motion in (24). The probability of displacement exit by time \(t\) is at most \(C_n(t+1)/r^2\le C_nr_0^{-1/4}\), by (1). The probability of failure to merge by time \(t\) without earlier displacement exit is at most the isolated survival bound \(C_nr_0^{-1/4}\). If no block is split, take the merger time to be zero.

On success the endpoint is coarse with center displacement at most \(r+2\) from \(z\), which is at most \(r_0/2\) for \(r_0\ge16\). At every stopped endpoint the coordinates are within \(r+4<2r_0\) of the reference sites; hence bounded stopped harmonicity of \(\delta\) applies. Compare its expectation from \(s\) to \(\delta(z)\), use (22) on successful endpoints and (21) on failure. This proves
\[
|\delta(s)-\delta(z)|\le C_nD r_0^{-1/8}.
\tag{25}
\]
Indeed \((r+3)/\sqrt{r_0}\le C r_0^{-1/8}\), and the failure term has the smaller order \(r_0^{-1/4}\). Thus all stopping regions and the constants here are uniform in the actual block positions and sizes.

The row of \(B\) at the reference coarse state \(z\) has finite support only among states \(s\) just described. To check this directly in \(RURP\), the first independent event creates a neighboring pair within a single block, or already ends in \(S_n\), in which case its \(U\)-term is zero. During the pure-interaction integral no new site is occupied. In its inner \(R\), a second event in the same block can create at most three consecutive sites; absorption produces a full stack or two substacks at distance two. A second event in another block leaves two isolated two-site components, both of which absorb to full stacks. Negative terms omit one of these events and satisfy the same support assertion. In all cases each label moves at most two sites from \(z\). For bounded data,
\[
\|B\|\le\|R\|\|U\|\|R\|\|P\|\le16n^2c_n,
\]
and \(B\mathbf1=0\). This also bounds the total variation of each finite signed row. Equation (25) therefore gives \(|B\delta(z)|\le C_nD r_0^{-1/8}\).

It remains to evaluate \(BW(z)\), rather than assume an additivity property for \(B\). On every configuration visited in the above row calculation, (20) and independent absorption in the separated groups give
\[
P_nW=f(0)+\sum_{B\in\pi}P_BH_{f_B}.
\]
Here the subscripts specify the particle set, not a new operator definition. After the first independent event only its own block can be transient. Applying the inner \(R\) to this sum gives zero from each other block, since at its full stack \(R_BP_BH_{f_B}=Q_BH_{f_B}=0\). Integrating to absorption therefore gives precisely the killed potential of the affected block applied to its residual. Summing the initiating events proves
\[
BW(z)=\sum_{B\in\pi}B_BH_{f_B}(x_B\mathbf1_B).
\]
The single-block formula (19), including its restoration of affine terms, evaluates each summand. By (20), its directional derivatives are the corresponding derivatives of \(f\) at \(z\). Combining this identity with the bound for \(B\delta\) proves conclusion 3 with all its quantifiers. The one-block equality was already proved in Section 4.

## 6. Coordinate covariances

Fix the coordinate test \(f_i(x)=x_i\). At a coarse state in the previous section all local block corrections vanish. Thus \(\delta\) equals \(\psi_{f_i}\) at every coarse state in the stopping box. Apply (22) with \(a=1\) to obtain, for every block \(B\) and \(\epsilon\in\{-1,1\}\),
\[
H_i(z+\epsilon\mathbf1_B)-H_i(z)
=\epsilon\mathbf1_{\{i\in B\}}+O(C_n r_0^{-1/2}).
\tag{26}
\]
At this separated state these are all off-diagonal \(Q\)-transitions, each at rate one. Multiplying the two increments and summing gives
\[
\left|\Gamma_0^{ij}(z)-2\mathbf1_{\{z_i=z_j\}}\right|\le C_nr_0^{-1/2}.
\tag{27}
\]
The error from multiplying the two errors is bounded by a constant times \(r_0^{-1}\) and is included in the displayed bound. At an arbitrary state, every coordinate increment of \(H_i\) is at most \(2+2a_n\) along a \(Q\)-jump, by (3) and Section 1. The total rate is at most \(2n\), so \(\Gamma_0\) is bounded everywhere.

Couple each perturbed excursion after a fixed initiating step to a pure-interaction excursion until the first additional independent event. The entire pure-interaction chain can be sampled independently of the extra independent clocks, so its marginal remains the pure excursion even on the event of interruption. If no extra event occurs before absorption, the two endpoints coincide and \(J=0\). On the complementary event \(J\ge1\), the pure endpoint is within \(n\) of the initial tuple coordinatewise, and the perturbed endpoint is within \(n+J\). Their corrected coordinate increments are therefore bounded by \(C_n\) and \(C_n(1+J)\), respectively. It follows that the absolute difference of the products of increments for coordinates \(i,j\) is at most \(C_n[(1+J)^2+1]\mathbf1_{\{J\ge1\}}\). Equation (7), summed over the \(2n\) initiating steps in (11), gives
\[
\sup_{z,i,j}|\Gamma_d^{ij}(z)-\Gamma_0^{ij}(z)|\le C_nd.
\tag{28}
\]
Absolute convergence follows already from the second-moment instance of (13), using \(|ab|\le(a^2+b^2)/2\). Combining (27), (28), and the global bound proves every covariance assertion. Finally, the split sum for a coordinate test is zero: complementary subsets have equal factorial coefficients and opposite vectors. This fact is consistent with the separated drift conclusion and requires no additional coordinate-consistency premise.

## 7. Quantifier and dependency check

Sections 1–2 prove absorption, near-set occupation, displacement, the canonical bounded correction, and harmonicity for every fixed \(n\ge2\). Section 3 proves the actual, uniformly convergent trace expansion and all real-order excursion and jump moments for the explicit interval \(0<d\le d_n\), before they are used in Section 4. Section 4 derives labelled factorial coefficients from finite detailed balance and a finite matrix identity. Section 5 proves their localization for every partition and every separation parameter \(R_*\ge16\), with constants independent of positions and block masses. Section 6 proves coordinate covariances at every state and their separated limits. Finite-cycle matrices in Section 4 are only an internal device for a local coefficient identity; no torus corrector or torus convergence assertion is used. There is no invocation of a result from C0004 or any other campaign candidate.

## 8. The one-label case

For \(n=1\), every site is already in \(S_1\), so both absorption times are zero and both potentials vanish. There are no interaction jumps. Therefore \(P=P_d=\operatorname{Id}\), \(Q=T_d=R\), and \(B=0\), for every \(d>0\), in particular \(0<d\le d_1=1\). A chamber-affine function is simply \(f(x)=ax+b\), with \(|a|\le D\), and \(Rf=0\). Its canonical correction is zero. The coordinate has jumps plus and minus one at rate one, so its covariance density is two and its square maximal displacement is at most \(8t\). Its trace jump moment is \(2|a|^p\le2D^p\). The near set and every split sum are empty. An initiating step has displacement one and is already in \(S_1\), with \(J=\tau_d=0\). These facts prove the full convention in the contract and the singleton-block facts used in Section 5.

## Author changes relative to the source argument

This extraction does not silently import the source's shorthand. It proves absorption for the perturbed chain by the restart bound before identifying its killed inverse; gives the exact remainder operator, an explicit allowed range of \(d\), and all real-order duration moments; verifies finite-cycle weighted trace symmetry and the locality of the compared coefficients; constructs the block-affine decomposition explicitly; fixes the stopping boxes and their margins in the harmonic localization estimate; and gives a connected-visited-set proof of excursion displacement even when occupied components merge. These are detailed internal justifications and strengthened quantitative statements, rather than a claimed independent audit or a validation of C0004. No unresolved mathematical issue was identified in this author re-check. This last statement has author status only.
