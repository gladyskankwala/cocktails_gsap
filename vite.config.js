// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/cocktails_gsap/", // très important
  plugins: [react()],
})
