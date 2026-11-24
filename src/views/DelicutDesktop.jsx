/* eslint-disable */
// Delicut page — desktop layout. Generated from the Claude Design board 13a, then hand-tuned.
import React from 'react';
import ImageSlot from '../components/ImageSlot.jsx';
import { css, show } from '../lib/template.js';

export default function DelicutDesktop({ v }) {
  return (
    <div style={{ background: "#EFEFEC", color: "#0B0B0B", fontFamily: "'Geist',sans-serif" }}>
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
            Case study 01 / 03
            <br />
            Delicut
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
          <svg width="560" height="170" viewBox="0 0 760 230" style={{ position: "absolute", left: "180px", top: "105.35px", pointerEvents: "none", overflow: "visible" }}>
            <ellipse cx="380" cy="115" rx="378" ry="100" fill="none" stroke="#0B0B0B" strokeWidth="1" transform="rotate(-5 380 115)"></ellipse>
          </svg>
          {" "}
          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "20px" }}>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
              Delicut · Meal subscription · UAE · 2025
            </span>
            {" "}
            <h1 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "64px", lineHeight: ".98" }}>
              {"Delicut’s meal plan subscription — designed for how customers "}
              <span style={{ fontStyle: "italic" }}>
                really behave.
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
              Subscription UX, onboarding, IA, delivery management, mobile, design QA
            </span>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", paddingTop: "2px" }}>
              Timeline
            </span>
            <span>
              4 months · 2025
            </span>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", paddingTop: "2px" }}>
              Team
            </span>
            <span>
              {"Design, client stakeholders, product & engineering"}
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div style={{ position: "relative", height: "560px", margin: "0 -40px", background: "#E9DA2E", overflow: "hidden" }}>
          {" "}
          <img src="Mockups/Delicut/Banner.webp" alt="Delicut app home screen on a phone" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          {" "}
          <span style={{ position: "absolute", left: "40px", bottom: "20px", padding: "8px 13px", borderRadius: "999px", background: "rgba(255,255,255,.82)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", fontSize: "12.5px", fontWeight: "500" }}>
            {"Fig. 01 — Calorie summary & upcoming meals"}
          </span>
          {" "}
          <a href="https://delicut.ae/" target="_blank" style={{ position: "absolute", right: "40px", bottom: "20px", height: "44px", padding: "0 8px 0 18px", borderRadius: "999px", background: "#0B0B0B", color: "#FFFFFF", textDecoration: "none", display: "flex", alignItems: "center", gap: "14px", fontSize: "13.5px", fontWeight: "500" }}>
            {"View live project "}
            <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#FCEB3F", color: "#0B0B0B", display: "grid", placeItems: "center" }}>
              <svg width="12" height="12" viewBox="0 0 100 100" style={{ display: "block" }}>
                <path d="M14 14 L84 84 M84 34 L84 84 L34 84" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="square"></path>
              </svg>
            </span>
          </a>
          {" "}
        </div>
      </header>
      <nav data-sticky style={{ position: "sticky", top: "66px", zIndex: "5", background: "#EFEFEC", borderBottom: "1px solid #0B0B0B1F", padding: "0 40px" }}>
        {" "}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", height: "64px", overflow: "hidden" }}>
          {" "}
          {(v.dlChapters || []).map((c, $index) => (
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
        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
          {" "}
          <div style={{ display: "flex", alignItems: "flex-end", gap: "28px" }}>
            {" "}
            <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "180px", lineHeight: ".78", letterSpacing: "-.07em" }}>
              15k+
            </span>
            {" "}
            <p style={{ margin: "0 0 8px", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "36px", lineHeight: "1.08", letterSpacing: "-.04em", maxWidth: "22ch" }}>
              {"customers across the UAE — and a product that only worked if they did "}
              <span style={{ fontStyle: "italic" }}>
                exactly what we expected.
              </span>
            </p>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
            {" "}
            <div style={{ padding: "24px", borderRadius: "20px", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69" }}>
                When I joined
              </span>
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "28px", lineHeight: "1.05", letterSpacing: "-.04em" }}>
                A strong service.
              </span>
              <span style={{ fontSize: "14.5px", lineHeight: "1.55", color: "#3C3C38" }}>
                Late joins, skipped meals, pauses and address changes had no clear product experience.
              </span>
            </div>
            {" "}
            <div style={{ padding: "24px", borderRadius: "20px", background: "#0B0B0B", color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FCEB3F" }}>
                What I did
              </span>
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "28px", lineHeight: "1.05", letterSpacing: "-.04em" }}>
                {"Mapped the states, "}
                <span style={{ fontStyle: "italic" }}>
                  simplified the rules.
                </span>
              </span>
              <span style={{ fontSize: "14.5px", lineHeight: "1.55", color: "#FFFFFFb3" }}>
                {"Then designed web & mobile flows that respond to where the customer is in their subscription."}
              </span>
            </div>
            {" "}
            <div style={{ padding: "24px", borderRadius: "20px", background: "#FCEB3F", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
                The result
              </span>
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "28px", lineHeight: "1.05", letterSpacing: "-.04em" }}>
                {"A flexible product "}
                <span style={{ fontStyle: "italic" }}>
                  system.
                </span>
              </span>
              <span style={{ fontSize: "14.5px", lineHeight: "1.55" }}>
                Built around real customer behaviour, not the happy path.
              </span>
            </div>
            {" "}
          </div>
          {" "}
        </div>
      </section>
      <section id="overview" style={{ padding: "100px 40px 40px", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            01
          </span>
          <span>
            Overview
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "52px", lineHeight: "1.02" }}>
            {"Ready‑made, macro‑tracked meals. The product had "}
            <span style={{ fontStyle: "italic" }}>
              two jobs.
            </span>
          </h2>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "12px", alignItems: "stretch" }}>
            {" "}
            <div style={{ padding: "28px", borderRadius: "24px", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
                Job 01 · Website
              </span>
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "40px", lineHeight: ".98" }}>
                {"Choose & buy the right plan"}
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#3C3C38" }}>
                Help someone new to structured meal plans pick confidently, based on goals and preferences.
              </span>
            </div>
            {" "}
            <div style={{ display: "grid", placeItems: "center", width: "56px" }}>
              <span style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#0B0B0B", color: "#FCEB3F", display: "grid", placeItems: "center" }}>
                →
              </span>
            </div>
            {" "}
            <div style={{ padding: "28px", borderRadius: "24px", background: "#0B0B0B", color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FCEB3F" }}>
                Job 02 · App — where it got complex
              </span>
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "40px", lineHeight: ".98" }}>
                {"Live with that plan "}
                <span style={{ fontStyle: "italic" }}>
                  every day
                </span>
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#FFFFFFb3" }}>
                Scheduled deliveries, meal changes, skips, cut‑offs — managed through the app.
              </span>
            </div>
            {" "}
          </div>
        </div>
      </section>
      <section id="problem" style={{ padding: "100px 40px 40px", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            02
          </span>
          <span>
            The problem
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "48px", lineHeight: "1.05", maxWidth: "20ch" }}>
            {"The path was clean. "}
            <span style={{ fontStyle: "italic" }}>
              Real customers weren’t.
            </span>
          </h2>
          {" "}
          <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "200px minmax(0,1fr)", gap: "28px", alignItems: "center" }}>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {" "}
                <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69" }}>
                  A · What we designed for
                </span>
                {" "}
                <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "34px", lineHeight: "1", letterSpacing: "-.04em" }}>
                  One straight line.
                </span>
                {" "}
                <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3C3C38" }}>
                  Choose → start → receive → finish.
                </span>
                {" "}
              </div>
              {" "}
              <div style={{ position: "relative", width: "88%", height: "240px", borderRadius: "18px", background: "#FFFFFF url('Mockups/Delicut/Delicut_Original.png') center/contain no-repeat", backgroundOrigin: "content-box", padding: "18px 24px", boxSizing: "border-box", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)" }}>
                {" "}
                <span style={{ position: "absolute", left: "16px", top: "-12px", padding: "6px 11px", borderRadius: "999px", background: "#0B0B0B", color: "#FFFFFF", fontSize: "12px", fontWeight: "600" }}>
                  Original
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ position: "relative", height: "120px" }}>
              {" "}
              <svg width="100%" height="120" viewBox="0 0 1000 120" preserveAspectRatio="none" style={{ position: "absolute", inset: "0", overflow: "visible" }}>
                {" "}
                <path d="M 520 0 L 520 120" fill="none" stroke="#0B0B0B" strokeWidth="1" strokeDasharray="3 5" vectorEffect="non-scaling-stroke"></path>
                {" "}
                <path d="M 520 0 C 520 70, 760 40, 780 120" fill="none" stroke="#E5322B" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                {" "}
              </svg>
              {" "}
              <span style={{ position: "absolute", left: "calc(52% - 210px)", top: "46px", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69" }}>
                Expected path ↓
              </span>
              {" "}
              <span style={{ position: "absolute", left: "calc(66% + 8px)", top: "30px", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
                …then real life happened {"↘\uFE0E"}
              </span>
              {" "}
            </div>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "200px minmax(0,1fr)", gap: "28px", alignItems: "center" }}>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {" "}
                <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
                  B · What customers did
                </span>
                {" "}
                <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "34px", lineHeight: "1", letterSpacing: "-.04em" }}>
                  {"Loops, detours & "}
                  <span style={{ fontStyle: "italic" }}>
                    returns.
                  </span>
                </span>
                {" "}
                <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3C3C38" }}>
                  Each detour is a subscription state the app didn’t yet have an answer for.
                </span>
                {" "}
              </div>
              {" "}
              <div style={{ position: "relative", width: "88%", padding: "28px 0 28px 0" }}>
                {" "}
                <span className="dh9" style={{ position: "absolute", left: "14%", top: "-2px", zIndex: "2", display: "flex", alignItems: "center", gap: "8px", padding: "9px 13px", borderRadius: "999px", background: "#E5322B", color: "#FFFFFF", fontSize: "13px", fontWeight: "500", letterSpacing: "-.01em", transform: "rotate(-4deg)", boxShadow: "0 10px 24px -10px rgba(229,50,43,.6)", transition: "transform .4s cubic-bezier(.3,1.3,.4,1)" }}>
                  <span style={{ fontSize: "10px", opacity: ".75" }}>
                    01
                  </span>
                  Joined late
                </span>
                {" "}
                <span className="dh9" style={{ position: "absolute", left: "44%", top: "-6px", zIndex: "2", display: "flex", alignItems: "center", gap: "8px", padding: "9px 13px", borderRadius: "999px", background: "#E5322B", color: "#FFFFFF", fontSize: "13px", fontWeight: "500", letterSpacing: "-.01em", transform: "rotate(3deg)", boxShadow: "0 10px 24px -10px rgba(229,50,43,.6)", transition: "transform .4s cubic-bezier(.3,1.3,.4,1)" }}>
                  <span style={{ fontSize: "10px", opacity: ".75" }}>
                    02
                  </span>
                  Skipped meals
                </span>
                {" "}
                <span className="dh9" style={{ position: "absolute", right: "-10px", top: "14px", zIndex: "2", display: "flex", alignItems: "center", gap: "8px", padding: "9px 13px", borderRadius: "999px", background: "#E5322B", color: "#FFFFFF", fontSize: "13px", fontWeight: "500", letterSpacing: "-.01em", transform: "rotate(5deg)", boxShadow: "0 10px 24px -10px rgba(229,50,43,.6)", transition: "transform .4s cubic-bezier(.3,1.3,.4,1)" }}>
                  <span style={{ fontSize: "10px", opacity: ".75" }}>
                    03
                  </span>
                  Paused days
                </span>
                {" "}
                <span className="dh9" style={{ position: "absolute", left: "10%", bottom: "4px", zIndex: "2", display: "flex", alignItems: "center", gap: "8px", padding: "9px 13px", borderRadius: "999px", background: "#E5322B", color: "#FFFFFF", fontSize: "13px", fontWeight: "500", letterSpacing: "-.01em", transform: "rotate(2deg)", boxShadow: "0 10px 24px -10px rgba(229,50,43,.6)", transition: "transform .4s cubic-bezier(.3,1.3,.4,1)" }}>
                  <span style={{ fontSize: "10px", opacity: ".75" }}>
                    04
                  </span>
                  Changed address
                </span>
                {" "}
                <span className="dh9" style={{ position: "absolute", right: "12%", bottom: "0", zIndex: "2", display: "flex", alignItems: "center", gap: "8px", padding: "9px 13px", borderRadius: "999px", background: "#E5322B", color: "#FFFFFF", fontSize: "13px", fontWeight: "500", letterSpacing: "-.01em", transform: "rotate(-3deg)", boxShadow: "0 10px 24px -10px rgba(229,50,43,.6)", transition: "transform .4s cubic-bezier(.3,1.3,.4,1)" }}>
                  <span style={{ fontSize: "10px", opacity: ".75" }}>
                    05
                  </span>
                  Came back
                </span>
                {" "}
                <div style={{ position: "relative", height: "240px", borderRadius: "18px", background: "#FFFFFF url('Mockups/Delicut/Delicut_Real.png') center/contain no-repeat", backgroundOrigin: "content-box", padding: "18px 24px", boxSizing: "border-box", outline: "2px solid #E5322B", outlineOffset: "6px", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)" }}>
                  {" "}
                  <span style={{ position: "absolute", left: "18px", top: "-12px", padding: "6px 11px", borderRadius: "999px", background: "#E5322B", color: "#FFFFFF", fontSize: "12px", fontWeight: "600" }}>
                    Real
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <blockquote style={{ margin: "0", paddingTop: "28px", borderTop: "1px solid #0B0B0B", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "44px", lineHeight: "1.05" }}>
            {"“What should the home screen do in "}
            <span style={{ fontStyle: "italic" }}>
              every possible state
            </span>
            {" of a subscription?”"}
          </blockquote>
          {" "}
          <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#3C3C38", maxWidth: "60ch" }}>
            The challenge: make these states clear without making the app feel complicated.
          </p>
        </div>
      </section>
      <section id="goals" style={{ padding: "100px 40px 40px", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            03
          </span>
          <span>
            Goals
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {" "}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: "4px" }}>
            <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "48px", lineHeight: "1.05" }}>
              {"Every user goal had a "}
              <span style={{ fontStyle: "italic" }}>
                business twin.
              </span>
            </h2>
          </div>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {" "}
            {(v.dlGoals || []).map((g, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <div style={{ display: "grid", gridTemplateColumns: "56px 1fr 44px 1fr", gap: "16px", alignItems: "center", padding: "20px 22px", borderRadius: "18px", background: "#FFFFFF", color: "#0B0B0B" }}>
                  {" "}
                  <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "36px", lineHeight: ".9", letterSpacing: "-.05em" }}>
                    {show(g?.n)}
                  </span>
                  {" "}
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69" }}>
                      User goal
                    </span>
                    <span style={{ fontSize: "16.5px", lineHeight: "1.4", letterSpacing: "-.01em" }}>
                      {show(g?.u)}
                    </span>
                  </div>
                  {" "}
                  <span style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#EFEFEC", color: "#0B0B0B", display: "grid", placeItems: "center", fontSize: "14px" }}>
                    ⇄
                  </span>
                  {" "}
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69" }}>
                      Business goal
                    </span>
                    <span style={{ fontSize: "16.5px", lineHeight: "1.4", letterSpacing: "-.01em" }}>
                      {show(g?.b)}
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </React.Fragment>
            ))}
            {" "}
          </div>
        </div>
      </section>
      <section id="process" style={{ padding: "100px 40px 40px", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            04
          </span>
          <span>
            Design process
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "48px", lineHeight: "1.05" }}>
            {"I started by looking at "}
            <span style={{ fontStyle: "italic" }}>
              where users were coming from.
            </span>
          </h2>
          {" "}
          <div style={{ position: "relative", padding: "32px 28px", borderRadius: "24px", background: "#FCEB3F", overflow: "hidden" }}>
            {" "}
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "8px" }}>
              {" "}
              {(v.dlPath || []).map((p, $index) => (
                <React.Fragment key={$index}>
                  {" "}
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "18px", borderRadius: "16px", background: p?.bg, color: p?.fg, minHeight: "120px" }}>
                    {" "}
                    <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: p?.k }}>
                      {show(p?.n)}{" · "}{show(p?.where)}
                    </span>
                    {" "}
                    <span style={{ fontSize: "17px", fontWeight: "600", letterSpacing: "-.02em", lineHeight: "1.2" }}>
                      {show(p?.t)}
                    </span>
                    {" "}
                  </div>
                  {" "}
                </React.Fragment>
              ))}
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
            {" "}
            {(v.dlKnow || []).map((k, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <div style={{ padding: "18px 0 0", borderTop: "1px solid #0B0B0B", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
                    {show(k?.n)}
                  </span>
                  <span style={{ fontSize: "15.5px", lineHeight: "1.45" }}>
                    {show(k?.t)}
                  </span>
                </div>
                {" "}
              </React.Fragment>
            ))}
            {" "}
          </div>
          {" "}
          <div style={{ padding: "26px 30px", borderRadius: "22px", background: "#0B0B0B", color: "#FFFFFF", display: "grid", gridTemplateColumns: "auto 1fr", gap: "28px", alignItems: "center" }}>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FCEB3F" }}>
              Design
              <br />
              decision
            </span>
            <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "30px", lineHeight: "1.12", letterSpacing: "-.04em" }}>
              {"Treat the app as the next step in the same customer journey — "}
              <span style={{ fontStyle: "italic" }}>
                not a separate product.
              </span>
            </span>
          </div>
        </div>
      </section>
      <section id="onboarding" style={{ padding: "100px 40px 40px", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            05
          </span>
          <span>
            Onboarding
          </span>
        </div>
        {/* Heading + what it collects on top; below, the phone sits beside the onboarding screens, with the design decision under them. Sized to fit one fold. */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", minWidth: "0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)", gap: "40px", alignItems: "end" }}>
            <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "32px", lineHeight: "1.05" }}>
              {"Set the app up around the user — "}
              <span style={{ fontStyle: "italic" }}>
                without it feeling like a long form.
              </span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69" }}>
                What it collects
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {(v.dlOnb || []).map((o, $index) => (
                  <React.Fragment key={$index}>
                    <span style={{ display: "flex", alignItems: "center", gap: "7px", padding: "7px 12px", borderRadius: "999px", background: "#FFFFFF", fontSize: "13px" }}>
                      <span style={{ fontSize: "10px", color: "#E5322B" }}>
                        {show(o?.n)}
                      </span>
                      {show(o?.t)}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "212px minmax(0,1fr)", gap: "36px", alignItems: "center" }}>
            <div style={{ width: "212px", height: "458px", flex: "none", borderRadius: "36px", background: "#0B0B0B", padding: "8px", boxSizing: "border-box", boxShadow: "0 40px 80px -40px rgba(0,0,0,.55)" }}>
              <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "29px", overflow: "hidden", background: "#FFFFFF" }}>
                <video src="Videos/Delicut/Onboarding-screen.mp4" autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}></video>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", minWidth: "0" }}>
              <div style={{ borderRadius: "22px", overflow: "hidden", background: "#F9F4ED", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -36px rgba(0,0,0,.22)" }}>
                <img src="Mockups/Delicut/Onboarding%20Elements.webp" alt="Onboarding screens: activity level, height, weight and goal pace" style={{ display: "block", width: "100%", height: "auto" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.25fr)", gap: "16px", alignItems: "stretch" }}>
                <p style={{ margin: "0", alignSelf: "center", fontSize: "14.5px", lineHeight: "1.5", color: "#3C3C38" }}>
                  If the plan hasn’t started yet, users don’t land on an empty dashboard — they see when it starts, when meals are assigned and when the first delivery arrives.
                </p>
                <div style={{ padding: "16px 20px", borderRadius: "18px", background: "#0B0B0B", color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FCEB3F" }}>
                    Design decision
                  </span>
                  <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", fontSize: "19px", lineHeight: "1.15", letterSpacing: "-.03em" }}>
                    {"The end of onboarding needed to explain "}
                    <span style={{ fontStyle: "italic" }}>
                      what happens next
                    </span>
                    {" — not just confirm setup was complete."}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="states" style={{ padding: "100px 40px 40px", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            06
          </span>
          <span>
            Mapping the system
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {" "}
          <div style={{ display: "flex", alignItems: "flex-end", gap: "28px" }}>
            {" "}
            <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "120px", lineHeight: ".78", letterSpacing: "-.07em" }}>
              27
            </span>
            {" "}
            <h2 style={{ margin: "0 0 8px", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "34px", lineHeight: "1.05", maxWidth: "20ch" }}>
              {"home & delivery states, mapped "}
              <span style={{ fontStyle: "italic" }}>
                before any screen.
              </span>
            </h2>
            {" "}
          </div>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69", marginRight: "6px" }}>
              Across
            </span>
            {" "}
            {(v.dlAxes || []).map((a, $index) => (
              <React.Fragment key={$index}>
                <span style={{ padding: "10px 14px", borderRadius: "999px", background: "#0B0B0B", color: "#FFFFFF", fontSize: "14px" }}>
                  {show(a)}
                </span>
              </React.Fragment>
            ))}
            {" "}
          </div>
          {" "}
          <div style={{ position: "relative", height: "370px", borderRadius: "20px", overflow: "hidden", padding: "24px 24px 0", boxSizing: "border-box", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)" }}>
            <div role="img" aria-label="Table of home and delivery states" style={{ height: "100%", background: "url('Mockups/Delicut/Delicut%20States%20Table.png') top center/100% auto no-repeat" }}></div>
            <div aria-hidden="true" style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: "160px", background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,.85) 60%, #FFFFFF 100%)", pointerEvents: "none" }}></div>
          </div>
        </div>
      </section>
      <section id="day" style={{ margin: "100px 40px 0", padding: "48px", borderRadius: "28px", background: "#0B0B0B", color: "#FFFFFF" }}>
        {" "}
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px" }}>
          {" "}
          <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #FFFFFF", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
            <span style={{ color: "#FCEB3F" }}>
              07
            </span>
            <span>
              Time‑based pattern
            </span>
          </div>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {" "}
            <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "52px", lineHeight: "1" }}>
              {"Same meal card. "}
              <span style={{ fontStyle: "italic" }}>
                Different actions,
              </span>
              {" depending on the day you’re looking at."}
            </h2>
            {" "}
            {/* Scroll story: the phone stays pinned while the three days scroll past beside it; the video follows the day in view. */}
            <div style={{ display: "grid", gridTemplateColumns: "232px minmax(0,1fr)", gap: "56px", alignItems: "start" }}>
              {" "}
              <div style={{ position: "sticky", top: v.dlPhoneTop, width: "232px", height: "480px", borderRadius: "36px", background: "#0B0B0B", padding: "8px", boxSizing: "border-box", boxShadow: "0 0 0 1px #FFFFFF1F, 0 40px 80px -40px rgba(0,0,0,.55)" }}>
                <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "28px", overflow: "hidden", background: "#FFFFFF" }}>
                  {(v.dlDays || []).map((d, $index) => (
                    <React.Fragment key={$index}>
                      <video src={d?.vid} ref={d?.ref} onEnded={d?.onEnd} muted playsInline preload="auto" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: d?.op, transition: "opacity .5s" }}></video>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {" "}
                {(v.dlDays || []).map((d, $index) => (
                  <React.Fragment key={$index}>
                    <div data-dlstep={$index} style={{ minHeight: "440px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px", opacity: d?.stepOp, transition: "opacity .45s" }}>
                      {" "}
                      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                        <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FCEB3F", marginRight: "4px" }}>
                          {show(d?.n)}
                        </span>
                        <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", padding: "6px 10px", borderRadius: "999px", background: "#FFFFFF1A" }}>
                          {show(d?.rel)}
                        </span>
                        <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", padding: "6px 10px", borderRadius: "999px", background: "#FCEB3F", color: "#0B0B0B" }}>
                          {show(d?.badge)}
                        </span>
                      </div>
                      {" "}
                      <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", fontSize: "64px", lineHeight: ".9", letterSpacing: "-.06em" }}>
                        {show(d?.t)}
                      </span>
                      {" "}
                      <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", color: "#FFFFFFcc", maxWidth: "46ch" }}>
                        {show(d?.d)}
                      </p>
                      {" "}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {(d?.acts || []).map((a, k) => (
                          <span key={k} style={{ padding: "10px 14px", borderRadius: "999px", border: "1px solid #FFFFFF33", fontSize: "14px" }}>
                            {show(a)}
                          </span>
                        ))}
                      </div>
                      {" "}
                    </div>
                  </React.Fragment>
                ))}
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ padding: "22px 26px", borderRadius: "20px", background: "#FCEB3F", color: "#0B0B0B", display: "grid", gridTemplateColumns: "auto 1fr", gap: "28px", alignItems: "center" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
                Design
                <br />
                decision
              </span>
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "28px", lineHeight: "1.12", letterSpacing: "-.04em" }}>
                {"Meal information stays familiar — "}
                <span style={{ fontStyle: "italic" }}>
                  the actions change with time.
                </span>
              </span>
            </div>
            {" "}
          </div>
          {" "}
        </div>
      </section>
      <section id="patterns" style={{ padding: "100px 40px 40px", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            08
          </span>
          <span>
            Key interaction patterns
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "44px", lineHeight: "1.05" }}>
            {"Two small patterns that remove "}
            <span style={{ fontStyle: "italic" }}>
              dead ends.
            </span>
          </h2>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {" "}
            {(v.dlPatterns || []).map((p, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <div style={{ height: "452px", borderRadius: "24px", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)", overflow: "hidden", display: "grid", gridTemplateColumns: "auto minmax(0,1fr)" }}>
                  {" "}
                  {/* the phone screen fills the card's height; text sits beside it */}
                  <div style={{ padding: "16px", background: "#EFEFEC", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                    <img className="dha" src={p?.src} alt={p?.t} style={{ display: "block", height: "420px", width: "auto", maxWidth: "none", borderRadius: "18px", boxShadow: "0 1px 2px rgba(0,0,0,.06), 0 18px 34px -20px rgba(0,0,0,.35)", transform: "scale(1)", transition: "transform .6s cubic-bezier(.3,.9,.3,1)" }} />
                  </div>
                  {" "}
                  <div style={{ padding: "26px 22px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "12px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
                        {show(p?.n)}
                      </span>
                      <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", fontSize: "30px", lineHeight: "1", letterSpacing: "-.04em" }}>
                        {show(p?.t)}
                      </span>
                    </div>
                    <span style={{ fontSize: "14.5px", lineHeight: "1.55", color: "#3C3C38" }}>
                      {show(p?.d)}
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </React.Fragment>
            ))}
            {" "}
          </div>
        </div>
      </section>
      <section id="expiry" style={{ padding: "100px 40px 40px", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            09
          </span>
          <span>
            Expiry flow
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "44px", lineHeight: "1" }}>
            {"Expiry was a "}
            <span style={{ fontStyle: "italic" }}>
              journey,
            </span>
            {" not one screen."}
          </h2>
          {" "}
          {/* Stages play on their own: each card's bar fills over a few seconds, then the next stage takes over, looping. Hover pauses; a click jumps. */}
          <div onMouseEnter={v.dlExpPause} onMouseLeave={v.dlExpResume} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", padding: "6px", borderRadius: "22px", background: "#E2E2DE" }}>
            {" "}
            {(v.dlExp || []).map((e, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <button type="button" onClick={e?.onPick} style={{ all: "unset", cursor: "pointer", position: "relative", display: "flex", alignItems: "center", gap: "12px", padding: "20px 16px 14px", borderRadius: "16px", background: e?.cardBg, color: e?.cardFg, boxShadow: e?.cardSh, transition: "background .4s, color .4s, box-shadow .4s" }}>
                  <span aria-hidden="true" style={{ position: "absolute", left: "16px", right: "16px", top: "9px", height: "3px", borderRadius: "999px", background: e?.track, overflow: "hidden", transition: "background .4s" }}>
                    <span key={e?.runKey} onAnimationEnd={e?.onEnd} style={{ display: "block", height: "100%", borderRadius: "999px", background: e?.fillC, width: e?.fill, animation: e?.anim, animationPlayState: v.dlExpPlay }}></span>
                  </span>
                  {" "}
                  <span style={{ flex: "none", width: "34px", height: "34px", borderRadius: "50%", background: e?.bg, color: e?.fg, border: `1.5px solid ${e?.ring ?? ""}`, boxSizing: "border-box", display: "grid", placeItems: "center", fontSize: "12px", fontWeight: "600", transition: "all .4s" }}>
                    {show(e?.n)}
                  </span>
                  {" "}
                  <span style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
                    <span style={{ fontSize: "15px", fontWeight: "600", letterSpacing: "-.01em" }}>
                      {show(e?.t)}
                    </span>
                    <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px", color: e?.hintC, transition: "color .4s" }}>
                      {show(e?.hint)}
                    </span>
                  </span>
                </button>
                {" "}
              </React.Fragment>
            ))}
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,7fr) minmax(0,5fr)", gap: "12px" }}>
            {" "}
            <div style={{ height: "276px", borderRadius: "20px", background: "#FFFFFF url('Mockups/Delicut/Delicut%20Expiry%20Screen.png') center/contain no-repeat", backgroundOrigin: "content-box", padding: "14px", boxSizing: "border-box", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)" }}></div>
            {" "}
            <div style={{ padding: "24px", borderRadius: "20px", background: "#FCEB3F", display: "flex", flexDirection: "column", gap: "12px" }}>
              {" "}
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
                {show(v.dlExpCur?.n)}{" · State"}
              </span>
              {" "}
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "40px", lineHeight: ".95", letterSpacing: "-.05em" }}>
                {show(v.dlExpCur?.t)}
              </span>
              {" "}
              <span style={{ fontSize: "15px", lineHeight: "1.5" }}>
                {show(v.dlExpCur?.d)}
              </span>
              {" "}
              <span style={{ marginTop: "auto", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", paddingTop: "12px", borderTop: "1px solid #0B0B0B" }}>
                {"Home shows → "}{show(v.dlExpCur?.shows)}
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ padding: "18px 26px", borderRadius: "20px", background: "#0B0B0B", color: "#FFFFFF", display: "grid", gridTemplateColumns: "auto 1fr", gap: "28px", alignItems: "center" }}>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FCEB3F" }}>
              Design
              <br />
              decision
            </span>
            <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "22px", lineHeight: "1.15", letterSpacing: "-.03em" }}>
              {"When the plan ends, meal‑level actions go. Familiar plan details stay — with a "}
              <span style={{ fontStyle: "italic" }}>
                strong renewal path
              </span>
              {" back in."}
            </span>
          </div>
        </div>
      </section>
      <section id="learned" style={{ margin: "100px 40px 0", padding: "56px 48px", borderRadius: "28px", background: "#FCEB3F", position: "relative", overflow: "hidden" }}>
        {" "}
        <svg width="900" height="300" viewBox="0 0 900 300" style={{ position: "absolute", right: "-120px", top: "40px", pointerEvents: "none" }}>
          <ellipse cx="450" cy="150" rx="440" ry="120" fill="none" stroke="#0B0B0B" strokeWidth="1" transform="rotate(-6 450 150)"></ellipse>
        </svg>
        {" "}
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,9fr)", gap: "40px" }}>
          {" "}
          <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
            <span style={{ color: "#E5322B" }}>
              10
            </span>
            <span>
              What I learned
            </span>
          </div>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {" "}
            <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "60px", lineHeight: ".98" }}>
              {"Complexity doesn’t disappear because the interface looks simple. "}
              <span style={{ fontStyle: "italic" }}>
                Someone still has to understand it.
              </span>
            </h2>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {" "}
              <div style={{ padding: "24px", borderRadius: "18px", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69" }}>
                  Before drawing the final screen
                </span>
                <span style={{ fontSize: "15.5px", lineHeight: "1.55" }}>
                  Mapping states, finding conflicting rules, asking what should happen next, documenting decisions, connecting one flow to another.
                </span>
              </div>
              {" "}
              <div style={{ padding: "24px", borderRadius: "18px", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69" }}>
                  When a project changes quickly
                </span>
                <span style={{ fontSize: "15.5px", lineHeight: "1.55" }}>
                  I can’t stop every new idea — but I can help the team see which solve a real problem, which create new ones, and which should wait.
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <blockquote style={{ margin: "0", paddingTop: "28px", borderTop: "1px solid #0B0B0B", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "40px", lineHeight: "1.05" }}>
              {"“My job is not only to make the interface clear. It’s to help make "}
              <span style={{ fontStyle: "italic" }}>
                the product itself clearer.
              </span>
              ”
            </blockquote>
            {" "}
          </div>
          {" "}
        </div>
      </section>
      <footer style={{ marginTop: "100px", background: "#0B0B0B", color: "#FFFFFF", padding: "56px 40px 28px", display: "flex", flexDirection: "column", gap: "48px" }}>
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
            <a href="mailto:aayushipatel2002@gmail.com?subject=Delicut%20case%20study" style={{ height: "56px", padding: "0 10px 0 24px", borderRadius: "999px", background: "#FCEB3F", color: "#0B0B0B", textDecoration: "none", display: "flex", alignItems: "center", gap: "18px", fontSize: "15px", fontWeight: "500" }}>
              {"Get in touch "}
              <span style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#0B0B0B", color: "#FCEB3F", display: "grid", placeItems: "center" }}>
                <svg width="14" height="14" viewBox="0 0 100 100" style={{ display: "block" }}>
                  <path d="M14 14 L84 84 M84 34 L84 84 L34 84" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="square"></path>
                </svg>
              </span>
            </a>
            {" "}
            <a className="dh8" href="project-darkroast.html" style={{ height: "56px", padding: "0 24px", borderRadius: "999px", background: "#FFFFFF14", color: "#FFFFFF", textDecoration: "none", display: "flex", alignItems: "center", fontSize: "15px", fontWeight: "500" }}>
              Next: DarkRoast →
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
            Case study 01 / 03 — Delicut
          </span>
          <span>
            © 2026 Aayushi Patel
          </span>
        </div>
      </footer>
    </div>
  );
}
