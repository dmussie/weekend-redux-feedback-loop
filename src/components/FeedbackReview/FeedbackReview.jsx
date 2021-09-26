import axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function FeedbackReview() {
    const reduxStore = useSelector ( store => store );
    const dispatch = useDispatch();
    const history = useHistory();
    const handleReview = () => {
        const action = { type: 'CLEAR_ALL_RESPONSES' }
        dispatch(action);

        axios({
            method: 'POST',
            url: '/response',
            data: {
                feeling: feeling,
                understanding: understanding,
                support: support,
                comments: comments
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

            <div key={reduxStore.responseList.id}>
                <p>{reduxStore.responseList.feeling}</p>
                <p>{reduxStore.responseList.understanding}</p>
                <p>{reduxStore.responseList.support}</p>
                <p>{reduxStore.responseList.comments}</p>
            </div>
            <button onClick={handleReview}>Submit</button>
        </div>
    )
}

export default FeedbackReview;