
---
title: "Distributed Energy Resources - Lectures 9-10: Thermal Storage and Water Heaters & Solar Energy"
draft: false
created: 2025-08-09
tags:
  - DERs
  - education
  - solar
  - thermal storage
  - modelling
---


Other notes in this series from  [Kevin Kircher's](https://kevinjkircher.com/) [Distributed Energy Resources](https://kevinjkircher.com/distributed-energy-resources/) class  are [here](tags/DERs).
### Thermal Storage and Water Heaters
An overview of three kinds of thermal storage.
+ Lumped sensible thermal storage: we heat something up to a uniform temperature, eg: a storage heater full of bricks.
+ Stratified sensible thermal storage: we heat different parts up the storage unit to different temperatures, eg: a hot water tank.
+ Latent thermal storage: we melt/freeze (or sometimes vaporise/condense) a material as a way of storing/releasing energy, eg: freezing/thawing ice to "store" cooling.

Here is a nice picture of heat-pump/resistance hybrid water heater: 

![[image-92.png|331x291]]

### Solar Energy
A little spherical geometry gives us a model to estimate solar irradiance at different locations at different times of year with different solar panel orientation. 

This gets a little more interesting when you have time-varying electricity costs and net-metering since the value of solar energy also now varies with time.

Here is a nice picture of a solar photovoltaic cell: 

![[image-93.png|491x358]]
> [!NOTE]- Notes
> + Thermal Storage and Water Heaters
> 	+ Three types of thermal storage
> 		+ Lumped sensible thermal storage
> 			+ Lumped means all one temp through the entire tank
> 			+ Sensible refers to temp change vs phase change (which is called "latent")
> 			+ ![[image-90.png]]
> 		+ Stratified sensible thermal storage
> 			+ Two zones with different temperatures rather than the same temp through the tank.
> 			+ ![[image-91.png]]
> 		+ Latent thermal storage
> 			+ freeze/melt a material instead of heating/cooling it
> 	+ Typical domestic hot water cylinder holds up to ~9-13kWh
> + Solar Energy
> 	+ Empirical equation of time converts GMT to $t_{gm}$, local solar time
> 		+ $\tau \approx (0.165 h)\sin(2\gamma) - (0.126 h)(\cos(\gamma) - (0.025 h)\sin(\gamma))$ (only an approximation)
> 		+ $\gamma = \frac{360(d-81)}{365}$ where day # $d$ is 1 on Jan 1
> 		+ solar time, $t_{gm} + \tau$ , equals 12 h when sun is highest
> 	+ On a clear day, ~75% of solar constant,  $S_0$ (the irradiance at top of earth’s atmosphere) reaches the surface.
> 		+ ∼70% transmitted through atmosphere (beam)
> 		+ ∼5% scattered to earth by air, dust, water vapour (diffuse) 
> 		+ ∼20% absorbed by atmosphere
> 		+ ∼5% scattered back to space
> 	+ As cloud cover increases
> 		+ less of $S_0$ reaches surface (as little as ∼10%)
> 		+ beam % of total surface sunlight falls, diffuse % rises
> 	+ Solar cell efficiency scales ~linearly with cell temperature $T_c$ $$\eta \approx \tilde{\eta}(1 - \frac{T_c - \tilde{T}}{T_0 - \tilde{T}})$$
> 		+ where
> 			+ $\tilde{n}$ is the effiency at rated cell temp $\tilde{T} \approx 25C$
> 			+ $T_0 \approx 270C$ is the cell temp at which generation stops
> 			+ $T_c \approx T_a + (35 Cm^2 /kW)S_{tot}$ where $S_{tot}$ is incident irradiance
> 

