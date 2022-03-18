<template>
  <section id="description">
    <div class="overflow-hidden">
      <div
        class="container flex flex-col justify-center items-start"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div v-html="$md.render(content)" class="content"></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Description',
  props: {
    content: {
      type: String,
      default: '',
    },
  },
  mounted() {
    // console.log(this.content)
  },
}
</script>
<style scoped>
.content >>> p {
  @apply font-extralight text-xl mb-6 dark:text-white;
}

.content >>> a {
  @apply text-blue-600 dark:text-blue-300 hover:underline;
}
</style>
