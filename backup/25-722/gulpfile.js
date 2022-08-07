'use strict'

var gulp = require('gulp'),
        sass = require('gulp-sass'),
        browsersync = require('browser-sync').create(),
        del = require('del'),
        imagemin = require('gulp-imagemin'),
        uglify = require("gulp-uglify"),
        usemin = require('gulp-usemin'),
        rev = require('gulp-rev'),
        cleancss = require('gulp-clean-css'),
        flatmap = require('gulp-flatmap'),
        htmlmin = require('gulp-htmlmin'),
        save = require('gulp-save'),
        minifyInline = require('gulp-minify-inline'),
        minifyHTML = require('gulp-minify-html');

gulp.task('sass', function () {
    gulp.src(['./css/*.scss'])
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch(['./css/*.scss'], ['sass']);
});

gulp.task('browser-sync', function () {
    var files = ['./*.html', './css/*.css', './img/*.{png, jpg, gif}', './js/*.js'];
    browsersync.init(files, {
        server: {
            baseDir: './'
        }
    });
});

gulp.task('default', gulp.series('browser-sync', 'sass:watch'));

/* Main site funtions */

gulp.task('clean', function () {
    return del(['dist']);
});

gulp.task('copy-sitemap', function () {
    return gulp.src('*.xml')
            .pipe(gulp.dest('./dist'));
});

gulp.task('copy-robot', function () {
    return gulp.src('*.txt')
            .pipe(gulp.dest('./dist'));
});

gulp.task('imagemin', function () {
    return gulp.src('img/*')
            .pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
            .pipe(gulp.dest('dist/img'));
});

gulp.task('usemin', function () {
    return gulp.src('./*.php')
            .pipe(flatmap(function (stream, file) {
                return stream
                        .pipe(usemin({
                            css: [rev()],
                            html: [function () {
                                    return htmlmin({collapseWhitespace: true})
                                }],
                            js: [rev()],
                            inlinecss: [cleancss(), 'concat']
                        }));
            }))
            .pipe(gulp.dest('dist/'));
});


gulp.task('includesmin', function () {
    return gulp.src('./includes/*.php')
            .pipe(flatmap(function (stream, file) {
                return stream
                        .pipe(usemin({
                            css: [rev()],
                            html: [function () {
                                    return htmlmin({collapseWhitespace: true})
                                }],
                            js: [uglify(), rev()],
                            inlinejs: [uglify()],
                            inlinecss: [cleancss(), 'concat']
                        }));
            }))
            .pipe(gulp.dest('dist/includes'));
});

/* Costa Rica site funtions */

gulp.task('imagemin-cr', function () {
    return gulp.src('country/cr/img/*')
            .pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
            .pipe(gulp.dest('dist/country/cr/img'));
});

gulp.task('usemin-cr', function () {
    return gulp.src('./country/cr/*.php')
            .pipe(flatmap(function (stream, file) {
                return stream
                        .pipe(usemin({
                            css: [rev()],
                            html: [function () {
                                    return htmlmin({collapseWhitespace: true})
                                }],
                            js: [ rev()],
                            inlinecss: [cleancss(), 'concat']
                        }));
            }))
            .pipe(gulp.dest('dist/country/cr/'));
});

gulp.task('includesmin-cr', function () {
    return gulp.src('./country/cr/includes/*.php')
            .pipe(flatmap(function (stream, file) {
                return stream
                        .pipe(usemin({
                            css: [rev()],
                            html: [function () {
                                    return htmlmin({collapseWhitespace: true})
                                }],
                            js: [uglify(), rev()],
                            inlinejs: [uglify()],
                            inlinecss: [cleancss(), 'concat']
                        }));
            }))
            .pipe(gulp.dest('dist/country/cr/includes'));
});


/* Mexico site funtions */

gulp.task('imagemin-mx', function () {
    return gulp.src('country/mx/img/*')
            .pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
            .pipe(gulp.dest('dist/country/mx/img'));
});

gulp.task('usemin-mx', function () {
    return gulp.src('./country/mx/*.php')
            .pipe(flatmap(function (stream, file) {
                return stream
                        .pipe(usemin({
                            css: [rev()],
                            html: [function () {
                                    return htmlmin({collapseWhitespace: true})
                                }],
                            js: [rev()],
                            inlinecss: [cleancss(), 'concat']
                        }));
            }))
            .pipe(gulp.dest('dist/country/mx/'));
});


gulp.task('includesmin-mx', function () {
    return gulp.src('./country/mx/includes/*.php')
            .pipe(flatmap(function (stream, file) {
                return stream
                        .pipe(usemin({
                            css: [rev()],
                            html: [function () {
                                    return htmlmin({collapseWhitespace: true})
                                }],
                            js: [uglify(), rev()],
                            inlinejs: [uglify()],
                            inlinecss: [cleancss(), 'concat']
                        }));
            }))
            .pipe(gulp.dest('dist/country/mx/includes'));
});

/* Master funtion - Deploy the project */
gulp.task('build', gulp.series('clean', 'copy-sitemap', 'copy-robot', 'imagemin', 'usemin', 'includesmin', 'imagemin-cr', 'usemin-cr', 'includesmin-cr', 'imagemin-mx', 'usemin-mx','includesmin-mx'));


