---
title: "Paper: Dynamic grid management reduces wildfire adaptation costs in the electric power sector"
draft: false
created: 2025-10-02
tags:
  - grids
  - wildfire
---
[https://www.nature.com/articles/s41558-025-02436-5.epdf](https://www.nature.com/articles/s41558-025-02436-5.epdf?sharing_token=Ww6zzUYucpPk9-OzNWwQjtRgN0jAjWel9jnR3ZoTv0P14Q-nwJEtzmSfHFfxji3AM0_AqumJtHzoWetpsypo_RCu1pD_HzX1UNTObXeq9tzOiPQPaxrG4HRYSiTfajSCJu6_xJ_92sPB7dN9M1TRkwvuge8Kbo9IRPRzoXdLlCY%3D)

> Abstract: Wildfire is among the fastest-growing economic risks of climate change, yet cost-effective adaptation strategies remain underexplored. In the electric power sector, where utility infrastructure has ignited some of the most destructive fires, companies are investing heavily to reduce risk. Here we evaluate the costs, reliability implications and risk-reduction benefits  of the largest utility wildfire mitigation programme in the United States.  Using weather and vegetation data for 25,000 miles of high-risk power lines, we develop a predictive model of ignition risk and compare outcomes across locations that had similar risk profiles but received different interventions. A newer strategy—adjusting protective device sensitivity during high-risk conditions—has reduced more wildfire risk at lower cost per avoided structure burned than conventional approaches such as undergrounding or vegetation management. Our results underscore the importance of comprehensive accounting of costs, risks and reliability when evaluating adaptation investments, particularly where capital-intensive measures may be over-incentivized.

I had no idea of the scale of wildfires caused by transmission/distribution lines in the western US:
> Risk-mitigation spending by California’s electric utilities— which have caused nearly half of the state’s 20 most destructive  wildfires—exceeds US$9 billion annually
	
and 
> \[PG&E\] filed for bankruptcy in 2019 due to US$30 billion in wildfire liabilities

Just look at this map of ignitions caused by PG&E distribution lines between 2015 and 2023 (red dots) overlayed on tier 3 (extreme risk) and tier 2 (elevated risk) areas.

![[image-132.png|335x363]]

95% of these 4,266 recorded ignitions occurred along distribution lines. The utility operates five times more distribution lines than transmission lines and the distribution grid is located in closer proximity to vegetation, wildlife and populations that can spark ignitions.

Ireland is very lucky we don't have to worry about wildfire risks!

There are four preventative strategies:
1. Bury the lines - effective but very expensive and very slow.
2. Add extra insulation to the wires - less expensive and faster than burying, but still expensive and slow.
3. Enhanced vegetation management - ongoing cost with mixed effectiveness. This doesn't get much discussion in this paper.
4. Dynamic grid-management measures in response to real-time wildfire conditions - can be a complete shut off (PSPS) (very disruptive) or fast-trip settings that increase circuit breaker sensitivity (less disruptive). 

This paper groups lines by baseline ignition risk (the daily probability of a distribution circuit causing a wildfire ignition without the utility’s risk management efforts), then compares lines with similar baseline risks but different interventions. The authors combine this data with intervention cost estimates and produce a "cost per avoided structure burned" metric for different interventions:

![[image-133.png]]

Some of the uncertainties:
1. Outage costs: the paper uses value of lost load to estimate outage costs for fast-trip/PSPS, but acknowledge this is somewhat arbitrary.
2. Cost of capital.
3. Construction and operational costs as technologies change in the future.
4. Future wildfire risks.

Anyway, the upshot is that fast-trip is by far the the cheapest intervention, but surprisingly (to me), undergrounding  is more cost-effective on average than EVM because it fully eliminates vegetation caused ignition risk well into the future. However, current fast-trip protocols used in California leave ~18% of ignition risk unmitigated, whereas undergrounding is ~100% effective so at least based on current technologies/protocols, some blend is required.











> [!NOTE]- Notes
> + Looking at PG&E, high-fire threat districts (HFTD)
> + Risk-mitigation spending by California’s electric utilities— which have caused nearly half of the state’s 20 most destructive  wildfires—exceeds US$9 billion annually
> + A large proportion (80%) of the estimated reduction \[in vegetation caused ignitions\] is due to a new dynamic grid-management technology (‘fast-trip settings’) that increases circuit breaker sensitivity and rapidly de-energizes power lines when a fault is detected.
> + Ignitions caused by power line failures are correlated with dry conditions and high winds. Powerlines also often near communities so when they do cause fires, human impact is faster and larger.
> + PG&E has been experimenting with three types of fire mitigation strategies since 2019
> 	1. System hardening measures include burying power lines, cov-ering overhead conductors with insulated material and reinforcing support structures. These involve high capital investment and long lead times.
> 	2. Enhanced vegetation management (EVM) involves removing all vegetation within 12 feet of overhead lines (rather than the standard 4 feet). Requires ongoing maintenance.
> 	3. Dynamic grid-management measures are deployed in response to real-time wildfire conditions. Includes public safety power shutoffs (PSPS) and fast-trip settings that increase circuit breaker sensitivity. Because this degrades customer reliability, the settings are disabled when fire risk is low.
> + PG&E filed for bankruptcy in 2019 due to US$30 billion in wildfire liabilities!!
> + From 2015 to 2023, 95% of PG&E’s 4,266 recorded ignitions occurred along distribution lines...the utility operates five times more distribution lines than transmission lines and the distribution grid is located in closer proximity to vegetation, wildlife and populations that can spark ignitions
> + 98% of burned acres were ignited by vegetation contact
> + Group lines by baseline ignition risk (the daily probability of a distribution circuit causing a wildfire ignition without the utility’s risk management efforts), then compare lines with similar baseline risks but different interventions.
> 	+ How to calculate baseline risk? Train a random forest model with power-line-caused ignitions prior to PG&E’s widespread implementation of its key wildfire programmes. Then use the model to construct ‘counterfactual’ baseline ignition risks after extensive treatments began.
> +  Map of HFTD showing ignitions (red dots) overlayed on tier 3 (extreme risk) and tier 2 (elevated risk) areas between 2015 and 2023. Lots of ignitions! ![[image-132.png|670x727]]
> + Cost efficiency simulations: ![[image-133.png]]
> 	+ Undergrounding lasts a long time so more sensitive to future risk projections.
> 	+ Dynamic grid management:  apply a value of lost load (VoLL) framework to estimate costs associated with observed supply interruptions
> 	+ Damage costs only based on structure losses, not other things like smoke damage, health damage etc, so low.
> 	+ Upshot: 
> 		+ fast-trip settings are significantly more cost-effective at reducing wildfire damage to structures as com-pared to EVM and undergrounding.
> 		+ despite the considerable capital costs, underground-ing lines is more cost-effective on average than EVM. This is primarily because undergrounding fully eliminates vegetation-caused ignition risk well into the future. The large range in EVM cost-effectiveness estimates reflects uncertainty in how quickly vegetation regrows post-trimming and the effectiveness of the mitigation at reducing ignitions.
> 		+ BUT fast-trip operational protocols demonstrated in California leave an estimated 18% of ignition risk unmitigated, whereas undergrounding is ~100% effective.
> + 

