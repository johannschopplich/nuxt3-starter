<script setup lang="ts">
const props = defineProps<{
  scope?: string
}>()

const { modals } = useModals(props.scope)
</script>

<template>
  <div class="relative z-80">
    <Transition name="background-fade">
      <div
        v-if="modals.length"
        class="fixed inset-0 bg-gray-500 bg-opacity-50 backdrop-blur-sm"
      />
    </Transition>

    <TransitionGroup name="content-fade">
      <component
        :is="modal.component"
        v-for="(modal, i) in modals"
        :key="`${modal.component}${i}`"
        v-bind="modal.bindings"
      />
    </TransitionGroup>
  </div>
</template>

<style scoped>
.background-fade-enter-active {
  transition: opacity 300ms ease-out;
}

.background-fade-leave-active {
  transition: opacity 200ms ease-in;
}

.background-fade-enter-from,
.background-fade-leave-to {
  opacity: 0;
}

.background-fade-enter-to,
.background-fade-leave-from {
  opacity: 1;
}

.content-fade-enter-active {
  transition:
    opacity 300ms ease-out,
    transform 300ms ease-out;
}

.content-fade-leave-active {
  transition:
    opacity 200ms ease-in,
    transform 200ms ease-in;
}

.content-fade-enter-from {
  opacity: 0;
  transform: translateY(4px) scale(0.95);
}

.content-fade-leave-to {
  opacity: 0;
  transform: translateY(4px) scale(0.95);
}

.content-fade-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.content-fade-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

@media screen and (min-width: 640px) {
  .content-fade-enter-from {
    transform: translateY(0) scale(0.95);
  }

  .content-fade-leave-to {
    transform: translateY(0) scale(0.95);
  }
}
</style>
