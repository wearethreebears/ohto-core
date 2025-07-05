// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
import { fileURLToPath } from "url";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],

  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },

  runtimeConfig: {
    public: {
      NODE_ENV: process.env.NODE_ENV,
      URL_APP: process.env.URL_APP,
      URL_API: process.env.URL_API,
      URL_STRIPE_PRODUCT: process.env.URL_STRIPE_PRODUCT,
      LOCALE: process.env.LOCALE,
      CURRENCY: process.env.CURRENCY,
      TIMEZONE: process.env.TIMEZONE,
      STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
      NUXT_PUBLIC_FATHOM_SITE_ID: process.env.NUXT_PUBLIC_FATHOM_SITE_ID,
    },
  },

  components: { dirs: [] },

  typescript: {
    tsConfig: {
      compilerOptions: {},
    },
  },
  alias: {
    "@ohto/core/dist": fileURLToPath(new URL(".", import.meta.url)),
  },

  vite: {
    resolve: {
      alias: {
        "@ohtoConfig": "./ohto.config.ts",
        "@ohto/core/*": "./*",
      },
    },
  },

  compatibilityDate: "2024-10-04",

  sourcemap: {
    client: "hidden",
  },
});
