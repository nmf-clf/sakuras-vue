/*
 * @Author: niumengfei
 * @Date: 2022-04-01 18:25:28
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-19 21:31:39
 */
import { createApp } from 'vue'
/* 完整引入组件库 */
// import ElementPlus from 'element-plus'
/* 完整引入组件库样式 */
// import 'element-plus/dist/index.css'
import App from './App.vue'
/* 3. 引入路由实例对象 */
import router from './router'
/* 引入vuex实例对象 */
import store from './store'

import { ArrowDown } from '@element-plus/icons-vue'
// 5. 创建并挂载根实例 //createApp(App).mount('#app') //原脚手架写法
const app = createApp(App)

app.component(ArrowDown.name, ArrowDown)
// app.component(Search.name, Search)
// app.use(ElementPlus)
app.use(router)
app.use(store) // 将 store 实例作为插件安装
app.mount('#app')

