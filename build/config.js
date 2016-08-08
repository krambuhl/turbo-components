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

module.exports = {
  paths,
  globs
};