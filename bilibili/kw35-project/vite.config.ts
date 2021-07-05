import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicDir: path.join(__dirname, 'public'),
  resolve: {
    alias: [
      { find: '@', replacement: path.join(__dirname, '/src') }
    ]
  }
})
