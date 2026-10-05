/* ═══════════════════════════════════════════════════════════════
   MAIN SCRIPTS
   Native scrolling only. A virtualised smooth-scroll loop was
   fighting the WebGL hero and made the page feel late.
   ═══════════════════════════════════════════════════════════════ */


/* ── Corner nav — scroll hide / show ───────────────────────────
   Scrolling DOWN  → adds .nav--hidden to .corner-nav.
   Scrolling UP    → removes .nav--hidden.
──────────────────────────────────────────────────────────────── */
(function () {
  var nav = document.querySelector('.corner-nav');
  if (!nav) return;

  var THRESHOLD = 50;
  var lastScrollY = window.scrollY;

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
}());


/* ── Floating image parallax ────────────────────────────────────
   Retired hero only. No-ops when that image is not in the page.
──────────────────────────────────────────────────────────────── */
(function () {
  var img = document.querySelector('.floating-img');
  if (!img) return;

  var FACTOR = 0.18;

  window.addEventListener('scroll', function () {
    var offset = window.scrollY * FACTOR;
    if (window.innerWidth > 768) {
      img.style.transform = 'translate(-50%, calc(-50% - ' + offset + 'px))';
    } else {
      img.style.transform = 'translateY(calc(-50% - ' + offset + 'px))';
    }
  }, { passive: true });
}());
