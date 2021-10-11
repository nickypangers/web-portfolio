<template>
  <section id="hero">
    <!-- <div class="bg-white dark:bg-darkprimary"> -->
    <div
      class="
        py-24
        px-3
        lg:px-0
        flex flex-col
        md:flex-row
        justify-center
        items-center
      "
    >
      <div class="hero-avatar my-8">
        <img
          alt="Avatar"
          src="../assets/images/next-gen/avatar.webp"
          width="200"
          height="200"
        />
      </div>
      <div class="hero-header text-center md:text-left ml-0 md:ml-6">
        <p class="font-extrabold text-6xl md:text-8xl mb-6 title">
          Hello, I am Nixon.
        </p>
        <p
          class="
            hero-subtitle
            font-light
            text-xl
            lg:text-2xl
            mb-6
            dark:text-white
          "
        >
          I create amazing things on the internet for a living and I love what I
          do.
        </p>
      </div>
    </div>
    <!-- </div> -->
  </section>
</template>

<style scoped>
.title {
  background-color: red;

  /* Create the gradient. */
  background-image: linear-gradient(135deg, #b92b27, #1565c0);

  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}
.hero-avatar {
  width: 200px;
  height: 200px;
}

.hero-avatar img {
  width: 100%;
  aspect-ratio: 1/1;
}
</style>
