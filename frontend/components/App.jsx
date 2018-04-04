import React from 'react';
import WelcomeContainer from './welcome/welcome_container';
import LoginFormContainer from './login_form/login_form_container'
import SignupFormContainer from './login_form/signup_form_container'
import {Route} from 'react-router'

const App = () => (
  <div>
    <h1>Welcome To T-Chat</h1>
    <h2>what's up</h2>
    <WelcomeContainer />
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
