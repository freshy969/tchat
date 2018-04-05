import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../login_form/login_form_container'
import SignupFormContainer from '../login_form/signup_form_container'

const sessionLinks = () => (
  <nav className="login-signup">
    <div className="login">
      <span>Have an account?</span>
      <Link to="/login" className="signin js-modal-open">Sign In</Link>
    </div>
    <div className="signup">
      <Link to="/signup" className="signups js-modal-open">Join Today</Link>
    </div>
  </nav>
);

const personalWelcome = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Welcome = ({ currentUser, logout }) => (
  currentUser ? personalWelcome(currentUser, logout) : sessionLinks()
);

export default Welcome;
