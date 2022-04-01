<!--
 * @Author: niumengfei
 * @Date: 2022-04-01 18:25:28
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-01 18:54:47
-->
<template>
  <div class="hello">
    <h2>Hello，sakuras!</h2>
    <h2>Goodbye Friends!</h2>
    <h1>读很多的书，走很远的路，见很多的人</h1>

    <a href="https://beian.miit.gov.cn/">闽ICP备16038849号</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 60%;
  margin: 10% auto;
  background-color: #f0f0f0;
  padding: 5%;
  border-radius: 10px;
  text-align: center;
}
.hello a{
  color: #505050;
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  bottom: 20px;
}
</style>
