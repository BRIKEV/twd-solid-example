import { defineConfig, PluginOption } from 'vite';
import tailwindcss from "@tailwindcss/vite";
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';
import { twdRemote } from 'twd-relay/vite';

export default defineConfig({
  plugins: [devtools(), solidPlugin(), tailwindcss(),twdRemote() as PluginOption],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
