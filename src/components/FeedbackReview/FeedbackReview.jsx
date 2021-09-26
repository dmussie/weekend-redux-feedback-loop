import axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function FeedbackReview() {
    const feelingFeedback = useSelector ( store => store.feelingReducer );
    const understandingFeedback = useSelector ( store => store.understandingReducer);
    const supportFeedback = useSelector ( store => store.supportReducer);
    const commentFeedback = useSelector ( store => store.commentReducer);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleReview = () => {
        const action = { type: 'CLEAR_ALL_FEEDBACK' }
        dispatch(action);

        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: feelingFeedback,
                understanding: understandingFeedback,
                support: supportFeedback,
                comments: commentFeedback
            }
        }).then((response) => {
            console.log('feedback complete!');
            alert('Feedback received!');
        }).catch((error) => {
            alert('Could Not Receive Order!')
        })

        history.push('/thankyou');
    }
    return (
        <div>
            <header>
                <h1>Review Your Feedback</h1>
            </header>

            <div>
                <p>{feelingFeedback.feeling}</p>
                <p>{understandingFeedback.understanding}</p>
                <p>{supportFeedback.support}</p>
                <p>{commentFeedback.comments}</p>
            </div>
            <button onClick={handleReview}>Submit</button>
        </div>
    )
}

export default FeedbackReview;