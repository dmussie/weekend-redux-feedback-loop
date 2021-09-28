import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Button from '@material-ui/core/Button';

function ThankYou() {
    // here, we call each redux store reducer
    const feelingFeedback = useSelector ( store => store.feelingReducer );
    const understandingFeedback = useSelector ( store => store.understandingReducer);
    const supportFeedback = useSelector ( store => store.supportReducer);
    const commentsFeedback = useSelector ( store => store.commentsReducer);
    const dispatch = useDispatch();
    const history = useHistory();
    // this click handler calls the clear action for each redux reducer first established in index.jsx
    const handleNewFeedbackButton = (event) => {
        const action = {
            type: 'CLEAR_ALL_FEEDBACK',
            payload: {
                feeling: feelingFeedback.feeling,
                understanding: understandingFeedback.understanding,
                support: supportFeedback.support,
                comments: commentsFeedback.comments
            }   
        }
        dispatch(action);
        // this navigates us back to the home page
        history.push('/');
    }
    // On click, the Redux store is cleared for the next round of user responses
    // and we navigate back to the home page for the next round of user responses
    return (
        <div>
            <h1>Thank You!</h1>
            <button onClick={handleNewFeedbackButton}>Leave New Feedback</button>
        </div>
    )
}

export default ThankYou;