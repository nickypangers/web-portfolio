<template>
  <Header v-if="currentPath != '/resume'" />
  <!-- <div>hi</div> -->
  <router-view />
  <Footer v-if="currentPath != '/resume'" />
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const route = useRoute();

    const currentPath = computed(() => route.path);

    return {
      currentPath,
    };
  },
};
</script>

<style>
.content-box {
  @apply flex justify-center items-center pt-24;
}

.content-area {
  @apply w-full lg:w-1/2 mx-6 md:mx-0 text-black;
}
</style>
