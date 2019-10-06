import { ISetAppStateAction } from '../../src/store/';
import appStateReducer from '../../src/store/reducers/appState';
import { sampleAppState } from '../fixtures/appState.fixture';

describe('app state reducer', () => {
	it('app state reducer returns expected state', () => {
		const action: ISetAppStateAction = {
			payload: { content: sampleAppState },
			type: 'SET_APP_STATE',
		};

		const updatedState = appStateReducer(undefined, action);

		expect(updatedState.columns).toEqual(5);
		expect(updatedState.isFinished).toBeFalsy();
		expect(updatedState).toEqual(sampleAppState);
	});
});
