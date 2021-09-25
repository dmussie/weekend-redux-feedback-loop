import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import FeelingForm from '../FeelingForm/FeelingForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import SupportedForm from '../SupportedForm/SupportedForm';
import CommentForm from '../CommentForm/CommentForm';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path="/feeling">
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
      </Router>
      
    </div>
  );
}

export default App;
