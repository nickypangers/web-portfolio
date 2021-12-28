<template>
  <a :href="work.link">
    <div
      class="w-full shadow-lg rounded-xl transform hover:-translate-y-2.5 ease-in-out duration-150 dark:border-gray-300 border-transparent border"
    >
      <div
        class="image-wrapper p-4 rounded-t-xl flex justify-center items-center bg-gray-300"
      >
        <svg-icon
          v-if="work.image.type === 'svg'"
          :name="work.image.link"
          class="h-1/2 w-1/2"
        />
        <img
          v-else
          class="h-1/2 w-1/2 object-contain"
          :src="work.image.link"
          :alt="work.image.alt"
        />
      </div>
      <div
        class="h-1/3 px-6 py-10 rounded-b-xl text-xl flex flex-col justify-around items-start"
      >
        <p class="font-bold mb-3 dark:text-white">{{ work.name }}</p>
        <p class="text-blue-600 text-lg dark:text-blue-300">
          {{ work.displayLink }}
        </p>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  props: {
    work: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log(this.work)
  },
}
</script>
<style scoped>
.image-wrapper {
  height: 250px;
  width: 100%;
}
</style>
