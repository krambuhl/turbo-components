// # `join` helper
//
// joins an infinite number of arguments with a seperator
// 
//
// ```
// {{join ' ' 'card' 'card--big'}}
// card card--big
//
// {{join '/' 'atom' 'card' 'card__item'}}
// atom/card/card__item
// ```

module.exports = function(seperator) {
  return Array.prototype.slice.call(arguments, 1, -1)
    .filter(name => name)
    .join(seperator);
};