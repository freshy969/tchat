import { connect } from 'react-redux';
import React from 'react';
import { requestUser } from '../../actions/user_actions';
import Profile from './their_profile';

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestUser: (user) => dispatch(requestUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
