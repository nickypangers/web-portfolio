<template>
  <footer>
    <div class="bg-white dark:bg-darkprimary border-t">
      <div class="container flex justify-center items-center py-12">
        <div class="content-area text-center">
          <p class="footer-text">
            &copy; {{ year }} &nbsp;&nbsp; Build by Nixon Pang
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    year: function () {
      return new Date().getFullYear()
    },
  },
}
</script>

<style scoped>
p {
  @apply font-light;
}

.footer-text {
  @apply text-black dark:text-white text-xs;
}
</style>
