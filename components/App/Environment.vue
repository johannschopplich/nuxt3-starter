<template>
  <div
    v-if="DEPLOYMENT_ENVIRONMENT !== 'prod'"
    class="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6"
  >
    <p class="text-xs text-gray-500">
      Deployment Environment
      <span class="font-medium text-gray-800">
        {{ DEPLOYMENT_ENVIRONMENT }}
      </span>
    </p>
  </div>
</template>

<script setup lang="ts">
const { DEPLOYMENT_ENVIRONMENT } = useRuntimeConfig()
</script>
