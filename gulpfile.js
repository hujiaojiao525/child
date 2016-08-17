var gulp = require('gulp');
var minifycss = require('gulp-clean-css'); // 压缩css
var scss = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var rjs = require('gulp-requirejs');  // 合并require开发的js
var amdOptimize = require('gulp-requirejs-optimize');
var concat = require("gulp-concat");
var uglify = require('gulp-uglify');  // 压缩js
// 静态服务器 + 监听 scss/html 文件
gulp.task('server', ['sass'], function() {
    browserSync.init({
        server: {baseDir:'./'},
        startPath:'index.html'
    });

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("main.scss", ['sass']);
    gulp.watch("js/*.js").on('change', reload);
    gulp.watch("js/main.js").on('change', reload);
    gulp.watch("html/*.html").on('change', reload);
    gulp.watch("index.html").on('change', reload);
});

gulp.task('sass',function(){
    return gulp.src('main.scss')
        .pipe(sourcemaps.init())
    	.pipe(scss())
        .on('error',function(err){
            console.log(err.message);
        })
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
        .pipe(reload({stream:true}))
        // .pipe(minifycss())
        // .pipe(gulp.dest('build'))
});

/*gulp.task('build',['sass'],function(){
    rjs({
        baseUrl:"./",
        name:"lib/almond",
        include:['js/main'],
        out:'bulid.js',
        paths:{
            "jquery":"lib/jquery-3.0.0.min",
            "template":"lib/template-native",
            "fastclick":"lib/fastclick"
        }
    })
        .pipe(uglify())
        .pipe(gulp.dest('build'))
});*/


