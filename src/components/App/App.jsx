import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportedForm from '../SupportedForm/SupportedForm';
import CommentsForm from '../CommentsForm/CommentsForm';
import FeedbackReview from '../FeedbackReview/FeedbackReview';
import ThankYou from '../ThankYou/ThankYou';

function App() {

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
          <CommentsForm />
        </Route>
        <Route exact path="/review">
          <FeedbackReview />
        </Route>
        <Route exact path="/thankyou">
          <ThankYou />
        </Route>
      </Router>
      
    </div>
  );
}

export default App;
