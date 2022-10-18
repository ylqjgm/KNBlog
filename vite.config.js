import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [vue(), AutoImport({ imports: ['vue'] })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    target: 'es6',
    outDir: 'app/web',
    assetsInlineLimit: 4096,
    sourcemap: true,
    cssCodeSplit: true,
    manifest: true,
    minify: 'terser',
    terserOptions: {
      mangle: true,
      compress: {
        drop_debugger: true,
        drop_console: true
      }
    },
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString()
          }
        }
      }
    }
  },
  clearScreen: true,
  server: {
    port: '3000'
  }
})
