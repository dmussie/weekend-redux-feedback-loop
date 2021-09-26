import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

function FeelingForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [feeling, setFeelingResponse] = useState('');

    const handleNextButton = (event) => {
        event.preventDefault();
        const action = {
            type: 'SET_FEEDBACK_LIST',
            payload: {
                feeling: feeling
            }
        }
        dispatch(action);
        history.push('/understanding');
    }
    
    return (
        <div>
            <form onSubmit={handleNextButton}>
                <div>
                    <h2>How are you feeling today?</h2>
                    <h4>Feeling?</h4>
                    <input 
                    required
                    value={feeling}
                    onChange={(event => setFeelingResponse(event.target.value))}
                    type='number'
                    />
                </div>
                <button type='Submit'>NEXT</button>
            </form>
        </div>
    )
}

export default FeelingForm;