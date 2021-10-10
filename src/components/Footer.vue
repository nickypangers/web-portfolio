<template>
  <div id="footer">
    <div class="bg-white dark:bg-darkprimary border-t mt-12">
      <div class="container flex justify-center items-center py-12">
        <div class="content-area text-center">
          <p class="footer-text">
            &copy; {{ year }} &nbsp;&nbsp; Build by Nixon Pang
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const year = new Date().getFullYear();

    return {
      year,
    };
  },
};
</script>

<style scoped>
p {
  @apply font-extralight;
}

.footer-text {
  @apply text-black dark:text-white text-xs;
}
</style>
