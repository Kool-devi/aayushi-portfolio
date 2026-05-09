/* ═══════════════════════════════════════════════════════════════
   MAIN SCRIPTS
   Add per-section interaction logic here as sections are built.
   ═══════════════════════════════════════════════════════════════ */


/* ── Corner nav — scroll hide / show ───────────────────────────
   Scrolling DOWN  → adds .nav--hidden to .corner-nav.
     Left items  (TL, BL) slide out to the left.
     Right items (TR, BR) slide out to the right.
   Scrolling UP anywhere on the page → removes .nav--hidden and
   items animate back along the same path.
   A 50 px threshold prevents jitter from tiny micro-scrolls.
──────────────────────────────────────────────────────────────── */
(function () {
  const nav = document.querySelector('.corner-nav');
  if (!nav) return;

  const THRESHOLD = 50; // px — ignore scroll distances smaller than this
  let lastScrollY = window.scrollY;
  let ticking = false;

  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;

    window.requestAnimationFrame(function () {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      if (delta > 0 && currentScrollY > THRESHOLD) {
        // Scrolling down — hide nav
        nav.classList.add('nav--hidden');
      } else if (delta < 0) {
        // Scrolling up — reveal nav
        nav.classList.remove('nav--hidden');
      }

      lastScrollY = currentScrollY;
      ticking = false;
    });
  }, { passive: true });
}());


/* ── Floating image parallax ────────────────────────────────────
   The image scrolls at 1.18× the page speed — a subtle depth boost.
   Only the floating-img transform is touched; nothing else is affected.
   On ≤768 px the image is right-pinned so we use translateY only.
──────────────────────────────────────────────────────────────── */
(function () {
  const img = document.querySelector('.floating-img');
  if (!img) return;

  const FACTOR = 0.18; // extra scroll fraction on top of normal page scroll

  window.addEventListener('scroll', function () {
    const offset = window.scrollY * FACTOR;

    if (window.innerWidth > 768) {
      // Desktop: centred with translate(-50%, -50%) base
      img.style.transform = 'translate(-50%, calc(-50% - ' + offset + 'px))';
    } else {
      // Mobile: right-pinned, only vertical transform
      img.style.transform = 'translateY(calc(-50% - ' + offset + 'px))';
    }
  }, { passive: true });
}());
