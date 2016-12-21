import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import collects from './modules/collects'

import global from './modules/global'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        global,
        collects
    }
})
