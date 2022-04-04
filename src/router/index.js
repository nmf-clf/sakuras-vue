/*
 * @Author: niumengfei
 * @Date: 2022-04-04 23:17:24
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-04 23:30:47
 */
import { createRouter, createWebHashHistory } from 'vue-router'
// console.log(createRouter);
// 1. 定义路由组件 (也可以从其他文件导入)
import HelloWorld from '../components/HelloWorld.vue'

// 2. 定义一些路由：每个路由都需要映射到一个组件。 我们后面再讨论嵌套路由。
const routes = [
    { 
        path: '/', 
        component: HelloWorld 
    },
]
// 3. 创建路由实例并传递 `routes` 配置
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

/* 路由后置守卫 */
router.afterEach((to, from, s) => {
    // console.log(to, from, s);
    document.title = 'sakuras'
})

export default router