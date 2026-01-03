---
layout: page
title: 3D Printing my Dawg
description: and other artsy prints
img: assets/img/3DPrints/lex_print_closeup.jpg
importance: 1
category: others
images:
  compare: true
  slider: true
---

## Lexi
There's a lot you can do with a software like Blender and a 3D printer. One thing you can do is sculpt a 3D model of your dog, being careful to avoid overhanging geometry (as much as a sitting labrador mix allows, anyway), export that model to an stl, send it to an FDM printer, and print!


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3DPrints/lexi_print.JPG" title="3Dprint" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3DPrints/lexi_topview.JPG" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    My 3D printed model of my dog, and my actual dog, for reference. Can you guess which is which?
</div>

Unfortunately, I did this work on an laptop I traded in, and I forgot to back up a few of my blender files, including this one. However, I can speak to some of the technical aspects of making this piece. 
For example,  I was able to create the 3D model such that the only place a support was needed was under the head. The image below shows this clearer than the one above, but I specifically modeled the ears to stick out enough to come across as ears, but not enough to require their own supports, which would've been a very unnecessary waste of plastic.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3DPrints/lex_print_closeup.jpg" title="closeup of the print" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>


Additionally, I had to make sure the front legs we thick enough to stand on their own for the layers in the print where they were relatively tall, but not yet connected to the main body. I also made sure to keep the slope of these legs, and more importantly the lower belly, steep enough to not require supports, saving on plastic and printing time.

<br>

## Nightwing

I also modeled and 3D printed a nightwing, a dragon from the book series Wings of Fire by Tui T. Sutherland, as a gift for one of my siblings.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3DPrints/nightwing_reference.png" title="nightwing reference" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3DPrints/night_wing_print.JPG" title="nightwing print" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Reference image vs the final product.
</div>


This one was also modeled in Blender, and it was a lot harder to model and print than my dog was. I immediately opted to abandon the way the tail curls in the reference photo, as a flate tail would look just asdragon-like and require a lot less plastic (no supports needed for the latter). The wings were the hardest part, both to model and to print. I really only had that one picture as a reference (this was a book series, so all I had were these illustartions between the front cover and table of contents) so I had to do a bit of guesswork at how that 2D depiction of the wings would look in 3D. The ends of the wings in that drawing are very cluttered, so I decided that it was trying to depict wings that were slightly unfurled. That was tricky, because it meant I would need supports under all of that geometry. To recude the headache around that as much as possible, I erred on the side of making the wings thicker, to reduce the possiblity of it breaking when removing the supports after printing.


<img-comparison-slider>
  {% include figure.liquid path="assets/img/3DPrints/nightwing_reference.png" class="img-fluid rounded z-depth-1" slot="first" %}
  {% include figure.liquid path="assets/img/3DPrints/night_wing_print.JPG" class="img-fluid rounded z-depth-1" slot="second" %}
</img-comparison-slider>
