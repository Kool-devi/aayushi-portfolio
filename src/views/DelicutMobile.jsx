/* eslint-disable */
// Delicut page — mobile layout. Generated from the Claude Design board 13a, then hand-tuned.
import React from 'react';
import ImageSlot from '../components/ImageSlot.jsx';
import { css, show } from '../lib/template.js';

export default function DelicutMobile({ v }) {
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
              Case study 01 / 03 · Delicut
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
          <svg width="252" height="77" viewBox="0 0 760 230" style={{ position: "absolute", left: "180px", top: "111.3px", pointerEvents: "none", overflow: "visible" }}>
            <ellipse cx="380" cy="115" rx="378" ry="100" fill="none" stroke="#0B0B0B" strokeWidth="1" transform="rotate(-5 380 115)"></ellipse>
          </svg>
          {" "}
          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "20px" }}>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
              Delicut · Meal subscription · UAE · 2025
            </span>
            {" "}
            <h1 style={{ margin: "0", maxWidth: "348px" /* keep the phone line breaks so the ellipse stays on its words */, fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "42px", lineHeight: ".98" }}>
              {"Designing Delicut’s meal app for customers who "}
              <span style={{ fontStyle: "italic" }}>
                don’t follow the plan
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
              Product Designer
            </span>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", paddingTop: "2px" }}>
              Focus
            </span>
            <span>
              Subscription flows, onboarding and delivery management on web and mobile
            </span>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", paddingTop: "2px" }}>
              Timeline
            </span>
            <span>
              4 months, 2025
            </span>
            {" "}
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", paddingTop: "2px" }}>
              Team
            </span>
            <span>
              {"Me and my design team, with Delicut’s product and engineering teams"}
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div style={{ position: "relative", height: "280px", margin: "0 -20px", background: "#E9DA2E", overflow: "hidden" }}>
          {" "}
          <img src="Mockups/Delicut/Banner-mobile.webp" alt="Delicut app home screen with daily calories and upcoming meals" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          {" "}
          <span style={{ position: "absolute", left: "16px", top: "16px", padding: "8px 13px", borderRadius: "999px", background: "rgba(255,255,255,.82)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", fontSize: "12.5px", fontWeight: "500" }}>
            {"Fig. 01 · Home screen with the day’s calories and upcoming meals"}
          </span>
          {" "}
          <a href="https://delicut.ae/" target="_blank" style={{ position: "absolute", right: "40px", bottom: "20px", height: "44px", padding: "0 8px 0 18px", borderRadius: "999px", background: "#0B0B0B", color: "#FFFFFF", textDecoration: "none", display: "flex", alignItems: "center", gap: "14px", fontSize: "13.5px", fontWeight: "500" }}>
            {"View live project "}
            <span style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#FCEB3F", color: "#0B0B0B", display: "grid", placeItems: "center" }}>
              <svg width="12" height="12" viewBox="0 0 100 100" style={{ display: "block" }}>
                <path d="M14 86 L84 16 M34 16 L84 16 L84 66" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="square"></path>
              </svg>
            </span>
          </a>
          {" "}
        </div>
      </header>
      <nav data-sticky style={{ position: "sticky", top: "70px", zIndex: "5", background: "#EFEFEC", borderBottom: "1px solid #0B0B0B1F", padding: "0 20px" }}>
        {" "}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", height: "64px", overflowX: "auto", scrollbarWidth: "none" }}>
          {" "}
          {(v.dlChapters || []).map((c, $index) => (
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
      <section id="tldr" style={{ padding: "61px 20px 50px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }}>
        {" "}
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            00
          </span>
          <span>
            TL;DR
          </span>
        </div>
        {" "}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {" "}
          <div style={{ display: "flex", alignItems: "flex-start", gap: "18px" }}>
            {" "}
            <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "94px", lineHeight: ".78", letterSpacing: "-.07em", paddingTop: "4px" }}>
              15k+
            </span>
            {" "}
            <p style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "21px", lineHeight: "1.08", letterSpacing: "-.04em", maxWidth: "22ch" }}>
              {"customers across the UAE, and the app only worked if they "}
              <span style={{ fontStyle: "italic" }}>
                followed their plan exactly.
              </span>
            </p>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "12px" }}>
            {" "}
            <div style={{ padding: "24px", borderRadius: "20px", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69" }}>
                When I joined
              </span>
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "26px", lineHeight: "1.05", letterSpacing: "-.04em" }}>
                The service worked, but the app didn’t keep up
              </span>
              <span style={{ fontSize: "14.5px", lineHeight: "1.55", color: "#3C3C38" }}>
                Late joins, skipped meals, paused days and address changes had no clear screens.
              </span>
            </div>
            {" "}
            <div style={{ padding: "24px", borderRadius: "20px", background: "#0B0B0B", color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FCEB3F" }}>
                What I did
              </span>
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "26px", lineHeight: "1.05", letterSpacing: "-.04em" }}>
                {"Mapped 27 states "}
                <span style={{ fontStyle: "italic" }}>
                  before designing screens
                </span>
              </span>
              <span style={{ fontSize: "14.5px", lineHeight: "1.55", color: "#FFFFFFb3" }}>
                {"Then I designed web and mobile flows that change based on where the customer is in their plan."}
              </span>
            </div>
            {" "}
            <div style={{ padding: "24px", borderRadius: "20px", background: "#FCEB3F", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
                The result
              </span>
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "26px", lineHeight: "1.05", letterSpacing: "-.04em" }}>
                {"An app built for "}
                <span style={{ fontStyle: "italic" }}>
                  real customer habits
                </span>
              </span>
              <span style={{ fontSize: "14.5px", lineHeight: "1.55" }}>
                Customers could skip days and change meals on their own, without calling support.
              </span>
            </div>
            {" "}
          </div>
          {" "}
        </div>
      </section>
      <section id="overview" style={{ padding: "55px 20px 20px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            01
          </span>
          <span>
            Overview
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "37px", lineHeight: "1.02" }}>
            {"Delicut delivers ready‑made meals with calories and macros counted. The product had "}
            <span style={{ fontStyle: "italic" }}>
              two jobs.
            </span>
          </h2>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "12px", alignItems: "stretch" }}>
            {" "}
            <div style={{ padding: "28px", borderRadius: "24px", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
                Job 01 · Website
              </span>
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "31px", lineHeight: ".98" }}>
                {"Help people pick a plan"}
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#3C3C38" }}>
                Help someone new to meal plans choose one based on their goals and food preferences.
              </span>
            </div>
            {" "}
            <div style={{ display: "flex", justifyContent: "center", alignSelf: "stretch", width: "100%" }}>
              <span style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#0B0B0B", color: "#FCEB3F", display: "grid", placeItems: "center" }}>
                ↓
              </span>
            </div>
            {" "}
            <div style={{ padding: "28px", borderRadius: "24px", background: "#0B0B0B", color: "#FFFFFF", display: "flex", flexDirection: "column", gap: "14px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FCEB3F" }}>
                Job 02 · App, the harder part
              </span>
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "31px", lineHeight: ".98" }}>
                {"Help them live with it "}
                <span style={{ fontStyle: "italic" }}>
                  every day
                </span>
              </span>
              <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#FFFFFFb3" }}>
                Deliveries, meal swaps, skips and cut‑off times, all handled in the app.
              </span>
            </div>
            {" "}
          </div>
        </div>
      </section>
      <section id="problem" style={{ padding: "55px 20px 20px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            02
          </span>
          <span>
            Problem
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "35px", lineHeight: "1.05", maxWidth: "20ch" }}>
            {"The plan was designed as a straight line. "}
            <span style={{ fontStyle: "italic" }}>
              Customers didn’t follow it.
            </span>
          </h2>
          {" "}
          <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px", alignItems: "center" }}>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {" "}
                <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69" }}>
                  A · What we designed for
                </span>
                {" "}
                <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "29px", lineHeight: "1", letterSpacing: "-.04em" }}>
                  One straight path
                </span>
                {" "}
                <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3C3C38" }}>
                  Pick a plan, start, get meals, finish.
                </span>
                {" "}
              </div>
              {" "}
              <div style={{ position: "relative", width: "100%", height: "240px", borderRadius: "18px", background: "#FFFFFF url('Mockups/Delicut/Delicut_Original.png') center/contain no-repeat", backgroundOrigin: "content-box", padding: "18px 24px", boxSizing: "border-box", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)" }}>
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
              <span style={{ position: "absolute", right: "calc(48% + 10px)", top: "46px", whiteSpace: "nowrap", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69" }}>
                Expected path ↓
              </span>
              {" "}
              <span style={{ position: "absolute", left: "calc(52% + 10px)", right: "0", top: "4px", textAlign: "right", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
                What actually happened {"↘\uFE0E"}
              </span>
              {" "}
            </div>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px", alignItems: "center" }}>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {" "}
                <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
                  B · What customers did
                </span>
                {" "}
                <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "29px", lineHeight: "1", letterSpacing: "-.04em" }}>
                  {"Detours and "}
                  <span style={{ fontStyle: "italic" }}>
                    restarts
                  </span>
                </span>
                {" "}
                <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3C3C38" }}>
                  Every detour was a situation the app had no screen for.
                </span>
                {" "}
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {" "}
                <div style={{ position: "relative", borderRadius: "18px", background: "#FFFFFF", border: "1.5px solid #E5322B", padding: "14px", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 20px 40px -28px rgba(0,0,0,.25)" }}>
                  {" "}
                  <span style={{ position: "absolute", left: "14px", top: "-11px", padding: "4px 10px", borderRadius: "999px", background: "#E5322B", color: "#FFFFFF", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", fontSize: "9.5px" }}>
                    Real journey map
                  </span>
                  {" "}
                  <div role="img" aria-label="Real customer journey with loops and detours" style={{ height: "220px", background: "url('Mockups/Delicut/Delicut_Real.png') center/contain no-repeat" }}></div>
                  {" "}
                </div>
                {" "}
                <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69", paddingTop: "6px" }}>
                  The 5 detours on the map
                </span>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", borderRadius: "16px", background: "#FFFFFF", overflow: "hidden" }}>
                  {" "}
                  <div style={{ display: "grid", gridTemplateColumns: "30px minmax(0,1fr)", gap: "12px", alignItems: "center", padding: "13px 14px" }}>
                    <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#E5322B", color: "#FFFFFF", display: "grid", placeItems: "center", fontSize: "11px", fontWeight: "600" }}>
                      01
                    </span>
                    <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "15px", fontWeight: "600", letterSpacing: "-.01em", color: "#0B0B0B" }}>
                        Joined late
                      </span>
                      <span style={{ fontSize: "13px", lineHeight: "1.35", color: "#6E6E69" }}>
                        Started mid‑week, after the plan was set
                      </span>
                    </span>
                  </div>
                  {" "}
                  <div style={{ display: "grid", gridTemplateColumns: "30px minmax(0,1fr)", gap: "12px", alignItems: "center", padding: "13px 14px", borderTop: "1px solid #0B0B0B12" }}>
                    <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#E5322B", color: "#FFFFFF", display: "grid", placeItems: "center", fontSize: "11px", fontWeight: "600" }}>
                      02
                    </span>
                    <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "15px", fontWeight: "600", letterSpacing: "-.01em", color: "#0B0B0B" }}>
                        Skipped meals
                      </span>
                      <span style={{ fontSize: "13px", lineHeight: "1.35", color: "#6E6E69" }}>
                        Missed days without ending the plan
                      </span>
                    </span>
                  </div>
                  {" "}
                  <div style={{ display: "grid", gridTemplateColumns: "30px minmax(0,1fr)", gap: "12px", alignItems: "center", padding: "13px 14px", borderTop: "1px solid #0B0B0B12" }}>
                    <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#E5322B", color: "#FFFFFF", display: "grid", placeItems: "center", fontSize: "11px", fontWeight: "600" }}>
                      03
                    </span>
                    <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "15px", fontWeight: "600", letterSpacing: "-.01em", color: "#0B0B0B" }}>
                        Paused days
                      </span>
                      <span style={{ fontSize: "13px", lineHeight: "1.35", color: "#6E6E69" }}>
                        Stopped deliveries for a while
                      </span>
                    </span>
                  </div>
                  {" "}
                  <div style={{ display: "grid", gridTemplateColumns: "30px minmax(0,1fr)", gap: "12px", alignItems: "center", padding: "13px 14px", borderTop: "1px solid #0B0B0B12" }}>
                    <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#E5322B", color: "#FFFFFF", display: "grid", placeItems: "center", fontSize: "11px", fontWeight: "600" }}>
                      04
                    </span>
                    <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "15px", fontWeight: "600", letterSpacing: "-.01em", color: "#0B0B0B" }}>
                        Changed address
                      </span>
                      <span style={{ fontSize: "13px", lineHeight: "1.35", color: "#6E6E69" }}>
                        Moved delivery mid‑plan
                      </span>
                    </span>
                  </div>
                  {" "}
                  <div style={{ display: "grid", gridTemplateColumns: "30px minmax(0,1fr)", gap: "12px", alignItems: "center", padding: "13px 14px", borderTop: "1px solid #0B0B0B12" }}>
                    <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#E5322B", color: "#FFFFFF", display: "grid", placeItems: "center", fontSize: "11px", fontWeight: "600" }}>
                      05
                    </span>
                    <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "15px", fontWeight: "600", letterSpacing: "-.01em", color: "#0B0B0B" }}>
                        Came back after ending
                      </span>
                      <span style={{ fontSize: "13px", lineHeight: "1.35", color: "#6E6E69" }}>
                        Returned after the plan ended
                      </span>
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <blockquote style={{ margin: "0", paddingTop: "28px", borderTop: "1px solid #0B0B0B", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "33px", lineHeight: "1.05" }}>
            {"“What should the home screen show in "}
            <span style={{ fontStyle: "italic" }}>
              every possible state
            </span>
            {" of a plan?”"}
          </blockquote>
          {" "}
          <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#3C3C38", maxWidth: "60ch" }}>
            The challenge was to handle all of this without making the app feel complicated.
          </p>
        </div>
      </section>
      <section id="goals" style={{ padding: "55px 16px 20px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            03
          </span>
          <span>
            Goals
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {" "}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: "4px", flexWrap: "wrap" }}>
            <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "35px", lineHeight: "1.05" }}>
              {"Each customer goal had a "}
              <span style={{ fontStyle: "italic" }}>
                matching business goal
              </span>
            </h2>
          </div>
          {" "}
          <p style={{ margin: "-6px 0 4px", fontSize: "14px", lineHeight: "1.5", color: "#3C3C38" }}>
            Each card pairs what the customer wanted with what the business needed from the same change.
          </p>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {" "}
            {(v.dlGoals || []).map((g, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", borderRadius: "18px", background: "#FFFFFF", overflow: "hidden", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 18px 34px -26px rgba(0,0,0,.25)" }}>
                  {" "}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "18px 18px 16px" }}>
                    {" "}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "9.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
                        Customer goal
                      </span>
                      <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontSize: "22px", lineHeight: "1", letterSpacing: "-.05em", color: "#0B0B0B" }}>
                        {show(g?.n)}
                      </span>
                    </div>
                    {" "}
                    <span style={{ fontSize: "16px", lineHeight: "1.4", letterSpacing: "-.01em", color: "#0B0B0B" }}>
                      {show(g?.u)}
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <div style={{ position: "relative", height: "1px", background: "#0B0B0B14", margin: "0 18px" }}>
                    <span style={{ position: "absolute", left: "50%", top: "-14px", marginLeft: "-14px", width: "28px", height: "28px", borderRadius: "50%", background: "#FCEB3F", display: "grid", placeItems: "center", fontSize: "12px", color: "#0B0B0B" }}>
                      ⇅
                    </span>
                  </div>
                  {" "}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px 18px 18px", background: "#0B0B0B", color: "#FFFFFF", marginTop: "-1px" }}>
                    {" "}
                    <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "9.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FCEB3F" }}>
                      Business goal
                    </span>
                    {" "}
                    <span style={{ fontSize: "15px", lineHeight: "1.45", color: "#FFFFFFdd" }}>
                      {show(g?.b)}
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
        </div>
      </section>
      <section id="process" style={{ padding: "55px 20px 20px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            04
          </span>
          <span>
            Design process
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "35px", lineHeight: "1.05" }}>
            {"I started with "}
            <span style={{ fontStyle: "italic" }}>
              where customers came from before they opened the app
            </span>
          </h2>
          {" "}
          <div style={{ position: "relative", padding: "32px 28px", borderRadius: "24px", background: "#FCEB3F", overflow: "hidden" }}>
            {" "}
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "8px" }}>
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "12px" }}>
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
          <div style={{ padding: "22px 24px", borderRadius: "22px", background: "#0B0B0B", color: "#FFFFFF", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px" }}>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FCEB3F" }}>
              Design decision
            </span>
            <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", fontSize: "25px", lineHeight: "1.15", letterSpacing: "-.04em" }}>
              {"The app should feel like the next step after buying, "}
              <span style={{ fontStyle: "italic" }}>
                not a separate product.
              </span>
            </span>
          </div>
        </div>
      </section>
      <section id="onboarding" style={{ padding: "55px 20px 20px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            05
          </span>
          <span>
            Onboarding
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "35px", lineHeight: "1.05" }}>
            {"Setting up the app around the customer "}
            <span style={{ fontStyle: "italic" }}>
              without it feeling like a long form
            </span>
          </h2>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px", alignItems: "center" }}>
            {" "}
            {/* Real iPhone frame (cut from the 08 pattern screens) over the onboarding video; the video sits under its transparent screen. */}
            <div style={{ position: "relative", width: "244px", aspectRatio: "830 / 1686", flex: "none", filter: "drop-shadow(0 30px 34px rgba(0,0,0,.22))", justifySelf: "center" }}>
              <div style={{ position: "absolute", left: "3.3%", right: "3.3%", top: "1.3%", bottom: "1.3%", borderRadius: "13% / 6.1%", overflow: "hidden", background: "#FFFFFF" }}>
                <video src="Videos/Delicut/Onboarding-screen.mp4" autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "fill" /* whole screen recording, bottom included (it is ~3% taller than the frame's screen) */, display: "block" }}></video>
              </div>
              <img src="Mockups/Delicut/iPhone%20Frame.webp" alt="" aria-hidden="true" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", pointerEvents: "none" }} />
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {" "}
              <img src="Mockups/Delicut/Onboarding%20Elements.webp" alt="Onboarding screens: activity level, height, weight and goal pace" style={{ display: "block", width: "100%", height: "auto", borderRadius: "20px", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)" }} />
              {" "}
              <p style={{ margin: "0", fontSize: "15.5px", lineHeight: "1.55", color: "#3C3C38" }}>
                If the plan hasn’t started yet, customers don’t see an empty home screen. They see when the plan starts and when the first delivery arrives.
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ padding: "22px 24px", borderRadius: "22px", background: "#0B0B0B", color: "#FFFFFF", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px" }}>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FCEB3F" }}>
              Design decision
            </span>
            <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", fontSize: "25px", lineHeight: "1.15", letterSpacing: "-.04em" }}>
              {"The last onboarding screen tells customers "}
              <span style={{ fontStyle: "italic" }}>
                what happens next
              </span>
              {", not just that setup is done."}
            </span>
          </div>
        </div>
      </section>
      <section id="states" style={{ padding: "55px 20px 20px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            06
          </span>
          <span>
            27 states
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {" "}
          <div style={{ display: "flex", alignItems: "flex-end", gap: "18px" }}>
            {" "}
            <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "94px", lineHeight: ".78", letterSpacing: "-.07em" }}>
              27
            </span>
            {" "}
            <h2 style={{ margin: "0 0 8px", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "31px", lineHeight: "1.05", maxWidth: "18ch" }}>
              {"home and delivery states, mapped "}
              <span style={{ fontStyle: "italic" }}>
                before I designed a single screen
              </span>
            </h2>
            {" "}
          </div>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}>
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
          {/* Table zoomed to fill the frame from the top; a fade at the bottom hints at more rows below. */}
          <div style={{ position: "relative", height: "230px", borderRadius: "20px", overflow: "hidden", padding: "14px 6px 0", boxSizing: "border-box", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)" }}>
            <div role="img" aria-label="Table of home and delivery states" style={{ height: "100%", background: "url('Mockups/Delicut/Delicut%20States%20Table.png') top center/100% auto no-repeat" }}></div>
            <div aria-hidden="true" style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: "110px", background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,.85) 60%, #FFFFFF 100%)", pointerEvents: "none" }}></div>
          </div>
        </div>
      </section>
      <section id="day" style={{ margin: "55px 20px 0", padding: "20px", borderRadius: "28px", background: "#0B0B0B", color: "#FFFFFF" }}>
        {" "}
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }}>
          {" "}
          <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #FFFFFF", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
            <span style={{ color: "#FCEB3F" }}>
              07
            </span>
            <span>
              Day pattern
            </span>
          </div>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {" "}
            <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "37px", lineHeight: "1" }}>
              {"The same meal card shows "}
              <span style={{ fontStyle: "italic" }}>
                different actions
              </span>
              {" depending on the day"}
            </h2>
            {" "}
            {/* The three days stack: label, heading, note and actions, then that day's screen. */}
            {(v.dlDays || []).map((d, $index) => (
              <React.Fragment key={$index}>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingTop: $index ? "22px" : "4px", borderTop: $index ? "1px solid #FFFFFF26" : "none" }}>
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
                  <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", fontSize: "44px", lineHeight: ".9", letterSpacing: "-.06em" }}>
                    {show(d?.t)}
                  </span>
                  {" "}
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#FFFFFFcc" }}>
                    {show(d?.d)}
                  </p>
                  {" "}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {(d?.acts || []).map((a, k) => (
                      <span key={k} style={{ padding: "9px 13px", borderRadius: "999px", border: "1px solid #FFFFFF33", fontSize: "13.5px" }}>
                        {show(a)}
                      </span>
                    ))}
                  </div>
                  {" "}
                  {/* Real iPhone frame (same as Onboarding) over the day video */}
                  <div style={{ alignSelf: "center", position: "relative", width: "244px", aspectRatio: "830 / 1686", filter: "drop-shadow(0 30px 40px rgba(0,0,0,.5))" }}>
                    <div style={{ position: "absolute", left: "3.3%", right: "3.3%", top: "1.3%", bottom: "1.3%", borderRadius: "13% / 6.1%", overflow: "hidden", background: "#FFFFFF" }}>
                      <video src={d?.vid} autoPlay muted loop playsInline preload="auto" style={{ width: "100%", height: "100%", objectFit: "fill" /* whole screen recording, bottom included (it is ~3% taller than the frame's screen) */, display: "block" }}></video>
                    </div>
                    <img src="Mockups/Delicut/iPhone%20Frame.webp" alt="" aria-hidden="true" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", pointerEvents: "none" }} />
                  </div>
                  {" "}
                </div>
              </React.Fragment>
            ))}
            {" "}
            <div style={{ padding: "22px 26px", borderRadius: "20px", background: "#FCEB3F", color: "#0B0B0B", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px" }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
                Design decision
              </span>
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "22px", lineHeight: "1.15", letterSpacing: "-.04em" }}>
                {"The meal details stay the same. "}
                <span style={{ fontStyle: "italic" }}>
                  Only the actions change with the day.
                </span>
              </span>
            </div>
            {" "}
          </div>
          {" "}
        </div>
      </section>
      <section id="patterns" style={{ padding: "55px 20px 20px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            08
          </span>
          <span>
            Key UX patterns
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "35px", lineHeight: "1.05" }}>
            {"Two small patterns that stop customers from "}
            <span style={{ fontStyle: "italic" }}>
              hitting a dead end
            </span>
          </h2>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "12px" }}>
            {" "}
            {(v.dlPatterns || []).map((p, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <div style={{ borderRadius: "24px", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(0,0,0,.04), 0 30px 60px -32px rgba(0,0,0,.25)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                  {" "}
                  <div style={{ padding: "18px", background: "#EFEFEC", display: "flex", justifyContent: "center" }}>
                    <img className="mh5" src={p?.src} alt={p?.t} style={{ display: "block", height: "440px", width: "auto", maxWidth: "100%", objectFit: "contain", filter: "drop-shadow(0 18px 22px rgba(0,0,0,.22))", transform: "scale(1)", transition: "transform .6s cubic-bezier(.3,.9,.3,1)" }} />
                  </div>
                  {" "}
                  <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
                      {show(p?.n)}
                    </span>
                    <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "28px", lineHeight: "1", letterSpacing: "-.04em" }}>
                      {show(p?.t)}
                    </span>
                    <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#3C3C38" }}>
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
      <section id="expiry" style={{ padding: "55px 20px 20px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "14px", paddingTop: "10px", borderTop: "1px solid #0B0B0B", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase" }}>
          <span style={{ color: "#E5322B" }}>
            09
          </span>
          <span>
            Expiry
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {" "}
          <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "37px", lineHeight: "1" }}>
            {"Ending a plan took "}
            <span style={{ fontStyle: "italic" }}>
              four stages,
            </span>
            {" not one screen"}
          </h2>
          {" "}
          {/* Stages play on their own: each row's bar fills over a few seconds, then the next stage takes over, looping. A tap jumps. */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "6px", borderRadius: "20px", background: "#E2E2DE" }}>
            {" "}
            {(v.dlExp || []).map((e, $index) => (
              <React.Fragment key={$index}>
                {" "}
                <button type="button" onClick={e?.onPick} style={{ all: "unset", cursor: "pointer", position: "relative", display: "flex", alignItems: "center", gap: "14px", minHeight: "62px", padding: "16px 14px 10px 12px", boxSizing: "border-box", borderRadius: "14px", background: e?.cardBg, color: e?.cardFg, boxShadow: e?.cardSh, transition: "background .4s, color .4s, box-shadow .4s" }}>
                  <span aria-hidden="true" style={{ position: "absolute", left: "14px", right: "14px", top: "7px", height: "3px", borderRadius: "999px", background: e?.track, overflow: "hidden", transition: "background .4s" }}>
                    <span key={e?.runKey} onAnimationEnd={e?.onEnd} style={{ display: "block", height: "100%", borderRadius: "999px", background: e?.fillC, width: e?.fill, animation: e?.anim, animationPlayState: v.dlExpPlay }}></span>
                  </span>
                  {" "}
                  <span style={{ flex: "none", width: "36px", height: "36px", borderRadius: "50%", background: e?.bg, color: e?.fg, border: `1.5px solid ${e?.ring ?? ""}`, boxSizing: "border-box", display: "grid", placeItems: "center", fontSize: "12.5px", fontWeight: "600", transition: "all .4s" }}>
                    {show(e?.n)}
                  </span>
                  {" "}
                  <span style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
                    <span style={{ fontSize: "15px", fontWeight: "600", lineHeight: "1.2", letterSpacing: "-.01em" }}>
                      {show(e?.t)}
                    </span>
                    <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "9.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: e?.hintC, transition: "color .4s" }}>
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
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "12px" }}>
            {" "}
            <div style={{ position: "relative", height: "400px", borderRadius: "20px", background: "#E2E2DE", overflow: "hidden" }}>
              {/* One layer per stage, cross-fading. Single-phone stages sit centred in the same frame that holds two side by side. */}
              {(v.dlExpStages || []).map((st, $index) => (
                <div key={$index} aria-hidden={st?.op ? undefined : "true"} style={{ position: "absolute", inset: "0", padding: "18px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", opacity: st?.op, transition: "opacity .5s" }}>
                  {st?.fallback ? (
                    <img src="Mockups/Delicut/Delicut%20Expiry%20Screen.png" alt="Expiry flow screens" style={{ display: "block", width: "100%", height: "100%", objectFit: "contain" }} />
                  ) : (st?.imgs || []).map((src, k) => (
                    <img key={k} src={src} alt={`${v.dlExpCur?.t ?? ""} screen`} style={{ display: "block", height: "100%", width: "auto", maxWidth: "calc(50% - 6px)", objectFit: "contain", filter: "drop-shadow(0 16px 20px rgba(0,0,0,.2))" }} />
                  ))}
                </div>
              ))}
            </div>
            {" "}
            <div style={{ padding: "28px", borderRadius: "20px", background: "#FCEB3F", display: "flex", flexDirection: "column", gap: "16px" }}>
              {" "}
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#E5322B" }}>
                {show(v.dlExpCur?.n)}{" · State"}
              </span>
              {" "}
              <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "35px", lineHeight: ".95", letterSpacing: "-.05em" }}>
                {show(v.dlExpCur?.t)}
              </span>
              {" "}
              <span style={{ fontSize: "16px", lineHeight: "1.55" }}>
                {show(v.dlExpCur?.d)}
              </span>
              {" "}
              <span style={{ marginTop: "auto", fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", paddingTop: "12px", borderTop: "1px solid #0B0B0B" }}>
                {"Home page shows → "}{show(v.dlExpCur?.shows)}
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ padding: "20px", borderRadius: "22px", background: "#0B0B0B", color: "#FFFFFF", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px" }}>
            <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FCEB3F" }}>
              Design decision
            </span>
            <span style={{ fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "22px", lineHeight: "1.15", letterSpacing: "-.04em" }}>
              {"When a plan ends, meal actions go away. Plan details stay, with an "}
              <span style={{ fontStyle: "italic" }}>
                easy way back in
              </span>
              {"."}
            </span>
          </div>
        </div>
      </section>
      <section id="learned" style={{ margin: "55px 20px 0", padding: "20px 20px", borderRadius: "28px", background: "#FCEB3F", position: "relative", overflow: "hidden" }}>
        {" "}
        <svg width="405" height="135" viewBox="0 0 900 300" style={{ position: "absolute", right: "-120px", top: "40px", pointerEvents: "none" }}>
          <ellipse cx="450" cy="150" rx="440" ry="120" fill="none" stroke="#0B0B0B" strokeWidth="1" transform="rotate(-6 450 150)"></ellipse>
        </svg>
        {" "}
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "18px" }}>
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
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {" "}
            <h2 style={{ margin: "0", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "40px", lineHeight: ".98" }}>
              {"A simple screen still needs someone to understand "}
              <span style={{ fontStyle: "italic" }}>
                the messy rules behind it
              </span>
            </h2>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "12px" }}>
              {" "}
              <div style={{ padding: "24px", borderRadius: "18px", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69" }}>
                  Before the final screens
                </span>
                <span style={{ fontSize: "15.5px", lineHeight: "1.55" }}>
                  Most of my time went into mapping states and sorting out rules that clashed with each other.
                </span>
              </div>
              {" "}
              <div style={{ padding: "24px", borderRadius: "18px", background: "#FFFFFF", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "10.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#6E6E69" }}>
                  When the project changed quickly
                </span>
                <span style={{ fontSize: "15.5px", lineHeight: "1.55" }}>
                  I couldn’t stop every new idea, but I could help the team see which ones solved a real problem and which could wait.
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <blockquote style={{ margin: "0", paddingTop: "28px", borderTop: "1px solid #0B0B0B", fontFamily: "'Funnel Sans',sans-serif", fontWeight: "400", letterSpacing: "-.055em", fontSize: "31px", lineHeight: "1.05" }}>
              {"“When the rules behind a product are clear, "}
              <span style={{ fontStyle: "italic" }}>
                the screens are easy to design.
              </span>
              ”
            </blockquote>
            {" "}
          </div>
          {" "}
        </div>
      </section>
      <footer style={{ marginTop: "55px", background: "#0B0B0B", color: "#FFFFFF", padding: "20px 20px 28px", display: "flex", flexDirection: "column", gap: "18px" }}>
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
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
            {" "}
            <a href="mailto:aayushipatel2002@gmail.com?subject=Delicut%20case%20study" style={{ height: "58px", padding: "0 8px 0 22px", borderRadius: "999px", background: "#FCEB3F", color: "#0B0B0B", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "15.5px", fontWeight: "600" }}>
              {"Get in touch "}
              <span style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#0B0B0B", color: "#FCEB3F", display: "grid", placeItems: "center" }}>
                <svg width="14" height="14" viewBox="0 0 100 100" style={{ display: "block" }}>
                  <path d="M14 14 L84 84 M84 34 L84 84 L34 84" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="square"></path>
                </svg>
              </span>
            </a>
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "10px" }}>
              {" "}
              <a className="mh7" href="project-darkroast.html" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "16px", borderRadius: "16px", background: "#FFFFFF12", border: "1px solid #FFFFFF1F", color: "#FFFFFF", textDecoration: "none", alignItems: "flex-end", textAlign: "right" }}>
                <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: "500", fontSize: "9.5px", lineHeight: "1.35", letterSpacing: ".02em", textTransform: "uppercase", color: "#FFFFFF99" }}>
                  Next case
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "16px", fontWeight: "600", letterSpacing: "-.01em" }}>
                  {"DarkRoast "}
                  <span>
                    →
                  </span>
                </span>
              </a>
              {" "}
            </div>
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
