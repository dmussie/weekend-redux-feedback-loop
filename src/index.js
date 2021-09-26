//Here I'm linking all the neccessary dependencies I'll use on this file
//These dependencies will enable all the actions I want to initiate on this file
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// this variable defines all of my feedback inputs from the start
// the empty strings will enable the user to add their feedback scores to a specified defined property
const defaultFeedback = {feeling: '', understanding: '', support: '', comments:''};

// this reducer allows the user to add a score to the form which scores how a user is feeling
// the if conditionals check for if a user wants to add a new score to an object property to be passed on  
// or if this score will be cleared for the next set of feedback
const feelingReducer = (state = defaultFeedback, action) => {
    if (action.type === 'ADD_FEELING') {
        return {...state, feeling: action.payload.feeling};
    }
    if (action.type === 'CLEAR_ALL_FEEDBACK') {
        return {};
    }
    return state;
}

// this reducer allows the user to add a score to the form which scores a user's understanding of the material
// the if conditionals check for if a user wants to add a new score to an object property to be passed on  
// or if this score will be cleared for the next set of feedback
const understandingReducer = (state = defaultFeedback, action) => {
    if (action.type === 'ADD_UNDERSTANDING') {
        return {...state, understanding: action.payload.understanding};
    }
    if (action.type === 'CLEAR_ALL_FEEDBACK') {
        return {};
    }
    return state;
}

// this reducer allows the user to add a score to the form which scores how much support a user is receiving
// the if conditionals check for if a user wants to add a new score to an object property to be passed on  
// or if this score will be cleared for the next set of feedback
const supportReducer = (state = defaultFeedback, action) => {
    if (action.type === 'ADD_SUPPORT') {
        return {...state, support: action.payload.support};
    }
    if (action.type === 'CLEAR_ALL_FEEDBACK') {
        return {};
    }
    return state;
}

// this reducer allows the user to add any additional comments at the end
const commentsReducer = (state = defaultFeedback, action) => {
    if (action.type === 'ADD_COMMENTS') {
        return {...state, comments: action.payload.comments};
    }
    if (action.type === 'CLEAR_ALL_FEEDBACK') {
        return {};
    }
    return state;
}

// at this stage we can create a reduxStore that will compile all of our reducers in one space temporarily
// at this point, user feedback data will be stored as the user completes the survey until the end 
// where this data is submitted for longer term storage in a database
// the applyMiddleware logger function assisted the developer run tests on the console
const reduxStore = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer
    }),
    applyMiddleware(logger)
);

// this action enables us to render our reduxStore data to the DOM
ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
