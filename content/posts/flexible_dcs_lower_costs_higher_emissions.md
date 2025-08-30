
---
title: "Paper: Flexible Data Centers and the Grid: Lower Costs, Higher Emissions?"
draft: false
created: 2025-08-02
tags:
  - paper review
  - datacenters
  - grid
  - energy
  - modelling
  - flexible_dcs
---
https://www.nber.org/papers/w34065

> Abstract: Data centers are among the fastest-growing electricity consumers, raising concerns about their impact on grid operations and decarbonization goals. Their temporal flexibility—the ability to shift workloads over time—offers a source of demand-side flexibility. We model power systems in three U.S. regions: Mid-Atlantic, Texas, and WECC, under varying flexibility levels. We evaluate flexibility's effects on grid operations, investment, system costs, and emissions. **Across all scenarios, flexible data centers reduce costs by shifting load from peak to off-peak hours**, flattening net demand, and supporting renewable and baseload resources. **This load shifting facilitates renewable integration while improving the utilization of existing baseload capacity. As a result, the emissions impact depends on which effect dominates.** Higher renewable penetration increases the emissions-reduction potential of data center flexibility, while lower shares favor baseload generation and may raise emissions. Our findings highlight the importance of aligning data center flexibility with renewable deployment and regional conditions.

This figure is a bit busy, but sums it up nicely:  ![[image-76.png]]
When optimising for cost, DC flexibility always results in lower system costs (through a mixture of investment, fuel, and O&M savings), but only results in emissions reductions if there are sufficient renewables to flex into, otherwise base load generation (often including coal) is run at higher levels and emissions actually go up.

Obviously we could optimise for emission reductions instead of cost, but that's a policy discussion.


### Questions
+ What does this look like across all states? How many would see GHG reductions vs increases if DC flexibility was implemented now? What would the aggregate result be? The paper does say that the three grids examined, Texas, WECC, and Mid-Atlantic will account for 82% of the nation’s projected 2030 data center demand. 
> [!NOTE]- Notes
> + Open questions
> 	+ How datacenter flexibility affects power system planning and operations.
> 	+ Potential grid benefits that flexible data centers bring are not yet understood for different levels of flexibility. Not all tasks are equally flexible, need a more fine-grained model of flexibility than that discussed in eg: https://nicholasinstitute.duke.edu/sites/default/files/publications/rethinking-load-growth.pdf. But also grid impact will vary depending on the characteristics of the local grid.
> + Paper uses https://github.com/GenXProject/GenX.jl  for power system modelling and optimisation.
> 	+ Model combinations of scenarios that vary the time window in which loads can be shifted, from 1 to 24 hours, and the fraction of total shiftable demand (20% of total gross demand), from 1% to 100%. 
> 	+ Also include a baseline case without flexibility for comparison and assume that without flexibility, data centers have constant load throughout the year.
> 	+ Looked at Texas, the Mid-Atlantic, and the Western Interconnect (WECC) to cover 82% of the nation’s projected 2030 datacenter demand.
> + **In Texas where wind and solar are projected to supply 54% of generationm high levels of datacenter flexibility results in up to 40% lower CO2 emissions and accelerate retirements of coal and nuclear plants. This reverses in the Mid-Atlantic and WECC where renewable penetration is lower, coal units that survive retirements can run more uniformly, and system-wide emissions rise by as much as 3%, even though costs still fall.**
> + Crowds out battery storage because load-shifting allows moving workloads to when renewables are producing, so don't need to time-shift capacity via batteries. 
> + Results
> 	+ Consistent patterns of shifting from early morning hours and early night hours to midday during the winter, eg: ![[image-73.png]]
> 	+ See the impact of DC flex vs non-flex on winter generation levels: ![[image-74.png]]
> 	+ Unsurprisingly we see lower gas peaker generation.
> 	+ Base load becomes more uniform
> 	+ Mid-day solar usage goes up, battery usage goes down, as "flexible load partially substitutes its role in balancing variability"
> 	+ With a 24hr shifting horizon, can get down to almost zero coal and nuclear in Texas: ![[image-75.png]]
> + "First flexibility supports renewable investments. By shifting demand into hours with high  renewable availability, datacenter flexibility increases the economic value of wind and solar generation"
> + BUT "Second, datacenter flexibility supports baseload operations. By flattening net load profiles, datacenter flexibility makes it more cost-effective to run inflexible baseload plants like coal with fewer ramping requirements...In contrast, in s**ystems with a large share of existing coal and relatively limited VRE (variable renewable energy) availability, flexibility tends to shift load toward cheap, carbon-intensive baseload generation, which raises emissions even as costs fall**".
> + And so "Whether natural gas capacity and generation increase or decrease depends on which of these two effects dominates."
> 	+ In the Mid-Atlantic and WECC, the support for baseload is stronger. This reduces the need for flexible natural gas capacity as coal generation becomes more economically viable
> 	+ In Texas, the support for renewables dominates due to the high share of renewable generation of around 54% (39% wind, 15% solar) of total mix (compared to 22% and 33% in the Mid-Atlantic and WECC).
> 	+ ![[image-76.png]]
> + While all levels of flexibility reduce costs, the source of savings vary
> 	+ Reduction of investments in new natural gas
> 	+ Reduced fuel costs
> 	+ Reduced operation and maintenance costs (O&M) from retiring coal plants

