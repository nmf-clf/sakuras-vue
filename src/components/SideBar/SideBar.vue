<!--
 * @Author: niumengfei
 * @Date: 2022-04-24 16:50:58
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-24 19:16:19
-->
<!--
 * @Author: niumengfei
 * @Date: 2022-04-12 15:56:02
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-12 15:58:58
-->
<template>
  <div class="sideBar">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="sideBar" appear class="sideBar">
			<h1 v-show="!isShow" key="1">你好啊！</h1>
			<h1 v-show="isShow" key="2">尚硅谷！</h1>
		</transition-group>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'sideBar',
    props: ['isOpen'],
    setup(props, context) {
      console.log('子组件::', props, context);
      return {
				isShow: ref(true)
			}
    }
}
</script>

<style lang="less" scope>
  .sideBar{
    // position: absolute;
    width: 16.4rem;
    height: 200px;
    z-index: 9999;
    // top: 60px;
    // bottom: 0px;
    border-right: 1px solid red;
    background: yellow;
    // display: none;
  }
h1{
		background-color: orange;
	}
	/* 进入的起点、离开的终点 */
	.sideBar-enter,.sideBar-leave-to{
		transform: translateX(-100%);
	}
	.sideBar-enter-active,.sideBar-leave-active{
		transition: 0.5s linear;
	}
	/* 进入的终点、离开的起点 */
	.sideBar-enter-to,.sideBar-leave{
		transform: translateX(0);
	}
</style>