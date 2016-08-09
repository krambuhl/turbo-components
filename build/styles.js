const path = require('path');
const gulp = require('gulp');
const merge = require('merge-stream');
const file = require('gulp-file');

const {
  paths,
  globs
} = require('./config');

function compileStyles(done) {
  return gulp.src(path.join(paths.src.components, globs.css))
    .pipe(gulp.dest(paths.dest.root))
    .on('end', function() {
      return file('styles.css', '')
        .pipe(gulp.dest(paths.dest.root))
        .on('end', function() {
          done();
        });
    });
}

function watchStyles() {
  gulp.watch(path.join(paths.src.components, globs.css), compileStyles);
}

module.exports = {
  compileStyles,
  watchStyles
};