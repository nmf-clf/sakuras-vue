<!--
 * @Author: niumengfei
 * @Date: 2022-04-12 15:56:02
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-27 19:26:11
-->
<template>
  <el-header :class="'myHeader' + (' myHeader-' + $store.getters.deviceType)">
    <div class="lf-box">
      <el-icon class='lf-select' :size="25" @click="openLeftSideBar"><Expand /></el-icon>
      <span class="lf-title">夜语清梦</span>
    </div>
    <SelectOption />
  </el-header>
  <MySideBar :isOpen="isOpen">
    <SelectOption v-if="isOpen" :showSearch="false" />
  </MySideBar>
</template>

<script>
import { ref } from 'vue'
import { Expand } from '@element-plus/icons-vue'
import MySideBar from '../SideBar/SideBar.vue'
import SelectOption from './component/SelectOption'

export default {
  name: 'MyHeader',
  components: { Expand, MySideBar, SelectOption },
  setup(props, context) {
    console.log('HelloWord-setup::',props);
    /* 定义数据 */
    const isOpen = ref(false)
    /* 定义方法 */
    let openLeftSideBar = () =>{ isOpen.value = !isOpen.value }
    
    return {
      isOpen,
      openLeftSideBar,
    }
  },
}
</script>

<style lang="less" scope>
.myHeader{
  padding: 0.7rem 1.5rem;
  border-bottom: 1px solid #eaecef;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.5rem;
  // position: fixed;
  // width: 100%;
  .lf-box{
    display: flex;
    align-items: center;
    .lf-select{
      cursor: pointer;
    }
    .lf-title{
      font-size: 1.3rem;
      font-weight: 600;
      color: #2c3e50;
      align-items: center;
      margin-left: 10px;
      min-width: 100px;
    }
  }
  
}
.myHeader-pc{
  .lf-select{
    display: none;
  }
}
.myHeader-mobile{
  .hidden-dropdown{
    display: none;
  }
}
</style>