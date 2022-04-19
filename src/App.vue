<!--
 * @Author: niumengfei
 * @Date: 2022-04-01 18:25:27
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-19 22:39:03
-->
<template>
  <div id="app" :class="setWidthAndHeight">
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
    window.addEventListener('resize', ()=>{ //监听页面视图宽度和高度
      let wh = [document.documentElement.clientWidth, document.documentElement.clientHeight]
      this.$store.dispatch('setWidthAndHeight', wh)
    })
  },
  computed: {
    setWidthAndHeight(){
      console.log('触发了....');
      return this.$store.state.screenWidth < 500 ? 'device-mobile' : 'device-pc'
    }
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
