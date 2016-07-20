const del = require('del');
const gulp = require('gulp');
const through = require('through2');

const handlebars = require('gulp-handlebars');
const defineModule = require('gulp-define-module');

const getTemplateName = file => {
  const path = file.path.substr(file.base.length);
  return path.substr(0, path.lastIndexOf('/'));
};

const registerHandlebarsPartial = Handlebars => {
  return through.obj((file, enc, next) => {
    const name = getTemplateName(file);
    Handlebars.registerPartial(name, file.contents.toString());
    next(null, file);
  });
};

const precompileHandlebars = Handlebars => {
  return through.obj((file, enc, next) => {
    const pre = Handlebars.precompile(file.contents.toString());
    file.contents = new Buffer(`module.exports=${pre}`);
    file.extname = '.js';
    next(null, file);
  });
};

function templates(done) {
  const Handlebars = require('handlebars');

  Handlebars.registerHelper({
    component: require('./source/helpers/component'),
    joinClass: require('./source/helpers/joinClass'),
    classAttrib: require('./source/helpers/classAttrib'),
    eq: require('./source/helpers/eq')
  });

  return gulp.src('source/**/*.{hbs,handlebars}')
    .pipe(registerHandlebarsPartial(Handlebars))
    .on('end', function() {
      gulp.src('source/**/*.{hbs,handlebars}')
        .pipe(handlebars())
        .pipe(through.obj(function(file, enc, next) {
          console.log(JSON.stringify(file));
          next(null, file);
        }))
        .pipe(defineModule('node'))
        .pipe(gulp.dest('dist'))
        .on('end', function() {
          done();
        });
    });
}

function clean() {
  return del('dist');
}

gulp.task('build', gulp.series(clean, templates));
