<!--
 * @Author: niumengfei
 * @Date: 2022-04-27 17:25:41
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-07-03 23:42:52
-->
<template>
  <div :class="'rg-options' + (' rg-options-' + $store.getters.deviceType)">
    <!-- 由于mobile里不需要侧边栏展示搜索框，因此不仅需要判断deviceType还需要知道是不是侧边栏加载的子组件 -->
    <!-- <div class="search">
      <el-icon v-show="showSearch && $store.getters.deviceType == 'mobile'" class="el-icon--right" color="#A8ABB2" :size="20"><Search /></el-icon>
      <el-input
        v-show="showSearch && $store.getters.deviceType == 'pc'"
        class='search-input'
        v-model="searchVal"
        placeholder="请输入关键字"
        :clearable='true'
        :prefix-icon="Search"
      />
    </div> -->
    <!-- 首页 -->
    <div class="hidden-dropdown">
      <span class="el-dropdown-link" @click="turnPage('/')">首页</span>
    </div>
    <!-- 学习笔记 -->
    <el-dropdown class="hidden-dropdown">
      <span class="el-dropdown-link" @click="openPage('https://sakuras.group/sakuras-docs/')">学习笔记</span>
    </el-dropdown>
    <!-- 面试 -->
    <el-dropdown class="hidden-dropdown">
      <span class="el-dropdown-link">面试
        <el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item divided @click="openPage('https://www.arryblog.com/interview/htmlcss/')">外链(Array老师)</el-dropdown-item>
          <el-dropdown-item divided @click="openPage('http://sakuras.group/pdf/test.pdf')">合集(pdf)</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <!-- 前端笔记 -->
    <!-- <el-dropdown class="hidden-dropdown">
      <span class="el-dropdown-link">前端笔记
        <el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>react</el-dropdown-item>
          <el-dropdown-item divided @click="turnPage('/markdown', 'vue')">vue</el-dropdown-item>
          <el-dropdown-item divided @click="turnPage('Markdown', 'webpack')">webpack</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown> -->
    <!-- 后端笔记 -->
    <!-- <el-dropdown class="hidden-dropdown">
      <span class="el-dropdown-link">后端笔记
        <el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>nodeJS</el-dropdown-item>
          <el-dropdown-item divided>nginx</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown> -->
    <!-- 个人中心 trigger="click"-->
    <el-dropdown class="hidden-dropdown">
      <span class="el-dropdown-link">个人中心
        <el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-if="userInfo.username"><el-icon><user /></el-icon>{{userInfo.username}}</el-dropdown-item>
          <el-dropdown-item :divided="userInfo.username == true" @click="loginOrOut('/login')">{{userInfo.username ? '注销' : '登录'}}</el-dropdown-item>
          <el-dropdown-item divided>后台管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from "vuex";
import { Search } from '@element-plus/icons-vue'
import MySideBar from '../../SideBar'

export default {
  name: 'MyHeader',
  components: { MySideBar, Search },
  props:{
    showSearch:{
      type: Boolean,
      default: true //默认值
    },
	},
  setup(props, context) {
    const router = useRouter();
    const store = useStore();
    /* 定义数据 */
    const searchVal = ref('')
    /* 定义方法 */
    let turnPage = (path, pdfUrl) =>{
      // console.log(context, this);
      context.emit('changeColor', '666')
      // const { ctx } = getCurrentInstance()
      let datas = { 
        path,
        name: path.charAt(0) == '/' ? '' : path,  //(使用params传参时，必须使用name属性进行路由跳转，不能使用path配置项跳转)
        params: {
         pdfUrl
        }
      }
      router.push(datas)
    }
    let loginOrOut = (e) =>{
      const { userInfo } = store.state;
      if(userInfo.username){ //退出登录
        store.dispatch('saveUserInfo', {})
        ElMessage({
          message: '注销成功',
          type: 'success',
          center: true,
        })
      }else{
        turnPage(e)
      }
    }
    let openPage = (url) =>{
      // window.location.href = url
      window.open(url)
    }
    return {
      turnPage,
      searchVal,
      Search,
      loginOrOut,
      openPage,
    }
  },
  computed: {
    userInfo(){
      return this.$store.state.userInfo
    }
  }
}
</script>

<style lang="less" scope>
.rg-options{
  display: flex;
  .search{
    .search-input{
      // ::v-deep input{
      :deep(input){
        border-radius: 14px !important;
      }
    }
  }
  .el-dropdown-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 15px;
    text-align: center;
    // color: var(--el-color-primary);
  }
 
}
.el-dropdown-menu__item{
  justify-content: center !important;
}
.rg-options-pc{
  align-items: center;
  .el-dropdown-link {
    margin-left: 25px;
  }
}
.rg-options-mobile{
  flex-direction: column;
  padding: 10px 0px 10px 20px;
  .hidden-dropdown{
    padding: 15px 0px;
    .el-dropdown-link {
      font-weight: bold;
    }
  }
}
</style>