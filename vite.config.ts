/// <reference types="vitest/config" />
import { resolve } from 'node:path'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// Library build: bundle the components, externalize Vue (the host app provides
// it), emit ESM + CJS + a single CSS file + type declarations.
export default defineConfig({
  plugins: [
    vue(),
    dts({ include: ['src'], exclude: ['src/**/__tests__', 'src/**/*.spec.ts'], rollupTypes: true }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Vuegram',
      fileName: (format) => (format === 'es' ? 'vuegram.js' : 'vuegram.cjs'),
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue'],
      output: { globals: { vue: 'Vue' }, assetFileNames: 'vuegram.[ext]' },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
})
