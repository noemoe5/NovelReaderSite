import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' 让产物在任意子路径(含 CloudStudio 沙箱路径)下都能正确加载资源
export default defineConfig({
  plugins: [react()],
  base: './'
})
