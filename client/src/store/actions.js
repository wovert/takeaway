/**
 * 通过 mutation 间接更新 state 的多个方法的对象
 */

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORIES,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  RESET_USER_INFO
} from './mutation-types'
import {
  addressApi,
  categoriesApi,
  shopsApi,
  userInfoApi,
  logoutApi,
  shopGoodsApi,
  shopInfoApi,
  shopRatingsApi
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
    console.log(longitude, latitude)
    const result = await shopsApi({longitude, latitude})

    // 提交一个 mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
  // 异步获取商家信息
  async getShopInfo ({commit}) {
    const result = await shopInfoApi()

    // 提交一个 mutation
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },
  // 异步获取商家评论
  async getShopRatings ({commit}) {
    const result = await shopRatingsApi()

    // 提交一个 mutation
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },
  // 异步获取商品列表
  async getShopGoods ({commit}) {
    const result = await shopGoodsApi()

    // 提交一个 mutation
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
    }
  },
  // 同步记录用户信息
  recordUser ({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  // 异步获取用户信息
  async getUserInfo ({commit}) {
    const result = await userInfoApi()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  },
  // 异步退出
  async logout ({commit}) {
    const result = await logoutApi()
    if (result.code === 0) {
      commit(RESET_USER_INFO)
    }
  }
}
