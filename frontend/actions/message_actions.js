import * as MESSAGEUtil from '../util/message_api_util';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGE';
export const RECEIVE_MESSAGETHREADS = 'RECEIVE_MESSAGETHREAD';

export const receiveMessagethreads = messagethreads => ({
  type: RECEIVE_MESSAGETHREADS,
  messagethreads
});

export const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const requestMessages = () => dispatch => (
  MESSAGEUtil.fetchMessages().then(messages=>(
    dispatch(receiveMessages(messages))
  ))
);

export const requestMessagethreads = () => dispatch => (
  MESSAGEUtil.fetchMessagethreads().then(messagethreads=>(
    dispatch(receiveMessagethreads(messagethreads))
  ))
);
