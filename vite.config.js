import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages hosts project sites beneath the repository name.
  base: process.env.GITHUB_ACTIONS ? '/mauji-cafe/' : '/',
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  },
  build: {
    // Raise warning limit to avoid noise during builds
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // Vendor: heavy libraries in their own chunks
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-framer': ['framer-motion'],
          'vendor-lucide': ['lucide-react'],
          'vendor-utils': ['canvas-confetti', 'clsx', 'tailwind-merge'],
        }
      }
    },
    // Tree-shake unused exports
    target: 'esnext',
    minify: 'esbuild',
  }
})

