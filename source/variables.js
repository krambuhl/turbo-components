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
  tiny: '480px',
  small: '600px',
  medium: '768px',
  large: '1024px',
  huge: '1280px',
  giant: '1440px'
};

const width = name => width[name];

module.exports = {
  color: name => colors[name],
  width: name => widths[name]
};