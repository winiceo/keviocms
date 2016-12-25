import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    //mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            name: 'index',
            component: require('pages/home'),
        },
        {
            path: '/data',
            name: 'data',
            component: require('pages/data')
        },
        {
            path: '/setting',
            name: 'setting',
            component: require('pages/setting')
        },
        {
            path: '/statistics',
            name: 'statistics',
            component: require('pages/statistics')
        },
        {
            path: '/layout',
            name: 'layout',
            component: require('pages/layout')
        },
        {
            path: '/form/setting',
            name: 'form_setting',
            component: require('pages/form/Setform')
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: require('pages/home')
        },
        {
            path: '/web',
            name: 'web',
            component: require('pages/web')
        }

    ]
})



