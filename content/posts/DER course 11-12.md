---
title: "Distributed Energy Resources - Lectures 11-12: Modelling Summary & Optimization Overview"
draft: false
created: 2025-08-12
tags:
  - DERs
  - education
  - modelling
---
Other notes in this series from  [Kevin Kircher's](https://kevinjkircher.com/) [Distributed Energy Resources](https://kevinjkircher.com/distributed-energy-resources/) class  are [here](tags/DERs).

### Modelling Summary
Unsurprisingly, not much new in this review of previous modelling lectures. The one thing that jumped out was the combined flexible/deferrable loads represented by refrigerator/freezers and dishwashers. In the US, the first represents up to ~100GW (so about ~8% of US generation capacity) of flexible load thanks to their thermal capacity.  The second is ~120GW of mostly deferrable load or ~10% of generation capacity. Those numbers are huge.

### Optimization Overview
tl;dr - we want to reformulate optimisation problems as convex problems wherever possible because they are usually tractable, have polynomial (not exponential) runtime, and well supported by software solvers.


> [!NOTE]- Notes
> + Other DERs: 
> 	+ refrigerators and freezers
> 		+ ∼200 million refrigerators and freezers in the US
> 			+ all have some thermal mass and temperature flexibility
> 			+ ∼500 W each, that’s ∼100 GW of flexible capacity (for comparison, total US generation capacity is ∼1.3 TW)
> 			+ can model them as thermal circuits, just like buildings
> 	+ Deferrable loads
> 		+ some appliances just need to run before a deadline - eg: dishwasher
> 		+ there are ∼80 million dishwashers in the US
> 		+ at ∼1.5 kW each, that’s ∼120 GW of flexible capacity
> 		+ clothes washers and dryers may have similar flexibility
> + Optimisation 
> 	+ Most optimisation problems are intractable, but convex problems are (usually) tractable
> 		+ for convex problems, all local optimizers are global optimizers
> 		+ no analytical solution, but good algorithms
> 		+ solve time is ∼proportional to max $\{n^3,n^2m\}$
> 		+ includes least squares, linear programming, and much more
> 	+ Example: choose solar array size (# of panels or rated power) and orientation
> 		+ possible objectives:
> 			+ initial cost (hardware, permitting, installation, . . . )
> 			+ electricity revenues or cost savings
> 			+ greenhouse gas emission reductions
> 		+ possible constraints:
> 			+ budget
> 			+ usable rooftop or ground area
> 			+ panel power output equations
> 	+ Example: choose charging powers at each time over a planning horizon
> 		+ possible objectives:
> 			+ electricity costs
> 			+ greenhouse gas emissions
> 			+ peak electricity demand
> 		+ possible constraints:
> 			+ battery energy and power capacities
> 			+ battery dynamics
> 			+ charging deadline

