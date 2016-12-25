import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import routeLoading from './modules/route'
import config from './modules/global-config'
import user from './modules/user'
import bill from './modules/bill'
import common from './modules/common'


const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    user,
    config,
    bill,

    common,
    routeLoading
  }
})

export default store
