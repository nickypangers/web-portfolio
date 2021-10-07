<template>
  <a :href="work.link">
    <div
      class="
        w-full
        shadow-lg
        rounded-xl
        transform
        hover:-translate-y-2.5
        ease-in-out
        duration-150
      "
    >
      <div
        class="
          image-wrapper
          p-4
          rounded-t-xl
          h-2/3
          flex
          justify-center
          items-center
          bg-gray-300
        "
      >
        <img
          class="aspect-none h-1/2 w-1/2"
          :class="work.image.objectFit ?? 'object-contain'"
          :src="getImageSrc()"
          :alt="work.image.alt"
        />
      </div>
      <div
        class="
          h-1/3
          px-6
          py-10
          rounded-b-xl
          text-xl
          flex flex-col
          justify-around
          items-start
        "
      >
        <p class="font-bold mb-3">{{ work.name }}</p>
        <p class="text-blue-600 text-lg">{{ work.displayLink }}</p>
      </div>
    </div>
  </a>
</template>
<script>
import { onMounted } from "vue";
export default {
  props: {
    work: Object,
  },
  setup(props) {
    const getImageSrc = () =>
      props.work.image.isLocal
        ? require(`../assets/${props.work.image.link}`)
        : props.work.image.link;

    onMounted(() => {
      console.log(props.work);
    });

    return {
      getImageSrc,
    };
  },
};
</script>
<style scoped>
.image-wrapper {
  height: 250px;
  width: 100%;
}
</style>
