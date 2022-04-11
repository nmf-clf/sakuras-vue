<!--
 * @Author: niumengfei
 * @Date: 2022-04-01 18:25:27
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-11 23:17:31
-->
<!-- <HelloWorld ref="helloWord" @changeColor='changeColor' msg="Welcome to Your Vue.js App"/> -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
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
#app{
  /* width: 100%; */
  /* min-height: 100vh; */
}
</style>
