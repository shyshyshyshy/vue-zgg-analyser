import * as types from './mutation-types'

export const addIndex = ({ commit, state }, index) => {
  commit(types.SET_INDEX, index)
}
