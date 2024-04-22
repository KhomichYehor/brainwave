import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/brainwave/',
  build: {
    outDir: 'dist',  // Default output directory
  }
})
