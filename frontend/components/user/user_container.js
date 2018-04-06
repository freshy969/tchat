import { connect } from 'react-redux';
import React from 'react';
import { requestUser } from '../../actions/user_actions';
import User from './user';

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestUser: (user) => dispatch(requestUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
