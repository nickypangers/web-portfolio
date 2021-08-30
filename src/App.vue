<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view />
  <Footer />
  <router-link :to="{ path: '/', hash: '' }"
    ><button
      class="back-top"
      :class="{ 'd-block': showBackTop, 'd-none': !showBackTop }"
    >
      Back To Top
    </button></router-link
  >
</template>

<script>
import { ref, onMounted } from "vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Footer,
  },
  setup() {
    const showBackTop = ref(false);

    const onScroll = () => {
      // console.log(window.top.scrollY);
      if (window.top.scrollY > 100) {
        showBackTop.value = true;
        return;
      }

      showBackTop.value = false;
    };

    onMounted(() => {
      console.log("mounted");
      window.addEventListener("scroll", onScroll);
    });

    return {
      showBackTop,
    };
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
