import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import pluginPurgeCss from '@mojojoejo/vite-plugin-purgecss'

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
    pluginPurgeCss({
      content: ['./src/**/*.vue', './index.html'],
      css: ['dist/**/*.css'],
    }),
    viteCompression(),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
})
