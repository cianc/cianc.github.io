---
title: "Paper: Conversion of AC distribution lines into DC lines to upgrade transmission capacity"
draft: false
created: 2025-11-10
tags:
  - grids
  - transmission
---
https://addi.ehu.es/bitstream/handle/10810/71479/Conversion%20of%20AC%20distribution%20lines%20into%20DC%20lines%20to%20upgrade%20transmission%20capacity_Preprint.pdf

> Abstract - Nowadays it is difficult to find corridors for building new overhead lines in industrialized countries. In many cases it is simply impossible. For that reason, new solutions for the upgrading of existing overhead lines are required. The conversion of existing AC lines into DC lines represents an alternative to upgrading the power carrying capability for the existing rights of way (ROW). Thus, this paper presents a comparison between AC and DC technologies for power transmission and distribution. The underlying technology is reviewed and different conversions are analyzed, for simple and double circuit lines. Also, increased power carrying capability and loss reduction are studied. Finally, an example of the conversion of a 66 kV double circuit AC distribution line into a DC line is included.

Why might we want to convert high voltage AC transmission and distribution lines to DC (HVDC), and what would it take? 

The short answer is: we'd be able to push a lot more power through existing conductors (63% in the distribution case study, but more is possible), and the most expensive part would be the new HVDC converter terminals (stations), while the existing lines and pylons could mostly be reused.

Since the terminal station cost is a function of voltage, and we need higher voltage for longer distances, the authors claim that switching distribution to DC (and not transmission) is the clearest win for now. With the caveat that DC conversion technologies are improving all the time so this could change.

This graph shows how DC terminal cost dominates at lower distances, but at some point the lower losses overcome this and DC becomes cheaper than AC.

 ![[image-137.png]]

It should also be noted that AC transmission distance is limited by reactive power  (needed for EM fields but not performing work) flow which makes it unsuitable for long distance water crossing.

I also learned a couple of neat things about high voltage lines:
+ Increased pollution can increase the conductivity of insulators and so increase the risk of arcs and outages. It can also lead to corona discharge which wastes energy, corrodes equipment, and creates ozone and radio interference.
+ It's possible to use the earth (or water in the case of undersea cables) as the return path for current (monopolar line), but this can cause corrosion of underground (undersea) metal like nearby gas pipes.



> [!NOTE]- Notes
> + "ampacity": the maximum amount of electrical current, measured in amperes, that a conductor can carry continuously without exceeding its temperature rating
> + Pollution effects HV lines: can increase the conductivity of insulator surfaces, which can lead to flashover, power outages, and reduced efficiency. Pollutants also cause corona discharge, which wastes energy, creates ozone and radio interference, and can corrode equipment. Over time, this can degrade insulators and lead to an increased need for maintenance and potential equipment failure. 
> + Traditional methods of increasing capacity
> 	+ Increase voltage
> 	+ Increase number of conductors
> 	+ Increase the current density (current per unit cross-sectional area) using high temperature low sag conductors (HTLS)
> 	+ Use high surge impedance loading technology (HSIL) - increases a line's natural power transfer capacity by changing the line's geometry, eg: increasing the number of subconductors per phase and optimising their spacing
> 	+ **Using AC lines to transmit DC power**
> + HVDC technologies
> 	+ LCC classical technology
> 		+ Line commutated converters: can control active power (useful energy consumed), but reactive power (needed for EM fields but not performing work) is a function of active power, so needs large capacitor banks (to reduce reactive power needed).
> 		+ Can only provide power to a system that has local generation.
> 	+ VSC
> 		+ Uses insulated gate bipolar transistors (IGBTs)
> 		+ Can independently control active and reactive power
> 		+ Easier/possible to black-start
> 		+ Smaller size
> 		+ Can provide power to a system without local generation
> 		+ Losses are higher than LCC
> 		+ Behaves worse (?) when there are DC faults.
> 		+ Smaller max voltage/power than LCC
> + AC vs DC
> 	+ Most transmission is three phase AC
> 	+ An optimised HVDC transmission circuit has lower losses than an AC circuit for the same transmitted power, BUT it's a higher fixed overhead in HVDC (higher station and substation losses), but increases with distance for AC.
> 	+ HVDC costs less and uses less land.
> 	+ ![[image-137.png]]
> 	+ But HVDC substation costs are dropping while AC substation costs are rising.
> 	+ AC transmission cables have distance limits due to reactive power for increasing cable capacitance. Not an issue for DC.
> 	+ Synchronising two AC networks for a connection can be very hard. Not an issue for DC.
> 	+ HVDC makes it easier to control power.
> 	+ Less land needed for HVDC. Why? Only one conductor instead of three?
> 	+ Power carrying capacity
> 		+ AC power carrying capacity constrained by reactive power and for DC it's thermal characteristics.
> 		+ The power transmitted by overhead lines can be increased to 147%, while the percentage line losses are reduced to 68%, when using HVDC technology
> 	+ Fault performance
> 		+ A DC line short-circuit will not be extinguished by itself until the current is brought down to zero and the arc is deionized.
> 		+ Need a an active component to extinguish the fault current.
> + Converting AC lines to DC
> 	+ HVDC, the cost of a converter station increases with the power square root. This is a good argument for only converting distribution lines, not transmission lines.
> 	+ Monopolar line: 
> 		+ A single high-voltage direct current (HVDC) transmission line that uses the earth or sea as a return path for the electrical current.
> 		+ It is a simple and cost-effective configuration for long-distance power transmission, particularly for submarine cables, as it only requires one conductor instead of two. 
> 		+ Usually negative to prevent corona effects
> 		+ Using the earth for return can cause corrosion of underground metal like pipes. Can also have limited capacity.
> 		+ Some options for converting from AC triples to DC bipolar pairs
> 			+ If we have an even number of AC circuits, covert to an even number of DC circuits, eg: 2 AC circuits can be converted to 6 DC pairs
> 			+ If we have an odd number of AC circuits, convert to DC pairs with a spare conductor in the case of failure
> 			+ If we have an odd number of AC circuits, run one over thermal limit and two below thermal limit for some period of time, then keep swapping so that each conductor is only over thermal limit for 1/3 of the time.
> 		+ HVDC allows for higher voltages
> 		+ HVDC allows slightly higher current because the conductor resistance is slightly lower due to various factors
> 		+ HVDC has lower losses
> 		+ HVDC needs more insulation
> 		+ HVDC has a smaller EM field
> 	+ Case study: 66 kV, 50 Hz, double circuit line, 18km long, maximum rated voltage of the line is 72.5 kV
> 		+ Using VSC
> 		+ Three DC circuits, +-45kV>
> 		+ **The power transmitted by overhead lines can be increased about 63%.** But this transmitted power could increase above this value by choosing a higher DC voltage. In this case, safety distances and insulation must be revised.
