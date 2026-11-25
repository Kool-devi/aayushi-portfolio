/* eslint-disable */
// Attune page — mobile layout. Generated from the Claude Design board 14a, then hand-tuned.
import React from 'react';
import ImageSlot from '../components/ImageSlot.jsx';
import AttuneArchitecture from './AttuneArchitecture.jsx';
import AttuneRoles from './AttuneRoles.jsx';
import ProtoFrame, { usePrefetchProtos } from '../components/ProtoFrame.jsx';
import IPhone, { protoBox } from '../components/IPhone.jsx';
import { css, show } from '../lib/template.js';

export default function AttuneMobile({ v }) {
  usePrefetchProtos((v.atFlow || []).map((m) => m.proto));
  return (
    <div style={{ background: "#EFEFEC", color: "#0B0B0B", fontFamily: "'Geist',sans-serif" }}>
      {/* Site navigation: sticks to the top while scrolling; the chapter bar below docks under it. */}
      <div data-sticky style={{ position: "sticky", top: "0", zIndex: "6", height: "70px", boxSizing: "border-box", background: "#FCEB3F", padding: "14px 20px 0" }}>
        {" "}
        <div style={{ height: "1px", background: "#0B0B0B" }}></div>
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "10px", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          {" "}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
            <a href="index.html" style={{ color: "#0B0B0B", textDecoration: "none" }}>
              ← Back to home
            </a>
            <button type="button" onClick={v.copyEmail} style={{ all: "unset", display: "block", alignSelf: "start", margin: "0", padding: "0", cursor: "pointer", textAlign: "right", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
              {show(v.copyLabel)}
            </button>
          </div>
          {" "}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
            <span>
              Case study 03 / 03 · Attune AI
            </span>
            <span style={{ display: "flex", gap: "14px" }}>
              <a href="index.html#work" style={{ color: "#0B0B0B", textDecoration: "none" }}>
                Work
              </a>
              <a href="resume.pdf" target="_blank" style={{ color: "#0B0B0B", textDecoration: "none" }}>
                CV {"↗\uFE0E"}
              </a>
            </span>
          </div>
          {" "}
        </div>
        {" "}
      </div>
      <header style={{ background: "#FCEB3F", padding: "0 20px" }}>
        <div style={{ position: "relative", padding: "13.3px 0 20px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px", alignItems: "end" }}>
          {" "}
          <svg width="252" height="72" viewBox="0 0 760 230" style={{ position: "absolute", left: "-20px", top: "105.3px", pointerEvents: "none", overflow: "visible" }}>
            <ellipse cx="380" cy="115" rx="378" ry="100" fill="none" stroke="#0B0B0B" strokeWidth="1" transform="rotate(-5 380 115)"></ellipse>
          </svg>
          {" "}
          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "20px" }}>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
              Attune AI · AI relationship app for couples
            </span>
            {" "}
            <h1 style={{ margin: "0", maxWidth: "348px" /* keep the phone line breaks so the ellipse stays on its words */, fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "42px", lineHeight: ".98" }}>
              {"I designed when AI should listen, guide, step back — "}
              <span style={{ fontStyle: "italic" }}>
                and stop.
              </span>
            </h1>
            {" "}
          </div>
          {" "}
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "auto 1fr", gap: "8px 18px", paddingTop: "12px", borderTop: "1px solid #0B0B0B", fontSize: "13px" }}>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", paddingTop: "2px" }}>
              Role
            </span>
            <span>
              Product / UX Designer
            </span>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", paddingTop: "2px" }}>
              Focus
            </span>
            <span>
              AI UX · systems · safety
            </span>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", paddingTop: "2px" }}>
              Delivery
            </span>
            <span>
              ~169 documented screens
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div style={{ position: "relative", height: "280px", margin: "0 -20px", background: "#7A5A40", overflow: "hidden" }}>
          {" "}
          <img src="Mockups/Attune/Hero-resolve-mobile.webp" alt="Attune AI in a shared Resolve session, held in two hands" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          {" "}
          <span style={{ position: "absolute", left: "40px", bottom: "20px", padding: "8px 13px", borderRadius: "999px", background: "rgba(255,255,255,.82)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", fontSize: "12.5px", fontWeight: "500" }}>
            Fig. 01 — A shared Resolve session
          </span>
          {" "}
        </div>
        {" "}
      </header>
      <nav data-sticky style={{ position: "sticky", top: "70px", zIndex: "5", background: "#EFEFEC", borderBottom: "1px solid #0B0B0B1F", padding: "0 20px" }}>
        {" "}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", height: "64px", overflowX: "auto", scrollbarWidth: "none" }}>
          {" "}
          {(v.atChapters || []).map((c, $index) => (
            <React.Fragment key={$index}>
              {" "}
              <a className="mh3" href={c?.href} onClick={c?.onGo} style={{ flex: "none", display: "flex", alignItems: "center", gap: "8px", height: "36px", padding: "0 14px", borderRadius: "999px", background: c?.bg, color: "#0B0B0B", textDecoration: "none", fontSize: "13px", fontWeight: "500", letterSpacing: "-.01em", transition: "background .25s" }}>
                <span style={{ fontSize: "10.5px", color: "#E5322B" }}>
                  {show(c?.n)}
                </span>
                {show(c?.t)}
              </a>
              {" "}
            </React.Fragment>
          ))}
          {" "}
        </div>
      </nav>
      <section id="moves" style={{ padding: "55px 20px 20px", display: "flex", flexDirection: "column", gap: "18px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            01
          </span>
          <span>
            Overview — five moves
          </span>
        </div>
        {" "}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", flexWrap: "wrap" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "37px", lineHeight: "1" }}>
            {"My work, in "}
            <span style={{ fontStyle: "italic" }}>
              five moves.
            </span>
          </h2>
          {" "}
          <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69" }}>
            Tap a move to jump
          </span>
          {" "}
        </div>
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {" "}
          {(v.atMoves || []).map((v, $index) => (
            <React.Fragment key={$index}>
              {" "}
              <a href={v?.href} style={{ display: "grid", gridTemplateColumns: "64px minmax(0,1fr) 20px", alignItems: "center", gap: "12px", minHeight: "60px", padding: "12px 16px", boxSizing: "border-box", borderRadius: "14px", background: v?.bg, color: v?.fg, textDecoration: "none" }}>
                {" "}
                <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "9.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: v?.nc }}>
                  {"Move "}{show(v?.n)}
                </span>
                {" "}
                <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", fontSize: "19px", lineHeight: "1.15", letterSpacing: "-.03em" }}>
                  {show(v?.t)}
                </span>
                {" "}
                <span style={{ fontSize: "14px", textAlign: "right" }}>
                  ↓
                </span>
                {" "}
              </a>
              {" "}
            </React.Fragment>
          ))}
          {" "}
        </div>
      </section>
      <section id="problem" style={{ padding: "61px 20px 20px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            02
          </span>
          <span>
            The problem
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "37px", lineHeight: "1" }}>
            {"Four very different moments. "}
            <span style={{ fontStyle: "italic" }}>
              One identical chatbot.
            </span>
          </h2>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "10px" }}>
            {" "}
            {(v.atSame || []).map((s, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <div style={{ padding: "20px", borderRadius: "20px", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)", display: "flex", flexDirection: "column", gap: "18px", minHeight: "140px" }}>
                  {" "}
                  <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "600", fontSize: "12px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#0B0B0B" }}>
                    {show(s?.n)}{" · "}{show(s?.t)}
                  </span>
                  {" "}
                  <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "6px" }}>
                    {" "}
                    <span style={{ alignSelf: "flex-start", padding: "9px 12px", borderRadius: "14px 14px 14px 4px", background: "#E2E2DE", fontSize: "13px", color: "#6E6E69" }}>
                      How can I help you today?
                    </span>
                    {" "}
                    <span style={{ alignSelf: "flex-start", width: "60%", height: "10px", borderRadius: "6px", background: "#EFEFEC" }}></span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </React.Fragment>
            ))}
            {" "}
          </div>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px" }}>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B", marginRight: "6px" }}>
              So I asked, for every moment
            </span>
            {" "}
            <span style={{ padding: "10px 15px", borderRadius: "999px", background: "#0B0B0B", color: "#FFFFFF", fontSize: "14.5px" }}>
              What does the user need?
            </span>
            {" "}
            <span style={{ padding: "10px 15px", borderRadius: "999px", background: "#0B0B0B", color: "#FFFFFF", fontSize: "14.5px" }}>
              Private or shared?
            </span>
            {" "}
            <span style={{ padding: "10px 15px", borderRadius: "999px", background: "#0B0B0B", color: "#FFFFFF", fontSize: "14.5px" }}>
              What should AI do here?
            </span>
            {" "}
          </div>
        </div>
      </section>
      <AttuneArchitecture num="03" mobile />
      <section id="roles" style={{ padding: "61px 20px 20px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            04
          </span>
          <span>
            Move 02 — Give every mode a role
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "35px", lineHeight: "1.02" }}>
            {"I gave AI a different job in each mode, and kept "}
            <span style={{ fontStyle: "italic" }}>
              pace and privacy
            </span>
            {" clear."}
          </h2>
          {" "}
          <AttuneRoles cols={v.atRoleCols} rows={v.atRoleRows} mobile />
        </div>
      </section>
      <section id="rooms" style={{ padding: "61px 20px 20px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            05
          </span>
          <span>
            Move 03 — Rooms, not cards
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "35px", lineHeight: "1.02" }}>
            {"I turned four feature cards into "}
            <span style={{ fontStyle: "italic" }}>
              four full‑screen rooms.
            </span>
          </h2>
          {" "}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "12px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <IPhone width={170} screenBg="#FFFFFF">
<img src="Mockups/Attune/four-cards-explored-screen.webp" alt="Explored: the four modes as cards on one screen" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
</IPhone>
              <span style={{ display: "flex", alignItems: "center", gap: "8px", padding: "7px 11px", borderRadius: "999px", background: "#FFFFFF", color: "#0B0B0B", fontSize: "12px", fontWeight: "500" }}>
                <span style={{ color: "#E5322B" }}>✕</span>
                Explored
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <IPhone width={170} screenBg="#FFFFFF">
{s => <><img src="Mockups/Attune/proto-choose-start.webp" alt="" aria-hidden="true" style={protoBox(s)} /><div style={protoBox(s)}><ProtoFrame src={"prototypes/attune-choose-a-mode.html#z=" + s.z.toFixed(4)} title="Attune — choose a mode prototype" width="100%" height="100%" /></div></>}
</IPhone>
              <span style={{ display: "flex", alignItems: "center", gap: "8px", padding: "7px 11px", borderRadius: "999px", background: "#0B0B0B", color: "#FFFFFF", fontSize: "12px", fontWeight: "500" }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#FCEB3F" }}></span>
                Live — try it
              </span>
            </div>
          </div>
          {" "}
          <div style={{ display: "flex", alignItems: "baseline", gap: "20px", paddingTop: "16px", borderTop: "1px solid #0B0B0B26" }}>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B", flex: "none" }}>
              Why
            </span>
            <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "25px", lineHeight: "1.15", letterSpacing: "-.035em" }}>
              {"The UI had to signal a change in "}
              <span style={{ fontStyle: "italic" }}>
                emotional context
              </span>
              , not just a change in feature.
            </span>
          </div>
        </div>
      </section>
      <section id="flows" style={{ margin: "61px 20px 0", padding: "20px", borderRadius: "28px", background: "#0B0B0B", color: "#FFFFFF" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }}>
          {" "}
          <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #FFFFFF", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
            <span style={{ color: "#FCEB3F" }}>
              06
            </span>
            <span>
              Move 04 — Choreograph each room
            </span>
          </div>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {" "}
            <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "37px", lineHeight: "1" }}>
              {"One product, "}
              <span style={{ fontStyle: "italic" }}>
                four emotional rooms.
              </span>
            </h2>
            {" "}
            {/* The four modes stack: label, heading, quote and steps, then that mode's screen. */}
            {(v.atFlow || []).map((m, $index) => (
              <React.Fragment key={$index}>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingTop: $index ? "22px" : "4px", borderTop: $index ? "1px solid #FFFFFF26" : "none" }}>
                      <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                        <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FCEB3F", marginRight: "4px" }}>
                          {show(m?.n)}
                        </span>
                        <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", padding: "6px 10px", borderRadius: "999px", background: "#FFFFFF1A" }}>
                          {show(m?.dots)}{" "}{show(m?.k)}
                        </span>
                        <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", padding: "6px 10px", borderRadius: "999px", background: "#FCEB3F", color: "#0B0B0B" }}>
                          {"AI role · "}{show(m?.role)}
                        </span>
                      </div>
                      <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", fontSize: "44px", lineHeight: ".9", letterSpacing: "-.06em" }}>
                        {show(m?.t)}
                      </span>
                      <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#FFFFFFcc", maxWidth: "46ch" }}>
                        {"“"}{show(m?.q)}{"”"}
                      </p>
                      <ol style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", borderTop: "1px solid #FFFFFF26" }}>
                        {(m?.steps || []).map((s, k) => (
                          <li key={k} style={{ display: "grid", gridTemplateColumns: "36px minmax(0,1fr)", gap: "10px", padding: "12px 0", borderBottom: "1px solid #FFFFFF26" }}>
                            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FCEB3F", paddingTop: "3px" }}>
                              {show(s?.n)}
                            </span>
                            <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                              <span style={{ fontSize: "16px", fontWeight: "500", letterSpacing: "-.02em" }}>
                                {show(s?.t)}
                              </span>
                              <span style={{ fontSize: "13.5px", lineHeight: "1.45", color: "#FFFFFFb3" }}>
                                {show(s?.note)}
                              </span>
                            </span>
                          </li>
                        ))}
                      </ol>
                  <IPhone width={240} outer={{ ref: m?.phoneRef, "data-atphone": $index }} style={{ alignSelf: "center" }} shadow="drop-shadow(0 40px 40px rgba(0,0,0,.5))">
{s => <>
  <img src={m?.poster} alt="" aria-hidden="true" style={{ ...protoBox(s), width: "100%", display: "block" }} />
  {m?.play ? <div style={protoBox(s)}><ProtoFrame key={m?.run} src={m?.proto + "#z=" + s.z.toFixed(4)} title={`Attune ${m?.t} prototype`} width="100%" height="100%" /></div> : null}
</>}
</IPhone>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <section id="safety" style={{ padding: "61px 20px 20px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            07
          </span>
          <span>
            Move 05 — Design when AI stops
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "37px", lineHeight: "1" }}>
            {"The safest AI action is sometimes "}
            <span style={{ fontStyle: "italic" }}>
              to stop.
            </span>
          </h2>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", fontSize: "14px" }}>
            <span style={{ padding: "8px 13px", borderRadius: "999px", background: "#E2E2DE", color: "#6E6E69", textDecoration: "line-through", textDecorationColor: "#E5322B" }}>
              Keep the chat going
            </span>
            <span style={{ color: "#E5322B" }}>
              →
            </span>
            <span style={{ padding: "8px 13px", borderRadius: "999px", background: "#0B0B0B", color: "#FFFFFF", fontWeight: "500" }}>
              Pause · check in · hand off
            </span>
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px", alignItems: "center", padding: "28px 14px", borderRadius: "28px", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)" }}>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {" "}
              {(v.atSafe || []).map((s, $index) => (
                <React.Fragment key={$index}>
                  {" "}
                  <button type="button" onClick={s?.onPick} onMouseEnter={s?.onPick} style={{ all: "unset", cursor: "pointer", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "16px", alignItems: "center", padding: "18px 20px", borderRadius: "18px", background: s?.bg, color: s?.fg, transition: "background .3s, color .3s" }}>
                    {" "}
                    <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "29px", lineHeight: ".9", letterSpacing: "-.05em", color: s?.nc }}>
                      {show(s?.n)}
                    </span>
                    {" "}
                    <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.02em" }}>
                      {show(s?.t)}
                    </span>
                    {" "}
                  </button>
                  {" "}
                </React.Fragment>
              ))}
              {" "}
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69", marginTop: "8px" }}>
                Tap a step — the screen reacts ↓
              </span>
              {" "}
            </div>
            {" "}
            <IPhone width={240} screenBg="#F4F3EE" style={{ marginLeft: "auto", marginRight: "auto" }}>
{/* the real Attune screens, cross-fading as each step is picked */}
{(v.atSafe || []).map((s, $index) => (
  <img key={$index} src={s?.img} alt={s?.op ? s?.alt : ""} aria-hidden={s?.op ? undefined : "true"} loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: s?.op, transform: `translateY(${s?.op ? "0px" : "12px"})`, transition: "opacity .5s, transform .6s cubic-bezier(.3,.9,.3,1)" }} />
))}
</IPhone>
            {" "}
          </div>
          {" "}
          <div style={{ display: "flex", alignItems: "baseline", gap: "20px", paddingTop: "16px", borderTop: "1px solid #0B0B0B26" }}>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B", flex: "none" }}>
              Why
            </span>
            <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "25px", lineHeight: "1.15", letterSpacing: "-.035em" }}>
              {"Responsible AI isn’t only better answers — it’s knowing "}
              <span style={{ fontStyle: "italic" }}>
                when the product should step aside.
              </span>
            </span>
          </div>
        </div>
      </section>
      <section id="system" style={{ padding: "61px 20px 20px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            08
          </span>
          <span>
            Bonus — Ready for handoff
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "35px", lineHeight: "1.02" }}>
            {"A new dev team joined mid‑project. "}
            <span style={{ fontStyle: "italic" }}>
              I made sure the design didn’t break.
            </span>
          </h2>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "10px" }}>
            {" "}
            <div style={{ padding: "22px", borderRadius: "20px", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
                01 · The situation
              </span>
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "33px", lineHeight: ".9", letterSpacing: "-.06em" }}>
                169 screens
              </span>
              <span style={{ fontSize: "14.5px", lineHeight: "1.45", color: "#3C3C38" }}>
                Handed to a brand‑new team, on a tighter timeline.
              </span>
            </div>
            {" "}
            <div style={{ padding: "22px", borderRadius: "20px", background: "#0B0B0B", color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FCEB3F" }}>
                02 · What I did
              </span>
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "33px", lineHeight: ".9", letterSpacing: "-.06em" }}>
                Found the repeats
              </span>
              <span style={{ fontSize: "14.5px", lineHeight: "1.45", color: "#FFFFFFb3" }}>
                Went screen by screen and turned repeated UI into reusable components.
              </span>
            </div>
            {" "}
            <div style={{ padding: "22px", borderRadius: "20px", background: "#FCEB3F", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
                03 · The result
              </span>
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "33px", lineHeight: ".9", letterSpacing: "-.06em" }}>
                One source of truth
              </span>
              <span style={{ fontSize: "14.5px", lineHeight: "1.45" }}>
                Developers build each element once — and it looks the same everywhere.
              </span>
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "flex", alignItems: "baseline", gap: "20px", paddingTop: "16px", borderTop: "1px solid #0B0B0B26" }}>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B", flex: "none" }}>
              Why
            </span>
            <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "25px", lineHeight: "1.15", letterSpacing: "-.035em" }}>
              {"A design system is how design decisions "}
              <span style={{ fontStyle: "italic" }}>
                survive when the builders change.
              </span>
            </span>
          </div>
        </div>
      </section>
      <section id="outcome" style={{ margin: "61px 20px 0", padding: "20px 20px", borderRadius: "28px", background: "#FCEB3F", position: "relative", overflow: "hidden" }}>
        {" "}
        <svg width="405" height="135" viewBox="0 0 900 300" style={{ position: "absolute", right: "-140px", top: "30px", pointerEvents: "none" }}>
          <ellipse cx="450" cy="150" rx="440" ry="120" fill="none" stroke="#0B0B0B" strokeWidth="1" transform="rotate(-6 450 150)"></ellipse>
        </svg>
        {" "}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "18px" }}>
          {" "}
          <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
            <span style={{ color: "#E5322B" }}>
              09
            </span>
            <span>
              What changed — in the product, and in me
            </span>
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px", alignItems: "center" }}>
            {" "}
            <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "39px", lineHeight: ".95", color: "#6E6E69", textDecoration: "line-through", textDecorationColor: "#E5322B", textDecorationThickness: "3px" }}>
              Designing AI responses
            </span>
            {" "}
            <span style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#0B0B0B", color: "#FCEB3F", display: "grid", placeItems: "center", fontSize: "20px" }}>
              →
            </span>
            {" "}
            <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "39px", lineHeight: ".95" }}>
              {"Designing AI "}
              <span style={{ fontStyle: "italic" }}>
                boundaries.
              </span>
            </span>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "10px" }}>
            {" "}
            {(v.atLearn || []).map((q, $index) => (
              <React.Fragment key={$index}>
                <div style={{ padding: "20px", borderRadius: "18px", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "22px", minHeight: "130px" }}>
                  <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
                    {show(q?.n)}
                  </span>
                  <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "26px", lineHeight: "1.02", letterSpacing: "-.04em", marginTop: "auto" }}>
                    {show(q?.t)}
                  </span>
                </div>
              </React.Fragment>
            ))}
            {" "}
          </div>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {" "}
            {(v.atOut || []).map((o, $index) => (
              <React.Fragment key={$index}>
                <span style={{ display: "flex", alignItems: "center", gap: "8px", padding: "9px 14px 9px 9px", borderRadius: "999px", background: "#0B0B0B", color: "#FFFFFF", fontSize: "13.5px" }}>
                  <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#FCEB3F", color: "#0B0B0B", display: "grid", placeItems: "center", fontSize: "11px" }}>
                    ✓
                  </span>
                  {show(o)}
                </span>
              </React.Fragment>
            ))}
            {" "}
          </div>
          {" "}
        </div>
      </section>
      <footer style={{ marginTop: "61px", background: "#0B0B0B", color: "#FFFFFF", padding: "20px 20px 28px", display: "flex", flexDirection: "column", gap: "18px" }}>
        {" "}
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px", alignItems: "end" }}>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FCEB3F" }}>
              Curious to know more?
            </span>
            <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "33px", lineHeight: "1.05" }}>
              {"This is a small part of the process. "}
              <span style={{ fontStyle: "italic" }}>
                Let’s walk through the rest.
              </span>
            </span>
          </div>
          {" "}
          <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end", flexWrap: "wrap" }}>
            {" "}
            <a href="mailto:aayushipatel2002@gmail.com?subject=Attune%20AI%20case%20study" style={{ height: "56px", padding: "0 10px 0 24px", borderRadius: "999px", background: "#FCEB3F", color: "#0B0B0B", textDecoration: "none", display: "flex", alignItems: "center", gap: "18px", fontSize: "15px", fontWeight: "500" }}>
              {"Get in touch "}
              <span style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#0B0B0B", color: "#FCEB3F", display: "grid", placeItems: "center" }}>
                <svg width="14" height="14" viewBox="0 0 100 100" style={{ display: "block" }}>
                  <path d="M14 14 L84 84 M84 34 L84 84 L34 84" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="square"></path>
                </svg>
              </span>
            </a>
            {" "}
            <a className="mh4" href="project-darkroast.html" style={{ height: "56px", padding: "0 24px", borderRadius: "999px", background: "#FFFFFF14", color: "#FFFFFF", textDecoration: "none", display: "flex", alignItems: "center", fontSize: "15px", fontWeight: "500" }}>
              ← DarkRoast
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "14px", borderTop: "1px solid #FFFFFF26", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FFFFFF99", flexWrap: "wrap" }}>
          <a href="index.html" style={{ color: "#FFFFFF" }}>
            ← Back to home
          </a>
          <span>
            Case study 03 / 03 — Attune AI
          </span>
          <span>
            © 2026 Aayushi Patel
          </span>
        </div>
      </footer>
    </div>
  );
}
