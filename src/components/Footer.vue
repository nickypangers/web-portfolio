<template>
  <div
    class="footer w-100 d-flex align-items-center justify-content-between p-4"
  >
    <div>
      <router-link :to="{ path: '/', hash: '#about' }">About</router-link>
    </div>
    <div>
      <router-link :to="{ path: '/', hash: '#work' }">Work</router-link>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: $bg-footer;
  color: $footer-text;
  height: $footer-height;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
}
</style>
