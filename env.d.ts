declare module '@nuxt/schema' {
  interface RuntimeConfig {
    public: {
      deploymentEnvironment: 'dev' | 'test' | 'qa' | 'prod'
    }
  }
}

// Ensure to import/export something when augmenting a type
export {}
