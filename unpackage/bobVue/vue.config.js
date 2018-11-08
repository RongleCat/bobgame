const px2rem = require('postcss-px2rem-exclude')

const postcss = px2rem({
  remUnit: 75,
  exclude: /node_modules|vant/i
})

module.exports = {
  baseUrl: './',
  outputDir: '../../static',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/function.scss";`
      },
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
  devServer: {
    disableHostCheck: true
  }
}