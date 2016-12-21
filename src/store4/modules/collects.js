import {
    RECEIVE_COLLECTS,
    POST_COLLECTS,
    CHANGE_COLLECT_TAG
} from '../mutation-types'

const state = {
    collect: {
        list: [],
        hasNext: 0,
        page: 1,
        path: '',
        currentTag:'website'
    }
}

const mutations = {
    [RECEIVE_COLLECTS](state,list) {
            if(!state.collect.list[state.collect.currentTag]){
                state.collect.list[state.collect.currentTag]=[]
            }
            state.collect.list[state.collect.currentTag] = state.collect.list[state.collect.currentTag].concat(list)

    },
    [POST_COLLECTS](state, data) {
        state.collect.list[state.collect.currentTag] = [data].concat(state.collect.list[state.collect.currentTag])
    },

    [CHANGE_COLLECT_TAG](state, tag) {

        state.collect.currentTag = tag
    }
}

export default {
    state,
    mutations
}
