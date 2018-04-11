import { connect } from 'react-redux';
import React from 'react';
import { login, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import { requestUsers } from '../../actions/user_actions';
import { requestMessages, requestMessagethreads} from '../../actions/message_actions';


const mapStateToProps = (state) => {
  return {
    errors: state.errors.session || [],
    formType: 'Sign in',
    linkType: '/signup',
    message: 'Let\'s Go!',
    username: '',
    password: '',
    users: []
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
    requestUsers: () => dispatch(requestUsers()),
    requestMessages: () => dispatch(requestMessages()),
    requestMessagethreads: () => dispatch(requestMessagethreads())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
