import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Proxy API calls to the ASP.NET backend to avoid CORS
    // and self-signed SSL certificate issues during development.
    // Frontend calls /api/... → Vite forwards to https://localhost:7032/api/...
    proxy: {
      '/api': {
        target: 'https://localhost:7032',
        changeOrigin: true,
        secure: false, // accept self-signed ASP.NET dev certificate
      },
    },
  },
})
