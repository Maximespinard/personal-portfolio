// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';
import * as path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      svgrOptions: {
        exportType: 'default',
        ref: true,
        svgo: true, // Enable SVG optimization
        titleProp: true,
      },
      include: '**/*.svg',
    }),
  ],
  css: {
    postcss: './postcss.config.js',
    devSourcemap: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    minify: 'terser', // Use Terser for better minification
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code into separate chunks
          'react-vendor': ['react', 'react-dom'],
          'motion-vendor': ['framer-motion'],
          'form-vendor': ['react-hook-form', 'zod'],
          'ui-utils': ['react-responsive'],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase the warning limit
  },
  server: {
    headers: {
      'Cache-Control': 'no-store',
    },
    host: '0.0.0.0',
    hmr: true,
    cors: true,
    strictPort: true,
    allowedHosts: [
      '9fbf-178-197-211-222.ngrok-free.app',
      'localhost',
      'http://codebymax-dev.com',
    ],
  },
});
