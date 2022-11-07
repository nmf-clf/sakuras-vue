<!--
 * @Author: niumengfei
 * @Date: 2022-04-28 23:04:30
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-11-07 13:35:15
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
                <el-button type="primary" @click="handleRegister" class="confirmBtn">注册</el-button>
                <el-button type="primary" @click="handleLogin" class="confirmBtn">登录</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>

<script setup>
import { reactive } from 'vue'
import { useStore } from "vuex";
import { useRouter } from 'vue-router'
import { Axios } from "@/utils";

const router = useRouter();
const store = useStore();

const form = reactive({
    username: '',
    password: '',
})
const handleRegister = () =>{
    // Axios.get('/sakuras-api/user/test')
    // .then(res => {
    //     console.log('test-get::',res);
    // })
    // return
    Axios.post('/sakuras-api/user/register', form)
    .then(res => {
        console.log('register-post::',res);
        ElMessage({
            message: res.message,
            type: 'success',
            center: true,
        })
    })
}
const handleLogin = () => {
    //假设接口调用完毕 1：存储用户信息 2：跳转到首页
    Axios.post('/sakuras-api/user/login', form)
    .then(res => {
        console.log('login-post::',res);
        store.dispatch('saveUserInfo', { //暂时这样存 需要整体加密
            ...form
        })
        router.push({ path: '/' })
        ElMessage({
            message: res.message,
            type: 'success',
            center: true,
        })
    })
}
</script>

<style lang='less' scope>
.login{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(../../assets/images/login3.jpg);
    background-size: 100% 100%;
    .login-form{
        border: 1px solid #d3d3d3;
        border-radius: 10px;
        box-shadow: 10px 6px 20px -13px;
        padding: 20px 15px;
        box-shadow: 0 0 20px #a29bfe;
        border-radius: 15px;
        background: #fff;
        opacity: 0.8;
        .username{
            margin-top: 30px;
        }
        .el-form-item__label{
            color: #000;
        }
        .el-form-item{
            padding: 20px 0px;
            .el-form-item__content{
                justify-content: center;
            }
        }
        .confirmBtn{
            background: #000;
        }
    }
}
.login-pc{
    justify-content: flex-end;
    padding-right: 15%;
}
</style>