<template>
  <div class="container">
    <div class="overflow-hidden">
      <div data-aos="zoom-in" data-aos-duration="800">
        <Hero />
        <Description />
      </div>
    </div>
    <About />
    <Skills />
    <Contact />
  </div>
</template>

<script>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "@/components/Hero";
import Description from "@/components/Description";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
export default {
  name: "Home",
  components: {
    Hero,
    About,
    Description,
    Skills,
    Contact,
  },
  setup() {
    onMounted(() => {
      AOS.init();
    });
  },
};
</script>
