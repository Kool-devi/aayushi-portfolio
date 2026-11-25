// Build-time rendering (see scripts/prerender.js). Renders each page's desktop layout to
// plain HTML, so visitors and crawlers that don't run JavaScript still get the headings,
// body copy and images. In the browser the page is rendered fresh by app/mount.jsx.
import React from 'react';
import { renderToString } from 'react-dom/server';
import HomeDesktop from './pages/HomeDesktop.jsx';
import DarkRoastDesktop from './pages/DarkRoastDesktop.jsx';
import DelicutDesktop from './pages/DelicutDesktop.jsx';
import AttuneDesktop from './pages/AttuneDesktop.jsx';

const PAGES = {
  index: HomeDesktop,
  'project-darkroast': DarkRoastDesktop,
  'project-delicut': DelicutDesktop,
  'project-attune': AttuneDesktop,
};

export const pages = Object.keys(PAGES);

export function render(name) {
  const Page = PAGES[name];
  return renderToString(
    <div className="site-frame">
      <div className="site-page" style={{ width: 1278, margin: '0 auto' }}>
        <Page />
      </div>
    </div>,
  );
}
