# C0002 proof — v1

Status: candidate.
Exact contract: CONTRACT_v1.md in this directory. Promoted campaign dependencies: none.

All resolvents in this proof use the positive discount convention in the contract. Put g_N=g composed with pi_N. Since both semigroups are contractions, their resolvents have norm at most 1/lambda. Write f_N=R_lambda^N g_N and f=R_lambda g. The assumed convergence gives uniform approximation of f_N by f composed with pi_N, and the finite-state identity gives
\[
A_N f_N=\lambda f_N-g_N.                                      \tag{1}
\]

## Uniform exit probabilities

Fix epsilon > 0. Compactness gives finitely many centers x_i whose open balls of radius epsilon/8 cover E. Choose continuous g_i:E -> [0,1] that vanish on the closed ball of radius epsilon/4 about x_i and equal one outside the open ball of radius epsilon/2. Explicit linear interpolation in distance constructs them, including when one of the relevant sets is empty.

Strong continuity of P implies lambda R_lambda g_i -> g_i uniformly as lambda -> infinity. Indeed, the norm of their difference is bounded by the integral of lambda exp(-lambda t) times ||P_tg_i-g_i||, and splitting that integral at a fixed small time proves the assertion. Fix 0 < a < 1/4. Choose a common lambda sufficiently large, then N sufficiently large using hypothesis 1, so that
\[
h_{N,i}:=\lambda R_\lambda^N(g_i\circ\pi_N),\qquad
\|h_{N,i}-g_i\circ\pi_N\|_\infty\le a                       \tag{2}
\]
for every i. Nonnegativity of the semigroup gives h_{N,i} >= 0. By (1), exp(-lambda t)h_{N,i}(Z_N(t)) is a nonnegative supermartingale: its discounted drift is -lambda exp(-lambda t)g_i(pi_N(Z_N(t))) <= 0.

For an arbitrary starting state z, select i with d(pi_N(z),x_i)<epsilon/8, so h_{N,i}(z)<=a. Let tau be the first time d(X_N(t),pi_N(z))>=epsilon. Whenever tau is finite, the triangle inequality gives d(X_N(tau),x_i)>=7epsilon/8, whence h_{N,i}(Z_N(tau))>=1-a. Optional stopping at tau minimum delta therefore yields
\[
\mathbb P_z(\tau\le\delta)
\le \frac{a e^{\lambda\delta}}{1-a}.                       \tag{3}
\]
This estimate is uniform over z and all sufficiently large N. The finite chain is nonexplosive, so its first exit either is attained at a jump or is infinite; there is no hitting-time attainment issue in this application. Since a was arbitrary, (3) proves
\[
\lim_{\delta\downarrow0}\limsup_{N\to\infty}
\sup_{z\in S_N}\mathbb P_z\left(
 \sup_{0\le t\le\delta}d(X_N(t),X_N(0))\ge\epsilon\right)=0. \tag{4}
\]
Specifically, for each a first choose lambda and N as above, then let delta decrease, and finally let a decrease. No rate in N is assumed.

For a bounded stopping time sigma of the full microscopic chain, its strong Markov property applies (4) conditionally on Z_N(sigma). Thus (4) bounds the probability of an epsilon increment between sigma and sigma+u for every 0<=u<=delta, uniformly over sigma, initial states and u. This proves Aldous' stopping-time condition in the larger microscopic filtration, and hence in the projected filtration as well. Compactness of E supplies compact containment. The Aldous criterion implies tightness in D([0,T],E) for each finite T, and the corresponding local statement gives tightness on D([0,infinity),E). The criterion used is the standard compact-containment plus stopping-time-increment sufficient condition; see D. Aldous, "Stopping Times and Tightness", Annals of Probability 6 (1978), 335–340, DOI 10.1214/aop/1176995579. For a general compact metric E, one may first embed E through countably many continuous distance coordinates and apply the metric-space version of the same criterion.

Every convergent subsequence has continuous limits by hypothesis 2. Here is the required deterministic J_1 fact. Under J_1 convergence, time changes make a convergent sequence uniformly close to its limiting path on any horizon whose endpoint is a continuity point of the limit. If the latter path has a jump of size b>0 at an interior time, its two one-sided values, and the two one-sided values of the uniformly close, time-changed path at that same time, differ by at most the uniform error on each side. The time-changed path must therefore have a jump of size at least b minus twice that error. Time changes preserve jump sizes. Thus jumps of a J_1 limit cannot exceed the liminf of the maximal approximating jump sizes. Hypothesis 2 makes those sizes tend to zero. Applied on all suitable finite horizons, this shows that all limit paths are continuous.

## Martingale identification

Let a subsequence converge to X; it has continuous paths and starts at x. For lambda>0 and g in C(E), (1) yields the bounded-on-finite-horizons martingale
\[
f_N(Z_N(t))-f_N(Z_N(0))
-\int_0^t[\lambda f_N(Z_N(u))-g(X_N(u))],du.               \tag{5}
\]
Uniform approximation, continuity of f and g, and convergence to continuous paths allow passage to the limit in (5), including after multiplication by bounded continuous functions of finitely many earlier projected coordinates. These products are uniformly bounded on each finite horizon, so expectations pass to the limit. Such functions generate the natural path filtration by the monotone-class theorem; first using a countable dense set of times and then continuity proves that
\[
f(X_t)-f(X_0)-\int_0^t[\lambda f(X_u)-g(X_u)],du           \tag{6}
\]
is a martingale in the natural filtration of X. This argument requires no Markov property of X_N after projection.

For completeness, these resolvent martingales determine the full law. Discounting (6) and taking conditional expectations after time s gives, for finite v,
\[
\mathbb E\left[e^{-\lambda v}f(X_{s+v})
 +\int_0^v e^{-\lambda u}g(X_{s+u}),du\,\middle|\,
 \mathcal F_s^X\right]=f(X_s).
\]
As v -> infinity, the first term vanishes uniformly and the integrals converge boundedly. Consequently
\[
\mathbb E\left[\int_0^\infty e^{-\lambda u}g(X_{s+u}),du
 \middle|\mathcal F_s^X\right]=(R_\lambda g)(X_s).         \tag{7}
\]
For any bounded real \(\mathcal F_s^X\)-measurable H, the bounded continuous function
\[
b(u)=\mathbb E[H g(X_{s+u})]-\mathbb E[H(P_u g)(X_s)]
\]
has Laplace transform zero for every lambda>0, by (7) and the definition of the target resolvent. Its continuity uses continuous paths of X, bounded convergence, and strong continuity of P. To see uniqueness without an additional regularity assertion, use integer lambda>=1 and substitute v=exp(-u). The bounded function b(-log v) has integral zero against every polynomial on [0,1]. Uniform polynomial density implies that the finite signed measure with this density is zero. Hence b is zero almost everywhere in u, and continuity makes it zero for every u>=0.

It follows that E[g(X_{s+u}) | F_s^X]=(P_u g)(X_s) for every fixed s,u and continuous g. A countable separating class suffices to identify the conditional transition probabilities on compact metric E. Induction identifies every finite-dimensional distribution with Q_x. Laws on continuous path space are determined by their finite-dimensional distributions at a countable dense set of times, so Law(X)=Q_x. Since every subsequential limit has that law, tightness gives convergence of the whole sequence in the topology claimed in the contract.

This proof does not establish its microscopic uniform-resolvent hypothesis for SIP, and therefore does not prove STATEMENT-v1.
