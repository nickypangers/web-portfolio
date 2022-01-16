<template>
  <section id="description">
    <div class="overflow-hidden">
      <div
        class="container flex flex-col justify-center items-start"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <!-- <div class="content" v-html="$md.render(content)"></div> -->
        <p class="text-2xl mb-6">
          My name is Nixon Pang and I'm a Programmer with professional
          experience in creating websites and mobile applications for both
          Android and iOS.
        </p>
        <p>
          I recently worked as a Web/Mobile Application developer at a digital
          agency based in Hong Kong. My role was to include turning design
          wireframes and client's ideas into reality.
        </p>
        <p>
          While I have the right to work in both Canada and Hong Kong, I'm open
          to relocation on a global level should the opportunity arise.
        </p>
        <p>
          I am active on
          <a
            href="https://www.linkedin.com/in/nixon-pang/"
            target="_blank"
            rel="noopener noreferrer"
            >LinkedIn</a
          >
          and regularly updating my personal projects on
          <a
            href="https://github.com/nickypangers"
            target="_blank"
            rel="noopener noreferrer"
            >Github</a
          >. I also occasionally reply to questions on
          <a
            href="https://stackoverflow.com/users/13772987/nickypangers"
            target="_blank"
            rel="noopener noreferrer"
            >Stack Overflow</a
          >.
        </p>
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
}
</script>
<style scoped>
.content {
  @apply whitespace-pre-line;
}

p {
  @apply font-extralight text-xl mb-6 dark:text-white;
}

a {
  @apply text-blue-600 dark:text-blue-300 hover:underline;
}
</style>
