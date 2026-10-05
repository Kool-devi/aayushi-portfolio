import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4173,
    strictPort: false,
  },
  build: {
    outDir: 'scripts/landing-build',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1600,
    assetsDir: '.',
    rollupOptions: {
      input: resolve('scripts/landing/main.jsx'),
      output: {
        format: 'es',
        entryFileNames: 'home-landing.js',
        codeSplitting: false,
        assetFileNames: '[name][extname]',
      },
    },
  },
});
