// vite.config.js
/// <reference types="vite/client" />
import { defineConfig } from 'vite';

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  // Add the types.d.ts file to the resolve.extensions array
  defineConfig({
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.jsx', '.tsx', '.json', '.css', '.scss', '.html', '.png', '.jpg', '.gif', '.svg', '.woff', '.woff2', '.eot', '.ttf', '.otf', '.svg', '.json'],
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    // ...
  });
};