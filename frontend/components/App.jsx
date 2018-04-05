import React from 'react';
import WelcomeContainer from './welcome/welcome_container';
import LoginFormContainer from './login_form/login_form_container'
import SignupFormContainer from './login_form/signup_form_container'
import {Route} from 'react-router'
import { AuthRoute} from '../util/route_util';

const App = () => (
  <div>
    <header>
      <span className="logo">tChat</span>
      <h1>YOU DESERVE <br></br> BETTER</h1>
      <p>On T-Chat, you’re more than just a gender. You <br></br>
        have stories to tell, and passions to share, and <br></br>
        things to talk about that are more interesting than <br></br>
        the weather. Get noticed for who you are, not <br></br>
        what you look like. Because you deserve what dating <br></br>
        deserves: better.</p>
      <WelcomeContainer />
      <form className="fakeforms">
        <p>You Are A</p>
        <div className="forms">
          <div className="fakeform">
            <select name="sexuality">
              <option value="valid">Valid</option>
              <option value="beautiful">Beautiful</option>
              <option value="fierce">Fierce</option>
              <option value="witty">Witty</option>
            </select>
          </div>

          <div className="fakeform">
            <select name="gender">
              <option value="person">Person</option>
              <option value="person">Person</option>
              <option value="person">Person</option>
              <option value="person">Person</option>
            </select>
          </div>
        </div>
      </form>
    </header>
    <br></br>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
