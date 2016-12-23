import {assign} from 'lodash'
import {saveMulti, clearMulti, save,read} from '../../storage'
import {getStoreBill, login, getUserInfo} from './user.api'
import {STORE_BILL, STORE_BILL_BID, STORE_BILL_DATAS, STORE_BILL_DATA} from '../../constants'
import AV from 'leanengine'
const stored = getStoreBill()

var Bill = AV.Object.extend("bill");
var BillData = AV.Object.extend("billdata");
var billObject = new Bill();
const state = {
    bid: stored[0] || '',
    bill: '',
    bills:'',
    billdatas:[],
    billdata:{},
    upload: {}
}

const mutations = {
    // set user info

    SET_BID (state, bid) {
        state.bid = bid
        save(STORE_BILL_BID, bid)
    },
    SET_BILL (state, bill) {
        state.bill = bill
    },
    SET_BILLS (state, bills) {
        state.bills = bills
    },

    SET_BILL_DATAS (state, billdatas) {
        state.billdatas = billdatas
    },

    SET_Bill_DATA(state, billdata) {
        state.billdata = billdata
    },
    SET_UPLOAD (state, upload) {
        state.upload = upload
    }

}

const actions = {

    updateBid ({commit}, bid) {
        commit('SET_BID', bid)
        save(STORE_BILL_BID, bid)

    },
    getBill: ({commit, dispatch, state}, config) => {

        return new Promise((resolve, reject) => {
            var query = new AV.Query(Bill);
            query.equalTo("objectId", state.bid);

            query.first({
                success: function (result) {

                    if (result) {
                        const bill = result
                        commit('SET_BILL', bill)
                        //commit('SET_BILL_JSON', bill.toJSON())
                        saveMulti([{
                            key: STORE_BILL,
                            value: bill
                        }])

                        resolve(bill)
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


    updateBill ({commit}, bill) {
        commit('SET_BILL', bill)
        saveMulti([{
            key: STORE_BILL,
            value: bill
        }])

    },


    getBillDatas: ({commit, dispatch, state}, config) => {

        return new Promise((resolve, reject) => {
            var query = new AV.Query(BillData);
            query.equalTo("bid", state.bid);
            query.descending("_created_at");
            query.find({
                success: function (result) {

                    if (result) {
                        const billdata = result
                        commit('SET_BILL_DATAS', billdata)

                        saveMulti([{
                            key: STORE_BILL_DATAS,
                            value: billdata
                        }])

                        resolve(billdata)
                    } else {
                        resolve(false)
                    }

                },
                error: function (error) {
                    reject(error)
                    alert("Error: " + error.code + " " + error.message);
                }
            });
        }).catch(err => {
            reject(err)
        })

    },

    saveBillData ({commit, dispatch, state}, payload) {


        var kobj = AV.Object.createWithoutData('billdata', payload.id);
        // 设置名称
        kobj.set('bid',state.bid)
        kobj.set(payload);
        return kobj.save()

    },

    setBillData: ({commit, dispatch, state}, config) => {

        commit('SET_Bill_DATA', config)

    },
    setUpload: ({commit, dispatch, state}, config) => {

        commit('SET_UPLOAD', config)


    }
}

const getters = {
    storebid (state) {
        return state.bid
    },
    storebill (state) {
        return state.bill
    },

    storebilldatas(state){
        return state.billdatas
    },
    storebilldata(state){
        return state.billdata
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

