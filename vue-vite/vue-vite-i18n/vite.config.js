import { fileURLToPath, URL } from "node:url";
  import { defineConfig } from "vite";
  import vue from "@vitejs/plugin-vue";
  // new stuff
  import { resolve, dirname } from 'node:path';
  import vueI18n from '@intlify/vite-plugin-vue-i18n';

  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [
      vue(),
      vueI18n({
        // you need to set i18n resource including paths
        include: resolve(dirname(fileURLToPath(import.meta.url)), '../locales'),
      })
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  });