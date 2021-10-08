<template>
  <div class="overflow-hidden">
    <div data-aos="fade-up" data-aos-duration="800">
      <div class="container pb-8">
        <page-hero
          route="work"
          subtitle="Below are projects I'm working on currently or worked on in the past."
        />
        <section id="work">
          <div
            class="
              grid grid-cols-1
              gap-5
              md:grid-cols-2
              lg:grid-cols-3
              px-4
              lg:px-0
            "
          >
            <template v-for="(work, index) in workList" :key="'work-' + index">
              <WorkTile v-if="work.isDisplay" :work="work" />
            </template>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import PageHero from "@/components/PageHero";
import WorkTile from "@/components/WorkTile";
import data from "@/assets/data/works.json";
export default {
  components: {
    PageHero,
    WorkTile,
  },
  setup() {
    const workList = data.works;
    return {
      workList,
    };
  },
};
</script>
