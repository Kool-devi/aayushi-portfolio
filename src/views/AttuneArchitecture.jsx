/* eslint-disable */
// Attune page — Move 01 "Map private → shared" (product architecture). Shared by both layouts;
// `mobile` switches to the phone sizes. Styled to match the other move sections.
import React from 'react';

const MODES = [
  { n: '01', t: 'Reflect', q: 'What am I feeling?', d: 'Think through emotions before deciding what to do.' },
  { n: '02', t: 'Repair', q: 'How do I steady myself?', d: 'Process something difficult and prepare to reconnect.' },
  { n: '03', t: 'Resolve', q: 'How do we work through this?', d: 'AI‑mediated conflict resolution for both partners.' },
  { n: '04', t: 'Refine', q: 'How do we keep growing?', d: 'Open‑ended guidance for ongoing relationship growth.' },
];
const GROUPS = [
  { k: 'Private', who: 'Just me', dots: '●', modes: MODES.slice(0, 2), dark: false },
  { k: 'Shared', who: 'Both of us', dots: '●●', modes: MODES.slice(2), dark: true },
];
const label = { fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" };
const display = { fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400" };

export default function AttuneArchitecture({ num, mobile }) {
  const m = !!mobile;
  return (
    <section id="model" style={m
      ? { padding: "61px 20px 20px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }
      : { padding: "110px 40px 40px", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", ...label }}>
        <span style={{ color: "#E5322B" }}>{num}</span>
        <span>Move 01 — Map private → shared</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: m ? "18px" : "28px" }}>
        <h2 style={{ margin: "0", ...display, letterSpacing: "-.055em", fontSize: m ? "35px" : "48px", lineHeight: "1.02" }}>
          {"Not every relationship problem should become a conversation "}
          <span style={{ fontStyle: "italic" }}>right away.</span>
        </h2>
        <p style={{ margin: "0", maxWidth: "58ch", fontSize: m ? "15px" : "17px", lineHeight: "1.5", color: "#3A3A37" }}>
          I organized the product around what a person or couple needs in that moment: private reflection, emotional repair, shared resolution, or longer‑term growth.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: m ? "minmax(0,1fr)" : "repeat(2, minmax(0,1fr))", gap: m ? "18px" : "10px" }}>
          {GROUPS.map((g) => (
            <div key={g.k} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", ...label }}>
                <span style={{ padding: "6px 10px", borderRadius: "999px", background: g.dark ? "#0B0B0B" : "#FFFFFF", color: g.dark ? "#FFFFFF" : "#0B0B0B" }}>{g.k}</span>
                <span style={{ color: "#6E6E69" }}>{g.dots}{" "}{g.who}</span>
                <span style={{ flex: "1", height: "1px", background: "#0B0B0B26" }}></span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: m ? "8px" : "10px" }}>
                {g.modes.map((x) => (
                  <div key={x.n} style={{ padding: m ? "16px 14px" : "20px", borderRadius: "20px", background: g.dark ? "#0B0B0B" : "#FFFFFF", color: g.dark ? "#FFFFFF" : "#0B0B0B", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)", display: "flex", flexDirection: "column", gap: m ? "14px" : "20px", minHeight: m ? "200px" : "230px", boxSizing: "border-box" }}>
                    <span style={{ ...label, fontSize: m ? "9.5px" : "10.5px", color: g.dark ? "#FCEB3F" : "#E5322B" }}>{x.n}{" · "}{x.t}</span>
                    <span style={{ ...display, fontSize: m ? "21px" : "26px", lineHeight: "1.05", letterSpacing: "-.04em" }}>{x.q}</span>
                    <span style={{ marginTop: "auto", fontSize: m ? "13px" : "14px", lineHeight: "1.45", color: g.dark ? "#FFFFFFB3" : "#6E6E69" }}>{x.d}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p style={{ margin: "0", maxWidth: "62ch", ...display, fontStyle: "italic", fontSize: m ? "18px" : "21px", lineHeight: "1.3", letterSpacing: "-.02em", color: "#3A3A37" }}>
          The modes are connected, but not linear. A reflection can end there; a couple can move into Resolve when they are ready; Refine can continue long after a conflict is over.
        </p>
      </div>
    </section>
  );
}
