<!--
 * @Author: niumengfei
 * @Date: 2022-04-01 18:25:27
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-27 17:02:51
-->
<template>
  <div id="app" :class="'app-' + $store.getters.deviceType">
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
// import './assets/common.less';
export default {
  name: 'App',
  mounted() {
    document.documentElement.style.fontSize = '16px';
    /* 监听视图宽度和高度的变化 */
    window.addEventListener('resize', ()=>{
      let wh = [document.documentElement.clientWidth, document.documentElement.clientHeight]
      this.$store.dispatch('setWidthAndHeight', wh)
    })
  }
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
<style lang='less'>
*{
  margin: 0;
  padding: 0;
}
</style>
