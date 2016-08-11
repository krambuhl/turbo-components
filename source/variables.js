const colors = {
  'teal': '#4edb75',
  'purple-dark': '#280c22',
  'purple-mid': '#dad5d7',
  'purple-light': '#8c4482',
  'light': '#fff',
  'dark': '#222'
};

const color = name => colors[name];


const widths = {
  tiny: '32em',
  small: '40em',
  medium: '48em',
  large: '54em',
  huge: '60em',
  giant: '72em'
};

const width = name => width[name];

module.exports = {
  color: name => colors[name],
  width: name => widths[name]
};