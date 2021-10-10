<template>
  <div class="bg-white">
    <main tabindex="-1">
      <aside class="links absolute top-16 lg:right-16 right-8">
        <div class="flex align-center">
          <div class="mr-8">
            <a
              href="https://www.linkedin.com/in/nixon-pang"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                class="text-blue-600"
                name="resume-linkedin"
                aria-label="resume-linkedin"
              >
                <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" />
              </button>
            </a>
          </div>
          <div>
            <a href="/resume.pdf" download>
              <button name="resume-download" aria-label="resume-download">
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
      <div
        class="
          w-auto
          lg:mr-20
          grid grid-cols-1
          md:grid-cols-2
          gap-4
          lg:block lg:mb-0
          mb-4
        "
      >
        <div class="w-full lg:mb-6">
          <p class="mb-1 font-bold text-resumeheading">nickypangers.com</p>
          <p class="mb-1">Hong Kong</p>
          <a href="mailto:nixon@nickypangers.com"
            ><p class="font-bold text-resumeheading">
              nixon@nickypangers.com
            </p></a
          >
        </div>
        <List
          title="Core Technologies"
          :list="resumeData.coreTechnologies"
          v-if="config.coreTechnologies"
        />
        <List title="Others" :list="resumeData.others" v-if="config.others" />
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
          <div class="pt-8">
            <Experience
              v-for="(experience, index) in resumeData.experiences"
              :key="'experience-' + index"
              :experience="experience"
            />
          </div>
        </section>
        <section id="education" v-if="config.education">
          <Education title="Education" :education="resumeData.education" />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </div>
    </main>
  </div>
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
  @apply bg-resume lg:mx-20 lg:my-16 px-8 pt-32 pb-10 w-auto h-auto flex lg:flex-row flex-col text-resumetext relative;
}
</style>
