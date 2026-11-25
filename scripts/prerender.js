// Runs after `vite build`. Renders each page's content to HTML at build time and writes it
// into the built page's <noscript> block, so link previews, crawlers and visitors without
// JavaScript see the real headings and copy. Visitors with JavaScript never parse it (the
// browser treats <noscript> as plain text), so nothing loads twice and nothing flashes.
import { build } from 'vite';
import { readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = resolve(import.meta.dirname, '..');
// inside node_modules so the bundle's imports (react, react-dom) resolve
const out = join(ROOT, 'node_modules/.cache/prerender');

try {
  await build({
    configFile: join(ROOT, 'vite.config.js'),
    logLevel: 'warn',
    build: {
      ssr: join(ROOT, 'src/prerender.jsx'),
      outDir: out,
      emptyOutDir: true,
      rollupOptions: { input: join(ROOT, 'src/prerender.jsx'), output: { entryFileNames: 'prerender.mjs' } },
    },
  });
  // A few layouts size themselves from the window while rendering; give them a 1278px
  // desktop window (the design width) so the HTML matches the desktop design.
  globalThis.window ??= globalThis;
  globalThis.innerWidth ??= 1278;
  globalThis.innerHeight ??= 800;
  globalThis.document ??= { documentElement: { clientWidth: 1278, clientHeight: 800 }, querySelectorAll: () => [], getElementById: () => null };
  const { pages, render } = await import(pathToFileURL(join(out, 'prerender.mjs')).href);
  const MARK = /<noscript>([\s\S]*?)<\/noscript>/;
  for (const name of pages) {
    const file = join(ROOT, `${name}.html`);
    const html = readFileSync(file, 'utf8');
    const m = MARK.exec(html);
    if (!m) throw new Error(`${name}.html has no <noscript> block to fill`);
    const body = render(name).replaceAll('"/assets/', '"assets/').replaceAll('"./assets/', '"assets/');
    const note = `<p style="margin:0;padding:12px 16px;background:#0B0B0B;color:#FCEB3F;font:14px/1.4 Geist,sans-serif">${m[1].trim()}</p>`;
    writeFileSync(file, html.replace(MARK, `<noscript>${note}\n${body}</noscript>`));
    console.log(`prerendered ${name}.html`);
  }
} finally {
  rmSync(out, { recursive: true, force: true });
}
