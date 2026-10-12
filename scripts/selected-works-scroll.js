/* Selected Works — pinned horizontal scroll (tablet and up).
   The section is given extra height equal to how far the track has to travel
   sideways, so one pixel of vertical scroll moves the track one pixel left
   while .sw-pin is stuck to the top. Once the last card's right edge reaches
   the gutter, the pin releases and the page carries on to the footer.
   On phones the cards stack vertically in CSS and this stays inactive. */
(function () {
  'use strict';

  var section = document.querySelector('[data-sw]');
  if (!section) return;

  var pin = section.querySelector('[data-sw-pin]');
  var track = section.querySelector('[data-sw-track]');
  var cards = Array.prototype.slice.call(track.querySelectorAll('.sw-card'));
  var currentEl = section.querySelector('[data-sw-current]');
  var totalEl = section.querySelector('[data-sw-total]');

  totalEl.textContent = pad(cards.length);

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    section.classList.add('is-static');
    return;
  }

  // Must match the phone breakpoint in styles/selected-works.css.
  var phone = window.matchMedia('(max-width: 767px)');
  var enabled = false;
  var travel = 0;
  var gutter = 0;
  var lastX = -1;
  var lastIndex = -1;
  var ticking = false;

  function pad(n) {
    return n < 10 ? '0' + n : String(n);
  }

  function reset() {
    enabled = false;
    travel = 0;
    section.style.height = '';
    track.style.transform = '';
    section.style.removeProperty('--sw-progress');
  }

  function measure() {
    if (phone.matches) {
      reset();
      return;
    }
    enabled = true;
    var last = cards[cards.length - 1];
    gutter = parseFloat(getComputedStyle(track).paddingLeft) || 0;
    travel = Math.max(0, last.offsetLeft + last.offsetWidth + gutter - pin.clientWidth);
    section.style.height = (pin.offsetHeight + travel) + 'px';
    lastX = -1;
    update();
  }

  function update() {
    ticking = false;
    if (!enabled) return;
    var progress = travel ? Math.min(1, Math.max(0, -section.getBoundingClientRect().top / travel)) : 0;
    var x = Math.round(progress * travel * 100) / 100;
    if (x === lastX) return;
    lastX = x;

    track.style.transform = 'translate3d(' + -x + 'px, 0, 0)';
    section.style.setProperty('--sw-progress', progress.toFixed(4));

    var index = 0;
    var best = Infinity;
    cards.forEach(function (card, i) {
      var d = Math.abs(card.offsetLeft - gutter - x);
      if (d < best) { best = d; index = i; }
    });
    if (progress === 1) index = cards.length - 1;
    if (index !== lastIndex) {
      lastIndex = index;
      currentEl.textContent = pad(index + 1);
    }
  }

  function requestUpdate() {
    if (ticking || !enabled) return;
    ticking = true;
    window.requestAnimationFrame(update);
  }

  // Tabbing to an off-screen card would make the browser scroll the clipped
  // pin sideways; instead, scroll the page to where that card is in view.
  section.addEventListener('focusin', function (event) {
    if (!enabled) return;
    var card = event.target.closest('.sw-card');
    pin.scrollLeft = 0;
    if (!card || !travel) return;
    var target = Math.min(travel, Math.max(0, card.offsetLeft - gutter));
    var sectionTop = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo(0, sectionTop + target);
  });

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', measure);
  if ('ResizeObserver' in window) {
    new ResizeObserver(measure).observe(pin);
  }
  measure();
})();
