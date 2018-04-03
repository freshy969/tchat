import React from 'react';
import ReactDOM from 'react-dom';
import {login, signup, logout} from './util/session_api_util'
import configureStore from './store/store.js'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  const store = configureStore()
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<h1>Welcome to Tchat May I take your order please?</h1>, root);
});
