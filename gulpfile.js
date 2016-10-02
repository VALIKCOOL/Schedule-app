var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssbeautify = require('gulp-cssbeautify'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require("gulp-rename"),
    cssmin = require("gulp-cssmin"),
    uglify = require('gulp-uglify'),

    browserify = require('browserify'),
    del = require('del'),
    source = require('vinyl-source-stream'),
    vinylPaths = require('vinyl-paths'),
    glob = require('glob'),
    Server = require('karma').Server,
    gulp = require('gulp');

var paths = {
    root: 'app/',
    scripts: 'app/js/',
    styles: 'app/styles/',
    dist: 'app/js/build/'
};

gulp.task('browserify', function () {
    return browserify(paths.scripts + 'app.js', {
            debug: true
        })
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('publish', function () {
    return gulp.src(
        [
            'app/libs/**/*.min.js',
            'app/styles/**/*.min.css',
            'app/styles/images/*',
            'app/fonts/**/*',
            'app/index.html',
            'app/js/**/*',
            'app/assets/**/*',
            'app/partials/**/*',
            'app/data/**/*'
        ], {
            base: '.'
        }).pipe(gulp.dest("public/"));
});

gulp.task('minify-css', function () {
    return gulp.src('app/styles/*.css').pipe(cssmin()).pipe(rename({
        suffix: '.min'
    })).pipe(gulp.dest(function (file) {
        return file.base;
    }));
});

gulp.task('minify-js', function () {
    return gulp.src('app/libs/**/*.js').pipe(uglify()).pipe(rename({
        suffix: '.min'
    })).pipe(gulp.dest(function (file) {
        return file.base;
    }));
});
gulp.task('compile-sass', function () {
    var sassStream = gulp.src(paths.styles + '*.scss');
    var cssStream = gulp.src(paths.styles + '*.css');
    return gulp.src(paths.styles + '*.scss').pipe(sass()).pipe(autoprefixer()).pipe(gulp.dest("app/styles")).pipe(cssmin()).pipe(rename({
        suffix: '.min'
    })).pipe(gulp.dest(paths.styles));
});

//
//gulp.task('watch', function () {
//    gulp.watch('app/styles/*.scss', ['compile-sass']);
//});

gulp.task('watch', ['browserify'], function () {
    gulp.watch([
    paths.scripts + '**/*.js',
    "!" + paths.scripts + "build/*.js"
  ], ['browserify']);
});

gulp.task('default', ['watch']);