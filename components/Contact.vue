<template>
  <section id="contact">
    <div class="overflow-hidden">
      <div data-aos="fade-up" data-aos-delay="300">
        <div class="bg-white">
          <div class="content-box">
            <div class="content-area">
              <section-title title="Contact" />
              <p>
                Feel free to contact me if you have any enquiries, or just to
                say hello!
              </p>
              <div class="flex justify-around">
                <a href="mailto:nixon@nickypangers.com">
                  <button name="contact-email" aria-label="contact-email">
                    <font-awesome-icon :icon="['far', 'envelope']" size="2x" />
                  </button>
                </a>
                <a
                  href="https://www.instagram.com/nickypangers/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    name="contact-instagram"
                    aria-label="contact-instagram"
                  >
                    <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
                  </button>
                </a>
                <a
                  href="https://twitter.com/nickypangers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button name="contact-twitter" aria-label="contact-twitter">
                    <font-awesome-icon :icon="['fab', 'twitter']" size="2x" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from '@/components/SectionTitle'
export default {
  components: { SectionTitle },
}
</script>

<style scoped>
p {
  @apply font-extralight text-xl mb-6;
}

a {
  @apply text-blue-600 hover:underline;
}

button {
  @apply text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-300;
}
</style>
