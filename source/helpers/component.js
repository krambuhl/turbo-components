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

export default component = Handlebars => {
  const getTemplateFn = name => {
    const template = Handlebars.partials[name];

    if (template === null) {
      throw new Error('Missing partial: \'' + name + '\'');
    }

    if (typeof template !== 'function') {
      return Handlebars.compile(template);
    }

    return template;
  };

  return (name, locals, opts) => {
    if (arguments.length === 2) {
      opts = locals;
      locals = {};
    }

    const template = getTemplateFn(name);
    const data = Handlebars.createFrame(opts.data);
    const cdata = Handlebars.Utils.extend({ }, this, locals, { attribs: opts.hash });
    const context = Handlebars.Utils.extend({ }, cdata, {
      children: opts.fn(cdata, { data: data })
    });

    return template(context, { data: data });
  };
};