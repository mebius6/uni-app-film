import http from '../services/http.js'
import parse from '../services/parse.js'

import config from '../config.js'
// 公共接口
const services = config.apiConfig.commonBase
const services1 = {
  url: 'http://api.245bt.chenzhen.work',
  port: 3000
}
const api = {
  // 列表查询
  getList: params => {
    return new Promise((resolve, reject) => {
      http.get('', params, services).then(
        res => {
          return resolve(parse.parseListHtml(res))
        },
        err => {
          reject(err)
        }
      )
    })
  },
  // 列表搜索
  searchList: params => {
    return new Promise((resolve, reject) => {
      http.get('?m=vod-search', params, services).then(
        res => {
          return resolve(parse.parseListHtml(res).body)
        },
        err => {
          reject(err)
        }
      )
    })
  },
  getListItem: params => {
    return new Promise((resolve, reject) => {
      http.get('', params, services).then(
        res => {
          return resolve(parse.parseItemHtml(res))
          // return resolve(res)
        },
        err => {
          reject(err)
        }
      )
    })
  },
  getBtList: params => {
    return new Promise((resolve, reject) => {
      http.get('', params, services1).then(
        res => {
          return resolve(parse.parseItemHtml(res))
          // return resolve(res)
        },
        err => {
          reject(err)
        }
      )
    })
  }
}
export default api
