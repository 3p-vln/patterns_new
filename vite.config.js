import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import pages from './pages.config.js';

const pagesInput = {};

pages.forEach((page) => {
  pagesInput[page.name] = page.path;
});

export default defineConfig({
  base: '/patterns_new',
  build: {
    target: 'es2022',
    outDir: 'build',
    rollupOptions: {
      input: {
        ...pagesInput,
      },
    },
  },

  server: {
    port: 3025,
    host: 'localhost',
    hmr: true,
  },

  plugins: [injectHTML()],
});
