'use strict';

import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './app'
import router from 'kevio/router/collect'
import { sync } from 'vuex-router-sync'
import * as filters from 'kevio/filters'
import store from 'kevio/store'
import FastClick from 'fastclick'
// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})


import K from 'parse';
import ElementUI from 'elementUi'
import 'elementUi/theme-default/index.css'
// require('object.assign/shim')()
const _ = require('lodash')


window.addEventListener('load', () => {
  FastClick.attach(document.body)
})

K.initialize("kevioapp", 'pmker.com');
K.serverURL = 'http://localhost:4000/api/parse'
window.Kevio=window.K=K;
Vue.mixin({

  methods: {

    _init: function (callback) {

    }
  },
  beforeMount(){
    // var _vm=this;
    // if(_vm.$route&&_vm.$route.query){
    //   if(_vm.$route.query.bid){
    //     store.commit("SET_BID",_vm.$route.query.bid)
    //
    //   }
    // }

  },
  mounted(){

    this._init();
  }
})
// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
const app = new Vue({
  router,
  store,
  ...App
})

// expose the app, the router and the store.
// note we are not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.
//export { app, router, store }
//
//
// //import VueRouter from 'vue-router'
//
// import routerConfig from 'kevio/router/usercenter'
//
// import { sync } from 'vuex-router-sync'
//
//
//
//
// // const AV = require('leanengine')
// // var APP_ID = '1e2a1f8CBN4mliM17JaXnHHg';
// // var APP_KEY = 'z4mQ2xaRHeXP2RVCaezCSHNF';
// // AV.init({
// //   appId: APP_ID,
// //   appKey: APP_KEY
// // });
// // window.AV=AV
//
// Vue.mixin({
//
//   methods: {
//
//     _init: function (callback) {
//
//     }
//   },
//   beforeMount(){
//     // var _vm=this;
//     // if(_vm.$route&&_vm.$route.query){
//     //   if(_vm.$route.query.bid){
//     //     store.commit("SET_BID",_vm.$route.query.bid)
//     //
//     //   }
//     // }
//
//   },
//   mounted(){
//
//     this._init();
//   }
// })
//
// //sync(store, router)
//
//
 Vue.use(ElementUI)
//
 //Vue.use(VueResource)
//
// //Vue.use(VueRouter)
//
// const router = new VueRouter({routes: routerConfig})
//
new Vue({
  router,
  el: '#app',
  store,
  render: h => h(App)
})
