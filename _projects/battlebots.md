---
layout: page
title: Battlebots Weapon Design
description: Hax et Lux -- CAD & Waterjet 
img: assets/img/Battlebots/open_bot_closeup.jpg
importance: 2
category: others
giscus_comments: false
---

Last year, I worked on a team of four to design and manufcature a 3lb combat robot. With this bot, we competed in a small tournament amongst other teams the Tufts Robotics Club in the fall, and then in a nation-wide tournament at the National Havoc Robotics League in the following spring.

I worked briefly on the design of the bot during its early stages, and was very hands-on with the final assembly of the bot, including the many last-minute adjustments that were made right before, and especially during, the competitions. However, my primary role in this was designing and manufacturing what is arguably the most important part of any battlebot: the weapon.

<hr>

#### Design

As a team, we decided on a weapon type called the horizontal spinner. For any spinning weapon, one of the best ways to maximize its potential for damage is by maximizing its moment of interia about its spinning axis. This can be done in two ways: by increasing the mass, and by distributing that mass as far away from that axis of rotation as possible.

Another consideration in the design is how much "bite" you want your weapon to have. That is, how much do you want your spinner to embed itself when it meets an opponent? More bite means more of the energy behind your spinner can be transfered into your opponent, causing more damage

I decided to maximize this wepaon's moment of interia by going a a kind of "ring and spokes" design, in order to get as much of the mass away from the axis of rotation as possible without outright making it a slod piece of metal, which I was worried would be too heavy for the motor. To maximize the bite, I decided to make one part of the ring jut out, which would be how this weapon would strike other bots. The idea was this this would make the spinner behave less like a saw and more like a small, fast hammer. The challenge with this one-toothed saw design, though, was that the rest of the ring needed to be adjusted in order to keep the weapon's center of mass centered on the axle. This was necessary because the weapon would be spinning at very high speeds, and an imbalance could start a wobble that could easily snap an axle or break the motor. 

Using the mass properties tool in Onshape, I was able to view where the center of mass was of the part I was designing, and adjust my sketch little by little until the axle hole was directly centerd on the center of mass.

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Battlebots/center_of_mass.png" title="onshape worklfow" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="caption">
        Center of mass marker perfectly inside the axle hole
    </div>
</div>


Another hiccup was that we weren't able to order materials for our weapon and had to use the scrap metal available in the machine shop. We found a piece of half-inch AR-500 steel, perfect for what we needed. The only problem was that, with it being a scrap piece, the remaining area was too small to fit the asymmetrical ring spinner that I had designed. 

Not wanting to shrink the entire ring, which would compromise on both reach and total mass, I elected to instead iterate my design around the geometry of the metal scrap that we had. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Battlebots/ring_design.png" title="ring weapon" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Battlebots/axe_design.png" title="rotated axe" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Initial ring design (left) vs the redesign, rotated to fit diagonally on the metal piece to maximize material usage (right).
</div>


One unexpected benefit that came from this forced redesign was the potential for this weapon to have a higher bite. By removing a large chunk of that ring along the outside, the weapon now has the potential to embed itself further into an oppent's bot upon contact. One way to think about it is that *more of the opponent's bot can fit inside the circle defined by the spinning weapon's reach.* While in therory a single-toothed weapon is the best for maximizing the bite, that doesn't actually work if the rest of the weapon prevents an opponent's bot from getting close enough to have the tooth deeply embed itself upon contact.

#### Manufacturing

The maunfacturing process itself went very smoothly. I first loaded up a dxf file of the outline of the weapon to set the toolpath for the waterjet, and did a dry run of the nozze over our metal piece to confirm that everything was aligned properly.

Once I was satisfied with the alignment of the toolpath and the material, I started the operation and monitored it the entire time. Because this was a relatively thick piece of steel, the cutting water jet operation took around 30 minutes.

After removing the finished piece, I filed down the tabs that had been auto-generated by the machine's software, and our weapon was done with manufacturing!

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Battlebots/software.JPG" title="water jet software" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Battlebots/finished_part.JPG" title="finished part" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Toolpath of cutting operation, and the finished part!
</div>

<hr>

#### Competing

