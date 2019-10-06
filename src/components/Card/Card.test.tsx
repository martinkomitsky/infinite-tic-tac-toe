import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import { shallow } from '../../../tests/setup/test-setup';
import { Card } from './Card';

describe('<Card />', () => {
	let wrapper: any;
	const text = 'test sest';

	beforeEach(() => {
		wrapper = shallow(<Card>{text}</Card>);
	});

	it('should match the snapshot', () => {
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});

	it('renders children', () => {
		expect(wrapper.text()).toEqual(text);
	});
});
