const gulp = require('gulp');
const path = require('path');
const babel = require('gulp-babel');
const merge = require('merge-stream');

const {
  paths,
  globs
} = require('./config');

const transpile = (src, dest) => {
  return gulp.src(src)
    // .pipe()
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest(dest));
}

function transpileIndex() {
  return transpile(
    path.join(paths.src.root, '*.js'),
    paths.dest.root
  );
}

function transpileLib() {
  return transpile(
    path.join(paths.src.lib, globs.js),
    paths.dest.lib
  );
}

function compileLib() {
  return merge(transpileIndex(), transpileLib());
}

function watchLib() {
  gulp.watch(path.join(paths.src.root, '*.js'), transpileIndex);
  gulp.watch(path.join(paths.src.lib, globs.js), transpileLib);
}

module.exports = {
  compileLib,
  watchLib
};