import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/fleetsync/', // Nombre del repositorio en GitHub
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
