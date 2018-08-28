module.exports = {
  baseUrl: '',
  outputDir: '../../static',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/function.scss";`
      }
    }
  }
}