<template>
  <div class="overflow-hidden">
    <div data-aos="fade-down" data-aos-duration="800">
      <div
        class="container min-h-28 flex flex-col md:flex-row justify-between items-center py-4 md:py-8"
      >
        <div class="flex justify-end mb-3 lg:mb-0">
          <DarkModeToggleButton />
        </div>
        <div class="flex">
          <template v-for="(navItem, index) in navItemList.items">
            <NavButton
              :nav-item="navItem"
              v-if="navItem.display"
              :key="'navItem-' + index"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navItemList from '@/assets/navitems.json'
import DarkModeToggleButton from '@/components/DarkModeToggleButton.vue'
import NavButton from '@/components/NavButton.vue'
export default {
  name: 'Header',
  components: {
    DarkModeToggleButton,
    NavButton,
  },
  computed: {
    navItemList: function () {
      return navItemList
    },
  },
}
</script>
