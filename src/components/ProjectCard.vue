<template>
  <div class="project-card">
    <div>
      <p>
        {{ title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    title: String,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.project-card {
  width: 100%;
  height: 400px;
  padding: 25px;
  background-color: lightcoral;
}

p {
  color: white;
}
</style>
