// A section that pins in the exact centre of the window while the page scrolls through `steps`
// stages, then lets go and the page carries on. The content doesn't move while pinned —
// scrolling only changes which stage is showing (reported through `onStep`). If the content is
// taller than the window allows, it is scaled down just enough to fit, so nothing is cropped.
// Used for the home page's project cards (desktop only).
//
// Sizes are in the page's design px: the page is scaled to the window (see app/mount.jsx),
// so window measurements are divided by that zoom.
import React, { useLayoutEffect, useRef, useState } from 'react';

const GAP = 32; // minimum room kept above and below the pinned content (design px)

// `stepVh`: how much scrolling (as a share of the window height) moves to the next stage.
export default function ScrollSteps({ id, steps, onStep, stepVh = 0.55, style, children }) {
  const outer = useRef(null), inner = useRef(null), content = useRef(null), last = useRef(-1), cb = useRef(onStep);
  cb.current = onStep;
  const [m, setM] = useState({ h: 0, s: 1, top: 0, step: 400 });
  const mRef = useRef(m);
  mRef.current = m;

  useLayoutEffect(() => {
    let raf = 0;
    const zoom = () => parseFloat(getComputedStyle(outer.current.closest('.site-page') || document.body).zoom) || 1;
    const measure = () => {
      if (!outer.current) return;
      const z = zoom(), vh = window.innerHeight / z;
      const h = content.current.offsetHeight; // natural height, unaffected by the scale below
      const s = Math.min(1, (vh - 2 * GAP) / h);
      const top = Math.round((vh - h * s) / 2); // centred in the window
      const step = Math.round(vh * stepVh);
      setM((p) => (Math.abs(p.h - h) < 1 && Math.abs(p.s - s) < 0.001 && p.top === top && p.step === step ? p : { h, s, top, step }));
    };
    const update = () => {
      if (!outer.current) return;
      const z = zoom(), { top, step } = mRef.current;
      // how far the page has scrolled since the content pinned
      const scrolled = top - outer.current.getBoundingClientRect().top / z;
      // switch half-way through each step, so every stage (first and last too) gets a dwell
      const i = Math.min(steps - 1, Math.max(0, Math.floor((scrolled + step / 2) / step)));
      if (i !== last.current) { last.current = i; cb.current && cb.current(i); }
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(content.current);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    last.current = -1; update();
    return () => { ro.disconnect(); cancelAnimationFrame(raf); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', measure); };
  }, [steps, stepVh]);

  const ph = m.h * m.s; // pinned height on screen
  return (
    <section id={id} ref={outer} style={{ ...style, position: 'relative', height: m.h ? `${Math.round(ph + (steps - 1) * m.step)}px` : undefined }}>
      <div ref={inner} style={{ position: 'sticky', top: `${m.top}px`, height: m.h ? `${Math.round(ph)}px` : undefined }}>
        <div ref={content} style={{ transform: m.s < 1 ? `scale(${m.s})` : undefined, transformOrigin: 'top center' }}>
          {children}
        </div>
      </div>
    </section>
  );
}
