import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers/index'
import thunk from 'redux-thunk';
import Chat from './components/Chat';
import LoggerMiddleware from './middleware/logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk, LoggerMiddleware))
);


ReactDOM.render(
    <Provider store={store}>
        <Chat />
    </Provider>,
    document.getElementById('app')
);
