import { defineConfig, loadEnv } from 'vite';

export default defineConfig(async ({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY': env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    },
  };
});