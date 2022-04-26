<!--
 * @Author: niumengfei
 * @Date: 2022-04-24 16:50:58
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-26 23:40:12
-->
<!--
 * @Author: niumengfei
 * @Date: 2022-04-12 15:56:02
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-12 15:58:58
-->
<template>
  <div :class="'sideBar ' + activeClass">
    1233
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
export default {
    name: 'sideBar',
    props: ['isOpen'],
    setup(props, context) {
      const store = useStore();
      console.log('子组件::', props, context, props.isOpen, store.getters.deviceType);
      // let isActive = ref(props.isOpen)
      /* 定义属性 */
      let isInit = ref(false) //初始化为false，如果侧边栏点击过则置为true
      /* 计算属性 */
      let activeClass = computed(()=>{ //计算属性回调不接受值
        if(store.getters.deviceType == 'mobile'){
          if(props.isOpen) isInit.value = true //若点击过/父组件传递为true 则置为true
          if(isInit.value){ //如果点击过/默认为true 则自动展开侧边栏
            return props.isOpen ? 'animate__animated animate__slideInLeft' : 'animate__animated animate__slideOutLeft'
          }
          return ''
        }
        return ''
      })
      /* 返回对象 */
      return {
        activeClass
			}
    },
    updated(a,b) {
      console.log('更新了...',a,b,this.initNum);
    },
}
</script>

<style lang="less" scope>
  .sideBar{
    position: absolute;
    width: 16.4rem;
    z-index: 9999;
    top: 60px;
    bottom: 0px;
    border-right: 1px solid #e6dfdf;;
    background: #fff;
    transform: translateX(-100%);
  }

/*   .sideBar-active{
    width: 16.4rem;
    animation: leftToRightForLinear 0.5s ease;
     	@keyframes leftToRightForLinear{
		  from{ 
        transform: translateX(-100%);
      }
      to{ 
        transform: translateX(0px); 
      }
		}
  }
  .sideBar-move{
    // width: 16.4rem;
    animation: rightToLeftForLinear 0.5s ease;
       @keyframes rightToLeftForLinear {    
        from{ 
          transform: translateX(0px);
          width: 16.4rem;
        }
        to{ 
          transform: translateX(-100%);
          width: 0rem;
        }
      }
  }
 */
	// /* 进入的起点、离开的终点 */
	// .sideBar-enter,.sideBar-leave-to{
	// 	transform: translateX(-100%);
	// }
	// .sideBar-enter-active,.sideBar-leave-active{
	// 	transition: 0.5s linear;
	// }
	// /* 进入的终点、离开的起点 */
	// .sideBar-enter-to,.sideBar-leave{
	// 	transform: translateX(0);
	// }
</style>