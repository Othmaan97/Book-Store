import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Specify a port (e.g., 3000 or any other available port)
    host: '0.0.0.0', // Use 'localhost' or '0.0.0.0' to bind to IPv4
  },
})
