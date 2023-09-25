<script setup lang="ts">
const { data } = await useFetch('/api/views')
const time = useTimeAgo(computed(() => data.value?.startAt ?? Date.now()))
</script>

<template>
  <div class="space-y-4">
    <ElementDivider>Alert</ElementDivider>
    <ElementAlert>
      <p>
        {{ data?.views }}
        <span class="font-normal opacity-75">page views since</span>
        {{ time }}
      </p>
    </ElementAlert>
  </div>
</template>
