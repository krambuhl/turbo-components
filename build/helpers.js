const gulp = require('gulp');
const path = require('path');
const through = require('through2');
const file = require('gulp-file');
const babel = require('gulp-babel');
const defineModule = require('gulp-define-module');

const {
  getFileName,
  getFileCategory,
  getFileNamespace
} = require('./file-utils');

const {
  addFileToArray,
  createIndex,
  createRequirement
} = require('./utils');

const {
  paths,
  globs
} = require('./config');

// Template Helpers
const createHelperRequirement = file => {
  const name = getFileName(file);
  return createRequirement(name, `helpers/${name}.js`) + '.default';
};

function compileHelpers(done) {
  let helpers = [];
  return gulp.src(path.join(paths.src.helpers, globs.js))
    .pipe(addFileToArray(helpers))
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest(paths.dest.helpers))
    .on('end', function() {
      file('helpers.js', createIndex(helpers, createHelperRequirement))
        .pipe(defineModule('node'))
        .pipe(gulp.dest(paths.dest.root))
        .on('end', function() {
          done();
        });
    });
}

function watchHelpers() {
  gulp.watch([
    path.join(paths.src.helpers, globs.js)
  ], compileHelpers);
}

module.exports = {
  compileHelpers,
  watchHelpers
};