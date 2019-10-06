import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './assets/styles/common.css';
import App from './containers/App';
import store from './store';
import { appendElementToBody, makeDiv } from './utils';

const root = makeDiv({ id: 'infinite-tic-tac-toe' });
appendElementToBody(root);

const Main = (
	<Provider store={store}>
		<App />
	</Provider>
);

render(Main, root);
