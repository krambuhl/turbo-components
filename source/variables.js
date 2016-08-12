const colors = {
  'teal': '#4edb75',
  'teal-light': '#8eff94',
  'purple-dark': '#280c22',
  'purple-mid': '#8c4482',
  'purple-mid--alt': '#703668',
  'purple-light': '#dad5d7',
  'light': '#fff',
  'offlight': '#eee',
  'medium': '#999',
  'offdark': '#666',
  'dark': '#222'
};

const color = name => colors[name];


const breakpoints = {
  tiny: '24rem',
  small: '32rem',
  'medium-small': '40rem',
  'medium-large': '52rem',
  large: '60rem',
  huge: '72rem',
  giant: '96rem'
};

const breakpoint = name => breakpoints[name];


module.exports = {
  color,
  breakpoint
};