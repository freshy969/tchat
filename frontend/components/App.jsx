import React from 'react';
import WelcomeContainer from './welcome/welcome_container';
import LoginFormContainer from './login_form/login_form_container'
import SignupFormContainer from './login_form/signup_form_container'
import {Route} from 'react-router'
import { AuthRoute} from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>Welcome To T-Chat</h1>
      <WelcomeContainer />
    </header>
    <br></br>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
