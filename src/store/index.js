import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { dataOne } from '../data/items-one.js'

export default new Vuex.Store({
  state: {
    treeStore: dataOne,
  },
  mutations: {
    updateTreeStore(state, newTree) {
      state.treeStore = newTree
    },
  },
  actions: {
    updateTree(context, tree) {
      console.log('updated tree', context)
      context.commit('updateTreeStore', tree)
    },
  },
  getters: {
    tree(state) {
      return state.treeStore
    },
  },
})
