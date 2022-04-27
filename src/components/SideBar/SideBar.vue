<!--
 * @Author: niumengfei
 * @Date: 2022-04-24 16:50:58
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-27 19:58:40
-->
<template>
  <div :class="'sideBar ' + activeClass">
    <slot></slot>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
export default {
    name: 'SideBar',
    props: ['isOpen'],
    setup(props, context) {
      const store = useStore();
      /* 定义属性 */
      let isInit = ref(false) //初始化为false，如果侧边栏点击过则置为true
      /* 计算属性 */
      let activeClass = computed(()=>{ //计算属性回调不接收值
        if(store.getters.deviceType == 'mobile'){
          /* if(props.isOpen) isInit.value = true //若点击过/父组件传递为true 则置为true
          if(isInit.value){ //如果点击过/默认为true 则自动展开侧边栏
            return props.isOpen ? 'animate__animated animate__slideInLeft' : 'animate__animated animate__slideOutLeft'
          }
          return '' */
          return props.isOpen ? 'sideBar_active' : ''
        }
        return ''
      })
      /* 返回对象 */
      return {
        activeClass
			}
    },
    mounted() {
      /* 监视点击事件 */
      document.addEventListener('mouseup', (e) => {
          let sideBar = document.querySelector('.sideBar') //选择返回的第一个出现的元素
          if (sideBar) {
            if (!sideBar.contains(event.target)) { //判断某个元素不是目标元素的子元素 即目标元素以外的区域
              console.log('点到sideBar外面了...');
              sideBar.className = 'sideBar'
            }
          }
      })
    },
    updated() {
      // let sideBar = document.querySelector('.sideBar') //如果没有则添加
      // let sideBar_active = document.querySelector('.sideBar_active') //如果没有则添加
      console.log('更新了...');
      // if(sideBar_active){
      //   console.log('111');
      //   sideBar.className = 'sideBar'
      // }else{
      //   console.log('222');
      //   sideBar.className = 'sideBar sideBar_active'
      // }
    },
}
</script>

<style lang="less" scope>
.sideBar{
  position: absolute;
  width: 14rem;
  z-index: 999;
  top: 3.5rem;
  bottom: 0px;
  border-right: 1px solid #e6dfdf;;
  background: #fff;
  /* 方案1 */
  // transform: translateX(-100%);
  // transition: transform .2s ease
  /* 方案2 */
  left: -100%;
  transition: left linear 0.2s;
}
.sideBar_active{
  /* 方案1 */
  // transform: translateX(0);
  /* 方案2 */
  left: 0;
}
</style>