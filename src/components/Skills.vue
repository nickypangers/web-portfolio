<template>
  <section id="skills">
    <div class="bg-white">
      <div class="container flex justify-center items-center pt-24">
        <div class="w-full lg:w-1/2 mx-6 md:mx-0 text-black">
          <SectionTitle image-name="computer" title="My Tech Stack" />
          <p class="font-extralight text-xl mb-6">
            I use variety of technologies for both work and personally, and am
            always looking to learn more to improve my skills.
          </p>
          <p class="font-extralight text-xl mb-6">
            For frontend, I mainly use
            <span class="font-extrabold">HTML</span>,
            <span class="font-extrabold">CSS</span>,
            <span class="font-extrabold">SCSS</span>, and
            <span class="font-extrabold">Vue.js</span>. I have also been looking
            into <span class="font-extrabold">Nuxt.js</span> lately.
          </p>
          <p class="font-extralight text-xl mb-6">
            For backend, I prefer using
            <span class="font-extrabold">Golang</span>. Although, I have used
            <span class="font-extrabold">PHP</span> and
            <span class="font-extrabold">MySQL</span> during work.
          </p>
          <p class="font-extralight text-xl mb-6">
            For mobile, <span class="font-extrabold">Flutter</span> is my
            favoured method of developing both Android and iOS applications.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from "@/components/SectionTitle";
export default {
  components: {
    SectionTitle,
  },
  setup() {},
};
</script>
