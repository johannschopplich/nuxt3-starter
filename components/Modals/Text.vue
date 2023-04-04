<script setup lang="ts">
const props = defineProps<{
  text: string
}>()

const emit = defineEmits<{
  (event: 'close', value?: string): void
}>()

const text = ref(props.text)

function close(value?: string | MouseEvent) {
  emit('close', typeof value === 'string' ? value : undefined)
}
</script>

<template>
  <AppModalWrapper @close="close">
    <div class="space-y-3">
      <div class="text-center">
        <h3
          id="modal-title"
          class="text-base font-semibold leading-6 text-gray-900"
        >
          Edit text
        </h3>
        <p class="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          amet labore.
        </p>
      </div>

      <input
        id="email"
        v-model="text"
        type="email"
        name="email"
        class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="you@example.com"
      />
    </div>

    <div class="mt-5 sm:mt-6">
      <button
        type="button"
        class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        @click="close(text)"
      >
        OK
      </button>
    </div>
  </AppModalWrapper>
</template>
