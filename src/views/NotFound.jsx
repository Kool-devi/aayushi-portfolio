/* eslint-disable */
// 404 page. Generated from the Claude Design 404 page, then hand-tuned.
import React from 'react';
import { css, show } from '../lib/template.js';

export default function NotFound({ v }) {
  return (
    <>
    <section onPointerMove={v.onMove} onPointerLeave={v.onLeave} className="nf-screen" style={{ position: "relative", height: "100vh", minHeight: "680px", display: "flex", flexDirection: "column", overflow: "hidden", backgroundColor: "#FCEB3F", backgroundImage: "linear-gradient(90deg, #0B0B0B14 1px, transparent 1px)", backgroundSize: "calc((100% - 80px) / 10) 100%", backgroundPosition: "40px 0", cursor: v.cur }}>
      {" "}
      <header style={{ position: "relative", zIndex: "3", display: "flex", flexDirection: "column", gap: "10px", padding: "14px 40px 0" }}>
        {" "}
        <div style={{ height: "1px", background: "#0B0B0B" }}></div>
        {" "}
        <div className="nf-head" style={{ display: "grid", gridTemplateColumns: "repeat(10, minmax(0,1fr))", gap: "0 16px", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          {" "}
          <a href="/" style={{ gridColumn: "span 3", color: "#0B0B0B", textDecoration: "none" }}>
            Aayushi Patel
            <br />
            Product Designer
          </a>
          {" "}
          <span style={{ gridColumn: "span 3" }}>
            <span style={{ color: "#E5322B" }}>
              Error 404
            </span>
            <br />
            This page took a wrong turn
          </span>
          {" "}
          <a href="/index.html#work" style={{ color: "#0B0B0B", textDecoration: "none" }}>
            Projects
          </a>
          {" "}
          <a href="/index.html#about" style={{ color: "#0B0B0B", textDecoration: "none" }}>
            About
          </a>
          {" "}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ color: "#0B0B0B", textDecoration: "none" }}>
            Résumé {"↗\uFE0E"}
          </a>
          {" "}
          <span className="nf-pokes" style={{ textAlign: "right" }}>
            {"Pokes · "}{show(v.pokes)}
          </span>
          {" "}
        </div>
        {" "}
      </header>
      {" "}
      <main className="nf-main" style={{ position: "relative", flex: "1", minHeight: "0", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto minmax(0,1fr)", alignItems: "center", gap: "0 2vw", padding: "0 40px", perspective: "1200px" }}>
        <h1 className="sr-only">Page not found</h1>
        {" "}
        <button type="button" onClick={v.poke4a} aria-label="Poke the four" className="nf-four nf-four-a" style={{ all: "unset", cursor: "pointer", justifySelf: "end", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", fontSize: "clamp(220px, 33vw, 600px)", lineHeight: ".8", letterSpacing: "-.07em", transform: `translate(${v.d1x ?? ""}, ${v.d1y ?? ""}) rotateY(${v.d1ry ?? ""}) rotateX(${v.d1rx ?? ""}) rotate(${v.spin1 ?? ""})`, transition: `transform ${v.dT ?? ""} cubic-bezier(.3,1.3,.4,1)` }}>
          4
        </button>
        {" "}
        <div className="nf-ring" style={{ position: "relative", width: "clamp(300px, 30vw, 470px)", aspectRatio: "1", transform: `translate(${v.d2x ?? ""}, ${v.d2y ?? ""})`, transition: "transform .6s cubic-bezier(.3,1.2,.4,1)" }}>
          {" "}
          <div style={{ position: "absolute", inset: "0", animation: "spin 28s linear infinite" }}>
            {" "}
            <svg viewBox="0 0 200 200" width="100%" height="100%" style={{ display: "block", overflow: "visible" }}>
              {" "}
              <defs>
                <path id="r404" d="M100,100 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0"></path>
              </defs>
              {" "}
              <circle cx="100" cy="100" r="99.5" fill="#0B0B0B"></circle>
              {" "}
              <circle cx="100" cy="100" r="76" fill="#FCEB3F"></circle>
              {" "}
              <text style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: "3.2px" }} fill="#FCEB3F">
                <textPath href="#r404">
                  {"PAGE NOT FOUND · STILL THINKING · WRONG TURN · GOOD INSTINCTS · "}
                </textPath>
              </text>
              {" "}
              <circle cx="100" cy="1" r="4" fill="#E5322B"></circle>
              {" "}
            </svg>
            {" "}
          </div>
          {" "}
          <div style={{ position: "absolute", inset: "16%", borderRadius: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", padding: "6%", boxSizing: "border-box", textAlign: "center" }}>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: ".04em", textTransform: "uppercase", color: "#E5322B", display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#E5322B", animation: "pulse 1.4s ease-in-out infinite" }}></span>
              Where were you heading?
            </span>
            {" "}
            <div style={{ width: "100%", display: "flex", alignItems: "center", gap: "8px", height: "42px", padding: "0 14px", boxSizing: "border-box", borderRadius: "999px", background: "#FFFFFF", boxShadow: "0 8px 20px -12px rgba(0,0,0,.35)" }}>
              {" "}
              <svg width="14" height="14" viewBox="0 0 24 24" style={{ flex: "none" }}>
                <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="#0B0B0B" strokeWidth="2"></circle>
                <path d="M15.5 15.5 L21 21" stroke="#0B0B0B" strokeWidth="2" strokeLinecap="round"></path>
              </svg>
              {" "}
              <input value={(v.q) ?? ""} onChange={v.onQ} onKeyDown={v.onKey} placeholder="Type a page…" style={{ all: "unset", flex: "1", minWidth: "0", fontSize: "14px", textAlign: "left", color: "#0B0B0B" }} />
              {" "}
            </div>
            {" "}
            <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "4px" }}>
              {" "}
              {(v.results || []).map((r, $index) => (
                <React.Fragment key={$index}>
                  {" "}
                  <a className="nh0" href={r?.href} target={r?.target} rel={r?.target === "_blank" ? "noopener noreferrer" : undefined} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", height: "34px", padding: "0 12px", borderRadius: "999px", background: r?.bg, color: r?.fg, textDecoration: "none", fontSize: "13px", fontWeight: "500", transition: "background .2s" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0" }}>
                      <span style={{ fontSize: "10px", color: "#E5322B" }}>
                        {show(r?.n)}
                      </span>
                      <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {show(r?.t)}
                      </span>
                    </span>
                    <span>
                      {"↗\uFE0E"}
                    </span>
                  </a>
                  {" "}
                </React.Fragment>
              ))}
              {" "}
              {v.none ? (
                <>
                <span style={{ fontSize: "12.5px", lineHeight: "1.35", color: "#3C3C38" }}>
                  Nothing here either — try “work” or “email”.
                </span>
                </>
              ) : null}
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <button type="button" onClick={v.poke4b} aria-label="Poke the other four" className="nf-four nf-four-b" style={{ all: "unset", cursor: "pointer", justifySelf: "start", fontFamily: "'Funnel Sans',sans-serif", fontStyle: "italic", fontWeight: "400", fontSize: "clamp(220px, 33vw, 600px)", lineHeight: ".8", letterSpacing: "-.07em", transform: `translate(${v.d3x ?? ""}, ${v.d3y ?? ""}) rotateY(${v.d3ry ?? ""}) rotateX(${v.d3rx ?? ""}) rotate(${v.spin2 ?? ""})`, transition: `transform ${v.dT ?? ""} cubic-bezier(.3,1.3,.4,1)` }}>
          4
        </button>
        {" "}
        <svg viewBox="0 0 1000 300" preserveAspectRatio="none" style={{ position: "absolute", left: "4%", right: "4%", top: "50%", width: "92%", height: "46%", transform: "translateY(-50%)", pointerEvents: "none", overflow: "visible" }}>
          <ellipse cx="500" cy="150" rx="498" ry="140" fill="none" stroke="#0B0B0B" strokeWidth="1" vectorEffect="non-scaling-stroke" transform="rotate(-4 500 150)"></ellipse>
        </svg>
        {" "}
        <span className="nf-sticker" style={{ "--r": "-6deg", position: "absolute", left: "5%", top: "12%", padding: "8px 12px", background: "#FFFFFF", fontFamily: "'Geist Mono',monospace", fontSize: "11.5px", boxShadow: "0 10px 24px -14px rgba(0,0,0,.4)", animation: "bob 4s ease-in-out infinite" }}>
          H1 · 404 · way too big ✓
        </span>
        {" "}
        <span className="nf-sticker" style={{ "--r": "5deg", position: "absolute", right: "6%", top: "10%", padding: "8px 12px", background: "#0B0B0B", color: "#FCEB3F", fontFamily: "'Geist Mono',monospace", fontSize: "11.5px", boxShadow: "0 10px 24px -14px rgba(0,0,0,.4)", animation: "bob 5s ease-in-out .6s infinite" }}>
          // TODO: design this page
        </span>
        {" "}
        <span className="nf-sticker" style={{ "--r": "4deg", position: "absolute", left: "9%", bottom: "10%", padding: "8px 12px", background: "#E5322B", color: "#FFFFFF", fontFamily: "'Geist Mono',monospace", fontSize: "11.5px", boxShadow: "0 10px 24px -14px rgba(0,0,0,.4)", animation: "bob 4.6s ease-in-out .3s infinite" }}>
          tap a 4 → it has feelings
        </span>
        {" "}
        <span className="nf-sticker" style={{ "--r": "-3deg", position: "absolute", right: "8%", bottom: "12%", padding: "8px 12px", background: "#FFFFFF", fontFamily: "'Geist Mono',monospace", fontSize: "11.5px", boxShadow: "0 10px 24px -14px rgba(0,0,0,.4)", animation: "bob 5.4s ease-in-out .9s infinite" }}>
          {show(v.mood)}
        </span>
        {" "}
      </main>
      {" "}
      <div className="nf-bottom" style={{ position: "relative", zIndex: "3", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", alignItems: "center", gap: "20px", padding: "0 40px 18px" }}>
        {" "}
        <p style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", fontSize: "clamp(22px, 2.4vw, 34px)", lineHeight: "1.05", letterSpacing: "-.04em" }}>
          {"This page is still "}
          <span style={{ fontStyle: "italic" }}>
            in the thinking phase.
          </span>
          {" The finished ones are this way →"}
        </p>
        {" "}
        <div className="nf-links" style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "flex-end" }}>
          {" "}
          <a className="nh1" href="/" style={{ height: "48px", boxSizing: "border-box", padding: "0 18px", display: "flex", alignItems: "center", gap: "18px", background: "#0B0B0B", color: "#FCEB3F", textDecoration: "none", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: ".02em", textTransform: "uppercase" }}>
            {"Back to home "}
            <svg width="13" height="13" viewBox="0 0 100 100" style={{ display: "block" }}>
              <path d="M14 14 L84 84 M84 34 L84 84 L34 84" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="square"></path>
            </svg>
          </a>
          {" "}
          <a className="nh0" href="/project-darkroast.html" style={{ height: "48px", padding: "0 16px", display: "flex", alignItems: "center", gap: "8px", borderRadius: "999px", background: "#FFFFFF", color: "#0B0B0B", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>
            <span style={{ fontSize: "10.5px", color: "#E5322B" }}>
              01
            </span>
            DarkRoast
          </a>
          {" "}
          <a className="nh0" href="/project-delicut.html" style={{ height: "48px", padding: "0 16px", display: "flex", alignItems: "center", gap: "8px", borderRadius: "999px", background: "#FFFFFF", color: "#0B0B0B", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>
            <span style={{ fontSize: "10.5px", color: "#E5322B" }}>
              02
            </span>
            Delicut
          </a>
          {" "}
          <a className="nh0" href="/project-attune.html" style={{ height: "48px", padding: "0 16px", display: "flex", alignItems: "center", gap: "8px", borderRadius: "999px", background: "#FFFFFF", color: "#0B0B0B", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>
            <span style={{ fontSize: "10.5px", color: "#E5322B" }}>
              03
            </span>
            Attune AI
          </a>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div style={{ position: "relative", zIndex: "3", height: "52px", flex: "none", overflow: "hidden", whiteSpace: "nowrap", background: "#0B0B0B", color: "#EFEFEC", display: "flex", alignItems: "center" }}>
        {" "}
        <div style={{ display: "inline-flex", animation: "mq 26s linear infinite", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "12px", letterSpacing: ".06em", textTransform: "uppercase" }}>
          {" "}
          <span style={{ paddingRight: "40px" }}>
            {"Page not found "}
            <span style={{ color: "#FCEB3F" }}>
              /
            </span>
            {" Still thinking "}
            <span style={{ color: "#FCEB3F" }}>
              /
            </span>
            {" Wrong turn, good instincts "}
            <span style={{ color: "#FCEB3F" }}>
              /
            </span>
            {" Every dead end is a design brief "}
            <span style={{ color: "#FCEB3F" }}>
              /
            </span>
            {" Error 404 "}
            <span style={{ color: "#FCEB3F" }}>
              /
            </span>
          </span>
          {" "}
          <span style={{ paddingRight: "40px" }}>
            {"Page not found "}
            <span style={{ color: "#FCEB3F" }}>
              /
            </span>
            {" Still thinking "}
            <span style={{ color: "#FCEB3F" }}>
              /
            </span>
            {" Wrong turn, good instincts "}
            <span style={{ color: "#FCEB3F" }}>
              /
            </span>
            {" Every dead end is a design brief "}
            <span style={{ color: "#FCEB3F" }}>
              /
            </span>
            {" Error 404 "}
            <span style={{ color: "#FCEB3F" }}>
              /
            </span>
          </span>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <span className="nf-cursor" style={{ position: "absolute", left: "0", top: "0", zIndex: "10", pointerEvents: "none", transform: `translate(${v.cx ?? ""}, ${v.cy ?? ""})`, transition: "transform .18s ease-out, opacity .3s", opacity: v.curOp, display: "flex", alignItems: "center", gap: "6px", padding: "6px 10px 6px 8px", borderRadius: "999px", background: "#E5322B", color: "#FFFFFF", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: ".02em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#FFFFFF" }}></span>
        {show(v.curLabel)}
      </span>
    </section>
    </>
  );
}
