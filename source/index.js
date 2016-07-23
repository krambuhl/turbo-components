import Reflecto from 'reflecto';

import reflectoHandlebars from 'reflecto-handlebars';
import Handlebars from 'Handlebars';
import hbsHelpers from './helpers';

import templates from './templates'; // generated from gulp `template-index` task
import styles from './styles'; // generated from gulp `style-index` task
import scripts from './scripts'; // generated from gulp `script-index` task

const components = new Reflecto();

components
  .use(reflectoHandlebars({
    helpers: hbsHelpers,
    partials: templates
  }))
  .use(reflectoPostCSS());

components
  .registerTemplate(templates)
  .registerStyle(styles)
  .registerScript(scripts);

export default components;