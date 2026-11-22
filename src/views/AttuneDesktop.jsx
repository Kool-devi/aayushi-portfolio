/* eslint-disable */
// Attune page — desktop layout. Generated from the Claude Design board 14a, then hand-tuned.
import React from 'react';
import ImageSlot from '../components/ImageSlot.jsx';
import { css, show } from '../lib/template.js';

export default function AttuneDesktop({ v }) {
  return (
    <div style={{ background: "#EFEFEC", color: "#0B0B0B", fontFamily: "'Geist',sans-serif" }}>
      <header style={{ background: "#FCEB3F", padding: "14px 40px 0" }}>
        {" "}
        <div style={{ height: "1px", background: "#0B0B0B" }}></div>
        {" "}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(10, 1fr)", gap: "0 16px", paddingTop: "10px", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          {" "}
          <a href="index.html" style={{ gridColumn: "span 3", color: "#0B0B0B", textDecoration: "none" }}>
            ← Aayushi Patel
            <br />
            Back to home
          </a>
          {" "}
          <span style={{ gridColumn: "span 3" }}>
            Case study 03 / 03
            <br />
            Attune AI
          </span>
          {" "}
          <a href="index.html#work" style={{ color: "#0B0B0B", textDecoration: "none" }}>
            Projects
          </a>
          {" "}
          <a href="index.html#about" style={{ color: "#0B0B0B", textDecoration: "none" }}>
            About
          </a>
          {" "}
          <a href="resume.pdf" target="_blank" style={{ color: "#0B0B0B", textDecoration: "none" }}>
            Résumé ↗
          </a>
          {" "}
          <button type="button" onClick={v.copyEmail} style={{ all: "unset", display: "block", alignSelf: "start", margin: "0", padding: "0", cursor: "pointer", textAlign: "right", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
            {show(v.copyLabel)}
          </button>
          {" "}
        </div>
        {" "}
        <div style={{ position: "relative", padding: "56px 0 40px", display: "grid", gridTemplateColumns: "minmax(0,8fr) minmax(0,4fr)", gap: "40px", alignItems: "end" }}>
          {" "}
          <svg width="560" height="160" viewBox="0 0 760 230" style={{ position: "absolute", left: "330px", top: "112px", pointerEvents: "none", overflow: "visible" }}>
            <ellipse cx="380" cy="115" rx="378" ry="100" fill="none" stroke="#0B0B0B" strokeWidth="1" transform="rotate(-5 380 115)"></ellipse>
          </svg>
          {" "}
          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "20px" }}>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
              Attune AI · AI relationship app for couples
            </span>
            {" "}
            <h1 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "64px", lineHeight: ".98" }}>
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
        <div style={{ display: "flex", gap: "8px", height: "500px", margin: "0 -40px" }}>
          {" "}
          {(v.atHeroModes || []).map((m, $index) => (
            <React.Fragment key={$index}>
              {" "}
              <button type="button" onMouseEnter={m?.onPick} onClick={m?.onPick} style={{ all: "unset", cursor: "pointer", position: "relative", flex: m?.flex, minWidth: "0", overflow: "hidden", background: `#1A1A18 url(${m?.img ?? ""}) center/cover no-repeat`, transition: "flex .7s cubic-bezier(.3,.9,.3,1)" }}>
                {" "}
                <span style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,.6) 100%)" }}></span>
                {" "}
                <span style={{ position: "absolute", left: "24px", top: "22px", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", padding: "6px 10px", borderRadius: "999px", background: "rgba(255,255,255,.85)", color: "#0B0B0B" }}>
                  {show(m?.n)}{" · "}{show(m?.k)}
                </span>
                {" "}
                <span style={{ position: "absolute", left: "24px", right: "24px", bottom: "96px", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "48px", lineHeight: ".9", color: "#FFFFFF", whiteSpace: "nowrap" }}>
                  {show(m?.t)}
                </span>
                {" "}
                <span style={{ position: "absolute", left: "24px", right: "24px", top: "calc(100% - 84px)", fontSize: "15px", lineHeight: "1.4", color: "#FFFFFF", opacity: m?.qOp, transition: "opacity .5s", maxWidth: "30ch" }}>
                  {"“"}{show(m?.q)}{"”"}
                </span>
                {" "}
              </button>
              {" "}
            </React.Fragment>
          ))}
          {" "}
        </div>
      </header>
      <nav style={{ position: "sticky", top: "0", zIndex: "5", background: "#EFEFEC", borderBottom: "1px solid #0B0B0B1F", padding: "0 40px" }}>
        {" "}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", height: "64px", overflow: "hidden" }}>
          {" "}
          {(v.atChapters || []).map((c, $index) => (
            <React.Fragment key={$index}>
              {" "}
              <a className="dh7" href={c?.href} onClick={c?.onGo} style={{ flex: "none", display: "flex", alignItems: "center", gap: "8px", height: "36px", padding: "0 14px", borderRadius: "999px", background: c?.bg, color: "#0B0B0B", textDecoration: "none", fontSize: "13px", fontWeight: "500", letterSpacing: "-.01em", transition: "background .25s" }}>
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
      <section id="moves" style={{ padding: "100px 40px 20px", display: "flex", flexDirection: "column", gap: "28px" }}>
        {" "}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "24px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "52px", lineHeight: "1" }}>
            {"My work, in "}
            <span style={{ fontStyle: "italic" }}>
              five moves.
            </span>
          </h2>
          {" "}
          <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69" }}>
            Click a move to jump
          </span>
          {" "}
        </div>
        {" "}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "8px" }}>
          {" "}
          {(v.atMoves || []).map((v, $index) => (
            <React.Fragment key={$index}>
              {" "}
              <a className="dhd" href={v?.href} style={{ display: "flex", flexDirection: "column", gap: "40px", minHeight: "190px", padding: "20px", borderRadius: "20px", background: v?.bg, color: v?.fg, textDecoration: "none", transition: "transform .35s cubic-bezier(.3,1.3,.4,1)" }}>
                {" "}
                <span style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
                  <span style={{ color: v?.nc }}>
                    {"Move "}{show(v?.n)}
                  </span>
                  <span>
                    ↓
                  </span>
                </span>
                {" "}
                <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "26px", lineHeight: "1.02", letterSpacing: "-.04em", marginTop: "auto" }}>
                  {show(v?.t)}
                </span>
                {" "}
              </a>
              {" "}
            </React.Fragment>
          ))}
          {" "}
        </div>
      </section>
      <section id="problem" style={{ padding: "110px 40px 40px", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            00
          </span>
          <span>
            The problem
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "52px", lineHeight: "1" }}>
            {"Four very different moments. "}
            <span style={{ fontStyle: "italic" }}>
              One identical chatbot.
            </span>
          </h2>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
            {" "}
            {(v.atSame || []).map((s, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <div style={{ padding: "20px", borderRadius: "20px", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)", display: "flex", flexDirection: "column", gap: "28px", minHeight: "200px" }}>
                  {" "}
                  <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69" }}>
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
      <section id="roles" style={{ padding: "110px 40px 40px", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            01
          </span>
          <span>
            Move 01 — Give every mode a role
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "48px", lineHeight: "1.02" }}>
            {"I gave AI a different job in each mode, and kept "}
            <span style={{ fontStyle: "italic" }}>
              pace and privacy
            </span>
            {" clear."}
          </h2>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", fontSize: "14px" }}>
            <span style={{ padding: "8px 13px", borderRadius: "999px", background: "#E2E2DE", color: "#6E6E69", textDecoration: "line-through", textDecorationColor: "#E5322B" }}>
              One chatbot everywhere
            </span>
            <span style={{ color: "#E5322B" }}>
              →
            </span>
            <span style={{ padding: "8px 13px", borderRadius: "999px", background: "#0B0B0B", color: "#FFFFFF", fontWeight: "500" }}>
              A role per mode
            </span>
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "140px repeat(4, minmax(0,1fr))", borderRadius: "24px", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)", overflow: "hidden" }}>
            {" "}
            <span></span>
            {" "}
            {(v.atRoleCols || []).map((c, $index) => (
              <React.Fragment key={$index}>
                <button type="button" onMouseEnter={c?.onPick} style={{ all: "unset", cursor: "default", padding: "18px 18px 14px", background: c?.bg, color: c?.fg, transition: "background .3s, color .3s", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: c?.nc }}>
                    {show(c?.n)}
                  </span>
                  <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "28px", lineHeight: "1", letterSpacing: "-.04em" }}>
                    {show(c?.t)}
                  </span>
                </button>
              </React.Fragment>
            ))}
            {" "}
            {(v.atRoleRows || []).map((r, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <span style={{ padding: "18px", borderTop: "1px solid #0B0B0B14", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69", display: "flex", alignItems: "center" }}>
                  {show(r?.k)}
                </span>
                {" "}
                {(r?.cells || []).map((x, $index) => (
                  <React.Fragment key={$index}>
                    <span style={{ padding: "18px", borderTop: `1px solid ${x?.bd ?? ""}`, background: x?.bg, color: x?.fg, display: "flex", alignItems: "center", gap: "10px", fontSize: "16px", fontWeight: "500", letterSpacing: "-.01em", transition: "background .3s, color .3s" }}>
                      <span style={{ display: "flex", gap: "3px" }}>
                        {show(x?.dots)}
                      </span>
                      {show(x?.t)}
                    </span>
                  </React.Fragment>
                ))}
                {" "}
              </React.Fragment>
            ))}
            {" "}
          </div>
        </div>
      </section>
      <section id="rooms" style={{ padding: "110px 40px 40px", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            03
          </span>
          <span>
            Move 03 — Rooms, not cards
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "48px", lineHeight: "1.02" }}>
            {"I turned four feature cards into "}
            <span style={{ fontStyle: "italic" }}>
              four full‑screen rooms.
            </span>
          </h2>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", fontSize: "14px" }}>
            <span style={{ padding: "8px 13px", borderRadius: "999px", background: "#E2E2DE", color: "#6E6E69", textDecoration: "line-through", textDecorationColor: "#E5322B" }}>
              Four cards on one screen
            </span>
            <span style={{ color: "#E5322B" }}>
              →
            </span>
            <span style={{ padding: "8px 13px", borderRadius: "999px", background: "#0B0B0B", color: "#FFFFFF", fontWeight: "500" }}>
              Swipeable, mood‑led spaces
            </span>
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "28px", alignItems: "center" }}>
            {" "}
            <div style={{ position: "relative", height: "560px", borderRadius: "22px", background: "#E2E2DE url('Mockups/Attune/Four%20Cards%20Explored.jpg') center/contain no-repeat", filter: "grayscale(.7)", opacity: ".8" }}>
              {" "}
              <span style={{ position: "absolute", left: "16px", top: "16px", padding: "7px 12px", borderRadius: "999px", background: "#FFFFFF", fontSize: "12.5px", fontWeight: "600" }}>
                ✕ Explored
              </span>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
              {" "}
              <div style={{ width: "300px", height: "620px", flex: "none", borderRadius: "44px", background: "#0B0B0B", padding: "10px", boxSizing: "border-box", boxShadow: "0 40px 80px -40px rgba(0,0,0,.55)" }}>
                <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "35px", overflow: "hidden", background: "#1A1A18" }}>
                  <iframe src="prototypes/attune-choose-a-mode.html" title="Attune — choose a mode prototype" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", border: "0", background: "#FFFFFF" }}></iframe>
                </div>
              </div>
              {" "}
              <span style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 13px", borderRadius: "999px", background: "#0B0B0B", color: "#FFFFFF", fontSize: "12.5px", fontWeight: "500" }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#FCEB3F" }}></span>
                Final · live — try swiping
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "flex", alignItems: "baseline", gap: "20px", paddingTop: "16px", borderTop: "1px solid #0B0B0B26" }}>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B", flex: "none" }}>
              Why
            </span>
            <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "26px", lineHeight: "1.15", letterSpacing: "-.035em" }}>
              {"The UI had to signal a change in "}
              <span style={{ fontStyle: "italic" }}>
                emotional context
              </span>
              , not just a change in feature.
            </span>
          </div>
        </div>
      </section>
      <section id="flows" ref={v.atModesRef} style={{ margin: "110px 40px 0", padding: "48px", borderRadius: "28px", background: "#0B0B0B", color: "#FFFFFF" }}>
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px", alignItems: "end" }}>
            {" "}
            <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #FFFFFF", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
              <span style={{ color: "#FCEB3F" }}>
                04
              </span>
              <span>
                Move 04 — Choreograph each room
              </span>
            </div>
            {" "}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "24px" }}>
              {" "}
              <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "52px", lineHeight: "1" }}>
                {"One product, "}
                <span style={{ fontStyle: "italic" }}>
                  four emotional rooms.
                </span>
              </h2>
              {" "}
              <span style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FFFFFF99" }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#E5322B" }}></span>
                Playing each flow · click to jump
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "6px", padding: "6px", borderRadius: "999px", background: "#FFFFFF14" }}>
            {" "}
            {(v.atModes || []).map((m, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <button type="button" onClick={m?.onMode} style={{ all: "unset", cursor: "pointer", position: "relative", overflow: "hidden", height: "52px", borderRadius: "999px", background: m?.tabBg, color: m?.tabFg, display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", fontSize: "15px", fontWeight: "500", transition: "background .3s, color .3s" }}>
                  {" "}
                  <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px", color: m?.tabK }}>
                    {show(m?.n)}{" · "}{show(m?.k)}
                  </span>
                  {show(m?.t)}{"\n          "}
                  <span style={{ position: "absolute", left: "0", bottom: "0", height: "3px", width: m?.prog, background: "#E5322B", transition: "width 1s linear" }}></span>
                  {" "}
                </button>
                {" "}
              </React.Fragment>
            ))}
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", gap: "56px", alignItems: "center" }}>
            {" "}
            <div style={{ width: "310px", height: "640px", flex: "none", borderRadius: "44px", background: "#0B0B0B", padding: "10px", boxSizing: "border-box", boxShadow: "0 40px 80px -40px rgba(0,0,0,.55)" }}>
              <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "35px", overflow: "hidden", background: "#1A1A18" }}>
                {(v.atModes || []).map((m, $index) => (
                  <React.Fragment key={$index}>
                    <div style={{ position: "absolute", inset: "0", background: `#1A1A18 url(${m?.img ?? ""}) center/cover no-repeat`, opacity: m?.op, transform: `scale(${m?.sc ?? ""})`, transition: "opacity .8s, transform 1.6s cubic-bezier(.3,.9,.3,1)" }}></div>
                  </React.Fragment>
                ))}
                {" "}
                <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.42) 45%, rgba(0,0,0,.7) 100%)" }}></div>
                {" "}
                <div style={{ position: "absolute", left: "12px", right: "12px", top: "40px", zIndex: "2", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", padding: "3px", borderRadius: "999px", background: "rgba(255,255,255,.16)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)" }}>
                  {" "}
                  {(v.atModes || []).map((m, $index) => (
                    <React.Fragment key={$index}>
                      <span style={{ height: "26px", borderRadius: "999px", background: m?.pillBg, color: m?.pillFg, display: "grid", placeItems: "center", fontSize: "11px", fontWeight: "600", transition: "all .3s" }}>
                        {show(m?.t)}
                      </span>
                    </React.Fragment>
                  ))}
                  {" "}
                </div>
                {" "}
                {(v.atScreens || []).map((s, $index) => (
                  <React.Fragment key={$index}>
                    {" "}
                    <div style={{ position: "absolute", inset: "0", padding: "88px 16px 20px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "10px", color: "#FFFFFF", opacity: s?.op, transform: `translateX(${s?.x ?? ""})`, transition: "opacity .55s, transform .65s cubic-bezier(.3,.9,.3,1)", pointerEvents: "none" }}>
                      {" "}
                      <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px", color: "#FCEB3F" }}>
                        {show(s?.k)}
                      </span>
                      {" "}
                      <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "27px", lineHeight: "1.02", letterSpacing: "-.04em" }}>
                        {show(s?.title)}
                      </span>
                      {" "}
                      {s?.hasCircle ? (
                        <>
                        {" "}
                        <div style={{ alignSelf: "center", margin: "14px 0 6px", position: "relative", width: "150px", height: "150px", borderRadius: "50%", border: "1.5px solid rgba(255,255,255,.6)", display: "grid", placeItems: "center" }}>
                          {" "}
                          <span style={{ position: "absolute", inset: "0", borderRadius: "50%", background: "rgba(252,235,63,.28)", transform: `scale(${s?.cs ?? ""})`, transition: "transform 1s ease-in-out" }}></span>
                          {" "}
                          <span style={{ position: "relative", fontSize: "14px", fontWeight: "600", textAlign: "center", lineHeight: "1.3" }}>
                            {show(s?.cl)}
                          </span>
                          {" "}
                        </div>
                        {" "}
                        </>
                      ) : null}
                      {" "}
                      {s?.hasCard ? (
                        <>
                        {" "}
                        <div style={{ padding: "14px", borderRadius: "16px", background: "rgba(255,255,255,.16)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", display: "flex", flexDirection: "column", gap: "6px", opacity: s?.cardOp, transform: `translateY(${s?.cardY ?? ""})`, transition: "all .5s" }}>
                          {" "}
                          <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9px", color: "#FCEB3F" }}>
                            {show(s?.ck)}
                          </span>
                          {" "}
                          <span style={{ fontSize: "14px", lineHeight: "1.35", fontWeight: "500" }}>
                            {show(s?.ct)}
                          </span>
                          {" "}
                        </div>
                        {" "}
                        </>
                      ) : null}
                      {" "}
                      <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                        {" "}
                        {(s?.bubbles || []).map((b, $index) => (
                          <React.Fragment key={$index}>
                            <span style={{ alignSelf: b?.al, maxWidth: "82%", padding: "9px 12px", borderRadius: b?.r, background: b?.bg, color: b?.fg, fontSize: "12px", lineHeight: "1.4", opacity: b?.op, transform: `translateY(${b?.y ?? ""})`, transition: "opacity .5s, transform .5s cubic-bezier(.3,1.2,.4,1)" }}>
                              {show(b?.t)}
                            </span>
                          </React.Fragment>
                        ))}
                        {" "}
                      </div>
                      {" "}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                        {" "}
                        {(s?.chips || []).map((c, $index) => (
                          <React.Fragment key={$index}>
                            <span style={{ padding: "7px 11px", borderRadius: "999px", background: c?.bg, color: c?.fg, border: "1px solid rgba(255,255,255,.35)", fontSize: "11.5px", fontWeight: "500", transition: "all .4s" }}>
                              {show(c?.t)}
                            </span>
                          </React.Fragment>
                        ))}
                        {" "}
                      </div>
                      {" "}
                      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "7px" }}>
                        {" "}
                        {(s?.btns || []).map((b, $index) => (
                          <React.Fragment key={$index}>
                            <span style={{ height: "42px", borderRadius: "999px", background: b?.bg, color: b?.fg, border: "1px solid rgba(255,255,255,.4)", display: "grid", placeItems: "center", fontSize: "12.5px", fontWeight: "600", opacity: b?.op, transform: `translateY(${b?.y ?? ""})`, transition: "all .5s" }}>
                              {show(b?.t)}
                            </span>
                          </React.Fragment>
                        ))}
                        {" "}
                        {s?.hasInput ? (
                          <>
                          {" "}
                          <div style={{ height: "44px", borderRadius: "999px", background: "rgba(255,255,255,.16)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 5px 0 16px", fontSize: "12px", color: "#FFFFFFb3" }}>
                            Type, or hold to talk
                            <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#FFFFFF", color: "#0B0B0B", display: "grid", placeItems: "center", fontSize: "13px" }}>
                              🎙
                            </span>
                          </div>
                          {" "}
                          </>
                        ) : null}
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </React.Fragment>
                ))}
              </div>
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", padding: "6px 10px", borderRadius: "999px", background: v.atMode?.kBg, color: "#0B0B0B" }}>
                  {show(v.atMode?.k)}
                </span>
                <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", padding: "6px 10px", borderRadius: "999px", background: "#FFFFFF1A" }}>
                  {"AI role · "}{show(v.atMode?.role)}
                </span>
              </div>
              {" "}
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "84px", lineHeight: ".86", letterSpacing: "-.06em" }}>
                {show(v.atMode?.t)}
              </span>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #FFFFFF26" }}>
                {" "}
                {(v.atSteps || []).map((s, $index) => (
                  <React.Fragment key={$index}>
                    {" "}
                    <button type="button" onClick={s?.onPick} style={{ all: "unset", cursor: "pointer", position: "relative", display: "grid", gridTemplateColumns: "44px 1fr", gap: "12px", padding: "14px 0", borderBottom: "1px solid #FFFFFF26", opacity: s?.op, transition: "opacity .4s" }}>
                      {" "}
                      <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: s?.nc, paddingTop: "4px" }}>
                        {show(s?.n)}
                      </span>
                      {" "}
                      <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                        {" "}
                        <span style={{ fontSize: "18px", fontWeight: "500", letterSpacing: "-.02em" }}>
                          {show(s?.t)}
                        </span>
                        {" "}
                        <span style={{ fontSize: "14px", lineHeight: "1.45", color: "#FCEB3F", maxHeight: s?.mh, overflow: "hidden", transition: "max-height .5s" }}>
                          {show(s?.note)}
                        </span>
                        {" "}
                      </span>
                      {" "}
                      <span style={{ position: "absolute", left: "0", bottom: "-1px", height: "2px", width: s?.prog, background: "#FCEB3F", transition: "width 1s linear" }}></span>
                      {" "}
                    </button>
                    {" "}
                  </React.Fragment>
                ))}
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
      </section>
      <section id="safety" style={{ padding: "110px 40px 40px", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            05
          </span>
          <span>
            Move 05 — Design when AI stops
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "52px", lineHeight: "1" }}>
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
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "40px", alignItems: "center", padding: "32px", borderRadius: "28px", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)" }}>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {" "}
              {(v.atSafe || []).map((s, $index) => (
                <React.Fragment key={$index}>
                  {" "}
                  <button type="button" onClick={s?.onPick} onMouseEnter={s?.onPick} style={{ all: "unset", cursor: "pointer", display: "grid", gridTemplateColumns: "56px 1fr", gap: "16px", alignItems: "center", padding: "18px 20px", borderRadius: "18px", background: s?.bg, color: s?.fg, transition: "background .3s, color .3s" }}>
                    {" "}
                    <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "36px", lineHeight: ".9", letterSpacing: "-.05em", color: s?.nc }}>
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
                Hover a step — the screen reacts →
              </span>
              {" "}
            </div>
            {" "}
            <div style={{ width: "290px", height: "600px", flex: "none", borderRadius: "44px", background: "#0B0B0B", padding: "10px", boxSizing: "border-box", boxShadow: "0 40px 80px -40px rgba(0,0,0,.55)" }}>
              <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "35px", overflow: "hidden", background: "#1A1A18" }}>
                <div style={{ position: "absolute", inset: "0", background: "#F4F3EE" }}></div>
                {" "}
                <div style={{ position: "absolute", left: "0", right: "0", top: "0", padding: "46px 18px 14px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", fontWeight: "600", color: "#0B0B0B", borderBottom: "1px solid #0B0B0B14" }}>
                  <span>
                    Resolve · live session
                  </span>
                  <span style={{ padding: "4px 8px", borderRadius: "999px", background: v.atSafeLive?.bg, color: "#FFFFFF", fontSize: "10px" }}>
                    {show(v.atSafeLive?.t)}
                  </span>
                </div>
                {" "}
                <div style={{ position: "absolute", left: "16px", right: "16px", top: "100px", display: "flex", flexDirection: "column", gap: "8px", opacity: v.atSafeChatOp, filter: `blur(${v.atSafeBlur ?? ""})`, transition: "all .6s" }}>
                  {" "}
                  <span style={{ alignSelf: "flex-start", maxWidth: "78%", padding: "10px 12px", borderRadius: "14px 14px 14px 4px", background: "#FFFFFF", color: "#0B0B0B", fontSize: "12px", lineHeight: "1.4" }}>
                    Let’s take turns. Sam, you have the floor.
                  </span>
                  {" "}
                  <span style={{ alignSelf: "flex-end", maxWidth: "78%", padding: "10px 12px", borderRadius: "14px 14px 4px 14px", background: "#0B0B0B", color: "#FFFFFF", fontSize: "12px", lineHeight: "1.4" }}>
                    Honestly I don’t know if I can keep doing this…
                  </span>
                  {" "}
                </div>
                {" "}
                {(v.atSafe || []).map((s, $index) => (
                  <React.Fragment key={$index}>
                    {" "}
                    <div style={{ position: "absolute", left: "12px", right: "12px", bottom: "12px", padding: "20px 18px", borderRadius: "26px", background: "#FFFFFF", color: "#0B0B0B", display: "flex", flexDirection: "column", gap: "12px", opacity: s?.op, transform: `translateY(${s?.y ?? ""})`, transition: "opacity .5s, transform .6s cubic-bezier(.3,.9,.3,1)", boxShadow: "0 -10px 30px -10px rgba(0,0,0,.25)" }}>
                      {" "}
                      <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px", color: "#E5322B" }}>
                        {show(s?.sheetK)}
                      </span>
                      {" "}
                      <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "24px", lineHeight: "1.05", letterSpacing: "-.04em" }}>
                        {show(s?.sheetT)}
                      </span>
                      {" "}
                      {(s?.btns || []).map((b, $index) => (
                        <React.Fragment key={$index}>
                          <span style={{ height: "40px", borderRadius: "999px", background: b?.bg, color: b?.fg, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", fontSize: "12.5px", fontWeight: "600" }}>
                            {show(b?.t)}
                            <span>
                              {show(b?.r)}
                            </span>
                          </span>
                        </React.Fragment>
                      ))}
                      {" "}
                    </div>
                    {" "}
                  </React.Fragment>
                ))}
              </div>
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "flex", alignItems: "baseline", gap: "20px", paddingTop: "16px", borderTop: "1px solid #0B0B0B26" }}>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B", flex: "none" }}>
              Why
            </span>
            <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "26px", lineHeight: "1.15", letterSpacing: "-.035em" }}>
              {"Responsible AI isn’t only better answers — it’s knowing "}
              <span style={{ fontStyle: "italic" }}>
                when the product should step aside.
              </span>
            </span>
          </div>
        </div>
      </section>
      <section id="system" style={{ padding: "110px 40px 40px", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            06
          </span>
          <span>
            Bonus — Ready for handoff
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "48px", lineHeight: "1.02" }}>
            {"A new dev team joined mid‑project. "}
            <span style={{ fontStyle: "italic" }}>
              I made sure the design didn’t break.
            </span>
          </h2>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
            {" "}
            <div style={{ padding: "22px", borderRadius: "20px", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
                01 · The situation
              </span>
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "44px", lineHeight: ".9", letterSpacing: "-.06em" }}>
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
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "44px", lineHeight: ".9", letterSpacing: "-.06em" }}>
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
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "44px", lineHeight: ".9", letterSpacing: "-.06em" }}>
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
            <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "26px", lineHeight: "1.15", letterSpacing: "-.035em" }}>
              {"A design system is how design decisions "}
              <span style={{ fontStyle: "italic" }}>
                survive when the builders change.
              </span>
            </span>
          </div>
        </div>
      </section>
      <section id="outcome" style={{ margin: "110px 40px 0", padding: "56px 48px", borderRadius: "28px", background: "#FCEB3F", position: "relative", overflow: "hidden" }}>
        {" "}
        <svg width="900" height="300" viewBox="0 0 900 300" style={{ position: "absolute", right: "-140px", top: "30px", pointerEvents: "none" }}>
          <ellipse cx="450" cy="150" rx="440" ry="120" fill="none" stroke="#0B0B0B" strokeWidth="1" transform="rotate(-6 450 150)"></ellipse>
        </svg>
        {" "}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "40px" }}>
          {" "}
          <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
            <span style={{ color: "#E5322B" }}>
              07
            </span>
            <span>
              What changed — in the product, and in me
            </span>
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,5fr) auto minmax(0,7fr)", gap: "28px", alignItems: "center" }}>
            {" "}
            <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "58px", lineHeight: ".95", color: "#6E6E69", textDecoration: "line-through", textDecorationColor: "#E5322B", textDecorationThickness: "3px" }}>
              Designing AI responses
            </span>
            {" "}
            <span style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#0B0B0B", color: "#FCEB3F", display: "grid", placeItems: "center", fontSize: "20px" }}>
              →
            </span>
            {" "}
            <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "58px", lineHeight: ".95" }}>
              {"Designing AI "}
              <span style={{ fontStyle: "italic" }}>
                boundaries.
              </span>
            </span>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
            {" "}
            {(v.atLearn || []).map((q, $index) => (
              <React.Fragment key={$index}>
                <div style={{ padding: "20px", borderRadius: "18px", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "22px", minHeight: "130px" }}>
                  <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
                    {show(q?.n)}
                  </span>
                  <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "28px", lineHeight: "1.02", letterSpacing: "-.04em", marginTop: "auto" }}>
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
      <footer style={{ marginTop: "110px", background: "#0B0B0B", color: "#FFFFFF", padding: "56px 40px 28px", display: "flex", flexDirection: "column", gap: "48px" }}>
        {" "}
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,6fr) minmax(0,6fr)", gap: "40px", alignItems: "end" }}>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FCEB3F" }}>
              Curious to know more?
            </span>
            <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "44px", lineHeight: "1.05" }}>
              {"This is a small part of the process. "}
              <span style={{ fontStyle: "italic" }}>
                Let’s walk through the rest.
              </span>
            </span>
          </div>
          {" "}
          <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
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
            <a className="dh8" href="project-darkroast.html" style={{ height: "56px", padding: "0 24px", borderRadius: "999px", background: "#FFFFFF14", color: "#FFFFFF", textDecoration: "none", display: "flex", alignItems: "center", fontSize: "15px", fontWeight: "500" }}>
              ← DarkRoast
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "14px", borderTop: "1px solid #FFFFFF26", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FFFFFF99" }}>
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
