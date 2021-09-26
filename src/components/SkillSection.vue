<template>
  <section class="skill relative h-auto">
    <div
      class="
        absolute
        w-full
        -top-56
        inset-x-0
        mb-24
        flex
        justify-center
        items-center
      "
    >
      <div
        class="
          bg-white
          w-9/12
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
