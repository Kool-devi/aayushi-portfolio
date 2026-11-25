// One journey diagram for the Delicut "The problem" scroller: its text above a large
// diagram card. The diagram takes the full height its scrolling row leaves for it (cqh, see
// HScroll), so it grows with the window. `tags` are the red pills scattered around the card's
// edge; `real` gives it the red outline.
import React from 'react';

const RATIO = 1041 / 763; // Delicut_Original.png / Delicut_Real.png

const pill = { display: "flex", alignItems: "center", gap: "8px", padding: "9px 13px", borderRadius: "999px", background: "#E5322B", color: "#FFFFFF", fontSize: "13px", fontWeight: "500", letterSpacing: "-.01em", boxShadow: "0 10px 24px -10px rgba(229,50,43,.6)", whiteSpace: "nowrap" };

export default function PathCard({ kicker, title, body, src, alt, label, real = false, tags = [] }) {
  const red = "#E5322B";
  // the text sits above the diagram in a fixed-height band so both cards line up; padY leaves
  // room above/below the diagram for the label pill and the tags that sit on its edge
  const textH = 118, gap = 14, padY = 26, padX = 30;
  const w = `min(880px, calc((100cqh - ${textH + gap + padY * 2}px) * ${RATIO} + ${padX * 2}px))`;
  return (
    <figure style={{ margin: "0", flex: "none", width: w, height: "100%", display: "flex", flexDirection: "column", gap: `${gap}px` }}>
      <div style={{ height: `${textH}px`, flex: "none", boxSizing: "border-box", padding: `0 ${padX}px`, display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "8px" }}>
        <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: real ? red : "#6E6E69" }}>
          {kicker}
        </span>
        <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", fontSize: "34px", lineHeight: "1", letterSpacing: "-.045em" }}>
          {title}
        </span>
        <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#3C3C38" }}>
          {body}
        </span>
      </div>
      <div style={{ position: "relative", flex: "none", boxSizing: "border-box", padding: `${padY}px ${padX}px` }}>
        <div style={{ position: "relative", width: "100%", aspectRatio: String(RATIO), borderRadius: "22px", background: "#FFFFFF", boxSizing: "border-box", padding: "3% 4%", outline: real ? `2px solid ${red}` : undefined, outlineOffset: "6px", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)" }}>
          <img src={src} alt={alt} loading="lazy" style={{ display: "block", width: "100%", height: "100%", objectFit: "contain" }} />
          <span style={{ position: "absolute", left: "20px", top: "-14px", padding: "7px 12px", borderRadius: "999px", background: real ? red : "#0B0B0B", color: "#FFFFFF", fontSize: "13px", fontWeight: "600" }}>
            {label}
          </span>
          {tags.map((t) => (
            <span key={t.n} className="dh9" style={{ ...pill, position: "absolute", zIndex: "2", transform: `rotate(${t.rot}deg)`, transition: "transform .4s cubic-bezier(.3,1.3,.4,1)", ...t.pos }}>
              <span style={{ fontSize: "10px", opacity: ".75" }}>{t.n}</span>
              {t.t}
            </span>
          ))}
        </div>
      </div>
    </figure>
  );
}
