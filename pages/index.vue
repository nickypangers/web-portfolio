<template>
  <div class="container px-4 md:p-0">
    <hero />
    <description :content="story.content.description" />
    <about />
    <skills />
    <contact /> {{ story }}
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
  async asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/home', {
        version: 'draft',
      })
      .then((res) => {
        // console.log(res.data)
        return res.data
      })
      .catch((res) => {
        if (!res.response) {
          console.error(res)
          context.error({
            statusCode: 404,
            message: 'Failed to receive content from api',
          })
        } else {
          console.error(res.response.data)
          context.error({
            statusCode: res.response.status,
            message: res.response.data,
          })
        }
      })
  },
  data() {
    return {
      story: {
        content: {},
      },
    }
  },
}
</script>
