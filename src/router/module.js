export default [

    {
      path: '/dashboard',
      component: (resolve) => {
        require(['pages/home/index.vue'], resolve)
      }
    },{
      path: '/aaaa',
      component: (resolve) => {
        require(['pages/form/Setform.vue'], resolve)
      }
    },
//
// {
//   path: '/users',
//   component: (resolve) => {
//     require(['../view/UserList.vue'], resolve)
//   }
// },
//     {
//   path: '/tips',
//   component: (resolve) => {
//     require(['../pages/tips/index.vue'], resolve)
//   }
// }

]
