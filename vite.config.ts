import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: [
      {
        find: '@shared',
        replacement: path.resolve(__dirname, 'src/components/shared'),
      },
      {
        find: '@specs',
        replacement: path.resolve(__dirname, 'src/components/specs'),
      },
    ],
  },
})
