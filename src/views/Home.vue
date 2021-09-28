<template>
  <div class="home">
    <Hero />
    <Description />
    <About />
    <Skills />
    <Portfolio />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Description from "@/components/Description";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
export default {
  name: "Home",
  components: {
    Hero,
    About,
    Description,
    Skills,
    Portfolio,
  },
};
</script>
