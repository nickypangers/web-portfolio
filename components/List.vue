<template>
  <div class="h-auto lg:mb-6">
    <h3 class="font-bold text-lg text-resumeheading mb-1">{{ title }}:</h3>
    <ul class="resume-list lg:block hidden">
      <li v-for="(element, index) in list" :key="getKeyString(index)">
        {{ element }}
      </li>
    </ul>
    <p class="lg:hidden block">{{ combinedList }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    list: Array,
  },
  computed: {
    combinedList: function () {
      return this.list.join(', ')
    },
  },
  methods: {
    getKeyString(index) {
      return `${this.title.trim()}-${index}`
    },
  },
}
</script>
