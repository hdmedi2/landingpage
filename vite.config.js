import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { sites } from '@openai/sites-vite-plugin'

const staticSiteWorker = () => ({
  name: 'static-site-worker',
  apply: 'build',
  generateBundle() {
    this.emitFile({
      type: 'asset',
      fileName: 'server/index.js',
      source: `export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};\n`,
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sites(), staticSiteWorker()],
  server: {
    proxy: {
      '/api': {
        target: 'https://hmlife.hdmedi.kr',
        changeOrigin: true,
        secure: true,
      },
    },
  },
})
