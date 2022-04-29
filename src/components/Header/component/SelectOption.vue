<!--
 * @Author: niumengfei
 * @Date: 2022-04-27 17:25:41
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-29 14:16:52
-->
<template>
  <div :class="'rg-options' + (' rg-options-' + $store.getters.deviceType)">
    <div class="search">
      <!-- 由于mobile里不需要侧边栏展示搜索框，因此不仅需要判断deviceType还需要知道是不是侧边栏加载的子组件 -->
      <el-icon v-show="showSearch && $store.getters.deviceType == 'mobile'" class="el-icon--right" color="#A8ABB2" :size="20"><Search /></el-icon>
      <el-input
        v-show="showSearch && $store.getters.deviceType == 'pc'"
        class='search-input'
        v-model="input2"
        placeholder="请输入关键字"
        :clearable='true'
        :prefix-icon="Search"
      />
    </div>
    <!-- 首页 -->
    <div class="hidden-dropdown">
      <span class="el-dropdown-link" @click="turnPage('/')">首页</span>
    </div>
    <!-- 前端笔记 -->
    <el-dropdown class="hidden-dropdown">
      <span class="el-dropdown-link">前端笔记
        <el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>react</el-dropdown-item>
          <el-dropdown-item divided @click="turnPage('/test')">vue</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <!-- 后端笔记 -->
    <el-dropdown class="hidden-dropdown">
      <span class="el-dropdown-link">后端笔记
        <el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>nodeJS</el-dropdown-item>
          <el-dropdown-item divided>nginx</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <!-- 个人中心 -->
    <el-dropdown class="hidden-dropdown">
      <span class="el-dropdown-link">个人中心
        <el-icon class="el-icon--right"><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="turnPage('/login')">登录/注销</el-dropdown-item>
          <el-dropdown-item divided>后台管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import { ref, reactive, getCurrentInstance, defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'
import { Search, Expand } from '@element-plus/icons-vue'
import MySideBar from '../../SideBar'

export default {
  name: 'MyHeader',
  components: { Expand, MySideBar, Search },
  props:{
    showSearch:{
      type: Boolean,
      default: true //默认值
    },
	},
  setup(props, context) {
    console.log('HelloWord-setup::',props);
    const router = useRouter();
    /* 定义数据 */
    const input2 = ref('')
    /* 定义方法 */
    let turnPage = (e) =>{
      // console.log(context, this);
      context.emit('changeColor', '666')
      // const { ctx } = getCurrentInstance();
      console.log(router);
      router.push({ path: e })
    }
    let sty = () =>{
      console.log('阻止默认行为');
    }
    return {
      turnPage,
      input2,
      Search,
      sty
    }
  },
}
</script>

<style lang="less">
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