import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Cell } from './Cell';

const stories = storiesOf('Infinite Tic-Tac-Toe|Cell', module).addParameters({
	readme: {
		sidebar: require('./README.md'),
	},
});

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
			hint={props.hint}
			onClick={action('clicked')}
		/>
	</React.Fragment>
));

stories.add('with "X"', () => (
	<React.Fragment>
		<Cell
			index={props.index}
			value={props.crossValue}
			onClick={action('clicked')}
		/>
	</React.Fragment>
));

stories.add('with "O"', () => (
	<React.Fragment>
		<Cell
			index={props.index}
			value={props.circleValue}
			onClick={action('clicked')}
		/>
	</React.Fragment>
));
