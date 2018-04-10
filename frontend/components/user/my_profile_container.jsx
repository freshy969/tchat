import { connect } from 'react-redux';
import React from 'react';
import { requestUser } from '../../actions/user_actions';
import Profile from './my_profile';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestUser: (id) => dispatch(requestUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
