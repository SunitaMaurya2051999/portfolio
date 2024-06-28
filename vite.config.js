import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync } from 'fs';

// Function to get all HTML files in the project directory
const getHtmlFiles = (dir) => {
  const files = readdirSync(dir);
  return files.filter(file => file.endsWith('.html')).reduce((acc, file) => {
    const name = file.replace('.html', '');
    acc[name] = resolve(dir, file);
    return acc;
  }, {});
};

export default defineConfig({
  build: {
    rollupOptions: {
      input: getHtmlFiles(__dirname),
    },
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
    proxy: {},
  },
});
