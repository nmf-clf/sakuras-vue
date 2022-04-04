<!--
 * @Author: niumengfei
 * @Date: 2022-04-01 18:25:27
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-04 23:31:41
-->
<template>
  <HelloWorld ref="helloWord" @changeColor='changeColor' msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup(props) {
    function changeColor(val){
      // console.log('helloWord..',props,val);
    }
    return{
      changeColor,
    }
  },
  mounted() {
    // console.log('APP挂载完毕::',this.$refs, this.$refs.helloWord.msg);
  },
}
</script>

<style>

</style>
