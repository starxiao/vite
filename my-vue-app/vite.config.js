import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

function _resolve(dir) {
  return path.resolve(__dirname, dir)
}

export default defineConfig({
  plugins: [
    vue(),
    {
      name: "configure-response-headers",
      configureServer: (server) => {
        server.middlewares.use((_req, res, next) => {
          res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
          res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
          next();
        });
      },
    },
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true
      }
    },
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    }
  },
  resolve: {
    alias: {
      '@': _resolve('src')
    }
  }
})


