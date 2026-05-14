/* ═══════════════════════════════════════════════════════════════
   MAIN SCRIPTS
   ═══════════════════════════════════════════════════════════════ */


/* ── Lenis smooth scroll ────────────────────────────────────────
   Subtle inertia — duration 1.1 s with an expo-out easing.
   wheelMultiplier 0.85 keeps it feeling responsive, not sluggish.
   All other scroll listeners hook into lenis.on('scroll') so they
   receive the virtualised scroll position rather than raw events.
──────────────────────────────────────────────────────────────── */
var lenis = null;

(function () {
  if (typeof Lenis === 'undefined') return;

  lenis = new Lenis({
    duration:        1.1,
    easing:          function (t) { return 1 - Math.pow(1 - t, 4); },
    smoothWheel:     true,
    wheelMultiplier: 0.85,
    touchMultiplier: 1.5,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}());


/* ── Corner nav — scroll hide / show ───────────────────────────
   Scrolling DOWN  → adds .nav--hidden to .corner-nav.
   Scrolling UP    → removes .nav--hidden.
   With Lenis we use e.direction (stable, not per-frame delta noise).
   With native scroll we compare against the last known position.
──────────────────────────────────────────────────────────────── */
(function () {
  var nav = document.querySelector('.corner-nav');
  if (!nav) return;

  var THRESHOLD   = 50;
  var lastScrollY = window.scrollY; // initialise to real position, not 0

  if (lenis) {
    lenis.on('scroll', function (e) {
      // e.direction: 1 = scrolling down, -1 = scrolling up
      if (e.direction === 1 && e.scroll > THRESHOLD) {
        nav.classList.add('nav--hidden');
      } else if (e.direction === -1) {
        nav.classList.remove('nav--hidden');
      }
    });
  } else {
    window.addEventListener('scroll', function () {
      var currentScrollY = window.scrollY;
      var delta = currentScrollY - lastScrollY;
      if (delta > 0 && currentScrollY > THRESHOLD) {
        nav.classList.add('nav--hidden');
      } else if (delta < 0) {
        nav.classList.remove('nav--hidden');
      }
      lastScrollY = currentScrollY;
    }, { passive: true });
  }
}());


/* ── Floating image parallax ────────────────────────────────────
   The image scrolls at 1.18× the page speed — a subtle depth boost.
──────────────────────────────────────────────────────────────── */
(function () {
  var img = document.querySelector('.floating-img');
  if (!img) return;

  var FACTOR = 0.18;

  function onScroll(scrollY) {
    var offset = scrollY * FACTOR;
    if (window.innerWidth > 768) {
      img.style.transform = 'translate(-50%, calc(-50% - ' + offset + 'px))';
    } else {
      img.style.transform = 'translateY(calc(-50% - ' + offset + 'px))';
    }
  }

  if (lenis) {
    lenis.on('scroll', function (e) { onScroll(e.scroll); });
  } else {
    window.addEventListener('scroll', function () {
      onScroll(window.scrollY);
    }, { passive: true });
  }
}());
