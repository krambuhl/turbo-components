const breakpoint = {
  tiny: '24rem',
  small: '32rem',
  'medium-small': '40rem',
  'medium-large': '52rem',
  large: '60rem',
  huge: '72rem',
  giant: '96rem'
};

module.exports = name => breakpoint[name];