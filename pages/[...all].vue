<script setup lang="ts">
import { ModalsText } from '#components'

const { data } = await useFetch('/api/views')
const time = useTimeAgo(computed(() => data.value?.startAt ?? Date.now()))

// Modal handling
const { open } = useModals()
const text = ref('you@example.com')

async function openModal() {
  const newValue = await open(ModalsText, {
    text: text.value,
  })

  if (newValue !== undefined) text.value = newValue
}
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

    <ElementDivider>Modal</ElementDivider>
    <p class="text-sm">
      Value: <span class="text-gray-500">{{ text }}</span>
    </p>
    <ElementButton @click="openModal()">Open Modal</ElementButton>
  </div>
</template>
