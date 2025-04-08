import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';
import * as path from 'path';
import { compression } from 'vite-plugin-compression2';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      svgrOptions: {
        exportType: 'default',
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: '**/*.svg',
    }),
    // Enhanced image optimization
    imagetools({
      defaultDirectives: new URLSearchParams([
        ['format', 'webp;avif;original'],
        ['quality', '80'],
        ['as', 'picture'],
      ]),
    }),
    // Add compression for production builds
    compression({
      algorithm: 'brotliCompress',
      include: [/\.(js|css|html|svg|json)$/],
      exclude: [/\.(png|jpe?g|webp|avif|gif|ico)$/],
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
  server: {
    headers: {
      'Cache-Control': 'no-store',
    },
    host: '0.0.0.0',
    hmr: {
      // Pour le rechargement à chaud (Hot Module Replacement)
      clientPort: 443, // Important pour ngrok HTTPS
    },
    // Ajoutez ces deux lignes
    cors: true,
    strictPort: true,
    // Ajoutez l'hôte ngrok à la liste des hôtes autorisés
    allowedHosts: ['865a-178-197-198-62.ngrok-free.app', 'localhost'],
  },
  // Add support for new image formats
  assetsInclude: ['**/*.webp', '**/*.avif'],
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-framework': ['framer-motion'],
          'form-utils': ['react-hook-form', 'zod'],
        },
        // Configure asset handling
        assetFileNames: ({ name }) => {
          // Put images in a dedicated directory
          if (/\.(png|jpe?g|gif|webp|avif|svg)$/.test(name ?? '')) {
            return 'assets/img/[name]-[hash].[ext]';
          }
          return 'assets/[name]-[hash].[ext]';
        },
      },
    },
    // Enable asset precompression
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
    sourcemap: process.env.NODE_ENV === 'development',
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'react-hook-form', 'zod'],
  },
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
});
