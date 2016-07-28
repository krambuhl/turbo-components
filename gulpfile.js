const del = require('del');
const gulp = require('gulp');
const file = require('gulp-file');
const through = require('through2');
const path = require('path');

const Handlebars = require('handlebars');
const defineModule = require('gulp-define-module');
const babel = require('gulp-babel');

const paths = {
  tests: 'tests',
  src: {
    root: 'source',
    lib: 'source/lib',
    helpers: 'source/helpers',
    components: 'source/components'
  },
  dest: {
    root: 'dist',
    helpers: 'dist/helpers',
    components: 'dist/components'
  }
};

const globs = {
  hbs: '**/*.hbs',
  js: '**/*.js'
};

const getFileName = file => {
  return file.basename.substr(0, file.basename.length - file.extname.length); 
};

const getFileCategory = file => {
  const base = file.path.substr(file.base.length);
  const name = base.substr(1, base.lastIndexOf('/'));
  return name.substr(0, name.indexOf('/'));
};

const getFileNamespace = file => {
  const base = file.path.substr(file.base.length);
  const name = base.substr(1, base.lastIndexOf('/'));
  return name.substr(name.indexOf('/')).split('/').join('');
};

const createIndex = (templates, requirementCreator) => {
  const reqs = templates.map(requirementCreator);

  return `{ \n  ${reqs.join(',\n  ')} \n}`;
};

const createRequirement = (name, path) => `"${name}": require("./${path}")`;


function clean() {
  return del(paths.dest.root);
}


/// tempaltes

const createTemplateRequirement = file => {
  const ns = getFileNamespace(file);
  const cat = getFileCategory(file);
  const name = getFileName(file);
  return createRequirement(`${cat}/${name}`, `components/${cat}/${ns}/${name}.js`);
};

function templates(done) {
  let templates = [];
  return gulp.src(path.join(paths.src.components, globs.hbs))
    .pipe(through.obj(function(file, enc, next) {
      file.contents = new Buffer(Handlebars.precompile(file.contents.toString()));

      templates.push(file);
      next(null, file);
    }))
    .pipe(defineModule('node'))
    .pipe(gulp.dest(paths.dest.components))
    .on('end', function() {
      file('templates.js', createIndex(templates, createTemplateRequirement))
        .pipe(defineModule('node'))
        .pipe(gulp.dest(paths.dest.root))
        .on('end', function() {
          done();
        });
    });
}

function templatesWatch() {
  gulp.watch([
    path.join(paths.src.components, globs.hbs)
  ], templates);
}


// template helpers

const createHelperRequirement = file => {
  const name = getFileName(file);
  return createRequirement(name, `helpers/${name}.js`) + '.default';
};

function helpers(done) {
  let helpers = [];
  return gulp.src(path.join(paths.src.helpers, globs.js))
    .pipe(through.obj(function(file, enc, next) {
      helpers.push(file);
      next(null, file);
    }))
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

function helpersWatch() {
  gulp.watch([
    path.join(paths.src.helpers, globs.js)
  ], helpers);
}


// scripts

const createScriptRequirement = file => {
  const cat = getFileCategory(file);
  const ns = getFileNamespace(file);
  const name = getFileName(file);
  return createRequirement(`${ns}-${name}`, `components/${cat}/${ns}/index.js`);
};

function scripts(done) {
  let scripts = [];
  return gulp.src(path.join(paths.src.components, globs.js))
    .pipe(through.obj(function(file, enc, next) {
      scripts.push(file);
      next(null, file);
    }))
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest(paths.dest.components))
    .on('end', function() {
      file('scripts.js', createIndex(scripts, createScriptRequirement))
        .pipe(defineModule('node'))
        .pipe(gulp.dest(paths.dest.root))
        .on('end', function() {
          done();
        });
    });
}

function scriptsWatch() {
  gulp.watch([
    path.join(paths.src.components, globs.js)
  ], scripts);
}


// central index

function index() {
  return gulp.src(path.join(paths.src.root, 'index.js'))
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest(path.join(paths.dest.root)));
}

function lib() {
  return gulp.src(path.join(paths.src.lib, globs.js))
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest(path.join(paths.dest.root)));
}

gulp.task('build', gulp.series(
  clean,
  templates,
  scripts,
  helpers,
  index,
  lib
));

gulp.task('watch', gulp.parallel(
  templatesWatch,
  helpersWatch,
  scriptsWatch
));