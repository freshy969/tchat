import React from 'react';
import { Link } from 'react-router-dom';
import { clearErrors } from '../../actions/session_actions';
import LoginFormContainer from '../login_form/login_form_container';
import SignupFormContainer from '../login_form/signup_form_container';


const Welcome = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <nav className="login-signup">
      <div className="login">
        <span>Have an account?</span>
        <button className="signin" onClick={() => openModal('login')}>Sign in</button>
      </div>
      <div className="signup">
        <button className="signups" onClick={() => openModal('signup')}>Join Today!</button>
      </div>
      <div className="demo-login">
        <button className="demo-signin" onClick={() => openModal('login')}>Demo</button>
      </div>
    </nav>
  );

  const personalWelcome = () => (
  	<hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
  	</hgroup>
  );

  return (currentUser ? personalWelcome(currentUser, logout) : sessionLinks());
};

export default Welcome;
