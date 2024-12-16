import vue from '@vitejs/plugin-vue'
import * as path from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { terser } from 'rollup-plugin-terser'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      rollupTypes: true,
      include: ['src/index.ts', 'src/**/*.ts', 'src/**/*.vue'],
      outDir: 'dist',
    }),
  ],
  server: {
    port: 5176,
    open: true,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      cssFileName: 'styles',
      formats: ['es'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        'vue',
      ],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
      plugins: [
        terser({
          compress: {
            drop_console: true,
            ecma: 2015,
          },
        }),
      ],
    },
    minify: 'terser',
  },
})