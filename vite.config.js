/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    server: {
        port: 80,
    },
    plugins: [react()],
})
// export default defineConfig({
//     server: {
//         port: 80,
//     },
//     base: './',
//     plugins: [react()],
//     build: {
//         chunkSizeWarningLimit: 1000,
//         rollupOptions: {
//             output: {
//                 manualChunks(id) {
//                     if (id.includes('node_modules')) {
//                         const packageName = id
//                             .split('node_modules/')[1]
//                             .split('/')[0]
//                         return packageName
//                     }
//                 },
//             },
//         },
//     },
// })
