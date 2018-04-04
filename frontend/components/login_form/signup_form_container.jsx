import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';


const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    linkType: '/login',
    message: 'Already have an account? Login silly.'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
