// One annotated screenshot with its number and a one-sentence caption (DarkRoast "The problem").
// The screenshots are all 2000×1422 with the page colour around the screen, so the card is
// exactly that shape (no letterboxing) and a soft shadow sets it off the page. The card takes
// the height its scrolling row leaves for it (cqh, see HScroll) up to `maxW` wide.
import React from 'react';

const RATIO = '2000 / 1422';

export default function ShotCard({ n, t, d, src, maxW, capSize = '15px', capLines = 3 }) {
  const cap = `calc(${capSize} * 1.45 * ${capLines})`;
  const w = `min(${maxW}, calc((100cqh - ${cap} - 14px) * 2000 / 1422))`;
  return (
    <figure style={{ margin: "0", flex: "none", alignSelf: "flex-start", width: w, display: "flex", flexDirection: "column", gap: "14px" }}>
      <div style={{ flex: "none", width: "100%", aspectRatio: RATIO, borderRadius: "20px", overflow: "hidden", background: "#EFEFEC", boxShadow: "0 1px 2px rgba(0,0,0,.05), 0 30px 60px -32px rgba(0,0,0,.28)" }}>
        <img src={src} alt={`${t}: annotated audit`} loading="lazy" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      {/* captions reserve the same height on every card, so the screenshots line up */}
      <figcaption style={{ margin: "0", minHeight: cap, display: "flex", gap: "12px", alignItems: "baseline", fontSize: capSize, lineHeight: "1.45", color: "#3C3C38" }}>
        <span style={{ flex: "none", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>{n}</span>
        <span><strong style={{ fontWeight: "600", color: "#0B0B0B" }}>{t}.</strong> {d}</span>
      </figcaption>
    </figure>
  );
}
