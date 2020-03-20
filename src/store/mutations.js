import * as types from './mutation-types'

const mutations = {
  // 设置面包屑
  [types.SET_BREADCRUMB](state, list) {
    state.breadcrumb = list
  }
}

export default mutations
