/* ═══════════════════════════════════════════════════════════════
   ATTUNE — THE FOUR MODES
   Desktop: a 100vh sticky frame. Scroll progress through the tall
   track picks the active mode; CSS slides its copy and phone in.
   Below 768px the modes are stacked and this script stays idle.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var MOBILE_MQ = window.matchMedia('(max-width: 768px)');

  var section = document.getElementById('attune-modes-scroll');
  if (!section) return;

  var items = Array.prototype.slice.call(
    section.querySelectorAll('.attune-modes-item')
  );
  if (!items.length) return;

  var pin = section.querySelector('.attune-modes-pin');
  var hint = section.querySelector('.attune-modes-hint');
  var activeIdx = -1;
  var pinVisible = false;

  function applyState(idx) {
    if (idx === activeIdx) return;
    activeIdx = idx;
    items.forEach(function (item, i) {
      item.classList.toggle('is-active', i === idx);
      item.classList.toggle('is-before', i < idx);
    });
  }

  function resolveActive() {
    if (MOBILE_MQ.matches) return;

    var rect = section.getBoundingClientRect();
    var viewH = window.innerHeight || document.documentElement.clientHeight;
    var track = section.offsetHeight - viewH;
    var progress = track > 0 ? Math.min(1, Math.max(0, -rect.top / track)) : 0;
    var n = items.length;

    applyState(progress >= 1 ? n - 1 : Math.floor(progress * n));
  }

  function setPinVisible(visible) {
    var arrived = visible && !pinVisible;
    pinVisible = visible;
    if (!hint || MOBILE_MQ.matches) return;

    if (arrived) {
      hint.classList.remove('is-in');
      void hint.offsetWidth;
      hint.classList.add('is-in');
    } else if (!visible) {
      hint.classList.remove('is-in');
    }
  }

  if ('IntersectionObserver' in window && pin) {
    new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          setPinVisible(entry.isIntersecting && entry.intersectionRatio >= 0.35);
        });
      },
      { threshold: [0, 0.2, 0.35, 0.5, 0.75] }
    ).observe(pin);
  }

  applyState(0);
  resolveActive();

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      section.classList.add('attune-modes-scroll--ready');
    });
  });

  if (typeof lenis !== 'undefined' && lenis) {
    lenis.on('scroll', resolveActive);
  } else {
    window.addEventListener('scroll', resolveActive, { passive: true });
  }
  window.addEventListener('resize', resolveActive, { passive: true });
})();
