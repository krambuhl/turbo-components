const Handlebars = require('handlebars');

Handlebars.registerHelper('component', function(name, locals, opts) {
  if (arguments.length === 2) {
    opts = locals;
    locals = {};
  }


  let data = Handlebars.createFrame(opts.data);
  let context = Handlebars.Utils.extend({}, this, locals, {
    attribs: opts.hash,
    children: opts.fn(this)
  });

  let template = Handlebars.partials[name];

  if (template === null) {
    throw new Error('Missing partial: \'' + name + '\'');
  }

  if (typeof template !== 'function') {
    template = Handlebars.compile(template);
  }

  return template(context, { data: data });
});
