<template>
  <main tabindex="-1">
    <aside class="links lg:block hidden absolute top-16 right-16">
      <div class="flex align-center">
        <div class="mr-8">
          <a
            href="https://www.linkedin.com/in/nixon-pang"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="text-blue-600">
              <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" />
            </button>
          </a>
        </div>
        <div>
          <a :href="pdfLink" download>
            <button>
              <p>
                <span>
                  <font-awesome-icon
                    :icon="['fas', 'file-download']"
                    size="lg"
                  />
                </span>
                &nbsp;Download
              </p>
            </button>
          </a>
        </div>
      </div>
    </aside>
    <div class="w-auto lg:mr-20 grid grid-cols-2 gap-4 lg:block lg:mb-0 mb-4">
      <div class="w-full lg:mb-6 hidden lg:block">
        <p class="mb-1 font-bold text-resumeheading">nickypangers.com</p>
        <p class="mb-1">Hong Kong</p>
        <a href="mailto:nixon@nickypangers.com"
          ><p class="font-bold text-resumeheading">nixon@nickypangers.com</p></a
        >
      </div>
      <List
        title="Core Technologies"
        :list="resumeData.coreTechnologies"
        v-if="config.coreTechnologies"
      />
      <List title="Others" :list="resumeData.others" v-if="config.others" />
      <Education
        title="Education"
        :education="resumeData.education"
        v-if="config.education"
      />
    </div>
    <div class="w-full mt-5 lg:mt-0 col-span-2 divide-y divide-black">
      <section id="introduction">
        <div>
          <p class="text-6xl font-extrabold mb-4 text-resumeheading">Nixon</p>
          <p class="text-6xl font-extrabold mb-4 text-resumeheading">Pang</p>
          <p class="text-2xl mt-8">Web/Mobile Application Developer</p>
          <p class="my-8 lg:mr-52 text-lg">
            Engineer valued for driving high-performance accessible web
            experiences. I design quality, user-friendly and scalable products
            regardless of stack.
          </p>
        </div>
      </section>
      <section id="experiences">
        <div>
          <Experience
            v-for="(experience, index) in resumeData.experiences"
            :key="'experience-' + index"
            :experience="experience"
          />
        </div>
      </section>
      <Projects />
    </div>
  </main>
</template>

<script>
import { computed } from "vue";
import { resumeData } from "@/assets/data/resume.js";
import Experience from "@/components/resume/Experience";
import Projects from "@/components/resume/Projects";
import List from "@/components/resume/List";
import Education from "@/components/resume/Education";
export default {
  components: {
    Experience,
    Projects,
    List,
    Education,
  },
  setup() {
    const config = resumeData.config;

    const coreTechnolgiesList = computed(() =>
      resumeData.coreTechnologies.join(", ")
    );

    const othersList = computed(() => resumeData.others.join(", "));

    return {
      resumeData,
      coreTechnolgiesList,
      othersList,
      config,
    };
  },
};
</script>

<style scoped>
main {
  @apply bg-resume lg:mx-20 lg:my-16 px-16 py-16 lg:py-32 pb-10 w-auto h-auto flex lg:flex-row flex-col text-resumetext relative;
}
</style>
