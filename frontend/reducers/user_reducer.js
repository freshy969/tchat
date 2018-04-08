import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';

export default function userReducer(state = {}, action){
  switch(action.type){
    case RECEIVE_USER:
      return action.user;
    case RECEIVE_USERS:
      return action.users;
    default:
      return state;
  }
}
