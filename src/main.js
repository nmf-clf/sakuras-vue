/*
 * @Author: niumengfei
 * @Date: 2022-04-01 18:25:28
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-11 22:53:39
 */
import { createApp } from 'vue'
import App from './App.vue'

/* 3. 引入路由实例对象 */
import router from './router'

// 5. 创建并挂载根实例 //createApp(App).mount('#app') //原脚手架写法
const app = createApp(App)
app.use(router)
app.mount('#app')

