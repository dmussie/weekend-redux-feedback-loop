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
            type: 'ADD_FEELING',
            payload: {
                feeling: feeling
            }
        }
        dispatch(action);
        history.push('/understanding');
    }
    // the element contains an onSubmit action 
    // which will be enabled on the click of the Next button
    // the input field requires data and will not allow the user to leave it blank
    // the onChange event detects when the value of the input changes
    // and will take into the account of the exact value in the input field
    // with the target.event.value input in setFeelingResponse 
    return (
        <div>
            <form onSubmit={handleNextButton}>
                <div>
                    <h2>How are you feeling today?</h2>
                    <h4>Feeling?</h4>
                    <input 
                    required
                    min='1'
                    max='5'
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