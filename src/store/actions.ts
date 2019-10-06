import { SET_APP_STATE } from './actionTypes';
import { IAppState } from './store.types';

/*
 * Не уверен, что правильно понял условие про ровно 1 Action,
 * но сделал по заданию - просто поместил состояние приложения
 * в Store. Чтобы сделать reset пришлось экспортировать initialState
 * и в App.tsx его скармливать в сам Action
 */
export const setAppState = (content: Partial<IAppState>) => ({
	payload: {
		content,
	},
	type: SET_APP_STATE,
});

export type TSetAppState = typeof setAppState;
