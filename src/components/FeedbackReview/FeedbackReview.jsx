import axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function FeedbackReview() {
    const feelingFeedback = useSelector ( store => store.feelingReducer );
    const understandingFeedback = useSelector ( store => store.understandingReducer);
    const supportFeedback = useSelector ( store => store.supportReducer);
    const commentsFeedback = useSelector ( store => store.commentsReducer);
    const history = useHistory();
    const handleReview = () => {
        

        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: feelingFeedback.feeling,
                understanding: understandingFeedback.understanding,
                support: supportFeedback.support,
                comments: commentsFeedback.comments
            }
        }).then((response) => {
            console.log('feedback complete!');
            alert('Feedback received!');
        }).catch((error) => {
            alert('Could Not Receive Feedback!')
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
                <p>{commentsFeedback.comments}</p>
            </div>
            <button onClick={handleReview}>Submit</button>
        </div>
    )
}

export default FeedbackReview;