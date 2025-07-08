
---
title: "Distributed Energy Resources - Lecture 5: Batteries and Electric Vehicles"
draft: false
created: 2025-06-14
tags:
  - ders
  - batteries
  - EVs
  - education
  - calculus
  - modelling

---
Other notes in this series from  [Kevin Kircher's](https://kevinjkircher.com/) [Distributed Energy Resources](https://kevinjkircher.com/distributed-energy-resources/) class  are [here](tags/DERs).
## Summary
Lecture 5 covers modelling of batteries and EVs which are just a type of battery that come with some extra constraints.

This was  a fun one; some simple models with real world applications and use of bits of theory from lectures 3&4.

![[image-25.png]]
## Notes (don't read past here unless you're bored)
### Homework
1. Show that with uniform time step $∆t$ and piecewise constant $p^{chem}(t)$, the continuous-time battery model $$\frac{dx(t)}{dt} = −\frac{x(t)}{τ} + p^{chem}(t)$$ can be written in discrete time as $$x(k + 1) = ax(k) + (1 − a)τ p^{chem}(k)$$where $$a = e^{−\Delta t/\tau}$$
	+ From last week, if we have the continuous-time vector LDS:
	  $\frac{dx(t)}{dt}= \tilde{A}(t)x(t) +\tilde{B}(t)u(t) + \tilde{w}(t)$<br> then the general discrete-time LDS equation is<br> $x(k + 1) = A(k)x(k) + B(k)u(k) + w(k)$
		+ where $A(k) = e^{(t_{k+1}−t_k)\tilde{A}(t_k)}$ and if $\tilde{A}(t_k)$ is invertible:
		+ $B(k) = (A(k) − I)\tilde{A}(t_k)^{−1}\tilde{B}(t_k )$
		+ $w(k) = (A(k) − I)\tilde{A}(t_k )^{−1}\tilde{w}(t_k)$
	+ And the scalar equivalent
		+ $\delta_x(t) = \tilde{a}(t)\delta_x(t) + \tilde{b}(t)\delta_u(t) + \delta\tilde{w} (t)$
		+ $\delta_x(k + 1) = a(k)\delta_x(k) + b(k)\delta{u}(k) + \delta_w (k)$
		+ where
			+ $a(k) = e^{\Delta t\tilde{a}(t_k)}$
			+ $b(k) = (a(k) − 1)\tilde{b}(t_k)/\tilde{a}(t_k)$$
			+ $\delta_w(k) = (a(k) − 1) δ_{\tilde{w}}(t_k )/\tilde{a}(t_k)$
	+ In this case
		+ $\tilde{a}(t)=\frac{-1}{\tau} \Rightarrow a(k)=e^{-\frac{\Delta t}{\tau}}$
		+ $\tilde{b}(t)=1 \Rightarrow b(k) = -\tau(e^{-\frac{\Delta t}{\tau}} - 1)$
		+ $\delta_{\tilde{w}}(k)=0 \Rightarrow \delta_w(k) = 0$
		+ $\delta_u(t)=p^{chem}(t)$
	+ So
		+ $x(k+1)=e^{-\frac{\Delta t}{\tau}}x(k)  -\tau(e^{-\frac{\Delta t}{\tau}} - 1)p^{chem}(t)$$
		+ if we let $a = e^{−\Delta t/\tau}$, then that gives us<br> $x(k+1) = ax(k) -\tau(a-I)p^{chem}(t) = \mathbf{ax(k) +(1-a)\tau p^{chem}(t)}$


2. In the special case of a battery with no self-dissipation, the continuous-time model simplifies to $$\frac{dx(t)}{dt} = p^{chem}(t)$$ Show that with uniform time step $∆t$ and piecewise constant $p^{chem}(t)$, a discrete-time version of this model is $$x(k + 1) = x(k) + ∆tp^{chem}(k)$$
	+ $\int_{t_k}^{t_k+1}\frac{dx(t)}{dt} = \int_{t_k}^{t_k+1}p^{chem}(t)$
	+ $x(t_k+1) - x(t_k) =\int_{t_k}^{t_k+1}p^{chem}(t)dt$
	+ $x(t_k+1) - x(t_k) =p^{chem}(t) \int_{t_k}^{t_k+1}dt$ Since $p^{chem}$ is piecewise constant.
	+ $x(k+1) = p^{chem}\Delta t + x(k) = \mathbf{x(k) + \Delta t p^{chem}(k)}$

3. The charge state of a battery, initially at 80% of its energy capacity, drops to 50% of its energy capacity after 30 days unplugged and unused. What is the battery’s self-dissipation time constant?
	+ $x(t_0) = 0.8; x(t_1) = 0.5; p^{chem}=0;\tau=?$
	+ $\frac{dx(t)}{dt} = \frac{−x(t)}{\tau} + p^{chem}(t) = \frac{−x(t)}{\tau}$
	+ $\int\frac{dx(t)}{dt} = -\frac{1}{\tau}\int x(t)dt$
	+ $\int\frac{1}{x}dx(t)= -\frac{1}{\tau}\int dt$
	+ $\ln|x(t)| - \ln|x_0| =-\frac{\Delta t}{\tau}$
	+ $\ln|\frac{x(t)}{x_0}| = -\frac{\Delta t}{\tau}$
	+ $\tau = - \frac{\Delta t}{\ln|\frac{x(t)}{x_0}|} = -\frac{(30*24*3600)}{\ln(\frac{0.5}{0.8})} \approx 5514851$
4. Suppose an electric vehicle has an energy intensity of $α = 0.3 kWh/km$ and a comparable gasoline vehicle gets $β = 25$ miles per gallon. If burning one gallon of gasoline causes $γ = 26$ pounds of CO2 emissions (including upstream emissions associated with oil extraction and processing), what is the break-even CO2 intensity of electricity $µ$ (in units of g/kWh) at which the two vehicles cause the same CO2 emissions per unit distance driven? By what percent would the EV reduce CO2 emissions from driving with the US-average CO2 intensity of electricity, 345 g/kWh? With the average CO2 intensity of electricity in your home state or country? What factors not considered here might complicate this analysis?
	+ ICE CO2: $26/25 = 1.04  \text{ lbs/mile} = 0.47 \text{ kg/mile} = 0.47/1.61 \text{ kg/km} = 0.292 \text{ kg/km}$
	+ EV CO2 for breakeven: $292\text{ g/km} = 0.3 \text{ kWh/km} * \mu$
		+ $\mathbf{\mu = (292/0.3)\text { g/kWh} = 973.3 \text{g/kWh}}$
	+ By what percent would the EV reduce CO2 emissions from driving with the US-average CO2 intensity of electricity, 345 g/kWh?
		+ EV emissions/km = $345\text{ g/kWh} * 0.3 \text{  kWh/km}= 103.5 \text{g/km}$
		+ $\mathbf{\frac{(292-103.5)}{292}\times 100 = 64.6\%}$
	+ With the average CO2 intensity of electricity in your home state or country?
		+ currently 406g/kWh per https://app.electricitymaps.com/zone/IE/72h/hourly
	+ What factors not considered here might complicate this analysis? Regenerative braking, temperature variation of energy intensity of EV, varying $\mu$ over time.
5. Suppose someone commutes two miles each way, five days per week, riding an electric bike with an energy intensity of $5 Wh/km$. If they work 50 weeks per year and electricity costs 0.15 $/kWh:
	+ How much do they spend on bike electricity per year?
		+ $\mathbf{50\times 5\times 2 \times (2 \times 1.61) \times (5/1000) \times 0.15 = 1.21}$ dollars
	+ Compare this to the annual fuel cost from the same commute in an automobile that gets 30 miles per gallon with a fuel price of 3 $/gallon
		+ $\mathbf{50\times 5 \times 2 \times 2 \times (1/30) \times 3 = 100}$ dollars
6. Like lecture four, there was some not very interesting python scripting.

### Batteries
+ A simple battery model<br> $\textcolor{red}{\frac{dx(t)}{dt} = \frac{−x(t)}{\tau} + p^{chem}(t)}$
	+ $x(t) \in R (kWh)$ is the stored chemical potential energy
	+ $\tau > 0 (h)$ is the self-dissipation time constant. This $\infty$ for an ideal battery
	+ $p^{chem}(t) \in R (kW)$ is the chemical charging power, or discharging if $p^{chem}(t) < 0$ - ie: electrical power input/output.
	  ![[image-20.png]]
+ Electrical charging/discharging power is<br> $\textcolor{red}{max\{p^{chem}(t)/\eta_c,\eta_dp^{chem}(t)\}}$ 
	+ $\eta_c, \eta_d \in (0,1]$ are the charging and discharging efficiencies.
+ Discrete-time battery model<br> $\textcolor{red}{x(k+1) = ax(k) + a(1-a)\tau p^{chem}(k)}$ 
	+ $a=e^{\Delta t/\tau}$ 
+ Battery constraints
	+ $\textcolor{red}{0 \leq x(k) \leq \bar{x}}$ 
	+ ${-\bar{p}_d \leq p(k) \leq \bar{p_c}}$ 
		+ $\bar{x} \geq 0 (kWh)$ is the chemical energy capacity
		+ $\bar{p_c} \geq 0 (kW)$ is the electrical charging power capacity
		+ $\bar{p_d} \geq 0 (kW)$ is the electrical discharging power capacity
		+ So then power constraints are<br> $\textcolor{red}{-\frac{\bar{p}_d}{\eta_d} \leq p^{chem}(k) \leq \eta_c\bar{p}_c}$ 
+ unused, a typical battery might lose ∼1 to 3% energy per day
+ $η_cη_d$ is called the **round-trip efficiency**, typically ~0.9, and $\eta_c$ and $\eta_d$ are both ~0.95

### EVs
+ Just a battery with wheels (and thus special charging/discharging conditions)
+ $\textcolor{red}{p^{chem}(k) = -\frac{\alpha(k)d(k)}{\Delta t}}$
	+ $\alpha(k) (kWh/km)$ is energy intensity of driving (like MPG for ICE cars). Typically 0.15 - 0.4 kWh/km. Ebikes ~0.005kWh/km
+ Temperate profile ![[image-25.png]]
+ plugged in indicator $z(k) = \begin{cases} 1\text{  if the EV is plugged in over time step K}\\0 \text{   otherwise}\end{cases}$

+ $\textcolor{red}{\begin{cases}-\bar{p}_d \leq p(k) \leq \bar{p}_c & \text{ if } z(k)=1\\ p(k) \leq 0 & \text{ if }z(k) = 0 \end{cases}}$<br> with $\bar{p}_d = 0$ for EVs without bidirectional charging
  
+ if $z(k) = 1$ (meaning the EV is plugged in) and we want to charge to full:
	+ $\textcolor{red}{p^{chem}(k) = min\left\{\eta_c \bar{p}_c,\frac{\bar{x} - ax(k)}{(1-a)\tau}\right\}}$
	+ This places $x(k+1)$ at $\bar{x}$ when the battery is nearly full
+ if  z(k) = 1 and we want to charge steadily to meet a deadline:
	+ $\textcolor{red}{p^{chem}(k) = min \left\{\eta_c \bar{p}_c,\frac{x^* -a^{k^* - k}x(k)}{(1 +a+\dots+a^{k^*-k-1})(1-a)\tau}\right\}}$
