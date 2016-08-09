const paths = {
  tests: 'tests',
  src: {
    root: 'source',
    helpers: 'source/helpers',
    components: 'source/components',
    pages: 'source/pages',
    lib: 'source/lib'
  },
  dest: {
    root: 'dist',
    lib: 'dist/lib',
    helpers: 'dist/helpers'
  }
};

const globs = {
  hbs: '**/*.hbs',
  js: '**/*.js',
  css: '**/*.{css,scss}'
};

module.exports = {
  paths,
  globs
};