import React from 'react';
import ReactDOM from 'react-dom';
import {login, signup, logout} from './actions/session_actions'
import configureStore from './store/store.js'
import Root from './components/Root';
import {fetchUser, fetchUsers} from './util/user_api_util';
import {requestUsers, requestUser} from './actions/user_actions'

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {

    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.requestUsers = requestUsers;
  window.requestUser = requestUser;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
