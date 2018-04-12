import React from 'react';
import { Link } from 'react-router-dom';

class MessageIndexItem extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    return(
    <div className="message-index-item-container">
      <p className={this.props.currentUserId===this.props.message.sender_id? "Message-Sender" : "Message-Receiver"}>
        {this.props.message.message}
      </p>
    </div>
    )
  }

}

export default MessageIndexItem;
