import { createStore } from 'redux';
import rootReducer from './reducers';

export * from './actions';
export * from './reducers';
export * from './store.types';
export default createStore(rootReducer);
