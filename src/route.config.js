// import navConfig from './route.json';
//
// const registerRoute = (config) => {
//     let route = [];
//     // function addRoute(page) {
//     //     const component = page.path === '/changelog' ? require('./pages/changelog.vue') : require(`./docs${page.path}.md`);
//     //     let child = {
//     //         path: page.path.slice(1),
//     //         meta: {
//     //             title: page.title || page.name,
//     //             description: page.description
//     //         },
//     //         component: component.default || component
//     //     };
//     //
//     //     route[0].children.push(child);
//     // }
//     // config
//     //     .map(nav => {
//     //         if (nav.groups) {
//     //             nav.groups.map(group => {
//     //                 group.list.map(page => {
//     //                     addRoute(page);
//     //                 });
//     //             });
//     //         } else if (nav.children) {
//     //             nav.children.map(page => {
//     //                 addRoute(page);
//     //             });
//     //         } else {
//     //             addRoute(nav);
//     //         }
//     //     });
//
//     return {route, navs: config};
// };

// const route1 = [
//
//     {
//         path: '/media',
//         name: '首页',
//         component: require('modules/media/index')
//     },
//     {
//         path: '/articles',
//         name: '文章管理',
//         component: require('modules/article/index'),
//
//
//     },{
//         path: '/articles/add',
//         name: '文章管理',
//         component: require('modules/article/add'),
//
//
//     }, {
//         path: '/medias',
//         name: '资源管理',
//         component: require('modules/media/index')
//
//     },
//     {
//         path: '/collect',
//         name: '收藏',
//         component: require('modules/collect/index.vue'),
//         children: [
//             {
//                 path: ':tag',
//                 name: 'collect_tag',
//                 component: require('modules/collect/collect')
//             },
//          ]
//
//     }
// ];

const route=[]

// let modules = {
//     path: '/modules',
//     name: '模块功能',
//     redirect: '/modules/website',
//
//     component: require('./pages/modules.vue'),
//     children: [
//         {
//             path: 'website',
//             name: '设计原则',
//             component: require('pages/website/index')
//         },
//         {
//             path: 'logo',
//             name: '设计原则',
//             component: require('pages/logo')
//
//         }]
// };

// let logo = {
//     path: '/doc',
//     name: '文档',
//
//     component: require('./pages/doc.vue'),
//
// };


let indexRoute =
    {
        path: '/',
        name: '首页',
        component: require('./pages/home/index.vue'),

    };


 route.push(indexRoute)
 //route.push( modules);

// route.route.push({
//     path: '*',
//     component: require('./docs/home.md')
// });

 export default route;
//
// //
// children: [
//     {
//         path: 'modules',
//         name: '功能',
//         components:   require('./pages/common/system.vue'),
//
//         children: [{
//             path: 'website',
//             name: '网站设计',
//             component:  {
//                 "content":require('./pages/website/index.vue')
//             }
//
//         },
//             {
//                 path: 'logo',
//                 name: '网站设计',
//                 component:  {
//                     "content":require('./pages/website/index.vue')
//                 }
//
//             }]
//     },
//     {
//         path: 'media',
//         name: '素材',
//         components: {
//             "tool-content": require('./pages/common/media.vue')
//         }
//     }
// ]