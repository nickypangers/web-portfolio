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
      <div class="w-auto lg:mr-20 grid grid-cols-1 gap-4 lg:block lg:mb-0 mb-4">
        <div class="w-full lg:mb-6 hidden lg:block">
          <p class="mb-1 font-bold text-resumeheading">nickypangers.com</p>
          <p class="mb-1">Hong Kong</p>
          <a href="mailto:nixon@nickypangers.com"
            ><p class="font-bold text-resumeheading">
              nixon@nickypangers.com
            </p></a
          >
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-1">
          <List
            title="Core Technologies"
            :list="resume.coreTechnologies"
            v-if="config.coreTechnologies"
          />
          <List title="Others" :list="resume.others" v-if="config.others" />
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
          <div class="pt-8">
            <Experience
              v-for="(experience, index) in resume.experiences"
              :key="'experience-' + index"
              :experience="experience"
            />
          </div>
        </section>
        <section id="education" v-if="config.education">
          <Education title="Education" :education="resume.education" />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import { resumeData } from '@/assets/resume.js'
import Experience from '@/components/Experience.vue'
import Projects from '@/components/Projects.vue'
import List from '@/components/List.vue'
import Education from '@/components/Education.vue'
export default {
  components: {
    Experience,
    Projects,
    List,
    Education,
  },
  head() {
    return {
      title: 'Resume - Nixon Pang',
    }
  },
  layout: 'resume',
  computed: {
    resume: function () {
      return resumeData
    },
    config: function () {
      return this.resume.config
    },
    coreTechlogiesList: function () {
      return this.resume.coreTechnologies.join(', ')
    },
    othersList: function () {
      return this.resume.others.join(', ')
    },
  },
}
</script>

<style scoped>
main {
  @apply bg-resume lg:mx-20 lg:my-16 px-8 pt-32 pb-10 w-auto h-auto flex lg:flex-row flex-col text-resumetext relative;
}
</style>
