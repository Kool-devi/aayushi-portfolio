/* eslint-disable */
// Home page — desktop layout. Generated from the Claude Design board 11a, then hand-tuned.
import React, { useEffect, useState } from 'react';
import ImageSlot from '../components/ImageSlot.jsx';
import PointArrow from '../components/PointArrow.jsx';
import ScrollSteps from '../components/ScrollSteps.jsx';
import { css, show } from '../lib/template.js';

// The hero fills the window: its height (in design px) is the window height divided by the
// page zoom, plus half the ticker, so the ticker peeks in at the bottom edge as a scroll cue.
// The design was drawn at 748px tall; extra (or missing) height is split evenly above and
// below the content. In short windows (laptops, or a 1080p screen minus the browser's
// toolbars) the content would collide with the ticker, so there the whole hero is zoomed
// down a little instead (never below HERO_MIN_ZOOM).
const DESIGN_W = 1278; // must match DESKTOP_W in app/mount.jsx
const HERO_DESIGN = 748;
const TICKER_PEEK = 28; // half of the 56px ticker
const MAX_LIFT = 20; // content may move up at most this much (keeps it clear of the header)
const HERO_TIGHT = 680; // shortest hero (design px) that fits the content at MAX_LIFT
const HERO_MIN_ZOOM = 0.8;

function heroSize() {
  const zoom = (document.documentElement.clientWidth || window.innerWidth) / DESIGN_W;
  const room = window.innerHeight / zoom; // window height in design px
  const height = Math.round(room + TICKER_PEEK);
  if (height >= HERO_TIGHT) {
    return { height, shift: Math.max(-MAX_LIFT, Math.round((height - HERO_DESIGN) / 2)), zoom: 1 };
  }
  // Zoom the hero so its visible part (HERO_TIGHT minus the peek) exactly fills the window.
  const heroZoom = Math.max(HERO_MIN_ZOOM, room / (HERO_TIGHT - TICKER_PEEK));
  return { height: HERO_TIGHT, shift: -MAX_LIFT, zoom: heroZoom };
}

function useHeroSize() {
  const [size, setSize] = useState(heroSize);
  useEffect(() => {
    const on = () => setSize(heroSize());
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  return size;
}

export default function HomeDesktop({ v }) {
  const hero = useHeroSize();
  return (
    <div style={{ background: "#EFEFEC", color: "#0B0B0B", fontFamily: "'Geist',sans-serif" }}>
      {" "}
      <section onPointerMove={v.onSeam9dMove} onPointerUp={v.onSeam9dUp} onPointerLeave={v.onSeam9dUp} style={{ position: "relative", height: `${hero.height}px`, zoom: hero.zoom, "--hero-shift": `${hero.shift}px`, overflow: "hidden", userSelect: "none", touchAction: "none" }}>
        {" "}
        <div style={{ position: "absolute", inset: "0", backgroundColor: "#EFEFEC", backgroundImage: "linear-gradient(90deg, #0B0B0B12 1px, transparent 1px)", backgroundSize: "calc((100% - 80px) / 10) 100%", backgroundPosition: "40px 0" }}>
          {" "}
          <div style={{ position: "absolute", left: "40px", right: "40px", top: "14px", height: "1px", background: "#0B0B0B59" }}></div>
          {" "}
          <div style={{ position: "absolute", left: "40px", top: "24px", width: "200px", height: "34px", border: "1px dashed #0B0B0B59", boxSizing: "border-box", padding: "7px 9px", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px", color: "#5E5E5A" }}>
            Identity
          </div>
          {" "}
          <div style={{ position: "absolute", left: "400px", top: "24px", width: "200px", height: "34px", border: "1px dashed #0B0B0B59", boxSizing: "border-box", padding: "7px 9px", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px", color: "#5E5E5A" }}>
            Status line
          </div>
          {" "}
          <div style={{ position: "absolute", left: "40px", right: "40px", top: "24px", display: "grid", gridTemplateColumns: "repeat(10, 1fr)", gap: "0 16px", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
            {" "}
            <span style={{ gridColumn: "7" }}>
              <a href="#work" style={{ color: "#0B0B0B", textDecoration: "none", border: "1px dashed #0B0B0B59", padding: "6px 8px", margin: "-7px -9px" }}>
                Projects
              </a>
            </span>
            {" "}
            <span>
              <a href="#about" style={{ color: "#0B0B0B", textDecoration: "none", border: "1px dashed #0B0B0B59", padding: "6px 8px", margin: "-7px -9px" }}>
                About
              </a>
            </span>
            {" "}
            <span>
              <a href="resume.pdf" target="_blank" style={{ color: "#0B0B0B", textDecoration: "none", border: "1px dashed #0B0B0B59", padding: "6px 8px", margin: "-7px -9px" }}>
                Résumé {"↗\uFE0E"}
              </a>
            </span>
            {" "}
            <span style={{ textAlign: "right" }}>
              <button type="button" onClick={v.copyEmail} style={{ all: "unset", cursor: "pointer", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", border: "1px dashed #0B0B0B59", padding: "6px 8px", margin: "-7px -9px" }}>
                {show(v.copyLabel)}
              </button>
            </span>
            {" "}
          </div>
          {" "}
          <div style={{ position: "absolute", left: "40px", top: "calc(128px + var(--hero-shift, 0px))", width: "92px", height: "92px", border: "1px dashed #0B0B0B59", boxSizing: "border-box", padding: "7px 9px", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px", color: "#5E5E5A" }}>
            Arrow cue
          </div>
          {" "}
          <div style={{ position: "absolute", left: "36px", top: "calc(236px + var(--hero-shift, 0px))", width: "820px", height: "246px", border: "1px dashed #0B0B0B59", boxSizing: "border-box", padding: "7px 9px", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px", color: "#5E5E5A" }}>
            H1 · Funnel Sans 400 / 128 · italic on the verb
          </div>
          {" "}
          <div style={{ position: "absolute", right: "40px", top: "calc(96px + var(--hero-shift, 0px))", width: "300px", height: "340px", border: "1px dashed #0B0B0B59", boxSizing: "border-box", padding: "7px 9px", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px", color: "#5E5E5A" }}>
            Portrait · 3:4
          </div>
          {" "}
          <div style={{ position: "absolute", right: "40px", top: "calc(476px + var(--hero-shift, 0px))", width: "300px", height: "104px", border: "1px dashed #0B0B0B59", boxSizing: "border-box", padding: "7px 9px", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px", color: "#5E5E5A" }}>
            Proof 2 numbers
          </div>
          {" "}
          <div style={{ position: "absolute", left: "40px", top: "calc(500px + var(--hero-shift, 0px))", width: "420px", height: "52px", border: "1px dashed #0B0B0B59", boxSizing: "border-box", padding: "7px 9px", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px", color: "#5E5E5A" }}>
            Lede
          </div>
          {" "}
          <div style={{ position: "absolute", left: "40px", top: "calc(572px + var(--hero-shift, 0px))", width: "242px", height: "52px", border: "1px dashed #0B0B0B59", boxSizing: "border-box", padding: "7px 9px", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px", color: "#5E5E5A" }}>
            Primary CTA
          </div>
          {" "}
          <div style={{ position: "absolute", left: "560px", top: "calc(500px + var(--hero-shift, 0px))", width: "128px", height: "128px", borderRadius: "50%", border: "1px dashed #0B0B0B59", boxSizing: "border-box", padding: "7px 9px", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px", color: "#5E5E5A" }}>
            Status
          </div>
          {" "}
          <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: "56px", borderTop: "1px dashed #0B0B0B59" }}></div>
          {" "}
          <div style={{ position: "absolute", left: "160px", top: "calc(140px + var(--hero-shift, 0px))", width: "220px", display: "grid", gridTemplateColumns: "26px 1fr", gap: "6px" }}>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
              01
            </span>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "10px", textTransform: "none", letterSpacing: "0", fontWeight: "400", lineHeight: "1.5", color: "#0B0B0B" }}>
              Before I design anything, I take the old thing apart.
            </span>
          </div>
          {" "}
          <div style={{ position: "absolute", left: "470px", top: "calc(104px + var(--hero-shift, 0px))", width: "240px", display: "grid", gridTemplateColumns: "26px 1fr", gap: "6px" }}>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
              02
            </span>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "10px", textTransform: "none", letterSpacing: "0", fontWeight: "400", lineHeight: "1.5", color: "#0B0B0B" }}>
              My first idea is rarely the one. Usually it’s the fourth.
            </span>
          </div>
          {" "}
          <div style={{ position: "absolute", left: "706px", top: "calc(270px + var(--hero-shift, 0px))", width: "146px", display: "grid", gridTemplateColumns: "26px 1fr", gap: "6px" }}>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
              03
            </span>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "10px", textTransform: "none", letterSpacing: "0", fontWeight: "400", lineHeight: "1.5", color: "#0B0B0B" }}>
              Users rarely say what they need. They show it.
            </span>
          </div>
          {" "}
          <div style={{ position: "absolute", left: "720px", top: "calc(510px + var(--hero-shift, 0px))", width: "200px", display: "grid", gridTemplateColumns: "26px 1fr", gap: "6px" }}>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
              04
            </span>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "10px", textTransform: "none", letterSpacing: "0", fontWeight: "400", lineHeight: "1.5", color: "#0B0B0B" }}>
              If it takes two lines to explain, it isn’t simple yet.
            </span>
          </div>
          {" "}
          <div style={{ position: "absolute", left: "716px", top: "calc(180px + var(--hero-shift, 0px))", width: "200px", display: "grid", gridTemplateColumns: "26px 1fr", gap: "6px" }}>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
              05
            </span>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "10px", textTransform: "none", letterSpacing: "0", fontWeight: "400", lineHeight: "1.5", color: "#0B0B0B" }}>
              Mildly introverted. Very into your user flows.
            </span>
          </div>
          {" "}
          <div style={{ position: "absolute", right: "40px", top: "calc(592px + var(--hero-shift, 0px))", width: "300px", display: "grid", gridTemplateColumns: "26px 1fr", gap: "6px" }}>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
              06
            </span>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "10px", textTransform: "none", letterSpacing: "0", fontWeight: "400", lineHeight: "1.5", color: "#0B0B0B" }}>
              If I can’t explain a number in an interview, it doesn’t go on the page.
            </span>
          </div>
          {" "}
          <span style={{ position: "absolute", left: "40px", top: "min(calc(662px + var(--hero-shift, 0px)), calc(100% - 76px))", whiteSpace: "pre", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px", color: "#5E5E5A" }}>
            {"wireframe_v3.fig  the messy part"}
          </span>
          {" "}
        </div>
        {" "}
        <div style={{ position: "absolute", inset: "0", background: "#FCEB3F", clipPath: `inset(0 ${v.seam9dRight ?? ""} 0 0)` }}>
          {" "}
          <div style={{ position: "absolute", left: "40px", right: "40px", top: "14px", height: "1px", background: "#0B0B0B" }}></div>
          {" "}
          <div style={{ position: "absolute", left: "40px", right: "40px", top: "24px", display: "grid", gridTemplateColumns: "repeat(10, 1fr)", gap: "0 16px", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
            {" "}
            <a href="index.html" style={{ gridColumn: "span 3", color: "#0B0B0B", textDecoration: "none" }}>
              Aayushi Patel
              <br />
              Product Designer
            </a>
            {" "}
            <span style={{ gridColumn: "span 3" }}>
              Currently
              <br />
              <span style={{ textTransform: "none" }}>
                Taking apart how things work
              </span>
            </span>
            {" "}
            <a href="#work" style={{ color: "#0B0B0B", textDecoration: "none" }}>
              Projects
            </a>
            {" "}
            <a href="#about" style={{ color: "#0B0B0B", textDecoration: "none" }}>
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
          {" "}
          <div style={{ position: "absolute", left: "40px", top: "calc(84px + var(--hero-shift, 0px))", whiteSpace: "nowrap", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
            Halifax, Canada
            <br />
            Open to design roles
          </div>
          {" "}
          <div style={{ position: "absolute", left: "40px", top: "calc(128px + var(--hero-shift, 0px))" }}>
            <PointArrow size={92} />
          </div>
          {" "}
          <h1 data-arrow-target style={{ position: "absolute", left: "36px", top: "calc(236px + var(--hero-shift, 0px))", width: "840px", margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "86px", lineHeight: ".92", whiteSpace: "nowrap", color: "#0B0B0B" }}>
            I turn what users feel
            <br />
            <span style={{ fontStyle: "italic" }}>
              into what teams
              <br />
              {"can "}
              <span style={{ position: "relative", display: "inline-block" }}>
                build
                {/* the hand-drawn ellipse, sized to the word so it follows it wherever the line breaks */}
                <svg aria-hidden="true" viewBox="0 0 560 210" preserveAspectRatio="none" style={{ position: "absolute", left: "-.2em", top: "50%", width: "calc(100% + .38em)", height: "1.08em", transform: "translateY(-47%)", pointerEvents: "none", overflow: "visible" }}>
                  <ellipse cx="280" cy="105" rx="278" ry="92" fill="none" stroke="#0B0B0B" strokeWidth="1" vectorEffect="non-scaling-stroke" transform="rotate(-6 280 105)"></ellipse>
                </svg>
              </span>
            </span>
          </h1>
          {" "}
          <div style={{ position: "absolute", right: "40px", top: "calc(96px + var(--hero-shift, 0px))", width: "300px", height: "340px", background: "#E9DA2E" }}>
            <ImageSlot id="v9d-portrait" shape="rect" placeholder="Aayushi Patel giving a talk" />
          </div>
          {" "}
          <div style={{ position: "absolute", right: "40px", top: "calc(444px + var(--hero-shift, 0px))", width: "300px", display: "flex", justifyContent: "space-between", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px" }}>
            <span>
              <span style={{ whiteSpace: "pre" }}>{"Fig. 01  Aayushi, mid explanation"}</span>
            </span>
            <span>
              2026
            </span>
          </div>
          {" "}
          <div style={{ position: "absolute", right: "40px", top: "calc(476px + var(--hero-shift, 0px))", width: "300px", display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "1px solid #0B0B0B" }}>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "12px" }}>
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "58px", lineHeight: ".85" }}>
                3 yrs
              </span>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px" }}>
                Designing real products
              </span>
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "12px" }}>
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "58px", lineHeight: ".85" }}>
                15k+
              </span>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px" }}>
                People use something I designed
              </span>
            </div>
            {" "}
          </div>
          {" "}
          <p style={{ position: "absolute", left: "40px", top: "calc(500px + var(--hero-shift, 0px))", width: "420px", margin: "0", fontSize: "17px", lineHeight: "1.45", letterSpacing: "-.01em" }}>
            Deep research, clean interfaces.
          </p>
          {" "}
          <a className="dh0" href="#work" style={{ position: "absolute", left: "40px", top: "calc(572px + var(--hero-shift, 0px))", width: "242px", height: "52px", boxSizing: "border-box", padding: "0 18px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#0B0B0B", color: "#FCEB3F", textDecoration: "none", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "11px" }}>
            {"Show my work "}
            <span style={{ display: "block", width: "14px" }}>
              <svg width="14" height="14" viewBox="0 0 100 100" style={{ display: "block" }}>
                <path d="M14 14 L84 84 M84 34 L84 84 L34 84" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="square"></path>
              </svg>
            </span>
          </a>
          {" "}
          <a href="mailto:aayushipatel2002@gmail.com" aria-label="Open to work — email Aayushi" style={{ position: "absolute", left: "560px", top: "calc(500px + var(--hero-shift, 0px))", width: "128px", height: "128px", display: "block", color: "#0B0B0B", textDecoration: "none" }}>
            {" "}
            <div style={{ position: "absolute", inset: "0", animation: "spin 36s linear infinite" }}>
              {" "}
              <svg viewBox="0 0 128 128" width="128" height="128" style={{ display: "block", overflow: "visible" }}>
                {" "}
                <defs>
                  <path id="v9d-ring" d="M64,64 m-52,0 a52,52 0 1,1 104,0 a52,52 0 1,1 -104,0"></path>
                </defs>
                {" "}
                <circle cx="64" cy="64" r="63.5" fill="none" stroke="#0B0B0B" strokeWidth="1"></circle>
                {" "}
                <circle cx="64" cy="64" r="41" fill="none" stroke="#0B0B0B" strokeOpacity=".35" strokeWidth="1" strokeDasharray="1 3"></circle>
                {" "}
                <text style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "8.4px", letterSpacing: "2.2px", whiteSpace: "pre" }} fill="#0B0B0B">
                  <textPath href="#v9d-ring" textLength="326" lengthAdjust="spacing">
                    {"OPEN TO WORK  FULL TIME  CANADA 2026  "}
                  </textPath>
                </text>
                {" "}
                <circle cx="64" cy="0.5" r="3.5" fill="#E5322B"></circle>
                {" "}
              </svg>
              {" "}
            </div>
            {" "}
            <span className="dh1" style={{ position: "absolute", inset: "30px", borderRadius: "50%", background: "#FFFFFF", boxShadow: "0 6px 16px -8px rgba(0,0,0,.35)", transform: "scale(0)", transition: "transform .5s cubic-bezier(.3,1.4,.4,1)" }}></span>
            {" "}
            <span style={{ position: "absolute", inset: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px", pointerEvents: "none" }}>
              {" "}
              <span style={{ display: "flex", alignItems: "center", gap: "5px", fontFamily: "'Geist',sans-serif", fontWeight: "500", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2DB34A", boxShadow: "0 0 0 3px #2DB34A33", animation: "pulse 1.6s ease-in-out infinite" }}></span>
                Available
              </span>
              {" "}
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontStyle: "italic", fontSize: "22px", lineHeight: "1", letterSpacing: "-.04em" }}>
                now
              </span>
              {" "}
            </span>
            {" "}
          </a>
          {" "}
          <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: "56px", overflow: "hidden", whiteSpace: "nowrap", background: "#0B0B0B", color: "#EFEFEC", display: "flex", alignItems: "center" }}>
            {" "}
            <div style={{ display: "inline-flex", animation: "mq 40s linear infinite", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "12px", letterSpacing: ".06em" }}>
              <span style={{ paddingRight: "40px" }}>
                {"User research "}
                <span style={{ color: "#FCEB3F" }}>
                  /
                </span>
                {" UI design "}
                <span style={{ color: "#FCEB3F" }}>
                  /
                </span>
                {" Design systems "}
                <span style={{ color: "#FCEB3F" }}>
                  /
                </span>
                {" Prototyping "}
                <span style={{ color: "#FCEB3F" }}>
                  /
                </span>
                {" AI products "}
                <span style={{ color: "#FCEB3F" }}>
                  /
                </span>
                {" Dashboards "}
                <span style={{ color: "#FCEB3F" }}>
                  /
                </span>
                {" Mobile apps "}
                <span style={{ color: "#FCEB3F" }}>
                  /
                </span>
                {" Usability testing "}
                <span style={{ color: "#FCEB3F" }}>
                  /
                </span>
              </span>
              <span style={{ paddingRight: "40px" }}>
                {"User research "}
                <span style={{ color: "#FCEB3F" }}>
                  /
                </span>
                {" UI design "}
                <span style={{ color: "#FCEB3F" }}>
                  /
                </span>
                {" Design systems "}
                <span style={{ color: "#FCEB3F" }}>
                  /
                </span>
                {" Prototyping "}
                <span style={{ color: "#FCEB3F" }}>
                  /
                </span>
                {" AI products "}
                <span style={{ color: "#FCEB3F" }}>
                  /
                </span>
                {" Dashboards "}
                <span style={{ color: "#FCEB3F" }}>
                  /
                </span>
                {" Mobile apps "}
                <span style={{ color: "#FCEB3F" }}>
                  /
                </span>
                {" Usability testing "}
                <span style={{ color: "#FCEB3F" }}>
                  /
                </span>
              </span>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div onPointerDown={v.onSeam9dDown} style={{ position: "absolute", top: "64px", bottom: "56px", left: v.seam9dLeft, width: "40px", marginLeft: "-20px", cursor: "ew-resize", display: "flex", justifyContent: "center" }}>
          {" "}
          <span style={{ width: "1px", height: "calc(100% + 50px)", marginTop: "-50px", background: "#0B0B0B" }}></span>
          {" "}
          <span style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", width: "54px", height: "54px", borderRadius: "50%", background: "#0B0B0B", color: "#FCEB3F", display: "grid", placeItems: "center", fontSize: "17px" }}>
            ⟷
          </span>
          {" "}
          <span style={{ position: "absolute", top: "calc(50% + 38px)", whiteSpace: "nowrap", padding: "5px 9px", background: "#FFFFFF", color: "#0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px" }}>
            {show(v.seam9dHint)}
          </span>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      {/* Pins while scrolling: the project cards switch 01 → 02 → 03, then the page carries on. Tabs and arrows still switch too. */}
      <ScrollSteps id="work" steps={3} onStep={v.onStep9d} style={{ margin: "56px 0 48px" }}>
      <div style={{ padding: "0 40px" }}>
        {" "}
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,7fr) minmax(0,3fr)", gap: "40px", alignItems: "end", paddingBottom: "14px", marginBottom: "14px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "60px", lineHeight: ".95", color: "#0B0B0B" }}>
            Selected work
          </h2>
          {" "}
          <p style={{ margin: "0", fontSize: "13px", lineHeight: "1.5" }}>
            A few projects I’ve worked on. Open any one to see the full story.
          </p>
          {" "}
        </div>
        {" "}
        <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0 0", marginBottom: "20px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span>
            Case studies
          </span>
          <span>
            03 — 2025 / 2026
          </span>
        </div>
        {" "}
        <div style={{ display: "flex", flexDirection: "column", filter: "drop-shadow(0 1px 1px rgba(0,0,0,.04)) drop-shadow(0 24px 30px rgba(0,0,0,.10))" }}>
          {" "}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "24px" }}>
            {" "}
            <div role="tablist" style={{ display: "grid", gridTemplateColumns: "repeat(3, 240px)" }}>
              {" "}
              {(v.folders9d || []).map((f, $index) => (
                <React.Fragment key={$index}>
                  {" "}
                  <button className="dh2" type="button" role="tab" aria-selected={f?.on} onClick={f?.onOpen} style={{ all: "unset", cursor: "pointer", position: "relative", height: "50px", padding: "0 22px", display: "flex", alignItems: "center", gap: "12px", borderRadius: "18px 18px 0 0", background: f?.tabBg, color: f?.segFg, transition: "background .25s, color .25s" }}>
                    {" "}
                    <span style={{ position: "absolute", left: "-18px", bottom: "0", width: "18px", height: "18px", pointerEvents: "none", background: "radial-gradient(circle at 0 0, transparent 17.5px, #FFFFFF 18px)", display: f?.earL }}></span>
                    {" "}
                    <span style={{ position: "absolute", right: "-18px", bottom: "0", width: "18px", height: "18px", pointerEvents: "none", background: "radial-gradient(circle at 100% 0, transparent 17.5px, #FFFFFF 18px)", display: f?.earR }}></span>
                    {" "}
                    <span style={{ position: "absolute", right: "0", top: "20px", bottom: "20px", width: "1px", background: "#0B0B0B1F", display: f?.sep }}></span>
                    {" "}
                    <span style={{ fontFamily: "'Geist',sans-serif", fontSize: "11px", fontWeight: "500", opacity: ".55" }}>
                      {show(f?.num)}
                    </span>
                    {" "}
                    <span style={{ flex: "1", fontFamily: "'Geist',sans-serif", fontSize: "15px", fontWeight: f?.segW, letterSpacing: "-.01em" }}>
                      {show(f?.title)}
                    </span>
                    {" "}
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0B0B0B", opacity: f?.cardOp, transition: "opacity .25s" }}></span>
                    {" "}
                  </button>
                  {" "}
                </React.Fragment>
              ))}
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", paddingBottom: "10px" }}>
              {" "}
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69", marginRight: "8px" }}>
                {show(v.segCount9d)}{" / 03"}
              </span>
              {" "}
              <button className="dh3" type="button" aria-label="Previous case" onClick={v.onPrev9d} style={{ all: "unset", cursor: "pointer", width: "44px", height: "44px", borderRadius: "50%", background: "#FFFFFF", display: "grid", placeItems: "center", fontSize: "17px", color: "#0B0B0B", transition: "transform .2s" }}>
                ←
              </button>
              {" "}
              <button className="dh3" type="button" aria-label="Next case" onClick={v.onNext9d} style={{ all: "unset", cursor: "pointer", width: "44px", height: "44px", borderRadius: "50%", background: "#0B0B0B", color: "#FFFFFF", display: "grid", placeItems: "center", fontSize: "17px", transition: "transform .2s" }}>
                →
              </button>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ position: "relative", height: "440px" }}>
            {" "}
            {(v.folders9d || []).map((f, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <article style={{ position: "absolute", inset: "0", display: "grid", gridTemplateColumns: "minmax(0,7fr) minmax(0,5fr)", gap: "12px", padding: "12px", boxSizing: "border-box", borderRadius: v.cardR9d, background: "#FFFFFF", opacity: f?.cardOp, transform: `translateY(${f?.cardY ?? ""})`, pointerEvents: f?.cardPe, transition: "opacity .45s ease, transform .55s cubic-bezier(.3,.9,.3,1)" }}>
                  {" "}
                  <div style={{ position: "relative", minHeight: "0", borderRadius: "16px", overflow: "hidden", background: "#EDEDEA" }}>
                    {" "}
                    <ImageSlot id={`v9d-${f?.key ?? ""}`} shape="rect" placeholder={f?.placeholder} />
                    {" "}
                    <div style={{ position: "absolute", left: "14px", right: "14px", top: "14px", display: "flex", justifyContent: "space-between", pointerEvents: "none" }}>
                      {" "}
                      <span style={{ padding: "8px 13px", borderRadius: "999px", background: "rgba(255,255,255,.78)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", fontSize: "12.5px", fontWeight: "500", color: "#0B0B0B" }}>
                        {show(f?.tag1)}
                      </span>
                      {" "}
                      <span style={{ padding: "8px 13px", borderRadius: "999px", background: "rgba(11,11,11,.55)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", fontSize: "12.5px", fontWeight: "500", color: "#FFFFFF" }}>
                        {"Case "}{show(f?.num)}
                      </span>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div style={{ minWidth: "0", minHeight: "0", display: "flex", flexDirection: "column", padding: "18px 20px 8px 24px" }}>
                    {" "}
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#6E6E69" }}>
                      <span style={{ whiteSpace: "pre" }}>
                        {show(f?.tags)}{"  "}{show(f?.year)}
                      </span>
                    </div>
                    {" "}
                    <h3 style={{ margin: "12px 0 0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "54px", lineHeight: ".95", color: "#0B0B0B" }}>
                      {show(f?.title)}
                    </h3>
                    {" "}
                    <p style={{ margin: "12px 0 0", fontSize: "16px", lineHeight: "1.5", letterSpacing: "-.01em", color: "#3C3C38", maxWidth: "34ch" }}>
                      {show(f?.desc)}
                    </p>
                    {" "}
                    <div style={{ marginTop: "auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                      {" "}
                      <div style={{ padding: "16px 16px 14px", borderRadius: "14px", background: "#F3F3F1", display: "flex", flexDirection: "column", gap: "8px" }}>
                        <span style={{ fontSize: "12px", color: "#6E6E69" }}>
                          Outcome
                        </span>
                        <span style={{ fontSize: "15px", fontWeight: "500", lineHeight: "1.3", letterSpacing: "-.01em", color: "#0B0B0B" }}>
                          {show(f?.metric)}
                        </span>
                      </div>
                      {" "}
                      <div style={{ padding: "16px 16px 14px", borderRadius: "14px", background: "#F3F3F1", display: "flex", flexDirection: "column", gap: "8px" }}>
                        <span style={{ fontSize: "12px", color: "#6E6E69" }}>
                          Role
                        </span>
                        <span style={{ fontSize: "15px", fontWeight: "500", lineHeight: "1.3", letterSpacing: "-.01em", color: "#0B0B0B" }}>
                          {show(f?.role)}
                          <br />
                          <span style={{ color: "#6E6E69", fontWeight: "400" }}>
                            {show(f?.platform)}
                          </span>
                        </span>
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <a href={f?.href} onMouseEnter={f?.rcIn} onMouseLeave={f?.rcOut} onFocus={f?.rcIn} onBlur={f?.rcOut} style={{ position: "relative", overflow: "hidden", marginTop: "10px", height: "56px", padding: "0 10px 0 24px", borderRadius: "999px", backgroundColor: f?.rcBg, transition: f?.rcBgTr, color: "#FFFFFF", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "15px", fontWeight: "500", letterSpacing: "-.01em" }}>
                      {" "}
                      <span>
                        Read the case study
                      </span>
                      {" "}
                      <span style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#FFFFFF", color: "#0B0B0B", display: "grid", placeItems: "center", flex: "none" }}>
                        <svg width="14" height="14" viewBox="0 0 100 100" style={{ display: "block", transform: "rotate(0deg)", transition: "transform .9s cubic-bezier(.45,0,.2,1)" }}>
                          <path d="M14 14 L84 84 M84 34 L84 84 L34 84" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="square"></path>
                        </svg>
                      </span>
                      {" "}
                      <span aria-hidden="true" style={{ position: "absolute", inset: "0", background: "#FFFFFF", color: "#0B0B0B", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 10px 0 24px", clipPath: `circle(${f?.rcR ?? ""} at calc(100% - 29px) 50%)`, transition: f?.rcTr, pointerEvents: "none" }}>
                        {" "}
                        <span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0", paddingRight: "16px", opacity: f?.rcTxtOp, transform: `translateY(${f?.rcTxtY ?? ""})`, transition: f?.rcTxtTr }}>
                          {" "}
                          <span style={{ fontFamily: "'Geist',sans-serif", fontSize: "10px", fontWeight: "500", letterSpacing: ".06em", textTransform: "uppercase", color: "#6E6E69" }}>
                            What I learned
                          </span>
                          {" "}
                          <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontStyle: "italic", fontSize: "13.5px", lineHeight: "1.2", letterSpacing: "-.02em", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                            {show(f?.rcInsight)}
                          </span>
                          {" "}
                        </span>
                        {" "}
                        <span style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#0B0B0B", color: "#FFFFFF", display: "grid", placeItems: "center", flex: "none", boxShadow: `0 0 0 ${f?.rcRing ?? ""} #0B0B0B14`, transition: "box-shadow 1.6s ease-out .5s" }}>
                          <svg width="14" height="14" viewBox="0 0 100 100" style={{ display: "block", transform: `rotate(${f?.rcRot ?? ""})`, transition: "transform .9s cubic-bezier(.45,0,.2,1) .3s" }}>
                            <path d="M14 14 L84 84 M84 34 L84 84 L34 84" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="square"></path>
                          </svg>
                        </span>
                        {" "}
                      </span>
                      {" "}
                    </a>
                    {" "}
                  </div>
                  {" "}
                </article>
                {" "}
              </React.Fragment>
            ))}
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      </ScrollSteps>
      {" "}
      <section id="about" style={{ position: "relative", margin: "0 40px", background: "#F6F3EC", padding: "20px", display: "grid", gridTemplateColumns: "minmax(0,4fr) minmax(0,8fr)", gap: "20px", overflow: "hidden" }}>
        {" "}
        <div style={{ position: "absolute", left: "-140px", top: "-120px", width: "620px", height: "620px", borderRadius: "50%", background: "radial-gradient(circle at 40% 45%, #E5322B 0%, #F2761F 30%, #FCEB3F 55%, rgba(246,243,236,0) 72%)", filter: "blur(40px)", opacity: ".9", pointerEvents: "none" }}></div>
        {" "}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "28px", padding: "20px 16px 16px 20px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "76px", lineHeight: ".95", color: "#0B0B0B" }}>
            <span style={{ fontWeight: "300" }}>(</span>
            {"Still "}
            <span style={{ whiteSpace: "nowrap" }}>deciding?<span style={{ fontWeight: "300" }}>)</span></span>
            <br />
            <span style={{ color: "#E5322B" }}>
              Just ask
            </span>
          </h2>
          {" "}
          <p style={{ margin: "0", fontSize: "14.5px", lineHeight: "1.55", maxWidth: "30ch" }}>
            Pick a question. I’ve kept every answer short, like a good interview.
          </p>
          {" "}
        </div>
        {" "}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "12px", minHeight: "460px" }}>
          {" "}
          <div style={{ flex: "1", display: "grid", gridTemplateColumns: "260px minmax(0,1fr)", gap: "12px" }}>
            {" "}
            <div style={{ padding: "6px", borderRadius: "20px", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 8px 24px -14px rgba(0,0,0,.2)", display: "flex", flexDirection: "column", gap: "2px" }}>
              {" "}
              {(v.cmds9d || []).map((c, $index) => (
                <React.Fragment key={$index}>
                  {" "}
                  <button type="button" onClick={c?.onPick} onMouseEnter={c?.onPick} style={{ all: "unset", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px", padding: "0 14px", height: "56px", borderRadius: "14px", background: c?.bg, color: c?.fg, transition: "background .2s" }}>
                    {" "}
                    <span style={{ width: "24px", fontFamily: "'Geist',sans-serif", fontSize: "11.5px", color: "#6E6E69" }}>
                      {show(c?.idx)}
                    </span>
                    {" "}
                    <span style={{ flex: "1", fontFamily: "'Geist',sans-serif", fontSize: "15px", fontWeight: "500", letterSpacing: "-.01em" }}>
                      {show(c?.label)}
                    </span>
                    {" "}
                    <span style={{ fontSize: "14px", color: "#6E6E69", opacity: c?.chev, transition: "opacity .2s" }}>
                      ›
                    </span>
                    {" "}
                  </button>
                  {" "}
                </React.Fragment>
              ))}
              {" "}
              {v.empty9d ? (
                <>
                <span style={{ padding: "16px 14px", fontSize: "14px", color: "#6E6E69" }}>
                  No match — try “why”.
                </span>
                </>
              ) : null}
              {" "}
            </div>
            {" "}
            <div style={{ minWidth: "0", padding: "30px 32px 24px", borderRadius: "20px", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 8px 24px -14px rgba(0,0,0,.2)", display: "flex", flexDirection: "column", gap: "14px" }}>
              {" "}
              <span style={{ fontFamily: "'Geist',sans-serif", fontSize: "12.5px", color: "#6E6E69" }}>
                {show(v.cur9d?.kind)}
              </span>
              {" "}
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "44px", lineHeight: "1", color: "#0B0B0B", overflowWrap: "anywhere" }}>
                {show(v.cur9d?.title)}
              </span>
              {" "}
              <span style={{ fontFamily: "'Geist',sans-serif", fontSize: "15.5px", lineHeight: "1.6", letterSpacing: "-.005em", maxWidth: "44ch", color: "#3C3C38" }}>
                {show(v.cur9d?.body)}
              </span>
              {" "}
              {v.cur9d?.cta ? (
              <a className="dh4" href={v.cur9d?.href} target={v.cur9d?.target} onClick={v.cur9d?.onAct} style={{ marginTop: "auto", alignSelf: "flex-start", height: "48px", padding: "0 8px 0 20px", borderRadius: "999px", background: "#0B0B0B", color: "#FFFFFF", textDecoration: "none", display: "flex", alignItems: "center", gap: "16px", fontFamily: "'Geist',sans-serif", fontSize: "14px", fontWeight: "500" }}>
                {show(v.cur9d?.cta)}{" "}
                <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#FFFFFF", color: "#0B0B0B", display: "grid", placeItems: "center" }}>
                  <svg width="14" height="14" viewBox="0 0 100 100" style={{ display: "block" }}>
                    <path d="M14 14 L84 84 M84 34 L84 84 L34 84" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="square"></path>
                  </svg>
                </span>
              </a>
              ) : null}
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </section>
      {" "}
      <footer style={{ marginTop: "120px", background: "#FCEB3F", color: "#0B0B0B", padding: "14px 40px 28px", display: "flex", flexDirection: "column", gap: "56px" }}>
        {" "}
        <div style={{ borderTop: "1px solid #0B0B0B", paddingTop: "10px", display: "grid", gridTemplateColumns: "repeat(10, 1fr)", gap: "16px", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          {" "}
          <span style={{ gridColumn: "span 3" }}>
            Let’s connect today
          </span>
          <span style={{ gridColumn: "span 3" }}>
            Freelance · Full‑time
            <br />
            Collaborations
          </span>
          <span style={{ gridColumn: "span 2" }}>
            Halifax, Canada
          </span>
          <span style={{ gridColumn: "span 2", textAlign: "right" }}>
            © 2026
          </span>
          {" "}
        </div>
        {" "}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "32px" }}>
          {" "}
          <a className="dh5" href="mailto:aayushipatel2002@gmail.com" style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "84px", lineHeight: "1", color: "#0B0B0B", textDecoration: "none" }}>
            aayushipatel2002@
            <span style={{ fontStyle: "italic" }}>
              gmail.com
            </span>
          </a>
          {" "}
          <a className="dh6" href="mailto:aayushipatel2002@gmail.com" style={{ flex: "none", width: "132px", height: "132px", borderRadius: "50%", border: "1px solid #0B0B0B", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", color: "#0B0B0B", textDecoration: "none", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "12px", lineHeight: "1.15" }}>
            Contact
            <br />
            now
          </a>
          {" "}
        </div>
        {" "}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "24px" }}>
          {" "}
          <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "168px", lineHeight: ".82", letterSpacing: "-.06em", whiteSpace: "nowrap" }}>
            {"Aayushi "}
            <span style={{ fontStyle: "italic" }}>
              Patel
            </span>
          </span>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", textAlign: "right", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", paddingBottom: "10px" }}>
            <a href="https://linkedin.com/in/patelaayushi" target="_blank" style={{ color: "#0B0B0B" }}>
              LinkedIn {"↗\uFE0E"}
            </a>
            <a href="https://www.behance.net/aayushipatel21/projects" target="_blank" style={{ color: "#0B0B0B" }}>
              Behance {"↗\uFE0E"}
            </a>
          </div>
          {" "}
        </div>
        {" "}
      </footer>
    </div>
  );
}
