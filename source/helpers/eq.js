// # `eq` helper
//
// logical equals operator (===)
//
// ```
// {{#if (eq index 10) }}<p>Look at this 10 thing!</p>{{/if}}
// ```

const eq = (a, b) => a === b;

export default eq;