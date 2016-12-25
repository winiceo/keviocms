
import Vue from 'vue'
import App from './app'
import router from 'kevio/router/usercenter'
import { sync } from 'vuex-router-sync'
import * as filters from 'kevio/filters'
import store from 'kevio/store'
import FastClick from 'fastclick'
import VueResource from 'vue-resource'
import K from 'parse';
import ElementUI from 'elementUi'
import 'elementUi/theme-default/index.css'
import config from 'kevio/config'

require( 'kevio/locale/index')
const _ = require('lodash')

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

window.addEventListener('load', () => {
  FastClick.attach(document.body)
})

K.initialize(config.APP_ID, config.MASTER_KEY);
K.serverURL = config.SERVER_URL;
window.Kevio=window.K=K;
Vue.mixin({

  methods: {

    _init: function (callback) {

    }
  },

  mounted(){

    this._init();
  }
})

Vue.use(ElementUI)
Vue.use(VueResource)

new Vue({
  router,
  el: '#app',
  store,
  render: h => h(App)
})
