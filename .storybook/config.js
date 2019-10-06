import { configure, addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';
import { addReadme } from 'storybook-readme';

const req = require.context('../src/components/', true, /\.stories\.tsx$/);

function loadStories() {
	req.keys().forEach(filename => req(filename));
}

addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(addReadme);
addParameters({ viewport: { viewports: INITIAL_VIEWPORTS } });

configure(loadStories, module);
