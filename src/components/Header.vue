<template>
  <header>
    <!-- <div
      class="header d-flex flex-lg-row flex-column justify-content-lg-between align-items-lg-center justify-content-center"
    >
      <div class="header-section text-start">{{ date }}</div>
      <router-link to="/#testing"
        ><div class="header-section">Testing</div></router-link
      >
      <div class="header-section text-end">My CV</div>
    </div> -->
  </header>
</template>

<script>
import { computed } from "vue";

export default {
  name: "Header",
  setup() {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const date = computed(() => {
      let event = new Date();
      return event.toLocaleDateString(undefined, options);
    });

    return {
      date,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  border: 1px solid transparent;
  background-color: transparent;
  height: 8rem;
  padding: 3rem;
}

.header-section {
  width: 20%;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
