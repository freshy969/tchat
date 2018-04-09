import { RECEIVE_USER, REMOVE_USER_FROM_STATE } from '../actions/user_actions';
import merge from 'lodash/merge';

export default function userReducer(state = {}, action){
  switch(action.type){
    case RECEIVE_USER:
      return merge({}, state, action.user);
    case REMOVE_USER_FROM_STATE:
      return {};
    default:
      return state;
  }
}
