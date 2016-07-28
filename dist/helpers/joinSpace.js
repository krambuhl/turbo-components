// # `joinSpace` helper
//
// joins an infinite number of arguments with space seperation
//
// ```
// <div class="{{joinClass 'card card-light' addClass}}">Whoa Dude!</div>
// { addClass: 'card--big' }
// <div class="card card-light card--big">Whoa Dude!</div>
// ```

export default joinSpace = Handlebars => () => {
  const strings = Array.prototype.slice.call(arguments, 0, -1);
  return new Handlebars.SafeString(
    strings.filter(name => name).join(' ')
  );
}