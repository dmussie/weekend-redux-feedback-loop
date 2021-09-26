import axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function FeedbackReview() {
    const reduxStore = useSelector ( store => store );
    const dispatch = useDispatch();
    const history = useHistory();
    const handleReview = () => {
        const action = { type: 'CLEAR_ALL_RESPONSES' }
        dispatch(action);

        axios({
            method: 'POST',
            url: ''
        })
    }
    return (

    )
}