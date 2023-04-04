export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@unocss/nuxt', '@vueuse/nuxt'],

  runtimeConfig: {
    public: {
      deploymentEnvironment: 'dev',
    },
  },

  unocss: {
    preflight: true,
  },

  typescript: {
    typeCheck: true,
    shim: false,
  },
})
