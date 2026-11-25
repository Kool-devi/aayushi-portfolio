/* eslint-disable */
// Attune page — Move 01 "Map private → shared" (product architecture). Shared by both layouts;
// `mobile` switches to the phone sizes. Styled to match the other move sections.
import React from 'react';

const MODES = [
  { n: '01', t: 'Reflect', q: 'What am I feeling?', d: 'Sort out your feelings before deciding what to do.' },
  { n: '02', t: 'Repair', q: 'How do I calm down?', d: 'Work through something hard and get ready to reconnect.' },
  { n: '03', t: 'Resolve', q: 'How do we sort this out?', d: 'The AI helps both partners talk through a conflict.' },
  { n: '04', t: 'Refine', q: 'How do we keep growing?', d: 'Regular guidance for the relationship, even when nothing is wrong.' },
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
        <span>Private and shared</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: m ? "18px" : "28px" }}>
        <h2 style={{ margin: "0", ...display, letterSpacing: "-.055em", fontSize: m ? "35px" : "48px", lineHeight: "1.02" }}>
          {"Not every relationship problem needs to become a conversation "}
          <span style={{ fontStyle: "italic" }}>straight away.</span>
        </h2>
        <p style={{ margin: "0", maxWidth: "58ch", fontSize: m ? "15px" : "17px", lineHeight: "1.5", color: "#3A3A37" }}>
          I built the app around what a person or couple needs in that moment, whether that’s thinking alone or working things out together.
        </p>
        {/* One grid for all four cards so every card shares the same width and height:
            desktop = 4 columns (header row + card row); mobile = 2 columns, with both
            card rows set to 1fr so they size to the tallest card. */}
        <div style={{ display: "grid", gridTemplateColumns: m ? "repeat(2, minmax(0,1fr))" : "repeat(4, minmax(0,1fr))", gridTemplateRows: m ? "auto 1fr auto 1fr" : "auto 1fr", columnGap: m ? "8px" : "10px", rowGap: "10px" }}>
          {GROUPS.map((g, gi) => (
            <React.Fragment key={g.k}>
              <div style={{ gridColumn: m ? "1 / -1" : (gi === 0 ? "1 / 3" : "3 / 5"), gridRow: m ? String(gi * 2 + 1) : "1", marginTop: m && gi > 0 ? "8px" : "0", display: "flex", alignItems: "center", gap: "10px", ...label }}>
                <span style={{ padding: "6px 10px", borderRadius: "999px", background: g.dark ? "#0B0B0B" : "#FFFFFF", color: g.dark ? "#FFFFFF" : "#0B0B0B" }}>{g.k}</span>
                <span style={{ color: "#6E6E69" }}>{g.dots}{" "}{g.who}</span>
                <span style={{ flex: "1", height: "1px", background: "#0B0B0B26" }}></span>
              </div>
              {g.modes.map((x, xi) => (
                <div key={x.n} style={{ gridRow: m ? String(gi * 2 + 2) : "2", gridColumn: m ? String(xi + 1) : String(gi * 2 + xi + 1), padding: m ? "16px 14px" : "20px", borderRadius: "20px", background: g.dark ? "#0B0B0B" : "#FFFFFF", color: g.dark ? "#FFFFFF" : "#0B0B0B", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)", display: "flex", flexDirection: "column", gap: m ? "14px" : "20px", minHeight: m ? "200px" : "230px", boxSizing: "border-box" }}>
                  <span style={{ ...label, fontSize: m ? "9.5px" : "10.5px", color: g.dark ? "#FCEB3F" : "#E5322B" }}>{x.n}{" · "}{x.t}</span>
                  <span style={{ ...display, fontSize: m ? "21px" : "26px", lineHeight: "1.05", letterSpacing: "-.04em" }}>{x.q}</span>
                  <span style={{ marginTop: "auto", fontSize: m ? "13px" : "14px", lineHeight: "1.45", color: g.dark ? "#FFFFFFB3" : "#6E6E69" }}>{x.d}</span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
        <p style={{ margin: "0", maxWidth: "62ch", ...display, fontStyle: "italic", fontSize: m ? "18px" : "21px", lineHeight: "1.3", letterSpacing: "-.02em", color: "#3A3A37" }}>
          The modes connect, but you don’t have to go in order. A reflection can stay private, and a couple can move to Resolve only when both are ready.
        </p>
      </div>
    </section>
  );
}
