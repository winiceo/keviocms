import Vue from 'vue'
import Vuex from 'vuex'

import collects from './modules/collects'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    collects
  }
})
