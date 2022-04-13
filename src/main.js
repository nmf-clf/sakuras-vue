/*
 * @Author: niumengfei
 * @Date: 2022-04-01 18:25:28
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-14 01:30:38
 */
import { createApp } from 'vue'
/* 完整引入组件库 */
// import ElementPlus from 'element-plus'
/* 完整引入组件库样式 */
// import 'element-plus/dist/index.css'
import App from './App.vue'
/* 3. 引入路由实例对象 */
import router from './router'
//按需引入
// import 'element-plus/theme-chalk/base.css'
// import { ElButton } from 'element-plus'
// const components = [ElButton]
// console.log('ElButton::',ElButton);

// 5. 创建并挂载根实例 //createApp(App).mount('#app') //原脚手架写法
const app = createApp(App)
// app.component(ElButton.name, ElButton)
// components.forEach(component => {
//     app.component(component.name, component)
// })
// app.use(ElementPlus)
app.use(router)
app.mount('#app')

