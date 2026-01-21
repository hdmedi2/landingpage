import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.daeil.hdmedi.shop',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path,
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Sending Request to the Target:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
            // 403 에러인 경우 다른 도메인으로 재시도할 수 있도록 로그 출력
            if (proxyRes.statusCode === 403) {
              console.warn('프록시가 403 에러를 반환했습니다. 백엔드 서버 설정을 확인해주세요.');
            }
          });
        },
      },
    },
  },
})
