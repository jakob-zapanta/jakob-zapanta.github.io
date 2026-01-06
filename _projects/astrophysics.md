---
layout: page
title: Assessing the correlation between stellar flares and spots
description: Astrophysics Data Analysis-- python; juypter notebook
img: assets/img/Astro/Figure 30.png
importance: 4
category: coursework
related_publications: true
toc:
  beginning: true
---

## Summary

Using techniques learned in class and detailed in a paper by our professor, I conducted an analysis of a sample of ~200 binary star systems listed in Petrucci et al. By parsing their data set to find stars that exhibited characteristics of both stellar flares and spots, and downloading and detrending the corresponding lightcurves, I had data for which I could then fit curves to model spot modulation. Then, using Bayesian statistical techniques, I analyzed the correlation between the presence of star spots and the presence of stellar flares (found by Petrucci et al.) in this sample of stars, and found a p-value of 17.4

<hr>

## Background information and research question
This project was my final assignment for an astrophysics coding lab class that I took in the Spring 2025 semester, taught by Professor David Martin.
The project was very open ended, with the assignment being to conduct data analysis using lightcurves from NASA's Transiting Exoplanet Survey Satellite (TESS). 


TESS images the almost all of the night sky. To get data for an individual star, a target pixel file is used to mask the pixels in the images that corrsepond to a specific star. Then, the change in brightness of that collection of pixels can be plotted over time. This plot is called a lightcurve, and is how data collected by TESS is analyzed.

To help us get started with this assignment, we were directed to a few publications that had done work categorizing some of the stars imaged by TESS. One of them, {% cite petrucci2023TESS %}, characterized 208 ultra-cool dwarfs of spectral type M4-L4.

I decided to do work to answer the following research question: out of the stars in the Petrucci paper that they observed to exhibit flare and have spots, is there a correlation between the spots and the occurence of flares? Stars tend to rotate about their axes. If that axis of rotation is oriented in a such a way that parts of a star's surface will come in and out of view, we might be able to observe the brightness of that star changing periodically, which would indicate the existance of star spots on the star's surface, affecting its brightness. So, my research question could be rephrased as, 
> "Are we more or less likely to see flares on a star when that star's spots are visible, or is there no correlation?"

<hr>


## Methodology

#### Packages used

numpy , matplotlib.pyplot , scipy.stats , pandas , lightkurve , wotan , astropy.timeseries


#### Gathering Data
- [x]  Identify all TICs in the petrucci sample with both spots and flares
- [x]  Download all lightcurves (120 second cadence only) associated with those TICs

Each star that TESS images has a TIC (TESS input catalog) number. The study by Petrucci et al. already catalogued whether the 208 stars in their sample exhibited a number of traits, including whether they flares and/or spots. From that, it was a simple measure of indexing which stars were observed to have both flares and spots, and using those stars' TIC IDs to downlod their lightcurves.

#### Spot detection

> The spot modulation flux tells us how far from average the star's brigthness is, due to *spots*. This means that the measurement ignores when the brigthness deviates from the average due to eclipses, flares, or instrumental trends.

**Geting spot modulation: For each of the 56 stars with spots and flares:**

- [x]  Locate, characterize, and detrend any instrumental trends using WOTAN package
- [x]  Normalize this partially-detrended lightcurve
    - What reamins shoudlbe a lightcurve where anything above 1 is postive spot flux modultion (less spots on the star, making it brighter) and anything less than 1 is negative spot flux (more spots visible).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Astro/raw_lc.png" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Astro/detrended_and_clipped_lc.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Normalized raw lightcurve (left) vs. normalized lightcurve detrended from low-frequency instrumental patterns (right).
</div>

Note that the lightcurve that's been detrended from instrumental effects still has visible sinusoidal variation. This is the more rapid and regular variation in brightness due to star spots that was intentionally kept.

    
- [x] Fit a sinusoid using WOTAN to the intrumentally-detrended & normalized lightcurve to model spot modulation flux

*A few things to note about this process*

- I elected to not tell the algorithm to fit a sine curve. I essentially had it do an "average" of sorts across a certain small number of data points on the light curve, and traverse the entire curve doing that, stitching together all those average slopes into one curve that covered the whole light curve. 
    - Because these stars very in brightness sinusoidally due to their star spots, this Frankensteined curve of average slopes always resembled a sine wave.
- For basically all of the stars, finding the correct number of data points for which to fit the small average slopes was a lot of trial and error. There is no "one size fits all" solution: each star varies in brightness at a different rate, and have falre events of varying lengths.
- In all cases, though, it was always a balancing act of figuring out the shortest "time window" of which to take the average slope, to extract as much data as possible, without have too small of a window such that the flares began to "eat into" the curve fit meant only to model the change in brightness due to the star spots.

#### Flare Detection

- [x] Timestamps of all flares are found already by Petrucci et al.


#### Manual Adjustments

- [x]  Manually flag obvious cases of flare interference with WOTAN's curve-fitting algorthim.

<div class="row">
    <div class="col-sm-7 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Astro/Figure 21.png" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-5 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Astro/Figure 166.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Some obvious examples of abnormally long peaks in the spot modulation curve fit caused by flare interference. Different colored curves represent different time windows used for WOTAN's curve fitting algorithm.
</div>


- [x]  Full-period phase shifting: Shifting spot modulation the curve fitted by WOTAN by exactly one full period of the approximate sine wave, and having the code use *that* shifted curve to mark the spot modulation where a flare occurs. This makes the spot modulation curve fit at times of flare occurences "as it should be" (ie., without interference from flares) and is good for cases where flare interference is hard to catagorize.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Astro/Figure 29.png" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Astro/Figure 30.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Example of a lightcurve where full-period phase shifting was used. Note that it is hard to tell by eye whether or not the fitted curve would still have a peak or not without this flare interfering with the fit. Full-period phase shifting lets us see what the fit would look like at that point without the flare.
</div>



#### Bootstrapping Analysis 

The heart of the data analyis was conducted using a resampling technique called bootstrapping, a core topic of the course and one that was utilized and detailed in a paper published by my professor, {% cite MartinDraconis2024 %} to analyze the effects of spots on flares in a more in depth study of a single star system.


**For each of the 56 stars:**
- [x] Count number of flares occuring at times where curve fit of spot modulation flux is positive
- [x] Randomly resample a number of points on the spot modulation curve fit equal to number of flares in sample
- [x] Count number of "flares" (resampled points) occuring at times where curve fit of spot modulation flux is positive 
- [x] Repeat prior step 10,000 times
- [x] Histogram positive counts from 10,000 resamples, compare to positive count from actual lightcurve

Results of this varied greatly across stars, and some stars only had one or two catalogued flares. As such, there was a need to combine this bootstrapping analysis across all 56 stars in this sample.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Astro/Figure 37 (3).png" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Astro/Figure 66.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Astro/Figure 28.png" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Astro/Figure 134.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Varying results of bootstrapping analysis across stars
</div>

<hr>
**For each of the 10,000 resamples:**
- [x] Count number of "flares" (resampled points) occuring at positive spot modulation flux of all 56 stars 
<hr>
**Final analysis**
- [x] Histogram positive counts from 10,000 resamples of all 56 stars, compare to positive count from actual sample
- [x] Perform a one-tailed t-test using this histogram and the flare counts from original sample of 56 stars 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Astro/Figure 258.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Histogram of all 10,000 resamples of all 56 stars, binned by number of "flares" at positive spot flux modulation 
</div>

<hr>

## Results

By performing a one-tailed T-test on this data, we get **a p-value of 0.174.**
What this means is that, if there is no correlation between spots and the occurence of flares, there is a 17.4% chance that this many (or more) flares would randomly occur at times of positive spot modulation.

>"if there is no correlation between spots and the occurence of flares, there is a 17.4% chance that this many (or more) flares would randomly occur at times of positive spot modulation."

There are a number of ways to interperet this result. 17.4% is definetely not the most likely of odds to occur at random, but at the same time, it's also not crazy to think that something this unlikely could occur naturally, especially in a sample of only 56 stars. 

There is also the possibilty that for some stars, there *is* a really strong correlation between positive spot modulation and flares, while on other stars this correlation does not exist at all or is perhaps even the opposite of the general trend: a correlation between *negative* spot modulation and flares.
Unfortunately, one of the sacrfiaces I made by combining my bootstrapping analysis across all the stars in this sample was the loss of trends happening on individual stars for the sake of understanding the whole.

<hr>

# Slides from my academic-style talk:
<style>
.responsive-wrap iframe{ max-width: 100%;}
</style>
<div class="responsive-wrap">
    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ5DcZi90fYTfQG1_hbKpJ2bf7fr_Cx9vpJKO_TsLAk5hxIf0_BhbRA8cqMCPaNzM1XlWtmEgqWktPn/pubembed?start=false&loop=true&delayms=5000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</div>

<hr>