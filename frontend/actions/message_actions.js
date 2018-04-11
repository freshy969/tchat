import * as MESSAGEUtil from '../util/message_api_util';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_MESSAGETHREAD = 'RECEIVE_MESSAGETHREAD';
export const REMOVE_MESSAGE_FROM_STATE = 'REMOVE_MESSAGE_FROM_STATE';

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const receiveMessagethread = messagethread => ({
  type: RECEIVE_MESSAGETHREAD,
  messagethread
});

export const requestMessage = id => dispatch => (
  MESSAGEUtil.fetchMessage(id).then(message=>(
    dispatch(receiveMessage(message))
  ))
);

export const requestMessagethread = id => dispatch => (
  MESSAGEUtil.fetchMessagethread(id).then(messagethread=>(
    dispatch(receiveMessagethread(messagethread))
  ))
);
