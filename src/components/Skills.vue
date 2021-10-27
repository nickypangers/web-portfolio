<template>
  <section id="skills">
    <div class="overflow-hidden">
      <div data-aos="fade-up" data-aos-delay="300">
        <div class="bg-white">
          <div class="content-box">
            <div class="content-area">
              <section-title image-name="computer" title="My Tech Stack" />
              <p>
                I use variety of technologies for both work and personally, and
                am always looking to learn more to improve my skills.
              </p>
              <p>
                For frontend, I mainly use
                <span class="font-extrabold">HTML</span>,
                <span class="font-extrabold">CSS</span>,
                <span class="font-extrabold">SCSS</span>, and
                <span class="font-extrabold">Vue.js</span>. Furthermore, I have
                experience in using
                <span class="font-extrabold">Bootstrap</span> and
                <span class="font-extrabold">Tailwind</span>. Lately, I have
                been studying <span class="font-extrabold">Nuxt.js</span>.
              </p>
              <p>
                For backend, I prefer using
                <span class="font-extrabold">Golang</span>. Although, I mainly
                use <span class="font-extrabold">PHP</span> and
                <span class="font-extrabold">MySQL</span> during work.
              </p>
              <p>
                For mobile, <span class="font-extrabold">Flutter</span>
                is my favoured method for developing both Android and iOS
                applications.
              </p>
            </div>
          </div>
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

<style scoped>
p {
  @apply font-extralight text-xl mb-6;
}
</style>
