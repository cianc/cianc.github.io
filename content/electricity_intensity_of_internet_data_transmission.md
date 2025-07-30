
---
title: "Paper: Electricity Intensity of Internet Data Transmission"
draft: false
created: 2025-07-28
tags:
  - Networking
  - Climate
  - Energy
---
> 	Abstract: In order to understand the electricity use of Internet services, it is important to have accurate estimates for the average electricity intensity of transmitting data through the Internet (measured as kilowatt-hours per gigabyte ((kWh/GB). This study identifies representative estimates for the average electricity intensity of fixed-line Internet transmission networks over time and suggests criteria for making accurate estimates in the future. Differences in system boundary, assumptions used, and year to which the data apply significantly affect such estimates. Surprisingly, methodology used is not a major source of error, as has been suggested in the past. This article derives criteria to identify accurate estimates over time and provides a new estimate **of 0.06 kWh/GB for 2015**. By retroactively applying our criteria to existing studies, we were able to determine that the electricity intensity of data transmission (core and fixed-line access networks) has decreased by half approximately every 2 years since 2000 (for developed countries), a rate of change comparable to that found in the efficiency of computing more generally.

An old paper (2017) that I came across while reading [Building Green Software](building_green_software). Even though the numbers are stale, it discusses different estimation methodologies (and their shortcomings) and provides a framework for how best to go about further estimates. I also haven't been able to find a newer paper or any other reliable looking source for newer estimates.

Anyway, the punchline is that there was likely a ~5x in **network electricity intensity (kWh/GB)** in the 15 years between 2000 and 2015. But there is a good chance that new technologies will break this exponential decrease at some point (if it hasn't already). 

![[image-68.png]]

### Questions
+ What are more recent numbers? I could not find newer studies.
  
> [!NOTE]- Notes
> + Meta-analysis to identify the most accurate estimates of average electricity intensity for data transmitted over the Internet.
> + **Network electricity intensity: kWh/GB**
> + Argument that electricity use of access networks and home/on-site networking equipment should be allocated by the time used and not data, as the electricity use does not vary with data volume.
>    BUT, networking is provisioned to handle peak capacity at all times, so can argue that energy usage is a function of both data volume and time.
> + Study only looked at "transmission networks" ![[image-66.png]]
> + Estimates from 14 studies vary between 0.004 kWh/GB and 160 kWh/GB !!! But system boundaries vary hugely and this is across many years where we know equipment efficiency has improved significantly.
> + Four different methods used:  modelling, annual electricity consumption (AEC), direct measurements, and extrapolation.
> 	+ Modelling: allows predictions and testing impact of changes of specific variables, sensitive to input assumptions and boundary choices. Must make sure to include full range of equipment (not just state of the art, but also less efficiency legacy equipment)
> 	+ Annual electricity consumption: typically uses estimates for annual electricity consumption of equipment and divides by estimated annual data traffic for the corresponding equipment. Requires fewer assumptions but relies on accurate data.
> 	+ Direct measurement: directly measure the power consumption and data traffic of equipment within a network. More accurate than modelling, but very hard to measure all infrastructure involved in transfers.
> 	+ Extrapolation: extrapolate existing estimates, by applying factors for changes in energy use of equipment or data traffic, to derive an estimate for a different base year. Assumes efficiency improvement rates. Very prone to errors from starting point and/or change assumptions.
> 	+ Combined approaches: can cross check estimate from above approaches. 
> + Not only does efficiency steadily improve over time, sometimes there are step-changes with new types of technology and this is obviously very hard to integrate into predictions.
> + Different studies assume different PUE values, as well as different number of network hops (which pulls in more or less equipment for analysis)
> + Meta-analysis best estimates: ![[image-67.png]]
> 

