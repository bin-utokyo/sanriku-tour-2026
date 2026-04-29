---
layout: default
title: Home
---
<section class="hero" aria-labelledby="hero-title">
  <div class="hero__copy">
    <p class="eyebrow">Fukushima Sanriku Tour 2026</p>
    <h1 id="hero-title">Fukushima Sanriku Tour 2026</h1>
    <p>A two-day fieldwork record tracing sites of recovery from Fukushima Hamadori to the Sanriku coast.</p>
    <a class="text-link" href="#notes">View field notes</a>
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
          <img src="{{ file.path | relative_url }}" alt="Field photo from the Fukushima Sanriku Tour" loading="{% if gallery_count == 0 %}eager{% else %}lazy{% endif %}">
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
      <span data-gallery-index>1 / {{ gallery_count }}</span>
      <button type="button" data-gallery-next aria-label="Next photo">›</button>
    </div>
  </div>
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
      <h3>{{ day.day }}</h3>
      <ol class="timeline">
        {% for stop in day.stops %}
        <li>
          <time>{{ stop.time }}</time>
          <span>{{ stop.place }}</span>
          {% if stop.note %}
          <small>{{ stop.note }}</small>
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
    <article class="visit-card" id="{{ item.slug }}">
      <div class="visit-card__main">
        <span class="visit-number">{{ item.id }}</span>
        <div>
          <h3>{{ item.spot }}</h3>
          <ul class="point-list">
            {% for point in item.discussion_points %}
            <li>{{ point }}</li>
            {% endfor %}
          </ul>
        </div>
      </div>
      <div class="visit-card__links" aria-label="Field notes for {{ item.spot }}">
        {% for subpage in item.subpages %}
        <a href="{{ subpage.url | relative_url }}" aria-label="{{ item.spot }} field note by {{ subpage.author }}">
          <strong>{{ subpage.author }}</strong>
        </a>
        {% endfor %}
      </div>
    </article>
    {% endfor %}
  </div>
</section>

<script>
  (() => {
    const gallery = document.querySelector("[data-gallery]");
    if (!gallery) return;

    const slides = Array.from(gallery.querySelectorAll("[data-gallery-slide]"));
    const index = gallery.querySelector("[data-gallery-index]");
    const prev = gallery.querySelector("[data-gallery-prev]");
    const next = gallery.querySelector("[data-gallery-next]");
    if (slides.length === 0) return;

    let active = 0;
    let timer = null;

    const show = (target) => {
      slides[active].classList.remove("is-active");
      active = (target + slides.length) % slides.length;
      slides[active].classList.add("is-active");
      if (index) index.textContent = `${active + 1} / ${slides.length}`;
    };

    const restart = () => {
      if (timer) window.clearInterval(timer);
      if (slides.length > 1) {
        timer = window.setInterval(() => show(active + 1), 4800);
      }
    };

    if (prev) prev.addEventListener("click", () => {
      show(active - 1);
      restart();
    });

    if (next) next.addEventListener("click", () => {
      show(active + 1);
      restart();
    });

    show(0);
    restart();
  })();
</script>
