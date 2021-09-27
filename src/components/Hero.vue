<template>
  <section id="hero">
    <HeroTop />
    <HeroBottom />
  </section>
</template>

<script>
import HeroTop from "@/components/HeroTop";
import HeroBottom from "@/components/HeroBottom";
export default {
  components: {
    HeroTop,
    HeroBottom,
  },
  setup() {},
};
</script>
