<script setup lang="ts">
const emit = defineEmits<{
  (event: 'close'): void
}>()

const onClickOutsideTarget = ref<HTMLElement | undefined>()
onClickOutside(onClickOutsideTarget, () => emit('close'))
</script>

<template>
  <div
    class="z-100 fixed inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
    >
      <div
        ref="onClickOutsideTarget"
        class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
