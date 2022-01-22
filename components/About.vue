<template>
  <section id="about">
    <div class="overflow-hidden">
      <div data-aos="fade-up" data-aos-delay="300">
        <div class="bg-white">
          <div class="content-box">
            <div class="content-area">
              <section-title image-name="thinking" title="Who Am I?" />
              <div v-html="$md.render(content)" class="content"></div>
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
  components: {
    SectionTitle,
  },
  props: {
    content: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.content >>> p {
  @apply font-extralight text-xl mb-6;
}

.content >>> p > strong {
  @apply font-extrabold;
}
</style>
