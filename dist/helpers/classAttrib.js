// # `classAttrib` helper
//
// creates a class attribute string
//
// sugar around joinClass to keep building
// component as painless as possible
//
// ```
// <div {{classAttrib "card card-light" addClass}}>Whoa Dude!</div>
// { addClass: 'card--big' }
// <div class="card card-light card--big">Whoa Dude!</div>
// ```

import joinSpace from './joinSpace';
export default classAttrib = Handlebars => (...classList) => {
  return `class="${ joinSpace(...classList) }"`;
}