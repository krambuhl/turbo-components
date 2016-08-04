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

const getTemplateFn = name => {
  const template = Handlebars.partials[name];

  if (template === null) {
    throw new Error('Missing partial: \'' + name + '\'');
  }

  if (typeof template !== 'function') {
    return Handlebars.template(template);
  }

  return template;
};

export default function(name, locals, opts) {
  if (arguments.length === 2) {
    opts = locals;
    locals = { };
  }

  const template = getTemplateFn(name); 
  
  const cdata = Handlebars.Utils.extend({ }, this, locals, { attribs: opts.hash });
  const context = Handlebars.Utils.extend({ }, this, cdata, {
    children: opts.fn(cdata)
  });

  const res = template(context);

  return new Handlebars.SafeString(res);
};