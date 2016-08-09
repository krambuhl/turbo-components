const gulp = require('gulp');
const path = require('path');
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

const createScriptRequirement = file => {
  const cat = getFileCategory(file);
  const ns = getFileNamespace(file);
  const name = getFileName(file);
  return createRequirement(`${ns}-${name}`, `${cat}/${ns}/index.js`);
};

function compileScripts(done) {
  let scripts = [];
  return gulp.src(path.join(paths.src.components, globs.js))
    .pipe(addFileToArray(scripts))
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest(paths.dest.root))
    .on('end', function() {
      file('scripts.js', createIndex(scripts, createScriptRequirement))
        .pipe(defineModule('node'))
        .pipe(gulp.dest(paths.dest.root))
        .on('end', function() {
          done();
        });
    });
}

function watchScripts() {
  gulp.watch(path.join(paths.src.components, globs.js), compileScripts);
}

module.exports = {
  compileScripts,
  watchScripts
};