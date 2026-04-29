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
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const show = (target) => {
    slides[active].classList.remove("is-active");
    slides[active].setAttribute("aria-hidden", "true");
    active = (target + slides.length) % slides.length;
    slides[active].classList.add("is-active");
    slides[active].setAttribute("aria-hidden", "false");
    if (index) index.textContent = `${active + 1} / ${slides.length}`;
  };

  const stop = () => {
    if (timer) window.clearInterval(timer);
    timer = null;
  };

  const restart = () => {
    stop();
    if (!reduceMotion && slides.length > 1 && !document.hidden) {
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

  gallery.addEventListener("mouseenter", stop);
  gallery.addEventListener("mouseleave", restart);
  gallery.addEventListener("focusin", stop);
  gallery.addEventListener("focusout", restart);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stop();
    } else {
      restart();
    }
  });

  show(0);
  restart();
})();
