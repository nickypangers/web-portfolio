<template>
  <main tabindex="-1">
    <aside class="links lg:block hidden absolute top-16 right-8">
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
          <button>
            <p>
              <span>
                <font-awesome-icon :icon="['fas', 'file-download']" size="lg" />
              </span>
              &nbsp;Download
            </p>
          </button>
        </div>
      </div>
    </aside>
    <div class="w-auto lg:mr-20 flex lg:flex-col flex-row">
      <div class="w-full lg:mb-6 hidden lg:block">
        <p class="mb-1 font-bold text-resumeheading">nickypangers.com</p>
        <p class="mb-1">Hong Kong</p>
        <p class="font-bold text-resumeheading">nixon@nickypangers.com</p>
      </div>
      <div class="w-full lg:mb-6">
        <h3 class="font-bold text-lg text-resumeheading">Core Technologies:</h3>
        <ul class="resume-list lg:block hidden">
          <li
            v-for="(tech, index) in resumeData.coreTechnologies"
            :key="'tech-' + index"
          >
            {{ tech }}
          </li>
        </ul>
        <p class="lg:hidden block">{{ coreTechnolgiesList }}</p>
      </div>
      <div class="w-full">
        <h3 class="font-bold text-lg text-resumeheading">Others:</h3>
        <ul class="resume-list lg:block hidden">
          <li v-for="(tech, index) in resumeData.others" :key="'tech-' + index">
            {{ tech }}
          </li>
        </ul>
        <p class="lg:hidden block">{{ othersList }}</p>
      </div>
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
export default {
  components: {
    Experience,
    Projects,
  },
  setup() {
    const coreTechnolgiesList = computed(() =>
      resumeData.coreTechnologies.join(", ")
    );

    const othersList = computed(() => resumeData.others.join(", "));

    return {
      resumeData,
      coreTechnolgiesList,
      othersList,
    };
  },
};
</script>

<style scoped>
main {
  @apply bg-resume lg:mx-20 lg:my-16 px-16 py-16 lg:py-32 pb-10 w-auto h-auto flex lg:flex-row flex-col text-resumetext relative;
}
</style>
