/* ═══════════════════════════════════════════════════════════════
   MAIN SCRIPTS
   Native scrolling only. A virtualised smooth-scroll loop was
   fighting the WebGL hero and made the page feel late.
   ═══════════════════════════════════════════════════════════════ */


/* ── Corner nav — scroll hide / show ───────────────────────────
   Home page: hidden while the landing (which has its own menu) is
   on screen, then slides in from the corners once it is scrolled past.
   Other pages:
   Scrolling DOWN  → adds .nav--hidden to .corner-nav.
   Scrolling UP    → removes .nav--hidden.
──────────────────────────────────────────────────────────────── */
(function () {
  var nav = document.querySelector('.corner-nav');
  if (!nav) return;

  var landing = document.querySelector('.landing:not([hidden])');
  if (landing && 'IntersectionObserver' in window) {
    nav.classList.add('nav--landing');
    // Landing counts as "on screen" until its bottom edge passes 15% from the top.
    new IntersectionObserver(function (entries) {
      nav.classList.toggle('nav--landing', entries[0].isIntersecting);
    }, { rootMargin: '-15% 0px -84% 0px' }).observe(landing);
    return;
  }

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
