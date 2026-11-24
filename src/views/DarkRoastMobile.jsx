/* eslint-disable */
// DarkRoast page — mobile layout. Generated from the Claude Design board 12a, then hand-tuned.
import React from 'react';
import ImageSlot from '../components/ImageSlot.jsx';
import HScroll from '../components/HScroll.jsx';
import ShotCard from '../components/ShotCard.jsx';
import { css, show } from '../lib/template.js';

export default function DarkRoastMobile({ v }) {
  return (
    <div style={{ background: "#EFEFEC", color: "#0B0B0B", fontFamily: "'Geist',sans-serif" }}>
      {" "}
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
              Case study 02 / 03 · DarkRoast
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
          <svg width="360" height="99" viewBox="0 0 760 230" style={{ position: "absolute", left: "-14px", top: "101px", pointerEvents: "none", overflow: "visible" }}>
            <ellipse cx="380" cy="115" rx="378" ry="100" fill="none" stroke="#0B0B0B" strokeWidth="1" transform="rotate(-5 380 115)"></ellipse>
          </svg>
          {" "}
          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "20px" }}>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
              DarkRoast · Creative operations · Dashboard redesign
            </span>
            {" "}
            <h1 style={{ margin: "0", maxWidth: "348px" /* keep the phone line breaks so the ellipse stays on its words */, fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "42px", lineHeight: ".98" }}>
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
        <div style={{ position: "relative", height: "280px", margin: "0 -20px", background: "#E9DA2E", overflow: "hidden" }}>
          {" "}
          <img src="Mockups/DarkRoast/Banner-mobile.webp" alt="DarkRoast projects workspace on a laptop" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          {" "}
          <span style={{ position: "absolute", left: "40px", bottom: "20px", maxWidth: "calc(100% - 60px)", boxSizing: "border-box", padding: "8px 13px", borderRadius: "999px", background: "rgba(255,255,255,.82)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", fontSize: "12.5px", fontWeight: "500" }}>
            Fig. 01 — The new Projects page, where a brand can see every project’s status in one list
          </span>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      <nav data-sticky style={{ position: "sticky", top: "70px", zIndex: "5", background: "#EFEFEC", borderBottom: "1px solid #0B0B0B1F", padding: "0 20px" }}>
        {" "}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", height: "64px", overflowX: "auto", scrollbarWidth: "none" }}>
          {" "}
          {(v.csChapters || []).map((c, $index) => (
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
        {" "}
      </nav>
      {" "}
      <section id="tldr" style={{ padding: "28px 0 22px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }}>
        {" "}
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", margin: "0 20px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            00
          </span>
          <span>
            TL;DR · In one minute
          </span>
        </div>
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px", minWidth: "0" }}>
          {" "}
          <p style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "23px", lineHeight: "1.15", letterSpacing: "-.035em", padding: "0 20px" }}>
            {"DarkRoast is a platform where design teams and the brands that hire them manage projects together. Brands kept adding more projects, but the dashboard was still built for one project at a time, so they had to "}
            <span style={{ fontStyle: "italic" }}>
              check each one separately.
            </span>
          </p>
          {" "}
          {/* The three cards scroll sideways (one at a time, the next peeking in), so the whole TL;DR fits on one screen. */}
          <div style={{ display: "flex", gap: "10px", overflowX: "auto", scrollSnapType: "x mandatory", scrollPadding: "0 20px", padding: "0 20px 26px", scrollbarWidth: "none" }}>
            {" "}
            <div style={{ flex: "0 0 82%", boxSizing: "border-box", scrollSnapAlign: "start", padding: "20px 20px 22px", borderRadius: "20px", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69" }}>
                What I found
              </span>
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "24px", lineHeight: "1.05", letterSpacing: "-.04em" }}>
                {"Brands didn’t need "}
                <span style={{ fontStyle: "italic" }}>
                  more features
                </span>
              </span>
              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3C3C38" }}>
                The survey and usage tracking both showed brands opening every project just to see its status.
              </span>
            </div>
            {" "}
            <div style={{ flex: "0 0 82%", boxSizing: "border-box", scrollSnapAlign: "start", padding: "20px 20px 22px", borderRadius: "20px", background: "#0B0B0B", color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FCEB3F" }}>
                What I did
              </span>
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "24px", lineHeight: "1.05", letterSpacing: "-.04em" }}>
                {"Fixed the list, "}
                <span style={{ fontStyle: "italic" }}>
                  not the whole product
                </span>
              </span>
              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#FFFFFFb3" }}>
                I kept the layout brands already knew and changed what shows on the Projects page and inside a project.
              </span>
            </div>
            {" "}
            <div style={{ flex: "0 0 82%", boxSizing: "border-box", scrollSnapAlign: "start", padding: "20px 20px 22px", borderRadius: "20px", background: "#FCEB3F", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
                The result
              </span>
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "24px", lineHeight: "1.05", letterSpacing: "-.04em" }}>
                {"Status visible "}
                <span style={{ fontStyle: "italic" }}>
                  from the list
                </span>
              </span>
              <span style={{ fontSize: "14px", lineHeight: "1.5" }}>
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
      <section id="proto" style={{ margin: "0 16px", padding: "22px 12px 12px", borderRadius: "24px", background: "#0B0B0B", color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "16px" }}>
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "0 6px" }}>
          {" "}
          <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FFFFFF", display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span style={{ color: "#FCEB3F" }}>01</span>
              <span>
            Try it</span>
          </span>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "34px", lineHeight: "1" }}>
            {"Click through the "}
            <span style={{ fontStyle: "italic" }}>
              new Projects page
            </span>
          </h2>
          {" "}
          <span style={{ fontSize: "13px", lineHeight: "1.45", color: "#FFFFFFb3" }}>
            I rebuilt my final Figma screens as a working prototype for this portfolio, using Claude and the Figma MCP server.
          </span>
          {" "}
        </div>
        {" "}
        <div style={{ borderRadius: "10px", overflow: "hidden", background: "#1A1A18", boxShadow: "0 20px 40px -20px rgba(0,0,0,.6)" }}>
          {" "}
          <div style={{ height: "24px", display: "flex", alignItems: "center", gap: "5px", padding: "0 10px", background: "#232321" }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4A4A46" }}></span>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4A4A46" }}></span>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4A4A46" }}></span>
            <span style={{ flex: "1", marginLeft: "8px", height: "14px", borderRadius: "4px", background: "#FFFFFF12", fontSize: "8.5px", lineHeight: "14px", paddingLeft: "8px", color: "#FFFFFF80" }}>
              darkroast.app/projects
            </span>
          </div>
          {" "}
          <div ref={v.protoBoxRef} style={{ position: "relative", width: "100%", height: "0", paddingTop: "62.5%", overflow: "hidden", background: "#FFFFFF", touchAction: "pan-y", isolation: "isolate" }}>
            {/* On phones the 1440px prototype is a fixed preview: touches never reach it (so it can't be dragged or scrolled), and a tap opens it full screen. */}
            <iframe src="DarkRoast%20Prototype%20new.html" title="DarkRoast prototype preview" loading="lazy" scrolling="no" tabIndex={-1} aria-hidden="true" style={{ position: "absolute", left: "0", top: "0", width: "1440px", height: "900px", border: "0", transformOrigin: "0 0", transform: "scale(.231)", pointerEvents: "none" }}></iframe>
            <a href="DarkRoast%20Prototype%20new.html" target="_blank" aria-label="Open the DarkRoast prototype full screen" style={{ position: "absolute", inset: "0", zIndex: "1", WebkitTapHighlightColor: "transparent" }}></a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "12px", padding: "4px 4px 4px" }}>
          {" "}
          <span style={{ display: "flex", alignItems: "center", gap: "7px", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px", color: "#FFFFFF99" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2DB34A" }}></span>
            Interactive · best viewed on desktop
          </span>
          {" "}
          <a href="DarkRoast%20Prototype%20new.html" target="_blank" style={{ height: "44px", padding: "0 6px 0 16px", borderRadius: "999px", background: "#FCEB3F", color: "#0B0B0B", textDecoration: "none", display: "flex", alignItems: "center", gap: "12px", fontSize: "13px", fontWeight: "500" }}>
            {"Open full screen "}
            <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#0B0B0B", color: "#FCEB3F", display: "grid", placeItems: "center" }}>
              <svg width="11" height="11" viewBox="0 0 100 100" style={{ display: "block" }}>
                <path d="M14 14 L84 84 M84 34 L84 84 L34 84" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="square"></path>
              </svg>
            </span>
          </a>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {/* The problem: pins while the three annotated screens slide past sideways, then the page scrolls on. */}
      <HScroll id="problem" style={{ marginTop: "46px" }} padLeft="20px" padRight="20px" gap="14px" bodyPad="20px 0 24px" bodyGap="18px" header={
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "0 20px" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            02
          </span>
          <span>
            The problem
          </span>
        </div>
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "30px", lineHeight: "1.04" }}>
            {"Brands couldn’t tell which project "}
            <span style={{ fontStyle: "italic" }}>
              needed them first
            </span>
          </h2>
        </div>
      }>
        {(v.csProblems || []).map((p) => <ShotCard key={p.n} {...p} maxW="300px" capSize="14px" capLines={4} />)}
      </HScroll>
      {" "}
      <section id="research" style={{ padding: "55px 16px 20px", display: "flex", flexDirection: "column", gap: "18px" }}>
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
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {" "}
          <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "88px", lineHeight: ".82", letterSpacing: "-.07em" }}>
            ~150
          </span>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "28px", lineHeight: "1.08", letterSpacing: "-.04em" }}>
            {"clients told us what they "}
            <span style={{ fontStyle: "italic" }}>
              wanted improved.
            </span>
          </h2>
          {" "}
        </div>
        {" "}
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "8px", padding: "10px 0 0", borderTop: "1px solid #0B0B0B33", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px" }}>
          <span style={{ color: "#6E6E69" }}>
            What they said
          </span>
          <span style={{ color: "#E5322B" }}>
            What it really meant
          </span>
        </div>
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {" "}
          {(v.csSurvey || []).map((s, $index) => (
            <React.Fragment key={$index}>
              {" "}
              <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 16px 30px -22px rgba(0,0,0,.25)" }}>
                {" "}
                <div style={{ position: "relative", padding: "14px 18px 14px 14px", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {" "}
                  <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9px", color: "#6E6E69" }}>
                    {show(s?.n)}
                  </span>
                  {" "}
                  <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "17px", lineHeight: "1.15", letterSpacing: "-.025em", color: "#0B0B0B" }}>
                    {"“"}{show(s?.q)}{"”"}
                  </span>
                  {" "}
                  <span style={{ position: "absolute", right: "-11px", top: "50%", marginTop: "-11px", zIndex: "1", width: "22px", height: "22px", borderRadius: "50%", background: "#E5322B", color: "#FFFFFF", display: "grid", placeItems: "center", fontSize: "11px" }}>
                    →
                  </span>
                  {" "}
                </div>
                {" "}
                <div style={{ padding: "14px 14px 14px 20px", background: "#0B0B0B", color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "8px", justifyContent: "center" }}>
                  {" "}
                  <span style={{ fontSize: "13.5px", lineHeight: "1.35", fontWeight: "500", letterSpacing: "-.01em" }}>
                    {show(s?.a)}
                  </span>
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
        <div style={{ padding: "18px", borderRadius: "16px", background: "#FCEB3F", display: "flex", flexDirection: "column", gap: "8px" }}>
          {" "}
          <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px" }}>
            So the product needed
          </span>
          {" "}
          <p style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "22px", lineHeight: "1.15", letterSpacing: "-.035em" }}>
            {"Structured project management "}
            <span style={{ fontStyle: "italic" }}>
              and
            </span>
            {" casual collaboration — in one place."}
          </p>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section id="workflow" style={{ padding: "55px 20px 20px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }}>
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
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "35px", lineHeight: "1.05" }}>
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
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#E5322B", animation: "pulse 1.6s ease-in-out infinite" }}></span>
            Tap a step — or use ← → — to see each job
          </div>
          {" "}
          <div style={{ position: "relative", borderRadius: "24px", background: "#FCEB3F", padding: "24px 12px 14px", overflow: "hidden" }}>
            {" "}
            <svg width="100%" height="110" viewBox="0 0 1000 200" preserveAspectRatio="none" style={{ position: "absolute", left: "0", right: "0", top: "30px", pointerEvents: "none" }}>
              <ellipse cx="500" cy="100" rx="470" ry="78" fill="none" stroke="#0B0B0B" strokeWidth="1" vectorEffect="non-scaling-stroke"></ellipse>
            </svg>
            {" "}
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(6, minmax(0,1fr))", gap: "4px" }}>
              {" "}
              {(v.csSteps || []).map((s, $index) => (
                <React.Fragment key={$index}>
                  {" "}
                  <button type="button" onClick={s?.onPick} style={{ all: "unset", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", paddingTop: s?.pad, transition: "padding .5s cubic-bezier(.3,.9,.3,1)" }}>
                    {" "}
                    <span style={{ width: s?.size, height: s?.size, borderRadius: "50%", background: s?.bg, color: s?.fg, display: "grid", placeItems: "center", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", fontSize: "18px", letterSpacing: "-.03em", boxShadow: s?.sh, transition: "all .4s cubic-bezier(.3,1.3,.4,1)" }}>
                      {show(s?.n)}
                    </span>
                    {" "}
                    <span style={{ fontSize: "10.5px", lineHeight: "1.2", fontWeight: s?.fw, letterSpacing: "-.01em", textAlign: "center" }}>
                      {show(s?.t)}
                    </span>
                    {" "}
                  </button>
                  {" "}
                </React.Fragment>
              ))}
              {" "}
            </div>
            {" "}
            <div style={{ position: "relative", marginTop: "22px", padding: "18px", borderRadius: "16px", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "12px" }}>
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                {" "}
                <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", fontSize: "44px", lineHeight: ".8", letterSpacing: "-.06em" }}>
                  {show(v.csStep?.n)}
                </span>
                {" "}
                <span style={{ flex: "1", fontSize: "18px", fontWeight: "600", letterSpacing: "-.02em", lineHeight: "1.15" }}>
                  {show(v.csStep?.t)}
                </span>
                {" "}
              </div>
              {" "}
              <span style={{ fontSize: "14.5px", lineHeight: "1.45", color: "#3C3C38" }}>
                {show(v.csStep?.d)}
              </span>
              {" "}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                {" "}
                {v.csStepIsNow ? (
                  <>
                  <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "9px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", padding: "5px 9px", borderRadius: "999px", background: "#E5322B", color: "#FFFFFF", whiteSpace: "nowrap" }}>
                    Old dashboard lived here
                  </span>
                  </>
                ) : null}
                {" "}
                <div style={{ display: "flex", gap: "8px", marginLeft: "auto" }}>
                  <button type="button" onClick={v.csStepPrev} aria-label="Previous job" style={{ all: "unset", cursor: "pointer", width: "44px", height: "44px", borderRadius: "50%", background: "#EFEFEC", display: "grid", placeItems: "center" }}>
                    ←
                  </button>
                  <button type="button" onClick={v.csStepNext} aria-label="Next job" style={{ all: "unset", cursor: "pointer", width: "44px", height: "44px", borderRadius: "50%", background: "#0B0B0B", color: "#FFFFFF", display: "grid", placeItems: "center" }}>
                    →
                  </button>
                </div>
                {" "}
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
      <section id="model" style={{ padding: "55px 20px 20px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }}>
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
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "38px", lineHeight: "1" }}>
            {"A project has "}
            <span style={{ fontStyle: "italic" }}>
              two modes.
            </span>
            {" The old UI treated both as equally important — all the time."}
          </h2>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "14px 16px", borderRadius: "14px", background: "#FFFFFF" }}>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
              How to read this
            </span>
            <span style={{ fontSize: "14px", lineHeight: "1.45", color: "#3C3C38" }}>
              {"Every project screen holds two kinds of content. "}
              <strong style={{ fontWeight: "600", color: "#0B0B0B" }}>
                Active
              </strong>
              {" is what you work in — it gets the main space. "}
              <strong style={{ fontWeight: "600", color: "#0B0B0B" }}>
                Reference
              </strong>
              {" is what you check — kept one tap away."}
            </span>
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "12px" }}>
            {" "}
            {(v.csModes || []).map((m, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <button type="button" style={{ all: "unset", cursor: "default", minHeight: "210px", padding: "28px", borderRadius: "24px", background: m?.bg, color: m?.fg, boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "18px", transition: "all .5s cubic-bezier(.3,.9,.3,1)" }}>
                  {" "}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                    <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
                      {show(m?.k)}
                    </span>
                    <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", padding: "5px 9px", borderRadius: "999px", background: m?.tagBg, color: m?.tagFg }}>
                      {show(m?.tag)}
                    </span>
                  </div>
                  {" "}
                  <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "37px", lineHeight: ".95" }}>
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
          <div style={{ padding: "22px 20px", borderRadius: "24px", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "12px" }}>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
              Working principle
            </span>
            {" "}
            <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "29px", lineHeight: "1.1", letterSpacing: "-.04em" }}>
              {"Give active work priority. Keep reference information close — "}
              <span style={{ fontStyle: "italic" }}>
                but not permanently in the way.
              </span>
            </span>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "12px" }}>
            {" "}
            {(v.csPriorities || []).map((p, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <div style={{ padding: "24px", borderTop: "1px solid #0B0B0B", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "33px", lineHeight: ".9", letterSpacing: "-.05em" }}>
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
      <section id="iter" style={{ padding: "55px 16px 20px", display: "flex", flexDirection: "column", gap: "18px" }}>
        {" "}
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            06
          </span>
          <span>
            Iterations
          </span>
        </div>
        {" "}
        <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "32px", lineHeight: "1.05" }}>
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
        <p style={{ margin: "0", fontSize: "14.5px", lineHeight: "1.5", color: "#3C3C38" }}>
          I explored several versions of two key screens. Pick a screen, then flip through its versions.
        </p>
        {" "}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ width: "22px", height: "22px", borderRadius: "50%", background: "#0B0B0B", color: "#FCEB3F", display: "grid", placeItems: "center", fontSize: "11px", fontWeight: "600" }}>
            1
          </span>
          <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
            Pick a screen
          </span>
        </div>
        {" "}
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", padding: "4px", borderRadius: "999px", background: "#E2E2DE" }}>
          {" "}
          <span style={{ position: "absolute", top: "4px", bottom: "4px", left: v.csIterLeft, width: "calc(50% - 4px)", borderRadius: "999px", background: "#0B0B0B", transition: "left .45s cubic-bezier(.3,.9,.3,1)" }}></span>
          {" "}
          {(v.csIterSets || []).map((s, $index) => (
            <React.Fragment key={$index}>
              <button type="button" onClick={s?.onPick} style={{ all: "unset", cursor: "pointer", position: "relative", height: "44px", display: "grid", placeItems: "center", fontSize: "14px", fontWeight: "600", color: s?.fg, transition: "color .3s" }}>
                {show(s?.t)}
              </button>
            </React.Fragment>
          ))}
          {" "}
        </div>
        {" "}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ width: "22px", height: "22px", borderRadius: "50%", background: "#0B0B0B", color: "#FCEB3F", display: "grid", placeItems: "center", fontSize: "11px", fontWeight: "600" }}>
            2
          </span>
          <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
            Flip through the versions
          </span>
        </div>
        {" "}
        <div style={{ display: "flex", flexDirection: "column", borderRadius: "18px", overflow: "hidden", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 24px 40px -28px rgba(0,0,0,.3)" }}>
          {" "}
          <div style={{ position: "relative", aspectRatio: "16 / 10", background: "#FFFFFF", borderBottom: "1px solid #0B0B0B14" }}>
            {" "}
            {(v.csIters || []).map((x, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <div role="img" aria-label={x?.t} style={{ position: "absolute", inset: "8px", backgroundColor: "#FFFFFF", backgroundImage: `url(${x?.src ?? ""})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat", opacity: x?.op, transition: "opacity .45s" }}></div>
                {" "}
              </React.Fragment>
            ))}
            {" "}
            <span style={{ position: "absolute", right: "10px", top: "10px", padding: "5px 9px", borderRadius: "999px", background: "#0B0B0B", color: "#FFFFFF", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px" }}>
              {show(v.csIterCur?.n)}{" of "}{show(v.csIterTotal)}
            </span>
            {" "}
          </div>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "20px 18px 18px" }}>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", minHeight: "62px" }}>
              {" "}
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
                {"Version "}{show(v.csIterCur?.n)}
              </span>
              {" "}
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", fontSize: "21px", lineHeight: "1.2", letterSpacing: "-.03em", color: "#0B0B0B" }}>
                {show(v.csIterCur?.t)}
              </span>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", paddingTop: "16px", borderTop: "1px solid #0B0B0B14" }}>
              {" "}
              <div style={{ display: "flex", gap: "6px" }}>
                {" "}
                {(v.csIters || []).map((x, $index) => (
                  <React.Fragment key={$index}>
                    <button type="button" aria-label={x?.n} onClick={x?.onPick} style={{ all: "unset", cursor: "pointer", width: "36px", height: "36px", boxSizing: "border-box", borderRadius: "50%", background: x?.chipBg, color: x?.chipFg, display: "grid", placeItems: "center", fontSize: "11.5px", fontWeight: "600", transition: "all .25s" }}>
                      {show(x?.n)}
                    </button>
                  </React.Fragment>
                ))}
                {" "}
              </div>
              {" "}
              <div style={{ display: "flex", gap: "8px" }}>
                {" "}
                <button type="button" aria-label="Previous version" onClick={v.csIterPrev} style={{ all: "unset", cursor: "pointer", width: "44px", height: "44px", borderRadius: "50%", background: "#EFEFEC", display: "grid", placeItems: "center", fontSize: "16px" }}>
                  ←
                </button>
                {" "}
                <button type="button" aria-label="Next version" onClick={v.csIterNext} style={{ all: "unset", cursor: "pointer", width: "44px", height: "44px", borderRadius: "50%", background: "#0B0B0B", color: "#FFFFFF", display: "grid", placeItems: "center", fontSize: "16px" }}>
                  →
                </button>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div style={{ padding: "16px", borderRadius: "16px", background: "#FCEB3F", display: "flex", flexDirection: "column", gap: "8px" }}>
          {" "}
          <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px" }}>
            {"What I was testing · "}{show(v.csIterSet?.k)}
          </span>
          {" "}
          <span style={{ fontSize: "14.5px", lineHeight: "1.5" }}>
            {show(v.csIterSet?.d)}
          </span>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <section id="final" style={{ padding: "55px 20px 20px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }}>
        {" "}
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            07
          </span>
          <span>
            Final design
          </span>
        </div>
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "38px", lineHeight: "1" }}>
            {"Four high‑impact changes, "}
            <span style={{ fontStyle: "italic" }}>
              each traced back to the research.
            </span>
          </h2>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "8px" }}>
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
          <div onPointerMove={v.onCmpMove} onPointerUp={v.onCmpUp} onPointerLeave={v.onCmpUp} style={{ position: "relative", height: "280px", borderRadius: "20px", overflow: "hidden", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)", userSelect: "none", touchAction: "none" }}>
            {" "}
            <div role="img" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", backgroundImage: `url(${v.csPair?.after ?? ""})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundColor: "#FFFFFF", pointerEvents: "none" }}></div>
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
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "12px" }}>
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
      <section id="outcome" style={{ margin: "55px 20px 0", padding: "20px 20px", borderRadius: "28px", background: "#FCEB3F", position: "relative", overflow: "hidden" }}>
        {" "}
        <svg width="405" height="135" viewBox="0 0 900 300" style={{ position: "absolute", right: "-120px", top: "40px", pointerEvents: "none" }}>
          <ellipse cx="450" cy="150" rx="440" ry="120" fill="none" stroke="#0B0B0B" strokeWidth="1" transform="rotate(-6 450 150)"></ellipse>
        </svg>
        {" "}
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }}>
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
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {" "}
            <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.05em", fontSize: "32px", lineHeight: "1.02", overflowWrap: "break-word" }}>
              {"From a dense project-management interface to a "}
              <span style={{ fontStyle: "italic" }}>
                clearer creative workspace.
              </span>
            </h2>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "12px" }}>
              {" "}
              <div style={{ padding: "22px", borderRadius: "18px", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "25px", letterSpacing: "-.04em" }}>
                  Status, at a glance
                </span>
                <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3C3C38" }}>
                  Progress is easier to scan across projects.
                </span>
              </div>
              {" "}
              <div style={{ padding: "22px", borderRadius: "18px", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "25px", letterSpacing: "-.04em" }}>
                  Room to collaborate
                </span>
                <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3C3C38" }}>
                  Messages and feedback get the main stage.
                </span>
              </div>
              {" "}
              <div style={{ padding: "22px", borderRadius: "18px", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "25px", letterSpacing: "-.04em" }}>
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
      <section id="reflect" style={{ padding: "61px 20px 55px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }}>
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
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }}>
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
          <blockquote style={{ margin: "0", padding: "20px 0 0", borderTop: "1px solid #0B0B0B", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "38px", lineHeight: "1.02" }}>
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
      <footer style={{ background: "#0B0B0B", color: "#FFFFFF", padding: "20px 20px 28px", display: "flex", flexDirection: "column", gap: "18px" }}>
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
            <a href="mailto:aayushipatel2002@gmail.com?subject=DarkRoast%20case%20study" style={{ height: "56px", padding: "0 10px 0 24px", borderRadius: "999px", background: "#FCEB3F", color: "#0B0B0B", textDecoration: "none", display: "flex", alignItems: "center", gap: "18px", fontSize: "15px", fontWeight: "500" }}>
              {"Get in touch "}
              <span style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#0B0B0B", color: "#FCEB3F", display: "grid", placeItems: "center" }}>
                <svg width="14" height="14" viewBox="0 0 100 100" style={{ display: "block" }}>
                  <path d="M14 14 L84 84 M84 34 L84 84 L34 84" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="square"></path>
                </svg>
              </span>
            </a>
            {" "}
            <a className="mh4" href="project-delicut.html" style={{ height: "56px", padding: "0 24px", borderRadius: "999px", background: "#FFFFFF14", color: "#FFFFFF", textDecoration: "none", display: "flex", alignItems: "center", fontSize: "15px", fontWeight: "500" }}>
              ← Delicut
            </a>
            {" "}
            <a className="mh4" href="project-attune.html" style={{ height: "56px", padding: "0 24px", borderRadius: "999px", background: "#FFFFFF14", color: "#FFFFFF", textDecoration: "none", display: "flex", alignItems: "center", fontSize: "15px", fontWeight: "500" }}>
              Next: Attune →
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
