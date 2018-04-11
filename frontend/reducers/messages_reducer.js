import { RECEIVE_MESSAGES } from '../actions/message_actions';
import merge from 'lodash/merge';

export default function messageReducer(state={}, action){
  switch(action.type){
    case RECEIVE_MESSAGES:
      return merge({}, state, action.messages)
    default:
      return state;
  }
}
