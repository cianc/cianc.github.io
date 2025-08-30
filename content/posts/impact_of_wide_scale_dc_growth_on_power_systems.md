
---
title: "Paper: Impact of Wide-Scale Data Centre Growth on Power System Operation with Large Share of Renewables"
draft: false
created: 2025-08-03
tags:
  - paper review
  - datacenters
  - grid
  - renewables
---
> Abstract: Driven by the large-scale adoption of cloud-based technologies, the past decade has experienced tremendous data centre growth around the globe. In addition to ongoing increases in energy consumption from the sector, the proliferation of data centres also induces a number of electrical network challenges. In this study, their potential to contribute to demand flexibility is analysed, exploring the trade-off between available flexibility and system energy costs, in a day-ahead electricity market. Data centre operation is modelled within a least cost energy mixed integer formulation for the 2030 Irish electricity sector, sourcing 70% of electrical demand from variable renewables. Subsequent impacts on generation and demand schedules, energy costs, renewable energy curtailment, emission levels, plant operational hours, etc. are evaluated, in order to  demonstrate how largescale data centre growth can affect a system’s ability to meet its renewable obligations.

This paper is a little old (2020) given how fast the area of data centre demand/response is moving, but it's a neat worked example on my local grid from a local university so I was curious.

One novel aspect (for me) of the optimisation were the several constraints added to the generation mix. I had heard during the recent [Iberian Peninsula blackout](https://en.wikipedia.org/wiki/2025_Iberian_Peninsula_blackout) that Ireland does a job of maintaining grid stability with a high penetration of renewables and this paper lays out what many of those are: minimum amounts of inertia, maximum amounts of "non-synchronous infeeds" (electricity generation from sources that are not directly synchronized with the grid's frequency, such as wind and solar power), thermal fleet operational requirements (start-up, shutdown, ramping times etc), interconnector constraints and a bunch of stuff about frequency response I didn't dig into.

It was also heartening to see that Ireland is currently ahead of several of the assumptions about renewable penetration - solar and batteries in particular - though offtrack for others, most notably offshore wind.

Anyway, the result from all of this is that simulations show significant cost smoothing and savings with data centre load flexibility (though the final assumption of 30% load being flexible is too optimistic IMO). As we recently saw in [Flexible Data Centers and the Grid: Lower Costs, Higher Emissions](flexible_dcs_lower_costs_higher_emissions.md), that doesn't automatically mean lower GHG emissions, but given Irelands relatively high and increasing degree of renewables penetration for electricity generation, it seems very likely that there would be emission reductions.

![[image-79.png]]


### Questions

> [!NOTE]- Notes
> + Runs a solver to optimise for cost while varying unit generation and commitment status, fuel use, interconnector flows, battery charge/discharge power, reserve contribution from generating units, interconnectors and dispatchable demand.
> + Many constraints (from Eirgrid)
> 	+ can't lose too much inertia
> 	+ can't have too much of power coming from "non-synchronous infeeds" (electricity generation from sources that are not directly synchronized with the grid's frequency, such as wind and solar power)
> 	+ thermal generation fleet start-up, shut-down, ramping, up-down times, etc.
> 	+ transfer capabilities and ramp rates on HVDC interconnector flows
> 	+ reserve categories: Frequency Containment Reserve (FCR),  Fast Frequency Response (FFR), and Replacement Reserve (RR) (https://www.eirgrid.ie/ds3-programme-delivering-secure-sustainable-electricity-system)
> + New load categories
> 	+ Flexible DC batch workloads. Assumes 30% flexible (way too high), and 24h of temporal flexibility (pretty optimistic)
> 	+ Heatpumps
> 	+ EVs - assumes 936,000 by 2030, currently we have ~130k per https://alternative-fuels-observatory.ec.europa.eu/transport-mode/road/ireland
> + Assumed capacity
> 	+ ![[image-77.png]]
> 		+ Solar is already at [1.76GW](https://www.pv-magazine.com/2025/06/25/ireland-solar-capacity-increases-by-160-in-two-years-solar-ireland-2025-report/#:~:text=Ireland's%20solar%20capacity%20hits%201.76,Europe%20within%20a%20few%20years.)
> 		+ Onshore wind is [4.8GW](https://www.gov.ie/en/department-of-climate-energy-and-the-environment/press-releases/ireland-signs-european-wind-charter-and-makes-pledge-to-deliver-on-wind-energy-targets/#:~:text=Ireland's%20onshore%20wind,of%20onshore%20wind%20by%202030) with a 9GW target by 2030.
> 		+ Offshore wind is [25MW](https://en.wikipedia.org/wiki/Wind_power_in_Ireland#:~:text=The%20Arklow%20Bank%20Wind%20Park,harbor%20upgrade%20for%20offshore%20wind%22.), with a 5GW target by 2030
> 	+ Plus "the existing 500 MW EWIC and 450 MW Moyle HVDC interconnectors between Ireland and Great Britain (GB) it is assumed that additional interconnectors, with GB (500 MW), and France (700 MW), are also built, in 2023 and 2026, increasing the total HVDC interconnection capacity to 2150 MW by 2030." - what we currently have
> 		+ EWIC, 500MW with GB
> 		+ Celtic interconnector, planned for 700MW with France
> 		+ Moyle, 500MW with NI (so slightly up)
> 		+ Greenlink, 500MW with GB
> 	+ A 450 MW battery fleet with a 90% round trip efficiency is assumed - we currently have 969MW per https://currents.greencollective.io/benchmarking-batteries-in-ireland/?ref=green-collective-newsletter, though peak discharge is only 266MW so far.
> 	+ 750 MW of price-sensitive demand response - apparently this is already [700MW](https://thedrai.ie/#:~:text=About%20Us-,About%20Us,by%20flexible%20sources%20of%20demand.)?
> + Results
> 	+ Base case: it is assumed that data centre load is flat and doesn't vary significantly across the day. 
> 		+ ![[image-78.png]]
> 		+ Note price spikes corresponding with OCGT (peaker gas plants), and price drops on high wind days when supply exceeds demand and we export the excess.
> 	+ Including data centre load management: assuming active participation of cloud providers as large energy users,with the share of flexible DC demand varied from 10-30%.
> 		+ ![[image-79.png]]
> 		+ If we just take the 30% flexible load case and apply it to the first two base case graphs we can see the smoothing of electricity prices, especially on the low wind days : ![[image-80.png]]

