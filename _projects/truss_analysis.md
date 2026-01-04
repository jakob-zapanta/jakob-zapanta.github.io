---
layout: page
title: Truss analysis
description: Design, analysis and construction of a statically determinate truss
img: assets/img/truss/truss_analysis.png
importance: 2
category: coursework
toc:
  beginning: true
---

The goal of the project was to design and build a statically determinate truss, and to then find the support reactions and members’ internal loads under two different loading conditions. 

## Design

I decided to make a simple hip truss, constructed solely out of 3/4/5 traingles for extra simplicity. Before contructing, I did a quick check to make sure this truss was statically determinate:
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/truss/design.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Truss design; Two loading scenarios considered for analysis. 
</div>


## Construction

The truss was constructed using plastic extrusions for the members, and cardstock for the gusset plates. In order to maximize contact area at the joints and keep the member lengths consistent, the diagonal pieces had angles cut in on their ends.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/truss/open_connection.JPG" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets//img/truss/final_truss.JPG" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    An example of how pieces were cut to keep the joint connections flush (left), and the final contructio (right).
</div>




Scales were used to find the support reactions for the loaded and unloaded truss. *Note*, scale readings for loading scenarios are readings after the scales had been zeroed to the weight of the unloaded truss.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/truss/loading1.JPG" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets//img/truss/loading2.JPG" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Truss under loading condition 1 (left) and loading condition 2 (right).
</div>

<hr>

## Theoretical calculations for the internal loads of members

### Loading 1

Under loading 1, members FB, GC, and HD are zero force members, so I can remove them from the truss and then calculate the internal forces in the remaining members:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/truss/loading1calc.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/truss/loading1calc2.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

### Loading 2

Under loading 2, members FB, and HD are zero force members, so I can remove them from the truss and then calculate the internal forces in the remaining members:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/truss/loading2calc.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/truss/loading2calc2.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

<hr>

## Comparision against online truss simulation

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/truss/sim1.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/truss/sim2.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Simulation of truss under loading condition 1 (left) and loading condition 2 (right).
</div>


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/truss/comparison.png" title="example image" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Comparsion between theoretical calculations and computer simulation.
</div>
