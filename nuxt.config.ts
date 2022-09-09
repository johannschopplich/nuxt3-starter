import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@unocss/nuxt', '@vueuse/nuxt'],

  runtimeConfig: {
    public: {
      deploymentEnvironment: 'dev',
    },
  },

  unocss: {
    preflight: true,
    wind: true,
    icons: true,
  },

  typescript: {
    strict: true,
    typeCheck: 'build',
    shim: false,
  },
})
