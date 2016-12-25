/**
 * Created by leven on 16/12/23.
 */
import { HIDEDIALOG } from '../mutation-types'
const state = {
    refresh:false,
    dialogVisible: false,
    upload: null
}
const mutations = {

    toggleDialog (state,config) {
         state.dialogVisible = config
    },
    changeRefresh (state,config) {
        state.refresh = config
    },
    SET_UPLOAD (state, upload) {
        state.upload = upload
    }

}

const actions = {
    setUpload: ({commit, dispatch, state}, config) => {

        commit('SET_UPLOAD', config)


    }

}

const getters = {
    getState (state) {
        return state
    },
    storeupload (state) {
        return state.upload
    }

}

export default {
    state,
    mutations,
    actions,
    getters
}
