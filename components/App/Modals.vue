<script setup lang="ts">
const props = defineProps<{
  scope?: string
  transition?: string
}>()

const { modals } = useModals(props.scope)
</script>

<template>
  <Transition name="fade">
    <div
      v-if="modals.length"
      class="z-100 fixed inset-0 bg-gray-500 bg-opacity-50 backdrop-blur-sm"
    />
  </Transition>

  <TransitionGroup :name="transition || 'default'">
    <component
      :is="modal.component"
      v-for="(modal, i) in modals"
      :key="`${modal.component}${i}`"
      v-bind="modal.bindings"
    />
  </TransitionGroup>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.default-enter-active,
.default-leave-active {
  transition: opacity 300ms, transform 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.default-enter-from,
.default-leave-to {
  opacity: 0;
  transform: translateY(5px) scale(0.95);
}
</style>
