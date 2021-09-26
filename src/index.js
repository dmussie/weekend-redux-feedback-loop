import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// const responseToAdd = (state = 0, action) => {
//     if(action.type === 'SET_NEW_RESPONSE') {
//         return action.payload;
//     }
//     return state;
// }

const responseList = (state = {}, action) => {
    if (action.type === 'SET_RESPONSE_LIST') {
        return action.payload;
    }
    if (action.type === 'CLEAR_ALL_RESPONSES') {
        return {};
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        responseList,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
