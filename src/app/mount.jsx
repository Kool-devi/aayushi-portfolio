// Mounts one page. Wide screens get the desktop layout (designed at 1280px wide),
// phones and small tablets the mobile layout (designed at 390px wide). Each layout is
// scaled to the window width so it looks exactly like the design at any size.
import React, { Suspense, lazy, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/base.css';
import '../styles/site.css';
import '../styles/desktop-hover.css';
import '../styles/mobile-hover.css';
import { scrollToSection, startSmoothScroll } from './smoothScroll.js';

export const DESKTOP_MIN = 1024; // px of window width
const DESKTOP_W = 1278; // the design boards’ content width
const MOBILE_W = 388;
const MOBILE_MAX = 560; // the mobile column never grows wider than this

function viewportWidth() {
  return document.documentElement.clientWidth || window.innerWidth;
}

function useViewport() {
  const [w, setW] = useState(viewportWidth);
  useEffect(() => {
    const on = () => setW(viewportWidth());
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  return w;
}

// A page class = the shared logic class + the page's view.
export function page(Logic, View) {
  return class Page extends Logic {
    render() {
      return <View v={this.renderVals()} />;
    }
  };
}

// Once the page has rendered, honour a #fragment in the URL (e.g. index.html#work).
function ScrollToHash() {
  useEffect(() => {
    const id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;
    const go = () => { const el = document.getElementById(id); if (el) scrollToSection(el, { instant: true }); };
    go();
    // fonts and images can shift the layout a little after first paint
    const t = setTimeout(go, 400);
    return () => clearTimeout(t);
  }, []);
  return null;
}

function Frame({ desktop, mobile }) {
  const w = useViewport();
  const isDesktop = w >= DESKTOP_MIN;
  const Page = isDesktop ? desktop : mobile;
  const width = isDesktop ? DESKTOP_W : MOBILE_W;
  const zoom = isDesktop ? w / DESKTOP_W : Math.min(w, MOBILE_MAX) / MOBILE_W;

  useEffect(() => {
    document.documentElement.dataset.layout = isDesktop ? 'desktop' : 'mobile';
  }, [isDesktop]);

  return (
    <div className="site-frame">
      <div className="site-page" style={{ width, zoom }}>
        <Suspense fallback={null}>
          <Page key={isDesktop ? 'd' : 'm'} />
          <ScrollToHash />
        </Suspense>
      </div>
    </div>
  );
}

// loaders: { desktop: () => import(...), mobile: () => import(...) } resolving to page classes
export function mount(loaders) {
  const desktop = lazy(() => loaders.desktop().then((m) => ({ default: m.default })));
  const mobile = lazy(() => loaders.mobile().then((m) => ({ default: m.default })));
  createRoot(document.getElementById('root')).render(<Frame desktop={desktop} mobile={mobile} />);
  startSmoothScroll();
}
