/**
 * Popular Tasks
 * -------------
 *
 * compile: compiles the .less files of the specified packages
 * lint: runs jshint on all .js files
 */

var gulp       = require('gulp'),
    header     = require('gulp-header'),
    less       = require('gulp-less'),
    rename     = require('gulp-rename'),
    concat     = require('gulp-concat'),
    merge      = require('merge-stream'),
    path       = require('path'),
    fs         = require('fs'),
    glob       = require('glob');

// banner for the css files
var banner = "/*! <%= data.title %> <%= data.version %> | <%= data.copyright %> | <%= data.license %> License */\n";

gulp.task('default', ['compile', 'compile-styles']);

var dist="src/assets/css"
/**
 * Compile all less files
 */
gulp.task('compile', function () {

    return gulp.src(['src/less/theme.less', 'src/less/style.less'])
        .pipe(concat('theme.less'))
        .pipe(less({paths: 'less', compress: true}))
        .pipe(header(banner, { data: require('./composer.json') }))
        .pipe(gulp.dest(dist));
});


/**
 * Compile style less files
 */
gulp.task('compile-styles', function() {

    var files = glob.sync('src/less/styles/*.less'),
        streams = [];

    files.forEach(function(file) {

        var style = path.basename(file).replace('.less', '');

        streams.push( gulp.src(['src/less/theme.less', file])
            .pipe(concat('theme.less'))
            .pipe(less({paths: 'less', compress: true}))
            .pipe(header(banner, { data: require('./composer.json') }))
            .pipe(rename(function (file) {
                file.basename = file.basename +'.'+ style;
            }))
            .pipe(gulp.dest(dist)) );
    });

    return merge(streams);

});

/**
 * Watch for changes in files
 */
gulp.task('watch', function () {
    gulp.watch('src/**/*.less', ['compile', 'compile-styles']);
});
