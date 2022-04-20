<!--
 * @Author: niumengfei
 * @Date: 2022-04-01 18:25:27
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-20 23:17:21
-->
<template>
  <div id="app" :class="dynamicClass">
    <router-view></router-view>
  </div>
  <!-- 按需加载时-使用全局配置size和zIndex的组件包裹跟组件 -->
  <!--  <el-config-provider :size="size" :z-index="zIndex">
    <div id="app">
      <router-view></router-view>
    </div>
  </el-config-provider> -->
</template>

<script>
import './assets/common.less';

export default {
  name: 'App',
  mounted() {
    console.log('App加载完毕...');
    document.documentElement.style.fontSize = '16px';
    window.addEventListener('resize', ()=>{ //监听视图宽度和高度的变化
      let wh = [document.documentElement.clientWidth, document.documentElement.clientHeight]
      this.$store.dispatch('setWidthAndHeight', wh)
    })
  },
  computed: {
    dynamicClass(){ //动态设置app样式
     /*  (()=>{
        let power = this.$store.state.screenWidth / 375; //以iphoneX(宽度375px)为基准
        let bigSize = 10 * power;  //设置rem基准单位, 在iphoneX上 bigSize = 10px = 1rem
        let realSize = bigSize > 40 ? '40px' : bigSize + 'px'; //浏览器最大字体为40px
        document.documentElement.style.fontSize = realSize;
      })() */
      return this.$store.state.screenWidth < 550 ? 'device-mobile' : 'device-pc'
    }
  },
}
/* 按需加载时-全局配置size和zIndex */
/* import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'
export default defineComponent({
  components: {
    ElConfigProvider,
  },
  setup() {
    return {
      zIndex: 3000,
      size: 'large',
    }
  },
}) */
</script>
