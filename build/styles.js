const path = require('path');
const gulp = require('gulp');
const merge = require('merge-stream');
const file = require('gulp-file');

const {
  getFileName,
  getFileCategory,
  getFileNamespace
} = require('./file-utils');

const { addFileToArray } = require('./utils');

const {
  paths,
  globs
} = require('./config');

const createStyleImports = file => {
  const ns = getFileNamespace(file);
  const cat = getFileCategory(file);
  const name = getFileName(file);
  return `@import "${cat}/${ns}/${name}.css";`;
};

function compileStyles(done) {
  var components = [];
  return gulp.src(path.join(paths.src.components, globs.css))
    .pipe(addFileToArray(components))
    .pipe(gulp.dest(paths.dest.root))
    .on('end', function() {
      let imports = components.map(createStyleImports).join('\n');
  
      return file('index.css', imports)
        .pipe(gulp.dest(paths.dest.root))
        .on('end', function() {
          done();
        });
    });
}

function watchStyles() {
  gulp.watch(path.join(paths.src.root, globs.css), compileStyles);
}

module.exports = {
  compileStyles,
  watchStyles
};