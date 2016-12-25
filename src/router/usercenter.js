import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    //mode: 'history',
    scrollBehavior: () => ({y: 0}),
    routes: [
        {
            path: '/',
            name: 'index',
            component: require('modules/user/dashboard'),
        }, {
            path: '/login',
            name: 'login',
            component: require('modules/user/login')
        }, {
            path: '/register',
            name: 'register',
            component: require('modules/user/register')
        }, {
            path: '/dashboard',
            name: 'dashboard',
            component: require('modules/user/dashboard'),
            children: [
                {
                    path: 'bill',
                    name: 'bill',
                    component:  require('modules/bill')

                }
            ]
        },


    ]
})



