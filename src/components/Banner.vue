<template>
  <div
    class="banner container w-100 d-flex justify-content-start align-items-center px-3"
  >
    <div class="w-100 text-start">
      <h1>Nixon Pang</h1>
      <h4>Web / Mobile App Developer</h4>
      <p class="mt-3">
        BEng Electronic and Electrical Engineering, University of Leeds
        <!-- Independent and self-motivated. A keen programmer passionate about
        software and full-stack development, proficient in a range of modern
        technologies. Currently, I'm focused on building mobile applications and
        websites at Mosaic. -->
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  setup() {},
};
</script>

<style lang="scss" scoped>
.banner {
  height: 100vh;
  padding: 0 1rem;
}

@media (min-width: 992px) {
  h1 {
    font-size: 5rem !important;
  }

  h4 {
    font-size: 2.5rem !important;
  }
}

h1 {
  font-size: 2.4rem;
}

h4 {
  font-size: 1.2rem;
}

p {
  font-size: 0.8rem;
  color: #6f767e;
}
</style>
