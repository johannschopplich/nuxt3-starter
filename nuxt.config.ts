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
    typeCheck: true,
    shim: false,
  },
})
