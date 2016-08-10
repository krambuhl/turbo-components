// # `default` helper
//
// returns the first argument that is non falsy
//
// ```
// {{default undefinedVar "boogers"}}
// ```

module.exports = (...args) => args.find(arg => !!arg);