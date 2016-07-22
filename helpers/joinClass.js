// # `joinClass` helper
//
// joins an infinite number of arguments with space seperation
//
// ```
// <div class="{{joinClass 'card card-light' addClass}}">Whoa Dude!</div>
// { addClass: 'card--big' }
// <div class="card card-light card--big">Whoa Dude!</div>
// ```
const helper = Handlebars => () => {
  const strings = Array.prototype.slice.call(arguments, 0, -1);
  return new Handlebars.SafeString(
    strings.filter(name => name).join(' ')
  );
};

module.exports = {
  register: Handlebars => Handlebars.registerHelper('joinClass', helper(Handlebars)),
  helper: helper
};
