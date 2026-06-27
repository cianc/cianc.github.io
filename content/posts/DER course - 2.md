
---
title: "Distributed Energy Resources - Lecture 2: Energy, electricity, and DERs"
draft: false
created: 2025-06-10
tags:
  - DERs
  - education
  - electricity transmission
  - electricity generation
  - electricity markets
---
Other notes in this series from  [Kevin Kircher's](https://kevinjkircher.com/) [Distributed Energy Resources](https://kevinjkircher.com/distributed-energy-resources/) class  are [here](tags/DERs).
## Summary
[![[us_energy_consumption_sankey.png]]](https://flowcharts.llnl.gov/commodities/energy)
An overview of real-world energy generation/consumption numbers and then into a little modelling and theory around transmission/distribution efficiencies and costs.

Always good to be reminded about the primary fuel fallacy: fossil fuel consumption typically loses 2/3 of output energy - "rejected energy" . Electrification doesn't need to replace the primary fuel usage, just the (lower equivalent) for an electrified sysstem.

Why is high voltage so important for transmission? Because it allows for high power transmission with low power loss:
$$
P_l=I^2 R \Rightarrow P_l \propto I/V^2
$$
Historically, it has been much easier to step up/down to/from HV with AC. But see [HVDC](#HVDC) for why high voltage DC is now more feasible/desirable.

In the US (and UK and Ireland AFAIK), the highest cost marginal electricity supplier sets the cost for all supply, so gas typically sets the cost of renewables. This can lead to some weird incentives and we need to watch for market manipulation.

And lastly, DERs are a compromise between the the high cost of a centralised power resource (and the required transmission and distribution costs that go with it), and a fully off-grid solution that must be large enough to handle local peaks. A DER allows shaving peaks and so reduces transmission/distribution costs and allows the central resource to plan for the **peak of the sums, not the sum of the peaks**. DERs can also offer reliability benefits if they can operate during a blackout and are large enough to serve peaks for short periods.


> [!NOTE]-  Notes
> + solar power incident on earth’s upper atmosphere: ∼170 PW
> + humanity’s time-average use of all forms of energy: ∼20 TW
> + global electricity generation capacity: ∼9 TW
> + US electricity generation capacity: ∼1.2 TW
> + nuclear power plant capacity: ∼1 GW
> + electric vehicle power use when ‘flooring it’: ∼400 kW
> + central air conditioner peak power use: ∼5 kW
> + LED light bulb: ∼10 W
> + fossil fuels
> 	+ [supply ∼80% of global primary energy](https://ourworldindata.org/energy-mix)
> 	+ [air pollution kills ∼5 to 10 million people per year](https://www.bmj.com/content/bmj/383/bmj-2023-077784.full.pdf) (that's 10-15% of global deaths! And that's just air pollution!)
> 	+ [cause ∼75% of climate pollution](https://www.wri.org/insights/4-charts-explain-greenhouse-gas-emissions-countries-and-sectors)
> + [humanity spends/earns ∼$6.5 trillion per year on energy](https://www.enerdata.net/publications/executive-briefing/world-energy-expenditures.html)
> [![[hdi_energy_usage_per_capita.png]]](https://visualizingenergy.org/does-more-energy-use-increase-the-level-of-human-development/)
> + Fossil fuel consumption typically loses 2/3 of output energy - "rejected energy" [![[us_energy_consumption_sankey.png]]](https://flowcharts.llnl.gov/commodities/energy)
> + [![[us_energy_use_by_sector.png]]](https://www.eia.gov/energyexplained/electricity/use-of-electricity.php)
> + $P_l=I^2 R$: $P_l$ is power loss, $I$ is current, and $R$ is resistance.
>   This gives $P_l \propto I/V^2$
> + AC transformers are simpler and were much more practical in the early days of electrification.
> + <a id="HVDC">However</a>, high voltage DC is being reconsidered because: 
> 	+ No reactive power, only active power. Reactive power does no work and leads to losses.
> 	+ No skin effect. AC current flows more on the surface of a conductor than the interior at higher frequencies, resulting in a reduced conductor cross-section.
> 	+ No charging/discharging current (which causes losses) because AC cables have a large capacitance.
> 	+ Reduced corona loss (ionisation of surrounding air)
> 	+ No need to synchronise frequencies between circuits.
> 	+ Advances in power electronics make HVDC practical:
> + Some interesting US power history that I'm not writing down.
> + Marginal resource sets the price:
>   [![[economic_dispatch_merit_order_pricing.png]]](https://kevinjkircher.com/wp-content/uploads/2025/01/der-energy-electricity.pdf)
> + But can be transmission constrained so need to pull from a local more expensive resource even if there is a remote less expensive resource that has capacity to cover all of your demand. This is very bad for overall cost because local expensive resource sets the price:
>   [![[transmission_constraints_load_pockets.png]]](https://kevinjkircher.com/wp-content/uploads/2025/01/der-energy-electricity.pdf)
> ]This is a reason that expensive power producers may push back on more transmission being built. BUT ALSO the cheap producer benefits from the high price so wants to limit transmission.
> + Cost of centralised power resources vs distributed:
> 	+ More hops between generation and consumption means more points for power loss and more points for failure (ie: blackouts).
> 	+ A fully off-grid resource has fewer failure and loss points. Should mean lower cost and higher reliability. But you have to be able to serve peak load for every off-grid setup.
> 	+ A distributed resource is something between these two extremes. Distributed resource shaves the peaks of load so that the grid does not have the built for the sum of peaks (instead the peak of sums). Also less blackout risk since both the centralised and distributed resource must fail. But you'd still have a brownout or limited time full service.
> 	+ DERS can also:
> 		+ deploy faster
> 		+ shift ownership and agency to individuals and communities
> 