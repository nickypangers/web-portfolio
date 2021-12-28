<template>
  <div class="dark:bg-darkprimary">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  mounted() {
    AOS.init()
  },
}
</script>
