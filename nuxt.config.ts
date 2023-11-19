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

  experimental: {
    typescriptBundlerResolution: true,
    inlineSSRStyles: false,
    headNext: true,
  },

  typescript: {
    typeCheck: 'build',
    shim: false,
  },
})
