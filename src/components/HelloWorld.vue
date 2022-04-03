<!--
 * @Author: niumengfei
 * @Date: 2022-04-01 18:25:28
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-03 21:47:53
-->
<template>
  <div class="hello">
    <h2>Hello，sakuras!</h2>
    <h2>Goodbye Friends!</h2>
    <h1>{{mainTxt}}</h1>
    <!-- Copyright © 2018-2022  关于我们-->
    <a href="https://beian.miit.gov.cn/">豫ICP备20014071号-1</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props) {
    console.log('props::',props);
    let txtList = [
      '读很多的书，走很远的路，见很多的人。',
      '为天地立心，为生民立命，为往圣继绝学，为万世开太平。',
      '悟已往之不谏，知来者之可追。',
      '醉后不知天在水，满船清梦压星河。',
    ]
    return {
      name: '123',
      mainTxt: txtList[Math.floor( (Math.random() * txtList.length) )],
    }
  },
  data() {
    return {
      name: '555',
      txtList: [
        '读很多的书，走很远的路，见很多的人',
        '为天地立心，为生民立命，为往圣继绝学，为万世开太平',
        '悟已往之不谏，知来者之可追',
      ]
    }
  },
  computed: {
    mainTxt2(){
      return this.txtList[Math.floor( (Math.random() * this.txtList.length) )]
    }
  },
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
