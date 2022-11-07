/*
 * @Author: niumengfei
 * @Date: 2022-04-04 23:17:24
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-11-07 16:32:47
 */
/* 引入路由模块，和vue2.0方式不同 */
import { createRouter, createWebHashHistory } from 'vue-router'//导入
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// console.log(createRouter);
// 1. 定义路由组件 (也可以从其他文件导入)
import FrontHome from '@/views/frontHome'
import markDown from '@/views/markDown'
import Login from '@/views/login'

// 简单配置  进度条,可以不配置：在axios中我们不再做配置，以用来区分。
// NProgress.inc(0.2)
// NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

// 2. 定义一些路由：每个路由都需要映射到一个组件。 我们后面再讨论嵌套路由。
const routes = [
    { 
        path: '/', 
        redirect: '/frontHome',
        component: FrontHome,
        children: [
            {
              path: 'frontHome',
              component: () => import('@/views/frontHome/index'),
              name: 'FrontHome',
            }
        ]
    },
    {
        path: '/login',
        component: Login    
    },
    {
        path: '/markdown',
        name:'Markdown',
        component: markDown    
    }
]
// 3. 创建路由实例并传递 `routes` 配置
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

/* 路由前置守卫 */
router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})

/* 路由后置守卫 */
router.afterEach((to, from, next) => {
    // console.log(to, from, s);
    NProgress.done()
    document.title = 'sakuras'
})

export default router