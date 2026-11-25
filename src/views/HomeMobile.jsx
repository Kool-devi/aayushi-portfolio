/* eslint-disable */
// Home page — mobile layout. Generated from the Claude Design board 11a, then hand-tuned.
import React from 'react';
import ImageSlot from '../components/ImageSlot.jsx';
import { css, show } from '../lib/template.js';

export default function HomeMobile({ v }) {
  return (
    <div style={{ background: "#EFEFEC", color: "#0B0B0B", fontFamily: "'Geist',sans-serif" }}>
      {" "}
      <section onPointerMove={v.onMSeamMove} onPointerUp={v.onMSeamUp} onPointerLeave={v.onMSeamUp} style={{ position: "relative", display: "grid", gridTemplateColumns: "minmax(0,1fr)", overflow: "hidden", userSelect: "none" }}>
        {" "}
        <div aria-hidden="true" style={{ gridArea: "1 / 1", minWidth: "0" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "14px 20px 0", backgroundColor: "#EFEFEC", backgroundImage: "linear-gradient(90deg, #0B0B0B12 1px, transparent 1px)", backgroundSize: "calc((100% - 40px) / 4) 100%", backgroundPosition: "20px 0" }}>
            {" "}
            <div style={{ height: "1px", background: "#0B0B0B59" }}></div>
            {" "}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", position: "relative", outline: "1px dashed #0B0B0B59", outlineOffset: "2px", color: "transparent" }}>
              <span style={{ position: "absolute", left: "4px", top: "4px", fontFamily: "'Geist Mono',monospace", fontSize: "9px", color: "#6E6E69" }}>
                nav
              </span>
              {" "}
              <a href="index.html" style={{ color: "transparent", textDecoration: "none" }}>
                Aayushi Patel
                <br />
                Product Designer
              </a>
              {" "}
              <div style={{ display: "flex", gap: "14px" }}>
                <a href="#work" style={{ color: "transparent", textDecoration: "none" }}>
                  Work
                </a>
                <a href="#about" style={{ color: "transparent", textDecoration: "none" }}>
                  About
                </a>
                <a href="resume.pdf" target="_blank" style={{ color: "transparent", textDecoration: "none" }}>
                  CV {"↗\uFE0E"}
                </a>
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", paddingTop: "0", position: "relative", outline: "1px dashed #0B0B0B59", outlineOffset: "2px", color: "transparent" }}>
              <span style={{ position: "absolute", left: "4px", top: "4px", fontFamily: "'Geist Mono',monospace", fontSize: "9px", color: "#6E6E69" }}>
                meta
              </span>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
                Since 2020
                <br />
                Halifax, Canada
              </span>
              <span style={{ display: "block", opacity: "0" }}>
                <svg width="54" height="54" viewBox="0 0 100 100" style={{ display: "block" }}>
                  <path d="M14 14 L84 84 M84 34 L84 84 L34 84" fill="none" stroke="#0B0B0B" strokeWidth="7" strokeLinecap="square"></path>
                </svg>
              </span>
            </div>
            {" "}
            <div style={{ position: "relative", position: "relative", outline: "1px dashed #0B0B0B59", outlineOffset: "2px", color: "transparent" }}>
              <span style={{ position: "absolute", left: "4px", top: "4px", fontFamily: "'Geist Mono',monospace", fontSize: "9px", color: "#6E6E69" }}>
                H1 · Funnel Sans 400
              </span>
              {" "}
              <svg width="330" height="120" viewBox="0 0 560 210" style={{ position: "absolute", left: "30px", top: "70px", pointerEvents: "none", overflow: "visible", opacity: "0" }}>
                <ellipse cx="280" cy="105" rx="278" ry="92" fill="none" stroke="#0B0B0B" strokeWidth="1" transform="rotate(-6 280 105)"></ellipse>
              </svg>
              {" "}
              <h1 style={{ position: "relative", margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "64px", lineHeight: ".9" }}>
                Innovate
                <br />
                {"with "}
                <span style={{ fontStyle: "italic" }}>
                  purpose
                </span>
              </h1>
              {" "}
            </div>
            {" "}
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.45", letterSpacing: "-.01em", maxWidth: "30ch", position: "relative", outline: "1px dashed #0B0B0B59", outlineOffset: "2px", color: "transparent" }}>
              <span style={{ position: "absolute", left: "4px", top: "4px", fontFamily: "'Geist Mono',monospace", fontSize: "9px", color: "#6E6E69" }}>
                body
              </span>
              Designing products that turn complex problems into clear, human experiences.
            </p>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {" "}
              <div style={{ position: "relative", height: "200px", background: "transparent", outline: "1px dashed #0B0B0B59" }}>
                <span style={{ position: "absolute", inset: "0", background: "linear-gradient(to top right, transparent calc(50% - .5px), #0B0B0B33 50%, transparent calc(50% + .5px)), linear-gradient(to top left, transparent calc(50% - .5px), #0B0B0B33 50%, transparent calc(50% + .5px))" }}></span>
                <span style={{ position: "absolute", left: "4px", top: "4px", fontFamily: "'Geist Mono',monospace", fontSize: "9px", color: "#6E6E69" }}>
                  portrait · wide crop
                </span>
              </div>
              {" "}
              <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px", color: "transparent" }}>
                <span>
                  Fig. 01 — Aayushi
                </span>
                <span>
                  2026
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr) minmax(0,1fr)", gap: "16px", alignItems: "end" }}>
              {" "}
              <a href="mailto:aayushipatel2002@gmail.com" aria-label="Open to work — email Aayushi" style={{ position: "relative", width: "96px", height: "96px", display: "block", color: "#0B0B0B", textDecoration: "none", outline: "1px dashed #0B0B0B59", borderRadius: "50%" }}>
                {" "}
                <span style={{ position: "absolute", left: "4px", top: "4px", fontFamily: "'Geist Mono',monospace", fontSize: "9px", color: "#6E6E69" }}>
                  badge
                </span>
                <span style={{ position: "absolute", inset: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "3px", fontFamily: "'Geist Mono',monospace", fontWeight: "400", letterSpacing: "0", fontSize: "9px", color: "#6E6E69", textAlign: "center", lineHeight: "1.3" }}>
                  <span>
                    ○ Available
                  </span>
                  <span style={{ fontSize: "13px", color: "#3C3C38" }}>
                    2026
                  </span>
                  <span>
                    open to work
                  </span>
                </span>
                {" "}
              </a>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "10px", borderTop: "1px solid #0B0B0B59", position: "relative", outline: "1px dashed #0B0B0B59", outlineOffset: "2px", color: "#6E6E69" }}>
                <span style={{ fontFamily: "'Geist Mono',monospace", fontWeight: "400", letterSpacing: "0", fontSize: "26px", lineHeight: "1", color: "#3C3C38" }}>
                  −28%
                </span>
                <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9px", fontFamily: "'Geist Mono',monospace", fontWeight: "400", letterSpacing: "0", fontSize: "9px", textTransform: "none" }}>
                  Task completion
                  <br />
                  time
                </span>
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "10px", borderTop: "1px solid #0B0B0B59", position: "relative", outline: "1px dashed #0B0B0B59", outlineOffset: "2px", color: "#6E6E69" }}>
                <span style={{ fontFamily: "'Geist Mono',monospace", fontWeight: "400", letterSpacing: "0", fontSize: "26px", lineHeight: "1", color: "#3C3C38" }}>
                  −35%
                </span>
                <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9px", fontFamily: "'Geist Mono',monospace", fontWeight: "400", letterSpacing: "0", fontSize: "9px", textTransform: "none" }}>
                  Design‑to‑dev
                  <br />
                  handoff
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <a href="mailto:aayushipatel2002@gmail.com" style={{ height: "52px", boxSizing: "border-box", padding: "0 18px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "transparent", color: "#3C3C38", textDecoration: "none", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "11px", outline: "1px dashed #0B0B0B59", position: "relative" }}>
              <span style={{ position: "absolute", left: "4px", top: "4px", fontFamily: "'Geist Mono',monospace", fontSize: "9px", color: "#6E6E69" }}>
                CTA · primary
              </span>
              <span style={{ fontFamily: "'Geist Mono',monospace", fontWeight: "400", letterSpacing: "0", fontSize: "12px", textTransform: "none" }}>
                [ Contact now ]
              </span>
              {" "}
              <span style={{ display: "block", width: "14px" }}>
                <svg width="14" height="14" viewBox="0 0 100 100" style={{ display: "block" }}>
                  <path d="M14 14 L84 84 M84 34 L84 84 L34 84" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="square"></path>
                </svg>
              </span>
            </a>
            {" "}
            <div style={{ margin: "6px -20px 0", height: "52px", overflow: "hidden", whiteSpace: "nowrap", background: "transparent", color: "transparent", display: "flex", alignItems: "center", borderTop: "1px dashed #0B0B0B59" }}>
              {" "}
              <div style={{ display: "inline-flex", animation: "mq 30s linear infinite", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "11.5px", letterSpacing: ".06em" }}>
                <span style={{ paddingRight: "32px" }}>
                  {"User research "}
                  <span style={{ color: "transparent" }}>
                    /
                  </span>
                  {" Design systems "}
                  <span style={{ color: "transparent" }}>
                    /
                  </span>
                  {" Prototyping "}
                  <span style={{ color: "transparent" }}>
                    /
                  </span>
                  {" Usability testing "}
                  <span style={{ color: "transparent" }}>
                    /
                  </span>
                  {" Enterprise "}
                  <span style={{ color: "transparent" }}>
                    /
                  </span>
                  {" E‑commerce "}
                  <span style={{ color: "transparent" }}>
                    /
                  </span>
                  {" Ed‑tech "}
                  <span style={{ color: "transparent" }}>
                    /
                  </span>
                </span>
                <span style={{ paddingRight: "32px" }}>
                  {"User research "}
                  <span style={{ color: "transparent" }}>
                    /
                  </span>
                  {" Design systems "}
                  <span style={{ color: "transparent" }}>
                    /
                  </span>
                  {" Prototyping "}
                  <span style={{ color: "transparent" }}>
                    /
                  </span>
                  {" Usability testing "}
                  <span style={{ color: "transparent" }}>
                    /
                  </span>
                  {" Enterprise "}
                  <span style={{ color: "transparent" }}>
                    /
                  </span>
                  {" E‑commerce "}
                  <span style={{ color: "transparent" }}>
                    /
                  </span>
                  {" Ed‑tech "}
                  <span style={{ color: "transparent" }}>
                    /
                  </span>
                </span>
              </div>
              {" "}
            </div>
          </div>
        </div>
        {" "}
        <div style={{ gridArea: "1 / 1", minWidth: "0", position: "relative", clipPath: `inset(0 0 ${v.mSeamBottom ?? ""} 0)` }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "14px 20px 0", background: "#FCEB3F" }}>
            {" "}
            <div style={{ height: "1px", background: "#0B0B0B" }}></div>
            {" "}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
              {" "}
              <a href="index.html" style={{ color: "#0B0B0B", textDecoration: "none" }}>
                Aayushi Patel
                <br />
                Product Designer
              </a>
              {" "}
              <div style={{ display: "flex", gap: "14px" }}>
                <a href="#work" style={{ color: "#0B0B0B", textDecoration: "none" }}>
                  Work
                </a>
                <a href="#about" style={{ color: "#0B0B0B", textDecoration: "none" }}>
                  About
                </a>
                <a href="resume.pdf" target="_blank" style={{ color: "#0B0B0B", textDecoration: "none" }}>
                  CV {"↗\uFE0E"}
                </a>
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", paddingTop: "0" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
                Since 2020
                <br />
                Halifax, Canada
              </span>
              <span style={{ display: "block", opacity: "1" }}>
                <svg width="54" height="54" viewBox="0 0 100 100" style={{ display: "block" }}>
                  <path d="M14 14 L84 84 M84 34 L84 84 L34 84" fill="none" stroke="#0B0B0B" strokeWidth="7" strokeLinecap="square"></path>
                </svg>
              </span>
            </div>
            {" "}
            <div style={{ position: "relative" }}>
              {" "}
              <svg width="330" height="120" viewBox="0 0 560 210" style={{ position: "absolute", left: "30px", top: "70px", pointerEvents: "none", overflow: "visible", opacity: "1" }}>
                <ellipse cx="280" cy="105" rx="278" ry="92" fill="none" stroke="#0B0B0B" strokeWidth="1" transform="rotate(-6 280 105)"></ellipse>
              </svg>
              {" "}
              <h1 style={{ position: "relative", margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "64px", lineHeight: ".9" }}>
                Innovate
                <br />
                {"with "}
                <span style={{ fontStyle: "italic" }}>
                  purpose
                </span>
              </h1>
              {" "}
            </div>
            {" "}
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.45", letterSpacing: "-.01em", maxWidth: "30ch" }}>
              Designing products that turn complex problems into clear, human experiences.
            </p>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {" "}
              <div style={{ position: "relative", height: "200px", background: "#E9DA2E" }}>
                <ImageSlot id="v9d-portraitWide" shape="rect" placeholder="Aayushi Patel giving a talk" />
              </div>
              {" "}
              <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px" }}>
                <span>
                  Fig. 01 — Aayushi
                </span>
                <span>
                  2026
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr) minmax(0,1fr)", gap: "16px", alignItems: "end" }}>
              {" "}
              <a href="mailto:aayushipatel2002@gmail.com" aria-label="Open to work — email Aayushi" style={{ position: "relative", width: "96px", height: "96px", display: "block", color: "#0B0B0B", textDecoration: "none" }}>
                {" "}
                <div style={{ position: "absolute", inset: "0", animation: "spin 36s linear infinite" }}>
                  <svg viewBox="0 0 128 128" width="96" height="96" style={{ display: "block", overflow: "visible" }}>
                    <defs>
                      <path id="m9d-ring" d="M64,64 m-52,0 a52,52 0 1,1 104,0 a52,52 0 1,1 -104,0"></path>
                    </defs>
                    <circle cx="64" cy="64" r="63.5" fill="none" stroke="#0B0B0B" strokeWidth="1"></circle>
                    <circle cx="64" cy="64" r="41" fill="none" stroke="#0B0B0B" strokeOpacity=".35" strokeWidth="1" strokeDasharray="1 3"></circle>
                    <text style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "8.4px", letterSpacing: "2.2px" }} fill="#0B0B0B">
                      <textPath href="#m9d-ring">
                        {"OPEN TO WORK · 2026 · CANADA · FULL‑TIME · "}
                      </textPath>
                    </text>
                    <circle cx="64" cy="0.5" r="3.5" fill="#E5322B"></circle>
                  </svg>
                </div>
                {" "}
                <span style={{ position: "absolute", inset: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "5px", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "8.5px" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2DB34A", boxShadow: "0 0 0 3px #2DB34A33", animation: "pulse 1.6s ease-in-out infinite" }}></span>
                    Available
                  </span>
                  <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontStyle: "italic", fontSize: "20px", lineHeight: "1", letterSpacing: "-.04em" }}>
                    2026
                  </span>
                </span>
                {" "}
              </a>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "10px", borderTop: "1px solid #0B0B0B" }}>
                <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "34px", lineHeight: ".85" }}>
                  −28%
                </span>
                <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9px" }}>
                  Task completion
                  <br />
                  time
                </span>
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "10px", borderTop: "1px solid #0B0B0B" }}>
                <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "34px", lineHeight: ".85" }}>
                  −35%
                </span>
                <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9px" }}>
                  Design‑to‑dev
                  <br />
                  handoff
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <a href="mailto:aayushipatel2002@gmail.com" style={{ height: "52px", boxSizing: "border-box", padding: "0 18px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#0B0B0B", color: "#FCEB3F", textDecoration: "none", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "11px" }}>
              {"Contact now "}
              <span style={{ display: "block", width: "14px" }}>
                <svg width="14" height="14" viewBox="0 0 100 100" style={{ display: "block" }}>
                  <path d="M14 14 L84 84 M84 34 L84 84 L34 84" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="square"></path>
                </svg>
              </span>
            </a>
            {" "}
            <div style={{ margin: "6px -20px 0", height: "52px", overflow: "hidden", whiteSpace: "nowrap", background: "#0B0B0B", color: "#EFEFEC", display: "flex", alignItems: "center" }}>
              {" "}
              <div style={{ display: "inline-flex", animation: "mq 30s linear infinite", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "11.5px", letterSpacing: ".06em" }}>
                <span style={{ paddingRight: "32px" }}>
                  {"User research "}
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
                  {" Usability testing "}
                  <span style={{ color: "#FCEB3F" }}>
                    /
                  </span>
                  {" Enterprise "}
                  <span style={{ color: "#FCEB3F" }}>
                    /
                  </span>
                  {" E‑commerce "}
                  <span style={{ color: "#FCEB3F" }}>
                    /
                  </span>
                  {" Ed‑tech "}
                  <span style={{ color: "#FCEB3F" }}>
                    /
                  </span>
                </span>
                <span style={{ paddingRight: "32px" }}>
                  {"User research "}
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
                  {" Usability testing "}
                  <span style={{ color: "#FCEB3F" }}>
                    /
                  </span>
                  {" Enterprise "}
                  <span style={{ color: "#FCEB3F" }}>
                    /
                  </span>
                  {" E‑commerce "}
                  <span style={{ color: "#FCEB3F" }}>
                    /
                  </span>
                  {" Ed‑tech "}
                  <span style={{ color: "#FCEB3F" }}>
                    /
                  </span>
                </span>
              </div>
              {" "}
            </div>
          </div>
        </div>
        {" "}
        <div onPointerDown={v.onMSeamDown} style={{ position: "absolute", left: "0", right: "0", top: v.mSeamTop, height: "44px", marginTop: "-22px", cursor: "ns-resize", touchAction: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {" "}
          <span style={{ position: "absolute", left: "0", right: "0", top: "50%", height: "1px", background: "#0B0B0B" }}></span>
          {" "}
          <span style={{ position: "relative", width: "48px", height: "48px", borderRadius: "50%", background: "#0B0B0B", color: "#FCEB3F", display: "grid", placeItems: "center", fontSize: "16px" }}>
            ⇅
          </span>
          {" "}
          <span style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", padding: "5px 9px", background: "#FFFFFF", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px" }}>
            Polish ↑ / Thinking ↓
          </span>
          {" "}
        </div>
      </section>
      {" "}
      <section id="work" style={{ padding: "66px 16px" }}>
        {" "}
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px", alignItems: "end", paddingBottom: "22px", marginBottom: "22px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "53px", lineHeight: ".95", color: "#0B0B0B" }}>
            {"Selected work, "}
            <span style={{ fontStyle: "italic" }}>
              crafted with care
            </span>
          </h2>
          {" "}
          <p style={{ margin: "0", fontSize: "13px", lineHeight: "1.5" }}>
            Three case studies across creative operations, subscriptions and product design — each one starts with research and ends with a measured outcome.
          </p>
          {" "}
        </div>
        {" "}
        <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0 0", marginBottom: "20px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", flexWrap: "wrap" }}>
          <span>
            Case studies
          </span>
          <span>
            03-2025/2026
          </span>
        </div>
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {" "}
            {(v.folders9d || []).map((f, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <article style={{ minWidth: "0", display: "flex", flexDirection: "column", gap: "14px", padding: "10px 10px 12px", borderRadius: "20px", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 24px 40px -28px rgba(0,0,0,.25)" }}>
                  {" "}
                  <div style={{ position: "relative", aspectRatio: "1.6", borderRadius: "14px", overflow: "hidden", background: "#EDEDEA" }}>
                    {" "}
                    <ImageSlot id={`v9d-${f?.key ?? ""}`} shape="rect" placeholder={f?.placeholder} />
                    {" "}
                    <span style={{ position: "absolute", left: "10px", top: "10px", padding: "6px 11px", borderRadius: "999px", background: "rgba(255,255,255,.85)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", fontSize: "11.5px", fontWeight: "500", color: "#0B0B0B", pointerEvents: "none" }}>
                      {show(f?.tag1)}
                    </span>
                    <span style={{ position: "absolute", right: "10px", top: "10px", padding: "6px 11px", borderRadius: "999px", background: "rgba(11,11,11,.55)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", fontSize: "12px", fontWeight: "500", color: "#FFFFFF" }}>
                      {"Case "}{show(f?.num)}
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "0 8px" }}>
                    {" "}
                    <span style={{ fontSize: "12px", color: "#6E6E69" }}>
                      {show(f?.tags)}{" · "}{show(f?.year)}
                    </span>
                    {" "}
                    <h3 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "36px", lineHeight: ".95", color: "#0B0B0B" }}>
                      {show(f?.title)}
                    </h3>
                    {" "}
                    <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.45", color: "#3C3C38" }}>
                      {show(f?.desc)}
                    </p>
                    {" "}
                  </div>
                  {" "}
                  <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "6px" }}>
                    {" "}
                    <div style={{ padding: "12px", borderRadius: "12px", background: "#F3F3F1", display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9px", color: "#6E6E69" }}>
                        Outcome
                      </span>
                      <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "15px", lineHeight: "1.2", letterSpacing: "-.02em", color: "#0B0B0B" }}>
                        {show(f?.metric)}
                      </span>
                    </div>
                    {" "}
                    <div style={{ padding: "12px", borderRadius: "12px", background: "#F3F3F1", display: "flex", flexDirection: "column", gap: "6px" }}>
                      <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9px", color: "#6E6E69" }}>
                        Role
                      </span>
                      <span style={{ fontSize: "13px", fontWeight: "500", lineHeight: "1.3", color: "#0B0B0B" }}>
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
                  <div style={{ padding: "12px 14px", borderRadius: "12px", background: "#F3F3F1", display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "9px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69" }}>What I learned</span>
                    <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontStyle: "italic", fontSize: "15px", lineHeight: "1.3", letterSpacing: "-.02em", color: "#0B0B0B" }}>{show(f?.rcInsight)}</span>
                  </div>
                  {" "}
                  <a href={f?.href} style={{ height: "52px", padding: "0 8px 0 20px", borderRadius: "999px", background: "#0B0B0B", color: "#FFFFFF", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "14.5px", fontWeight: "500" }}>
                    Read the case study
                    <span style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#FFFFFF", color: "#0B0B0B", display: "grid", placeItems: "center" }}>
                      <svg width="13" height="13" viewBox="0 0 100 100" style={{ display: "block" }}>
                        <path d="M14 14 L84 84 M84 34 L84 84 L34 84" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="square"></path>
                      </svg>
                    </span>
                  </a>
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
      </section>
      {" "}
      <section id="about" style={{ position: "relative", margin: "0 20px", background: "#F6F3EC", padding: "20px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "20px", overflow: "hidden" }}>
        {" "}
        <div style={{ position: "absolute", left: "-140px", top: "-120px", width: "100%", height: "310px", borderRadius: "50%", background: "radial-gradient(circle at 40% 45%, #E5322B 0%, #F2761F 30%, #FCEB3F 55%, rgba(246,243,236,0) 72%)", filter: "blur(40px)", opacity: ".9", pointerEvents: "none" }}></div>
        {" "}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "18px", padding: "20px 16px 16px 20px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "45px", lineHeight: ".95", color: "#0B0B0B" }}>
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
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "12px", minHeight: "322px" }}>
          {" "}
          <div style={{ flex: "1", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "12px" }}>
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
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "33px", lineHeight: "1", color: "#0B0B0B", overflowWrap: "anywhere" }}>
                {show(v.cur9d?.title)}
              </span>
              {" "}
              <span style={{ fontFamily: "'Geist',sans-serif", fontSize: "15.5px", lineHeight: "1.6", letterSpacing: "-.005em", maxWidth: "44ch", color: "#3C3C38" }}>
                {show(v.cur9d?.body)}
              </span>
              {" "}
              {v.cur9d?.cta ? (
              <a className="mh0" href={v.cur9d?.href} target={v.cur9d?.target} onClick={v.cur9d?.onAct} style={{ marginTop: "auto", alignSelf: "flex-start", height: "48px", padding: "0 8px 0 20px", borderRadius: "999px", background: "#0B0B0B", color: "#FFFFFF", textDecoration: "none", display: "flex", alignItems: "center", gap: "16px", fontFamily: "'Geist',sans-serif", fontSize: "14px", fontWeight: "500" }}>
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
      <footer style={{ marginTop: "66px", background: "#FCEB3F", color: "#0B0B0B", padding: "14px 20px 28px", display: "flex", flexDirection: "column", gap: "18px" }}>
        {" "}
        <div style={{ borderTop: "1px solid #0B0B0B", paddingTop: "10px", display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: "16px", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          {" "}
          <span style={{ gridColumn: "auto" }}>
            Let’s connect today
          </span>
          <span style={{ gridColumn: "auto" }}>
            Freelance · Full‑time
            <br />
            Collaborations
          </span>
          <span style={{ gridColumn: "auto" }}>
            Halifax, Canada
          </span>
          <span style={{ gridColumn: "auto", textAlign: "right" }}>
            © 2026
          </span>
          {" "}
        </div>
        {" "}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "18px", flexWrap: "wrap" }}>
          {" "}
          <a className="mh1" href="mailto:aayushipatel2002@gmail.com" style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "28px", lineHeight: "1", maxWidth: "100%", overflowWrap: "anywhere", color: "#0B0B0B", textDecoration: "none" }}>
            aayushipatel2002@
            <span style={{ fontStyle: "italic" }}>
              gmail.com
            </span>
          </a>
          {" "}
          <a className="mh2" href="mailto:aayushipatel2002@gmail.com" style={{ flex: "none", width: "132px", height: "132px", borderRadius: "50%", border: "1px solid #0B0B0B", boxSizing: "border-box", padding: "0", display: "grid", placeItems: "center", textAlign: "center", color: "#0B0B0B", textDecoration: "none", fontFamily: "'Geist',sans-serif", fontWeight: "500", textTransform: "uppercase", fontSize: "12px", lineHeight: "1.2", letterSpacing: "0" }}>
            <span style={{ display: "block" }}>
              Contact
              <br />
              now
            </span>
          </a>
          {" "}
        </div>
        {" "}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
          {" "}
          <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "80px", lineHeight: ".86", letterSpacing: "-.06em" }}>
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
            <a href="index.html" style={{ color: "#0B0B0B" }}>
              Behance {"↗\uFE0E"}
            </a>
            <span>
              03 Case Studies — 06 Years
            </span>
          </div>
          {" "}
        </div>
        {" "}
      </footer>
    </div>
  );
}
