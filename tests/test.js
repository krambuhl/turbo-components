const Handlebars = require('handlebars/runtime');
const helpers = require('turbo-components/dist/helpers');

Handlebars.registerHelper(require('turbo-components/dist/helpers'));
Handlebars.registerPartial(require('turbo-components/dist/templates'));

// console.log(Handlebars)

const templates = require('turbo-components/dist/templates');
const ProductList = Handlebars.template(templates['organism/product-list']);
const Product = Handlebars.template(templates['molecule/product']);

console.log(
  ProductList({
    attribs: {
      products: [{
        title: 'Hello 1',
        url: '#/1',
        feature: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, incidunt.'
      }, {
        title: 'Hello 2',
        url: '#/2',
        feature: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, incidunt.'
      }, {
        title: 'Hello 3',
        url: '#/3',
        feature: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, incidunt.'
      }]
    }
  })
);

console.log(
  Product({
    attribs: {
      addClass: 'ahhh',
      title: 'Hello 1',
      url: '#/1',
      feature: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, incidunt.'
    }
  })
)