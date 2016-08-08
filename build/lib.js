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
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest(dest));
}

const transpileIndex = transpile(
  path.join(paths.src.root, 'index.js'),
  paths.dest.root
);

const transpileLib = transpile(
  path.join(paths.src.root, 'index.js'),
  paths.dest.root
);

function compileLib() {
  return merge(
    transpileIndex,
    transpileLib
  );
}

function watchLib() {
  gulp.watch(path.join(paths.src.root, 'index.js'), transpileIndex);
  gulp.watch(path.join(paths.src.lib, globs.js), transpileLib);
}

module.exports = {
  compileLib,
  watchLib
};