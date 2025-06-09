
---
title: "Paper: Drone flight data reveal energy and greenhouse gas emissions savings for very small package delivery"
draft: false
tags:
  - paper review
  - drones
  - climate
  - modelling
---
This is a fun paper on the energy requirements and GHG emissions for drones vs other modes of delivery: [https://www.cell.com/patterns/pdfExtended/S2666-3899(22)00180-5](https://www.cell.com/patterns/pdfExtended/S2666-3899\(22\)00180-5)  
It's a couple of years old, and only looks at drones with small payloads (< 0.5kg), but I was surprised at how much more efficient they are than most other delivery options, including electric vans. The [Manna](https://www.manna.aero/) ones where I live are so noisy that I just assumed they were energy hogs.

![[image-22.png]] (The above assumes drone-sized packages of <= 0.5kg)

The researchers created a drone delivery energy model based on tests + physics modelling + ML. They found that "drone delivery \[...\] can be up to 94% lower than conventional transportation modes, with only electric cargo bicycles providing lower GHGs/package." 

Some things that stood out:
+  There is very little different in power consumption at speeds between 4 and 12m/s. But since faster speeds translate to less time in the air, faster means less energy per delivery. ![[image-21.png]]
+ The work was based on a relatively small drone (max capacity 0.5kg). It would be interesting to see it extended to cover larger and newer drones. A larger drone will be less efficient for the same payload but will be able to carry more in fewer flights. This is why drones are terrible if you look at the energy needed to deliver a ton (presumably 1000kg because the rest of the paper is in metric units.) ![[image-23.png]]
+ ![[image-24.png]]
+ Counter-intuitively, drones may have longer delivery paths than road-based delivery due to airspace restrictions.
+ "Total energy consumption can be reduced by 34% by reducing vertical takeoff"
