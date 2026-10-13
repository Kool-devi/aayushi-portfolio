/* ═══════════════════════════════════════════════════════════════
   ATTUNE — FADE CAROUSEL
   Stacked slides cross-fade on a timer. Cycling pauses while the
   carousel is off screen and is skipped for reduced motion.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var INTERVAL_MS = 3500;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  Array.prototype.forEach.call(
    document.querySelectorAll('[data-attune-fade]'),
    function (carousel) {
      var slides = carousel.querySelectorAll('.attune-fade-slide');
      if (slides.length < 2) return;

      var idx = 0;
      var timer = null;

      function show(next) {
        slides[idx].classList.remove('is-active');
        idx = next;
        slides[idx].classList.add('is-active');
      }

      function start() {
        if (timer || reduceMotion.matches) return;
        timer = setInterval(function () {
          show((idx + 1) % slides.length);
        }, INTERVAL_MS);
      }

      function stop() {
        clearInterval(timer);
        timer = null;
      }

      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) start();
            else stop();
          });
        }, { threshold: 0.25 }).observe(carousel);
      } else {
        start();
      }
    }
  );
})();
