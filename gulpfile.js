const del = require('del');
const gulp = require('gulp');
const file = require('gulp-file');
const through = require('through2');
const path = require('path');

const handlebars = require('gulp-handlebars');
const defineModule = require('gulp-define-module');

const paths = {
  src: 'source',
  dest: 'dist'
};

const globs = {
  hbs: '**/*.hbs'
};

const getTemplateName = file => {
  const base = file.path.substr(file.base.length);
  return base.substr(0, base.lastIndexOf('/'));
};

const createTemplateRequirements = templates => {
  const reqs = templates.map(file => {
    const name = getTemplateName(file);
    return `"${name}": require("./${name}")`;
  }, {});

  return `{ ${reqs.join(', ')} }`;
};


function clean() {
  return del(paths.dest);
}

function compileTemplates() {
  return gulp.src(path.join(paths.src, globs.hbs))
    .pipe(handlebars())
    .pipe(defineModule('node'))
    .pipe(gulp.dest(paths.dest));
}

function createTemplateIndex(done) {
  let templates = [];
  return gulp.src(path.join(paths.src, globs.hbs))
    .pipe(through.obj(function(file, enc, next) {
      templates.push(file);
      next();
    }))
    .on('end', function() {
      file('templates.js', createTemplateRequirements(templates))
        .pipe(defineModule('node'))
        .pipe(gulp.dest(paths.dest))
        .on('end', function() {
          done();
        });
    });
}

gulp.task('build', gulp.series(
  clean,
  compileTemplates,
  createTemplateIndex
));
