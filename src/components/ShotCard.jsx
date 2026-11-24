// One annotated screenshot with its number and a one-sentence caption (DarkRoast "The problem").
// Until the image file exists, a grey box names the file to add.
import React, { useState } from 'react';

export default function ShotCard({ n, t, d, src, width, capSize = '15px', capLines = 2 }) {
  const [missing, setMissing] = useState(false);
  return (
    <figure style={{ margin: "0", flex: "none", width, height: "100%", display: "flex", flexDirection: "column", gap: "14px" }}>
      <div style={{ flex: "1", minHeight: "0", borderRadius: "20px", overflow: "hidden", background: missing ? "#DCDBD7" : "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)", display: "grid", placeItems: "center" }}>
        {missing
          ? <span style={{ padding: "20px", textAlign: "center", fontSize: "13px", color: "#6E6E69" }}>{t} screenshot goes here<br />({decodeURI(src)})</span>
          : <img src={src} alt={`${t}: annotated audit`} loading="lazy" onError={() => setMissing(true)} style={{ display: "block", width: "100%", height: "100%", objectFit: "contain" }} />}
      </div>
      {/* captions reserve the same height on every card, so the screenshots line up */}
      <figcaption style={{ margin: "0", minHeight: `calc(${capSize} * 1.45 * ${capLines})`, display: "flex", gap: "12px", alignItems: "baseline", fontSize: capSize, lineHeight: "1.45", color: "#3C3C38" }}>
        <span style={{ flex: "none", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>{n}</span>
        <span><strong style={{ fontWeight: "600", color: "#0B0B0B" }}>{t}.</strong> {d}</span>
      </figcaption>
    </figure>
  );
}
