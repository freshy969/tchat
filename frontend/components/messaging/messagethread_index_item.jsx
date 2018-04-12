import React from 'react';
import { Link } from 'react-router-dom';
import {receiveCurrentMessagethreadId} from '../../actions/message_actions';

class MessagethreadIndexItem extends React.Component{

  constructor(props){
    super(props);
    this.receiveCurrent = this.receiveCurrent.bind(this);
  }

  receiveCurrent(){
    dispatch(receiveCurrentMessagethreadId(this.props.messagethread.id));
  }

  render(){
    return(
    <button onClick={this.receiveCurrent} className="messagethread-index-item">
      <div className="messagethread-index-left">
        <img src={(this.props.messagethread.initiator_id===this.props.currentUserId? this.props.messagethread.receiver_profpic : this.props.messagethread.initiator_profpic) || 'http://res.cloudinary.com/dyv6nxcqz/image/upload/v1523398897/default.jpg'}/>
      </div>
      <div className="messagethread-index-right">
        <div className="messagethread-index-topright">
          <span>{this.props.messagethread.initiator_id===this.props.currentUserId? this.props.messagethread.receiver_name : this.props.messagethread.initiator_name} | {this.props.messagethread.initiator_id===this.props.currentUserId? this.props.messagethread.receiver_pronouns : this.props.messagethread.initiator_pronouns}</span>
          <span className="mthreadindexlast">{this.props.messagethread.last_message_sent}</span>
        </div>
        <div className="messagethread-index-bottomright">
          <span>{this.props.messagethread.last_message}</span>
        </div>
      </div>
    </button>
    )
  }

}

export default MessagethreadIndexItem;
