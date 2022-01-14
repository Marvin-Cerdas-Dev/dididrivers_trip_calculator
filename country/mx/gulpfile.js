'use strict'

const gulp = require('gulp');
const {phpMinify} = require('@aquafadas/gulp-php-minify');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');

gulp.task('php', () => gulp.src('*.php', {read: false})
  .pipe(phpMinify())
  .pipe(htmlmin({
    collapseWhitespace: true,
  }))
  .pipe(size())
  .pipe(gulp.dest('./dist'))
);

// Se realiza unos cambios ya que las nuevas versiones de gulp así lo requiere.
gulp.task('build', gulp.series('php'));


