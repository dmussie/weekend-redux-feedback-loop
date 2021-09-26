import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

function ThankYou() {
    const feelingFeedback = useSelector ( store => store.feelingReducer );
    const understandingFeedback = useSelector ( store => store.understandingReducer);
    const supportFeedback = useSelector ( store => store.supportReducer);
    const commentsFeedback = useSelector ( store => store.commentsReducer);
    const dispatch = useDispatch();
    const history = useHistory();
    
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
        history.push('/');
    }
    return (
        <div>
            <h1>Thank You!</h1>
            <button onClick={handleNewFeedbackButton}>Leave New Feedback</button>
        </div>
    )
}

export default ThankYou;