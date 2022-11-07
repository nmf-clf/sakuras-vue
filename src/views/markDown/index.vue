<!--
 * @Author: niumengfei
 * @Date: 2022-04-06 23:29:06
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-10-31 15:53:04
-->
<template>
  <MyHeader />
  <!-- <div v-html="README_MD" class="markdown markdown-body"></div> -->
</template>

<script>
import 'github-markdown-css' //md样式
import 'highlight.js/styles/github.css' //代码高亮及行号依赖
// import README_MD from '../../../vue3_start.md'
import { MyHeader } from '../../components'

export default {
  name: 'MarkDown',
  components: { MyHeader },
  data() {
    return {
      // README_MD: README_MD,
      static: {
        'vue': 'vue3_start',
        'webpack': 'webpack5'
      }
    }
  },
  mounted() {
    try{
      console.log('hljs::', hljs);
      hljs.initHighlightingOnLoad();
      hljs.initLineNumbersOnLoad();
    }catch(err){
      console.log(err);
    }
  
    // let { pdfUrl } = this.$route.params; 
    // console.log('das', this.static[pdfUrl], `../../../${this.static[pdfUrl]}.md`);
    // const README_MD = require(`../../../${this.static[pdfUrl]}.pdf`).default;
    // this.README_MD = README_MD
    // console.log(this.$route, this.README_MD);
  },
}
</script>

<style lang="less">
.hljs-line-numbers{
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  /* 自定义 */
  text-align: right;
  border-right: 1px solid #ccc !important;
  margin-right: 10px !important;
  padding-right: 5px !important;
  color: #999;
}
</style>