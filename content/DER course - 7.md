
---
title: "Distributed Energy Resources - Lectures 7-8: Buildings part 2 & Heating, ventilation, and air conditioning"
draft: true
created: 2025-08-07
tags:
  - DERs
  - education
  - buildings
  - calculus
  - modelling
---
Other notes in this series from  [Kevin Kircher's](https://kevinjkircher.com/) [Distributed Energy Resources](https://kevinjkircher.com/distributed-energy-resources/) class  are [here](tags/DERs).

As a result of time pressure I'm easing up on the detailed notes and bundling together several lectures.

![[image-86.png]]


> [!NOTE]- Notes
> + Buildings part 2
> 	+ 2R2C circuit: ![[image-82.png]] where:
> 		+ $C_m$ is energy storage capacity of the wall materials (mass)
> 		+ $R_mT_m(t)$ shows the coupling between the indoor air temp and the mass temperature
> 	+ Two-timing: the indoor temperature $T$ typically changes much faster than the mass temperature $T_m$. So we can approximate
> 		+ only looking at fast time scale: $T_m(t) \approx T_{m0}$ (a constant) for all $t$
> 		+ only looking at slow time scale:$dT(t)/dt \approx 0$ for (almost all) $t$
> 	+ Both time scale simplifications turns the 2R2C model back into a 1R1C model.
> 	+ mRnC models can be simplified and treated similarly to 2R2C
> 	+ This is what thermostatic control looks like (target temperature $\hat{T}$ not shown) - sawtooth pattern between min/max targets. Typical when have heating/cooling equipment that can only be off/on: ![[image-83.png]]
> 	+ Buildings as thermal batteries
> 		+ It's actually common across DER technologies for them to be model-able as batteries. Where the capacity is based on the diff between the target and max/min acceptable temp.
> 		+ Consider indoor air and thermal mass as separate batteries (with different time scales as described above)
> 		+ Mass thermal capacity typically an order or magnitude larger than the air.
> 		+ Mass is charged (heated) by air, so constraints on the air temperature limit the charging power of the mass. Air charging power is limited by heating/cooling equipment.
> 		+ Typically US house ~50kWh thermal battery (assuming an acceptable temperature range of 2C and standard building materials)
> 		+ BUT a heat pump can give 3kWh of heat for 1kWh of electricity. So comparing thermal and electric batteries is not straightforward.
> + Heating, ventilation, and air conditioning
> 	+ A heat pump: ![[image-84.png]]
> 		+ coefficient of performance: $\eta = \frac{1}{1 - q_{in} -q_{out}}$
> 		+ With Carnot performance limit: $\eta \leq \frac{1}{1 - T_c/T_h}$ with $T_c$ and $T_h$ in Kelvin. ![[image-85.png]]
> 		+ Note that the curve is exponential, so you get increasing gains as you move to the right (smaller delta between source and destination temperature.) This is why heat pumps can struggle with extreme cold.
> 		+ ![[image-87.png]]
> 		+ ![[image-88.png]]


