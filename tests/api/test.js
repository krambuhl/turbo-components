// their stuff
import fs from 'fs';

// import render tool
import { render } from 'turbo-components';

// import template to render 
import { 
  'organism/product-list' as ProductList,
  'organism/product-list--grid' as ProductListGrid 
} from 'turbo-components/templates';

// create a reference to a container
const container = document.getElementById('container');
const data = JSON.parse(fs.readFileSync(__dirname + '/data.json'));

// render the normal product list by default;
render(container, ProductList, data);

// render differnt component based on toggle control
document.getElementById('toggle')
  .addEventListener('click', ev => {
    if (ev.target.classList.has('js-toggle-grid')) {
      render(container, ProductListGrid, data);
    } else if (ev.target.classList.has('js-toggle-list')) {
      render(container, ProductList, data);
    }
  });