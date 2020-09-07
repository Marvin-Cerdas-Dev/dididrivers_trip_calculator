'use strict'

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browsersync = require('browser-sync').create(),
	del = require('del'),
	imagemin = require('gulp-imagemin'),
	uglify = require('gulp-uglify'),
	usemin = require('gulp-usemin'),
	rev = require('gulp-rev'),
	cleancss = require('gulp-clean-css'),
	flatmap = require('gulp-flatmap'),
	htmlmin = require('gulp-htmlmin'),
	save = require('gulp-save'),
        minifyInline = require('gulp-minify-inline'),
        minifyHTML = require('gulp-minify-html');

const {phpMinify} = require('@cedx/gulp-php-minify');

gulp.task('sass', function(){
	gulp.src(['./css/*.scss'])
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function(){
	gulp.watch(['./css/*.scss'], ['sass']);
});

gulp.task('browser-sync', function(){
	var files = ['./*.html','./css/*.css', './img/*.{png, jpg, gif}', './js/*.js'];
	browsersync.init(files, {
		server: { 
			baseDir: './'
		}
	});
});

gulp.task('default', gulp.series('browser-sync', 'sass:watch'));

gulp.task('clean', function(){
	return del(['dist']);
});

gulp.task('imagemin', function(){
	return gulp.src('img/*.{png, jpg, jpeg, gif}')
		.pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
		.pipe(gulp.dest('dist/img'));
});

gulp.task('usemin', function(){
	return gulp.src('./*.html')
		.pipe(flatmap(function(stream, file){
			return stream
				.pipe(usemin({
					css: [rev()],
					html: [function() { return htmlmin({collapseWhitespace: true})}],
					js: [uglify(), rev()],
					inlinejs: [uglify()],
					inlinecss: [cleancss(), 'concat']
				}));
		}))
		.pipe(gulp.dest('dist/'));
});

gulp.task('minify:php', () => gulp.src('./*.php', {read: false})
    .pipe(phpMinify())
    .pipe(gulp.dest('dist/'))
);


gulp.task('imagemin-cr', function(){
	return gulp.src('country/cr/img/*.{png, jpg, jpeg, gif}')
		.pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
		.pipe(gulp.dest('dist/country/cr/img'));
});

gulp.task('usemin-cr', function(){
	return gulp.src('country/cr/*.html')
		.pipe(flatmap(function(stream, file){
			return stream
				.pipe(usemin({
					css: [rev()],
					html: [function() { return htmlmin({collapseWhitespace: true})}],
					js: [uglify(), rev()],
					inlinejs: [uglify()],
					inlinecss: [cleancss(), 'concat']
				}));
		}))
		.pipe(gulp.dest('dist/country/cr/'));
});

// Se realiza unos cambios ya que las nuevas versiones de gulp así lo requiere.
gulp.task('build', gulp.series('clean', 'minify:php'));


