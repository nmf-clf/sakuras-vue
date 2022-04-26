/*
 * @Author: niumengfei
 * @Date: 2022-04-01 18:25:28
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-26 22:40:48
 */
import { createApp } from 'vue'

import App from './App.vue' //引入跟组件
import router from './router' // 引入路由实例对象
import store from './store' //引入vuex实例对象
import plusIcons from './elementIcon' //按需引入icon组件
import 'animate.css';

const app = createApp(App) //创建并挂载根实例 //createApp(App).mount('#app') //原脚手架写法
plusIcons.map(component => app.component(component.name, component) )
app.use(router)
app.use(store) // 将 store 实例作为插件安装
app.mount('#app')





/* 
import ElementPlus from 'element-plus' //完整引入组件库
import 'element-plus/dist/index.css' //完整引入组件库样式
app.use(ElementPlus) //使用组件库 
*/