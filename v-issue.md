### 过程
+ 1、vue-create appName 脚手架创建工程、删除无用文件
+ 2、创建及配置部分文件夹：
    - 创建src/router文件夹，同时配置路由及路由规则，
    - 创建src/pages文件夹，用于存放前端路由页面
    - 创建src/components，用于存放前端公共组件
+ 3、安装less-loader：支持less编译
+ 4、安装html-loader markdown-loader，highlightjs-line-numbers.js和github-markdown-css：支持md文件转化为html文件以及定义样式
+ 5、安装element-plus：支持使用vue-plus组件库
+ 6、安装unplugin-auto-import、unplugin-vue-components：支持组件库按需加载
+ 7、安装@element-plus/icons-vue：支持使用官方图标组件库
+ 8、配置@符访问路径，但是无法鼠标左键跳转(`未解决`)
+ 9、考虑到未来某个模块可能有多个路由页面，以及某个公共组件可能由多个子组件组成：
    - 因此将pages和components目录下的.vue文件放在以模块/组件命名的文件夹内，即`pages/Home.vue → pages/Home/Home.vue`

### 遇到的问题
+ 1、配置router时，发现vue3跟vue2的使用方法不一样，见官网描述，比如引入，创建，通过路由跳转
+ 2、配置按需加载ant-plus组件库时，采用的是官方的方式，在vue.config.js里配置configureWebpack.plugins: []
+ 3、配置图标组件库时发现，图标组件库官方尚未完成按需加载和CDN引入，因此需要在全局注册：
    - 某些图标组件可以全局注册来使用，例如ArrowDown: 
    ```js
        //main.js
        import { ArrowDown } from '@element-plus/icons-vue';
        app.component(ArrowDown.name, ArrowDown)
        //如果不全局注册，则报错如下：
        //Failed to resolve component: arrow-down
    ```
    - 而某些图标组件则需要在文件里引入组件，并在setup里导出，例如一下这种用法：
    ```js
        //FrontHome.vue
        /* html */
        <el-input :prefix-icon="Search" />
        /* script */
        import { Search } from '@element-plus/icons-vue'
        setup(){
            return{ Serach }
            //如果不在setup里导出，则报错如下：
            //[Vue warn]: Property "Search" was accessed during render but is not defined on instance. 
        }
    ```
+ 4、在使用组件库的搜索组件时发现，自定义的样式即便加了!important也无法生效(`尚未知道原因`)，解决方案如下：
    - 1. `>>>方式暂不支持(未知)`
    - 2. ::v-deep 样式选择器名{}，(深度穿透)，编译警告如下：
        ```js
        //[@vue/compiler-sfc] ::v-deep usage as a combinator has been deprecated. Use :deep(<inner-selector>) instead.
        //则需要使用 :deep()方式
        ```
    - 3. :deep(样式选择器名){}