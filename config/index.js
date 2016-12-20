const path = require('path')


const config = {
    env: process.env.NODE_ENV || 'development',
    dir_client: 'src',
    dir_dist: 'dist'

}

/************************************************
 -------------------------------------------------

 All Internal Configuration Below
 Edit at Your Own Risk

 -------------------------------------------------
 ************************************************/

// ------------------------------------
// Environment
// ------------------------------------
// N.B.: globals added here must _also_ be added to .eslintrc
config.globals = {
    'process.env': {
        'NODE_ENV': JSON.stringify(config.env)
    },
    'NODE_ENV': config.env,
    '__DEV__': config.env === 'development',
    '__PROD__': config.env === 'production',
    '__DEBUG__': config.env === 'development',
    '__TEST__': config.env === 'test',

}
// const resolve = path.resolve
// const base = function(args) {
//     "use strict";
//     return  Reflect.apply(resolve, null, [config.path_base, args])
//
// }
// config.utils_paths = {
//     base: base,
//     client: base.bind(null, config.dir_client),
//     dist: base.bind(null, config.dir_dist),
//
// }
//
// console.log(config.utils_paths.base())
exports.config = function () {
    return config
}
  
