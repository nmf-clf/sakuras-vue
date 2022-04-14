<!--
 * @Author: niumengfei
 * @Date: 2022-04-06 23:49:03
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-15 01:53:34
-->
<!--
 * @Author: niumengfei
 * @Date: 2022-04-01 18:25:28
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-06 23:43:19
-->
<template>
  <el-container class="frontHome">
    <el-header class="header">
      <span class="lf-title">夜语清梦</span>
      <!-- <el-icon><search /></el-icon> -->
      <div class="rg-options">
        <div class="search">
           <el-input
            class='search-input'
            v-model="input2"
            placeholder="请输入关键字"
            :clearable='true'
            :prefix-icon="Search"
          />
        </div>
        <!-- 首页 -->
        <el-dropdown>
          <span class="el-dropdown-link">首页</span>
        </el-dropdown>
        <!-- 前端笔记 -->
        <el-dropdown>
          <span class="el-dropdown-link">前端笔记
            <el-icon class="el-icon--right"><arrow-down /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>react</el-dropdown-item>
              <el-dropdown-item divided>vue</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <!-- 后端笔记 -->
        <el-dropdown>
          <span class="el-dropdown-link">后端笔记
            <el-icon class="el-icon--right"><arrow-down /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>nodeJS</el-dropdown-item>
              <el-dropdown-item divided>???</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <!-- 个人中心 -->
        <el-dropdown>
          <span class="el-dropdown-link">个人中心
            <el-icon class="el-icon--right"><arrow-down /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>登录/注销</el-dropdown-item>
              <el-dropdown-item divided>后台管理</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-header>
    <el-main class="main" @click="getChangeColor">
      <h2>Hello，sakuras!</h2>
      <h2>Goodbye Friends!</h2>
      <h1 @click="changeText">{{mainTxt}}</h1>
      <a href="https://beian.miit.gov.cn/">豫ICP备20014071号-1</a>
    </el-main>
  </el-container>
  <!-- Copyright © 2018-2022  关于我们-->
</template>

<script >
import { ref, reactive, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import { Search } from '@element-plus/icons-vue'

export default {
  name: 'FrontHome',
  props: ['msg'],
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
    const activeIndex = ref('1')
    const input2 = ref('')
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath)
    }
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
      activeIndex,
      handleSelect,
      input2,
      Search,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.frontHome{
  .header{
    padding: 0.7rem 1.5rem;
    border-bottom: 1px solid #eaecef;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .lf-title{
      font-size: 1.3rem;
      font-weight: 600;
      color: #2c3e50;
      align-items: center;
    }
    .rg-options{
        display: flex;
        align-items: center;
        .search{
          .search-input{
            // border: 1px solid red;
            // .el-input__inner{
            // }
            ::v-deep input{
              border-radius: 14px !important;
            }
          }
        }
        .el-dropdown-link {
          cursor: pointer;
          display: flex;
          align-items: center;
          margin-left: 25px;
          font-size: 15px;
          text-align: center;
          // color: var(--el-color-primary);
        }
    }
  }
  .main{
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
}
</style>
