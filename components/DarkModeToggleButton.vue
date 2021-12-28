<template>
  <div>
    <span class="dark:text-white text-black">
      <font-awesome-icon :icon="['far', 'sun']" size="lg" />
    </span>
    <div
      class="relative inline-block w-10 mx-2 align-middle select-none transition duration-200 ease-in"
    >
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        v-model="isToggle"
      />
      <label
        for="toggle"
        class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
      ></label>
    </div>
    <span class="dark:text-white text-black">
      <font-awesome-icon :icon="['fas', 'moon']" size="lg" />
    </span>
  </div>
</template>
<script>
export default {
  name: 'DarkModeToggleButton',
  data() {
    return {
      isToggle: false,
    }
  },
  computed: {
    html: function () {
      return document.querySelector('html')
    },
  },
  mounted() {
    if (this.html.classList.contains('dark')) {
      this.isToggle = true
    }
  },
  watch: {
    isToggle(newVal) {
      newVal
        ? this.html.classList.add('dark')
        : this.html.classList.remove('dark')
    },
  },
}
</script>
<style scoped>
.toggle-checkbox:checked {
  right: 0;
  border-color: #68d391;
}

.toggle-checkbox:checked + .toggle-label {
  background-color: #68d391;
}
</style>
