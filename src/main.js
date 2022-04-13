/*
 * @Author: niumengfei
 * @Date: 2022-04-01 18:25:28
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-13 23:17:50
 */
import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import { globalRegister } from './global' //导入
import App from './App.vue'

/* 3. 引入路由实例对象 */
import router from './router'

// 5. 创建并挂载根实例 //createApp(App).mount('#app') //原脚手架写法
const app = createApp(App)

app.use(router)
// app.use(globalRegister)
// app.use(ElementPlus)
app.mount('#app')

