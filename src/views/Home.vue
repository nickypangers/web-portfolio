<template>
  <div class="home">
    <Banner />
    <About />
    <Jobs />
    <Projects />
    <GetInTouch />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import About from "@/components/About.vue";
import Jobs from "@/components/Jobs.vue";
import Projects from "@/components/Projects.vue";
import GetInTouch from "@/components/GetInTouch.vue";

export default {
  name: "Home",
  components: {
    Banner,
    About,
    Jobs,
    Projects,
    GetInTouch,
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 992px) {
  .home {
    margin-bottom: 0 !important;
  }
}

.home {
  position: relative;
  margin-bottom: $footer-height;
}
</style>
