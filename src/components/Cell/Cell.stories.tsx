import { action } from '@storybook/addon-actions';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Cell } from './Cell';

const stories = storiesOf('Infinite Tic-Tac-Toe|Cell', module).addParameters({
	readme: {
		sidebar: require('./README.md'),
	},
});

stories.addDecorator(withKnobs);

const props: {
	circleValue: boolean;
	crossValue: boolean;
	hint: boolean;
	index: [number, number];
} = {
	circleValue: false,
	crossValue: true,
	hint: true,
	index: [0, 0],
};

stories.add('initial', () => (
	<React.Fragment>
		<Cell index={props.index} onClick={action('clicked')} />
	</React.Fragment>
));

stories.add('initial with hint', () => (
	<React.Fragment>
		<Cell
			index={props.index}
			hint={boolean('Show hint', props.hint)}
			onClick={action('clicked')}
		/>
	</React.Fragment>
));

stories.add('with "X"', () => (
	<React.Fragment>
		<Cell
			index={props.index}
			value={boolean('Render "X"', props.crossValue)}
			onClick={action('clicked')}
		/>
	</React.Fragment>
));

stories.add('with "O"', () => (
	<React.Fragment>
		<Cell
			index={props.index}
			value={boolean('Render "X"', props.circleValue)}
			onClick={action('clicked')}
		/>
	</React.Fragment>
));
