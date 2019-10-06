import { IAppState, TSetAppState } from '../../types';

export interface IAppProps {
	appState?: IAppState;
	setAppState?: TSetAppState;
}
