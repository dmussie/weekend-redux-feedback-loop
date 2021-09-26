import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

// this function contains the form for the comments portion of the feedback survey
function CommentsForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const [comments, setCommentsResponse] = useState('');

    const handleNextButton = (event) => {
        event.preventDefault();
        const action = {
            type: 'ADD_COMMENTS',
            payload: {
                comments: comments
            }
        }
        dispatch(action);
        history.push('/review');
    }
    // comments are not required for this survey 
    // so the input doesn't contained a required tag unlike the other forms
    return (
        <div>
            <form onSubmit={handleNextButton}>
                <div>
                   <h2>Any comments you want to leave?</h2>
                   <h4>Comments</h4>
                   <input value={comments}
                   onChange={(event => setCommentsResponse(event.target.value))}
                   type='text'
                   placeholder='Let us know!' /> 
                </div>
                <button type='Submit'>NEXT</button>
            </form>
        </div>
    )

}

export default CommentsForm;