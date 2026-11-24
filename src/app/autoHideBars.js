// Case studies: the sticky site nav and chapter bar (both marked data-sticky) slide up out of
// view while the visitor scrolls down, and slide back as soon as they scroll up. The chapter
// bar follows the nav a beat later, so it reads as tucking into the nav (see site.css).
// Only a transform changes, so nothing else on the page moves.

const SHOW_ABOVE = 240; // px of scroll: near the top of the page the bars always stay
const NUDGE = 6; // px the page must move in one direction before the bars react

let lastY = 0;
let travel = 0;
let started = false;

function hasBars() {
  return !!document.querySelector('nav[data-sticky]');
}

export function barsHidden() {
  return document.documentElement.hasAttribute('data-bars-hidden');
}

export function setBarsHidden(hidden) {
  const root = document.documentElement;
  if (hidden && hasBars()) root.setAttribute('data-bars-hidden', '');
  else root.removeAttribute('data-bars-hidden');
}

// Whether the bars will be hidden once the page has scrolled to `y` (used by in-page links,
// so a chapter lands at the top of the window when the bars are going away).
export function barsHiddenAt(y) {
  if (!hasBars() || y <= SHOW_ABOVE) return false;
  if (y > window.scrollY + 1) return true;
  if (y < window.scrollY - 1) return false;
  return barsHidden();
}

function onScroll() {
  const y = Math.max(0, window.scrollY);
  const dy = y - lastY;
  lastY = y;
  if (y <= SHOW_ABOVE) { travel = 0; setBarsHidden(false); return; }
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
