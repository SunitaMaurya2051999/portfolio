import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Output directory for production build
    assetsDir: 'assets', // Directory for static assets
    emptyOutDir: true, // Clean the output directory before build
  },
  server: {
    port: 3000, // Set the port for the development server
    open: true, // Open the default browser when the server starts
    proxy: {}, // Add proxy configurations if needed
  },
});
