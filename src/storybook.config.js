import { configure } from '@storybook/react';
import './public/index.css';

const req = require.context('./', true, /\.stories.js$/);

function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);