/*
 * @Author: niumengfei
 * @Date: 2022-04-01 18:25:27
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-04 00:29:37
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,  /* 关闭语法检查 防止1.组件名必须驼峰式 2.vue3中data和setup不能共用属性 */
})
