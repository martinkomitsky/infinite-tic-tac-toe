import { combineReducers } from 'redux';
import appState from './appState';

export * from './appState';
export default combineReducers({ appState });
