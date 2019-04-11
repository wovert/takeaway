/**
 * 接口多个接口请求函数的模块
 * 函数的返回值： Promise Object
 */
import {get, post} from './http'

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
export const searchShopsApi = () => get(`${BASE_URL}/search_shops`)

// [6、用户名密码登陆](#6用户名密码登陆)
export const pwdLoginApi = ({name, pwd, captcha}) => post(`${BASE_URL}/login_pwd`, {name, pwd, captcha})

// [7、发送短信验证码](#7发送短信验证码)
export const sendCodeApi = ({phone}) => get(`${BASE_URL}/sendcode`, {phone})

// [8、手机号验证码登陆](#8手机号验证码登陆)
export const smsLoginApi = ({phone, code}) => post(`${BASE_URL}/login_sms`, {phone, code})

// [9、根据会话获取用户信息](#9根据会话获取用户信息)
export const userInfoApi = () => get(`${BASE_URL}/userinfo`)

// [10、用户登出](#10用户登出)
export const logoutApi = () => get(`${BASE_URL}/logout`)

// 商家信息
export const shopInfoApi = () => get(`${BASE_URL}/info`)

// 评论列表信息
export const shopRatingsApi = () => get(`${BASE_URL}/ratings`)

// 商品列表
export const shopGoodsApi = () => get(`${BASE_URL}/goods`)

// // 注册接口
// export const userRegister = (user) => post('/register', user)

// // 登录接口
// export const userLogin = ({username, password}) => post('/login', {username, password})

// // 更新用户接口
// export const userUpdate = (user) => post('/update', user)
