import { RECEIVE_USERS } from '../actions/user_actions';
import merge from 'lodash/merge';

export default function usersReducer(state = {}, action){
  switch(action.type){
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    default:
      return state;
  }
}
