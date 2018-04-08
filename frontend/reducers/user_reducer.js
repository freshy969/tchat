import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

export default function userReducer(state = {}, action){
  switch(action.type){
    case RECEIVE_USER:
      return merge({}, state, action.user);
    default:
      return state;
  }
}
