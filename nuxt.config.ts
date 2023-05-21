export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@unocss/nuxt', '@vueuse/nuxt'],

  $production: {
    runtimeConfig: {
      public: {
        deploymentEnvironment: 'prod',
      },
    },
  },

  $development: {
    runtimeConfig: {
      public: {
        deploymentEnvironment: 'dev',
      },
    },
  },

  unocss: {
    preflight: true,
  },

  typescript: {
    typeCheck: true,
    shim: false,
    tsConfig: {
      compilerOptions: {
        moduleResolution: 'bundler',
      },
    },
  },
})
