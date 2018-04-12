import { RECEIVE_CURRENT_MESSAGETHREAD_ID } from '../actions/message_actions';
import merge from 'lodash/merge';

export default function currentMessagethreadsReducer(state=3, action){
  switch(action.type){
    case RECEIVE_CURRENT_MESSAGETHREAD_ID:
      return action.messagethreadId;
    default:
      return state;
  }
};
