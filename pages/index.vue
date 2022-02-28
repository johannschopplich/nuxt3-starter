<script setup lang="ts">
const { data } = await useFetch('/api/views')
const time = useTimeAgo(computed(() => data.value.startAt))
</script>

<template>
  <FeedbackAlert>
    <p>
      {{ data.views }}
      <span class="font-normal opacity-75">page views since</span>
      {{ time }}
    </p>
  </FeedbackAlert>
</template>
