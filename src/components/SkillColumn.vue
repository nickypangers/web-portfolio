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
    <p class="font-extrabold text-2xl lg:text-3xl mb-6">{{ skill.title }}</p>
    <div class="mb-6">
      <p>{{ skill.description }}</p>
    </div>
    <div class="mb-6">
      <p class="text-primary mb-6">{{ language }} that I use:</p>
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
    const languageList = computed(() => {
      let array = props.skill.languages;
      let sortedArray = array.sort();
      return sortedArray.join(", ");
    });

    const language = computed(() => {
      if (props.skill.languages.length > 1) {
        return "Languages";
      }
      return "Language";
    });

    return {
      languageList,
      language,
    };
  },
};
</script>

<style scoped>
.skill-column {
  min-height: fit-content;
}

.skill-icon {
  width: 50px;
}
</style>
