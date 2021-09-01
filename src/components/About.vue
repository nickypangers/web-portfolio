<template>
  <div id="about" class="section about container text-start">
    <h2>About Me</h2>
    <p>
      Hi! I am Nixon and I build websites and applications for a living. My
      interest in programming dated back to 2006 when my sister introduced me to
      xanga. The first time I had a go at coding was when I tried to customise
      the cursor of my blog using CSS, and I have not stopped learning how to
      code ever since!
    </p>
    <p>
      Today, I work as a
      <span class="highlight">Web/Mobile App Developer</span> working at a
      digital agency based in Hong Kong, where my colleagues and I create
      websites and mobile applications tailored to our clients' needs.
      <span class="font-normal italic"
        >Prior to this position, I was a hardware engineer.</span
      >
    </p>
    <p>
      Below are a few technologies I've been working on:
    </p>
    <div class="w-100">
      <ul class="custom-list row">
        <li class="col-6">Flutter</li>
        <li class="col-6">Go</li>
        <li class="col-6">Javascript</li>
        <li class="col-6">Vue</li>
        <li class="col-6">PHP</li>
        <li class="col-6">MySQL</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  setup() {},
};
</script>

<style lang="scss" scoped>
p {
  // font-weight: bold;
  font-size: 1.2rem;
}

.font-normal {
  font-weight: normal;
}

.highlight {
  //   color: #21ad49;
  text-decoration: underline;
}
</style>
