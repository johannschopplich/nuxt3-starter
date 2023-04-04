declare module 'nuxt/schema' {
  interface RuntimeConfig {
    public: {
      deploymentEnvironment: 'dev' | 'stage' | 'prod'
    }
  }
}

// Ensure to import/export something when augmenting a type
export {}
