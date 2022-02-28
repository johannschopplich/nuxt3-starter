declare module '@nuxt/schema' {
  interface PublicRuntimeConfig {
    DEPLOYMENT_ENVIRONMENT: 'local' | 'test' | 'qa' | 'prod'
  }
}

// Ensure to import/export something when augmenting a type
export {}
