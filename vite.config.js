import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    rolldownOptions: {
      input: Object.fromEntries(['index', 'guide', 'adapters'].map(name => [name, fileURLToPath(new URL(`./${name}.html`, import.meta.url))]))
    }
  },
  server: { port: 4178, strictPort: true, watch: { ignored: ['**/artifacts/**'] } }
});
