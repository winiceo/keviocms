var path = require('path');
var cooking = require('cooking');
var build = require('./build');

var isProd = process.env.NODE_ENV === 'production';

 // entry: Object.assign(
 //        // 用到什么公共lib（例如React.js），就把它加进vender去，目的是将公用库单独提取打包
 //        // 'vender': ['vue','jquery']
 //       'babel-polyfill',
 //        build.entries()
 //    ),
cooking.set({
    entry: build.entries(),
    dist: './dist',
    template: build.templates(),
    devServer: {
        port: 8888,
        publicPath: '/',
    },
    clean: true,
    hash: true,
    sourceMap: true,
    chunk: true,
    urlLoaderLimit: 10000,
    // postcss: function(webapck) {
    //     return [
    //         require('postcss-salad')({
    //             browser: ['ie > 8', 'last 2 version'],
    //             features: {
    //                 'partialImport': {
    //                     addDependencyTo: webapck
    //                 },
    //                 'bem': {
    //                     'shortcuts': {
    //                         'component': 'b',
    //                         'modifier': 'm',
    //                         'descendent': 'e'
    //                     },
    //                     'separators': {
    //                         'descendent': '__',
    //                         'modifier': '--'
    //                     }
    //                 }
    //             }
    //         })
    //     ];
    // },


    modulesDirectories: ['node_modules'],
    assetsPath: 'static',
    publicPath: './',
    extractCSS: isProd ? 'static/[name].[contenthash:7].css' : true,

    extends: ['vue2', 'buble', 'autoprefixer'],
    externals: build.externals()
});

cooking.add('resolve.alias', {


    kevio: path.join(__dirname, 'src'),
    pages: path.join(__dirname, 'src/pages'),
    modules: path.join(__dirname, 'src/modules'),
    assets:path.join(__dirname, 'src/assets'),
    elementUi:path.join(__dirname, 'src/lib/elementUi'),
    leven:path.join(__dirname, 'src/lib/leven'),
    iview:path.join(__dirname, 'src/lib/iview'),



});
cooking.add('resolve.root', [
    process.cwd() + '/src',
    process.cwd() + '/node_modules'

])
cooking.add('resolve.modules', [
    process.cwd() + '/src',
    process.cwd() + '/node_modules'

])
;
//
// cooking.add('loader.less', {
//     test: /\.less$/,
//     include: path.join(__dirname, './src/themes/genv/'),//需要被加载文件的路径
//
//     loaders: ['style-loader!css-loader!autoprefixer-loader?{browsers: ["last 2 version", "firefox 15"]}?outputStyle=expanded!less-loader']
// })


cooking.add('resolve.extensions', ['', '.css','.scss','.less' ,'.js', '.json', '.vue']);

isProd && cooking.add('output.filename', 'static/[name].[hash:7].js');

module.exports = cooking.resolve();
