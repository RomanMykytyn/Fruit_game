import createGameData from './utils/createGameData';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import App from './components/App';

const initialData = createGameData();
const store = configureStore(initialData);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
