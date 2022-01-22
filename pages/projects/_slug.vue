<template>
  <div>{{ slug }}</div>
</template>
<script>
export default {
  name: 'ProjectPage',
  async asyncData({ params }) {
    const slug = params.slug
    return { slug }
  },
}
</script>
