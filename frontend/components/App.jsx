import React from 'react';
import WelcomeContainer from './welcome/welcome_container';
import LoginFormContainer from './login_form/login_form_container';
import SignupFormContainer from './login_form/signup_form_container';
import NavBarContainer from './navbar/navbar_container';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import Footer from './footer';
import UserProfileContainer from './user/my_profile_container';
import UserProfileEditContainer from './user/my_profile_edit_container';
import UserIndexContainer from './user/user_index_container';
import TheirProfileContainer from './user/their_profile_container';
import MessagingContainer from './messaging/messaging_container';

const App = () => (
  <div className="page">
    <ProtectedRoute path="/" component={NavBarContainer} />
    <AuthRoute path="/welcome" component={WelcomeContainer} />
    <Switch>
      <ProtectedRoute path="/users/:userId" component={TheirProfileContainer} />
      <ProtectedRoute path="/users" component={UserIndexContainer} />
      <ProtectedRoute path="/profile/edit" component={UserProfileEditContainer} />
      <ProtectedRoute path="/messaging" component={MessagingContainer} />
      <ProtectedRoute path="/" component={UserProfileContainer} />
    </Switch>
    <Footer />
  </div>
);

export default App;


// <ProtectedRoute exact path={`/users`} component={UserIndexContainer} />
// <ProtectedRoute exact path={`/users/:id`} component={UserShowContainer} />
