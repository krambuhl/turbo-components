// Atom
const Button = require('turbo-components/dist/components/atom/button/button');
const buttonRes = Button({
  attribs: {
    addClass: 'product--world-card',
    href: '#/1'
  },
  children: "Hello World"
});

console.log(buttonRes);
