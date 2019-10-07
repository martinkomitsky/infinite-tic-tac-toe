import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import { shallow } from '../../../tests/setup/test-setup';
import { Cell } from './Cell';
import { props } from './Cell.common';

describe('<Cell />', () => {
	let wrapper: any;

	beforeEach(() => {
		wrapper = shallow(<Cell index={props.index} />);
	});

	it('should match the snapshot', () => {
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
});
