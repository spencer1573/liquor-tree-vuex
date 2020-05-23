import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //   state: {},
  //   mutations: {},
  //   actions: {},
  //   modules: {}
  // });
  state: {
    treeStore: [],
  },
  mutations: {
    updateTreeStore(state, newTree) {
      state.treeStore = newTree
    },
  },
  actions: {
    updateTree(context, tree) {
      context.commit('updateTreeStore', tree)
    },
  },
  getters: {
    tree(state) {
      return state.treeStore
    },
  },
})
