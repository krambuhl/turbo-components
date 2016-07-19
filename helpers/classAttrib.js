const joinClass = require('./joinClass');
const helper = Handlebars => () => {
  const classString = joinClass.apply(undefined, arguments);
  return new Handlebars.SafeString(`class="${classString}"`);
};

module.exports = {
  register: Handlebars => Handlebars.registerHelper('classAttrib', helper(Handlebars)),
  helper: helper
};
