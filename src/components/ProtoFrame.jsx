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
    return () => window.removeEventListener('message', onMsg);
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
