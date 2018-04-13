import { connect } from 'react-redux';
import React from 'react';
import { requestUser, removeUserState } from '../../actions/user_actions';
import TheirProfile from './their_profile';
import values from 'lodash/values';
import {receiveCurrentMessagethreadId} from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestUser: (id) => dispatch(requestUser(id)),
    removeUserState: () => dispatch(removeUserState()),
    receiveCurrentMessagethreadId: (id) => dispatch(receiveCurrentMessagethreadId(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TheirProfile);
