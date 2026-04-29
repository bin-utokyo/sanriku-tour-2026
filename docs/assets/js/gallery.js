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

  if (prev) {
    prev.addEventListener("click", () => {
      show(active - 1);
      restart();
    });
  }

  if (next) {
    next.addEventListener("click", () => {
      show(active + 1);
      restart();
    });
  }

  show(0);
  restart();
})();
