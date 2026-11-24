// A section that pins to the screen while the page scrolls, turning vertical scrolling into a
// sideways slide of its cards. Once the last card is in view the pin lets go and the page
// carries on scrolling normally. The header stays on screen the whole time.
//
// Sizes are in the page's design px: the page is scaled to the window (see app/mount.jsx),
// so window measurements are divided by that zoom.
import React, { useLayoutEffect, useRef, useState } from 'react';
import { stickyOffset } from '../app/smoothScroll.js';

export default function HScroll({ id, header, children, padLeft, padRight, gap, bodyPad = '28px 0 32px', bodyGap = '28px', style }) {
  const sec = useRef(null), body = useRef(null), track = useRef(null), over = useRef(0);
  const [m, setM] = useState({ vh: 700, bars: 140, over: 0 });

  useLayoutEffect(() => {
    let raf = 0;
    const zoom = () => parseFloat(getComputedStyle(sec.current.closest('.site-page') || document.body).zoom) || 1;
    const update = () => {
      if (!sec.current) return;
      const z = zoom();
      const top = sec.current.getBoundingClientRect().top / z;
      const x = Math.min(Math.max(-top, 0), over.current);
      track.current.style.transform = `translate3d(${-x}px,0,0)`;
      // keep the content clear of the sticky bars while they show: where the pinned panel's
      // top is on screen (it scrolls away once the last card is in), and how far down that needs it
      const pinTop = Math.min(top, 0) < 0 && -top > over.current ? top + over.current : Math.max(top, 0);
      const bars = stickyOffset() / z;
      body.current.style.setProperty('--pin-s', `${Math.min(Math.max(bars - pinTop, 0), bars)}px`);
    };
    const measure = () => {
      if (!sec.current) return;
      const z = zoom();
      const vh = window.innerHeight / z, bars = stickyOffset() / z;
      const o = Math.max(0, Math.round(track.current.scrollWidth - sec.current.clientWidth));
      over.current = o;
      setM((p) => (Math.abs(p.vh - vh) < 1 && Math.abs(p.bars - bars) < 1 && p.over === o ? p : { vh, bars, over: o }));
      update();
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track.current);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    return () => { ro.disconnect(); cancelAnimationFrame(raf); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', measure); };
  }, []);

  return (
    <section id={id} ref={sec} style={{ ...style, position: "relative", height: `${Math.round(m.vh + m.over)}px` }}>
      <div style={{ position: "sticky", top: "0", height: `${Math.round(m.vh)}px`, overflow: "hidden" }}>
        {/* kept just under the sticky bars; follows them up when they hide (site.css) */}
        <div data-pinbody ref={body} style={{ height: `${Math.round(m.vh - m.bars)}px`, boxSizing: "border-box", padding: bodyPad, display: "flex", flexDirection: "column", gap: bodyGap }}>
          {header}
          {/* a size container, so cards can size themselves to the height left for them (cqh) */}
          <div style={{ flex: "1", minHeight: "0", containerType: "size" }}>
            <div ref={track} style={{ display: "flex", gap, height: "100%", width: "max-content", padding: `0 ${padRight} 0 ${padLeft}`, boxSizing: "border-box", willChange: "transform" }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
