/*
 * @Author: niumengfei
 * @Date: 2022-04-01 18:25:27
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-14 01:27:41
 */
const { defineConfig } = require('@vue/cli-service')
/* 配置按需加载 */
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
/* 配置@路径 */
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true, //转译包管理文件,可传数组
  lintOnSave: false,  //关闭语法检查 防止1.组件名必须驼峰式 2.vue3中data和setup不能共用属性
  // productionSourceMap: true, //生产环境是否生成 sourceMap 文件
  configureWebpack: { /* 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。如果这个值是一个函数，则会接收被解析的配置作为参数。该函数既可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。 */
    name: 'sakuras-vue',
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'), //resolve('src')
      }
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      
      .use('markdown-loader')
      .loader('markdown-loader')
      .end()
  },
  /* 第三方插件配置 */
  // pluginOptions: {
  //   AutoImport: AutoImport({
  //     resolvers: [ElementPlusResolver()],
  //   }),
  //   Components: Components({
  //     resolvers: [ElementPlusResolver()],
  //   }),
  // },
})
