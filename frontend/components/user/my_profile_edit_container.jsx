import { connect } from 'react-redux';
import React from 'react';
import { requestUser } from '../../actions/user_actions';
import ProfileEdit from './my_profile_edit';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestUser: (user) => dispatch(requestUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
