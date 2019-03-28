/**
 * 通过 mutation 间接更新 state 的多个方法的对象
 */

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORIES,
  RECEIVE_SHOPS
} from './mutation-types'
import {
  addressApi,
  categoriesApi,
  shopsApi
} from '@/api'

export default {
  // 异步获取地址
  async getAddress ({commit, state}) {
    // 发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await addressApi(geohash)

    // 提交一个 mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  // 异步后去食品分类列表
  async getCategories ({commit, state}) {
    // 发送异步ajax请求
    const result = await categoriesApi()

    // 提交一个 mutation
    if (result.code === 0) {
      const categories = result.data
      commit(RECEIVE_CATEGORIES, {categories})
    }
  },
  // 异步获取商家列表
  async getShops ({commit, state}) {
    const {longitude, latitude} = state
    // 发送异步ajax请求
    const result = await shopsApi(longitude, latitude)

    // 提交一个 mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  }
}
