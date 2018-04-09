import { connect } from 'react-redux';
import React from 'react';
import { login, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Demo',
    linkType: '/signup',
    message: 'Let\'s Go!',
    username: 'Demo',
    password: 'password'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    requestUsers: () => dispatch(requestUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
