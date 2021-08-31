module.exports = {
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      title: "Nixon Pang",
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "node_modules/@glidejs/glide/src/assets/sass/glide.core";
          @import "@/assets/styles/_variables.scss";
          @import "@/assets/styles/_common.scss";
        `,
      },
    },
  },
};
