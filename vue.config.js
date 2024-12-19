/*
 * @Author: niumengfei
 * @Date: 2022-04-01 18:25:27
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-12-08 17:53:03
 */
const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
/* 配置按需加载 */
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
/* 配置@路径 */
const path = require('path')

module.exports = defineConfig({
  publicPath: './', //影响资源加载的公共路径 配置./可以打包后本地访问
  transpileDependencies: true, //转译包管理文件,可传数组
  lintOnSave: false,  //关闭语法检查 防止1.组件名必须驼峰式 2.vue3中data和setup不能共用属性
  // productionSourceMap: true, //生产环境是否生成 sourceMap 文件
  configureWebpack: { /* 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。如果这个值是一个函数，则会接收被解析的配置作为参数。该函数既可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。 */
    name: 'sakuras-vue',
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'), //resolve('src')
      },
      // fallback: {
      //   http: require.resolve("stream-http"),
      // },
    },
    plugins: [ 
      AutoImport({ //配置组件库按需引入(官方) 从13MB减少到7MB
        resolvers: [ElementPlusResolver()],
      }),
      Components({ //配置组件库按需引入(官方)
        resolvers: [ElementPlusResolver()],
      }),
      new webpack.DefinePlugin({
            API_CONFIG: JSON.stringify({a:'1'})
      }),
    ],
  },
  /* chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      
      .use('markdown-loader')
      .loader('markdown-loader')
      .end()
  }, */
  devServer:{
    // open: true, //自动打开浏览器
    host: 'localhost', //主机名
    port: '9000', //端口号
    // autoOpenBrowser: true, 
    proxy:{
      '/local-api': { //连接本地后端服务时使用此代理
        target: 'http://localhost:5555/',
        changeOrigin: true,
        pathRewrite: {
          '^/local-api': ""
        }
      },
      '/sakuras-api': { //连接远程后端服务时使用此代理
        target: 'https://sakuras.group/',
        changeOrigin: true,
      },
    }
  }
})
