<template>
  <div class="overflow-hidden">
    <div data-aos="fade-down" data-aos-duration="800">
      <div
        class="
          min-h-28
          flex flex-col
          lg:flex-row lg:justify-between
          items-center
          p-8
        "
      >
        <div class="flex justify-end mb-3 lg:mb-0">
          <DarkModeToggleButton />
        </div>
        <ul class="flex">
          <template
            v-for="(navItem, index) in navItemList.items"
            :key="'navItem-' + index"
          >
            <NavButton :nav-item="navItem" v-if="navItem.display" />
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import DarkModeToggleButton from "@/components/DarkModeToggleButton";
import NavButton from "@/components/NavButton";
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import navItemList from "@/assets/data/navitems.json";
export default {
  components: {
    NavButton,
    DarkModeToggleButton,
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
