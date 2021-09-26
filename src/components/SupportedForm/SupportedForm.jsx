import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

function SupportedForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [support, setSupportResponse] = useState('');

    const handleNextButton = (event) => {
        event.preventDefault();
        const action = {
            type: 'ADD_SUPPORT',
            payload: {
                support: support
            }
        }
        dispatch(action);
        history.push('/comments');
    }
    return (
        <div>
            <form onSubmit={handleNextButton}>
                <div>
                    <h2>How well are you being supported?</h2>
                    <h4>Support?</h4>
                    <input 
                    required
                    value={support}
                    onChange={(event => setSupportResponse(event.target.value))}
                    type='number'
                    /> 
                </div>
                <button type='Submit'>NEXT</button>
            </form>
        </div>
    )
}

export default SupportedForm;