// DarkRoast "Iterations": the versions laid out like a design canvas instead of tabs. One lane
// per screen (Project listing, Detail header); in each, V1 → V4 sit side by side as frames on a
// dotted board, two to a row (the second column dropped a little, like a pinned moodboard) and
// slightly askew. Hover straightens and lifts a frame; click (or tap) opens it large, with its
// note and ← → to walk through every version. On phones each lane scrolls sideways.
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const RATIO = '1440 / 1000';
// Lanes can set `ratio` (the Detail header shots are a bar in a lot of page colour, so that lane
// shows a wide crop around the bar) and `pad` (the Project listing shots are the interface edge
// to edge, so they sit inside a margin of page colour and their rounded corners stay whole).
const TILT = [-1.2, 0.8, -0.6, 1.1];
const MONO = { fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" };

function Frame({ it, lane, ratio = RATIO, pad, i, tiltOff = 0, last, mobile, onOpen }) {
  const [hov, setHov] = useState(false);
  const lift = hov;
  return (
    <div style={{ position: "relative", flex: mobile ? "0 0 86%" : undefined, minWidth: "0", marginTop: !mobile && i % 2 ? "56px" : undefined, scrollSnapAlign: mobile ? "start" : undefined }}>
      <button type="button" onClick={onOpen} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} onFocus={() => setHov(true)} onBlur={() => setHov(false)}
        aria-label={`${lane} ${it.n}: ${it.t}. Open larger`}
        style={{ all: "unset", cursor: "zoom-in", display: "flex", flexDirection: "column", gap: "12px", width: "100%", boxSizing: "border-box",
          transform: lift ? "rotate(0deg) translateY(-6px)" : `rotate(${TILT[(i + tiltOff) % 4]}deg)`, transition: "transform .45s cubic-bezier(.3,.9,.3,1)" }}>
        {/* frame name, like a canvas frame label */}
        <span style={{ ...MONO, display: "flex", alignItems: "center", gap: "8px", color: "#6E6E69" }}>
          <span style={{ color: "#E5322B" }}>{it.n}</span>
          <span style={{ opacity: lift ? 1 : 0, transition: "opacity .3s" }}>Open {"↗\uFE0E"}</span>
        </span>
        {/* padded frames take their height from the image (no aspect-ratio + height:100%, which iPhone
            Safari can fail to resolve inside a flex button, cropping the bottom of the shot) */}
        <span style={{ display: "block", aspectRatio: pad ? undefined : ratio, boxSizing: "border-box", padding: pad || "0", borderRadius: mobile ? "12px" : "16px", overflow: "hidden", background: "#EFEFEC",
          boxShadow: lift ? "0 2px 4px rgba(0,0,0,.06), 0 30px 50px -24px rgba(0,0,0,.35)" : "0 1px 2px rgba(0,0,0,.06), 0 16px 30px -22px rgba(0,0,0,.3)",
          outline: lift ? "2px solid #0B0B0B" : "2px solid transparent", outlineOffset: "3px", transition: "box-shadow .45s, outline-color .3s" }}>
          <img src={it.src} alt="" loading="lazy" width="1440" height="1000" style={pad ? { display: "block", width: "100%", height: "auto" } : { display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
        </span>
        <span style={{ fontSize: mobile ? "12.5px" : "12.5px", lineHeight: "1.45", color: "#6E6E69", whiteSpace: "normal", maxWidth: "52ch" }}>{it.t}</span>
      </button>
      {/* arrow to the next version in the row */}
      {!last && !mobile && i % 2 === 0 && (
        <span aria-hidden="true" style={{ position: "absolute", right: "-47px", top: "calc(28px + 56px + (100% - 84px) * .3)", width: "22px", height: "22px", borderRadius: "50%", background: "#0B0B0B", color: "#FCEB3F", display: "grid", placeItems: "center", fontSize: "12px", zIndex: "1" }}>→</span>
      )}
    </div>
  );
}

function Lightbox({ lanes, at, setAt, mobile }) {
  const all = lanes.flatMap((l, li) => l.items.map((it, i) => ({ ...it, lane: l.t, ratio: l.ratio || RATIO, pad: l.pad, li, i })));
  const k = all.findIndex((x) => x.li === at[0] && x.i === at[1]);
  const cur = all[k];
  const go = useCallback((d) => { const n = all[(k + d + all.length) % all.length]; setAt([n.li, n.i]); }, [k, all.length]);
  const box = useRef(null);
  // focus moves into the viewer when it opens and back to the thumbnail when it closes
  useEffect(() => {
    const opener = document.activeElement;
    box.current?.querySelector('button')?.focus({ preventScroll: true });
    return () => { if (opener && document.contains(opener)) opener.focus({ preventScroll: true }); };
  }, []);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setAt(null); if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'Tab' && box.current) { // keep Tab inside the viewer
        const f = [...box.current.querySelectorAll('button')]; if (!f.length) return;
        const i = f.indexOf(document.activeElement), n = e.shiftKey ? (i <= 0 ? f.length - 1 : i - 1) : (i === f.length - 1 ? 0 : i + 1);
        e.preventDefault(); f[n].focus();
      }
    };
    window.addEventListener('keydown', onKey);
    const html = document.documentElement, prev = html.style.overflow;
    html.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); html.style.overflow = prev; };
  }, [go]);
  const btn = { all: "unset", cursor: "pointer", width: "44px", height: "44px", borderRadius: "50%", display: "grid", placeItems: "center", fontSize: "16px", flex: "none" };
  return (
    <div ref={box} data-lenis-prevent role="dialog" aria-modal="true" aria-label={`${cur.lane} ${cur.n}`} onClick={() => setAt(null)}
      style={{ position: "fixed", inset: "0", zIndex: "100", background: "rgba(11,11,11,.86)", display: "grid", placeItems: "center", padding: mobile ? "16px" : "32px", boxSizing: "border-box", fontFamily: "'Geist',sans-serif", color: "#FFFFFF" }}>
      <figure onClick={(e) => e.stopPropagation()} style={{ margin: "0", width: "min(1100px, 100%)", display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
          <span style={{ ...MONO, color: "#FFFFFFb3" }}><span style={{ color: "#FCEB3F" }}>{cur.n}</span>{"  ·  "}{cur.lane}{"  ·  "}{k + 1} / {all.length}</span>
          <button type="button" onClick={() => setAt(null)} aria-label="Close" style={{ ...btn, background: "#FFFFFF1A", color: "#FFFFFF" }}>✕</button>
        </div>
        <img src={cur.src} alt={`${cur.lane} ${cur.n}: ${cur.t}`} style={{ display: "block", width: "100%", height: cur.pad ? "auto" : undefined, maxHeight: "72vh", aspectRatio: cur.pad ? undefined : cur.ratio, boxSizing: "border-box", padding: cur.pad ? "2.5%" : "0", objectFit: cur.pad ? "contain" : "cover", borderRadius: "14px", background: "#EFEFEC" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
          <figcaption style={{ margin: "0", fontSize: mobile ? "15px" : "17px", lineHeight: "1.45", color: "#FFFFFF", maxWidth: "60ch" }}>{cur.t}</figcaption>
          <div style={{ display: "flex", gap: "8px" }}>
            <button type="button" onClick={() => go(-1)} aria-label="Previous version" style={{ ...btn, background: "#FFFFFF1A", color: "#FFFFFF" }}>←</button>
            <button type="button" onClick={() => go(1)} aria-label="Next version" style={{ ...btn, background: "#FCEB3F", color: "#0B0B0B" }}>→</button>
          </div>
        </div>
      </figure>
    </div>
  );
}

export default function IterCanvas({ lanes = [], tags, mobile = false }) {
  const [at, setAt] = useState(null);
  return (
    <>
      <div style={{ position: "relative", borderRadius: mobile ? "20px" : "28px", background: "#E6E6E1", backgroundImage: "radial-gradient(#0B0B0B26 1px, transparent 1.2px)", backgroundSize: "18px 18px",
        padding: mobile ? "20px 0 6px" : "28px 40px 16px", display: "flex", flexDirection: "column", gap: mobile ? "26px" : "34px" }}>
        {/* what the explorations were testing, like notes stuck to the canvas */}
        {tags && (
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px", padding: mobile ? "0 20px" : "0" }}>
            <span style={{ ...MONO, color: "#6E6E69", marginRight: "6px" }}>Testing</span>
            {tags.map((t) => <span key={t} style={{ ...MONO, padding: "6px 10px", borderRadius: "999px", background: "#FCEB3F", color: "#0B0B0B" }}>{t}</span>)}
          </div>
        )}
        {lanes.map((lane, li) => (
          <div key={lane.t} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: mobile ? "0 20px" : "0" }}>
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontSize: mobile ? "20px" : "22px", letterSpacing: "-.03em", color: "#0B0B0B" }}>{lane.t}</span>
              <span style={{ flex: "1", height: "1px", background: "repeating-linear-gradient(90deg,#0B0B0B55 0 4px,transparent 4px 9px)" }}></span>
              <span style={{ ...MONO, color: "#6E6E69" }}>{lane.items.length} versions{mobile ? " · swipe" : ""}</span>
            </div>
            <div style={mobile
              ? { display: "flex", gap: "14px", overflowX: "auto", scrollSnapType: "x mandatory", scrollPadding: "0 20px", padding: "8px 20px 18px", scrollbarWidth: "none" }
              : { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px 72px", padding: "6px 8px 14px" }}>
              {lane.items.map((it, i) => (
                <Frame key={it.n} it={it} lane={lane.t} ratio={lane.ratio} pad={lane.pad} i={i} tiltOff={li} last={i === lane.items.length - 1} mobile={mobile} onOpen={() => setAt([li, i])} />
              ))}
            </div>
          </div>
        ))}
      </div>
      {at && createPortal(<Lightbox lanes={lanes} at={at} setAt={setAt} mobile={mobile} />, document.body)}
    </>
  );
}
