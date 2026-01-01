---
layout: page
title: Assessing the correlation between stellar flares and spots
description: Astrophysics Data Analysis-- python; juypter notebook
img: assets/img/Figure 30.png
importance: 4
category: coursework
related_publications: true
---

## Research goal:

citations {% cite petrucci2023TESS %}.

## Methods:

test text 333

The heart of the data analyis was conducted using a resampling technique called bootstrapping, a core topic of the course and one that was utilized and detailed in research published by my professor, {% cite MartinDraconis2024 %}


## Results:



Final project for my astrophysics coding course

## Here are the slides from the academic-style talk I gave on my work:

<style>
.responsive-wrap iframe{ max-width: 100%;}
</style>
<div class="responsive-wrap">
    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ5DcZi90fYTfQG1_hbKpJ2bf7fr_Cx9vpJKO_TsLAk5hxIf0_BhbRA8cqMCPaNzM1XlWtmEgqWktPn/pubembed?start=false&loop=true&delayms=5000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</div>


{::nomarkdown} {% assign jupyter_path = 'assets/jupyter/blog.ipynb' | relative_url %} {% capture notebook_exists %}{% file_exists assets/jupyter/blog.ipynb %}{% endcapture %} {% if notebook_exists == 'true' %} {% jupyter_notebook jupyter_path %} {% else %} <p>Sorry, the notebook you are looking for does not exist.</p> {% endif %} {:/nomarkdown}


<!-- 
<style>
.responsive-wrap iframe{ max-width: 100%;}
</style>
<div class="jupyter-notebook-iframe-container">
    <iframe path="_projects/Astro_code.ipynb" frameborder="0" width="960" height="569"></iframe>
</div> 
-->


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
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

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
