<template>
  <div class="container px-4 md:p-0">
    <hero />
    <description />
    <about />
    <skills />
    <contact />
  </div>
</template>

<script>
import Description from '@/components/Description.vue'
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Contact from '@/components/Contact.vue'
export default {
  name: 'Index',
  components: { Description, Hero, About, Skills, Contact },
  head() {
    return {
      title: 'Nixon Pang',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Nixon Pang - Software Developer',
        },
      ],
    }
  },
}
</script>
