import Vue from 'vue'
import Validator from 'plugins/validator'
import I18n from 'plugins/i18n'
import IScroll from 'plugins/iScroll'
import App from 'app'
import configRouter from 'route.config';
import VueRouter from 'vue-router'

import FastClick from 'fastclick'
FastClick.attach(window.document.body)


// import router from './router'
import { sync } from 'vuex-router-sync'
// sync(store, router)


import K from 'parse';

//import store from 'store'


import store from 'store3'

 import ls from 'store2'
 
import './http'

//import SideNav from './components/side-nav';

import './locale'

import ElementUI from 'elementUi'
import 'elementUi/theme-default/index.css'


//Vue.component('side-nav', SideNav);
Vue.config.debug = true

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: configRouter
});

K.initialize("kevioapp", 'pmker.com');
K.serverURL = 'http://localhost:4000/api/parse'
window.Kevio=window.K=K;
Vue.mixin({
  data:function(){
    return {
      app:{}

    }
  },
  methods: {

    _init: function (callback) {

    }
  },
  mounted(){
    var _vm=this;
    if(_vm.$route&&_vm.$route.query){
      if(_vm.$route.query.bid){
        _vm.$set(this.app,'bid',_vm.$route.query.bid)

      }
    }

    this._init();
  }
})

sync(store, router)


Vue.use(ElementUI)


Vue.use(Validator)

Vue.use(IScroll);

Vue.use(VueRouter);







// router.beforeEach((route, redirect, next) => {
//   const scrollTop = document.body.scrollTop
//   const path = store.state.route.path
//   if (path) {
//     if (scrollTop) ls.set(path, scrollTop)
//     if (ls.get(path) && !scrollTop) ls.set(path, 0)
//   }
//   //store.dispatch('gProgress', 0)
//   next()
// })


new Vue({ // eslint-disable-line
  render: h => h(App),
  router,
    ElementUI,

  store
}).$mount('#app');
