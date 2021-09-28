import axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// this component compiles user feedback responses and posts them to the DOM
function FeedbackReview() {
    // we have variables set up for each form which utilized the useSelector hook 
    // to extract data from our Redux store state reducers
    // initially established in the index.jsx
    const feelingFeedback = useSelector ( store => store.feelingReducer );
    const understandingFeedback = useSelector ( store => store.understandingReducer);
    const supportFeedback = useSelector ( store => store.supportReducer);
    const commentsFeedback = useSelector ( store => store.commentsReducer);
    const history = useHistory();
    const handleReview = () => {
        
        // this is a axios POST request that calls all of the users feedback data in each form category
        // and sends the data to the server, which is finally sent to our database for long-term storage 
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
        // we can navigate to the final thank you page upon final user review and submit
        history.push('/thankyou');
    }
    
    // this return presents all of the user's feedback responses on the DOM
    // upon click of the submit button, the feedback reponses are sent on to be added to the database
    return (
        <div>
            <header>
                <h1>Review Your Feedback</h1>
            </header>

            <div>
                <p>Feeling: {feelingFeedback.feeling}</p>
                <p>Understanding: {understandingFeedback.understanding}</p>
                <p>Support: {supportFeedback.support}</p>
                <p>Comments: {commentsFeedback.comments}</p>
            </div>
            <button onClick={handleReview}>Submit</button>
        </div>
    )
}

export default FeedbackReview;