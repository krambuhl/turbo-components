const helper = Handlebars => () => {
  const strings = Array.prototype.slice.call(arguments, 0, -1);
  return new Handlebars.SafeString(strings.filter(name => name).join(' '));
};

module.exports = {
  register: Handlebars => Handlebars.registerHelper('joinClass', helper(Handlebars)),
  helper: helper
};
