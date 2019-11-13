import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger' // 日志调试
import api from '../api'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    header: {}
  },
  mutations: {
    copy(state, header) {
      //单一的改变某一个变量
      console.log(state)
      console.log(header)
      state.header = header
    }
  },
  actions: {
    getHeader({ commit, state }, params = {}) {
      return new Promise((resolve, reject) => {
        let header = state.header
        if (Object.keys(header).length) {
          return resolve(header)
        }
        api.getList(params).then(
          res => {
            if (res.header) {
              commit('copy')
            }
          },
          err => {
            reject(err)
          }
        )
      })
    }
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
