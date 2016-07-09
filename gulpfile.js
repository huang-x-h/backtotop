'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('./sass/backtotop.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['sass'], function() {
  return gulp.src('./backtotop.js')
    .pipe(gulp.dest('./dist'));
});
