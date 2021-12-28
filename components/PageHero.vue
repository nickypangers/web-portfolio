<template>
  <div class="w-full text-center py-24">
    <p class="text-6xl font-bold dark:text-white">
      <span class="text-gray-400">/</span>{{ route
      }}<span class="text-gray-400">.</span>
    </p>
    <p class="mt-8 text-xl dark:text-white">{{ subtitle }}</p>
  </div>
</template>
<script>
export default {
  props: {
    route: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
}
</script>
