/**
 * vuex核心 管理对象 store
*/

import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 注册vuex插件
Vue.use(Vuex)

// 创建Store 并导出 Store模块
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
