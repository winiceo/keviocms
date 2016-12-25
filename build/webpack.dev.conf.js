var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
    module: {
        loaders: utils.styleLoaders({sourceMap: config.dev.cssSourceMap})
    },
    // eval-source-map is faster for development
    devtool: '#eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        // new HtmlWebpackPlugin({
        //     filename: 'index.html',
        //     template: 'index.html',
        //     inject: true
        // })
    ]
})

utils.templates().map(conf=> {
    "use strict";
    console.log(conf)
    module.exports.plugins.push(new HtmlWebpackPlugin(conf));
})


// var pages = utils.getEntry('./src/app/**/*.tpl');
//
// for (var pathname in pages) {
//   console.log(pathname);
//   // 配置生成的html文件，定义路径等
//   var conf = {
//     filename: pathname + '.tpl',
//     template: pages[pathname], // 模板路径
//     inject: true              // js插入位置
//   };
//
//   if (pathname in module.exports.entry) {
//     conf.chunks = ['vendors', pathname];
//     conf.hash = false;
//   }
//
//   if(/b|c/.test(pathname)) conf.chunks.splice(2, 0, 'common-b-c')
//   // 需要生成几个html文件，就配置几个HtmlWebpackPlugin对象
//   module.exports.plugins.push(new HtmlWebpackPlugin(conf));
// }


