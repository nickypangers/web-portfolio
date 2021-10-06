<template>
  <Header />
  <!-- <div>hi</div> -->
  <router-view />
  <Footer />
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {
    Header,
    Footer,
  },
  setup() {},
};
</script>

<style>
.content-box {
  @apply flex justify-center items-center pt-24;
}

.content-area {
  @apply w-full lg:w-1/2 mx-6 md:mx-0 text-black;
}
</style>
