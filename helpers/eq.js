// # `eq` helper
//
// logical equals operator (===)
//
// ```
// {{#if (eq index 10) }}<p>Look at this 10 thing!</p>{{/if}}
// ```

const helper = Handlebars => (a, b) => a === b;

module.exports = {
  register: Handlebars => Handlebars.registerHelper('eq', helper(Handlebars)),
  helper: helper
};
