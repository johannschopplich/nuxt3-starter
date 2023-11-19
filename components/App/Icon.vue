<script setup lang="ts">
import { kebabCase } from 'scule'

const props = withDefaults(
  defineProps<{
    name?: string
    defaultStyles?: boolean
  }>(),
  {
    name: undefined,
    defaultStyles: true,
  },
)

// Auto-load icons
const icons = Object.fromEntries(
  Object.entries(import.meta.glob('~/assets/icons/*.svg', { as: 'raw' })).map(
    ([key, value]) => {
      const filename = key.split('/').pop()!.split('.').shift()
      return [filename, value]
    },
  ),
)

const icon = ref<string | undefined>()
const iconName = computed(() =>
  props.name ? kebabCase(props.name) : undefined,
)

watch(iconName, loadIcon)

await loadIcon(iconName.value)

async function loadIcon(name?: string) {
  if (name) {
    icon.value = await icons?.[name]?.()
  }
}
</script>

<template>
  <span
    v-if="icon"
    class="children-[svg]:h-full children-[svg]:w-full"
    :class="[defaultStyles && 'inline-block h-[1em] w-[1em] align-middle']"
    aria-hidden="true"
    v-html="icon"
  />
</template>
