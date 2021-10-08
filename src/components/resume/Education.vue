<template>
  <div class="w-full lg:mb-6 col-span-2 lg:col-span-1">
    <h3 class="font-bold text-lg text-resumeheading mb-1">{{ title }}:</h3>
    <ul>
      <li class="font-extrabold text-lg">{{ education.name }}</li>
      <li class="font-bold">{{ education.degree }}</li>
      <li>{{ education.period }}</li>
      <li>{{ education.location }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    education: Object,
  },
  setup() {},
};
</script>
