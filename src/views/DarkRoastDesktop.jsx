/* eslint-disable */
// DarkRoast page — desktop layout. Generated from the Claude Design board 12a, then hand-tuned.
import React from 'react';
import ImageSlot from '../components/ImageSlot.jsx';
import HScroll from '../components/HScroll.jsx';
import ShotCard from '../components/ShotCard.jsx';
import IterCanvas from '../components/IterCanvas.jsx';
import { css, show } from '../lib/template.js';

export default function DarkRoastDesktop({ v }) {
  return (
    <div style={{ background: "#EFEFEC", color: "#0B0B0B", fontFamily: "'Geist',sans-serif" }}>
      {" "}
      {/* Site navigation: sticks to the top while scrolling; the chapter bar below docks under it. */}
      <div data-sticky style={{ position: "sticky", top: "0", zIndex: "6", height: "66px", boxSizing: "border-box", background: "#FCEB3F", padding: "14px 40px 0" }}>
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
            Case study 02 / 03
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
            Résumé {"↗\uFE0E"}
          </a>
          {" "}
          <button type="button" onClick={v.copyEmail} style={{ all: "unset", display: "block", alignSelf: "start", margin: "0", padding: "0", cursor: "pointer", textAlign: "right", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
            {show(v.copyLabel)}
          </button>
          {" "}
        </div>
      </div>
      <header style={{ background: "#FCEB3F", padding: "0 40px" }}>
        {" "}
        <div style={{ position: "relative", padding: "43.35px 0 40px", display: "grid", gridTemplateColumns: "minmax(0,8fr) minmax(0,4fr)", gap: "40px", alignItems: "end" }}>
          {" "}
          <svg width="620" height="170" viewBox="0 0 760 230" style={{ position: "absolute", left: "164px", top: "86px", pointerEvents: "none", overflow: "visible" }}>
            <ellipse cx="380" cy="115" rx="378" ry="100" fill="none" stroke="#0B0B0B" strokeWidth="1" transform="rotate(-5 380 115)"></ellipse>
          </svg>
          {" "}
          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "20px" }}>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", display: "flex", flexWrap: "wrap", gap: "4px 32px" }}>
              <span>DarkRoast</span>
              <span>Client dashboard redesign</span>
              <span>2026</span>
            </span>
            {" "}
            <h1 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "64px", lineHeight: ".98" }}>
              {"Helping brands on DarkRoast manage "}
              <span style={{ fontStyle: "italic" }}>
                five projects at once
              </span>
              {" instead of one"}
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
              {"Product Designer, working with DarkRoast as a studio client"}
            </span>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", paddingTop: "2px" }}>
              Team
            </span>
            <span>
              {"Me and a PM from my studio, with DarkRoast’s owner and developer"}
            </span>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", paddingTop: "2px" }}>
              Timeline
            </span>
            <span>
              {"6 months, December 2025 to May 2026"}
            </span>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", paddingTop: "2px" }}>
              Research
            </span>
            <span>
              {"Survey of 150 brands, and usage tracking of our regular brands"}
            </span>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", paddingTop: "2px" }}>
              Status
            </span>
            <span>
              {"Shipped, and tested with real brands before launch"}
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div style={{ position: "relative", height: "560px", margin: "0 -40px", background: "#E9DA2E", overflow: "hidden" }}>
          {" "}
          <img src="Mockups/DarkRoast/Banner.webp" alt="DarkRoast projects workspace on a laptop" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          {" "}
          <span style={{ position: "absolute", left: "40px", bottom: "20px", padding: "8px 13px", borderRadius: "999px", background: "rgba(255,255,255,.82)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", fontSize: "12.5px", fontWeight: "500" }}>
            Fig. 01 — The new Projects page, where a brand can see every project’s status in one list
          </span>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      <nav data-sticky style={{ position: "sticky", top: "66px", zIndex: "5", background: "#EFEFEC", borderBottom: "1px solid #0B0B0B1F", padding: "0 40px" }}>
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
      <section id="tldr" style={{ padding: "48px 40px 48px", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px" }}>
        {" "}
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            00
          </span>
          <span>
            TL;DR · In one minute
          </span>
        </div>
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          {" "}
          <p style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "36px", lineHeight: "1.12", letterSpacing: "-.04em" }}>
            {"DarkRoast is a platform where design teams and the brands that hire them manage projects together. Brands kept adding more projects, but the dashboard was still built for one project at a time, so they had to "}
            <span style={{ fontStyle: "italic" }}>
              check each one separately.
            </span>
          </p>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
            {" "}
            <div style={{ padding: "22px 24px 24px", borderRadius: "20px", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69" }}>
                What I found
              </span>
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "27px", lineHeight: "1.05", letterSpacing: "-.04em" }}>
                {"Brands didn’t need "}
                <span style={{ fontStyle: "italic" }}>
                  more features
                </span>
              </span>
              <span style={{ fontSize: "14.5px", lineHeight: "1.55", color: "#3C3C38" }}>
                The survey and usage tracking both showed brands opening every project just to see its status.
              </span>
            </div>
            {" "}
            <div style={{ padding: "22px 24px 24px", borderRadius: "20px", background: "#0B0B0B", color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FCEB3F" }}>
                What I did
              </span>
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "27px", lineHeight: "1.05", letterSpacing: "-.04em" }}>
                {"Fixed the list, "}
                <span style={{ fontStyle: "italic" }}>
                  not the whole product
                </span>
              </span>
              <span style={{ fontSize: "14.5px", lineHeight: "1.55", color: "#FFFFFFb3" }}>
                I kept the layout brands already knew and changed what shows on the Projects page and inside a project.
              </span>
            </div>
            {" "}
            <div style={{ padding: "22px 24px 24px", borderRadius: "20px", background: "#FCEB3F", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
                The result
              </span>
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "27px", lineHeight: "1.05", letterSpacing: "-.04em" }}>
                {"Status visible "}
                <span style={{ fontStyle: "italic" }}>
                  from the list
                </span>
              </span>
              <span style={{ fontSize: "14.5px", lineHeight: "1.55" }}>
                In testing, brands could see where each project stood without opening it and started handling several at once.
              </span>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section id="proto" style={{ margin: "0 40px", padding: "20px", borderRadius: "28px", background: "#0B0B0B", color: "#FFFFFF", display: "grid", gridTemplateColumns: "minmax(0,1fr) 816px", gap: "40px", alignItems: "stretch" }}>
        {/* Text stacked on the left; the prototype (a 1440×900 page) is scaled to the 816px column on the right, keeping 16:10. */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "24px", padding: "20px 0 8px 20px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FFFFFF", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ color: "#FCEB3F" }}>01</span>
              <span>
              Try it</span>
            </span>
            <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "52px", lineHeight: "1" }}>
              {"Click through the "}
              <span style={{ fontStyle: "italic" }}>
                new Projects page
              </span>
            </h2>
            <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#FFFFFFb3", maxWidth: "30ch" }}>
              I rebuilt my final Figma screens as a working prototype for this portfolio, using Claude and the Figma MCP server.
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FFFFFF99" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2DB34A" }}></span>
              Interactive · best viewed on desktop
            </span>
            <a href="DarkRoast%20Prototype%20new.html" target="_blank" style={{ height: "44px", padding: "0 8px 0 18px", borderRadius: "999px", background: "#FCEB3F", color: "#0B0B0B", textDecoration: "none", display: "flex", alignItems: "center", gap: "14px", fontSize: "13.5px", fontWeight: "500" }}>
              {"Open full screen "}
              <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#0B0B0B", color: "#FCEB3F", display: "grid", placeItems: "center" }}>
                <svg width="12" height="12" viewBox="0 0 100 100" style={{ display: "block" }}>
                  <path d="M14 14 L84 84 M84 34 L84 84 L34 84" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="square"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div style={{ borderRadius: "14px", overflow: "hidden", background: "#1A1A18", alignSelf: "center" }}>
          <div style={{ height: "32px", display: "flex", alignItems: "center", gap: "7px", padding: "0 14px", background: "#232321" }}>
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#4A4A46" }}></span>
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#4A4A46" }}></span>
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#4A4A46" }}></span>
            <span style={{ marginLeft: "14px", fontSize: "11.5px", color: "#FFFFFF80" }}>
              darkroast.app/projects
            </span>
          </div>
          <div style={{ position: "relative", width: "816px", height: "510px", overflow: "hidden", background: "#FFFFFF" }}>
            <iframe src="DarkRoast%20Prototype%20new.html" title="DarkRoast interactive prototype" loading="lazy" style={{ position: "absolute", left: "0", top: "0", width: "1440px", height: "900px", border: "0", transformOrigin: "0 0", transform: "scale(.566667)" }}></iframe>
          </div>
        </div>
      </section>
      {" "}
      {/* The problem: pins while the three annotated screens slide past sideways, then the page scrolls on. */}
      <HScroll id="problem" style={{ marginTop: "96px" }} padLeft="369.5px" padRight="40px" gap="28px" bodyPad="22px 0 22px" bodyGap="24px" header={
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px", padding: "0 40px" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            02
          </span>
          <span>
            The problem
          </span>
        </div>
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "40px", lineHeight: "1.04" }}>
            {"Brands couldn’t tell which project "}
            <span style={{ fontStyle: "italic" }}>
              needed them first
            </span>
          </h2>
        </div>
      }>
        {(v.csProblems || []).map((p) => <ShotCard key={p.n} {...p} maxW="900px" capLines={2} />)}
      </HScroll>
      {" "}
      <section id="research" style={{ padding: "100px 40px 40px", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px" }}>
        {" "}
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            03
          </span>
          <span>
            Research
          </span>
        </div>
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {" "}
          <div style={{ display: "flex", alignItems: "flex-end", gap: "28px" }}>
            {" "}
            <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "120px", lineHeight: ".78", letterSpacing: "-.07em" }}>
              150
            </span>
            {" "}
            <h2 style={{ margin: "0 0 8px", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "34px", lineHeight: "1.05", maxWidth: "20ch" }}>
              {"brands answered our survey about "}
              <span style={{ fontStyle: "italic" }}>
                what to fix
              </span>
            </h2>
            {" "}
          </div>
          {" "}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingTop: "10px", borderTop: "1px solid #0B0B0B33" }}>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
              What they said and what it meant
            </span>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
              Hover to flip
            </span>
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
            {" "}
            {(v.csSurvey || []).map((s, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <button type="button" onMouseEnter={s?.onIn} onMouseLeave={s?.onOut} onFocus={s?.onIn} onBlur={s?.onOut} style={{ all: "unset", cursor: "pointer", height: "220px", perspective: "900px" }}>
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
          <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", maxWidth: "46ch" }}>
            {"DarkRoast had to handle "}
            <strong style={{ fontWeight: "600" }}>
              proper project tracking
            </strong>
            {" and "}
            <strong style={{ fontWeight: "600" }}>
              quick everyday chats.
            </strong>
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
            04
          </span>
          <span>
            Mapping the workflow
          </span>
        </div>
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "38px", lineHeight: "1.05" }}>
            {"I mapped every step a brand takes, "}
            <span style={{ fontStyle: "italic" }}>
              from brief to final file
            </span>
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
                        The old dashboard only covered this
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
            The old dashboard only helped with tracking, and even that broke down once brands had many projects.
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
            05
          </span>
          <span>
            The mental model
          </span>
        </div>
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "56px", lineHeight: "1" }}>
            {"A brand is either working on a project or "}
            <span style={{ fontStyle: "italic" }}>
              checking on it
            </span>
          </h2>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {" "}
            {(v.csModes || []).map((m, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <div style={{ minHeight: "260px", padding: "28px", borderRadius: "24px", background: m?.bg, color: m?.fg, boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "18px" }}>
                  {" "}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
                      {show(m?.k)}
                    </span>
                  </div>
                  {" "}
                  <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "52px", lineHeight: ".95" }}>
                    {show(m?.t)}
                  </span>
                  {" "}
                  <span style={{ marginTop: "auto", fontSize: "15px", lineHeight: "1.5", opacity: ".75" }}>
                    {show(m?.d)}
                  </span>
                  {" "}
                </div>
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
              {"Give the work the space, and "}
              <span style={{ fontStyle: "italic" }}>
                keep the details nearby.
              </span>
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section id="iter" style={{ padding: "100px 40px 40px", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px 40px" }}>
        {/* Iterations: every version on one canvas, one lane per screen (components/IterCanvas.jsx) */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            06
          </span>
          <span>
            Iterations
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "40px", lineHeight: "1.05" }}>
              {"I tried four versions of each screen "}
              <span style={{ fontStyle: "italic" }}>
                before choosing one
              </span>
            </h2>
          <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#3C3C38", maxWidth: "62ch" }}>
            {show(v.csIterIntro)}
          </p>
        </div>
        <div style={{ gridColumn: "1 / -1" }}>
          <IterCanvas lanes={v.csIterLanes} tags={v.csIterTags} />
        </div>
      </section>
      {" "}
      {/* Final design: the four changes on the left (pick one, read its before / after), the comparison on the right; sized to fit one screen */}
      <section id="final" style={{ padding: "80px 40px 40px", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            07
          </span>
          <span>
            Final design
          </span>
        </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {(v.csPairs || []).map((p, $index) => (
              <button key={$index} type="button" onClick={p?.onPick} style={{ all: "unset", cursor: "pointer", padding: "12px 16px", borderRadius: "14px", background: p?.bg, color: p?.fg, display: "flex", alignItems: "baseline", gap: "12px", transition: "background .25s, color .25s" }}>
                <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "10px", color: p?.nc }}>{show(p?.n)}</span>
                <span style={{ fontSize: "15px", fontWeight: "600", letterSpacing: "-.01em" }}>{show(p?.t)}</span>
              </button>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ padding: "16px 18px", borderRadius: "16px", background: "#E2E2DE", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69" }}>
                Before
              </span>
              <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                {show(v.csPair?.b)}
              </span>
            </div>
            <div style={{ padding: "16px 18px", borderRadius: "16px", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 24px 40px -28px rgba(0,0,0,.25)", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
                After
              </span>
              <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
                {show(v.csPair?.a)}
              </span>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "40px", lineHeight: "1.02" }}>
            {"Four changes, each one tied to "}
            <span style={{ fontStyle: "italic" }}>
              something brands struggled with
            </span>
          </h2>
          {/* before / after: drag the line up and down (before above it, after below) */}
          <div onPointerMove={v.onCmpMove} onPointerUp={v.onCmpUp} onPointerCancel={v.onCmpUp} style={{ position: "relative", height: "410px", borderRadius: "20px", overflow: "hidden", background: "#EFEFEC", boxShadow: "0 1px 2px rgba(0,0,0,.05), 0 30px 60px -32px rgba(0,0,0,.28)", userSelect: "none" }}>
            <img src={v.csPair?.after} alt={`After: ${v.csPair?.a ?? ""}`} draggable={false} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "contain", pointerEvents: "none" }} />
            <div style={{ position: "absolute", inset: "0", clipPath: `inset(0 0 ${v.csCmpRest ?? "50%"} 0)`, background: "#EFEFEC" }}>
              <img src={v.csPair?.before} alt={`Before: ${v.csPair?.b ?? ""}`} draggable={false} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "contain", pointerEvents: "none" }} />
            </div>
            <span style={{ position: "absolute", left: "16px", top: "16px", padding: "7px 12px", borderRadius: "999px", background: "rgba(11,11,11,.72)", color: "#FFFFFF", fontSize: "12.5px", pointerEvents: "none" }}>
              Before
            </span>
            <span style={{ position: "absolute", left: "16px", bottom: "16px", padding: "7px 12px", borderRadius: "999px", background: "#FCEB3F", color: "#0B0B0B", fontSize: "12.5px", fontWeight: "500", pointerEvents: "none" }}>
              After
            </span>
            <div onPointerDown={v.onCmpDown} role="slider" aria-label="Drag to compare before and after" aria-valuenow={parseInt(v.csCmpPos)} aria-valuemin={0} aria-valuemax={100} style={{ position: "absolute", left: "0", right: "0", top: v.csCmpPos, height: "44px", marginTop: "-22px", cursor: "ns-resize", touchAction: "none", display: "flex", alignItems: "center" }}>
              <span style={{ width: "100%", height: "2px", background: "#0B0B0B" }}></span>
              <span style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", width: "48px", height: "48px", borderRadius: "50%", background: "#0B0B0B", color: "#FCEB3F", display: "grid", placeItems: "center", fontSize: "17px", boxShadow: "0 8px 20px -8px rgba(0,0,0,.5)" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" style={{ display: "block" }}><path d="M8 1.5v13M3.5 5.5 8 1.5l4.5 4M3.5 10.5 8 14.5l4.5-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </div>
          </div>
        </div>
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
              08
            </span>
            <span>
              Outcome
            </span>
          </div>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {" "}
            <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "64px", lineHeight: ".98" }}>
              {"Brands went from managing "}
              <span style={{ fontStyle: "italic" }}>
                one project at a time to five
              </span>
            </h2>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
              {" "}
              <div style={{ padding: "22px", borderRadius: "18px", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "25px", lineHeight: "1.1", letterSpacing: "-.04em" }}>
                  Status from the list
                </span>
                <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3C3C38" }}>
                  Brands could see where each project stood without opening it.
                </span>
              </div>
              {" "}
              <div style={{ padding: "22px", borderRadius: "18px", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "25px", lineHeight: "1.1", letterSpacing: "-.04em" }}>
                  Room for messages
                </span>
                <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3C3C38" }}>
                  Chats and feedback took up the main space on the project page.
                </span>
              </div>
              {" "}
              <div style={{ padding: "22px", borderRadius: "18px", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "25px", lineHeight: "1.1", letterSpacing: "-.04em" }}>
                  Files in one place
                </span>
                <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3C3C38" }}>
                  Images, videos and PDFs showed up together, with previews.
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", maxWidth: "56ch" }}>
              {"DarkRoast’s developer "}
              <strong style={{ fontWeight: "600" }}>
                shipped the redesign
              </strong>
              {" after we tested it with real brands."}
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
            09
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
                {"Thinking beyond screens, about "}
                <strong style={{ fontWeight: "600" }}>
                  workflow, information architecture and product behavior.
                </strong>
              </span>
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69" }}>
                The biggest lesson
              </span>
              <span style={{ fontSize: "20px", lineHeight: "1.4", letterSpacing: "-.02em" }}>
                {"DarkRoast’s brands were mostly middle-aged and used to the old dashboard. The right answer was "}
                <strong style={{ fontWeight: "600" }}>
                  a clear step up from what they knew,
                </strong>
                {" not a new tool they’d have to learn again."}
              </span>
            </div>
            {" "}
          </div>
          {" "}
          <blockquote style={{ margin: "0", padding: "36px 0 0", borderTop: "1px solid #0B0B0B", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "54px", lineHeight: "1.02" }}>
            {"“A brand should know what needs them "}
            <span style={{ fontStyle: "italic" }}>
              the moment they log in.
            </span>
            ”
          </blockquote>
          {/* what's next */}
          <div style={{ display: "flex", flexDirection: "row", alignItems: "baseline", gap: "24px", padding: "18px 22px", borderRadius: "16px", background: "#FFFFFF" }}>
            <span style={{ flex: "none", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
              What’s next
            </span>
            <span style={{ fontSize: "16px", lineHeight: "1.5", color: "#3C3C38" }}>
              DarkRoast is taking these changes to the designer side and to mobile in phase 2.
            </span>
          </div>
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
              ← Delicut
            </a>
            {" "}
            <a className="dh8" href="project-attune.html" style={{ height: "56px", padding: "0 24px", borderRadius: "999px", background: "#FFFFFF14", color: "#FFFFFF", textDecoration: "none", display: "flex", alignItems: "center", fontSize: "15px", fontWeight: "500" }}>
              Next: Attune →
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
            Case study 02 / 03 — DarkRoast
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
