import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react()
  ],
})