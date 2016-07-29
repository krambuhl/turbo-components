const Handlebars = require('handlebars/runtime');

const components = require('turbo-components');
const helpers = require('turbo-components/dist/helpers');
const templates = require('turbo-components/dist/templates');

Handlebars.registerHelper(helpers);
Handlebars.registerPartial(templates);

// console.log(Handlebars);

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