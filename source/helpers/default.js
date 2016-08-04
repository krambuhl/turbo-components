// # `default` helper
//
// returns the first argument that is non falsy
//
// ```
// {{default undefinedVar "boogers"}}
// ```

const defaultFn = (...args) => {
  return args.find(function(arg) {
    return !!arg;
  });
}

export default defaultFn;