import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@unocss/nuxt', '@vueuse/nuxt'],

  runtimeConfig: {
    public: {
      deploymentEnvironment: 'dev',
    },
  },

  unocss: {
    preflight: true,
    uno: true,
    icons: {
      scale: 1.2,
      extraProperties: {
        position: 'relative',
        display: 'inline-block',
        'vertical-align': 'middle',
        bottom: '0.125ex',
      },
    },
  },

  typescript: {
    shim: false,
  },
})
