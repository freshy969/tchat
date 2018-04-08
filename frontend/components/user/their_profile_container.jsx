import { connect } from 'react-redux';
import React from 'react';
import { requestUser } from '../../actions/user_actions';
import TheirProfile from './their_profile';
import values from 'lodash/values';

const mapStateToProps = (state, ownProps) => {
  return {
    user: values(state.user)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestUser: (id) => dispatch(requestUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TheirProfile);
