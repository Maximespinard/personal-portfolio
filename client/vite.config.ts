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
        svgo: false,
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
});
