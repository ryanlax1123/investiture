import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  root: 'examples',
  base: mode === 'production' ? '/investiture/react-demo/' : '/',
  build: {
    outDir: '../docs/react-demo',
    emptyOutDir: true
  },
  server: {
    port: 3001,
    open: true
  }
}));
