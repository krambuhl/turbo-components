// # `component` helper
//
// helper for using partials that follow component-fn structure.
//
// effectively merges the {{>}}, {{#}}, {{#>}} helpers
// with a slightly different data structure
//
// ```
// {{component attr=value}}
// {{component data attr=value}}
// {{#component data attr=value}}Why Hello{{/component}}
// ``

// takes a template name
// and returns a template function
const getTemplateFn = (hbs, name) => {
  const template = hbs.partials[name];

  // throw an error if partial is missing
  if (template === null) {
    throw new Error('Missing partial: \'' + name + '\'');
  }

  return template;
};

module.exports.register = hbs => {
  function component(name, locals, opts) {
    if (arguments.length === 2) {
      opts = locals;
      locals = undefined;
    }

    // get the template
    const template = getTemplateFn(hbs, name);

    // get template result
    let res = '';
    if (typeof template === 'function') {
      let data = hbs.Utils.extend({}, opts.hash);
      if (opts.fn) {
        data.children = opts.fn(this);
      }

      res = template(data);
    } else {
      console.log('Missing components: ' + name);
    }

    // console.log(res)

    return new hbs.SafeString(res);
  }
  
  hbs.registerHelper('component', component);
  hbs.registerHelper('c', component);
};