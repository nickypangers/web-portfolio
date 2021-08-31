<template>
  <div class="project-card mb-4">
    <h3>
      {{ project.name }}
    </h3>
    <div v-if="project.inprogress" class="mt-3 in-progress">
      <p>
        In Progress
      </p>
    </div>
    <p class="mt-3">
      {{ project.description }}
    </p>
    <div class="mt-3 d-flex">
      <p
        class="me-3 mb-0 tech-name"
        v-for="(tech, index) in project.techs"
        :key="'tech-' + index"
      >
        {{ tech }}
      </p>
    </div>
    <div class="mt-3 d-flex">
      <a
        v-for="link in project.links"
        :key="'link-' + link.icon[1]"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="me-3 link-icon"
      >
        <font-awesome-icon :icon="link.icon" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: Object,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.project-card {
  width: 100%;
  height: 400px;
  padding: 25px;
  background-color: $light-primary;
}

h3 {
  color: $light-title;
  font-weight: bold;
  font-size: 1.3rem;
}

p {
  font-size: 1em;
}

.tech-name {
  font-family: "Source Code Pro", monospace;
  color: $text;
}

.in-progress {
  background-color: green;
  color: white;
  width: fit-content;
  padding: 0.5rem;
  border-radius: 1rem;
  font-size: 0.7rem;

  p {
    margin: 0;
  }
}
</style>
