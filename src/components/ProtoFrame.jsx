// An embedded phone prototype that stays invisible until its first screen has drawn
// (the prototype posts { attuneProtoReady } once its phone is in place), then fades in.
import React, { useEffect, useRef, useState } from 'react';

export default function ProtoFrame({ src, title, width, height, onReady }) {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);
  const readyCb = useRef(onReady);
  readyCb.current = onReady;
  useEffect(() => {
    const onMsg = (e) => {
      if (e.data && e.data.attuneProtoReady && ref.current && e.source === ref.current.contentWindow) { setReady(true); setTimeout(() => readyCb.current && readyCb.current(), 400); }
    };
    window.addEventListener('message', onMsg);
    // safety net: if the prototype never reports in, show it anyway a few seconds after it loads
    const el = ref.current, onLoad = () => { fallback = setTimeout(() => setReady(true), 3000); };
    let fallback;
    if (el) el.addEventListener('load', onLoad);
    return () => { window.removeEventListener('message', onMsg); if (el) el.removeEventListener('load', onLoad); clearTimeout(fallback); };
  }, []);
  return (
    <iframe
      ref={ref}
      src={src}
      title={title}
      scrolling="no"
      style={{ position: 'absolute', left: 0, top: 0, width, height, border: 0, background: 'transparent', opacity: ready ? 1 : 0, transition: 'opacity .35s ease' }}
    />
  );
}

// Download the prototypes in the background once the page has settled, so they open
// straight from the browser cache when their mode scrolls into view.
let prefetched = false;
export function usePrefetchProtos(urls) {
  useEffect(() => {
    if (prefetched) return;
    prefetched = true;
    const go = () => urls.forEach((u, i) => setTimeout(() => { try { fetch(u, { priority: 'low' }).catch(() => {}); } catch (e) {} }, i * 400));
    const idle = () => (window.requestIdleCallback ? requestIdleCallback(go, { timeout: 3000 }) : setTimeout(go, 1500));
    if (document.readyState === 'complete') idle(); else window.addEventListener('load', idle, { once: true });
  }, []);
}
