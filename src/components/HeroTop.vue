<template>
  <section id="hero-top">
    <div class="bg-white">
      <div
        class="
          container
          py-20
          px-3
          lg:px-0
          flex flex-col
          justify-center
          items-center
        "
      >
        <p class="hero-header font-extrabold text-5xl text-center mb-6">
          Full Stack Developer
        </p>
        <p
          class="hero-subtitle text-center font-light text-2xl lg:text-3xl mb-6"
        >
          I create amazing things on the internet for a living and I love what I
          do.
        </p>
        <div class="hero-avatar my-8">
          <img alt="Avatar" src="../assets/svg/avatar.svg" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-avatar {
  width: 200px;
  height: 200px;
}

.hero-avatar img {
  width: 100%;
  aspect-ratio: 1/1;
}
</style>
