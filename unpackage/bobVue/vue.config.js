const px2rem = require('postcss-px2rem')

const postcss = px2rem({
    remUnit: 75
})

module.exports = {
    baseUrl: '',
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