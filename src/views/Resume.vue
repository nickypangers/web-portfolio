<template>
  <main tabindex="-1">
    <div class="w-auto lg:mr-20 flex lg:flex-col flex-row">
      <div class="w-full lg:mb-6 hidden lg:block">
        <p class="mb-1 font-bold">nickypangers.com</p>
        <p class="mb-1">Hong Kong</p>
        <p class="font-bold">nixon@nickypangers.com</p>
      </div>
      <div class="w-full lg:mb-6">
        <h3 class="font-bold text-lg">Core Technologies:</h3>
        <ul class="resume-list">
          <li>Javascript</li>
          <li>Vue.js</li>
          <li>PHP</li>
          <li>Go</li>
        </ul>
      </div>
      <div class="w-full">
        <h3 class="font-bold text-lg">Others:</h3>
        <ul class="resume-list">
          <li>Javascript</li>
          <li>Vue.js</li>
          <li>PHP</li>
          <li>Go</li>
        </ul>
      </div>
    </div>
    <div class="w-full mt-5 lg:mt-0 col-span-2 divide-y divide-black">
      <div class="">
        <p class="text-6xl font-extrabold mb-4">Nixon</p>
        <p class="text-6xl font-extrabold mb-4">Pang</p>
        <p class="text-2xl mt-8">Web/Mobile Application Developer</p>
        <p class="my-8 lg:mr-52 text-lg">
          Engineer valued for driving high-performance accessible web
          experiences. I design quality, user-friendly and scalable products
          regardless of stack.
        </p>
      </div>
      <div>
        <Experience
          v-for="(experience, index) in list"
          :key="'experience-' + index"
          :experience="experience"
        />
      </div>
    </div>
  </main>
</template>

<script>
import data from "@/assets/data/experiences.json";
import Experience from "@/components/Experience";
export default {
  components: {
    Experience,
  },
  setup() {
    const list = data.experiences;

    return {
      list,
    };
  },
};
</script>

<style scoped>
main {
  @apply bg-gray-100 lg:mx-20 lg:my-16 px-16 py-16 lg:py-32 pb-10 w-auto h-auto flex lg:flex-row flex-col;
}
</style>
