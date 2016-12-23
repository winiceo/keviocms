export default [
    {
        path: '/',
        name: 'index',
        component: require('modules/user/dashboard'),
    },
    {
        path: '/dashboard',
        name: 'index',
        component: require('modules/user/dashboard'),
    },
    {
        path: '/login',
        name: 'login',
        component: require('modules/user/login')
    },
    {
        path: '/register',
        name: 'register',
        component: require('modules/user/register')
    },
    {
        path: '/bill',
        name: 'bill',
        component: {main: require('modules/bill/')}
    }

]



