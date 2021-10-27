<template>
  <div>
    <span class="dark:text-white text-black">
      <font-awesome-icon :icon="['far', 'sun']" size="lg" />
    </span>
    <div
      class="
        relative
        inline-block
        w-10
        mx-2
        align-middle
        select-none
        transition
        duration-200
        ease-in
      "
    >
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        class="
          toggle-checkbox
          absolute
          block
          w-6
          h-6
          rounded-full
          bg-white
          border-4
          appearance-none
          cursor-pointer
        "
        v-model="isToggle"
      />
      <label
        for="toggle"
        class="
          toggle-label
          block
          overflow-hidden
          h-6
          rounded-full
          bg-gray-300
          cursor-pointer
        "
      ></label>
    </div>
    <span class="dark:text-white text-black">
      <font-awesome-icon :icon="['fas', 'moon']" size="lg" />
    </span>
  </div>
</template>
<script>
import { ref, onMounted, watch } from "vue";
export default {
  setup() {
    const isToggle = ref(false);

    const html = document.querySelector("html");

    onMounted(() => {
      if (html.classList.contains("dark")) {
        isToggle.value = true;
      }
    });

    watch(isToggle, (newVal) =>
      newVal ? html.classList.add("dark") : html.classList.remove("dark")
    );

    return {
      isToggle,
    };
  },
};
</script>

<style scoped>
.toggle-checkbox:checked {
  @apply: right-0 border-green-400;
  right: 0;
  border-color: #68d391;
}
.toggle-checkbox:checked + .toggle-label {
  @apply: bg-green-400;
  background-color: #68d391;
}
</style>
