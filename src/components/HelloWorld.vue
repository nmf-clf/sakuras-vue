<!--
 * @Author: niumengfei
 * @Date: 2022-04-01 18:25:28
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-06 23:43:19
-->
<template>
  <div class="hello" @click="getChangeColor">
    <h2>Hello，sakuras!</h2>
    <h2>Goodbye Friends!</h2>
    <h1 @click="changeText">{{mainTxt}}</h1>
    <!-- Copyright © 2018-2022  关于我们-->
    <a href="https://beian.miit.gov.cn/">豫ICP备20014071号-1</a>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'HelloWorld',
  props: ['msg'],
  // data() {
  //   console.log('HelloWord-data...',this.mainTxt);
  //   return {
  //     name: '555',
  //     txtList: [
  //       '读很多的书，走很远的路，见很多的人',
  //       '为天地立心，为生民立命，为往圣继绝学，为万世开太平',
  //       '悟已往之不谏，知来者之可追',
  //     ]
  //   }
  // },
  setup(props, context) {
    console.log('HelloWord-setup::',props);
    const router = useRouter();
    /* 定义数据 */
    let txtList = [
      '读很多的书，走很远的路，见很多的人。',
      '为天地立心，为生民立命，为往圣继绝学，为万世开太平。',
      '悟已往之不谏，知来者之可追。',
      '醉后不知天在水，满船清梦压星河。',
    ]
    let mainTxt = ref(txtList[Math.floor( (Math.random() * txtList.length) )])
    /* 定义方法 */
    let getChangeColor = () =>{
      // console.log(context, this);
      context.emit('changeColor', '666')
      // const { ctx } = getCurrentInstance();
      console.log(router);
      router.push({
        path: '/test'
      })
    }
    let changeText = () =>{
      mainTxt.value = txtList[Math.floor( (Math.random() * txtList.length) )]
    }
    return {
      name: '123',
      mainTxt,
      getChangeColor,
      changeText,
    }
  },
  beforeCreate() {
    // console.log('HelloWord-beforeCreate...',this);
  },
  created() {
    // console.log('HelloWord-created...',this);
  },
  //#region
 /*  computed: {
    mainTxt2(){
      return this.txtList[Math.floor( (Math.random() * this.txtList.length) )]
    }
  }, */
  //#endregion
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.hello{
  width: 60%;
  margin: 10% auto;
  background-color: #f0f0f0;
  padding: 5%;
  border-radius: 10px;
  text-align: center;
  a{
    color: #505050;
    position: absolute;
    text-align: center;
    left: 0;
    right: 0;
    bottom: 20px;
  }
  h1{
    cursor: pointer;
  }
}
</style>
