import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import commonjs from '@rollup/plugin-commonjs'
import { crx3 } from './sss'
import { resolve } from 'path'
export default defineConfig({
    plugins: [
        commonjs(),
        vue(),
        crx3()
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    build: {
        target               : 'es2020',
        chunkSizeWarningLimit: '1500',
        rollupOptions        : {
            input: resolve(__dirname, 'src/manifest.json')
        }
    }
})
