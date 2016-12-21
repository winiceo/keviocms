export default [
    {
        path: '/',
        name: 'index',
        component: require('pages/home')
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
    },


    {
        path: '*',
        component: require('pages/home')
    }
]

