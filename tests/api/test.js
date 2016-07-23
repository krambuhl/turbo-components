
// use it

import components, { render } from 'turbo-components';
import fs from 'fs';
import throughMap from 'through2-map';

const {
	'atom/card' as Card,
	'atom/card-grid' as CardGrid
} = components.templates;


render(CardGrid, { addClass: 'l-cards' }, 
	fs.renderFile('/card-data.json')
		.pipe(JSON.parse)
		.pipe(throughMap((file, next) => {
			next(null, file)
		}))
)
render(Card, { }, [
	fs.readFile('/hazzah.txt');
])




