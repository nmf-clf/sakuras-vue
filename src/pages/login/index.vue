<!--
 * @Author: niumengfei
 * @Date: 2022-04-28 23:04:30
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-30 19:39:35
-->
<template>
  <div class='login'>
    <el-form :model="form" class="login-form">
      <el-form-item label="账号" class="username">
        <el-input v-model="form.username" />
      </el-form-item>
       <el-form-item label="密码">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="confirmBtn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'Login',
  setup(props) {
    const form = reactive({
      username: '',
      password: '',
    })
    const onSubmit = () => {
      alert('哈哈，还没开发呢，大笨蛋！大傻瓜！')
    }
    return {
      form,
      onSubmit,
    }
  }
}
</script>

<style lang='less' scope>
.login{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form{
    border: 1px solid #d3d3d3;
    border-radius: 10px;
    box-shadow: 10px 6px 20px -13px;
    padding: 20px 15px;
    .username{
      margin-top: 30px;
    }
    .el-form-item{
      padding: 20px 0px;
      .el-form-item__content{
        justify-content: center;
      }
    }
  }
}
</style>