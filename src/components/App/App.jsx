// We need to import all of our forms and components and other dependencies to render functionality
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
  // here we enable page headers for each of our pages
  // plus we declare a router with which contains each of our declared components that are wrapped in 
  // individual routes which have their exact paths specified which makes navigation possible
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

// we must always rememeber to export default our files to enable communication and data transport
// throughout a web application
export default App;
