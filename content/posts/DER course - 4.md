
---
title: "Distributed Energy Resources - Lecture 4: Linear Dynamical Systems"
draft: false
created: 2025-06-13
tags:
  - DERs
  - education
  - calculus
  - linear algebra
  - modelling
---
Other notes in this series from  [Kevin Kircher's](https://kevinjkircher.com/) [Distributed Energy Resources](https://kevinjkircher.com/distributed-energy-resources/) class  are [here](tags/DERs).
## Summary

This lecture builds on the scalar and vector linear ODEs in [[DER course - 3]] to model **Linear Dynamical Systems**: "models that describe how a system changes over time, where the relationships between its variables are all linear", then finishes up with a fun little climate model as practical example.

+ **A continuous-time linear dynamical system (LDS)** <br> $\textcolor{red}{\frac{dx(t)}{dt} = A(t)x(t) + B(t)u(t) + w(t)}$
	+ $t \in R$ denotes time
	+ $x(t) \in R^{n_x}$ is the **state**
	+ $u(t) \in R^{n_u}$ is the **action** or **control**
	+ $w(t) \in R^{n_x}$ is the **disturbance**
	+ $A(t) \in R^{n_x\times n_x}$ is the **dynamics matrix**
	+ $B(t) \in R^{n_x \times n_u}$ is the **action matrix** or **control matrix**
+ We can use the matrix equivalent of Taylor's theorem to linearise non-linear
+ If we discretise:
	+ Consider the continuous-time LDS<br> $\frac{dx(t)}{dt} = \tilde{A}(t)x(t)+\tilde{B}(t)u(t)+\tilde{w}(t)$ <br> with piecewise constant $\tilde{A}, \tilde{B}, u, \tilde{w}$
	+ The equivalent discrete-time LDS is:<br> $\textcolor{red}{x(k+1) = A(k)x(k)+B(k)u(k)+w(k)}$<br> where $.(k)$ denotes $.(t_k)$<br> $\textcolor{red}{A(k) = e^{(t_{k+1}-t_k)\tilde{A}(t_k)}}$
	+ If the dynamics matrix $\tilde{A}(t_k)$ is invertible<br> $\textcolor{red}{B(k) = (A(k) - I) \tilde{A}(t_k)^{-1} \tilde{B}(t_k)}$<br> $\textcolor{red}{w(k) = (A(k) - I) \tilde{A}(t_k)^{-1} \tilde{w}(t_k)}$

Then the fun part: a simple climate model ![[image-17.png]]
Then we do some neat power-balance calculations and end up with
1. Steady state global average surface temperature: $\textcolor{red}{T = \sqrt[4]{\frac{(1 − \alpha)S}{4σ(1 − ε/2)}}}$
2. Rate of change: $\textcolor{red}{\frac{dT(t)}{dt} = \frac{πR^2}{C}[ (1 − \alpha(t))S − 4σ(1 − ε(t)/2)T(t)^4]}$

If we plug in historical temperature and ε values then we get reasonably close numbers! 
See the [lecture notes](https://kevinjkircher.com/wp-content/uploads/2025/01/der-linear-dynamical-systems.pdf) for details.

> [!NOTE]- Notes
> ### Homework
> Some simple Python implementation of the above earth climate model. Non-linear and linearised. The hard part was figuring out what the exercise required.
> 
> ---
> + **A continuous-time linear dynamical system (LDS)** <br> $\textcolor{red}{\frac{dx(t)}{dt} = A(t)x(t) + B(t)u(t) + w(t)}$
> 	+ $t \in R$ denotes time
> 	+ $x(t) \in R^{n_x}$ is the **state**
> 	+ $u(t) \in R^{n_u}$ is the **action** or **control**
> 	+ $w(t) \in R^{n_x}$ is the **disturbance**
> 	+ $A(t) \in R^{n_x\times n_x}$ is the **dynamics matrix**
> 	+ $B(t) \in R^{n_x \times n_u}$ is the **action matrix** or **control matrix**
> 
> + **A continuous-time LDS with imperfect observations**<br>  ${\frac{dx(t)}{dt} = A(t)x(t) + B(t)u(t) + w(t)}$<br>  ${y(t) = C(t)x(t) +D(t)u(t) + v(t)}$
>  + $y(t) \in R^{n_y}$ is the **observation** or **output**
>  + $v(t) \in R^{n_y}$ is the **noise**
>  + $C(t) \in R^{n_y \times n_x}$ is the **observation matrix**
>  + $D(t) \in R^{n_y \times n_u}$ is the **feedthrough matrix**
> 
> + Common simplifications
> 	+ **time-invariant**: $A$, $B$, $C$, and $D$ are independent of $t$
> 	+ **single-input, single-output**: $nu = ny = 1$
> 	+ **no feedthrough**: $D(t) = 0$ for all $t$
> 	+ **perfectly observed**: $y(t) = x(t)$
> 	+ **deterministic**: $w(t) = 0$ and $v(t) = 0$ for all $t$
> 
> + Why do we care about linear things when reality is typically non-linear? Linearity helps with tractability. Can often represent non-linear systems pretty well with linear ones.
> + For scalars-valued functions, we can linearise with **Taylor's theorem**: a mathematical tool that allows us to approximate a function by an infinite sum of terms, where each term is derived from the function's derivatives at a single point
> 	+ The simplified version is: <br> suppose nonlinear $f: R\rightarrow R$ is differentiable at $\hat{x}\in R$ <br> if $x$ is near $\hat{x}$, then ${f(x)\approx f(\hat{x}) + f^\prime(\hat{x})(x-\hat{x})}$
> 	+ The full version: $f(x)= \sum_{n=0}^{\inf}\frac{f^{(n)}(\hat{x})}{n!}(x−\hat{x})^n$
> + Similarly, can linearise vector-valued functions of vectors with: <br> suppose nonlinear $f: R^n\rightarrow R^m$ is differentiable at $\hat{x}\in R^n$<br> if $x$ is near $\hat{x}$, then ${f(x)\approx f(\hat{x}) + D_f(\hat{x})(x-\hat{x})}$ <br> where $D_f(\hat{x}) = \begin{bmatrix}\frac{\delta f_1}{\delta x_1}|_{\hat{x}} &\dots &\frac{\delta f_1}{\delta x_n}|_{\hat{x}}\\\vdots&&\vdots\\ \frac{\delta f_m}{\delta x_1}|_{\hat{x}}&\dots&\frac{\delta f_m}{\delta x_n}|_{\hat{x}}\end{bmatrix} \in R^{(m \times n)}$<br> this is the **derivate matrix** or **Jacobian matrix** of $f$ at $\hat{x}$
> + **A continuous-time non-linear dynamical system (LDS)**<br> ${\frac{dx(t)}{dt} = f(x(t), u(t), w(t)}$ 
>   with dynamics function ${f : R^{n_x} × R^{n_u} × R^{n_w} \Rightarrow R^{n_x}}$<br> `<skipped derivation>` 
>   ${\frac{d\delta_x(t)}{dt} \approx A(t)\delta_x(t) + B(t)\delta_u(t) + G(t)\delta_w(t)}$ <br> where<br> ${δ_x (t) = x(t) − \hat{x}(t), δ_u(t) = u(t) − \hat{u}(t), δ_w (t) = w(t) − \hat{w}(t)}$ <br> and<br> ${A_{ij(t)}={\frac{\delta f_i}{\delta x_j}}|_{\hat{x}(t),\hat{u}(t),\hat{w}(t)}}$ <br> ${B_{ij(t)}={\frac{\delta f_i}{\delta u_j}}|_{\hat{x}(t),\hat{u}(t),\hat{w}(t)}}$ <br> ${G_{ij(t)}={\frac{\delta f_i}{\delta w_j}}|_{\hat{x}(t),\hat{u}(t),\hat{w}(t)}}$ 
> + For discretised time
> 	+ Perfectly observed LDS $\textcolor{red}{\frac{dx(t)}{dt} = A(t)x(t) + B(t)u(t) + w(t)}$
> 	+ Suppose $A$ is piecewise constant:<br> $t_k \le t \lt t_{k+1} \Rightarrow A(t) = A(t_k)$ 
> 	+ Then<br>  ${x(t_{k+1}) = e^{(t_{k+1}-t_k)A(t_k)}x(t_k) + e^{t_{k+1}A(t_k)}\int_{t_k}^{t_{k+1}}e^{-\tau A(t_k)}(B(\tau)u(\tau)+w(\tau))d\tau}$ 
> 	+ This is just the ODE IVP solution with $t^{init}=t_k, t=t_{k+1}$ and $b(t)=B(t)u(t)+w(t)$ 
> + Now assume everything except $x$ is piecewise constant:<br> $t_k \le t \lt t_{k+1} \Rightarrow \begin{cases}A(t) = A(t_k), B(t) = B(t_k)\\u(t) = u(t_k), w(t) = w(t_k)\end{cases}$<br> then<br> ${x(t_{k+1}) = e^{(t_{k+1}-t_k)A(t_k)}x(t_k) + e^{t_{k+1}A(t_k)}\int_{t_k}^{t_{k+1}}e^{-\tau A(t_k)}d\tau(B(t_k)u(t_k)+w(t_k))}$ <br> If $A(t_k)$ is invertible, then<br>  ${e^{t_{k+1}A(t_k)}\int_{t_k}^{t_{k+1}}e^{-\tau A(t_k)}d\tau = (e^{(t_{k+1}-t_k)A(t_k)}-I)A(t_k)^{-1}}$ 
> + Summary for discretising LDS:
> 	+ consider the continuous-time LDS<br> $\frac{dx(t)}{dt} = \tilde{A}(t)x(t)+\tilde{B}(t)u(t)+\tilde{w}(t)$ <br> with piecewise constant $\tilde{A}, \tilde{B}, u, \tilde{w}$
> 	+ The equivalent discrete-time LDS is:<br> $\textcolor{red}{x(k+1) = A(k)x(k)+B(k)u(k)+w(k)}$<br> where $.(k)$ denotes $.(t_k)$<br> $\textcolor{red}{A(k) = e^{(t_{k+1}-t_k)\tilde{A}(t_k)}}$<br> $B(k) = e^{t_{k+1}\tilde{A}(tk)}\int_{t_k}^{t_{k+1}}e^{-\tau\tilde{A}}d\tau\tilde{B}(t_k)$<br>  $w(k) = e^{t_{k+1}\tilde{A}(tk)}\int_{t_k}^{t_{k+1}}e^{-\tau\tilde{A}}d\tau\tilde{w}(t_k)$
> 	+ if the dynamics matrix $\tilde{A}(t_k)$ is invertible<br> $\textcolor{red}{B(k) = (A(k) - I) \tilde{A}(t_k)^{-1} \tilde{B}(t_k)}$<br> $\textcolor{red}{w(k) = (A(k) - I) \tilde{A}(t_k)^{-1} \tilde{w}(t_k)}$
> 		+ There is no general analytical formula for discretising<br> $\frac{dx(t)}{dt} = f (x(t), u(t),w(t))$ <br> with an arbitrary nonlinear dynamics function $f$, but numerical ODE solvers can do the trick
>  