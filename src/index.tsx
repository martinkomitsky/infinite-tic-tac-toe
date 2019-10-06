import * as React from 'react';
import { render } from 'react-dom';
import './assets/styles/common.css';
import App from './containers/App';
import { appendElementToBody, makeDiv } from './utils';

const root = makeDiv({ id: 'infinite-tic-tac-toe' });
appendElementToBody(root);

const Main = <App />;

render(Main, root);
