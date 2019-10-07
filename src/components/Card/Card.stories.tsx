import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Card } from './Card';

const sampleText = `
	Kanye Omari West (/ˈkɑːnjeɪ/; born June 8, 1977) is an American
	rapper, singer, songwriter, record producer, entrepreneur, and
	fashion designer. His music has spanned a broad range of styles,
	incorporating an eclectic range of influences including soul,
	baroque pop, electro, indie rock, synth-pop, industrial, and
	gospel.
`;

const stories = storiesOf('Infinite Tic-Tac-Toe|Card', module).addParameters({
	readme: {
		sidebar: require('./README.md'),
	},
});

stories.addDecorator(withKnobs);

stories.add('with a child', () => (
	<React.Fragment>
		<Card>
			<React.Fragment>{text('Children text', sampleText)}</React.Fragment>
		</Card>
	</React.Fragment>
));
