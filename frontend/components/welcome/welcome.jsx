import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link>
    <Link to="/signup">Join Today!</Link>
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
