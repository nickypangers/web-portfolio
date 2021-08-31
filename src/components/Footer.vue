<template>
  <div
    class="footer container d-flex flex-column justify-content-center align-items-center"
  >
    <div class="w-50 d-flex justify-content-between align-items-center">
      <a
        href="https://www.linkedin.com/in/nixon-pang/"
        target="_blank"
        rel="noopener noreferrer"
        class="link-icon"
        ><font-awesome-icon :icon="['fab', 'linkedin-in']"
      /></a>
      <a
        href="https://stackoverflow.com/users/13772987/nickypangers"
        target="_blank"
        rel="noopener noreferrer"
        class="link-icon"
        ><font-awesome-icon :icon="['fab', 'stack-overflow']"
      /></a>
      <a
        href="https://github.com/nickypangers"
        target="_blank"
        rel="noopener noreferrer"
        class="link-icon"
        ><font-awesome-icon :icon="['fab', 'github']"
      /></a>
    </div>
    <div class="mt-4">
      Designed and built by Nixon Pang
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
  height: 10vh;
  margin-bottom: 30px;
}
</style>
