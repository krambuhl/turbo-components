const Handlebars = require('handlebars/runtime');
const helpers = require('turbo-components/dist/helpers');

Handlebars.registerHelper(require('turbo-components/dist/helpers'));
Handlebars.registerPartial(require('turbo-components/dist/templates'));

const templates = require('turbo-components/dist/templates');

// current
const Product = templates['molecule/product'];
 
// ideal (through aliasify?)
// const SearchTemplate = require('template/molecule/search');
// const Search = require('script/molecule/search');
// const SearchDeep = require('script/molecule/search/lib/athing');

console.log(
  Product({
    attribs: {
      addClass: 'product--world-card',
      title: 'Hello World',
      url: '#/1',
      feature: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, incidunt.'
    }
  })
)