<template>
  <section id="contact">
    <div class="overflow-hidden">
      <div data-aos="fade-up" data-aos-delay="300">
        <div class="bg-white">
          <div class="container-box">
            <div class="container-content">
              <section-title title="Contact" />
              <p>
                Feel free to contact me at
                <a href="mailto:nixon@nickypangers.com"
                  >nixon@nickypangers.com</a
                >
                below if you have any enquiries, or just say hello!
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
  components: { SectionTitle },
  setup() {},
};
</script>

<style scoped>
p {
  @apply font-extralight text-xl mb-6;
}

a {
  @apply text-blue-600 hover:underline;
}
</style>
