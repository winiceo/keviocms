/**
 * App router config
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
// import { userInitPromise } from '../store/modules/user'
import otherModuleRoutes from './module'
Vue.use(VueRouter)

const routes = [
  {
  path: '/',
  component: (resolve) => {
    require(['../pages/home/index.vue'], resolve)
  },
  children: [...otherModuleRoutes, {
    path: '/', redirect: '/dashboard'
  }]
}]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  history: false,
  saveScrollPosition: true,
  suppressTransitionError: true,
  routes
})

// router
router.beforeEach((to, from, next) => {
  // // 确保用户身份信息已获取
  // userInitPromise.then(() => {
  //   store.dispatch('changeRouteLoading', true).then(() => {
  //     // has logged in, redirect
  //     if (to.path === '/login' && store.getters.loggedIn) {
  //       return next(false)
  //     }
  //     if (!to.meta.skipAuth) {
  //       // this route requires auth, check if logged in
  //       // if not, redirect to login page.
  //       if (!store.getters.loggedIn) {
  //         next({
  //           path: '/login',
  //           query: { redirect: to.fullPath }
  //         })
  //       } else {
  //         next()
  //       }
  //     } else {
  //       next()
  //     }
  //   })
  // })
})

router.afterEach(() => {
  store.dispatch('changeRouteLoading', false)
})

export default router
