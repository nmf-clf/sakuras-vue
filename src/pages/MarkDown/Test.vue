<!--
 * @Author: niumengfei
 * @Date: 2022-04-06 23:29:06
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-16 00:25:22
-->
<template>
  <div v-html="README_MD" class="markdown-body"></div>
</template>

<script>
import 'github-markdown-css' //md样式
import 'highlight.js/styles/github.css' //代码高亮及行号依赖
import README_MD from '../../../vue3_start.md'

export default {
  data() {
    return {
      README_MD
    }
  },
  mounted() {
    hljs.initHighlightingOnLoad();
    hljs.initLineNumbersOnLoad();
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