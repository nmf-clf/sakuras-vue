<!--
 * @Author: niumengfei
 * @Date: 2022-04-28 23:04:30
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-05-04 23:22:05
-->
<template>
  <div :class="'login-' + $store.getters.deviceType" class="login">
    <el-form :model="form" class="login-form">
      <el-form-item label="账号" class="username">
        <el-input v-model="form.username" />
      </el-form-item>
       <el-form-item label="密码" class="password">
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
import { useStore } from "vuex";
import { useRouter } from 'vue-router'

export default {
  name: 'Login',
  setup(props) {
    const router = useRouter();
    const store = useStore();

    const form = reactive({
      username: 'admin',
      password: '',
    })

    const onSubmit = () => {
      if(form.username == 'admin' && form.password == '123456'){
        //假设接口调用完毕 1：存储用户信息 2：跳转到首页
        store.dispatch('saveUserInfo', { //暂时这样存 需要整体加密
          username: form.username,
        })
        router.push({ path: '/' })
        ElMessage({
          message: '登录成功',
          type: 'success',
          center: true,
        })
      }
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
  background: url(../../assets/images/login.jpg);
  .login-form{
    border: 1px solid #d3d3d3;
    border-radius: 10px;
    box-shadow: 10px 6px 20px -13px;
    padding: 20px 15px;
    .username{
      margin-top: 30px;
    }
    .el-form-item__label{
      color: #fff;
    }
    .el-form-item{
      padding: 20px 0px;
      .el-form-item__content{
        justify-content: center;
      }
    }
  }
}
.login-pc{
  justify-content: flex-end;
  padding-right: 15%;
}
</style>