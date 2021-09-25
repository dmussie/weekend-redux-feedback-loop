import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

function FeelingForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [feeling, setFeelingResponse] = useState(0);

    const handleNextButton = (event) => {
        event.preventDefault();
        const action = {
            type: 'SET_RESPONSE_LIST',
            payload: {
                feeling: feeling,
            }
        }
        dispatch(action);
        history.push('/understanding');
    }
    
    return (
        <div>
            <form onSubmit={handleNextButton}>
                <div>
                    <h4>Feeling?</h4>
                    <input value={feeling}
                    onChange={(event => setFeelingResponse(event.target.value))}
                    type='number'
                    placeholder='0'/>
                </div>
                <button type='Submit'>NEXT</button>
            </form>
        </div>
    )
}

export default FeelingForm;