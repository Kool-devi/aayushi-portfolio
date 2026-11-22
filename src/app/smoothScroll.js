// Subtle smooth scrolling for mouse wheels and trackpads (Lenis). Touch screens keep their
// native scrolling, and visitors who ask their system for reduced motion get plain scrolling.
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

// How quickly the page catches up with the wheel each frame (0–1). Lenis's default is 0.1;
// a little higher keeps the glide short so the page still feels responsive.
const LERP = 0.12;

let lenis = null;

// In-page links such as “Projects” (#work) glide instead of jumping. Lenis's own `anchors`
// option doesn't stop the browser's jump, and the two fight (the page overshoots), so the
// click is handled here instead.
function onAnchorClick(event) {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const link = event.target.closest?.('a[href*="#"]');
  if (!link || (link.target && link.target !== '_self')) return;
  const url = new URL(link.href, location.href);
  if (url.origin !== location.origin || url.pathname !== location.pathname || !url.hash) return;
  const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
  if (!target) return;
  event.preventDefault();
  lenis.scrollTo(target);
  if (url.hash !== location.hash) history.pushState(null, '', url.hash);
}

export function startSmoothScroll() {
  if (lenis) return lenis;
  lenis = new Lenis({ lerp: LERP, autoRaf: true, stopInertiaOnNavigate: true });
  document.addEventListener('click', onAnchorClick);
  return lenis;
}
