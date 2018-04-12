import React from 'react';
import { Link } from 'react-router-dom';

class MessagethreadIndexItem extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    return(
    <li className="messagethread-index-item">
      <div className="messagethread-index-link">
        <img src={(this.props.messagethread.initiator_id===this.props.currentUserId? this.props.messagethread.receiver_profpic : this.props.messagethread.initiator_profpic) || 'http://res.cloudinary.com/dyv6nxcqz/image/upload/v1523398897/default.jpg'}/>
        <br/>
        <span>{this.props.messagethread.initiator_id===this.props.currentUserId? this.props.messagethread.receiver_name : this.props.messagethread.initiator_name}</span>
        <br/>
        <span>{this.props.messagethread.initiator_id===this.props.currentUserId? this.props.messagethread.receiver_pronouns : this.props.messagethread.initiator_pronouns}</span>
        <br/>
        <span>{this.props.messagethread.last_message_sent}</span>
        <br/>
        <span>{this.props.messagethread.last_message}</span>
        <br/>
      </div>
    </li>
  )
  }

}

export default MessagethreadIndexItem;
