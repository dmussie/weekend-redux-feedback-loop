import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

function UnderstandingForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [understanding, setUnderstandingResponse] = useState(0);

    const handleNextButton = (event) => {
        event.preventDefault();
        const action = {
            type: 'SET_RESPONSE_LIST',
            payload: {
                understanding: understanding,
            }
        }
        dispatch(action);
        history.push('/support'); 
    }
    return (
        <div>
            <form onSubmit={handleNextButton}>
                <div>
                    <h4>Support?</h4>
                    <input value={understanding}
                    onChange={(event => setUnderstandingResponse(event.target.value))}
                    type='number'
                    placeholder='0' />
                </div>
                <button type='Submit'>NEXT</button>
            </form>
        </div>
    )
}

export default UnderstandingForm;
