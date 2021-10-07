<template>
  <div class="w-full py-8">
    <div
      class="
        mb-4
        flex flex-col
        lg:flex-row
        justify-between
        items-start
        lg:items-center
        text-lg
      "
    >
      <p>
        <span class="font-bold">{{ experience.company }}</span> —
        {{ experience.position }}
      </p>
      <p class="text-sm">{{ experience.period }}</p>
    </div>
    <div class="lg:mr-52 text-md">
      {{ experience.description }}
    </div>
    <div class="lg:mr-52 text-md mt-3" v-if="experience.points.length > 0">
      <ul class="resume-list">
        <li
          v-for="(points, index) in experience.points"
          :key="'point-' + index"
        >
          {{ points }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    experience: Object,
  },
  setup() {},
};
</script>
