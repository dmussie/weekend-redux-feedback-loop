import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

function CommentForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const [comment, setCommentResponse] = useState('');

    const handleNextButton = (event) => {
        event.preventDefault();
        const action = {
            type: 'SET_RESPONSE_LIST',
            payload: {
                comment: comment
            }
        }
        dispatch(action);
        history.push('/review');
    }
    return (
        <div>
            <form onSubmit={handleNextButton}>
                <div>
                   <h3>Any comments you want to leave?</h3>
                   <h4>Comments</h4>
                   <input value={comment}
                   onChange={(event => setCommentResponse(event.target.value))}
                   type='text'
                   placeholder='Let us know!' /> 
                </div>
                <button type='Submit'>NEXT</button>
            </form>
        </div>
    )

}

export default CommentForm;