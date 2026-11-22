import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HeroScene from '../../HeroScene.jsx';

const mountNode = document.querySelector('#home-landing-root');

if (mountNode) {
  createRoot(mountNode).render(
    <StrictMode>
      <HeroScene />
    </StrictMode>
  );
}
