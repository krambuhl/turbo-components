import Reflecto from 'reflecto';

import reflectoHandlebars from 'reflecto-handlebars';
import Handlebars from 'Handlebars';
import hbsHelpers from './helpers';

import templates from './templates'; // generated from gulp `template-index` task
import scripts from './scripts'; // generated from gulp `script-index` task
import styles from './styles'; // generated from gulp `style-index` task

const components = new Reflecto();

components.renderTemplate = reflectoHandlebars({
  ext: ['.hbs', '.handlebars'],
  instance: Handlebars,
  helpers: hbsHelpers,
  partials: templates
});

comoponent.renderStyle = reflectoPostCSS({
  ext: ['.css', '.scss'],
  plugins: [
    autoprefixer(),
    reflect()
  ]
});

components
  .registerTemplate(templates)
  .registerStyle(styles)
  .registerScript(scripts);

export default components;
export {
  templates,
  scripts,
  styles
};