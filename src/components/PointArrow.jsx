// The hero's arrow, rotated so it always points at the hero heading, whatever
// the screen size (the heading and the arrow move relative to each other as the layout scales).
// It aims at the centre of the heading's text (marked data-arrow-target); if a page has more than
// one (the mobile hero stacks two layers), the nearest one is used.
import React, { useLayoutEffect, useRef, useState } from 'react';

export default function PointArrow({ size = 54, strokeWidth = 7, color = '#0B0B0B' }) {
  const ref = useRef(null);
  const [deg, setDeg] = useState(45); // the drawn arrow points down-right (45°)

  useLayoutEffect(() => {
    let raf = 0;
    const aim = () => {
      const el = ref.current;
      if (!el) return;
      const a = el.getBoundingClientRect();
      const ax = a.left + a.width / 2, ay = a.top + a.height / 2;
      let best = null, bestD = Infinity;
      document.querySelectorAll('[data-arrow-target]').forEach((t) => {
        const range = document.createRange();
        range.selectNodeContents(t); // the text itself, not the (often wider) box
        const r = range.getBoundingClientRect();
        if (!r.width) return;
        const tx = r.left + r.width / 2, ty = r.top + r.height / 2, d = Math.hypot(tx - ax, ty - ay);
        if (d < bestD) { bestD = d; best = [tx, ty]; }
      });
      if (!best) return;
      const next = Math.round(Math.atan2(best[1] - ay, best[0] - ax) * 180 / Math.PI);
      setDeg((p) => (p === next ? p : next));
    };
    const later = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(aim); };
    aim();
    window.addEventListener('resize', later);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(later);
    window.addEventListener('load', later);
    const ro = new ResizeObserver(later);
    ro.observe(document.body);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', later); window.removeEventListener('load', later); ro.disconnect(); };
  }, []);

  return (
    <svg ref={ref} width={size} height={size} viewBox="0 0 100 100" style={{ display: 'block', transform: `rotate(${deg - 45}deg)` }}>
      <path d="M14 14 L84 84 M84 34 L84 84 L34 84" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="square"></path>
    </svg>
  );
}
