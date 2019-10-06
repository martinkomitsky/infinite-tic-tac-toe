import { SET_APP_STATE } from '../actionTypes';
import { IAppState, ISetAppStateAction } from '../store.types';

export const initialState = {
	columns: 11,
	initialX: -5,
	initialY: -5,
	isFinished: false,
	isFirstTurn: true,
	numberInARow: C || 5,
	rows: 11,
	selected: {},
	turn: true,
};

export default function(
	state: IAppState = initialState,
	action: ISetAppStateAction
) {
	switch (action.type) {
		case SET_APP_STATE: {
			const { content } = action.payload;
			return {
				...state,
				...content,
			};
		}

		default:
			return state;
	}
}
