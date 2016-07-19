const helper = Handlebars => {
  const getTemplate = name => {
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

module.exports = {
  register: Handlebars => Handlebars.registerHelper('component', helper(Handlebars)),
  helper: helper
};
