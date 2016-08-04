// Atom
const Button = require('turbo-components/dist/components/atom/button/button');
const buttonRes = Button({
  attribs: {
    addClass: 'product--world-card',
    href: '#/1'
  },
  children: "Hello World"
});

// console.log(buttonRes);


// Deep Simple Molecule
const Deep = require('turbo-components/dist/components/molecule/deep/deep');
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

// console.log(deepRes);

// Real-life Module
const Product = require('turbo-components/dist/components/molecule/product/product');
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