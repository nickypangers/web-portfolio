<template>
  <div class="w-full h-auto lg:mb-6">
    <h3 class="font-bold text-lg text-resumeheading mb-1">{{ title }}:</h3>
    <ul class="resume-list lg:block hidden">
      <li v-for="(element, index) in list" :key="keyString(index)">
        {{ element }}
      </li>
    </ul>
    <p class="lg:hidden block">{{ combinedList }}</p>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    list: Array,
  },
  setup(props) {
    const combinedList = computed(() => props.list.join(", "));

    const keyString = (index) => `${props.title.trim()}-${index}`;

    return {
      combinedList,
      keyString,
    };
  },
};
</script>
