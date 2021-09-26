<template>
  <div class="home">
    <Hero />
    <SkillSection />
    <PortfolioSection />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import SkillSection from "@/components/SkillSection";
import PortfolioSection from "@/components/Portfolio";
export default {
  name: "Home",
  components: {
    Hero,
    SkillSection,
    PortfolioSection,
  },
};
</script>
