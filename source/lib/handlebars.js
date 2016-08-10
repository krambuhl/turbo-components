import Handlebars from 'handlebars/runtime';
import helpers from '../helpers';

Object.keys(helpers).forEach(name => {
  const helper = helpers[name];
  if (helper.register) {
    helper.register(Handlebars);
  } else {
    Handlebars.registerHelper(name, helper);
  }
});


export default Handlebars;