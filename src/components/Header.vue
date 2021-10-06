<template>
  <div class="overflow-hidden">
    <div data-aos="fade-down" data-aos-duration="800">
      <div class="h-28 flex justify-between items-center p-8">
        <p>Hello</p>
        <ul class="flex">
          <nav-button
            v-for="(navItem, index) in navItemList.items"
            :key="'navItem-' + index"
            :nav-item="navItem"
          ></nav-button>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NavButton from "@/components/NavButton";
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import navItemList from "@/assets/data/navitems.json";
export default {
  components: {
    NavButton,
  },
  setup() {
    const isLastNavItem = (index) => {
      if (index == navItemList.items.length - 1) {
        return true;
      }
      return false;
    };

    onMounted(() => {
      AOS.init();
    });

    return {
      navItemList,
      isLastNavItem,
    };
  },
};
</script>
