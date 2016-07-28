const del = require('del');
const gulp = require('gulp');
const file = require('gulp-file');
const through = require('through2');
const path = require('path');

const handlebars = require('gulp-handlebars');
const defineModule = require('gulp-define-module');

const paths = {
  tests: 'tests',
  src: {
    root: 'source',
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


const createTemplateRequirement = file => {
  const ns = getFileNamespace(file);
  const cat = getFileCategory(file);
  const name = getFileName(file);
  return createRequirement(`${cat}/${name}`, `components/${cat}/${ns}/${name}.js`);
};

function compileTemplates(done) {
  let templates = [];
  return gulp.src(path.join(paths.src.components, globs.hbs))
    .pipe(through.obj(function(file, enc, next) {
      templates.push(file);
      next(null, file);
    }))
    .pipe(handlebars())
    .pipe(defineModule('node', {
      require: {
        Handlebars: 'handlebars/runtime'
      }
    }))
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


const createHelperRequirement = file => {
  const name = getFileName(file);
  return createRequirement(name, `helpers/${name}.js`);
};

function compileHelpers(done) {
  let helpers = [];
  return gulp.src(path.join(paths.src.helpers, globs.js))
    .pipe(through.obj(function(file, enc, next) {
      helpers.push(file);
      next(null, file);
    }))
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



const createScriptRequirement = file => {
  const ns = getFileNamespace(file);
  const name = getFileName(file);
  return createRequirement(`${ns}-${name}`, `components/${ns}/index.js`);
};

function compileScripts(done) {
  let scripts = [];
  return gulp.src(path.join(paths.src.components, globs.js))
    .pipe(through.obj(function(file, enc, next) {
      scripts.push(file);
      next(null, file);
    }))
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

function transpileIndex() {
  return gulp.src(path.join(paths.src.root, 'index.js'))
    .pipe(gulp.dest(path.join(paths.dest.root)))
}

gulp.task('build', gulp.series(
  clean,
  gulp.parallel(
    compileTemplates,
    compileScripts,
    compileHelpers,
    transpileIndex
  )
));
