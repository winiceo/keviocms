import {assign} from 'lodash'
import {saveMulti, clearMulti, save,read} from '../../storage'

import {STORE_NOTES,STORE_BILL_BID} from '../../constants'
import AV from 'leanengine'

const state = {

    notes: [],
    note: {},
    upload: {},

}

const mutations = {
    SET_BID(state,bid){
        state.bid=bid;
    },
    SET_NOTES (state, notes) {
        state.notes = notes
    },
    SET_NOTE (state, note) {
        state.note = note
    },
    SET_UPLOAD (state, upload) {
        state.upload = upload
    }

}

const actions = {

    getNotes: ({commit, dispatch, state}, config) => {

        return new Promise((resolve, reject) => {
            var query = new AV.Query("notes");
            query.descending('createdAt');
            //console.log(getters.getbid())

            query.equalTo("bid", read(STORE_BILL_BID));
            query.find({
                success: function (res) {


                    if (res) {
                        const notes = res
                        //console.log(notes)
                        commit('SET_NOTES', notes)

                        resolve(notes)
                    } else {
                        resolve(false)
                    }

                },
                error: function (error) {
                    reject(error)

                }
            });
        }).catch(err => {
            reject(err)
        })

    },
    saveNote ({commit, dispatch, state}, payload) {


            var note = AV.Object.createWithoutData('notes', state.note.get("id"));
            // 设置名称
            note.set('bid',read(STORE_BILL_BID))
            note.set(payload);
            return note.save()

    },
    setNote: ({commit, dispatch, state}, config) => {


        commit('SET_NOTE', config)


    },
    setUpload: ({commit, dispatch, state}, config) => {


        commit('SET_UPLOAD', config)


    }


}

const getters = {
    getbid(state){
      return  read(STORE_BILL_BID)
    },
    storenotes (state) {
        return state.notes
    },
    storenote (state) {
        return state.note
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

