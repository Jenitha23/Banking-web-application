import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'serve' ? '/' : '/Banking-web-application/',
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://banking-api.azurewebsites.net',
        changeOrigin: true,
        secure: true,
      }
    }
  }
}))