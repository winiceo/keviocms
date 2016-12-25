import {assign} from 'lodash'
import {saveMulti, clearMulti, save, read,readMulti,clear} from '../../storage'
import {getStoreBill, login, getUserInfo} from './user.api'
import {STORE_BILL, STORE_BILL_BID, STORE_BILL_DATAS, STORE_BILL_DATA} from '../../constants'
import K from "parse"
const stored = readMulti([STORE_BILL_BID, STORE_BILL])
console.log(stored[1])
var Bill = K.Object.extend("bill");
var BillData = K.Object.extend("billdata");
var billObject = new Bill();
const state = {
    bid: stored[0] || '',
    bill: stored[1] || '',
    bills: '',
    billdatas: [],
    billdata: {},
    tempbill: {},

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
    SET_TEMP_BILL(state, bill) {
        state.tempbill = bill
    }

}

const actions = {

    updateBid ({commit}, bid) {
        clear();
        commit('SET_BID', bid)
        save(STORE_BILL_BID, bid)

    },
    getBill: ({commit, dispatch, state}, config) => {

        return new Promise((resolve, reject) => {

                var query = new K.Query(Bill);
                query.equalTo("objectId", state.bid);

                query.first({
                    success: function (result) {

                        if (result) {
                            const bill = result
                            commit('SET_BILL', bill)
                            console.log(bill)
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
            console.log(err)
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
            var query = new K.Query(BillData);
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

    getBills: ({commit, dispatch, state}, config) => {

        return new Promise((resolve, reject) => {
            var query = new K.Query(Bill);

            query.descending("_created_at");
            query.find({
                success: function (result) {

                    if (result) {
                        const billdata = result
                        commit('SET_BILLS', billdata)

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


        var kobj = K.Object.extend("billdata").createWithoutData(payload.id)
        // 设置名称
        kobj.set('bid', state.bid)
        kobj.set(payload);
        return kobj.save()

    },
    saveBill ({commit, dispatch, state}, payload) {


        var kobj = K.Object.extend("bill").createWithoutData(payload.id)
        // 设置名称

        kobj.set(payload);
        var acl = new K.ACL();
        acl.setPublicReadAccess(true);
        acl.setWriteAccess(K.User.current(), true);
        // kobj.setACL(new Parse.ACL(Parse.User.current()));

        // 将 ACL 实例赋予 Post 对象
        kobj.setACL(acl);
        return kobj.save()

    },

    setBillData: ({commit, dispatch, state}, config) => {

        commit('SET_Bill_DATA', config)

    },
    setBill: ({commit, dispatch, state}, config) => {

        commit('SET_BILL', config)

    },
    setTempBill: ({commit, dispatch, state}, config) => {

        commit('SET_TEMP_BILL', config)

    },

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
    tempbill(state){
        return state.tempbill
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}

