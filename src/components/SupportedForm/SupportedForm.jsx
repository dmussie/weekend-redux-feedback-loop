import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

function SupportedForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [supported, setSupportedResponse] = useState('');

    const handleNextButton = (event) => {
        event.preventDefault();
        const action = {
            type: 'SET_RESPONSE_LIST',
            payload: {
                supported: supported
            }
        }
        dispatch(action);
        history.push('/comments');
    }
    return (
        <div>
            <form onSubmit={handleNextButton}>
                <div>
                   <h4>Support?</h4>
                   <input 
                   required
                   value={supported}
                   onChange={(event => setSupportedResponse(event.target.value))}
                   type='number'
                   /> 
                </div>
                <button type='Submit'>NEXT</button>
            </form>
        </div>
    )
}

export default SupportedForm;