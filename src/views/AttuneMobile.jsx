/* eslint-disable */
// Attune page — mobile layout. Generated from the Claude Design board 14a, then hand-tuned.
import React from 'react';
import ImageSlot from '../components/ImageSlot.jsx';
import { css, show } from '../lib/template.js';

export default function AttuneMobile({ v }) {
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
                CV ↗
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
        <div ref={v.atHeroRef} style={{ display: "flex", flexDirection: "column", gap: "0", margin: "0 -20px", background: "#0B0B0B", color: "#FFFFFF" }}>
          {" "}
          <div style={{ position: "relative", height: "400px", overflow: "hidden" }}>
            {" "}
            {(v.atHeroModes || []).map((m, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <div style={{ position: "absolute", inset: "0", background: `#1A1A18 url(${m?.img ?? ""}) center/cover no-repeat`, opacity: m?.qOp, transform: `scale(${m?.zs ?? ""})`, transition: "opacity .9s ease, transform 4s ease-out" }}></div>
                {" "}
              </React.Fragment>
            ))}
            {" "}
            <span style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(0,0,0,.35) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,.8) 100%)" }}></span>
            {" "}
            <div style={{ position: "absolute", left: "20px", right: "20px", top: "18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              {" "}
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "9.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", padding: "6px 10px", borderRadius: "999px", background: "rgba(255,255,255,.9)", color: "#0B0B0B" }}>
                {show(v.atHeroCur?.n)}{" / 04 · "}{show(v.atHeroCur?.k)}
              </span>
              {" "}
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "9.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FFFFFFcc" }}>
                One app · four moods
              </span>
              {" "}
            </div>
            {" "}
            <div style={{ position: "absolute", left: "20px", right: "20px", bottom: "22px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {" "}
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "64px", lineHeight: ".85" }}>
                {show(v.atHeroCur?.t)}
              </span>
              {" "}
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontStyle: "italic", fontSize: "21px", lineHeight: "1.15", letterSpacing: "-.03em", color: "#FFFFFFee" }}>
                {"“"}{show(v.atHeroCur?.q)}{"”"}
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "20px 20px 22px" }}>
            {" "}
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "9.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FFFFFF99" }}>
              <span>
                ← Just me
              </span>
              <span style={{ color: "#FCEB3F" }}>
                Slide the dial
              </span>
              <span>
                Both of us →
              </span>
            </div>
            {" "}
            <div style={{ position: "relative", height: "44px" }}>
              {" "}
              <span style={{ position: "absolute", left: "0", right: "0", top: "21px", height: "2px", borderRadius: "2px", background: "linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 50%, #FCEB3F 50%, #FCEB3F 100%)", opacity: ".35" }}></span>
              {" "}
              <span style={{ position: "absolute", left: "50%", top: "14px", width: "1px", height: "16px", background: "#FFFFFF66" }}></span>
              {" "}
              <span style={{ position: "absolute", top: "8px", left: v.atHeroThumb, width: "28px", height: "28px", marginLeft: "-14px", borderRadius: "50%", background: "#FCEB3F", boxShadow: "0 0 0 6px #FCEB3F33", transition: "left .6s cubic-bezier(.3,1.2,.4,1)" }}></span>
              {" "}
              <div style={{ position: "absolute", inset: "0", display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))" }}>
                {" "}
                {(v.atHeroModes || []).map((m, $index) => (
                  <React.Fragment key={$index}>
                    <button type="button" aria-label={m?.t} onClick={m?.onTap} style={{ all: "unset", cursor: "pointer", display: "grid", placeItems: "center" }}>
                      <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FFFFFF", opacity: ".7" }}></span>
                    </button>
                  </React.Fragment>
                ))}
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))" }}>
              {" "}
              {(v.atHeroModes || []).map((m, $index) => (
                <React.Fragment key={$index}>
                  <button type="button" onClick={m?.onTap} style={{ all: "unset", cursor: "pointer", textAlign: "center", fontSize: "13px", fontWeight: m?.fw, color: m?.lc, transition: "color .3s" }}>
                    {show(m?.t)}
                  </button>
                </React.Fragment>
              ))}
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
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
            Click a move to jump
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
            00
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
      <section id="roles" style={{ padding: "61px 20px 20px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            01
          </span>
          <span>
            Move 01 — Give every mode a role
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
          <div style={{ margin: "0 -20px", padding: "0 20px 8px", overflowX: "auto", scrollbarWidth: "none" }}>
            <span style={{ display: "block", marginBottom: "8px", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px", color: "#6E6E69" }}>
              Swipe the table →
            </span>
            <div style={{ display: "grid", gridTemplateColumns: "100px repeat(4, 130px)", width: "620px", borderRadius: "24px", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)", overflow: "hidden" }}>
              {" "}
              <span></span>
              {" "}
              {(v.atRoleCols || []).map((c, $index) => (
                <React.Fragment key={$index}>
                  <button type="button" onMouseEnter={c?.onPick} style={{ all: "unset", cursor: "default", padding: "18px 18px 14px", background: c?.bg, color: c?.fg, transition: "background .3s, color .3s", display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: c?.nc }}>
                      {show(c?.n)}
                    </span>
                    <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "26px", lineHeight: "1", letterSpacing: "-.04em" }}>
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
        </div>
      </section>
      <section id="rooms" style={{ padding: "61px 20px 20px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            03
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
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px", alignItems: "center" }}>
            {" "}
            <div style={{ position: "relative", height: "280px", borderRadius: "22px", background: "#E2E2DE url('Mockups/Attune/Four%20Cards%20Explored.jpg') center/contain no-repeat", filter: "grayscale(.7)", opacity: ".8" }}>
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
      <section id="flows" ref={v.atModesRef} style={{ margin: "61px 20px 0", padding: "20px", borderRadius: "28px", background: "#0B0B0B", color: "#FFFFFF" }}>
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px", alignItems: "end" }}>
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", flexWrap: "wrap" }}>
              {" "}
              <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "37px", lineHeight: "1" }}>
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
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px", alignItems: "center" }}>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", padding: "6px 10px", borderRadius: "999px", background: v.atMode?.kBg, color: "#0B0B0B" }}>
                  {show(v.atMode?.k)}
                </span>
                <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", padding: "6px 10px", borderRadius: "999px", background: "#FFFFFF1A" }}>
                  {"AI role · "}{show(v.atMode?.role)}
                </span>
              </div>
              {" "}
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "51px", lineHeight: ".86", letterSpacing: "-.06em" }}>
                {show(v.atMode?.t)}
              </span>
            </div>
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
                    <div style={{ position: "absolute", inset: "0", padding: "48px 16px 20px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "10px", color: "#FFFFFF", opacity: s?.op, transform: `translateX(${s?.x ?? ""})`, transition: "opacity .55s, transform .65s cubic-bezier(.3,.9,.3,1)", pointerEvents: "none" }}>
                      {" "}
                      <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px", color: "#FCEB3F" }}>
                        {show(s?.k)}
                      </span>
                      {" "}
                      <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "25px", lineHeight: "1.02", letterSpacing: "-.04em" }}>
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
                          <div style={{ height: "44px", borderRadius: "999px", background: "rgba(255,255,255,.16)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 5px 0 16px", fontSize: "12px", color: "#FFFFFFb3", flexWrap: "wrap" }}>
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
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "18px", borderRadius: "18px", background: "#FFFFFF0F", border: "1px solid #FFFFFF1A" }}>
                {" "}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  {" "}
                  <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "9.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FCEB3F" }}>
                    {"Step "}{show(v.atStepCur?.n)}{" of 04"}
                  </span>
                  {" "}
                  <div style={{ display: "flex", gap: "6px" }}>
                    {" "}
                    {(v.atSteps || []).map((s, $index) => (
                      <React.Fragment key={$index}>
                        <button type="button" aria-label={`Step ${s?.n ?? ""}`} onClick={s?.onPick} style={{ all: "unset", cursor: "pointer", position: "relative", width: "26px", height: "4px", borderRadius: "2px", background: "#FFFFFF33", overflow: "hidden" }}>
                          <span style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: s?.fill, background: "#FCEB3F", transition: "width 1s linear" }}></span>
                        </button>
                      </React.Fragment>
                    ))}
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <span style={{ fontSize: "20px", fontWeight: "600", letterSpacing: "-.02em", lineHeight: "1.2" }}>
                  {show(v.atStepCur?.t)}
                </span>
                {" "}
                <span style={{ fontSize: "14px", lineHeight: "1.45", color: "#FFFFFFcc" }}>
                  {show(v.atStepCur?.note)}
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
      </section>
      <section id="safety" style={{ padding: "61px 20px 20px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            05
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
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px", alignItems: "center", padding: "32px", borderRadius: "28px", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)" }}>
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
                Hover a step — the screen reacts →
              </span>
              {" "}
            </div>
            {" "}
            <div style={{ width: "290px", height: "600px", flex: "none", borderRadius: "44px", background: "#0B0B0B", padding: "10px", boxSizing: "border-box", boxShadow: "0 40px 80px -40px rgba(0,0,0,.55)" }}>
              <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "35px", overflow: "hidden", background: "#1A1A18" }}>
                <div style={{ position: "absolute", inset: "0", background: "#F4F3EE" }}></div>
                {" "}
                <div style={{ position: "absolute", left: "0", right: "0", top: "0", padding: "20px 18px 14px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", fontWeight: "600", color: "#0B0B0B", borderBottom: "1px solid #0B0B0B14", flexWrap: "wrap" }}>
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
                          <span style={{ height: "40px", borderRadius: "999px", background: b?.bg, color: b?.fg, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", fontSize: "12.5px", fontWeight: "600", flexWrap: "wrap" }}>
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
            06
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
              07
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
