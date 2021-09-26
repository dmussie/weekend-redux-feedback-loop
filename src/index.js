import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const defaultFeedback = {feeling: '', understanding: '', support: '', comments:''};

const feelingReducer = (state = defaultFeedback, action) => {
    if (action.type === 'ADD_FEELING') {
        return {...state, feeling: action.payload.feeling};
    }
    return state;
}

const understandingReducer = (state = defaultFeedback, action) => {
    if (action.type === 'ADD_UNDERSTANDING') {
        return {...state, understanding: action.payload.understanding};
    }
    return state;
}

const supportReducer = (state = defaultFeedback, action) => {
    if (action.type === 'ADD_SUPPORT') {
        return {...state, support: action.payload.support};
    }
    return state;
}

const commentReducer = (state = defaultFeedback, action) => {
    if (action.type === 'ADD_COMMENT') {
        return {...state, comment: action.payload.support};
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
