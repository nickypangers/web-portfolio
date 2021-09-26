<template>
  <div class="skill-column flex flex-col items-center py-16 px-8 text-center">
    <img
      class="skill-icon mb-6"
      src="../assets/svg/mobile-icon.svg"
      alt="mobile icon"
      v-if="mobile"
    />
    <img
      class="skill-icon mb-6"
      src="../assets/svg/laptop-icon.svg"
      alt="laptop icon"
      v-if="frontend"
    />
    <img
      class="skill-icon mb-6"
      src="../assets/svg/server-icon.svg"
      alt="server icon"
      v-if="backend"
    />
    <p class="font-extrabold text-2xl mb-6">{{ skill.title }}</p>
    <div>
      <p class="text-primary mb-6">Languages that I speak:</p>
      <p class="">{{ languageList }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    frontend: {
      type: Boolean,
      default: false,
    },
    backend: {
      type: Boolean,
      default: false,
    },
    mobile: {
      type: Boolean,
      default: false,
    },
    skill: {
      type: Object,
    },
  },
  setup(props) {
    const languageList = computed(() => props.skill.languages.join());

    return {
      languageList,
    };
  },
};
</script>

<style scoped>
.skill-column {
  height: 1200px;
}

.skill-icon {
  width: 50px;
}
</style>
