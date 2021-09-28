import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

// this function contains the form for the understanding portion of the feedback survey
function UnderstandingForm() {
    // creating a variable to call useDispatch function from the Redux store 
    // to send actions to a targeted destination
    const dispatch = useDispatch();
    // creating a variable to call useHistory hook
    // we can use this hook to navigate from page to page
    const history = useHistory();
    // created a const variable with the understanding input and the onChange event defined and
    // set to a default state of an empty string, which will contain the user's feedback score
    const [understanding, setUnderstandingResponse] = useState('');

    // this is a click handler function which enables the click action of this page 
    // the event (the user input) is passed
    const handleNextButton = (event) => {
        // when operating in a form, we need to include a preventDefault 
        // prevents default behavior from occurring in React 
        event.preventDefault();
        // we call our action which includes what specific action we want to perform
        // it also includes our payload, which is our value we want to collect and pass forward
        const action = {
            type: 'ADD_UNDERSTANDING',
            payload: {
                understanding: understanding
            }
        }
        dispatch(action);
        // navigate to the support form page
        history.push('/support'); 
    }
    // this return will display our entire form to the DOM
    // this includes an input field for the user to add feedback
    // this also includes a next button to navigate to the next page
    // and save the user's response to be submitted to the server
    return (
        <div>
            <form onSubmit={handleNextButton}>
                <div>
                    <h2>How well are you understanding the content?</h2>
                    <h4>Understanding?</h4>
                    <input 
                    required
                    min='1'
                    max='5'
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

// this exports the form to App.jsx
export default UnderstandingForm;
