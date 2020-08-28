import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    snackbarText: null,
    snackbarColor: null,
    isSnackbarShow: false,
    snackbarTimeout: null
  },
  mutations: {
    showSnackbar(state, para) {
      state.snackbarText = para.text
      state.snackbarTimeout = para.timeout || 3000
      state.snackbarColor = para.error ? "error" : "success"

      state.isSnackbarShow = true
    }
  },
  actions: {
  },
  modules: {
  }
})
