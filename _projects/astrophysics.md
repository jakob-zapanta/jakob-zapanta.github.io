---
layout: page
title: Assessing the correlation between stellar flares and spots
description: Astrophysics Data Analysis-- python; juypter notebook
img: assets/img/Figure 30.png
importance: 4
category: coursework
related_publications: true
---

## Background information and research question
This project was my final assignment for an astrophysics coding lab class that I took in the Spring 2025 semester, taught by Professor David Martin.
The project was very open ended, with the assignment being to conduct data analysis using lightcurves from NASA's Transiting Exoplanet Survey Satellite (TESS).

To help us get started with this assignment, we were directed to a few publications that had done some work on categorizing some of the stars imaged by TESS. One of them, {% cite petrucci2023TESS %}, characterized a little over 200 stars, focusing on ultra-cool dwarfs of spectral type M4-L4.

I decided to do work to answer the following research question: out of the stars in the Petrucci paper that they observed to exhibit flare and have spots, is there a correlation between the spots and the occurence of flares? Stars tend to rotate about their axes. If that axis of rotation is oriented in a such a way that parts of a star's surface will come in and out of view, we might be able to observe the brightness of that star changing periodically, which would indicate the existance of star spots on the star's surface, affecting its brightness. So, my research question could be rephrased as, 
> "Are we more or less likely to see flares on a star when that star's spots are visible, or is there no correlation?"




## Research plan / Methodology:

#### Gathering Data:
- [x]  Identify all TICs in the petrucci sample with both spots and flares
- [x]  Download all lightcurves (120 second cadence only) associated with those TICs

Each star that TESS images has a TIC (TESS input catalog) number. The study by Petrucci et al. already catalogued whether the stars in their sample exhibited a number of traits, including whether they flares and/or spots. From that, it was a simple measure of indexing which stars had 

#### Spot detection:

> The spot modulation flux tells us how far from average the star's brigthness is, due to *spots*. This means that the measurement ignores when the brigthness deviates from the average due to eclipses, flares, or instrumental trends.

**Geting spot modulation:**

- [x]  Locate, characterize, and detrend any instrumental trends using WOTAN package
- [x]  Normalize this partially-detrended lightcurve
    - What reamins shoudlbe a lightcurve where anything above 1 is postive spot flux modultion (less spots on the star, making it brighter) and anything less than 1 is negative spot flux (more spots visible).
- [x] Fit a sinusoid using WOTAN to the intrumentally-detrended & normalized lightcurve to model spot modulation flux

#### Flare Detection

- [x] Timestamps of all flares are found already by Petrucci et al.

#### Bootstrapping Analysis 

The heart of the data analyis was conducted using a resampling technique called bootstrapping, a core topic of the course and one that was utilized and detailed in a paper published by my professor, {% cite MartinDraconis2024 %} to analyze the effects of spots on flares in a more in depth study of a single star system.

- [x] Count number of flares occuring at times where curve fit of spot modulation flux is positive
- [x] Randomly resample a number of points on the spot modulation curve fit equal to number of flares in sample
- [x] Count number of "flares" (resampled points) occuring at times where curve fit of spot modulation flux is positive 
- [x] Repeat prior step 10,00 times
- [x] Histogram positive counts from 10,000 resamples, compare to positive count from actual sample




## Results:

maybe for some stars there is a really strong correlation, and for others there just isn't. one of the sacrfiaces I made with combining analysis across all the stars is that you lose out on the individual differences between each star.


## Slides from my academic-style talk:
<style>
.responsive-wrap iframe{ max-width: 100%;}
</style>
<div class="responsive-wrap">
    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ5DcZi90fYTfQG1_hbKpJ2bf7fr_Cx9vpJKO_TsLAk5hxIf0_BhbRA8cqMCPaNzM1XlWtmEgqWktPn/pubembed?start=false&loop=true&delayms=5000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</div>







<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>




<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>


<!-- can i do row [column[row, row], column] ?-->
