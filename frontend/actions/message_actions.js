import * as MESSAGEUtil from '../util/message_api_util';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGE';
export const RECEIVE_MESSAGETHREADS = 'RECEIVE_MESSAGETHREAD';
export const RECEIVE_CURRENT_MESSAGETHREAD_ID = 'RECEIVE_CURRENT_MESSAGE_THREAD_ID';

export const receiveMessagethreads = messagethreads => ({
  type: RECEIVE_MESSAGETHREADS,
  messagethreads
});

export const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

export const receiveCurrentMessagethreadId = messagethreadId => ({
  type: RECEIVE_CURRENT_MESSAGETHREAD_ID,
  messagethreadId
})

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

export const postNewMessage = (message) => dispatch => (
  MESSAGEUtil.postMessage(message).then(message => (
    dispatch(requestMessages())
  ))
);

export const postMessageThread = (messagethread) => dispatch => (
  MESSAGEUtil.postMessageThread(messagethread)
);
