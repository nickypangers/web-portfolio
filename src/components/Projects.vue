<template>
  <div id="projects" class="section work text-start">
    <div class="p-2">
      <h2>Projects</h2>
      <div class="mt-4">
        <ProjectCard title="hi"/>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";

import ProjectCard from "@/components/ProjectCard.vue";

export default {
  name: "Projects",
  components: { ProjectCard },
  setup() {
    onMounted(() => {});
  },
};
</script>

<style lang="scss" scoped>
.slide {
  width: 100vw;
  height: calc((100vh - 140px) / 2);
  background: blue;
}
</style>
