<template>
  <div class="home">
    <Banner />
    <About />
    <Work />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import About from "@/components/About.vue";
import Work from "@/components/Work.vue";

export default {
  name: "Home",
  components: {
    Banner,
    About,
    Work,
  },
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  margin-bottom: $footer-height;
}
</style>
