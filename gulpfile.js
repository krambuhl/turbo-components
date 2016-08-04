const del = require('del');
const gulp = require('gulp');
const file = require('gulp-file');
const through = require('through2');
const path = require('path');
const _ = require('lodash');

const Handlebars = require('handlebars');
const defineModule = require('gulp-define-module');
const babel = require('gulp-babel');
const wrap = require('gulp-wrap');
const prettify = require('gulp-jsbeautifier');

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
    lib: 'dist/lib',
    helpers: 'dist/helpers',
    components: 'dist/components'
  }
};

const globs = {
  hbs: '**/*.hbs',
  js: '**/*.js'
};

// general purpose functionators

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

// general mini-gulp plugs

const addFileToArray = arr =>
  through.obj(function(file, enc, done) {
    arr.push(file);
    done(null, file);
  });


//
// Tasks
//

/// Clean

function clean() {
  return del(paths.dest.root);
}


/// Templates

const createTemplateRequirement = file => {
  const ns = getFileNamespace(file);
  const cat = getFileCategory(file);
  const name = getFileName(file);
  return createRequirement(`${cat}/${name}`, `components/${cat}/${ns}/${name}.js`);
};

const precompileTemplates = opts => 
  through.obj(function(file, enc, done) {
    const res = Handlebars.precompile(file.contents.toString(), {
      strict: false,
      data: false
    });

    file.contents = new Buffer(res);
    done(null, file);
  });

const matchRequirements = string => {
  // wow this actually works...
  // for the moment
  const matches = string.match(/,\"(.+?)\",{\"name\":\"component\"/gi);
  
  if (matches) {
    return _.uniq(matches.map(name => {
      return name.split('"')[1];
    }));
  }

  return [];
}

const getTemplateName = string => {
  var cat = string.substr(0, string.indexOf('/'));
  var name = string.substr(string.indexOf('/') + 1);
  var ns = name;

  if (name.indexOf('__') !== -1) {
    ns = name.substr(0, name.indexOf('__'));
  }

  if (ns.indexOf('--') !== -1) {
    ns = ns.substr(0, ns.indexOf('--'));
  }

  return { cat, ns, name };
};

const getTemplateRequirements = string => {
  return matchRequirements(string)
    .map(req => {
      var { cat, ns, name } = getTemplateName(req);
      return `Handlebars.registerPartial("${cat}/${name}", require("../../${cat}/${ns}/${name}.js"));`
    })
    .join('');
};

const addTemplateRequirements = opts => 
  through.obj(function(file, enc, done) {
    var reqs = getTemplateRequirements(file.contents.toString());
    file.contents = new Buffer(reqs + file.contents.toString()); 
    done(null, file);
  });

function templates(done) {
  let templates = [];
  let requirements =  {};

  return gulp.src(path.join(paths.src.components, globs.hbs))
    .pipe(precompileTemplates())
    .pipe(addFileToArray(templates))
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(defineModule('node'))
    .pipe(addTemplateRequirements())
    .pipe(wrap('var Handlebars = require("../../../lib/handlebars");<%= contents %>'))
    .pipe(prettify())
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


// Template Helpers
const createHelperRequirement = file => {
  const name = getFileName(file);
  return createRequirement(name, `helpers/${name}.js`) + '.default';
};

function helpers(done) {
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
    .pipe(addFileToArray(scripts))
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
    .pipe(gulp.dest(path.join(paths.dest.lib)));
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