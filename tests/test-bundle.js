const Handlebars = require('handlebars/runtime');

const components = require('turbo-components');
const helpers = require('turbo-components/dist/helpers');
const templates = require('turbo-components/dist/templates');

Handlebars.registerHelper(helpers);
Handlebars.registerPartial(templates);

// Atom
const Button = templates['atom/button'];
const buttonRes = Button({
  attribs: {
    addClass: 'product--world-card',
    href: '#/1'
  },
  children: "Hello World"
});

console.log(buttonRes);


// Molecule
const Deep = templates['molecule/deep'];
const deepRes = Deep({
  attribs: {
    addClass: 'product--world-card',
    title: 'Hello World',
    url: '#/1',
    features: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, incidunt.'
    ]
  }
});

console.log(deepRes);

const Product = templates['molecule/product'];
const productRes = Product({
  attribs: {
    addClass: 'product--world-card',
    title: 'Hello World',
    url: '#/1',
    features: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, incidunt.'
    ]
  }
});

console.log(productRes);