const del = require('del');
const gulp = require('gulp');
const through = require('through2');

const handlebars = require('gulp-handlebars');
const defineModule = require('gulp-define-module');

function clean() {
  return del('dist');
}

function templates() {
  return gulp.src('source/**/*.{hbs,handlebars}')
    .pipe(handlebars())
    .pipe(defineModule('node'))
    .pipe(gulp.dest('dist'));
}

gulp.task('build', gulp.series(clean, templates));
