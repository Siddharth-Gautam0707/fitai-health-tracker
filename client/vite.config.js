import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://health-tracker-backend-5mk8.onrender.com',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
