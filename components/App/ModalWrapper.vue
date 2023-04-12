<script setup lang="ts">
const emit = defineEmits<{
  (event: 'close'): void
}>()

const onClickOutsideTarget = ref<HTMLElement | undefined>()
onClickOutside(onClickOutsideTarget, () => emit('close'))

onKeyStroke('Escape', () => emit('close'))
</script>

<template>
  <div
    class="fixed inset-0 z-100 overflow-y-auto"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
  >
    <div
      class="min-h-full flex items-end justify-center p-4 text-center sm:items-center sm:p-0"
    >
      <div
        ref="onClickOutsideTarget"
        class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6"
      >
        <div class="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
          <button
            type="button"
            class="flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="emit('close')"
          >
            <span class="sr-only">Close</span>
            <span class="i-carbon-close h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>
