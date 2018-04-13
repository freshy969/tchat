import { connect } from 'react-redux';
import React from 'react';
import MessageCreate from './message_create';
import { openModal, closeModal } from '../../actions/modal_actions';
import { selectMessages, selectMessagethreads } from '../../reducers/selectors';
import { requestMessages, requestMessagethreads, receiveCurrentMessagethreadId} from '../../actions/message_actions';


const mapStateToProps = (state) => {
  return {
    messages: selectMessages(state),
    messagethreads: selectMessagethreads(state),
    currentUser: state.session.currentUser,
    currentMessagethread: state.messagethreads[state.ui.currentMessagethread],
    sender_id: state.session.currentUser.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    requestUsers: () => dispatch(requestUsers()),
    requestMessages: () => dispatch(requestMessages()),
    requestMessagethreads: () => dispatch(requestMessagethreads())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageCreate);
