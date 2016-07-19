const joinClass = require('./joinClass');
const helper = Handlebars => (...strings) => {
  return `class="${ joinClass(...strings) }"`;
};

module.exports = {
  register: Handlebars => Handlebars.registerHelper('classAttrib', helper(Handlebars)),
  helper: helper
};
