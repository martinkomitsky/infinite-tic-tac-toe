import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import { shallow } from '../../../tests/setup/test-setup';
import { Input } from './Input';
import { props } from './Input.common';

describe('<Input />', () => {
	let wrapper: any;

	beforeEach(() => {
		wrapper = shallow(<Input value={props.value} legend={props.legend} />);
	});

	it('should match the snapshot', () => {
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
});
