import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Vercel serves the site from the root, so '/' is correct there.
  // GitHub Pages serves project sites from a sub-folder (e.g. /zahid-portfolio/),
  // so that workflow sets VITE_BASE to override this.
  base: process.env.VITE_BASE || '/',
  build: {
    // Keep the initial download small: Three.js and the animation library
    // are split into their own files so the first page paints faster.
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three')) return 'three'
          if (id.includes('node_modules/framer-motion')) return 'motion'
          return undefined
        },
      },
    },
    chunkSizeWarningLimit: 900,
  },
})
