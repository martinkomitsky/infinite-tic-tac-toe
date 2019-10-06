import { SET_APP_STATE } from './actionTypes';

export interface IAppState {
	columns: number;
	initialX: number;
	initialY: number;
	isFinished: boolean;
	isFirstTurn: boolean;
	numberInARow: number;
	rows: number;
	selected: {
		[key: string]: boolean;
	};
	turn: boolean;
}

export interface IAppStore {
	appState: IAppState;
}

export interface ISetAppStateAction {
	type: typeof SET_APP_STATE;
	payload: {
		content: IAppState;
	};
}
