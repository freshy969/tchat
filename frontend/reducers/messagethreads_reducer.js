import { RECEIVE_MESSAGETHREADS } from '../actions/message_actions';
import merge from 'lodash/merge';

export default function messagethreadsReducer(state={}, action){
  switch(action.type){
    case RECEIVE_MESSAGETHREADS:
      return action.messagethreads
    default:
      return state;
  }
}
