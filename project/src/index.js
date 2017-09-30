import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import reducers from './reducers/index'
import thunk from 'redux-thunk';
import Chat from './components/Chat';
import Settings from './components/Settings';
import LoggerMiddleware from './middleware/logger'
import {persistStore, autoRehydrate} from 'redux-persist'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk, LoggerMiddleware), autoRehydrate())
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Chat}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('app')
);

persistStore(store, { whitelist: 'settings' })

