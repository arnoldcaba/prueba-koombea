module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/docs/' : '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixins.scss";
        `
      }
    }
  }
};
