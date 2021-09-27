<template>
  <section id="hero">
    <div class="bg-white">
      <div
        class="
          container
          py-20
          px-3
          lg:px-0
          flex flex-col
          md:flex-row
          justify-center
          md:justify-start
          items-center
        "
      >
        <div class="hero-avatar my-8">
          <img alt="Avatar" src="../assets/svg/avatar.svg" />
        </div>
        <div class="hero-header text-center md:text-left ml-0 md:ml-6">
          <p class="font-extrabold text-5xl mb-6">Hello, I am Nixon.</p>
          <p class="hero-subtitle font-light text-xl lg:text-2xl mb-6">
            I create amazing things on the internet for a living and I love what
            I do.
          </p>
          <p class="mb-6">
            Currently a Web/Mobile Application Developer based in Hong Kong.
          </p>
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
