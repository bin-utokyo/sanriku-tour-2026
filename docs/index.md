---
layout: default
title: Home
---
<section class="hero" aria-labelledby="hero-title">
  <img class="hero__image" src="{{ '/assets/images/materials/kesennuma.JPG' | relative_url | escape }}" alt="" aria-hidden="true" fetchpriority="high">
  <div class="hero__copy">
    <p class="eyebrow">Fieldwork Archive / April 18-19, 2026</p>
    <h1 id="hero-title">Fukushima Sanriku Tour 2026</h1>
    <p class="hero__lead">As part of our laboratory's learning activities, members of the Behavior in Networks Studies Unit (BinN) toured the Fukushima and Sanriku regions, which were affected by the Great East Japan Earthquake. Together, we learned about the severity of the disaster and the current state of recovery. We are deeply grateful to everyone in each community we visited for their generous support.</p>
    <div class="hero__actions">
      <a class="text-link" href="#notes">View field notes</a>
      <a class="text-link text-link--secondary" href="#route">See the route</a>
    </div>
  </div>
  <dl class="trip-facts" aria-label="Tour overview">
    <div>
      <dt>Dates</dt>
      <dd>April 18-19, 2026</dd>
    </div>
    <div>
      <dt>Route</dt>
      <dd>Koriyama Station to Morioka Station</dd>
    </div>
    <div>
      <dt>Themes</dt>
      <dd>Recovery, disaster preparedness, and local life</dd>
    </div>
  </dl>
</section>

<section id="route" class="section" aria-labelledby="route-title">
  <div class="section-header">
    <div>
      <p class="eyebrow">Route</p>
      <h2 id="route-title">Itinerary</h2>
    </div>
  </div>

  <div class="route-grid">
    {% for day in site.data.itinerary %}
    <article class="route-day">
      <h3>{{ day.day | escape }}</h3>
      <ol class="timeline">
        {% for stop in day.stops %}
        <li>
          <time>{{ stop.time | escape }}</time>
          <span>{{ stop.place | escape }}</span>
          {% if stop.note %}
          <small>{{ stop.note | escape }}</small>
          {% endif %}
        </li>
        {% endfor %}
      </ol>
    </article>
    {% endfor %}
  </div>
</section>

<section id="notes" class="section" aria-labelledby="notes-title">
  <div class="section-header">
    <div>
      <p class="eyebrow">Field Notes</p>
      <h2 id="notes-title">Field Notes</h2>
    </div>
  </div>

  <div class="visit-list">
    {% for item in site.data.spots %}
    {% assign primary_subpage = item.subpages | first %}
    {% if primary_subpage %}
    <a class="visit-card" id="{{ item.slug | slugify | escape }}" href="{{ primary_subpage.url | relative_url | escape }}" aria-label="Open field note for {{ item.spot | escape }}">
    {% else %}
    <article class="visit-card" id="{{ item.slug | slugify | escape }}">
    {% endif %}
      <div class="visit-card__main">
        <span class="visit-number">{{ item.id | escape }}</span>
        <div>
          <h3>{{ item.spot | escape }}</h3>
          <ul class="point-list">
            {% for point in item.discussion_points %}
            <li>{{ point | escape }}</li>
            {% endfor %}
          </ul>
        </div>
      </div>
      <div class="visit-card__links" aria-label="Field notes for {{ item.spot | escape }}">
        {% for subpage in item.subpages %}
        {% assign subpage_attribute = subpage.attribute | default: subpage.year | default: subpage.grade %}
        <div class="visit-card__meta">
          <span class="visit-card__meta-row"><span class="visit-card__meta-label">Author:</span> <strong>{{ subpage.author | escape }}</strong></span>
          {% if subpage_attribute %}
          <span class="visit-card__meta-row">{{ subpage_attribute | escape }}</span>
          {% endif %}
        </div>
        {% endfor %}
      </div>
    {% if primary_subpage %}
    </a>
    {% else %}
    </article>
    {% endif %}
    {% endfor %}
  </div>
</section>

<section id="gallery" class="section section--wide" aria-labelledby="gallery-title">
  <div class="section-header">
    <div>
      <p class="eyebrow">Gallery</p>
      <h2 id="gallery-title">Scenes from the Field</h2>
    </div>
  </div>

  <div class="gallery-shell" data-gallery>
    {% assign gallery_count = 0 %}
    {% for file in site.static_files %}
      {% if file.path contains '/assets/images/materials/' %}
        {% assign image_ext = file.extname | downcase %}
        {% if image_ext == '.jpg' or image_ext == '.jpeg' %}
        <figure class="gallery-slide{% if gallery_count == 0 %} is-active{% endif %}" data-gallery-slide>
          <img src="{{ file.path | relative_url | escape }}" alt="Field photo from the Fukushima Sanriku Tour" loading="{% if gallery_count == 0 %}eager{% else %}lazy{% endif %}">
        </figure>
        {% assign gallery_count = gallery_count | plus: 1 %}
        {% endif %}
      {% endif %}
    {% endfor %}

    {% if gallery_count == 0 %}
    <p class="empty-gallery">Add JPEG images to <code>docs/assets/images/materials/</code> to display them here.</p>
    {% endif %}

    <div class="gallery-controls"{% if gallery_count < 2 %} hidden{% endif %}>
      <button type="button" data-gallery-prev aria-label="Previous photo">‹</button>
      <span data-gallery-index>1 / {{ gallery_count | escape }}</span>
      <button type="button" data-gallery-next aria-label="Next photo">›</button>
    </div>
  </div>
</section>

<script src="{{ '/assets/js/gallery.js' | relative_url | escape }}" defer></script>
