<template>
  <section id="skills">
    <div class="bg-white">
      <div class="container flex justify-center items-center pt-24">
        <div class="w-full lg:w-1/2 mx-6 md:mx-0 text-black">
          <SectionTitle image-path="computer" title="My Tech Stack" />
          <p class="font-extralight text-xl">
            I use variety of technologies for both work and personally, such as
            Go, Vue, HTML+CSS, SCSS and Flutter.
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
