<template>
  <div class="rounded-md bg-emerald-50 p-4">
    <div class="flex">
      <span
        class="i-carbon-checkmark-filled h-5 w-5 text-emerald-400"
        aria-hidden="true"
      />

      <div class="ml-3">
        <h3 class="text-sm text-emerald-800 font-medium">
          <slot />
        </h3>

        <div v-if="$slots.description" class="mt-2 text-sm text-emerald-700">
          <p>
            <slot name="description" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
