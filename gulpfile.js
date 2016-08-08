const del = require('del');
const gulp = require('gulp');

const { paths } = require('./build/config');

/// Clean
function clean() {
  return del(paths.dest.root);
}

/// Templates
const templates = require('./build/templates');

// helpers
const helpers = require('./build/helpers');

// scripts
const scripts = require('./build/scripts');

// central index
const lib = require('./build/lib');


gulp.task('build', gulp.series(
  clean,
  gulp.parallel(
    templates.compileTemplates,
    scripts.compileScripts,
    helpers.compileHelpers,
    lib.compileLib
  )
));

gulp.task('watch', gulp.parallel(
  templates.watchTemplates,
  scripts.watchScripts,
  helpers.watchHelpers,
  lib.watchLib
));