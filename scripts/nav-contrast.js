/* ═══════════════════════════════════════════════════════════════
   NAV CONTRAST — home + contact only
   Sets each corner nav item to black or white from a static map of
   what sits behind that corner (section / panel brightness).
   Updates only when a corner's resolved color changes — not a
   continuous per-pixel sample.
═══════════════════════════════════════════════════════════════ */
(function () {
  var nav = document.querySelector('.corner-nav--adaptive');
  if (!nav) return;

  var items = {
    tl: nav.querySelector('.nav--tl'),
    tr: nav.querySelector('.nav--tr'),
    bl: nav.querySelector('.nav--bl'),
    br: nav.querySelector('.nav--br'),
  };

  /* Static text color per home-hero corner (diagonal light→dark bg). */
  var HERO_CORNERS = { tl: 'black', tr: 'white', bl: 'black', br: 'white' };

  var zones = Array.prototype.slice.call(
    document.querySelectorAll('body > section, body > footer.site-footer')
  );
  if (!zones.length) {
    zones = Array.prototype.slice.call(
      document.querySelectorAll('section, footer.site-footer')
    );
  }

  var last = { tl: '', tr: '', bl: '', br: '' };
  var ticking = false;

  function contains(rect, x, y) {
    return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
  }

  function zoneAt(x, y) {
    for (var i = 0; i < zones.length; i++) {
      if (contains(zones[i].getBoundingClientRect(), x, y)) return zones[i];
    }
    return null;
  }

  /* Use layout corners (ignore scroll-hide transform) so sampling
     always reflects the real viewport corners behind the nav. */
  function cornerPoint(key) {
    var el = items[key];
    if (!el) return null;

    var cs = getComputedStyle(el);
    var padTop = parseFloat(cs.top);
    var padRight = parseFloat(cs.right);
    var padBottom = parseFloat(cs.bottom);
    var padLeft = parseFloat(cs.left);
    var w = el.offsetWidth || 40;
    var h = el.offsetHeight || 16;
    var vw = window.innerWidth;
    var vh = window.innerHeight;

    if (key === 'tl') return { x: padLeft + w / 2, y: padTop + h / 2 };
    if (key === 'tr') return { x: vw - padRight - w / 2, y: padTop + h / 2 };
    if (key === 'bl') return { x: padLeft + w / 2, y: vh - padBottom - h / 2 };
    if (key === 'br') return { x: vw - padRight - w / 2, y: vh - padBottom - h / 2 };
    return null;
  }

  function colorFor(zone, corner, x, y) {
    if (!zone) return 'black';

    if (zone.id === 'home') return HERO_CORNERS[corner] || 'black';

    if (zone.id === 'skills' || zone.id === 'about' || zone.id === 'contact') {
      return 'black';
    }

    if (zone.id === 'projects') {
      var left = zone.querySelector('.projects-left');
      if (left && contains(left.getBoundingClientRect(), x, y)) return 'white';
      return 'black';
    }

    if (zone.classList.contains('site-footer')) return 'white';

    return 'black';
  }

  function apply(el, color) {
    if (!el) return;
    el.classList.toggle('nav-item--black', color === 'black');
    el.classList.toggle('nav-item--white', color === 'white');
  }

  function update() {
    ticking = false;
    var corners = ['tl', 'tr', 'bl', 'br'];

    for (var i = 0; i < corners.length; i++) {
      var key = corners[i];
      var el = items[key];
      if (!el) continue;

      var pt = cornerPoint(key);
      if (!pt) continue;

      var color = colorFor(zoneAt(pt.x, pt.y), key, pt.x, pt.y);

      if (color !== last[key]) {
        last[key] = color;
        apply(el, color);
      }
    }
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  update();

  if (typeof lenis !== 'undefined' && lenis) {
    lenis.on('scroll', requestUpdate);
  } else {
    window.addEventListener('scroll', requestUpdate, { passive: true });
  }

  window.addEventListener('resize', requestUpdate);
}());
