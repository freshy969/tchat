import { connect } from 'react-redux';
import React from 'react';
import { requestUser } from '../../actions/user_actions';
import TheirProfile from './their_profile';

const mapStateToProps = (state, ownProps) => {
  const user = state.users[ownProps.match.params.userId];
  return {
    user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestUser: (id) => dispatch(requestUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TheirProfile);
