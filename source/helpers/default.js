// # `default` helper
//
// returns the first argument that is non falsy
//
// ```
// {{default undefinedVar "boogers"}}
// ```

export default function(...args) {
  return args.find(arg => !!arg);
}