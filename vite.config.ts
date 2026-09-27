import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
            if (id.includes('src/data/templates/behavioral.ts')) {
              return 'data-behavioral';
            }
            if (id.includes('src/data/templates/pediatrics.ts')) {
              return 'data-pediatrics';
            }
            if (id.includes('src/data/templates/internal-medicine.ts')) {
              return 'data-internal-medicine';
            }
            if (id.includes('src/data/templates/surgery.ts')) {
              return 'data-surgery';
            }
            if (id.includes('src/data/templates/general-outpatient.ts')) {
              return 'data-general-outpatient';
            }
            if (id.includes('src/data/templates/ob-gyn.ts')) {
              return 'data-ob-gyn';
            }
            if (id.includes('src/data/learn.ts')) {
              return 'learn';
            }
          }
        }
      }
    },
    plugins: [
      react(), 
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'pwa-192x192.png', 'pwa-512x512.png'],
        manifest: {
          name: 'Clerkly - Clinical Assistant',
          short_name: 'Clerkly',
          description: 'AI-powered clinical clerking assistant and templates.',
          theme_color: '#ffffff',
          background_color: '#ffffff',
          display: 'standalone',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        },
        workbox: {
          runtimeCaching: [
            {
              urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'images',
                expiration: {
                  maxEntries: 60,
                  maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                },
              },
            },
          ],
          maximumFileSizeToCacheInBytes: 6 * 1024 * 1024, // 6 MB
        },
      })
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
