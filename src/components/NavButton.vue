<template>
  <router-link :to="navItem.route">
    <li
      class="
        py-0.5
        mx-4
        border-b-4 border-transparent
        hover:border-black
        dark:hover:border-white
      "
    >
      <p class="font-bold text-lg dark:text-white">{{ navItem.name }}</p>
    </li>
  </router-link>
</template>

<script>
// import { onMounted } from "vue";
export default {
  props: {
    navItem: Object,
  },
  setup() {
    // onMounted(() => {
    // console.log(props.navItem);
    // });
  },
};
</script>
