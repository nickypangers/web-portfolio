<template>
  <!-- <div>hi</div> -->
  <router-view />
  <Footer />
</template>

<script>
import Footer from "@/components/Footer";
export default {
  components: {
    Footer,
  },
  setup() {},
};
</script>

<style>
.container-box {
  @apply container flex justify-center items-center pt-24;
}

.container-content {
  @apply w-full lg:w-1/2 mx-6 md:mx-0 text-black;
}
</style>
