<template>
  <div class="home">
    <Hero />
    <SkillSection />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import SkillSection from "@/components/SkillSection";
export default {
  name: "Home",
  components: {
    Hero,
    SkillSection,
  },
};
</script>
