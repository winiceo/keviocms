'use strict';

import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './app'
import router from 'kevio/router/collect'
import {sync} from 'vuex-router-sync'
import * as filters from 'kevio/filters'
import store from 'kevio/store'
import FastClick from 'fastclick'
import K from 'parse';
import ElementUI from 'elementUi'
import 'elementUi/theme-default/index.css'
import config from 'kevio/config'

const _ = require('lodash')

sync(store, router)

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
window.addEventListener('load', () => {
    FastClick.attach(document.body)
})

K.initialize(config.APP_ID, config.MASTER_KEY);
K.serverURL = config.SERVER_URL;
window.Kevio = window.K = K;
Vue.mixin({

    methods: {

        _init: function (callback) {

        }
    },
    beforeMount(){
        var _vm = this;
        if (_vm.$route && _vm.$route.query) {
            if (_vm.$route.query.bid) {
                store.commit("SET_BID", _vm.$route.query.bid)

            }
        }

    },
    mounted(){

        this._init();
    }
})

Vue.use(ElementUI)
Vue.use(VueResource)
Object.defineProperty(Vue.prototype, '$bus', {
    get() {
        return this.$root.bus;
    }
});
var bus = new Vue({})
new Vue({
    router,
    el: '#app',
    store,
    data: {
        bus: bus // Here we bind our event bus to our $root Vue model.
    },
    render: h => h(App)
})
