<template>
  <div class="py-8">
    <h1 class="text-xl mb-4 text-resumeheading font-bold">Education</h1>
    <div class="flex justify-between items-start">
      <div>
        <ul>
          <li class="font-extrabold text-lg">{{ education.name }}</li>
          <li class="font-bold">{{ education.degree }}</li>
          <li>{{ education.period }}</li>
          <li class="">{{ education.location }}</li>
          <li>{{ education.description }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    education: {
      type: Object,
      required: true,
    },
  },
}
</script>
