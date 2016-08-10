// # `joinSpace` helper
//
// joins an infinite number of arguments with space seperation
//
// ```
// <div class="{{joinClass 'card card-lite' addClass}}">Whoa Dude!</div>
// { addClass: 'card--big' }
// <div class="card card-lite card--big">Whoa Dude!</div>
// ```

import join from './join';

module.exports = (...args) => join(' ', ...args);