<template>
  <div id="projects" class="section work container text-start">
    <div class="p-2">
      <h2>Projects</h2>
      <div class="mt-4">
        <ProjectCard
          v-for="(project, index) in projectList"
          :key="'project-' + index"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";

import ProjectCard from "@/components/ProjectCard.vue";

import data from "@/data/projects.json";

export default {
  name: "Projects",
  components: { ProjectCard },

  setup() {
    const projectList = computed(() => data);

    onMounted(() => {});

    return {
      projectList,
    };
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
