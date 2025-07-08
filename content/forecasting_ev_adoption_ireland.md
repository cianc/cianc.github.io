
---
title: "Paper: Hybrid SARIMA+BO-LSTM Framework for Forecasting EV Adoption: A Road to Net-Zero in Ireland"
draft: false
tags:
  - paper review
  - EVs
  - statistics
---

https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11031436 under https://creativecommons.org/licenses/by/4.0/

![[image-37.png]]

Not  the paper I was hoping for, but that's on me for not paying attention before diving in. It is mostly concerned with building a statistical model for predicting future EV sales based on past sales. I don't even think there's anything specific to EVs in the model (though I'll admit to skipping most of methodology section, it was over my head).

One thing that caught my attention is that while the author's combined stats+ML model performed best, a pure stats model came second and pure ML last.

 I think (and the author's say as much) that it is policy, politics, economics and other societal factors that will determine if we hit our 945k EVs by 2030 goal and as such historical data is only of limited used.
## Notes (don't read below here unless you are bored)
+ Climate Action Plan target of registering 945,000 electric vehicles (EVs) by 2030
+ **S**easonal **A**utoregressive **I**ntegrated **M**oving **A**verage (SARIMA) model
	+ Captures linear and seasonal patterns in monthly EV registrations
+ **B**ayesian **O**ptimized **L**ong **S**hort-Term Memory (BO-LSTM) network
	+ Models the non-linear residual structure
+ Three scenarios: business as usual, accelerated adoption, saturation bound.
+ EPA 2024: ![[image-36.png]]
+ CAP (Climate Action Plan) aims to achieve a target of 845,000 private EVs and 100,000 light goods EVs by 2030, bringing the total to 945,000 EVs. Supported by an allocation of €200 million under Project Ireland 2040.
	+ EV purchase subsidies
	+ VRT and motor tax relief
	+ Electricity excise exemptions for charging
	+ Home charger rebates
	+ Motorway toll reduction
+ ![[image-37.png]]
+ Lots of statistical modelling stuff that is over my head
+ https://stats.beepbeep.ie/ - official stats of motor industry
+ ![[image-38.png]]
+ Splitting data into training and test: Combined statistical+ML model in paper performed best, followed by statistical models, with ML-only models doing the worst.
+ Projections
	+ Business as usual (BAU): only hit 622k by 2030
	+ Accelerated adoption: need an annual growth rate of ~2.5% to hit 945k by 2030
	  ![[image-39.png]]
	+ Saturation bound adoption: "initial rapid expansion fueled by rising demand and the development of supportive infrastructure but later decelerates due to factors such as market maturity, infrastructure limitations, and consumer adoption patterns"