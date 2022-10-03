const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // ...其他配置
  lintOnSave: false, // 关闭eslint检查
  devServer: {
    port: 3000
  }
})

