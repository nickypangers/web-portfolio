<template>
  <div class="home">
    <Banner />
    <About />
    <Jobs />
    <Projects />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import About from "@/components/About.vue";
import Jobs from "@/components/Jobs.vue";
import Projects from "@/components/Projects.vue";

export default {
  name: "Home",
  components: {
    Banner,
    About,
    Jobs,
    Projects,
  },
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  margin-bottom: $footer-height;
}
</style>
