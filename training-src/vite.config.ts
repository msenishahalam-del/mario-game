import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Output build terus ke ../training (folder yang dihidangkan oleh GitHub Pages).
// emptyOutDir: false supaya training/images/ dan favicon.svg tidak dipadam —
// skrip "build" dalam package.json memadam asset index-* lama secara manual.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/mario-game/training/',
  publicDir: false,
  build: {
    outDir: '../training',
    emptyOutDir: false,
  },
})
