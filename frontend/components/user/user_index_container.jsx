import { connect } from 'react-redux';
import React from 'react';
import { requestUsers } from '../../actions/user_actions';
import UserIndex from './user_index';
import values from 'lodash/values';

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestUsers: (id) => dispatch(requestUsers(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);
