const gulp = require('gulp');

// Clean
const clean = require('./build/clean');

// Templates
const templates = require('./build/templates');

// Helpers
const helpers = require('./build/helpers');

// Scripts
const scripts = require('./build/scripts');

// Styles
const styles = require('./build/styles');

// Central index
const lib = require('./build/lib');


gulp.task('build', gulp.series(
  clean,
  gulp.parallel(
    templates.compileTemplates,
    scripts.compileScripts,
    styles.compileStyles,
    helpers.compileHelpers,
    lib.compileLib
  )
));

gulp.task('watch', gulp.parallel(
  templates.watchTemplates,
  scripts.watchScripts,
  styles.watchStyles,
  helpers.watchHelpers,
  lib.watchLib
));