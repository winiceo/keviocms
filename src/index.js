// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerConfig from './router'
import store from './store'
import FastClick from 'fastclick'
import { sync } from 'vuex-router-sync'



import K from 'parse';
import ElementUI from 'elementUi'
import 'elementUi/theme-default/index.css'


window.addEventListener('load', () => {
  FastClick.attach(document.body)
})

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
