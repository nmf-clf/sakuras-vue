/*
 * @Author: niumengfei
 * @Date: 2022-04-19 21:29:34
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-04-19 22:26:37
 */
import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      screenWidth: document.documentElement.clientWidth,
      screenHeight: document.documentElement.clientHeight,
    }
  },
  actions: {
    setWidthAndHeight({ commit }, value){
      commit('SETWIDTHANDHeight', value)
    }
  },
  mutations: {
    SETWIDTHANDHeight(state, value){
      state.screenWidth = value[0]
      state.screenHeight = value[1]
    }
  }
})

export default store