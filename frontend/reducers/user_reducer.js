import { RECEIVE_USER } from '../actions/user_actions';

export default function userReducer(state = {}, action){
  switch(action.type){
    case RECEIVE_USER:
      return action.user;
    default:
      return state;
  }
}
