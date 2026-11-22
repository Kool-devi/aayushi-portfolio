import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';

// GitHub Pages serves this repository's root as-is (there is no build step on GitHub).
// So the page sources live in src/site/ and `npm run build` writes the built pages to the
// repository root, next to the media folders (Mockups/, Videos/, …) they load at runtime.
const ROOT = resolve(import.meta.dirname);
const SITE = resolve(ROOT, 'src/site');
const PAGES = ['index', 'project-darkroast', 'project-delicut', 'project-attune', '404'];

const TYPES = {
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4', '.mov': 'video/quicktime', '.pdf': 'application/pdf', '.html': 'text/html; charset=utf-8',
};

// In `npm run dev`, serve the media and prototype files that sit at the repository root.
function serveRepoFiles() {
  return {
    name: 'serve-repo-files',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const path = decodeURIComponent((req.url || '').split('?')[0]);
        if (path === '/' || PAGES.some((p) => path === `/${p}.html`)) return next();
        const file = join(ROOT, path);
        if (!file.startsWith(ROOT) || path.startsWith('/src/') || !existsSync(file) || !statSync(file).isFile()) return next();
        const size = statSync(file).size;
        const type = TYPES[extname(file).toLowerCase()] || 'application/octet-stream';
        const range = /bytes=(\d*)-(\d*)/.exec(req.headers.range || '');
        if (range) {
          const start = range[1] ? Number(range[1]) : 0;
          const end = range[2] ? Number(range[2]) : size - 1;
          res.writeHead(206, { 'Content-Type': type, 'Content-Range': `bytes ${start}-${end}/${size}`, 'Accept-Ranges': 'bytes', 'Content-Length': end - start + 1 });
          createReadStream(file, { start, end }).pipe(res);
          return;
        }
        res.writeHead(200, { 'Content-Type': type, 'Content-Length': size, 'Accept-Ranges': 'bytes' });
        createReadStream(file).pipe(res);
      });
    },
  };
}

// GitHub Pages serves 404.html for any missing address, including nested ones like
// /work/old/page, so its script and style links must start at the site root.
function absolute404() {
  return {
    name: 'absolute-404-assets',
    enforce: 'post',
    generateBundle(_, bundle) {
      const page = bundle['404.html'];
      if (page) page.source = String(page.source).replaceAll('"./assets/', '"/assets/');
    },
  };
}

export default defineConfig({
  root: SITE,
  appType: 'mpa', // missing files answer 404, as on GitHub Pages
  base: './',
  publicDir: false,
  plugins: [react(), serveRepoFiles(), absolute404()],
  server: { port: 4173, strictPort: false, fs: { allow: [ROOT] } },
  preview: { port: 4174 },
  build: {
    outDir: ROOT,
    emptyOutDir: false,
    assetsDir: 'assets',
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      input: Object.fromEntries(PAGES.map((p) => [p, resolve(SITE, `${p}.html`)])),
    },
  },
});
