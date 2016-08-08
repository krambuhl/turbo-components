// # `eq` helper
//
// logical equals operator (===)
//
// ```
// {{#if (eq index 10) }}<p>Look at this 10 thing!</p>{{/if}}
// ```

export default function(a, b, strict = true) {
  if (strict) {
    return a === b;
  }
  
  return a == b;
}