const Handlebars = require('handlebars');

Handlebars.registerHelper('joinClass', function() {
  const strings = Array.prototype.slice.call(arguments);
  const options = strings.pop();
  return new Handlebars.SafeString(strings.join(' '));
});
