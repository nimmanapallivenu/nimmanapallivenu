import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/codewithvenu/', // IMPORTANT: Replace with your actual repo name
})