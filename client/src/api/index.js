/**
 * 接口多个接口请求函数的模块
 * 函数的返回值： Promise Object
 */
import {get} from './http'

// 测试
// const BASE_URL = 'http://localhsot:4000'
const BASE_URL = 'api'

// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)
export const addressApi = (geohash) => get(`${BASE_URL}/position/${geohash}`)

// [2、获取食品分类列表](#2获取食品分类列表)
export const categoriesApi = () => get(`${BASE_URL}/index_category`)

// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)
export const shopsApi = ({longitude, latitude}) => get(`${BASE_URL}/shops`, {longitude, latitude})

// [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)
// [5、获取一次性验证码](#5获取一次性验证码)
// [6、用户名密码登陆](#6用户名密码登陆)
// [7、发送短信验证码](#7发送短信验证码)
// [8、手机号验证码登陆](#8手机号验证码登陆)
// [9、根据会话获取用户信息](#9根据会话获取用户信息)
// [10、用户登出](#10用户登出)

// // 注册接口
// export const userRegister = (user) => post('/register', user)

// // 登录接口
// export const userLogin = ({username, password}) => post('/login', {username, password})

// // 更新用户接口
// export const userUpdate = (user) => post('/update', user)
