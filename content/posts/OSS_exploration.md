---
title: Picking an OSS project
draft: false
created: 2025-08-14
tags:
  - OSS
  - software
---
I'm looking for a climate-related OSS project to contribute to. I found https://climatetriage.com/ via a discussion on http://workonclimate.slack.com/. It claims to help find "impactful projects that welcome new developers with Help Wanted and Good First Issues".  It's a frontend for the Github project database maintained by https://opensustain.tech/ that allows searching and sorting by category(energy systems, biosphere, emissions etc), programming language, number of [good first issues](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels),  and a few other things.

My project constraints are:
1. Must be something I've used or will use or be relevant to something else I'm interested in.
2. Python or Go.
3. Has a real world impact.
4. Can't be licensed under AGPL for day-job reasons.
5. An active community would be nice.

Here's my shortlist:
1. https://github.com/mlco2/codecarbon: "Estimate and track carbon emissions from your computer, quantify and analyze their impact."
2. https://github.com/davidusb-geek/emhass: "A Python module designed to optimize your home energy interfacing with Home Assistant."
3. https://github.com/hultenvp/solis-sensor: "HomeAssistant integration for the SolisCloud PV Monitoring portal via SolisCloud API"
4. https://github.com/kube-green/kube-green: "A K8s operator to reduce CO2 footprint of your clusters"


%% ### electricitymaps
> This project aims to provide a free, open-source, and transparent visualisation of the carbon
> intensity of electricity consumption around the world.
> We fetch the raw production data from public, free, and official sources. They include official government and transmission system operators' data. We then run our flow-tracing algorithm to calculate the actual carbon intensity of a country's electricity consumption.

Apart from https://app.electricitymaps.com/ being fun to play with, I've used the API when rewriting some of the pipelines for a productionised version of [[carbon_aware_computing_for_datacenters]] in my day job.

They also do an excellent job on helping people to contribute via https://github.com/electricitymaps/electricitymaps-contrib and https://github.com/electricitymaps/electricitymaps-contrib/blob/master/CONTRIBUTING.md 

Unfortunately there don't see to be any recent open issues for the parser (where most of the Python code lives) that are bugs or feature requests. They all seem to be operational (such and such a parser is down because the data source is down or misconfigured). %%
### codecarbon 
![[image-94.png]]
> What is the carbon emission impact of my computer program?
> We created a Python package that estimates your hardware electricity power consumption (GPU + CPU + RAM) and we apply to it the carbon intensity of the region where the computing is done.

This can track emissions at server level, or the Python application function level. Kind of like a profiler for power usage and emissions. It does this by pulling system-level power stats and combining it with carbon intensities for the local grid region. It can also recommend compute regions with lower carbon intensity for major cloud providers. It only covers CPU+RAM+GPU,  not storage or networking.

Note that this is different from the Green Software Foundation's [carbon-aware-sdk](https://github.com/Green-Software-Foundation/carbon-aware-sdk) which as far as I can tell from the [demo](https://www.youtube.com/watch?v=-CmyrpisHXM)is a wrapper around carbon intensity providers like electricitymap.com or watttime.org. It provides a simple API to query carbon intensities and find the least intense regions by time and location. This project does not seem very active.

I've [written a bit](tags/software) about the energy and carbon efficiency of software before, and have written software for carbon efficiency instrumentation, so this ticks the "something I'm already interested in box".

The documentation is quite nice, including these bits for onboarding: https://github.com/mlco2/codecarbon?tab=readme-ov-file#contributing and https://github.com/mlco2/codecarbon/blob/master/CONTRIBUTING.md. There are plenty of "good first issues" in the queue and commit frequency seems decent, though discussions seem quiet and I don't see any other channels of communication advertised.

On the negative side, the code profiling/optimisation aspect of this goes against the idea discussed in [[building_green_software]] (that I mostly agree with) that the biggest and easiest emissions savings come from operational and framework changes, not code optimisations for individual applications. 

~2 active contributors.
### emhass
![[image-95.png]]
> Energy Management for Home Assistant, is a Python module designed to optimize your home energy interfacing with Home Assistant.

https://github.com/davidusb-geek/emhass-add-on is a separate repo for the home assistant add-on for easier HA integration.

I use HA and have a few integrations (solar PV, battery, smart thermostat) that would make this the kind of thing I might use.

Development instructions are here: https://emhass.readthedocs.io/en/latest/develop.html. There are no "good first issues" in the queue, but it's active and there are things that naively look like tacklable bugs. There are also a few recently active discussions. 

~2 active contributors.
### solis-sensor
> [SolisCloud](https://www.soliscloud.com/) is the next generation Portal for Solis branded PV systems from Ginlong.

and
>  ❗The SolisCloud API is known to be unstable and can fail to respond resulting in "no inverter found" issues. See [troubleshooting](https://github.com/hultenvp/solis-sensor?tab=readme-ov-file#warning--known-limitations) section. Join the discussion [here](https://github.com/hultenvp/solis-sensor/discussions/71) to find out about known limitations and to ask questions.

Exciting!

As noted above I use HA and actually use this integration for my own inverter, so definitely have a vested interest in this one.

No "good first issues", but plenty of other bugs in the queue. Discussions not very active.

~ 1-2 active contributors
### kube-green
![[image-96.png]]
> kube-green is a simple k8s addon that automatically shuts down (some of) your resources when you don't need them.

As mentioned above in [[#codecarbon]] I think operational or framework fixes are the easiest ways to get the biggest wins so I like this approach. I'd need to learn about k8s, but I've been [meaning to do that](https://github.com/kelseyhightower/kubernetes-the-hard-way) for a while (all my container experience is with [Borg](https://research.google/pubs/large-scale-cluster-management-at-google-with-borg/).

No "good first issues", and the open bug queue looks a little stale, but contributions look steady and there are ~2 active contributors. Discussions are quiet

Contribution instructions are fine: https://github.com/kube-green/kube-green/blob/main/CONTRIBUTING.md

---
So for now I'm going to poke around codecarbon and kube-green and figure out which is more appealing. I'll come back and update this note when I have more details. 


