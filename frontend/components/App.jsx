import React from 'react';
import WelcomeContainer from './welcome/welcome_container';
import LoginFormContainer from './login_form/login_form_container'
import SignupFormContainer from './login_form/signup_form_container'
import NavBarContainer from './navbar/navbar_container'
import { Route } from 'react-router'
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import Footer from './footer';
import UserProfileContainer from './user/my_profile_container';
import TheirProfileContainer from './user/their_profile_container';

const App = () => (
  <div className="page">
    <AuthRoute path="/" component={WelcomeContainer} />
    <ProtectedRoute path="/" component={NavBarContainer} />
    <ProtectedRoute path="/profile" component={UserProfileContainer} />
    <ProtectedRoute path="/users/:id" component={TheirProfileContainer} />
    <Footer />
  </div>
);

export default App;


// <ProtectedRoute exact path={`/users`} component={UserIndexContainer} />
// <ProtectedRoute exact path={`/users/:id`} component={UserShowContainer} />
