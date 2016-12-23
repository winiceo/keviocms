import Vue from 'vue'
import App from './app'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerConfig from 'kevio/router/collect'
import store from 'kevio/store'
import FastClick from 'fastclick'
import { sync } from 'vuex-router-sync'

const _ = require('lodash')


import K from 'parse';
import ElementUI from 'elementUi'
import 'elementUi/theme-default/index.css'


window.addEventListener('load', () => {
  FastClick.attach(document.body)
})

K.initialize("kevioapp", 'pmker.com');
K.serverURL = 'http://localhost:4000/api/parse'
window.Kevio=window.K=K;


const AV = require('leanengine')
var APP_ID = '1e2a1f8CBN4mliM17JaXnHHg';
var APP_KEY = 'z4mQ2xaRHeXP2RVCaezCSHNF';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
window.AV=AV

Vue.mixin({

  methods: {

    _init: function (callback) {

    }
  },
  beforeMount(){
    var _vm=this;
    if(_vm.$route&&_vm.$route.query){
      if(_vm.$route.query.bid){
        store.commit("SET_BID",_vm.$route.query.bid)

      }
    }

  },
  mounted(){

    this._init();
  }
})

//sync(store, router)


Vue.use(ElementUI)

Vue.use(VueRouter)
Vue.use(VueResource)
const router = new VueRouter({routes: routerConfig})

new Vue({
  router,
  el: '#app',
  store,
  render: h => h(App)
})
