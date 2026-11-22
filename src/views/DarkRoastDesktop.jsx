/* eslint-disable */
// DarkRoast page — desktop layout. Generated from the Claude Design board 12a, then hand-tuned.
import React from 'react';
import ImageSlot from '../components/ImageSlot.jsx';
import { css, show } from '../lib/template.js';

export default function DarkRoastDesktop({ v }) {
  return (
    <div style={{ background: "#EFEFEC", color: "#0B0B0B", fontFamily: "'Geist',sans-serif" }}>
      {" "}
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
            Case study 01 / 03
            <br />
            DarkRoast
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
          <svg width="620" height="170" viewBox="0 0 760 230" style={{ position: "absolute", left: "300px", top: "96px", pointerEvents: "none", overflow: "visible" }}>
            <ellipse cx="380" cy="115" rx="378" ry="100" fill="none" stroke="#0B0B0B" strokeWidth="1" transform="rotate(-5 380 115)"></ellipse>
          </svg>
          {" "}
          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "20px" }}>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
              DarkRoast · Creative operations · Dashboard redesign
            </span>
            {" "}
            <h1 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "64px", lineHeight: ".98" }}>
              {"Redesigning the project workspace for "}
              <span style={{ fontStyle: "italic" }}>
                faster creative collaboration
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
              Product Designer — research to final UI
            </span>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", paddingTop: "2px" }}>
              Scope
            </span>
            <span>
              {"Research, workflow mapping, IA, client & designer experience"}
            </span>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", paddingTop: "2px" }}>
              Inputs
            </span>
            <span>
              ~150 client survey responses, product audit, benchmarking
            </span>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", paddingTop: "2px" }}>
              Built
            </span>
            <span>
              Figma → coded prototype via Claude + MCP
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div style={{ position: "relative", height: "560px", margin: "0 -40px", background: "#E9DA2E", overflow: "hidden" }}>
          {" "}
          <img src="Mockups/DarkRoast/Project%20Landing.jpg" alt="DarkRoast workspace on a studio display" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          {" "}
          <span style={{ position: "absolute", left: "40px", bottom: "20px", padding: "8px 13px", borderRadius: "999px", background: "rgba(255,255,255,.82)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", fontSize: "12.5px", fontWeight: "500" }}>
            Fig. 01 — The redesigned workspace
          </span>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      <nav style={{ position: "sticky", top: "0", zIndex: "5", background: "#EFEFEC", borderBottom: "1px solid #0B0B0B1F", padding: "0 40px" }}>
        {" "}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", height: "64px", overflow: "hidden" }}>
          {" "}
          {(v.csChapters || []).map((c, $index) => (
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
        {" "}
      </nav>
      {" "}
      <section id="tldr" style={{ padding: "110px 40px 90px", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px" }}>
        {" "}
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            TL;DR
          </span>
          <span>
            In one minute
          </span>
        </div>
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
          {" "}
          <p style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "48px", lineHeight: "1.1", letterSpacing: "-.045em" }}>
            {"The dashboard had grown into a dense project‑management interface where messaging, files, briefs, status and metadata all "}
            <span style={{ fontStyle: "italic" }}>
              competed for attention.
            </span>
          </p>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
            {" "}
            <div style={{ padding: "24px", borderRadius: "20px", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69" }}>
                What I found
              </span>
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "30px", lineHeight: "1.05", letterSpacing: "-.04em" }}>
                Not missing features.
              </span>
              <span style={{ fontSize: "14.5px", lineHeight: "1.55", color: "#3C3C38" }}>
                Survey, workflow analysis, benchmarking and an audit all pointed the same way.
              </span>
            </div>
            {" "}
            <div style={{ padding: "24px", borderRadius: "20px", background: "#0B0B0B", color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FCEB3F" }}>
                The real problem
              </span>
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "30px", lineHeight: "1.05", letterSpacing: "-.04em" }}>
                {"Hierarchy, focus & "}
                <span style={{ fontStyle: "italic" }}>
                  context.
                </span>
              </span>
              <span style={{ fontSize: "14.5px", lineHeight: "1.55", color: "#FFFFFFb3" }}>
                Too much visible at once, not enough clarity about what mattered now.
              </span>
            </div>
            {" "}
            <div style={{ padding: "24px", borderRadius: "20px", background: "#FCEB3F", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
                What I did
              </span>
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "30px", lineHeight: "1.05", letterSpacing: "-.04em" }}>
                {"Redefined what matters, "}
                <span style={{ fontStyle: "italic" }}>
                  when.
                </span>
              </span>
              <span style={{ fontSize: "14.5px", lineHeight: "1.55" }}>
                A few high‑impact changes — not a full rebuild.
              </span>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section id="proto" style={{ margin: "0 40px", padding: "20px", borderRadius: "28px", background: "#0B0B0B", color: "#FFFFFF" }}>
        {" "}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", padding: "24px 20px 28px" }}>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FCEB3F" }}>
              Solution — try it
            </span>
            <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "56px", lineHeight: "1" }}>
              {"The final workspace, "}
              <span style={{ fontStyle: "italic" }}>
                live.
              </span>
            </h2>
          </div>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-end", textAlign: "right" }}>
            {" "}
            <span style={{ fontSize: "13px", lineHeight: "1.5", color: "#FFFFFFb3", maxWidth: "36ch" }}>
              Vibe‑coded with Claude agents by importing my Figma designs through the MCP server.
            </span>
            {" "}
            <a href="DarkRoast%20Prototype%20new.html" target="_blank" style={{ height: "44px", padding: "0 8px 0 18px", borderRadius: "999px", background: "#FCEB3F", color: "#0B0B0B", textDecoration: "none", display: "flex", alignItems: "center", gap: "14px", fontSize: "13.5px", fontWeight: "500" }}>
              {"Open full screen "}
              <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#0B0B0B", color: "#FCEB3F", display: "grid", placeItems: "center" }}>
                <svg width="12" height="12" viewBox="0 0 100 100" style={{ display: "block" }}>
                  <path d="M14 14 L84 84 M84 34 L84 84 L34 84" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="square"></path>
                </svg>
              </span>
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div style={{ borderRadius: "14px", overflow: "hidden", background: "#1A1A18" }}>
          {" "}
          <div style={{ height: "36px", display: "flex", alignItems: "center", gap: "7px", padding: "0 14px", background: "#232321" }}>
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#4A4A46" }}></span>
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#4A4A46" }}></span>
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#4A4A46" }}></span>
            <span style={{ marginLeft: "14px", fontSize: "11.5px", color: "#FFFFFF80" }}>
              darkroast.app / projects
            </span>
          </div>
          {" "}
          <iframe src="DarkRoast%20Prototype%20new.html" title="DarkRoast interactive prototype" loading="lazy" style={{ display: "block", width: "100%", height: "640px", border: "0", background: "#FFFFFF" }}></iframe>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section id="problem" style={{ padding: "120px 40px 40px", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px" }}>
        {" "}
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            01
          </span>
          <span>
            The problem
          </span>
        </div>
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "56px", lineHeight: "1.02" }}>
            {"Clients manage a high volume of creative work — and need to know "}
            <span style={{ fontStyle: "italic" }}>
              what’s moving, what’s blocked, and where feedback is due.
            </span>
          </h2>
          {" "}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
            {" "}
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", padding: "4px", borderRadius: "999px", background: "#E2E2DE", width: "420px" }}>
              {" "}
              <span style={{ position: "absolute", top: "4px", bottom: "4px", left: v.csAuditLeft, width: "calc(50% - 4px)", borderRadius: "999px", background: "#FFFFFF", boxShadow: "0 3px 10px rgba(0,0,0,.09)", transition: "left .45s cubic-bezier(.3,.9,.3,1)" }}></span>
              {" "}
              {(v.csAudits || []).map((a, $index) => (
                <React.Fragment key={$index}>
                  <button type="button" onClick={a?.onPick} style={{ all: "unset", cursor: "pointer", position: "relative", height: "44px", display: "grid", placeItems: "center", fontSize: "14px", fontWeight: a?.w }}>
                    {show(a?.t)}
                  </button>
                </React.Fragment>
              ))}
              {" "}
            </div>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69" }}>
              Annotated audit — tap to switch
            </span>
            {" "}
          </div>
          {" "}
          <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)", height: "560px" }}>
            {" "}
            {(v.csAudits || []).map((a, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <div role="img" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", backgroundImage: `url(${a?.src ?? ""})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat", background: "#FFFFFF", opacity: a?.op, transition: "opacity .5s" }}></div>
                {" "}
              </React.Fragment>
            ))}
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,5fr) minmax(0,7fr)", gap: "40px", alignItems: "start" }}>
            {" "}
            <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55" }}>
              {"Users had too much information visible at once, but not enough clarity about what mattered now. It wasn’t a list of isolated UI bugs — it was an "}
              <strong style={{ fontWeight: "600" }}>
                information‑hierarchy and workflow problem.
              </strong>
            </p>
            {" "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {" "}
              {(v.csSymptoms || []).map((s, $index) => (
                <React.Fragment key={$index}>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 14px", borderRadius: "999px", background: "#FFFFFF", fontSize: "14px" }}>
                    <span style={{ fontSize: "10.5px", color: "#E5322B" }}>
                      {show(s?.n)}
                    </span>
                    {show(s?.t)}
                  </span>
                </React.Fragment>
              ))}
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section id="research" style={{ padding: "100px 40px 40px", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px" }}>
        {" "}
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            02
          </span>
          <span>
            Research
          </span>
        </div>
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          {" "}
          <div style={{ display: "flex", alignItems: "flex-end", gap: "28px" }}>
            {" "}
            <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "180px", lineHeight: ".78", letterSpacing: "-.07em" }}>
              ~150
            </span>
            {" "}
            <h2 style={{ margin: "0 0 8px", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "40px", lineHeight: "1.05", maxWidth: "16ch" }}>
              {"clients told us what they "}
              <span style={{ fontStyle: "italic" }}>
                wanted improved.
              </span>
            </h2>
            {" "}
          </div>
          {" "}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingTop: "10px", borderTop: "1px solid #0B0B0B33" }}>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
              What they said → what it really meant
            </span>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
              Hover a card to flip
            </span>
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
            {" "}
            {(v.csSurvey || []).map((s, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <button type="button" onMouseEnter={s?.onIn} onMouseLeave={s?.onOut} onFocus={s?.onIn} onBlur={s?.onOut} style={{ all: "unset", cursor: "pointer", height: "260px", perspective: "900px" }}>
                  {" "}
                  <div style={{ position: "relative", width: "100%", height: "100%", transformStyle: "preserve-3d", transform: `rotateY(${s?.rot ?? ""})`, transition: "transform .7s cubic-bezier(.3,.9,.3,1)" }}>
                    {" "}
                    <div style={{ position: "absolute", inset: "0", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", borderRadius: "20px", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)", padding: "22px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      {" "}
                      <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69" }}>
                        {"Survey comment "}{show(s?.n)}
                      </span>
                      {" "}
                      <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "28px", lineHeight: "1.08", letterSpacing: "-.04em" }}>
                        {"“"}{show(s?.q)}{"”"}
                      </span>
                      {" "}
                      <span style={{ alignSelf: "flex-end", width: "32px", height: "32px", borderRadius: "50%", background: "#EFEFEC", display: "grid", placeItems: "center", fontSize: "14px" }}>
                        ↻
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ position: "absolute", inset: "0", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)", borderRadius: "20px", background: "#0B0B0B", color: "#FFFFFF", padding: "22px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      {" "}
                      <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FCEB3F" }}>
                        Implied issue
                      </span>
                      {" "}
                      <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "26px", lineHeight: "1.1", letterSpacing: "-.04em" }}>
                        {show(s?.a)}
                      </span>
                      {" "}
                      <span style={{ alignSelf: "flex-end", width: "32px", height: "32px", borderRadius: "50%", background: "#FFFFFF1A", display: "grid", placeItems: "center", fontSize: "14px" }}>
                        ↺
                      </span>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </button>
                {" "}
              </React.Fragment>
            ))}
            {" "}
          </div>
          {" "}
          <p style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "30px", lineHeight: "1.15", letterSpacing: "-.04em", maxWidth: "30ch" }}>
            {"DarkRoast needed to support both "}
            <span style={{ fontStyle: "italic" }}>
              structured project management
            </span>
            {" and "}
            <span style={{ fontStyle: "italic" }}>
              casual collaboration.
            </span>
          </p>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section id="workflow" style={{ padding: "100px 40px 40px", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px" }}>
        {" "}
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            03
          </span>
          <span>
            Mapping the workflow
          </span>
        </div>
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "48px", lineHeight: "1.05" }}>
            {"The survey said "}
            <span style={{ fontStyle: "italic" }}>
              what
            </span>
            {" hurt. The audit showed "}
            <span style={{ fontStyle: "italic" }}>
              where.
            </span>
            {" Neither explained how it connected — so I mapped the jobs clients do across a whole project."}
          </h2>
          {" "}
          <div style={{ position: "relative", borderRadius: "28px", background: "#FCEB3F", padding: "40px 40px 32px", overflow: "hidden" }}>
            {" "}
            <svg width="100%" height="200" viewBox="0 0 1000 200" preserveAspectRatio="none" style={{ position: "absolute", left: "0", right: "0", top: "34px", pointerEvents: "none" }}>
              <ellipse cx="500" cy="100" rx="470" ry="78" fill="none" stroke="#0B0B0B" strokeWidth="1" vectorEffect="non-scaling-stroke"></ellipse>
            </svg>
            {" "}
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "10px" }}>
              {" "}
              {(v.csSteps || []).map((s, $index) => (
                <React.Fragment key={$index}>
                  {" "}
                  <button type="button" onClick={s?.onPick} onMouseEnter={s?.onPick} style={{ all: "unset", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", paddingTop: s?.pad, transition: "padding .5s cubic-bezier(.3,.9,.3,1)" }}>
                    {" "}
                    <span style={{ width: s?.size, height: s?.size, borderRadius: "50%", background: s?.bg, color: s?.fg, display: "grid", placeItems: "center", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "24px", letterSpacing: "-.03em", boxShadow: s?.sh, transition: "all .4s cubic-bezier(.3,1.3,.4,1)" }}>
                      {show(s?.n)}
                    </span>
                    {" "}
                    <span style={{ fontSize: "14px", fontWeight: s?.fw, letterSpacing: "-.01em", textAlign: "center" }}>
                      {show(s?.t)}
                    </span>
                    {" "}
                    {s?.isNow ? (
                      <>
                      <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9px", padding: "4px 8px", borderRadius: "999px", background: "#E5322B", color: "#FFFFFF" }}>
                        Old dashboard lived here
                      </span>
                      </>
                    ) : null}
                    {" "}
                  </button>
                  {" "}
                </React.Fragment>
              ))}
              {" "}
            </div>
            {" "}
            <div style={{ position: "relative", marginTop: "28px", padding: "22px 24px", borderRadius: "18px", background: "#FFFFFF", display: "grid", gridTemplateColumns: "auto 1fr auto", gap: "24px", alignItems: "center" }}>
              {" "}
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "64px", lineHeight: ".8", letterSpacing: "-.06em" }}>
                {show(v.csStep?.n)}
              </span>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "20px", fontWeight: "600", letterSpacing: "-.02em" }}>
                  {show(v.csStep?.t)}
                </span>
                <span style={{ fontSize: "15px", color: "#3C3C38" }}>
                  {show(v.csStep?.d)}
                </span>
              </div>
              {" "}
              <div style={{ display: "flex", gap: "8px" }}>
                <button type="button" onClick={v.csStepPrev} style={{ all: "unset", cursor: "pointer", width: "44px", height: "44px", borderRadius: "50%", background: "#EFEFEC", display: "grid", placeItems: "center" }}>
                  ←
                </button>
                <button type="button" onClick={v.csStepNext} style={{ all: "unset", cursor: "pointer", width: "44px", height: "44px", borderRadius: "50%", background: "#0B0B0B", color: "#FFFFFF", display: "grid", placeItems: "center" }}>
                  →
                </button>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#3C3C38", maxWidth: "60ch" }}>
            The current dashboard sat in the middle of this loop — tracking work — without supporting the jobs around it.
          </p>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section id="model" style={{ padding: "100px 40px 40px", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px" }}>
        {" "}
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            04
          </span>
          <span>
            The mental model
          </span>
        </div>
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "56px", lineHeight: "1" }}>
            {"A project has "}
            <span style={{ fontStyle: "italic" }}>
              two modes.
            </span>
            {" The old UI treated both as equally important — all the time."}
          </h2>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {" "}
            {(v.csModes || []).map((m, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <button type="button" onClick={m?.onPick} onMouseEnter={m?.onPick} style={{ all: "unset", cursor: "pointer", minHeight: "300px", padding: "28px", borderRadius: "24px", background: m?.bg, color: m?.fg, boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "18px", transform: `scale(${m?.s ?? ""})`, opacity: m?.op, transition: "all .5s cubic-bezier(.3,.9,.3,1)" }}>
                  {" "}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
                      {show(m?.k)}
                    </span>
                    <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", padding: "5px 9px", borderRadius: "999px", background: m?.tagBg, color: m?.tagFg }}>
                      {show(m?.tag)}
                    </span>
                  </div>
                  {" "}
                  <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "52px", lineHeight: ".95" }}>
                    {show(m?.t)}
                  </span>
                  {" "}
                  <span style={{ fontSize: "15px", opacity: ".75" }}>
                    {show(m?.d)}
                  </span>
                  {" "}
                  <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {" "}
                    {(m?.items || []).map((x, $index) => (
                      <React.Fragment key={$index}>
                        <span style={{ padding: "8px 12px", borderRadius: "999px", background: m?.chip, fontSize: "13.5px" }}>
                          {show(x)}
                        </span>
                      </React.Fragment>
                    ))}
                    {" "}
                  </div>
                  {" "}
                </button>
                {" "}
              </React.Fragment>
            ))}
            {" "}
          </div>
          {" "}
          <div style={{ padding: "30px 32px", borderRadius: "24px", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)", display: "grid", gridTemplateColumns: "auto 1fr", gap: "28px", alignItems: "center" }}>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
              Working
              <br />
              principle
            </span>
            {" "}
            <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "36px", lineHeight: "1.1", letterSpacing: "-.04em" }}>
              {"Give active work priority. Keep reference information close — "}
              <span style={{ fontStyle: "italic" }}>
                but not permanently in the way.
              </span>
            </span>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
            {" "}
            {(v.csPriorities || []).map((p, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <div style={{ padding: "24px", borderTop: "1px solid #0B0B0B", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "44px", lineHeight: ".9", letterSpacing: "-.05em" }}>
                    {show(p?.n)}
                  </span>
                  <span style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "-.02em" }}>
                    {show(p?.t)}
                  </span>
                  <span style={{ fontSize: "14.5px", lineHeight: "1.55", color: "#3C3C38" }}>
                    {show(p?.d)}
                  </span>
                </div>
                {" "}
              </React.Fragment>
            ))}
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section id="iter" style={{ padding: "100px 40px 40px", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px" }}>
        {" "}
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            05
          </span>
          <span>
            Iterations
          </span>
        </div>
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {" "}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "24px" }}>
            {" "}
            <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "48px", lineHeight: "1.05", maxWidth: "20ch" }}>
              {"Testing the balance between "}
              <span style={{ fontStyle: "italic" }}>
                density
              </span>
              {" and "}
              <span style={{ fontStyle: "italic" }}>
                visibility.
              </span>
            </h2>
            {" "}
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", padding: "4px", borderRadius: "999px", background: "#E2E2DE", width: "380px", flex: "none" }}>
              {" "}
              <span style={{ position: "absolute", top: "4px", bottom: "4px", left: v.csIterLeft, width: "calc(50% - 4px)", borderRadius: "999px", background: "#FFFFFF", boxShadow: "0 3px 10px rgba(0,0,0,.09)", transition: "left .45s cubic-bezier(.3,.9,.3,1)" }}></span>
              {" "}
              {(v.csIterSets || []).map((s, $index) => (
                <React.Fragment key={$index}>
                  <button type="button" onClick={s?.onPick} style={{ all: "unset", cursor: "pointer", position: "relative", height: "44px", display: "grid", placeItems: "center", fontSize: "14px", fontWeight: s?.w }}>
                    {show(s?.t)}
                  </button>
                </React.Fragment>
              ))}
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 260px", gap: "12px" }}>
            {" "}
            <div style={{ position: "relative", height: "540px", borderRadius: "20px", overflow: "hidden", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)" }}>
              {" "}
              {(v.csIters || []).map((x, $index) => (
                <React.Fragment key={$index}>
                  {" "}
                  <div role="img" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", backgroundImage: `url(${x?.src ?? ""})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat", background: "#FFFFFF", opacity: x?.op, transform: `scale(${x?.s ?? ""})`, transition: "opacity .5s, transform .7s cubic-bezier(.3,.9,.3,1)" }}></div>
                  {" "}
                </React.Fragment>
              ))}
              {" "}
              <span style={{ position: "absolute", left: "16px", bottom: "16px", padding: "8px 13px", borderRadius: "999px", background: "rgba(11,11,11,.7)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", color: "#FFFFFF", fontSize: "12.5px" }}>
                {show(v.csIterCur?.n)}{" — "}{show(v.csIterCur?.t)}
              </span>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {" "}
              {(v.csIters || []).map((x, $index) => (
                <React.Fragment key={$index}>
                  {" "}
                  <button type="button" onClick={x?.onPick} onMouseEnter={x?.onPick} style={{ all: "unset", cursor: "pointer", flex: "1", minHeight: "0", padding: "14px 16px", borderRadius: "16px", background: x?.bg, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "8px", transition: "background .25s" }}>
                    {" "}
                    <span style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
                      <span style={{ color: "#E5322B" }}>
                        {show(x?.n)}
                      </span>
                      <span style={{ opacity: x?.op }}>
                        ●
                      </span>
                    </span>
                    {" "}
                    <span style={{ fontSize: "14px", fontWeight: "500", lineHeight: "1.3", letterSpacing: "-.01em" }}>
                      {show(x?.t)}
                    </span>
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
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,5fr) minmax(0,7fr)", gap: "40px" }}>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69" }}>
              {show(v.csIterSet?.k)}
            </span>
            {" "}
            <span style={{ fontSize: "16px", lineHeight: "1.55", color: "#3C3C38" }}>
              {show(v.csIterSet?.d)}
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section id="final" style={{ padding: "100px 40px 40px", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px" }}>
        {" "}
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            06
          </span>
          <span>
            Final design
          </span>
        </div>
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "56px", lineHeight: "1" }}>
            {"Four high‑impact changes, "}
            <span style={{ fontStyle: "italic" }}>
              each traced back to the research.
            </span>
          </h2>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
            {" "}
            {(v.csPairs || []).map((p, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <button type="button" onClick={p?.onPick} style={{ all: "unset", cursor: "pointer", padding: "16px 18px", borderRadius: "16px", background: p?.bg, color: p?.fg, display: "flex", flexDirection: "column", gap: "6px", transition: "background .25s, color .25s" }}>
                  <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "10px", color: p?.nc }}>
                    {show(p?.n)}
                  </span>
                  <span style={{ fontSize: "15px", fontWeight: "600", letterSpacing: "-.01em" }}>
                    {show(p?.t)}
                  </span>
                </button>
                {" "}
              </React.Fragment>
            ))}
            {" "}
          </div>
          {" "}
          <div onPointerMove={v.onCmpMove} onPointerUp={v.onCmpUp} onPointerLeave={v.onCmpUp} style={{ position: "relative", height: "560px", borderRadius: "20px", overflow: "hidden", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)", userSelect: "none", touchAction: "none" }}>
            {" "}
            <div role="img" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", backgroundImage: `url(${v.csPair?.after ?? ""})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat", background: "#FFFFFF", pointerEvents: "none" }}></div>
            {" "}
            <div style={{ position: "absolute", inset: "0", clipPath: `inset(0 ${v.csCmpRight ?? ""} 0 0)`, background: "#FFFFFF" }}>
              {" "}
              <div role="img" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", backgroundImage: `url(${v.csPair?.before ?? ""})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat", pointerEvents: "none" }}></div>
              {" "}
            </div>
            {" "}
            <span style={{ position: "absolute", left: "16px", top: "16px", padding: "8px 13px", borderRadius: "999px", background: "rgba(11,11,11,.72)", color: "#FFFFFF", fontSize: "12.5px", pointerEvents: "none" }}>
              Before
            </span>
            {" "}
            <span style={{ position: "absolute", right: "16px", top: "16px", padding: "8px 13px", borderRadius: "999px", background: "#FCEB3F", color: "#0B0B0B", fontSize: "12.5px", fontWeight: "500", pointerEvents: "none" }}>
              After
            </span>
            {" "}
            <div onPointerDown={v.onCmpDown} style={{ position: "absolute", top: "0", bottom: "0", left: v.csCmpLeft, width: "44px", marginLeft: "-22px", cursor: "ew-resize", display: "flex", justifyContent: "center" }}>
              {" "}
              <span style={{ width: "2px", height: "100%", background: "#0B0B0B" }}></span>
              {" "}
              <span style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", width: "52px", height: "52px", borderRadius: "50%", background: "#0B0B0B", color: "#FCEB3F", display: "grid", placeItems: "center", fontSize: "17px", boxShadow: "0 8px 20px -8px rgba(0,0,0,.5)" }}>
                ⟷
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {" "}
            <div style={{ padding: "22px 24px", borderRadius: "18px", background: "#E2E2DE", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69" }}>
                Before
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.55" }}>
                {show(v.csPair?.b)}
              </span>
            </div>
            {" "}
            <div style={{ padding: "22px 24px", borderRadius: "18px", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
                After
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.55" }}>
                {show(v.csPair?.a)}
              </span>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section id="outcome" style={{ margin: "100px 40px 0", padding: "56px 48px", borderRadius: "28px", background: "#FCEB3F", position: "relative", overflow: "hidden" }}>
        {" "}
        <svg width="900" height="300" viewBox="0 0 900 300" style={{ position: "absolute", right: "-120px", top: "40px", pointerEvents: "none" }}>
          <ellipse cx="450" cy="150" rx="440" ry="120" fill="none" stroke="#0B0B0B" strokeWidth="1" transform="rotate(-6 450 150)"></ellipse>
        </svg>
        {" "}
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px" }}>
          {" "}
          <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
            <span style={{ color: "#E5322B" }}>
              07
            </span>
            <span>
              Outcome
            </span>
          </div>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {" "}
            <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "64px", lineHeight: ".98" }}>
              {"From a dense project‑management interface to a "}
              <span style={{ fontStyle: "italic" }}>
                clearer creative workspace.
              </span>
            </h2>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
              {" "}
              <div style={{ padding: "22px", borderRadius: "18px", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "26px", letterSpacing: "-.04em" }}>
                  Status, at a glance
                </span>
                <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3C3C38" }}>
                  Progress is easier to scan across projects.
                </span>
              </div>
              {" "}
              <div style={{ padding: "22px", borderRadius: "18px", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "26px", letterSpacing: "-.04em" }}>
                  Room to collaborate
                </span>
                <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3C3C38" }}>
                  Messages and feedback get the main stage.
                </span>
              </div>
              {" "}
              <div style={{ padding: "22px", borderRadius: "18px", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "26px", letterSpacing: "-.04em" }}>
                  Context in context
                </span>
                <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3C3C38" }}>
                  Files and reference sit beside the work they support.
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", maxWidth: "56ch" }}>
              {"Rather than adding features, the focus stayed on "}
              <strong style={{ fontWeight: "600" }}>
                reducing friction, improving hierarchy and making progress easier to understand.
              </strong>
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section id="reflect" style={{ padding: "110px 40px 100px", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px" }}>
        {" "}
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            08
          </span>
          <span>
            Reflection
          </span>
        </div>
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69" }}>
                What it pushed me toward
              </span>
              <span style={{ fontSize: "20px", lineHeight: "1.4", letterSpacing: "-.02em" }}>
                {"Thinking beyond screens — about "}
                <strong style={{ fontWeight: "600" }}>
                  workflow, information architecture and product behaviour.
                </strong>
              </span>
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69" }}>
                The biggest lesson
              </span>
              <span style={{ fontSize: "20px", lineHeight: "1.4", letterSpacing: "-.02em" }}>
                {"The right answer wasn’t a complete redesign. It was knowing what users need to "}
                <em>
                  notice
                </em>
                {", what they need to "}
                <em>
                  act on
                </em>
                {", and what can stay "}
                <em>
                  one step away.
                </em>
              </span>
            </div>
            {" "}
          </div>
          {" "}
          <blockquote style={{ margin: "0", padding: "36px 0 0", borderTop: "1px solid #0B0B0B", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "54px", lineHeight: "1.02" }}>
            {"“Make creative work easier to follow — "}
            <span style={{ fontStyle: "italic" }}>
              without making clients manage the process.
            </span>
            ”
          </blockquote>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <footer style={{ background: "#0B0B0B", color: "#FFFFFF", padding: "56px 40px 28px", display: "flex", flexDirection: "column", gap: "48px" }}>
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
            <a href="mailto:aayushipatel2002@gmail.com?subject=DarkRoast%20case%20study" style={{ height: "56px", padding: "0 10px 0 24px", borderRadius: "999px", background: "#FCEB3F", color: "#0B0B0B", textDecoration: "none", display: "flex", alignItems: "center", gap: "18px", fontSize: "15px", fontWeight: "500" }}>
              {"Get in touch "}
              <span style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#0B0B0B", color: "#FCEB3F", display: "grid", placeItems: "center" }}>
                <svg width="14" height="14" viewBox="0 0 100 100" style={{ display: "block" }}>
                  <path d="M14 14 L84 84 M84 34 L84 84 L34 84" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="square"></path>
                </svg>
              </span>
            </a>
            {" "}
            <a className="dh8" href="project-delicut.html" style={{ height: "56px", padding: "0 24px", borderRadius: "999px", background: "#FFFFFF14", color: "#FFFFFF", textDecoration: "none", display: "flex", alignItems: "center", fontSize: "15px", fontWeight: "500" }}>
              Next: Delicut →
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
            Case study 01 / 03 — DarkRoast
          </span>
          <span>
            © 2026 Aayushi Patel
          </span>
        </div>
        {" "}
      </footer>
    </div>
  );
}
