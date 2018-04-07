import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ currentUser, userOn,  }) => {

  const sessionLinks = () => (
  <div className="user">

  </div>
  );

  const personalWelcome = () => (
  	<header className="header-group">
      <div className="left-nav">
        <img className="navlogo" src="assets/tchat-logo.png"/>
      </div>
      <div className="right-nav">
        <h2 className="header-name">Hi, {currentUser.username}!</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
      </div>
  	</header>
  );

  return
};

export default User;
