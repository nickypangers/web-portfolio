<template>
  <section id="skill">
    <div class="mb-24">
      <div class="w-full -mt-48 flex justify-center items-center">
        <div
          class="
            skill-box
            bg-white
            mx-10
            my-0
            h-auto
            rounded-xl
            grid grid-cols-1
            lg:grid-cols-3
            divide-y
            lg:divide-x
            divide-solid divide-gray-200
            border border-gray-200
          "
        >
          <SkillColumn :frontend="true" :skill="skills.frontend" />
          <SkillColumn :backend="true" :skill="skills.backend" />
          <SkillColumn :mobile="true" :skill="skills.mobile" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillColumn from "@/components/SkillColumn";
import data from "@/assets/data/skills.json";
export default {
  components: {
    SkillColumn,
  },
  setup() {
    const skills = data;

    return {
      skills,
    };
  },
};
</script>

<style scoped>
.skill-box {
  max-width: 1200px;
}
</style>
