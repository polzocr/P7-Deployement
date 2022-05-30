const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: 'https://polzocr.github.io/P7-Deployement/',
  transpileDependencies: true,
  css:{
    loaderOptions: {
      sass: {
        additionalData: ` @import '@/assets/scss/main.scss';`
      }
    }
  }
})

