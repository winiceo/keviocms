/**
 * Created by leven on 16/12/23.
 */
import { HIDEDIALOG } from '../mutation-types'
const state = {
    refresh:false,
    dialogVisible: false
}
const mutations = {

    toggleDialog (state,config) {
         state.dialogVisible = config
    },
    changeRefresh (state,config) {
        state.refresh = config
    }

}

const actions = {


}

const getters = {
    getState (state) {
        return state
    },

}

export default {
    state,
    mutations,
    actions,
    getters
}
