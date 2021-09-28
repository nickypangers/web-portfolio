<template>
  <section id="about">
    <div class="bg-white">
      <div class="container flex justify-center items-center pt-24">
        <div class="w-full lg:w-1/2 mx-6 md:mx-0 text-black">
          <SectionTitle image-path="thinking" title="Who Am I?" />
          <p class="font-extralight text-xl mb-6">
            I was born in Hong Kong and can speak fluent
            <span class="font-extrabold">Cantonese</span>,
            <span class="font-extrabold">Mandarin</span> and
            <span class="font-extrabold">English</span>. I completed my
            secondary and higher educations in the UK, and graduated from the
            University of Leeds with a Bachelor's degree in
            <span class="font-extrabold"
              >Electronic and Electrical Engineering</span
            >. After working in the field for a year, I have decided to pursue a
            career in Programming and have been working as a web/mobile
            application developer since November 2020.
          </p>
          <p class="font-extralight text-xl mb-6">
            Outside of work, I enjoy exploring new technologies to learn as well
            as doing exercise such as Muay Thai and occasional gaming with
            friends. I also enjoy travelling a lot, hopefully I can do that once
            COVID is gone.
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
