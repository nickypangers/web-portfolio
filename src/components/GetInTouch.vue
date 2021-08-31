<template>
  <div
    id="get-in-touch"
    class="section get-in-touch d-flex flex-column justify-content-center align-items-center"
  >
    <h2>
      Get In Touch
    </h2>
    <p>
      My inbox is always open. Feel free to send me an email if you have any
      questions and I will try my best to get back to you!
    </p>
    <div
      class="w-100 h-100 d-flex align-items-center justify-content-center mt-4"
    >
      <a
        href="mailto:nickypangers@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        ><button class="btn">Contact Me</button></a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "GetInTouch",
  setup() {},
};
</script>

<style lang="scss" scoped>
button {
  background-color: $secondary;
  color: $primary;
}
</style>
