import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Input } from './Input';
import { props } from './Input.common';

const stories = storiesOf('Infinite Tic-Tac-Toe|Input', module).addParameters({
	readme: {
		sidebar: require('./README.md'),
	},
});

stories.addDecorator(withKnobs);

stories.add('initial', () => <Input onChange={action('changed')} />);

stories.add('initial with legend', () => (
	<Input legend={props.legend} onChange={action('changed')} />
));

stories.add('with predefined value', () => (
	<Input
		legend={props.legend}
		onChange={action('changed')}
		value={props.value}
	/>
));
