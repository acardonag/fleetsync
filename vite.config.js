import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/fleetsync/', // Cambia esto al nombre de tu repositorio en GitHub
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
