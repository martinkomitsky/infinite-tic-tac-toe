import { shallowToJson } from 'enzyme-to-json';
import React from 'react';
import { Provider } from 'react-redux';
import App from '../../src/containers/App';
import store from '../../src/store';
import { shallow } from '../setup/test-setup';

describe('<App />', () => {
	let wrapper: any;

	beforeEach(() => {
		wrapper = shallow(
			<Provider store={store}>
				<App />
			</Provider>
		);
	});

	it('should match the snapshot', () => {
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
});
