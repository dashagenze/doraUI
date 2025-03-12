import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import eslintPlugin from '@nabla/vite-plugin-eslint';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), eslintPlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './testsSetup.js'
  }
});
