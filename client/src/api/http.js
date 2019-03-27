/**
 * 请求接口函数
 * @return promise object(异步返回的数据是：response.data)
 * const response = await ajax()
 * const result = response.data
 * 给改为：const result = await ajax()
 */
import axios from 'axios'

function getUrl (data, url) {
  let dataStr = ''
  Object.keys(data).forEach( key => {
    dataStr += key + '=' + data[key] + '&'
  })
  if (dataStr !== '') {
    dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
    url = url + '?' + dataStr
  }
  return url
}

export default function ajax (url = '', data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    let promise
    if (type === 'GET') {
      promise = get(url, data)
    } else {
      promise = post(url, data)
    }
    promise.then(res => {
      resolve(res.data) // 成功返回 res.data数据
    }).catch(err => {
      reject(err) // 失败返回 err
    })
  })
}

function get (url = '', data = {}) {
  return new Promise(function (resolve, reject) {
    let promise = axios.get(getUrl(data, url))
    promise.then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })

}

function post (url = '', data = {}) {
  return new Promise(function (resolve, reject) {
    let promise = axios.post(url, data)
    promise.then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export {
  post,
  get
}
