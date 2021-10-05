<template>
  <div class="overflow-hidden">
    <div data-aos="fade-down" data-aos-duration="800">
      <div class="h-28 flex justify-between items-center p-8">
        <p>Hello</p>
        <ul class="flex">
          <!-- <li class="mr-8">Home</li>
          <li class="mr-8">Work</li>
          <li>More</li> -->
          <router-link
            v-for="(navItem, index) in navItemList.items"
            :key="'navItem-' + index"
            :to="navItem.route"
            :class="{ 'mr-8': !isLastNavItem(index) }"
          >
            <li>
              {{ navItem.name }}
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import navItemList from "@/assets/data/navitems.json";
export default {
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
