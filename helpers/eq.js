const helper = Handlebars => (a, b) => a === b;

module.exports = {
  register: Handlebars => Handlebars.registerHelper('eq', helper(Handlebars)),
  helper: helper
};
