import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportedForm from '../SupportedForm/SupportedForm';
import CommentForm from '../CommentForm/CommentForm';
import FeedbackReview from '../FeedbackReview/FeedbackReview';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();

  const fetchFeedback = () => {
    axios({
      method: 'GET',
      url: '/feedback'
    }).then(response => {
      console.log(response.data);
      dispatch({
        type: 'SET_FEEDBACK_LIST',
        payload: response.data
      });
    });
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path="/">
          <FeelingForm />
        </Route>
        <Route exact path="/understanding">
          <UnderstandingForm />
        </Route>
        <Route exact path="/support">
          <SupportedForm />
        </Route>
        <Route exact path="/comments">
          <CommentForm />
        </Route>
        <Route exact path="/review">
          <FeedbackReview />
        </Route>
      </Router>
      
    </div>
  );
}

export default App;
