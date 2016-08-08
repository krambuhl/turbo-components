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

import Handlebars from 'handlebars/runtime';
import joinSpace from './joinSpace';

export default function(...classList) {
  return `class="${ joinSpace(...classList) }"`;
}