import React from 'react';
import { Link } from 'react-router-dom';
import MessagethreadIndexItem from './messagethread_index_item';
import MessageIndexItem from './message_index_item';

class Messaging extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.requestMessages();
    this.props.requestMessagethreads();
  }

  render() {
    console.log(this.props);
    return(
      <header className="message-container">
        <div className="messagethread-index-container">
          {this.props.messagethreads.map(messagethread => <MessagethreadIndexItem currentUserId={this.props.currentUser.id} key={messagethread.id} messagethread={messagethread} />)}
        </div>
        <div className="messages-container">
          {this.props.messages.map(message => <MessageIndexItem currentUserId={this.props.currentUser.id} message={message}/>)}
        </div>
      </header>
    )
  }
}

export default Messaging;
