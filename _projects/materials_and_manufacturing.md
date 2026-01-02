---
layout: post
title: M.A.T.E.R.I.A.L.S
description: (short for Metal And Textile Exoskeletal Reinforcement Incorporating Aluminum & Leather Sheets)
img: assets/img/gauntlet/final_gauntlet.jpg
importance: 1
category: coursework
related_publications: true
images:
  slider: true
toc:
  beginning: true

---

## Manufacturing a gauntlet out of aluminum sheet metal

This project's acronym, short for *"Metal And Textile Exoskeletal Reinforcement Incorporating Aluminum & Leather Sheets,"*  (I'm very proud of that one) is a nod to the class for which this was our group's final project: Materials and Manufacturing.


<div class="row mt-3">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gauntlet/final_gauntlet.jpg" title="final assembly" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="caption">
        Final assembly of the gauntlet.
    </div>
</div>


<hr>

## Initial design


Presented with the task of building an artificat of our choosing to showcase the knowledge of manufacturing techniques gained in this course, we decided that this gauntlet would be a great way to display and deepen our profiency in sheet metal working.

Before we could do that though, we needed to design and prototype with same more forgiving mediums. To that end, we used Solidworks to draw up some shapes that we'd want to cut out for various parts of the gauntlet, namely the knuckle plate and finger scales.

For some slightly higher-fidelity prototyping, we then used the waterjet to cut a few finger scales of different shapes and sizes, to get a sense for how our CAD would actually look and feel.

<hr>

## Build Process

<br>

### The Knuckle Plate

We started with the knuckle plate, as it was a good center piece from which we could build everything out from. 
We painted the cut out with a blue paint called dykem, which allowed us to easily incribe marking lines on it.

### Handplates
The handplates were a bit simpler to make, as each plate only required the four ridges along the hand. However, these ridges needed to line up along the plates, so we had to be very precise when doing our bending. We used dykem for these too, and we taped them together, overlapping them the way we wwanted them to overlap in the final assembly, and traced out the lines for the bends needed to make the ridges.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gauntlet/hand_dykem.JPG" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gauntlet/IMG_9914.JPG" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    (Left) Lines to bnd inscribed in dykem on the handplates. (Right) Mock assembly of handplates to check alignment.
</div>

<br>


### Finger scales

### Vambrace

Finally, we wanted to create a vambrace (forearm armor) using a large sheet of aluminum metal. Given the course’s emphasis on making connections to materials in the real world, we thought it would be fitting to use a material we acquired from the real world. To that end, we used an old sign from our engineering building, which we realized was made from aluminum sheet metal and would go perfectly with the rest of the project. Similarly to the handplates, we used the jump shear to cut out a suitable piece of the sign, and made bends along its length to make it curve around the arm.

## Subsection assembly

<hr>

## Final Assembly

<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true" space-between=30 Slides-per-view-auto="true" Grab-cursor="true" zoomable="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/gauntlet/final_gauntlet.JPG" class="img-fluid rounded zoomable z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/gauntlet/gauntlet_underside.jpeg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/gauntlet/gauntlet-fist.jpeg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/gauntlet/gauntlet-open.jpeg" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>
    <video muted autoplay controls>
        <video style="width:100%" src="/assets/video/video2.mp4" controls=""></video>
    </video>
  </swiper-slide>
</swiper-container>

Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/video/.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

<hr>

## Challenges and Troubleshooting

During this project, we ran into our fair share of unexpected issues.


The first major one came from the design of the knuckle plate. We needed a bend going lengthwise across the plate so that it would cover the knuckle, but we also really wanted those ridges running down along the hand, too. That meant having to deal with the points where the four bends going down the hand met the bend going across the knuckles. On our first attempt at making the knuckle piece, we ran into the issue of the metal ripping where the perpendicular bends met. We discovered we could solve this issue by making the depth of those ridges get smaller as they got closer to the one perpendicular bend, so as to reduce the stresses at those points:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gauntlet/knuckle_rips.jpeg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gauntlet/gauntlet-fist-cropped.jpeg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    (Left) Knuckle ridges at a consistent height, resulting in metal tearing where bends meet. (Right) Knuckle ridges tapering towards cross-bend, avoiding rips and creating a smoother look.
</div>

<br>

The second major issue we ran into was that the waterjet in the machine shop broke on the day we were intending to cut out all of our finger scales. Because we had a tight deadline for this project, and we did not know when the waterjet would be operational again, we decided to pivot to cutting our finger scales out by hand, using good old sharpie and metal shears.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gauntlet/assembly_line.JPG" title="assembly line" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="caption">
        The impromptu assembly line, formed by the sudden need to cut out ~50 metal scales.
    </div>
</div>


The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
