// Real iPhone frame (the same transparent-screen frame the Delicut page uses), with the screen
// content sitting underneath it. `children` is either nodes or a function given the screen
// geometry, so 400x874 prototypes can be zoomed to fill the screen and centred vertically.
import React from 'react';

const FRAME = 'Mockups/Delicut/iPhone%20Frame.webp';
const AR = 1686 / 830; // frame height / width
const INSET_X = 0.033, INSET_Y = 0.013; // screen inset within the frame (matches Delicut)

export function screenOf(width) {
  const w = width * (1 - 2 * INSET_X);
  const h = width * AR * (1 - 2 * INSET_Y);
  const z = w / 400; // prototype zoom
  const protoH = 874 * z;
  // the prototype is a touch taller than the screen: pin it to the top so its Dynamic Island
  // keeps its natural gap below the bezel, and let the sliver of overflow fall off the bottom
  return { w, h, z, protoH, top: 0 };
}

export default function IPhone({ width, screenBg = '#1A1A18', shadow = 'drop-shadow(0 30px 34px rgba(0,0,0,.22))', style, outer, children }) {
  const s = screenOf(width);
  return (
    <div {...outer} style={{ position: 'relative', width: width + 'px', aspectRatio: '830 / 1686', flex: 'none', filter: shadow, ...style }}>
      <div style={{ position: 'absolute', left: INSET_X * 100 + '%', right: INSET_X * 100 + '%', top: INSET_Y * 100 + '%', bottom: INSET_Y * 100 + '%', borderRadius: '13% / 6.1%', overflow: 'hidden', background: screenBg }}>
        {typeof children === 'function' ? children(s) : children}
      </div>
      <img src={FRAME} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', pointerEvents: 'none' }} />
    </div>
  );
}

// Box for a prototype (or its still) zoomed to the screen width; see screenOf for the trim.
export function protoBox(s) {
  return { position: 'absolute', left: 0, top: s.top + 'px', width: '100%', height: s.protoH + 'px' };
}
