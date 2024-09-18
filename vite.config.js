import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // Use modern JavaScript features
    minify: 'esbuild', // Use esbuild for faster builds
    rollupOptions: {
      output: {
        manualChunks: undefined, // Can be configured based on your project needs
      },
    },
    esbuild: {
      legalComments: 'none', // Remove comments from minified files
      minify: true, // Minification settings
    },
  },
  test: {
    environment: 'jsdom', // Ensure tests run in a jsdom environment
    globals: true,
    setupFiles: './jest.config.js', // Specify setup files if needed
  },
});
