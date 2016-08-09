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
// ```

import Handlebars from 'handlebars/runtime';

// takes a template name
// and returns a template function
const getTemplateFn = name => {
  const template = Handlebars.partials[name];

  // throw an error if partial is missing
  if (template === null) {
    throw new Error('Missing partial: \'' + name + '\'');
  }

  return template;
};

export default function(name, locals, opts) {
  if (arguments.length === 2) {
    opts = locals;
    locals = { };
  }

  // get the template
  const template = getTemplateFn(name);

  // console.log(name, template)
  
  // // define data
  // const cdata = Handlebars.Utils.extend({ }, this, locals, { attribs: opts.hash });

  // // 
  // const context = Handlebars.Utils.extend({ }, cdata, {
  //   children: opts.fn(cdata)
  // });

  // get template result
  const res = template({ });

  return new Handlebars.SafeString(res);
};