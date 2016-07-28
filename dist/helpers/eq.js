// # `eq` helper
//
// logical equals operator (===)
//
// ```
// {{#if (eq index 10) }}<p>Look at this 10 thing!</p>{{/if}}
// ```

export default eq = Handlebars => (a, b) => a === b;