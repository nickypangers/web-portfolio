<template>
  <div class="home">
    <Hero />
    <PortfolioSection />
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import PortfolioSection from "@/components/Portfolio";
export default {
  name: "Home",
  components: {
    Hero,
    PortfolioSection,
  },
};
</script>
