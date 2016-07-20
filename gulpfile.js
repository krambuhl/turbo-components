const gulp = require('gulp');

function compileHandlebars() {
  return gulp.src('**/*.{hbs,handlebars}')
    .pipe(through.obj((file, enc, done) => {

    }))
    .pipe(gulp.dest('./out'))
}

gulp.task('templates', gulp.series(compileHandlebars));
