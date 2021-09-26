import axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function FeedbackReview() {
    const reduxStore = useSelector ( store => store.feedbackList );
    const dispatch = useDispatch();
    const history = useHistory();
    const handleReview = () => {
        const action = { type: 'CLEAR_ALL_FEEDBACK' }
        dispatch(action);

        axios({
            method: 'POST',
            url: '/feedback',
            data: reduxStore
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

            <div key={reduxStore.id}>
                <p>{reduxStore.feeling}</p>
                <p>{reduxStore.understanding}</p>
                <p>{reduxStore.support}</p>
                <p>{reduxStore.comments}</p>
            </div>
            <button onClick={handleReview}>Submit</button>
        </div>
    )
}

export default FeedbackReview;