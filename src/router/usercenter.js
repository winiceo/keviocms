import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    //mode: 'history',
    scrollBehavior: () => ({y: 0}),
    routes: [
        {
            path: '/dashboard',
            name: 'index',
            component: require('modules/user/dashboard'),
        },{
            path: '/login',
            name: 'login',
            component: require('modules/user/login')
        }, {
            path: '/register',
            name: 'register',
            component: require('modules/user/register')
        }, {
            path: '/bill',
            name: 'bill',
            component: {main: require('modules/bill/')}
        }

    ]
})



