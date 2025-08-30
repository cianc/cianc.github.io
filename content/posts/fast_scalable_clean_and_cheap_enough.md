
---
title: "White Paper: Fast, scalable, clean, and cheap enough. How off-grid solar microgrids can power the AI race"
draft: false
created: 2025-07-18
tags:
  - paper review
  - power
  - DCs
---

I came across this [whitepaper](https://www.offgridai.us/) in in a recent [Volts epsiode](https://www.volts.wtf/p/solarstorage-is-so-much-farther-along) discussing a new [Ember report](https://ember-energy.org/latest-insights/solar-electricity-every-hour-of-every-day-is-here-and-it-changes-everything/) analysing the potential for large 100% solar+battery systems. 

In the author's own words: "Could off-grid solar microgrids in the US be big enough, fast enough, and cheap enough to be a compelling near-term alternative to building more natural gas power plants to meet near-term AI energy needs?"

It analyses the costs, speed of deployment and geographical feasibility of using solar+batteries+gas generators to create off-grid microgrids for training-only ML datacentres (which are estimated as ~1/2 of new capacity expected by 2030).

Highlights:
1. This hybrid option is faster to deploy than the alternatives. ~2 years vs 3yrs for colocated gas and 5+ for a new grid interconnection.
2. It's at least at cost parity with gas-only up to 44% ($93/MWh vs $86/MWh) power supplied by solar+battery, and possibly higher when you play around with some design, availability, and finance assumptions.
3. BUT that [Ember report](https://ember-energy.org/latest-insights/solar-electricity-every-hour-of-every-day-is-here-and-it-changes-everything/) does a similar analysis for just solar+battery and get an LCOE of $104/MWh in very sunny locations like Las Vegas, though only with 97% availability. 
4. It's considerably cheaper than Microsoft's plans to buy power from a restarted Three Mile Island.
5. Unsurprisingly things get exponentially more expensive as you reach higher levels of renewables.
6. West Texas is where most suitable land is thanks the dense gas network which makes on-site gas generators feasible. If we drop the gas requirement (to either replace it with diesel or go 100% solar) then there is much more suitable land. But it does need A LOT of land: 90% renewables -> 2525 acres, 82%->2022, 44% -> 1008
7. Lowering uptime requirements would have big cost implications (cf: [[rethinking_load_growth]]). For nearly the same cost as the gas-only case, solar+storage only could serve load 90% of the time (excluding unplanned downtime): ![[image-48.png]]

The author's conclude with some speculation as to why we're not seeing more of these kinds of hybrid off-grid systems given the cost numbers and public GHG reduction commitments from the hyperscalers. Best guess seems to be change aversion and the rapidity at which renewables are dropping in price.


## Questions
+ I wonder how these numbers change after the 22% drop in solar LCOE reported by [Ember](https://ember-energy.org/app/uploads/2025/06/Ember-24-Hour-Solar-Electricity-June-2025-6.pdf)
+ Is adoption of mixed generation really slow? Why? Is that changing?


> [!NOTE]- Notes
> + Assuming 30-300 GW needed by ~2030 for AI datacentres.
> + All solutions considered either 125 or 100 MW of standby generation
> + Ran 20-year powerflow models for thousands of site configurations supporting a 100-1000 MW 24/7 load and ran them them all through a LCOE model to find the best performers. Then did a search for all the land in the US Southwest that could accommodate them (filtering for things like distance from natural gas pipelines, property owner type, minimum parcel size, etc.).
> + Estimated time to operation for a large off-grid solar microgrid ~2 years (1-2 years for site acquisition and permitting plus 1-2 years for site buildout).
> 	+ This compares v. well to 5+ years for new grid interconnections and 3+ years for off-grid colocated gas turbines.
> 	+ Rental generators as used XAI prior to getting a grid connection are potentially the fastest ‘absolute’ path to power but their limited availability would be quickly exhausted by large-scale adoption and have a high costs at >$300/Mwh. They have discovered training loads require a battery buffer to maintain power quality
> 	+ ![[image-46.png]]
> + A microgrid supplying  44% of lifetime demand from solar and includes 125% natural gas backup is approximately the same cost as using large off-grid natural gas turbines: $93/MWh versus $86/MWh.
> + A system supplying 90% of lifetime demand from solar is cheaper than repowering Three Mile Island ($109/MWh versus $130/MWh)
> 	+ If we incorporate some non-standard but low risk optimisations we can likely drop these prices to \$87/MWh and \$97MWh.
> + There is enough suitable land to cover ~4-40X all of the datacenter growth projected in the US through 2030. 1200-6000GW depending on renewable fraction. Most of this is in West Texas, which is mostly a function of gas pipeline density. If you relax this constraint by using diesel backup generators or go 100% renewables, you can build almost anywhere with good sun.
> + Recent [Volts podcast](https://www.volts.wtf/p/solarstorage-is-so-much-farther-along) on [Ember report](https://ember-energy.org/latest-insights/solar-electricity-every-hour-of-every-day-is-here-and-it-changes-everything/) does a similar analysis for just solar+battery.+ To get 1kW of stable 24hr (97% of the year) solar power in a sunny location like Las Vegas, need 5kW of solar + 17kW of battery. This would cost \$104/MWh. Cheaper than coal and nuclear, and solar and battery prizes continue to drop. Gas is still cheaper at ~\$70/MWh.
> + Even cloudy cities like Birmingham can get 62% of the way to a constant supply every hour of every day across the year.
> + DCs for training have more geographical and availability flexibility than those for inference which need to be close to users and more reliable.
> + Cost is important, but speed of deployment is currently the most important thing.
> + The model incorporates eligible solar and battery costs receiving the 30% investment tax credit. Future of this after the BBBO is unclear.
> + My god it's all debt servicing: ![[image-47.png]]
> + Once again, lowering uptime requirements could have big cost implications. See [[rethinking_load_growth]]. For nearly the same cost as the gas turbine case, solar+storage could serve load 90% of the time (excluding unplanned downtime): ![[image-48.png]]
> + What if we removed market distortions? No tax credits, equivalent cost to build as China, "abundance" scenario: ![[image-49.png]]
> + Needs A LOT of land: 90% renewables -> 2525 acres, 82%->2022, 44% -> 1008
> + Emissions impact: ![[image-50.png]]
> + So why isn't it happening?
> 	+ Cost premium for high renewable %'s, but the 44% option is basically at parity with gas.
> 	+ Massive datacenters dedicated to training only are a recent phenomenon, and datacenter designers have historically been skeptical of off-grid solutions due to the perceived need to optimize for uptime reliability. 
> 	+ 

