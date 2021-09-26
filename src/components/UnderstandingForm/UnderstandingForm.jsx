import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

function UnderstandingForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [understanding, setUnderstandingResponse] = useState('');

    const handleNextButton = (event) => {
        event.preventDefault();
        const action = {
            type: 'ADD_UNDERSTANDING',
            payload: {
                understanding: understanding
            }
        }
        dispatch(action);
        history.push('/support'); 
    }
    return (
        <div>
            <form onSubmit={handleNextButton}>
                <div>
                    <h2>How well are you understanding the content?</h2>
                    <h4>Understanding?</h4>
                    <input 
                    required
                    value={understanding}
                    onChange={(event => setUnderstandingResponse(event.target.value))}
                    type='number'
                    />
                </div>
                <button type='Submit'>NEXT</button>
            </form>
        </div>
    )
}

export default UnderstandingForm;
