<template>
  <section id="about">
    <div class="overflow-hidden">
      <div data-aos="fade-up" data-aos-delay="300">
        <div class="bg-white">
          <div class="content-box">
            <div class="content-area">
              <section-title image-name="thinking" title="Who Am I?" />
              <p>
                I was born in Hong Kong and can speak fluent
                <span class="font-extrabold">Cantonese</span>,
                <span class="font-extrabold">Mandarin</span> and
                <span class="font-extrabold">English</span>. I completed my
                secondary and higher educations in the UK, and graduated from
                the University of Leeds with a Bachelor's degree in
                <span class="font-extrabold"
                  >Electronic and Electrical Engineering</span
                >. After working in the field for a year, I have decided to
                pursue a career in Programming and have been working as a
                web/mobile application developer since November 2020.
              </p>
              <p>
                Outside of work, I enjoy exploring new technologies to learn as
                well as doing exercise such as Muay Thai and occasional gaming
                with friends. I also enjoy travelling a lot, hopefully I can do
                that once COVID is gone.
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
