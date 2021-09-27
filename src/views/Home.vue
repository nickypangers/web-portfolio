<template>
  <div class="home">
    <Hero />
    <About />
    <Portfolio />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
export default {
  name: "Home",
  components: {
    Hero,
    About,
    Portfolio,
  },
};
</script>
