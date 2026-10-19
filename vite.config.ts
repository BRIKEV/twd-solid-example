import { defineConfig, PluginOption } from 'vite';
import tailwindcss from "@tailwindcss/vite";
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';
import { twdRemote } from 'twd-relay/vite';
import { twd } from 'twd-js/vite-plugin';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  plugins: [
    devtools(),
    solidPlugin(),
    tailwindcss(),
    twd({
      testFilePattern: '/**/*.twd.test.ts',
    }),
    twdRemote() as PluginOption,
    istanbul({
      include: 'src/**/*',
      exclude: ['node_modules', '**/*.twd.test.ts', 'src/twd-tests/**'],
      requireEnv: !process.env.CI,
      extension: ['.ts', '.tsx'],
      checkProd: false,
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
