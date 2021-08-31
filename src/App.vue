<template>
  <router-view />
  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Footer,
  },
  setup() {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap");

body {
  margin: 0;
  padding: 0;
  background-color: $primary;
  color: $text;
}

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
}

.back-top {
  position: fixed;
  bottom: calc(140px + 2rem);
  right: 2rem;
}
</style>
