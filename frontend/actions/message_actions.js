import * as MESSAGEUtil from '../util/message_api_util';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGE';
export const RECEIVE_MESSAGETHREADS = 'RECEIVE_MESSAGETHREAD';
export

export const receiveMessagethreads = messagethread => ({
  type: RECEIVE_MESSAGETHREADS,
  messagethread
});

export const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const requestMessages = () => dispatch => (
  MESSAGEUtil.fetchMessage(id).then(message=>(
    dispatch(receiveMessage(message))
  ))
);

export const requestMessagethreads = () => dispatch => (
  MESSAGEUtil.fetchMessagethread(id).then(messagethread=>(
    dispatch(receiveMessagethread(messagethread))
  ))
);
