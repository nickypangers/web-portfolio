module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/_shared.scss";
        `,
      },
    },
  },
};
