/* eslint-disable */
// Attune page — Move 02 "Give every mode a role". Shared by both layouts; `mobile` switches
// to phone sizes. One card per mode, echoing Move 01: private modes on white, shared on black,
// with the AI's role as the headline of each card and who / pace as supporting rows.
import React from 'react';

const label = { fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" };
const display = { fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400" };

export default function AttuneRoles({ cols, rows, mobile }) {
  const m = !!mobile;
  const cells = (row, i) => (rows?.[row]?.cells || [])[i] || {};
  const rowLabel = (row) => rows?.[row]?.k;
  return (
    <div style={{ display: "grid", gridTemplateColumns: m ? "repeat(2, minmax(0,1fr))" : "repeat(4, minmax(0,1fr))", gap: m ? "8px" : "10px" }}>
      {(cols || []).map((c, i) => {
        const who = cells(0, i), role = cells(1, i), pace = cells(2, i);
        const dark = (who.dots || '').length > 1;
        const sub = dark ? "#FFFFFF99" : "#6E6E69";
        const line = dark ? "#FFFFFF26" : "#0B0B0B14";
        return (
          <div key={i} style={{ padding: m ? "16px 14px" : "20px", borderRadius: "20px", background: dark ? "#0B0B0B" : "#FFFFFF", color: dark ? "#FFFFFF" : "#0B0B0B", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)", display: "flex", flexDirection: "column", gap: m ? "14px" : "18px", minHeight: m ? "230px" : "270px", boxSizing: "border-box" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
              <span style={{ ...label, fontSize: m ? "9.5px" : "10.5px", color: dark ? "#FCEB3F" : "#E5322B" }}>{c.n}{" · "}{c.t}</span>
              <span style={{ ...label, fontSize: m ? "9.5px" : "10.5px", color: sub, letterSpacing: ".1em" }}>{who.dots}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ ...label, fontSize: m ? "9.5px" : "10.5px", color: sub }}>{rowLabel(1)}</span>
              <span style={{ ...display, fontSize: m ? "22px" : "30px", lineHeight: "1.02", letterSpacing: "-.04em" }}>{role.t}</span>
            </div>
            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column" }}>
              {[[rowLabel(0), who.t], [rowLabel(2), pace.t]].map(([k, val]) => (
                <div key={k} style={{ display: "flex", flexDirection: m ? "column" : "row", alignItems: m ? "flex-start" : "baseline", justifyContent: "space-between", gap: m ? "2px" : "10px", padding: m ? "8px 0" : "10px 0", borderTop: `1px solid ${line}` }}>
                  <span style={{ ...label, fontSize: m ? "9.5px" : "10.5px", color: sub }}>{k}</span>
                  <span style={{ fontSize: m ? "13px" : "14px", fontWeight: "500", letterSpacing: "-.01em" }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
