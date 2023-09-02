import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
// import { visualizer } from 'rollup-plugin-visualizer'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    splitVendorChunkPlugin(),
    vue(),
    viteCompression(),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
  build: {
    target: 'esnext',
    cssCodeSplit: false,
    rollupOptions: {
      plugins: [
        // visualizer(),
        // copy({
        //   targets: [
        //     { src: 'dist/index.html', dest: 'dist', rename: '200.html' },
        //   ],
        //   hook: 'writeBundle',
        // }),
      ],
    },
  },
})
