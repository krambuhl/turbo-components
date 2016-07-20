// # `classAttrib` helper
//
// creates a class attribute string
//
// sugar around joinClass to keep building
// component as painless as possible
//
// ```
// <div {{classAttrib "card card-light" addClass}}>Whoa Dude!</div>
// { addClass: 'card--big' }
// <div class="card card-light card--big">Whoa Dude!</div>
// ```

const joinClass = require('./joinClass');
const helper = Handlebars => () => `class="${ joinClass.apply(undefined, arguments) }"`;

module.exports = {
  register: Handlebars => Handlebars.registerHelper('classAttrib', helper(Handlebars)),
  helper: helper
};
