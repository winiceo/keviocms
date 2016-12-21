import { assign } from 'lodash'
import { saveMulti, clearMulti,save } from '../../storage'
import { getStoreBill, login, getUserInfo } from './user.api'
import { STORE_BILL,STORE_BILL_BID,STORE_BILL_JSON } from '../../constants'
import K from 'parse'
const stored = getStoreBill()

var Bill = K.Object.extend("bill");
var billObject = new Bill();
const state = {
  bid: stored[0] || '',
  billjson: stored[1] || '',
  bill:''

}
let userInitPromise = null

const mutations = {
  // set user info
  SET_BILL (state, bill) { 
    state.bill = bill
  },
  SET_BID (state, bid) {
    state.bid = bid
  },
  SET_BILL_JSON (state, billjson) { 
    state.billjson = billjson
  },

}

const actions = {

  getBill: ({commit, dispatch, state}, config) => {

     return new Promise((resolve, reject) => {
      var query = new K.Query(Bill);
      query.equalTo("objectId", state.bid);

      query.first({
        success: function(result) {
           
           if(result){
            const bill = result
            commit('SET_BILL', bill)
            //commit('SET_BILL_JSON', bill.toJSON())
            saveMulti([{
              key: STORE_BILL,
              value: bill
            }, {
              key: STORE_BILL_BID,
              value: state.bid
            }])
           
            resolve(bill)
           }else{
            resolve(false)
           }
            
        },
        error: function(error) {
          reject(error)
          alert("Error: " + error.code + " " + error.message);
        }
      });
     }).catch(err => { reject(err) })




  },
  updateBid ({ commit }, bid) {
      commit('SET_BID',bid)
      save(STORE_BILL_BID, bid)

  },
  updateBill ({ commit }, bill) {
      commit('SET_BILL', bill)
      saveMulti([{
              key: STORE_BILL,
              value: bill
            }, {
              key: STORE_BILL_BID,
              value: state.bid
      }])

  },
  updateBillJson ({ commit }, billjson) {
     commit('SET_BILL_JSON', billjson)
     save(STORE_BILL_JSON, billjson)  

  },

}

const getters = {
  storebid (state) {
    return state.bid
  },
  storebill (state) {
    return state.bill
  },
  storebilljson (state) {
    return state.billjson
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

