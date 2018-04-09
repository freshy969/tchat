import { connect } from 'react-redux';
import React from 'react';
import { requestUsers } from '../../actions/user_actions';
import UserIndex from './user_index';
import values from 'lodash/values';
import { selectUsers } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  users: selectUsers(state)
});

const mapDispatchToProps = dispatch => {
  return {
    requestUsers: () => dispatch(requestUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);
