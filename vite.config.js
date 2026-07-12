import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: process.env.GITHUB_PAGES ? '/DP-TT/' : '/',
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [
          resolve(__dirname, 'src/scss'),
          resolve(__dirname, 'src/assets/images'),
        ],
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@js': resolve(__dirname, 'src/js'),
      '@scss': resolve(__dirname, 'src/scss'),
      '@images': resolve(__dirname, 'src/assets/images'),
      '@media': resolve(__dirname, 'src/media'),
    },
  },
});
