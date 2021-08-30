<template>
  <div id="about" class="section about text-start">
    <p>
      Hi! I am Nixon, and I build websites and applications for a living. My
      interest in programming dated back in 2006 when my sister introduced me to
      xanga. My first time coding was when I tried to customise the cursor of my
      blog using CSS.
    </p>
    <p>
      Today, I am currently a
      <span class="highlight">Web/App Developer</span> working at a digital
      agency based in Hong Kong, where my colleagues and I create websites and
      mobile applications according to the client's needs.
    </p>
    <p>
      Below are a few technologies I've been working on:
    </p>
    <div class="w-100">
      <ul class="row">
        <li class="col-6">Flutter</li>
        <li class="col-6">Go</li>
        <li class="col-6">Javascript</li>
        <li class="col-6">Vue</li>
        <li class="col-6">PHP</li>
        <li class="col-6">MySQL</li>
      </ul>
    </div>
    <router-link :to="{ path: '/', hash: '#work' }"
      ><button>Go Down</button></router-link
    >
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
  font-weight: bold;
  font-size: 1.2rem;
}

.highlight {
  //   color: #21ad49;
  text-decoration: underline;
}
</style>
