// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  // Performance optimizations
  output: 'static',
  prefetch: true,
  build: {
    inlineStylesheets: 'auto',
    format: 'file',
    assets: 'assets'
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: 'terser',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  }
});