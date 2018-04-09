import * as USERUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const REMOVE_USER_FROM_STATE = 'REMOVE_USER_FROM_STATE';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
});

export const removeUserFromState = () => ({
  type: REMOVE_USER_FROM_STATE,
});



export const requestUser = id => dispatch => (
  USERUtil.fetchUser(id).then(user => (
    dispatch(receiveUser(user))
  ))
);

export const requestUsers = () => dispatch => (
  USERUtil.fetchUsers().then(users => (
    dispatch(receiveUsers(users))
  ))
);
