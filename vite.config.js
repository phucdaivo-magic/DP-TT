import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        vuquy: resolve(__dirname, 'vu-quy/index.html'),
        tanhon: resolve(__dirname, 'tan-hon/index.html'),
        preending: resolve(__dirname, 'pre-ending/index.html'),
        thiepmoivuquy: resolve(__dirname, 'thiep-moi-vu-quy/index.html'),
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
