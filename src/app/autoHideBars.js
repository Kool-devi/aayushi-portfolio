// Case studies: the sticky site nav and chapter bar (both marked data-sticky) slide up out of
// view together while the visitor scrolls down, and slide back as soon as they scroll up. This
// only starts once the chapter bar has scrolled up and docked under the nav; above that point
// both bars always show. Only a transform changes, so nothing else on the page moves.

const NUDGE = 6; // px the page must move in one direction before the bars react

let lastY = 0;
let travel = 0;
let started = false;

function hasBars() {
  return !!document.querySelector('nav[data-sticky]');
}

// The scroll position at which the chapter bar docks under the nav: where the block just above
// it (the case study's header) ends, less the nav's height. Measured from that block, not the
// bars themselves, because the bars' on-screen position includes the slide.
function dockY() {
  const nav = document.querySelector('div[data-sticky]');
  const above = document.querySelector('nav[data-sticky]')?.previousElementSibling;
  if (!nav || !above) return Infinity;
  return above.getBoundingClientRect().bottom + window.scrollY - nav.getBoundingClientRect().height;
}

export function barsHidden() {
  return document.documentElement.hasAttribute('data-bars-hidden');
}

export function setBarsHidden(hidden) {
  const root = document.documentElement;
  if (hidden && hasBars()) {
    // both bars move up by their combined height, so they slide as one block (site.css);
    // in the page's design px, since the page is scaled to the window
    const zoom = parseFloat(getComputedStyle(document.querySelector('.site-page')).zoom) || 1;
    let h = 0;
    document.querySelectorAll('[data-sticky]').forEach((el) => { h += el.getBoundingClientRect().height; });
    root.style.setProperty('--bars-shift', `${-h / zoom}px`);
    root.setAttribute('data-bars-hidden', '');
  }
  else root.removeAttribute('data-bars-hidden');
}

// Whether the bars will be hidden once the page has scrolled to `y` (used by in-page links,
// so a chapter lands at the top of the window when the bars are going away).
export function barsHiddenAt(y) {
  if (!hasBars() || y < dockY() - 1) return false;
  if (y > window.scrollY + 1) return true;
  if (y < window.scrollY - 1) return false;
  return barsHidden();
}

function onScroll() {
  const y = Math.max(0, window.scrollY);
  const dy = y - lastY;
  lastY = y;
  if (y < dockY() - 1) { travel = 0; setBarsHidden(false); return; }
  if (!dy) return;
  // count how far the page has moved in the current direction
  travel = Math.sign(dy) === Math.sign(travel) ? travel + dy : dy;
  if (travel > NUDGE) setBarsHidden(true);
  else if (travel < -NUDGE) setBarsHidden(false);
}

export function startAutoHideBars() {
  if (started) return;
  started = true;
  lastY = window.scrollY;
  window.addEventListener('scroll', onScroll, { passive: true });
  // a keyboard visitor tabbing into the bars always gets to see them
  document.addEventListener('focusin', (e) => {
    if (e.target.closest?.('[data-sticky]')) setBarsHidden(false);
  });
}
