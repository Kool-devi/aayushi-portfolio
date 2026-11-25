// A section that pins in place while the page scrolls through `steps` stages, then lets go and
// the page carries on. The content doesn't move while pinned — scrolling only changes which
// stage is showing (reported through `onStep`). Used for the home page's project cards.
//
// Sizes are in the page's design px: the page is scaled to the window (see app/mount.jsx),
// so window measurements are divided by that zoom.
import React, { useLayoutEffect, useRef, useState } from 'react';

// `stepVh`: how much scrolling (as a share of the window height) moves to the next stage.
export default function ScrollSteps({ id, steps, onStep, stepVh = 0.55, style, children }) {
  const outer = useRef(null), inner = useRef(null), last = useRef(-1), cb = useRef(onStep);
  cb.current = onStep;
  const [m, setM] = useState({ h: 0, top: 0, step: 400 });

  useLayoutEffect(() => {
    let raf = 0;
    const zoom = () => parseFloat(getComputedStyle(outer.current.closest('.site-page') || document.body).zoom) || 1;
    const measure = () => {
      if (!outer.current) return;
      const z = zoom(), vh = window.innerHeight / z;
      const h = inner.current.getBoundingClientRect().height / z;
      const top = Math.max(0, Math.round((vh - h) / 2)); // pinned centred in the window
      const step = Math.round(vh * stepVh);
      setM((p) => (Math.abs(p.h - h) < 1 && p.top === top && p.step === step ? p : { h, top, step }));
    };
    const update = () => {
      if (!outer.current) return;
      const z = zoom();
      const top = parseFloat(inner.current.style.top) || 0;
      const step = Math.round((window.innerHeight / z) * stepVh);
      // how far the page has scrolled since the content pinned
      const scrolled = top - outer.current.getBoundingClientRect().top / z;
      // switch half-way through each step, so every stage (first and last too) gets a dwell
      const i = Math.min(steps - 1, Math.max(0, Math.floor((scrolled + step / 2) / step)));
      if (i !== last.current) { last.current = i; cb.current && cb.current(i); }
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(inner.current);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    // start in sync with where the page already is, without overriding a stage picked by hand later
    last.current = -1; update();
    return () => { ro.disconnect(); cancelAnimationFrame(raf); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', measure); };
  }, [steps, stepVh]);

  return (
    <section id={id} ref={outer} style={{ ...style, position: 'relative', height: m.h ? `${Math.round(m.h + (steps - 1) * m.step)}px` : undefined }}>
      <div ref={inner} style={{ position: 'sticky', top: `${m.top}px` }}>
        {children}
      </div>
    </section>
  );
}
