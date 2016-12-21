var path = require('path');
var cooking = require('cooking');


var chunk = [
    {
        name: 'vendor',
        minChunks: function (module, count) {
            // any required modules inside node_modules are extracted to vendor
            return (
                module.resource &&
                /\.js$/.test(module.resource) &&
                module.resource.indexOf(
                    path.join(__dirname, 'node_modules')
                ) === 0
            );
        }
    },
    {
        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        name: 'manifest',
        chunks: ['vendor']
    }
];


// console.log(path.join(__dirname, 'src/themes/default'))
 
cooking.set({
    
 
    leven:"fuck",
    entry: {
        app: './src/index.js'
    },
    dist: './dist',
    template: './index.tpl',

    devServer: {
        port: 8888,
        log: false,
        publicPath: '/'
    },
    clean: true,
    hash: true,
    sourceMap: true,
    minimize: true,
    chunk: chunk,

    publicPath: '/dist/',


    assetsPath: 'static',
    urlLoaderLimit: 10000,
    extractCSS: '[name].[contenthash:7].css',
    root: path.join(__dirname, 'src'),
    modulesDirectories: ['node_modules'],

    extends: ['vue2', 'sass'],
    postcss: function(webapck) {
        return [
            require('postcss-salad')({
                browser: ['ie > 8', 'last 2 version'],
                features: {
                    'partialImport': {
                        addDependencyTo: webapck
                    },
                    'bem': {
                        'shortcuts': {
                            'component': 'b',
                            'modifier': 'm',
                            'descendent': 'e'
                        },
                        'separators': {
                            'descendent': '__',
                            'modifier': '--'
                        }
                    }
                }
            })
        ];
    }




});


cooking.add('resolve.alias', {

     
    kevio: path.join(__dirname, 'src'),
    pages: path.join(__dirname, 'src/pages'),
    assets:path.join(__dirname, 'src/assets'),
    elementUi:path.join(__dirname, 'src/lib/elementUi'),
    leven:path.join(__dirname, 'src/lib/leven'),
    iview:path.join(__dirname, 'src/lib/iview'),


     
});
cooking.add('resolve.root', [
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

module.exports = cooking.resolve();
