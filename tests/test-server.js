const components = require('turbo-components');

components.render('molecule/product', {
  attribs: {
    addClass: 'product--world-card',
    title: 'Hello World',
    url: '#/1',
    feature: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, incidunt.'
  }
});

components.renderTemplate(`
  {{#component "atom/html" page-name="Homepage"}}
    {{component "organism/page-mast"}}
    {{component "template/search" results=testResults}}
    {{component "organism/page-footer"}}
  {{/component}}
`, {
  pageTitle: 'Hello Bogus'
  results: [
    { title: 'Bogus entries', contents: '', url: '/bogus' },
    { title: 'Bogus entries', contents: '', url: '/bogus' },
    { title: 'Bogus entries', contents: '', url: '/bogus' },
    { title: 'Bogus entries', contents: '', url: '/bogus' }
  ]
})