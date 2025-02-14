import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL} from 'node:url';


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/Samborskyi Vitalii/',
  build: {
    outDir: 'dist',
    // rollupOptions: {
    //   input: {
    //     main: resolve(__dirname, `src/App.vue`),
    //   }
    // }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
})
