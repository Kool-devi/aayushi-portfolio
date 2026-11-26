# Portfolio audit: aayushipatel.work

**Date:** 26 November 2026
**What was tested:** the output of `npm run build`, served locally by a small server that behaves like GitHub Pages (it sends `404.html` for missing addresses and supports video range requests). The build matched commit `3d0b1bd`, which is what `main` (the live site) was serving, so the results apply to the live site too.

**Pages:** Home, Delicut, DarkRoast, Attune, the 404 page (opened at a nested missing address, `/some/missing-page`), the DarkRoast autoplay prototype page, the five Attune prototype pages (loaded inside the case study), and the résumé link.

**Widths:** 375, 390, 768, 1024, 1280, 1440 and 1920 px. Every page was screenshotted at the top and again after scrolling to the bottom. There are also full-page captures at 390 and 1440. All screenshots are in `audit-screenshots/`. Names follow `page-width-top|bottom|full.png`, and interaction checks are named `int-*.png`.

**Tools:** Playwright with Chromium (clicks, mouse drags, CDP touch drags, keyboard Tab and arrow keys, clipboard), axe-core 4.11, Lighthouse 13 (mobile and desktop) and cspell for spelling.

**What could not be tested:**
- **Safari (WebKit) and Firefox.** Only Chromium is installed in this environment, so neither browser was tested. Safari matters most, because many recruiters use iPhones and Macs. Please open the site once in Safari on your phone.
- **The live URL.** This environment's network policy blocks `aayushipatel.work`. The locally built files are identical to `main`, so in practice the results are the same.
- **Real network speed.** Lighthouse ran against a local server with no gzip. GitHub Pages compresses HTML, JS and CSS, so the real scores will be a little better than the numbers below, especially "total size".

---

## Summary

The site is in good shape. Across every page and all 7 widths there was **no sideways scrolling or overflow**, **no JavaScript errors** and **no broken internal links or anchors**. Every case-study card, "Read the case study" button and Previous/Next link goes to the right page. Copy Email works and shows "Copied" on every page. Titles, descriptions, canonical links, Open Graph tags, `og:image` files, the sitemap, `robots.txt` and the JSON-LD are all correct, and there are no spelling mistakes.

The problems that matter most:

1. **The résumé link is broken on every page.** `resume.pdf` isn't in the repository because `.gitignore` excludes every PDF at the root.
2. **Attune's phone mockups show a squashed half-width image** while the prototype loads. On a slow connection this is what recruiters see.
3. **On an iPad held sideways (and touch-screen laptops), the home hero can't be scrolled by swiping.** The hero fills the whole screen at that size.
4. **The home hero slider can't be used with the keyboard.**
5. **Several accessibility issues:** no visible focus outline on most buttons, invisible project cards that take keyboard focus, the image viewer doesn't hold focus, and some colours don't meet the contrast standard.

---

## Must fix

| # | Page / size | What's wrong | Screenshot | Fix |
|---|---|---|---|---|
| M1 | Every page, every size | **The Résumé / CV link returns 404.** `resume.pdf` isn't in the repo because `.gitignore` has `/*.pdf`, which excludes every PDF at the root. The links appear in the nav on every page, in "Just ask → Download résumé" and on the 404 page. | n/a | Add an exception `!/resume.pdf` to `.gitignore` (**done**), then **send me your résumé PDF** so I can add it as `resume.pdf`. |
| M2 | Attune, all sizes (Flows section and the Rooms "Final: try swiping" phone) | **The phone shows the start image squashed to half the screen width, with an empty black strip beside it**, until the live prototype finishes loading (about 1 MB per phone). A global style (`img { max-width: 100% }`) is shrinking the 400px-wide start image to fit its container before it gets scaled. | `audit-screenshots/int-attune-1280-flows-poster.png`, `attune-1440-full.png` | Give the start image `max-width: none` in `protoBox()` (**done**). |
| M3 | Home, 1024px and wider **on touch screens** (iPad landscape, touch laptops) | **Swiping on the hero doesn't scroll the page.** The hero is about one screen tall, so a visitor on an iPad in landscape can only scroll by finding the thin marquee strip. This happens because the whole hero section has `touch-action: none` (so the slider can be dragged). Tested by sending touch swipes: the page stayed at scrollY 0. | n/a | Put `touch-action: none` on the drag handle only, so the slider still drags and the rest of the hero scrolls normally (**done**). |
| M4 | Home, desktop and mobile | **The "drag to see the thinking" slider can't be used with the keyboard.** The handle is a plain `div` that you can't Tab to, with no role or arrow-key support. Mouse drag (desktop) and touch drag (mobile) both work, and the thinking notes stay on screen. | `int-home-1280-slider-polished.png`, `-thinking.png`, `-middle.png`, `int-home-390-slider-touchdrag.png` | Make the handle focusable (`tabIndex=0`), give it `role="slider"`, a label and value attributes, and support ← → (desktop) and ↑ ↓ (mobile), plus Home and End (**done**). |

## Should fix

| # | Page / size | What's wrong | Screenshot | Fix |
|---|---|---|---|---|
| S1 | All pages | **No focus outline on most buttons.** They're styled with inline `all: unset`, which wipes out the site's `:focus-visible` outline. This affects carousel tabs and arrows, Copy Email, every "Just ask" topic, the Delicut expiry tabs, the DarkRoast flip cards, workflow, iteration and final-design tabs, the image viewer buttons, and the 404 "4"s. Links do show an outline. | `int-home-1280-focus.png` | Add a site-wide `button:focus-visible` outline that overrides the inline reset. It only appears when using the keyboard (**done**). |
| S2 | Home, desktop | **The two hidden project cards still take keyboard focus.** Tabbing reaches "Read the case study" on all 3 stacked cards, even though only one is visible (the others are at opacity 0). | `int-home-1280-learned-focus-1.png` (focus is on an invisible card) | Mark inactive cards `inert` (**done**). |
| S3 | DarkRoast, all sizes | **The iteration image viewer doesn't manage focus.** When it opens, focus stays on the thumbnail behind it, Tab moves through the page underneath, and focus isn't returned when it closes. Escape, ←, → and the buttons all work. | `int-darkroast-1280-btn13.png` | Move focus to Close on open, keep Tab inside the viewer, and return focus to the thumbnail on close (**done**). |
| S4 | Home, mobile | **A focusable link is hidden from screen readers.** The "thinking" layer is `aria-hidden`, but its wireframe "[ Show my work ]" link can still be tabbed to (axe: *aria-hidden-focus*, serious). | n/a | Take the hidden layer's links out of the tab order (**done**). |
| S5 | Home, desktop | **The nav is read twice.** The polished and thinking halves each have a full nav, so keyboard and screen-reader users get Projects, About, Résumé and Copy Email twice (8 extra Tab stops before the hero). | n/a | Needs a decision, because both halves are partly visible depending on the slider. Suggestion: keep one real nav for assistive tech and mark the other copy decorative. |
| S6 | Case studies + home + 404, all sizes | **Colour contrast below WCAG AA (4.5:1) for small text** (axe, 35 to 95 elements per case study). The main culprits: red `#E5322B` section numbers and labels **on yellow 3.54**, **on cream `#EFEFEC` 3.78** and on white 4.35 (and white on red 4.35). Grey `#6E6E69` on `#EFEFEC` is 4.45 and on `#E2E2DE` 3.95. Inactive carousel-tab numbers `#A8A8A4` are 2.07. The dimmed "not yet active" steps in Delicut Day pattern and Attune Flows are 1.8 to 2.6. | `delicut-1280-top.png`, `attune-1440-full.png` | **Design decision, so I haven't changed it.** A red of `#C8261F` passes on yellow (4.55), cream (4.86) and white (5.6) and looks almost the same. Grey `#62625D` passes everywhere. Dimmed steps could go from about 30% to about 55% opacity. |
| S7 | Mobile (375 to 390) | **Small text.** Nav and meta labels are 9 to 10.6px. The home intro "A few projects I've worked on…" and the "Just ask" hint are 12.6px. The case-study body copy is fine (15 to 17px). | `home-375-top.png` | Design decision. Suggest at least 12px for labels and 15 to 16px for any sentence. |
| S8 | **1024px (iPad landscape)** | **The desktop layout is shrunk to 80% at this width**, so nav and labels are 7.6 to 8.4px and body text is about 11px. It's readable but tiny. | `home-1024-top.png`, `delicut-1024-top.png` | Design decision. Either start the desktop layout at 1100 to 1200px (so 1024 gets the tablet layout) or set a minimum scale. |
| S9 | Mobile, all pages | **Tap targets smaller than 44 × 44px:** the nav links "Work", "About", "CV", "← Back to home" and "Copy Email" are about 14px tall, and the chapter-bar chips are 36px tall. | `delicut-390-top.png` | Enlarge the tap area invisibly with padding plus a matching negative margin, so the look doesn't change. I can do this if you're happy with it. |
| S10 | Attune, all sizes | **Heavy page.** It loads all 5 prototype bundles (5.6 MB) in the background, even if the visitor never scrolls to them. Lighthouse mobile: **Performance 53, LCP 9.9 s** (desktop 83). | n/a | Load each prototype only when its phone comes near the screen, and skip the background prefetch on phones or when Save-Data is on. |
| S11 | Delicut | **About 4 MB of video.** Four MP4s; three use `preload="auto"` on desktop and all autoplay on mobile. `Delicut States Table.png` is **879 KB**. Lighthouse mobile Performance 76, LCP 5.8 s. | n/a | Set `preload="none"` until a video is near the screen, re-encode at a lower bitrate (about 400 to 600 KB each is realistic for these screen recordings), and add poster frames. Convert the table to WebP (quality 90 tested at **93 KB**, about 90% smaller). |
| S12 | All pages | **An unused Google Fonts file blocks rendering.** `base.css` imports Cormorant Garamond and Lora, which no page uses (every visible text uses Geist or Funnel Sans). Lighthouse estimates up to 860 ms of render-blocking on mobile. | n/a | Remove the import (**done**). The look is unchanged. |
| S13 | All pages | **Reduced motion is only partly respected.** Smooth scrolling and the sticky bars honour it, but the endless animations don't: the marquee, the spinning "Open to work" badge, the pulsing dots, the 404 stickers and the 404 spin. Nor do the auto-advancing JS sequences (Delicut expiry steps, DarkRoast workflow, Attune modes, autoplay prototype). | n/a | CSS loops are stopped under `prefers-reduced-motion` (**done**). The JS auto-advance still needs pausing for these visitors (not done yet, because it touches several components). |
| S14 | Home, phones about 412px wide (e.g. Pixel, Moto) | **Layout shift (CLS 0.25):** the portrait block jumps down 61px about 1 s after load, when Funnel Sans arrives and the headline re-wraps. Not seen at 375 or 390. | n/a | Reserve the headline's height, or preload Funnel Sans and use a size-matched fallback font. |
| S15 | Home, Delicut, Attune | **Images below the first screen load immediately.** The 3 home card covers, 9 images on Delicut and 7 on Attune have no `loading="lazy"`. | n/a | Add `loading="lazy"` (**done**). |
| S16 | All pages | **External links open in a new tab without `rel="noopener noreferrer"`.** This affects LinkedIn, Behance, delicut.ae, the résumé and the prototype "Open full screen" link. | n/a | Add `rel="noopener noreferrer"` (**done**). |
| S17 | 404 | **No `<h1>`.** The sticker even says "H1 · 404 · way too big", but the big 404 is made of buttons. | `404-1280-top.png` | Add a visually hidden `<h1>Page not found</h1>` (**done**). |
| S18 | `/archive/…` | **The old site is still live and indexable.** For example `archive/about.html` and `archive/contact.html` contain "Since 2020" and the old LinkedIn URL `linkedin.com/in/aayushi`, and Google could show them. | n/a | **Your call:** add `Disallow: /archive/` to `robots.txt` and a `noindex` tag, or delete the folder. |
| S19 | DarkRoast, mobile | **Two decorative cards are `<button>`s that do nothing** ("Working / Messages and feedback" and "Checking / Brief and project details"). Screen readers announce them as buttons. | n/a | Change them to plain `div`s (**done**). |

## Nice to have

| # | Page / size | What's wrong | Fix |
|---|---|---|---|
| N1 | Home | The hero headline reads as "I turn what users feel**into** what teams**can** build" to search engines and screen readers, because there's no space at the line breaks. | Add a space before each `<br>` (**done**, no visible change). |
| N2 | Home, desktop | The slider starts at 71%, so the polished side's **portrait and the "3 yrs / 15k+" stats are hidden** until someone drags. Most recruiters won't drag. | Design question: should it start further right, or reveal the stats elsewhere? |
| N3 | Home, desktop | At 1280 and 1440 the slider line runs through the dashed "About" nav box, so it's half yellow and half grey. | Small nudge of the start position, or keep the nav above both layers. |
| N4 | Delicut, Attune | Delicut has no "Previous" and Attune has no "Next", so the sequence dead-ends. | Wrap around (Attune → Next: Delicut; Delicut → Previous: Attune). |
| N5 | DarkRoast, mobile | Footer buttons wrap so "Next: Attune →" sits alone on a second row. | Stack the two case links in one row, with Get in touch full width above. |
| N6 | Case studies, mobile | The "Fig. 01 …" caption pill covers the top of the hero product image (most noticeable on Delicut, where it covers the phone). | Move the caption below the image on mobile. |
| N7 | DarkRoast workflow, all sizes | The "Send a brief" and "Reuse past work" labels sit on the ellipse line. | Nudge the labels or the ellipse. |
| N8 | Delicut Day pattern, mobile | Videos that haven't started show the app's first frame (the Delicut splash photo) instead of the meal card being described. | Add a `poster` frame for each. |
| N9 | Home, 1024 touch | "What I learned" appears on hover or focus of "Read the case study". A tap goes straight to the case study, so iPad-landscape visitors never see it. The mobile layout shows it by default, and keyboard focus works. | Optional: show it by default on touch devices. |
| N10 | Home "Just ask" | Topics work with click, hover, tap and Tab, and all 6 panels switch correctly, but there's no up/down arrow-key movement between topics. | Optional. |
| N11 | Home JSON-LD | Valid, with no placeholders, but `sameAs` lists only LinkedIn. | Add the Behance URL and an `image`. |
| N12 | DarkRoast prototype page | No `lang` attribute, no favicon, and an em dash in the `<title>`. | `lang="en"` added (**done**). Favicon and title need a decision. |
| N13 | Attune hero (1440 and wider) | The hand-drawn ellipse cuts through the "Role" row of the meta table. | Nudge the ellipse. |
| N14 | All pages | No `<main>` landmark (axe, moderate). | Wrap page content in `<main>`. |
| N15 | DarkRoast flip cards, home badge | The accessible name doesn't contain the visible text (axe *label-content-name-mismatch*, e.g. the badge reads "Open to work — email Aayushi"). | Start each label with the visible text. |

---

## Interactions checked (all working unless listed above)

| Interaction | Result |
|---|---|
| Home carousel: next and previous arrows, tabs, wrap-around, card heights | Works. All 3 cards are the same height (625px). `int-home-1280-carousel-*.png` |
| Home cards on mobile | Stacked. "What I learned" is visible by default. |
| "What I learned" on keyboard focus (desktop) | Works. `int-home-1280-learned-focus-0.png` |
| "Just ask" (6 topics, desktop and mobile) | Every topic switches the panel. Copy email and Download résumé show their actions (the résumé one goes to the missing PDF, see M1). |
| Anchor links (#work, #about, chapter bars) | Land correctly. The heading isn't hidden under the sticky bars: on case studies the bars hide while scrolling down, and the offset is applied when they show. |
| DarkRoast: autoplay prototype, Open full screen, audit tabs, flip cards (hover on desktop, flat on mobile), workflow steps and arrows, iterations and viewer, final-design tabs and sticky column | All work. The sticky left column stays below the nav and chapter bar at 1024, 1280 and 1920 (`int-darkroast-*-final-*.png`). |
| Delicut: expiry steps (pause on hover), day pattern, chapter bar | Work. |
| Attune: five-step jump links, swipe demo (mouse and touch), safety steps, flows | Work, apart from the squashed start image (M2). |
| Copy Email (every page) | Copies `aayushipatel2002@gmail.com` and shows "Copied". |
| Every mailto | Same address everywhere. |
| LinkedIn | `linkedin.com/in/patelaayushi` on every page that has it (home only). `/in/aayushi` appears only in `/archive/` (S18). |
| Behance | Already points to `behance.net/aayushipatel21/projects` (fixed in an earlier commit). |

## Console and network

- **No JavaScript errors or warnings** on any page at any size.
- The only failed requests: `resume.pdf` (404, see M1), and `blob:` video URLs aborted while scrolling past on Attune (harmless).
- The 404 page correctly returns status 404, and its assets load from nested addresses.

## SEO and link previews (checked from the built HTML, without JavaScript)

| Page | Title (chars) | Description (chars) | Canonical | OG / Twitter | og:image |
|---|---|---|---|---|---|
| Home | Aayushi Patel, Product Designer in Halifax (42) | 138 | ✓ | ✓ | og-home.png 1200×630 ✓ |
| Delicut | Delicut Case Study, Aayushi Patel (33) | 116 | ✓ | ✓ | og-delicut.png ✓ |
| DarkRoast | DarkRoast Case Study, Aayushi Patel (35) | 142 | ✓ | ✓ | og-darkroast.png ✓ |
| Attune | Attune AI Case Study, Aayushi Patel (35) | 137 | ✓ | ✓ | og-attune.png ✓ |
| 404 | Page not found — Aayushi Patel (30) | 64 | none (correct) | none | n/a, `noindex` (correct) |

- Every title and description is unique and within the length limits. `lang="en"` is on every page (but not the prototype page, N12).
- The main content (h1, h2 and body text) is in the HTML before JavaScript runs, inside a `<noscript>` block filled at build time. Google renders JavaScript anyway, so this is a fallback for link-preview bots and no-JS visitors. That's fine.
- Each page has exactly **one h1**, and headings go h1 → h2 → h3 with no skipped levels (the 404 had none, now fixed, S17).
- `sitemap.xml` lists all 4 indexable pages. `robots.txt` allows everything and points to the sitemap.
- The JSON-LD is valid and has no `LINKEDIN_URL_HERE`. Favicon (ico + 32px png) and the 180px apple-touch-icon load. No page is set to `noindex` except the 404.

## Speed (Lighthouse 13, local server without gzip)

Scores are Performance / Accessibility / Best Practices / SEO.

| Page | Mobile before | Mobile **after fixes** | Desktop before | Desktop **after fixes** | Notes |
|---|---|---|---|---|---|
| Home | 87 / 93 / 100 / 100 | **97 / 98** / 100 / 100 | 99 / 92 / 100 / 100 | 99 / 93 / 100 / 100 | CLS went to 0 in the Lighthouse run. S14 can still happen at 412px on a slow font load. |
| Delicut | 76 / 94 / 100 / 100 | 70 / 94 / 100 / 100 | 96 / 94 / 100 / 100 | 95 / 94 / 100 / 100 | LCP about 6 s on mobile, from the videos (S11). |
| DarkRoast | 75 / 94 / 100 / 100 | 81 / 94 / 100 / 100 | 96 / 94 / 100 / 100 | 66* / 94 / 100 / 100 | *See note below. |
| Attune | 53 / 91 / 96 / 100 | 52 / 91 / **100** / 100 | 83 / 91 / 96 / 100 | 85 / 91 / **100** / 100 | Prototypes 5.6 MB (S10). The squashed-image warning is gone (M2). |

\* DarkRoast desktop: the **measured** first paint is the same before and after (844 ms vs 869 ms, observed in the browser). Only Lighthouse's *simulated* slow-connection estimate changed (FCP 0.7 s → 2.7 s) after the extra font stylesheet was removed. Over three runs it was consistent, so it's an artefact of how the simulation orders requests, not something visitors will see. The mobile run of the same page improved (75 → 81). A small run-to-run swing of ±5 points is normal (e.g. Delicut mobile 76 → 70 with no change on that page's critical path).

**Files over 500 KB that pages load:**

| File | Size | Suggestion |
|---|---|---|
| `DarkRoast Prototype Autoplay.html` | 2.8 MB | Fine as is: loads lazily in the iframe. Could split out embedded images. |
| `prototypes/attune-repair.html`, `-refine`, `-reflect`, `-choose-a-mode`, `-resolve` | 1.6, 1.3, 1.0, 0.9, 0.9 MB | Don't prefetch. Load on approach (S10). |
| `Videos/Delicut/3New-screen.mp4`, `Onboarding-screen.mp4`, `2New-screen.mp4`, `4New-screen.mp4` | 1.5, 1.1, 0.9, 0.6 MB | Re-encode (H.264 CRF 28 at 720px tall, or AV1/HEVC), `preload="none"` (S11). |
| `Mockups/Delicut/Delicut States Table.png` | 879 KB | WebP q90 = 93 KB. |

**JavaScript and fonts:** the shared React chunk (`jsx-runtime-*.js`, 215 KB, about 69 KB gzipped) is normal for a React site. About 94 KB of it goes unused on any one page, which is typical. Fonts come from Google Fonts with `display=swap`. The one problem was the unused Cormorant/Lora import (S12).

---

## Copy for you to decide on (report only, nothing changed)

**Em dashes (—) still in the copy**
- Home, above the cards: "03 — 2025 / 2026"
- Case-study footers (desktop): "Case study 01 / 03 — Delicut", "02 / 03 — DarkRoast", "03 / 03 — Attune AI"
- Hero captions: DarkRoast "Fig. 01 — The new Projects page…" and Attune "Fig. 01 — A shared Resolve session…". Delicut uses "Fig. 01 · Home screen…", so the three are also inconsistent.
- Hidden text read by screen readers: badge label "Open to work — email Aayushi", iframe title "Attune — choose a mode prototype"
- 404: page title "Page not found — Aayushi Patel", and "Nothing here either — try "work" or "email"." (shown only when the search finds nothing)
- Prototype page title: "DarkRoast — autoplay prototype"

**Arrows used as text** (arrows that are icons inside round buttons are fine)
- "Résumé ↗", "CV ↗", "LinkedIn ↗", "Behance ↗" (nav and footer)
- "← Aayushi Patel / Back to home", "← Back to home" (case-study header and footer)
- "Next: DarkRoast →", "← Delicut", "Next: Attune →", "← DarkRoast" (case-study footers)
- Home mobile hint "Polish ↑ / Thinking ↓"
- Delicut: "Expected path ↓", "What actually happened ↘", "Home page shows → Meals and delivery controls" (expiry card footer)
- Attune: "Step 01 ↓" … "Step 05 ↓" (five-step cards)
- 404: "tap a 4 → it has feelings", "The finished ones are this way →"

**Decorative dots (·) inside labels**
- Delicut: "Delicut · Meal subscription · UAE · 2025", "Fig. 01 · Home screen…", "Job 01 · Website", "Job 02 · App, the harder part", "A · What we designed for", "B · What customers did", "01 · State", mobile header "Case study 01 / 03 · Delicut"
- DarkRoast: "TL;DR · In one minute", "Autoplay · best viewed on desktop", "4 versions · swipe" (mobile), image viewer "V1 · Project listing · 1 / 8"
- Attune: "AI's job · Listener" (and the other three), "01 · The situation", "02 · What I did", "03 · The result", "● Private" / "●● Shared"
- Home footer: "Freelance · Full‑time · Collaborations"
- 404: "Pokes · 00", "0 pokes · it's shy", "H1 · 404 · way too big", marquee "PAGE NOT FOUND · STILL THINKING · …"
- Home thinking layer (probably intentional wireframe notes): "Portrait · 3:4", "CTA · primary", "H1 · Funnel Sans 400 / 128 · italic on the verb", "portrait · wide crop"

**Placeholders and TODO-looking text**
- 404 sticker: "// TODO: design this page". It reads as a joke, but a recruiter skimming might take it literally.
- Home thinking layer: "[ Show my work ]", "PORTRAIT · 3:4", "PROOF 2 NUMBERS". These look intentional as wireframe annotations.
- No lorem ipsum, no `[brackets]` in real copy, and **no spelling mistakes** (cspell, en-CA/GB/US).

**Numbers that will go out of date or don't match**
- Hard-coded counts that will be wrong when you add a project: "03 — 2025 / 2026" above the cards, the "01 / 03" carousel counter, "Case study 0X / 03" on every case-study header and footer, and "Case 01/02/03" on the cards.
- "06 Years" in the footer is already gone. The hero "3 yrs" matches the meta description ("3 years of experience"), and "15k+" is the same on home and Delicut.

**Role titles**
- "Product Designer" is used everywhere on the visible site. The home **meta description** (what Google shows) says "**Product and UX designer** in Halifax…". README says "UI/UX and product designer" (not public).

**Other inconsistencies**
- "Résumé" (desktop nav) vs "CV" (mobile nav) vs "Download résumé" ("Just ask").
- "Copy Email" (nav, title case) vs "Copy email" ("Just ask").

**Old copy:** none of "Innovate with purpose", "Since 2020", "−28%", "−35%", "Lead Product Designer", "Creative Ops" or "Redesigning the project workspace…" appear on the live pages. "Since 2020" still appears in `/archive/` (S18).

---

## 1. What I already fixed

All of these are in `src/`, rebuilt with `npm run build`, and checked again in the browser (see section 3). There are no copy, layout or design changes: everything below is either invisible or only shows for keyboard users.

| # | Fix | Files |
|---|---|---|
| M2 | Attune phone start images are no longer squashed (`maxWidth: 'none'` in `protoBox`). Before and after: `int-attune-1280-flows-poster.png` → `fixed-attune-1280-flows-poster.png` | `src/components/IPhone.jsx` |
| M3 | Home hero scrolls with a swipe on touch screens 1024px and wider. Only the drag handle blocks touch scrolling now, and dragging the handle still works. | `src/views/HomeDesktop.jsx` |
| M4 | Hero slider works with the keyboard: Tab to it, then ← → (desktop) or ↑ ↓ (mobile), with Home/End jumping to either side. It's announced as a slider with its value. `fixed-home-1280-slider-keyboard-end.png`, `-home.png` | `HomeDesktop.jsx`, `HomeMobile.jsx`, `desktopLogic.jsx`, `mobileLogic.jsx` |
| S1 | Visible keyboard focus outline on every button, tab and slider (same gold outline the links already use). The 404 uses a black outline on its yellow background. Mouse users see no change. `fixed-home-1280-focus-ring-next.png` | `src/styles/base.css`, `src/styles/notfound.css` |
| S2 | Hidden project cards are `inert`, so Tab only reaches the card that's showing. | `HomeDesktop.jsx` |
| S3 | DarkRoast image viewer: focus moves to Close on open, Tab stays inside, and focus returns to the thumbnail on close. `fixed-darkroast-1280-lightbox-focus.png` | `src/components/IterCanvas.jsx` |
| S4 | Mobile home: links inside the hidden "thinking" layer are out of the Tab order (they can still be tapped). | `HomeMobile.jsx` |
| S12 | Removed the unused Cormorant Garamond / Lora Google Fonts import, which blocked rendering on every page. | `src/styles/base.css` |
| S13 | With "reduce motion" switched on, endless CSS animations stop: marquee, spinning badge, pulsing dots, 404 stickers. The 404 stickers keep their resting tilt. Normal visitors see no change. | `base.css`, `notfound.css` |
| S15 | `loading="lazy"` on below-the-fold images: home card covers, Delicut phones, frames, onboarding, patterns and expiry, Attune explored cards and prototype start images. Hero images still load immediately. | `ImageSlot.jsx`, `IPhone.jsx`, `Delicut*.jsx`, `Attune*.jsx` |
| S16 | `rel="noopener noreferrer"` on every link that opens a new tab, including links chosen at runtime and keyboard-opened ones (`window.open(…, 'noopener')`). | all views, 3 logic files |
| S17 | 404 page has a real (visually hidden) `<h1>Page not found</h1>`. | `src/views/NotFound.jsx` |
| S19 | DarkRoast mobile "Working / Checking" cards changed from `<button>` to `<div>`. They look the same. | `DarkRoastMobile.jsx` |
| N1 | Hero headline now reads "I turn what users feel into what teams can build" to screen readers and search engines. No visible change. | `HomeDesktop.jsx` |
| N12 | `lang="en"` on the DarkRoast prototype page. | `DarkRoast Prototype Autoplay.html` |
| M1 (part) | `.gitignore` now allows `resume.pdf`, so the file will be published once you send it. | `.gitignore` |

## 2. What I need from you

1. **Your résumé PDF (M1, the most urgent).** Send it and I'll add it as `resume.pdf`, so the Résumé/CV links on every page work. Until then, every résumé link on the site is a 404.
2. **Behance:** nothing needed. The footer link already goes to `behance.net/aayushipatel21/projects`, fixed in an earlier commit before this audit.
3. **Colour contrast (S6):** OK to darken the red labels to `#C8261F` and the grey to `#62625D`, and raise the dimmed steps from about 30% to 55%? These are small, nearly invisible changes that make the site pass WCAG AA.
4. **Small text and tap areas (S7, S9):** OK to enlarge the mobile nav tap areas invisibly? And should mobile labels and sentences go up to at least 12px / 15px?
5. **1024px layout (S8):** keep the shrunk desktop layout on iPad landscape, or switch it to the tablet layout?
6. **Duplicate nav in the hero (S5) and the slider's start position (N2, N3):** how should the two halves behave? Would you like the portrait and "3 yrs / 15k+" visible by default?
7. **Performance (S10, S11):** OK to stop Attune from prefetching all 5 prototypes, make Delicut videos load only when near the screen (with posters), and swap the States table PNG for a WebP? I can also re-encode the videos if you're fine with a slight quality trade-off.
8. **Reduced motion for auto-advancing sections (S13, second half):** OK to pause Delicut expiry, DarkRoast workflow, Attune modes and the autoplay prototype for visitors who ask for less motion?
9. **`/archive/` (S18):** hide it from Google (`robots.txt` + `noindex`) or delete it?
10. **Copy decisions:** everything in "Copy for you to decide on" above (em dashes, arrows, dots, the "// TODO" sticker, "Résumé" vs "CV", "Product and UX designer" in the meta description, and hard-coded "03" counts).
11. **Safari check:** please open the site once in Safari on your iPhone. WebKit and Firefox couldn't be run here.

## 3. Build confirmation

- Ran **`npm run build`** after the fixes. It built with no errors or warnings and prerendered all 4 pages. All built output (`assets/`, every root `*.html`) is committed together, as `CLAUDE.md` requires.
- Re-tested the new build:
  - **Full crawl again (6 pages × 7 widths):** no overflow, no JS errors, no failed requests (apart from the known `resume.pdf`). The only differences from before are the intended ones: the h1 text spacing and the new 404 h1.
  - **A verification script:** all 17 checks passed. Attune image ratio at 1280 and 390. Touch swipe scrolls the hero at 1024 and the handle still drags. Keyboard slider on desktop and mobile. A focus outline on every button. Only the visible card is tabbable, including after "Next". No focus inside the aria-hidden layer. Viewer focus trap and return. One h1 on the 404. Every new-tab link has `noopener noreferrer`. No endless animations under reduced motion, and animations still run normally otherwise.
  - **Lighthouse again** (table above): home mobile 87 → 97, Attune Best Practices 96 → 100.
