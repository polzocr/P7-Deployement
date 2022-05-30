const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/P7-Deployement/" : "/",
  transpileDependencies: true,
  css:{
    loaderOptions: {
      sass: {
        additionalData: ` @import '@/assets/scss/main.scss';`
      }
    }
  }
})

