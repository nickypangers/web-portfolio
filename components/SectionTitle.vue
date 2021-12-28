<template>
  <div class="flex items-center h-24 mb-6">
    <div
      class="w-24 h-24 border rounded-3xl p-2 h-full shadow"
      v-if="imageName"
    >
      <div
        class="h-full w-full rounded-2xl icon-box flex justify-center items-center"
      >
        <img
          :src="`/images/${imageName}.webp`"
          alt="thinking"
          width="78"
          height="78"
        />
      </div>
    </div>
    <p
      class="font-extrabold text-4xl md:text-5xl gradient-text"
      :class="{ 'ml-6': imageName }"
    >
      {{ title }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    imageName: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.icon-box {
  background: linear-gradient(
      135deg,
      rgb(255, 215, 178) 10.55%,
      rgb(252, 165, 191) 26.09%,
      rgb(255, 227, 128) 41.63%,
      rgb(149, 229, 202) 56.79%,
      rgb(141, 208, 252) 70.78%,
      rgb(195, 202, 211) 85.16%
    )
    0% 0% / 500% 500%;
  animation: 25s ease 0s infinite normal none running gradientKeyframes;
}

@keyframes gradientKeyframes {
  0% {
    background-position: 0 0;
  }

  25% {
    background-position: 50% 50%;
  }

  50% {
    background-position: 100% 100%;
  }

  75% {
    background-position: 50% 50%;
  }

  100% {
    background-position: 0 0;
  }
}
</style>
