# aayushipatel.work

Portfolio of Aayushi Patel, a UI/UX and product designer. Built with Vite + React and hosted on GitHub Pages straight from this repository.

## Pages

| Address | Page |
|---|---|
| `index.html` | Home (hero, selected work, About / “Ask me anything”, footer) |
| `project-darkroast.html` | DarkRoast case study |
| `project-delicut.html` | Delicut case study |
| `project-attune.html` | Attune AI case study |
| `404.html` | Page-not-found (GitHub Pages shows it for any missing address) |

Every page has two layouts: desktop (designed at 1280px wide) for windows 1024px and wider, and mobile (designed at 390px wide) for anything narrower. Each layout scales to the window width, so it always looks like the design.

## Preview locally

```bash
npm install
npm run dev        # live-reloading preview at http://localhost:4173
```

To check the exact files that will go live:

```bash
npm run build
npm run preview    # serves the built site at http://localhost:4174
```

## How publishing works

GitHub Pages serves this repository's files as they are; it doesn't run a build. So the page **sources** live in `src/`, and `npm run build` writes the finished pages (`index.html`, `project-*.html`, `404.html`) and their compiled code (`assets/`) to the repository root. **After changing anything in `src/` or `images/`, run `npm run build` and commit the results too.**

## Where things live

- `src/views/`: each page's layout, one file per page and layout (for example `DelicutMobile.jsx`)
- `src/logic/`: page behaviour: tabs, sliders, auto-playing flows, Copy Email (`desktopLogic.jsx`, `mobileLogic.jsx`, `notfoundLogic.jsx`)
- `src/site/`: the HTML page sources (titles, descriptions)
- `src/styles/`: base styles, hover styles, 404 styles
- `images/`: your portrait and project cover photos (see `images/README.md`)
- `resume.pdf`: the résumé every “Résumé” link opens (currently a placeholder)
- `Mockups/`, `Videos/`, `Before After/`, `Dark Roast Project … Iterations/`: case-study media
- `DarkRoast Prototype new.html`, `prototypes/attune-choose-a-mode.html`: prototypes embedded in the case studies
- `docs/`: case-study PDFs
- `archive/`: the previous site's pages, prototypes and assets, kept working (for example `archive/about.html`)

The layouts were generated from the Claude Design handoff (`PORTFOLIO WEBSITE DESKTOP` / `MOBILE`) and keep its inline styles, so spacing and type match the design exactly.
