<script setup lang="ts">
const { deploymentEnvironment } = useRuntimeConfig()
</script>

<template>
  <div
    v-if="deploymentEnvironment !== 'prod'"
    class="pointer-events-none fixed inset-0 flex items-end justify-center px-4 py-6 sm:p-6"
  >
    <p class="text-xs text-gray-500">
      Deployment Environment
      <span class="font-medium text-gray-800">
        {{ deploymentEnvironment }}
      </span>
    </p>
  </div>
</template>
